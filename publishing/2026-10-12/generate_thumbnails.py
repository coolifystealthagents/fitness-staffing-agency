import json,textwrap
from pathlib import Path
from PIL import Image,ImageDraw,ImageFont
ROOT=Path(__file__).resolve().parents[2];m=json.loads((ROOT/'publishing/2026-10-12/manifest.json').read_text());bold='/System/Library/Fonts/Supplemental/Arial Bold.ttf';regular='/System/Library/Fonts/Supplemental/Arial.ttf';pal=[((18,32,54),(41,169,157),(247,190,80)),((34,26,58),(121,91,180),(73,203,184)),((36,45,38),(83,153,91),(246,179,75)),((57,31,40),(184,75,103),(247,190,80))]
for i,a in enumerate(m['articles']):
 bg,accent,gold=pal[i%4];im=Image.new('RGB',(1200,630),bg);d=ImageDraw.Draw(im);d.rounded_rectangle((32,32,1168,598),24,outline=gold,width=3)
 for j in range(4):
  y=105+j*105;x=835+(i*31+j*29)%100;d.rounded_rectangle((x,y,x+255,y+64),24,outline=accent,width=4);d.ellipse((x+18,y+19,x+44,y+45),fill=gold);d.line((x+62,y+23,x+220,y+23),fill=accent,width=4);d.line((x+62,y+41,x+180,y+41),fill=gold,width=3)
 label='FITNESS STAFFING GUIDE' if a['section']=='Blog' else 'FITNESS STAFFING RESEARCH';d.rounded_rectangle((65,60,465,110),12,fill=accent);d.text((84,72),label,font=ImageFont.truetype(bold,21),fill='white')
 for size in range(48,29,-2):
  f=ImageFont.truetype(bold,size);lines=textwrap.wrap(a['title'],width=max(23,int(37*42/size)))
  if len(lines)<=4 and max(d.textbbox((0,0),x,font=f)[2] for x in lines)<700:break
 y=160
 for line in lines:d.text((65,y),line,font=f,fill='white');y+=size+12
 d.line((65,490,740,490),fill=gold,width=4);d.text((65,518),'Fitness Staffing Agency',font=ImageFont.truetype(bold,29),fill='white');d.text((65,558),'credentials  •  coverage  •  verified handoffs',font=ImageFont.truetype(regular,20),fill=accent)
 target=ROOT/a['thumbnailPath'];target.parent.mkdir(parents=True,exist_ok=True);im.save(target,'WEBP',quality=88,method=6)
print(f"Generated {len(m['articles'])} thumbnails")
