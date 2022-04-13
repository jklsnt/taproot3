---
title:   Chapter 2C Reading
context: linalg
author:  Huxley Marvit
date: 2021-10-05
---

#flo #hw

***

# Dimension

- how should we define dimension?
	- should make the dimension of $F^n=n$
	- nice to define as the length of a basis 
		- all basis of a given vector space have the same length

```ad-important
basis len does not on basis
-> any two bases of a finite-dimension vector space have the same length
```
*cool proof!*

- V is finite dimensional
- $B_1$ and $B_2$ both bases of $V$. 
- Thus, $B_1$ is linearly independent in $V$ and $B_2$ spans $V$
	-  by @axler-2.23 (len of lin indepedent list $\leq$ len of spanning list)
	-  len($B_1$) $\leq$ len($B_2$)
	-  swap $B_1$ and $B_2$
		- len($B_2$) $\leq$ len($B_1$)  
		- therefore, $B_1$ and $B_2$ need to be of equal len.

```ad-def
title: dimension
the *dimension* of a finite-dimensional vector space is the len of any basis of the vector space.
denoted as dim $V$ if V is finite-dimensional
```
- which are all the same!


```ad-def
title: dimension of a subspace @2.38
if $V$ is finite-dimensional and $U$ is a subspace of $V$, then dim $U\leq$ dim $V$.
```

- linearly independent list of the right length is a basis
	

```ad-def
title: linearly independant list of the right length is a basis @2.39
suppose $V$ if finite-dimensional. Then very linearly indepedent list of vectors in $V$ with length dim $V$ is a basis $V$
```
- makes sense, because linearly independent list with the len of the dimension has to include all the info, and thus it spans, and thus it is a basis.
	- we don't need to check that it spans! 
		- instead, we just need to check that it is linearly independent and that it has the same len as the dim
		
- why does the list being linearly independent mean that its dim is >= 3?  #question @axler-2.41
- what??? #question what is happening at the end of @axler-2.41

```ad-def
title: spanning list of the right length is a basis @2.42
suppose $V$ is finite-dimensional. Then every spanning list of vectors in $V$ with length dim $V$ is a basis of $V$.
```
- every list of vecs which both spans and is the same len as the dim is a basis.
	- because in order to span, you need all the info
	- and to be the len of the dim, you can't have repeat info
	- so it's a basis.
	
### formula for dimension of sum of two subspaces
*in a finite-dimensional vector space.*

like counting formula: 
- the num of elems in the union of two finite sets is the num of elems in the first set + the number of elems in the second set - the overlap (intersection) 


```ad-def
title: dimension of a sum @2.43
if $U_1$ and $U_2$ are subspaces of a finite-dimensional vector space, then 
$$dim(U_1+U_2) = dim U_1 +dim U_2 - dim(U_1\cap U_2)$$
```

#review the ending proof.













































