#!/usr/bin/env python3
"""Crawl a Next.js deployment and enforce public-route release basics."""
from __future__ import annotations
import json, re, sys
from html.parser import HTMLParser
from urllib.parse import urljoin, urlparse
from urllib.request import Request, urlopen

BASE = sys.argv[1].rstrip('/') if len(sys.argv) > 1 else 'http://127.0.0.1:3100'
EXPECTED_HOST = urlparse(BASE).netloc

class PageParser(HTMLParser):
    def __init__(self):
        super().__init__(); self.title=''; self._title=False; self.h1=0; self.main=0; self.ids=[]; self.links=[]; self.images=[]; self.canonical=[]; self.meta=[]
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if tag=='title': self._title=True
        if tag=='h1': self.h1+=1
        if tag=='main': self.main+=1
        if a.get('id'): self.ids.append(a['id'])
        if tag=='a' and a.get('href'): self.links.append(a['href'])
        if tag in ('img','script','iframe') and a.get('src'): self.images.append(a['src'])
        if tag=='link' and a.get('rel')=='canonical' and a.get('href'): self.canonical.append(a['href'])
        if tag=='meta': self.meta.append(a)
    def handle_endtag(self, tag):
        if tag=='title': self._title=False
    def handle_data(self, data):
        if self._title: self.title += data

def get(url):
    req=Request(url,headers={'User-Agent':'FitnessStaffingReleaseAudit/1.0'})
    with urlopen(req,timeout=20) as r: return r.status, dict(r.headers), r.read()

status, headers, body=get(BASE+'/sitemap.xml')
locs=re.findall(rb'<loc>(.*?)</loc>',body)
paths=[]
for raw in locs:
    path=urlparse(raw.decode()).path or '/'
    if path not in paths: paths.append(path)
failures=[]; pages=[]; resources=set(); links=set()
for path in paths:
    try:
        status, hdr, body=get(BASE+path)
        html=body.decode('utf-8','replace'); p=PageParser(); p.feed(html)
        duplicates=sorted({x for x in p.ids if p.ids.count(x)>1})
        row={'path':path,'status':status,'title':p.title.strip(),'h1':p.h1,'main':p.main,'canonical':p.canonical,'duplicateIds':duplicates}
        pages.append(row)
        if status!=200: failures.append(f'{path}: HTTP {status}')
        if not p.title.strip(): failures.append(f'{path}: missing title')
        if p.h1!=1: failures.append(f'{path}: expected 1 H1, got {p.h1}')
        if p.main!=1: failures.append(f'{path}: expected 1 main, got {p.main}')
        if len(p.canonical)!=1: failures.append(f'{path}: expected 1 canonical, got {len(p.canonical)}')
        if duplicates: failures.append(f'{path}: duplicate ids {duplicates}')
        for href in p.links:
            u=urljoin(BASE+path,href); parsed=urlparse(u)
            if parsed.netloc==EXPECTED_HOST and not parsed.fragment and not parsed.path.startswith('/api/'): links.add(parsed.path + (('?'+parsed.query) if parsed.query else ''))
        for src in p.images:
            u=urljoin(BASE+path,src); parsed=urlparse(u)
            if parsed.netloc==EXPECTED_HOST: resources.add(parsed.path + (('?'+parsed.query) if parsed.query else ''))
    except Exception as e: failures.append(f'{path}: {type(e).__name__}: {e}')
for kind, urls in [('link',links),('resource',resources)]:
    for path in sorted(urls):
        try:
            status,_,_=get(BASE+path)
            if status>=400: failures.append(f'{kind} {path}: HTTP {status}')
        except Exception as e: failures.append(f'{kind} {path}: {type(e).__name__}: {e}')
required=['content-security-policy','strict-transport-security','x-content-type-options','referrer-policy','permissions-policy']
_, home_headers, _=get(BASE+'/')
missing=[h for h in required if h not in {k.lower():v for k,v in home_headers.items()}]
if missing: failures.append('missing security headers: '+', '.join(missing))
report={'base':BASE,'sitemapRoutes':len(paths),'checkedInternalLinks':len(links),'checkedResources':len(resources),'securityHeaders':{h:next((v for k,v in home_headers.items() if k.lower()==h),None) for h in required},'pages':pages,'failures':failures}
print(json.dumps(report,indent=2))
sys.exit(1 if failures else 0)
