"""List the sentences two city pages share, longest first.

Knowing the duplicate percentage is not actionable; knowing *which* sentences
repeat is. Run this before deciding what to rewrite.
"""
import re
import subprocess
import sys


def prose(url: str) -> str:
    html = subprocess.run(
        ['curl', '-s', '-A', 'Mozilla/5.0', url],
        capture_output=True, text=True, timeout=60,
    ).stdout
    html = re.sub(r'(?is)<(script|style)[^>]*>.*?</\1>', ' ', html)
    return re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', ' ', html)).strip()


def sentences(text: str) -> set:
    return {s.strip() for s in re.split(r'(?<=[.!?])\s+', text) if len(s.strip()) > 40}


base = sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:4331'
a = sentences(prose(f'{base}/jasa-website-bengkel-las-medan/'))
b = sentences(prose(f'{base}/jasa-website-bengkel-las-makassar/'))

shared = sorted(a & b, key=len, reverse=True)
print(f'{len(shared)} kalimat identik antara dua kota:\n')
for s in shared:
    print(f'  [{len(s):4}] {s[:150]}')
