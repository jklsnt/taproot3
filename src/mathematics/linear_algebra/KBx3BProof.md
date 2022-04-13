---
title:   3B Proof
context: linalg
author:  Huxley Marvit
date: 2021-11-09
---

#flo #ret #hw 

***


# Problem 21!
Suppose $V$ is finite-dimensional and $T \in L(V,W)$. Prove that $T$ is injective if and only if there exists $S \in L(W,V)$ such that $ST$ is the identity map on $V$. NNOO!


3.16 injectivity is equivalent to null space equals {0}
3.15 injective: T: V -> W is injective if $Tu = Tv$ implied $u=v$
3.8 product of linear maps: 

identity map on v: Iv = v

product of linear maps:

if $T \in L(U,V)$ and $S \in L(V,W)$, then the *product* $ST \in L(U,W)$ is defined by 
$$(ST)(u)=S(Tu)$$
for all $u \in U$.




# Problem 21, pt 2.

Suppose $V$ is finite-dimensional and $T \in \mathcal{L}(V,W).$ Prove that $T$ is surjective if and only if there exists $S \in \mathcal{L}(W,V)$ such that $TS$ is the identity map on $W$.

3.20 :: def of surjective
3.17 :: def of range
3.2 :: def of linear map






- define a S that takes range of T back to V such that TS(v) = v
	- prove that this is linear, and we are done with the forwards direction
		- homogeneity
		- additivity



- additivity
	- $T(u+v) = Tu + Tv$ for all $u, v \in V$
	- $S(u+w) = Su + Sw$ for all $u, w \in W$

Since $T$ is additive, and $TS(v) = v$, we can say that: 
$$
TS(v + u) = v + u = T(Sv) + T(Su) = T(Sv + Su)
$$
Therefore, $S$ is additive.

- homogeneity
	- $T(\lambda V) = \lambda (Tv)$ for all $\lambda \in F$ and all $v \in V$.

- homogeneity
$T(S \lambda v) =   \lambda v =  \lambda T(Sv) =  T(\lambda Sv)$

backwards direction:

assume TS is the identity map. prove that T is surjective.
















