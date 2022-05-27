---
title:   Data Topology
context: linalg
author:  Huxley Marvit
date: 2022-05-26
---

#flo #scratch  #inclass #hw

***

# Data! Topology! 
*what more can you ask for?*

## readings
### computing homology
→ [article](https://jeremykun.com/2013/04/10/computing-homology/)

- a *simplicial complex* can define a topo-space
	- essentially just think of it as glued together triangles (simplicies? are we just working in 2d?)
- something called *chains* which let us represent these simplicies in a vec space
- *boundry homomorphism* is a linmap on these chains?
- **homology groups** are defined as quotient spaces
	- $H_k(X)=\frac{{\ker \partial_k}}{\text{im} \partial_{k+1}}$ 
		- can think of this as removing the filled in space
		- the dim of this space gives us the number of holes in $X$
- we can represent stuff as matricies and then look at the dim of them

something about $C_x$ and spans?? of.. verticies? edges?? #question what is this

what are the $\partial_k$ matricies?

$\partial^2 = \partial_k \partial_{k+1} = 0$ ???

ohh, is it that boundry maps return to the same place when you traverse them again?
no that doesn't make sense..

row operations ←> changing basis for the range
column operations ←> changing basis for the domain



















































