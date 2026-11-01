#!/usr/bin/env python3
"""Build Cover Page motion: light minify, SRI for each module, sizes. Usage: python3 tools/build_motion.py"""
import re, os, json, gzip, hashlib, base64, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC, OUT = os.path.join(ROOT, 'src/motion'), os.path.join(ROOT, 'dist/motion')
os.makedirs(OUT, exist_ok=True)
def mini(js):
    js = re.sub(r'/\*(?!!).*?\*/', '', js, flags=re.S)          # block comments, keep /*! */
    out = []
    for line in js.split('\n'):
        t = line.strip()
        if not t or t.startswith('//'):
            continue
        out.append(t)
    return '\n'.join(out) + '\n'
def sri(b): return 'sha384-' + base64.b64encode(hashlib.sha384(b).digest()).decode()
mods, rows = {}, []
for f in sorted(os.listdir(SRC)):
    if f.startswith('cpm-') and f.endswith('.js'):
        b = mini(open(os.path.join(SRC, f)).read()).encode()
        open(os.path.join(OUT, f), 'wb').write(b)
        mods[f[4:-3]] = sri(b); rows.append((f, len(b), len(gzip.compress(b, 9))))
loader = mini(open(os.path.join(SRC, 'cpm.js')).read()).replace('__SRI__', json.dumps(mods)).encode()
open(os.path.join(OUT, 'cpm.js'), 'wb').write(loader)
rows.insert(0, ('cpm.js', len(loader), len(gzip.compress(loader, 9))))
for r in rows: print('%-24s %7d B  gzip %6d B' % r)
print('loader SRI', sri(loader))
json.dump({'loader': sri(loader), 'modules': mods}, open(os.path.join(OUT, 'sri.json'), 'w'), indent=1)
