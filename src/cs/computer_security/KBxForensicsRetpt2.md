---
title:   Forensics, pt2.
context: compsec
author:  Huxley Marvit
date: 2021-11-17
---

#ret  #hw  #incomplete

***

# Forensics!
forensics. 

stegsolve, try at home.
tried janky implimentation of lsb, outputs nonsense.
```py
from PIL import Image
import base64
im = Image.open('./fc13_images_pkg1/IMG_0447.png')
pixels = list(im.getdata())
bs = ''

def bits2a(b):
    # return ''.join(chr(int(''.join(x), 2)) for x in zip(*[iter(b)]*8))
    return str(base64.b16decode(hex(int(b, base=2))[2:],casefold=True))[2:-1]


for i in pixels:
    for j in i[:3]:
        bs += bin(j)[-1]

print(bits2a(bs))

```

perhaps look at solutions, or look for help from other people.
#review






























