"""Measure duplicate content the way it actually matters: whole sentences.

Vocabulary overlap flatters and misleads. Two pages can share 92% of their
words while every sentence differs, or share 60% of words while being the same
boilerplate with nouns swapped. Near-duplicate detection works on shingles —
overlapping word runs — so that is what this measures.

Reports both, because the gap between them is itself the diagnosis.
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


def shingles(text: str, n: int = 8) -> set:
    w = text.split()
    return {' '.join(w[i:i + n]) for i in range(max(0, len(w) - n + 1))}


def sentences(text: str) -> set:
    return {s.strip() for s in re.split(r'(?<=[.!?])\s+', text) if len(s.strip()) > 40}


def compare(label: str, u1: str, u2: str) -> None:
    a, b = prose(u1), prose(u2)
    if not a or not b:
        print(f'{label}: GAGAL AMBIL')
        return

    wa, wb = set(a.split()), set(b.split())
    vocab = 100 * len(wa & wb) / max(len(wa), len(wb))

    sa, sb = shingles(a), shingles(b)
    shing = 100 * len(sa & sb) / max(len(sa), len(sb)) if sa and sb else 0

    ta, tb = sentences(a), sentences(b)
    sent = 100 * len(ta & tb) / max(len(ta), len(tb)) if ta and tb else 0

    print(f'{label}')
    print(f'  kosakata   {vocab:5.1f}%   (menyesatkan — ukur yang di bawah)')
    print(f'  shingle-8  {shing:5.1f}%   <- yang mendekati cara mesin menilai duplikat')
    print(f'  kalimat    {sent:5.1f}%   ({len(ta & tb)} dari {max(len(ta), len(tb))} kalimat identik)')


base = sys.argv[1] if len(sys.argv) > 1 else 'https://rafiq.biz.id'

compare('beda KOTA, niche sama',
        f'{base}/jasa-website-bengkel-las-medan/',
        f'{base}/jasa-website-bengkel-las-makassar/')
compare('beda NICHE, kota sama',
        f'{base}/jasa-website-bengkel-las-medan/',
        f'{base}/jasa-website-klinik-medan/')
