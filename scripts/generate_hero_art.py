from pathlib import Path
import re, hashlib, html
root = Path(__file__).resolve().parents[1]
files = [root/'lib/content.ts', root/'lib/october-12/blogPosts.ts', root/'lib/october-12/researchPosts.ts']
text = '\n'.join(p.read_text(errors='ignore') for p in files)
slugs = set(re.findall(r'["\']slug["\']?\s*:\s*["\']([^"\']+)', text))
services = {'class-schedule-support','member-support','fitness-lead-follow-up','trainer-records','membership-admin','fitness-back-office'}
slugs.update(services | {'home','services','about','blog','research','contact-us'})
shapes = [
 '<circle cx="1010" cy="280" r="205" fill="none" stroke="#d9ff38" stroke-width="36"/><path d="M770 500h420M820 570h320" stroke="#fff" stroke-width="24"/>',
 '<path d="M720 170h420v420H720z" fill="none" stroke="#d9ff38" stroke-width="34"/><path d="M780 260h300M780 350h230M780 440h275" stroke="#fff" stroke-width="22"/>',
 '<path d="M720 520 860 190l120 250 100-180 120 260" fill="none" stroke="#d9ff38" stroke-width="38"/><circle cx="860" cy="190" r="28" fill="#fff"/>',
 '<path d="M720 250c110-110 230-110 340 0s210 110 310 0v300c-100 110-200 110-310 0s-230-110-340 0z" fill="#d9ff38" opacity=".85"/><path d="M770 330h500M770 420h410" stroke="#101417" stroke-width="24"/>'
]

def render(slug):
    digest = hashlib.sha256(slug.encode()).hexdigest()
    a, b = '#'+digest[:6], '#'+digest[6:12]
    label = slug.replace('-', ' ').title()
    motif = shapes[int(digest[12:14],16) % len(shapes)]
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="t d"><title id="t">{html.escape(label)}</title><desc id="d">Topic-specific fitness operations illustration for {html.escape(label)}</desc><defs><linearGradient id="g" x2="1" y2="1"><stop stop-color="{a}"/><stop offset="1" stop-color="{b}"/></linearGradient><pattern id="p" width="44" height="44" patternUnits="userSpaceOnUse"><path d="M44 0H0v44" fill="none" stroke="#fff" opacity=".11"/></pattern></defs><rect width="1600" height="900" fill="#101417"/><path d="M0 0h980L660 900H0z" fill="url(#g)"/><rect width="1600" height="900" fill="url(#p)"/><path d="M90 690h500" stroke="#d9ff38" stroke-width="18"/><text x="90" y="155" fill="#fff" font-family="Arial,sans-serif" font-size="30" font-weight="700" letter-spacing="7">FITNESS OPERATIONS</text><text x="90" y="260" fill="#fff" font-family="Arial,sans-serif" font-size="72" font-weight="800">{html.escape(label[:30])}</text>{motif}</svg>'''

for slug in sorted(slugs):
    target = root/'public/heroes'/f'{slug}.svg' if slug in services else root/'public/heroes/editorial'/f'{slug}.svg'
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(render(slug))
print(f'generated {len(slugs)} route-specific SVG heroes')
