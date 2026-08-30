"""Harvest real Google Autocomplete suggestions (id-ID) for keyword research.

Autocomplete reflects actual query behaviour, unlike guessed keyword lists.
No volume figures — those need a paid tool. What this gives is *which phrasings
people actually type*, which is what determines whether a page matches intent.
"""
import json
import subprocess
import time
import urllib.parse
from pathlib import Path

OUT = Path("/tmp/kw.json")

SEEDS = [
    # commercial intent
    "jasa pembuatan website", "jasa bikin website", "biaya bikin website",
    "harga jasa website", "jasa seo", "jasa seo murah", "konsultan seo",
    "jasa website perusahaan", "jasa website toko online",
    # problem-aware (blog territory)
    "website lambat", "website tidak muncul di google", "cara agar website muncul di google",
    "kenapa website sepi", "website error", "loading website lama",
    # informational / how-to
    "cara membuat website", "cara optimasi seo", "cara riset kata kunci",
    "cara daftar google search console", "cara pasang google analytics",
    "cara membuat google bisnisku", "cara mempercepat website wordpress",
    # technical
    "core web vitals", "google pagespeed", "schema markup", "meta description",
    "backlink", "domain authority", "sitemap xml", "robots txt",
    # platform comparisons
    "wordpress vs", "website vs marketplace", "landing page adalah",
    "hosting terbaik indonesia", "beda seo dan sem",
    # local
    "jasa website medan", "seo lokal", "google maps bisnis",
]

# Alphabet soup: appending each letter surfaces long-tail variants the bare
# seed never shows.
MODIFIERS = [""] + list("abcdikmpst") + ["untuk", "berapa", "kenapa", "apakah"]


def fetch(query: str) -> list[str]:
    url = (
        "https://suggestqueries.google.com/complete/search"
        f"?client=firefox&hl=id&gl=id&q={urllib.parse.quote(query)}"
    )
    try:
        raw = subprocess.run(
            ["curl", "-s", "--max-time", "10", url],
            capture_output=True, text=True, check=False,
        ).stdout
        return json.loads(raw)[1]
    except Exception:
        return []


results: dict[str, list[str]] = {}
seen: set[str] = set()

for seed in SEEDS:
    bucket: list[str] = []
    for mod in MODIFIERS:
        q = f"{seed} {mod}".strip()
        for s in fetch(q):
            s = s.strip().lower()
            if s and s not in seen:
                seen.add(s)
                bucket.append(s)
        time.sleep(0.05)
    results[seed] = bucket
    print(f"{seed:40s} -> {len(bucket):4d} unique")

OUT.write_text(json.dumps(results, ensure_ascii=False, indent=1))
print(f"\ntotal unique queries: {len(seen)}")
print(f"saved: {OUT}")
