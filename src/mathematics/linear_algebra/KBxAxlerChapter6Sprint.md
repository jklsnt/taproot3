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










