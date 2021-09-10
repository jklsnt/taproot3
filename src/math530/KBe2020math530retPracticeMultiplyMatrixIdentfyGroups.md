---
title:  Practice multiplying matrices and identifying groups
course: 2020math530
author: Exr0n
source: #index
---

> What sizes of matrix can you add? When can't you add matrices?

Matrices of the same dimensions (because we do it element wise). Maybe you can add a vector to a matrix if the number of rows is equal to the dimensionality of the vector.

> What sizes of matrix can you multiply? When can't you multiply matrices?

Multiply: $N\times M$ * $M\times K$ => $N\times K$.

> Multiply
> $$
\begin{bmatrix} 
3 & 0 \\
0 & 1 
\end{bmatrix},
\begin{bmatrix} 
1 & 0 \\
0 & -2 
\end{bmatrix},
\begin{bmatrix} 
1 & 1 \\
0 & 1 
\end{bmatrix},
\begin{bmatrix} 
0 & 1 \\
-1 & 0 
\end{bmatrix}
$$
> by vectors in  $\mathbb{R}^2$ (for example, you could multiply by $\begin{bmatrix} 0\\ 0 \end{bmatrix}$ or $\begin{bmatrix} 1\\ -2 \end{bmatrix}$). 

> Can you characterize the transformations you get by multiplying (lots of vectors) by each of these matrices?

| Action | Matrix |
|--------|--------|
Identity | $\begin{bmatrix} 1 \\ 1 \end{bmatrix}$
Select left column | $\begin{bmatrix} 1 \\ 0 \end{bmatrix}$
Select right column | $\begin{bmatrix} 0 \\ 1 \end{bmatrix}$
Treat as expression (linear combination/transformation?)\* | $\begin{bmatrix} a \\ b \end{bmatrix}$

\*I'm not sure what linear combinations/transformations are, but I think this is somehow related? Anyways, it takes each row $i$ and returns $\sigma A_{i,j} * B_{j}$

> Which of the number systems we discussed today form a group under addition? Under multiplication?

Source: [[KBe2020math530refGroups]]

| Number System   | Multiplication | Addition    |
|-----------------|:--------------:|:-----------:|
| Natural Numbers | No inverse     | No identity |
| Whole Numbers   | No inverse     | No inverse  |
| Integers        | No inverse     | Yes         |
| Rationals       | Yes            | Yes         |
| Reals           | Yes            | Yes         |
| Complex Numbers | Yes            | Yes         |

---
