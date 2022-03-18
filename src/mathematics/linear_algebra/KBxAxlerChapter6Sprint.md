---
title:   Chapter 6 Spring
context: linalg
author:  Huxley Marvit
date: 2022-03-15
---

#flo #hw

***

# Inner product spaces!
*wait, we just got the definition of the dot product? in chapter 6??*


we can generalize the dot product to get the **inner product**

the inner product is more fundemental than lenght, and can in fact lead to the concepts of len and angles

we denote this inner product with $\langle u, v \rangle$.
now we get to the definition of the inner product:

```ad-def
takes an inner product of two elements $\in V$ and goes to a number $\langle u,v \rangle \in F$
has the following properties:
**positivity** 						$\langle v, v \rangle \geq 0$ for all $v \in V$

**definiteness** 					$\langle v, v \rangle = 0$ iff $v = 0$

**additivity in first slot** 		$\langle u+v, w \rangle = \langle u, w \rangle + \langle v, w \rangle$ for all $u, v, w \in V$

**homogeneity in the first slot** 	$\langle \lambda v, u \rangle = \lambda \langle v, u \rangle$ for all $\lambda \in F$ and all $u, v \in V$

**conjugate symmetry** 				$\langle u, v \rangle = \overline{\langle v, u \rangle}$ for all $u, v \in V$
```

since all real numbers equal their complex conjugate, we can just say that in real vector spaces $\langle u, v \rangle = \langle v, u \rangle$ 

now with the inner product, we can define an **inner product space**
which is just a
```ad-def
vector space along with an inner product
```

```ad-tip
V is an inner product space for the rest of the chapter
```

the func that takes $v$ to $\langle v, u \rangle$ is a linear map from $V$ to $F$

each inner product also determines a norm, following the pattern $||v|| = \sqrt{\langle v, v \rangle}$

the norm is also also ~homogenous: $||\lambda v || = |\lambda| \text{ }||v||$

we also get to define the concept of orthogonality:
```ad-def
title: orthogonal
two vecs are othogonal if $\langle u, v \rangle = 0$
```

ending on 169
***

iteresting, 0 is the only vec orthogonal to itself

with orthogonal decomposition, which i dont really get yet, we can prove the cauchy-schwarz inequality!

```ad-def 
title: cauchy-scharz inequality
$$|\langle u,v \rangle| \leq ||u|| \space ||v||$$
holds iff u or v is a scalar multiple of the other.
```


and now we get to prove all kinds of geometric properties, like the triangle equality, the parelleogram equailty, ect


## 6.b! orthonormal bases

a list of vecs can be othernormal if they are all other and normal
ie, every vector is orthogonal to all other vector in the list and they are of unit len (norm 1)


we also get orthonormal basis

and also, an orthonormal list of right len is an orthonormal basis

the thing with orthonormal basis is that writing out vectors as linear combinations of them is really easy

alright, how do we find them?

**gram-schmidt procedure**
- takes an LID list and turns it into an orthonormal list with the same span
- #review the actual procedure here..


we also know that every finite-dim inner product space has an orthonormal basis

and also that every orthonormal list can be extended to an orthonormal basis

**schurs theorem** states that for some finite-dim complex vec space V and some operator T, T has an upper triangular matrix w.r.t. some orthonormal basis of V




all linear functionals can be represented as inner products??

#review orthogonal projections


ooh, we can solve minimization problems with the orthogonal projection

![[Screen Shot 2022-03-17 at 10.58.09 PM.png|300]]


and we can aproximate functions wayyyy better
this is sick!
![[Screen Shot 2022-03-17 at 11.00.53 PM.png|300]]
![[Screen Shot 2022-03-17 at 11.00.20 PM.png|300]]
aproximating sin fun, first is the new way and second is taylor



