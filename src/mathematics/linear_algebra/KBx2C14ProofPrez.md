---
title:   2C Proof Presentation
context: linalg
author:  Huxley Marvit
date: 2021-10-10
---

#ret #hw 

***


# Proof Prez

**The problem:** 

Suppose $U_1, ... ,  U_m$ are finite-dimensional subspaces of $V$. Prove that $U_1+ ... +  U_m$ is finite-dimensional
$$\dim(U_1+ ... +  U_m) \leq \dim U_1  + ... + \dim U_m $$

***

- 1.39:
	- sum of subspaces is the smallest containing subspace.
		- Suppose $U_1, ... ,  U_m$ are subspaces of $V$. Then $U_1+ ... +  U_m$ is the smallest subspace of V containing $U_1, ... ,  U_m$.
- 2.26
	- Finite-dimensional subspaces
		- every subspace of a finite-dimensional vector space is finite-dimensional
- 2.43
	- dimension of a sum
		- if $U_1$ and $U_2$ are subspaces of a finite-dimensional vector space, then  $$
		\dim(U_1+U_2)=\dim U_1+\dim U_2 - dim(U_1 \cap U_2)
	 $$
 - 1.8
	 - definiton list, length
	 - supposed n is a non-negative integer
 - 2.36 
	 - dimension
		 - dimension of a finite dimensional vector space is the lenght of any basis of the vector space


#### proving finite dimensional
By 1.39, we know that the sum of subspaces in $V$ is a subspace in $V$.
By 2.26, we know that every subspace of a finite dimensional vector space is finite-dimensional
V is finite dimensional

therefore, 
sum of subspaces in $V$ is finite-dimensional


#### proving dim

by 2.36, we know that the dimension is the lenght of the basis
by 1.8, we know that a lenght cannot be negative
**thus, dim U_1 + dim U_2 - dim (U_1 intsct U_2) will always be <= dim U_1 + dim U_2**
-- can't subtract and a positive number and get a larger number.

by 2.43, we know that dim(U_1+U_2) = dim U_1 + dim U_2 - dim (U_1 intsct U_2)
**therefore,  dim(U_1+U_2) will always be <= dim U_1 + dim U_2**

generalize to list: 
by 1.39, we know that the sum of subspaces in V is a subspace of V
 so, let U_1 = u_1, and U_2 = u_2 + ... + u_m
 **thus, dim(U_1 + U_2) = dim(u_1 +...+ u_m)**


**therefore, dim(u_1 +...+ u_m) <= dim u_1 +...+ u_m**


## Formalizing












































