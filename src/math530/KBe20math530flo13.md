---
title:   Linalg Flow 13
context: 20math530
author:  Exr0n
source:  2020MATH530/KBe2020math530floIndex.md
---

#flo
#disorganized #incomplete 

# Bases
- #icr [[KBeRefLinAlgBases]]
- (plural of 'basis')
- the *standard basis* of $\mathbb{F}^n = (1, 0, 0, \ldots 0), (0, 1, 0, \ldots, 0), \ldots, (0, 0, 0, \ldots, 1)$

## Axler2.31
- The first step is a shortcut: the only way the first vector could be dependent is if it's zero
	- but as you go on, you are more and more "likely" to have redundancy
- How to check the third vector?
	- Calculate the formula for the plane of the first two (cross product to get something orthogonal)
	- Then, take the dot product to see if the third vector is perpendicular to the orthogonal and therefore in the plane.
		- (the third one is in the plane if the dot product with the orthogonal is zero)
- This is a more "concrete" ? version of the linear dependence lemma (see it in [[KBe20math530flo11]])
	- The linear dependence lemma starts from the end, where as this algorithm starts from the beginning
	- it basically says "there will be one you can get rid of" while this one tells you which:
		- for the sake of the algorithm, throw away the one that comes later.

## Axler2.34 
- You can start with a whole space and knock out of the basis, or a subspace and extend the basis 
- to show that it's a direct sum
	- show that the sum works
		- because we expanded to make the list a basis of $V$, it must span $V$ so all vectors are contained within.
	- show that the intersection works
		- we know that $v$ is in both $U$ and $W$, so we can subtract the equations and get that the sum is zero
		- and because the list is a basis, it is linearly independent, so all the coefficients are zero, so $v$ must be $0$

# Connections of Linear Independence
#toexpand #incomplete 
#icr of the recent test
## Linear Independence and Systems of Equations
- A system of equations's coefficients written as vectors has one solution if and only if the vectors are linearly independent
- A worked example:
$$
\begin{aligned}
3x-y+z = 5\\
x + 2y + z = 0\\
4x+y+2z = 2
\end{aligned}
$$
becomes
$$
\begin{aligned}
\begin{bmatrix}
3&-1&1\\
1&2&1\\
4&1&1\\
\end{bmatrix}
\begin{bmatrix}
x\\
y\\
z\\
\end{bmatrix}
= 
\begin{bmatrix}
5\\0\\2
\end{bmatrix}
\end{aligned}
$$

When the system above is graphed, the third plane is parallel to the line of intersection between the first two. This means that the vectors (the rows of the components of the vectors in $\mathbb{R}^3$)are linearly dependent?

- **linear combinations of the column vectors**
- **The fact that this system is not uniquely determined is a fact of the left side.** It doesn't matter what the numbers on the right of the system are. There will be $\infty$ solutions if the solution column is in plane of the column vectors, or in the span of the list.
- Column vectors are coplanar if the row vectors are linearly dependent.

# A homogeneous system
- When everything on the right of the systems are zero

#todo-exr0n move to linalg questions
- questions
	- standard basis of polynomials
		- $z^0, z^1, z^2, \ldots, z^n$
	- system of equations of polynomials
		- less obvious
			- turn your polynomial space into a more standard vector space and then use that?

## Linear Independence and Direct Sums
- In a direct sum, every vector in that sum can only be represented in one way
- for linear independence the span of the list is only represented as one linear combination of the list (esp. 0, which is the definition of linear independence)

# Referencing
- Say either the number or the title, or both.
	- title is useful, number is specific

---
