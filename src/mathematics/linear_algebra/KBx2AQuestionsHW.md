---
title:   Some questions to ponder
context: linalg
author:  Huxley Marvit
date: 2021-09-23
---

#ret #hw

***

# Some questions to ponder

* **why is Axler even talking about polynomials in Chapter 2.A?**
	* Polynomials can also form a vector space, and thus the same rules apply. By talking about polynomials, Axler shows some of the unifying power of vector spaces.

* **is there an _intuitive_ way to describe the span of a set of vectors?**
	* The span goes from the set of two non-collinear vectors on a plane to the set of every vector on the plane

* **is there an easy or quick way to check if a set of vectors is linearly independent?**
	* Represent as system of equations, then see if you can get to reduced row echelon form.

* **what is the relationship between linear independence (of a set of vectors) and systems of equations?**
	* Treating scalars as variables, you can use a system of equations to represent all possible linear combinations, convert that to a matrix, then use that to determine linear independence.

* **what is the relationship between linear independence (of a set of vectors) and nonsingularity (of a matrix)?**
	* If vectors are collinear when represented as the column of a matrix then the determinant will be 0. When vectors are collinear, they are not linearly independent. Therefore, when the determinant is 0, the vectors are linearly dependent.

* **what is the relationship between linear independence (of a set of vectors) and direct sum (of subspaces)?**
	* The product of a direct sum must be linearly independent because by definition all items in a subspace must be represented uniquely.

