---
title:   Axler 3A Reading
context: linalg
author:  Huxley Marvit
date: 2021-10-19
---

#flo  #hw 

***

# Linear Maps

```ad-qoute
no one get's excited about vector spaces -axler
```

the interesting part: linear maps!

```ad-abstract
title: learning objectives
- fundementals theorem of linear maps
- matrix of linear map w.r.t. given bases
- isomorphic vec spaces
- product spaces
- quotient spaces
- duals spaces
	- vector space
	- linear map
```


# The vector space of linear maps

**key definition!**

```ad-def
title: linear map
aka *linear transformation.*

a *linear map* from $V$ to $W$ is a function $T:V \to W$ with the following properties:
**additivity**
$T(u+v) = Tu+Tv$ for all $u, v \in V$;
**homogeneity**
$T(\lambda v) = \lambda(Tv)$ for all $\lambda \in F$ and $v \in V$.
```

the functional notation T(V) is the same as the notation Tv when talking about linear maps.


```ad-def
title: notation -- $L(V,W)$
the set of all linear maps from $V$ to $W$.
```

### examples of linear maps
- 0?
	- 0 is the func that takes each ele from some vec space to the additive iden of another vec space.
		- 0v = 0
		- left: func from V to W, right: additive iden in W
		- #question what does it mean for it to be a function from V to W?
- identity, denoted $I$
	- $Iv = v$
	- maps each element to itself
linear transformation like a `.map`?

- differentiation and integration!
- multiplication by $x^2$ (on polynomials)
- shifts! defined as, $T(x_1, x_2, x_3, \dots) = (x_2, x_3, \dots)$
	- #question this is an example, but how do we define it as a transformation? or is giving an example in the general case the same thing as defining a transformation?

- from $R^3 \to R^2$ ? #question what? how does this work?
- #review how this dimension shift works..


```ad-def
title: linear maps and basis of domain
Suppose $v_1, \dots , v_n$ is a basis of $V$ and $w_1, \dots , w_n \in W$. Then there exists a unique linear map $T:V \to W$ such that
$$Tv_j = W_j$$
for each $j=1,\dots n$.
```
we can uniquely map between the basis of a subspace and a list of equal len in a diff subspace?

#question wait how does the uniqness proof work here at the end?



### algebraic operations on $L(V,W)$

```ad-def
title: addition and SCAMUL

Suppose $S,T \in L(V,W)$ and $\lambda \in F$. The *sum* of $S+T$ and the *product* $\lambda T$ are the linear maps from $V$ to $W$ defined by
$$(S+T)(v) = Sv + Tv$$ and $$(\lambda T)(v) = \lambda (Tv)$$
for all $v \in V$

```

oh jeez.. 

```ad-def
title: $L(V,W)$ is a vector space!
with the operations of addition and SCAMUL as defined aboce, $L(V,W)$ is a [[KBe20math530refVectorSpace]]
```

and another one.

```ad-def
title: product of linear maps
if $T \in L(U,V)$ and $S \in L(V,W)$, then the *product* $ST \in L(U,W)$ is defined by 
$$(ST)(u)=S(Tu)$$
for all $u \in U$.
```

S dot T?? what is this symbol?


```ad-def
title: albraic props of products of linear maps
- associative
- idenity
- distributive properties
```

multiplication of linear maps is not commutative!
ie. $ST = TS$ isn't always true.


```ad-def
title: linear maps take 0 to 0
suppose $T$ is a linear map from $V$ to $W$. Then $T(0) = 0$
```


```ad-reflection
#review this chapter... 
bassically all just result blocks and nothing else
i don't have an intuitive understanding of the concept of a map. perhaps look into 3b1b vid on linear transformations, or maybe professor dave.

```












