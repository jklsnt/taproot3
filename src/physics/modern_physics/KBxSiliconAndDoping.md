---
title:   Silicon and Doping!
context: modphys
author:  Huxley Marvit
date: 2021-10-21
---

#flo  #inclass 

***

# silicon!
*kinda dope, bro.*

n: stands for negative! BUT THE ACTUAL SILICON IS NEUTRAL
- there is a free electron, but it's not overall negative
	- extra electron electron can move around
	- but the extra element ALSO has an extra proton, so it cancels 

p: stand for positive! BUT it's also neutral
	- cus the things just cancel
	- same as n-type but opposite

n-type: electrons free to migrate
p-type: crystal structure need electrons to fill hole

put them next to eachother, u get a diffusion force
as the electrons from n move to fill the holes in p

space charge region: where the junction between the p-doped and n-doped meet, and cancel.
not very conductive! virtually, not even doped?

why is this useful? IDK. 

### why we care about junctions
*between p and n dopes regions*
application of external voltage to a junction:

base case:
`[p] [--] [n]`
if you put, 
`+ [p] [-] [n] -`
then the neutral region shrinks, because the charges on both ends "push" the electrons. 
this is called **forward bias** where bias is the external voltage from say a battery

the other direction, **reverse bias**
`- [p] [-] [n] +`
the neutral region expands!

```ad-def
title: AKA
nuetral region, depletion region, all the same.
```

**this means, current can flow one direction, but NOT THE OTHER WAY!**
like, a diode!
from LEDs.

- forward bias: reduce depletion region
- reverse bias: expand depletion region

forward bias is non-linera! there's a threshold where current jumps way up
scale of forward and reverse bias are not the same!

#question : avalanch breakdown vs zener breakdown. what are they? I don't know! neither does mark! #review

[i want one!](https://www.amazon.com/Silicon-Metal-99-999-Pure/dp/B08FVLJM8L)


```ad-def
title: a junction
an n-type and a p-type next to eachother
```

### types of transistors
#### NPN BJT
*n-type, p-type, n-type bipolar junction transistor*

-[N,P,N]-
\- \| -bat-\| +

this cant conduct, because their will nessasarily be forward bias in one direction and reverese bias in the other

```ad-qoute
positive to the p is forward bias -mark
```

so how do we get current to flow?

BJT has:
- base, collector, emitter
- base
	- coming back to this.. because it's hard to understand
	- voltage into the base relates to current?


#### MOSFET
**metal–oxide–semiconductor field-effect transistor**

![[MOSFET.png|400]]
the idea is that u can bridge these two n-regions? #review this..

can seperate n's with a capacitor, then u can charge the capacitor to connect the n-regions


```ad-important
**the point of transistors**:
tiny signals can be used to control much bigger signals.
```
effectively, on off switches, or, weak signal controlling strong signal

### switches!
so far, they have been physical! you gotta make the things touch!
but these arn't physical. and we have millions and millions inside our devices

and they can store info


[also wanna get this!](https://www.amazon.com/Silicon-Wafer-Single-Sided-Polish/dp/B08RZ5ZYNF/)









