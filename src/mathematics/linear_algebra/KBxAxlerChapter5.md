---
title:   Axler Chapter 5
context: linalg
author:  Huxley Marvit
date: 2022-02-02
---

#flo #hw 

***

# Eigen things!

instead of maps from vec space to another vec space, this is about a vec space to itself

the study of this is the most important part of linalg, according to axler


a subpsace which gets mapped into itself is an **invariant subspace**

ie, a subspace can be invarant under T if $T|_U$ is an operator on $U$

***
pausing, pg 133

simplest possible nontrivial invariant subspace is an invariant subspace with dim 1

we can take any non-zero vector in V and make the set of all scalar multiples of it
$\text{span}(v) = U = \{ \lambda v : \lambda \in F \}$
thus, $U$ must have dim 1, cus we only need the org vec to define the basis

if $U$ is invariant under an operator, then that means that $Tv \in U$ 
which means that there exists some scalar in **F** which does the same thing as the map
$$Tv = \lambda v$$

***
pausing, again, pg. 134

we get the formal definiion of an eigenvalue, which is essentially the scalar from F that does the same thing as the transformation

we also get relations to surjectivity and injectivyt and invertibility and ect. [[KBrefSurjectiveFunction]] [[KBrefInjective]] [[KBrefInvertibleLinearMaps]]

an eigenvector is the corresponding vector that you pass through the linear map / $\lambda$
ie, a vector that only get's scaled when you pass it through a linear map, as opposed to getting rotated or transalated

we also know that eigenvectors are LID when they have distinct eigenvalues
and also, the number of distinc eigen values has to be $\leq$ dim v

restirction operators and quotient operators
restricted to U means you can only map into U? ie, instead of U -> V, it becomes U -> U?




## 5.B!

the reason why we care more about operators than normal linear maps is because operators can be raised to powers
we can do $T^{2}$, because we know it will be in $\mathcal{L}(V)$ !
they follow all the normal exponentiation rules, except that $T^0$ is the identity

and we get polynomial $p(T)$ which is where instead of $z \dots z^{m}$ we have T's

and also, **operators on complex vector spaces have an eigenvalue**

define diagonal of a matrix to be the diagonal of a sqaure matrix
upper triangular is when all entries below the diag are 0.
the upper-triangular matrix is usually represented in the form:
$$
\begin{pmatrix} 
\lambda_1 &  & * \\   & \ddots  &  \\ 0  &  & \lambda_n
\end{pmatrix};
$$

which is very pretty! 

every operator over C has an upper triangular matrix
we can also use these to determine where the operator is invertible. 
if the diag contains any 0's then it's non invertible!

relation to eigen values,

if the operator has an upper-triangular matrix w.r.t. some basis of V, then the eigenvalues of that operator are the entries on the diag.

and with that, we get to 
## 5.C! diagonals and eigenspaces
*oh boy, here comes the real stuff!*

diag matrix is a matrix with only non-zero numbers on the diag

the eigenvalues of an operator are the entries along the diag of a diag matrix

and we also get to define, **eigenspace** denoted $E(\lambda, T)$
which is the set of all eigenvectors corresponding to $\lambda$ + 0 vec
(which is also a subspace)

and, ofc, the sum of the eigenspaces is a direct sum, as a single vec cannot be scaled by multiple $\lambda$'s


import def, **diagonalizable**
operators on V can be diagonlizable if the op has a diag matrix w.r.t. some basis of V

also a bunch of things that are equivalent to being diagonalizable, shown in 5.41

## 5.C, inclass
#extract?

- linear algebra can be seen as an equivalence class between multiple different forms
	- algebra is about manipulating these different representations
	
- diagonal form is one of these forms. its one of the *standard* forms

### so, what is diagonalization anyways?
[[KBrefDiagonalMatrix]]

how we actually compute the eigenvalues is not how axler computes the eigen values
how we actully do it, is set $(A-\lambda I) v = 0$
this is also equaivalent to the inverse of the first term not existing and the determinant being 0

the determinant of a matrix is the product of its eigenvalues! whaaaat?

the charateristic equation of a matrix A becomes a polynomial of degree N
```ad-def
title: characteristic polynomial
the characteristic polynomial of a square matrix is a polynomial which is invariant under matrix similarity and has the eigenvalues as roots. -google
```

the **trace** is the sum of the diag 













