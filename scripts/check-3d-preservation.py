"""Run from repo root: python scripts/check-3d-preservation.py."""
import re
import subprocess
from pathlib import Path

files = subprocess.check_output(['git', 'diff', '--name-only'], text=True).splitlines()
checked = 0
for name in files:
    if not name.endswith('.astro'):
        continue
    old = subprocess.check_output(['git', 'show', f'HEAD:{name}'], text=True)
    new = Path(name).read_text()
    def frontmatter(source):
        return re.sub(r'^import EditorialScene.*\n', '', source.split('---', 2)[1], flags=re.M)
    assert frontmatter(old) == frontmatter(new), f'data/meta/schema changed: {name}'
    def content(source):
        source = source.split('---', 2)[2]
        source = re.sub(r'<!--.*?-->', '', source, flags=re.S)
        source = re.sub(r'<[^>]+>', '', source)
        return re.sub(r'\s+', ' ', source).strip()
    assert content(old) == content(new), f'content changed: {name}'
    for attribute in ['href', 'src', 'id', 'name', 'placeholder', 'type']:
        pattern = rf'\b{attribute}=(?:"[^"]*"|\{{[^}}]*\}})'
        assert re.findall(pattern, old) == re.findall(pattern, new), f'{attribute} changed: {name}'
    checked += 1
assert checked >= 8, f'expected page/template scope, got {checked}'
assert subprocess.check_output(['git', 'diff', '--name-only', '--', 'lib', 'src/content', 'src/layouts', 'package.json', 'astro.config.mjs'], text=True) == ''
print(f'PASS: {checked} templates; copy, URLs, arrays, metadata, schema; content/data/config untouched')
