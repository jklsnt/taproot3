---
title:   Span of vector lists
context: 
	- Math
	- Linear Algebra
	- 20math530
author:  Exr0n
source:  KBe20math530refVectorSpace
---

#source Axler2.A

# #definition span
> The set of all linear combinations of a list of vectors $v_1, ..., v_m$ in $V$ is called the span of $v_1, ..., v_m$, denoted $\text{span}(v_1,...,v_m)$:
> $$\text{span}(v_1,...,v_m) = {a_1v_1 + ... + a_mv_m | a_1, ..., a_m \in F}$$
> And the span of an empty list $()$ is ${0}$
>   - This is just to make Axler2.C work out nicely ([[KBeRefLinAlgDimension]])

# Properties
- The span is the smallest containing subspace
	- > The span of a list of vectors in $V$ is the smallest subspace of $V$ containing all the vectors in the list.

## #definition spans
> If $\text{span}(v_1,...,v_m) = V$, then $v_1, ..., v_m$ ***spans*** $V$

# Examples
## Axler 2.9
> Suppose $n$ is a positive integer. Show that $(1, 0, ..., 0), (0, 1, 0, ..., 0), ..., (0, ..., 0, 1)$ spans $F^n$.
- Basically, if a list of vectors spans a vector space then linear combinations of those vectors (almost like colloquial polynomials of those vectors) can form each vector in the space.
- In this case, the vector space $F^n$ is a list of vectors in $F$, and having the $1$ in each slot is enough to, when scalar multiplied with $a \in F$, get all possibilities of $F^n$.
- I need to wrap my head around this some more.

---
