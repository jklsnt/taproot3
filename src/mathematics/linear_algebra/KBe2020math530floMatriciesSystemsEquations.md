---
title:  Matrices as systems of equations
course: 2020math530
author: Exr0n
source: #index
---

Linear combination aka elimination method

\begin{align}
2x &+ 3y &= 5 \\
 x &+  y &= 1
\end{align}

is equivalent to

$$
\left[\begin{matrix}
2 &3 \\
1 &1
\end{matrix}\right]
\left[\begin{matrix}x\\y\end{matrix}\right]
=
\left[\begin{matrix}5\\1\end{matrix}\right]
$$.

We want to multiply the bottom equation by $-2$ when solving with the elimination method normally, so we might expect to multiply by the identity matrix but with the "bottom row selector" modified: 

$\left[\begin{matrix}1&0\\0&-2\end{matrix}\right]$.

$$
\left[\begin{matrix} 1 &0 \\ 0 &-2\end{matrix}\right]
\left[\begin{matrix} 2 &3 \\ 1 &1 \end{matrix}\right]
\left[\begin{matrix} x \\ y \end{matrix}\right]
$$

=

$$
\left[\begin{matrix} 1 &0 \\ 0 &-2\end{matrix}\right]
\left[\begin{matrix} 5 \\ 1\end{matrix}\right]
$$

And then, to add the bottom to the top we can use $\left[\begin{matrix}1&1\\0&1\end{matrix}\right]$.

![[KBe2020math530srcMatriciesAsEquationsIntro.png]]
![[KBe2020math530floMatrixMultiplyToSolve.png]]

---
