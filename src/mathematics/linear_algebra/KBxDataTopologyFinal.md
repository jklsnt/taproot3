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

- we can change into rref, look at the pivot collumns (the ones which inform the dim of the range)
	- the span of the pivots represents the image, so we can use that as the denominator of our quotient group?

a nice formula for counting dimension? i dont understand why this is the case.

- computing homology is as simple as counting pivots in the simutaniously-reduced matricies
	- this man also provides code to straight up find the betti number
- 

### homology using linear algebra
→ [article](https://osebje.famnit.upr.si/~russ.woodroofe/joshua-dean.pdf)

- incidence matrix like adjacency matrix but encoding whether an edge enters or leaves a vertex (with -1 and 1 respectively)
	- and cycles in this graph are linearly dependent columns, so the number of LD columns is the number of cycles!
	- this is also called a signed incidence matrix
		- also work as linear transformations between the edge space, denoted as $C_1$, and the vertex space $C_0$ 
			- $\partial_{1}: C_{1} \to C_{0}$
- trees have no cycles, which means they have no holes, at least in $\tilde{H_1}$
- to navigate to higher dimensions we can create an SIM (signed incidence matrix) out of edges and *triangles*
	- ie. a higher-dimensional simplex



$\text{this is nice}$



[[KBxSort]]

end




























