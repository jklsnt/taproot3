---
title:   isomorphic groups homework
context: abstract
author:  Huxley Marvit
date: 2022-09-04
---

#ret #hw 

***

# [[isomorphic]] groups!
[the assignment](https://nuevaschool.instructure.com/courses/4390/assignments/72472)

You had some interesting conjectures today! Notably:

1) all [[groups]] of the same size are [[isomorphic]]
2) isomorphic groups have matching sets of [[subgroups]]
Try to prove/disprove (you already noticed that proving the second would disprove the first).
If you didn't find all the [[ring#subring|subrings]] of $\mathbb{Z_{4}} \times \mathbb{Z_{4}}$, do so.
Try some exercises on subgroups from 3.D-3.G in Pinter

***


> prove or disprove: all [[groups]] of the same size are [[isomorphic]]

$$
\begin{align*}
\text{len}((\text{Sym}, *)) = \text{len}((\mathbb{Z}_{6}, +))
\end{align*}
$$
Where $(\text{Sym}, *)$ denote the group of symmetries of a triangle.
In $(\text{Sym}, *)$,
$$
\begin{align*}\\
&S_{1}*R_{1}= S_2\\
&R_{1}*S_1= S_3\\
&S_1*R_{1}\neq R_1*S_1
\end{align*}
$$
Whereas in $(\mathbb{Z}_{6}, +)$,

$$
\begin{align*}
x+y=y+x
\end{align*}
$$
Since $(\text{Sym}, *)$ is non-commutative and $(\mathbb{Z}_{6}, +)$ is, they are not [[isomorphic]].

Thus, equal size does not imply [[isomorphic|isomorphism]].

> prove or disprove: isomorphic groups have matching sets of subgroups

Consider two [[isomorphic]] [[groups]] $(X, *)$ and $(Y, \odot)$.

To generate [[subgroups]] from each group $((A, *) \in (X, *)$ and $((B, \odot) \in (Y, \odot)$, first choose one element from each $x \in X$ and $T(x) = y \in Y$ where $T: X \to Y$ is an [[isomorphic|isomorphism]]. To close each group, add $x * x$ to A and $y \odot y$ to B. Since X and Y are [[isomorphic]], $T(x*x) = y \odot y$. Since every pair of corresponding new elements added to the sets will satisfy the [[isomorphic|isomorphism]], the [[subgroups]] generated will be [[isomorphic]].

Thus, $(A, *) \cong (B, \odot)$ for all $A \in X$ and $B \in Y$.

> subrings of $\mathbb{Z_{4}} \times \mathbb{Z_{4}}$

Reflections excluded for brevity.
$$
S = \left\{
\begin{align*}
	&\left\{ (0, x) | x \in \mathbb{Z_4}\right\},
	\left\{ (0, 2x) | x \in \mathbb{Z_2}\right\},\\
	&
	\left\{ (x, x) | x \in \mathbb{Z_4}\right\},
	\left\{ (2x, 2x) | x \in \mathbb{Z_2}\right\},\\
	&\{(0,0)\},\\
	&\{(2x, y) | x \in \mathbb{Z_{2}}, y \in \mathbb{Z_{4}}\}
\end{align*}
\right\}
$$
Where $\text{len}(S) = 9$.


$$
\begin{align*}
&\odot \; \odot\\
&\;\;\;\_\_\\\\
& \text{gerome.}
\end{align*}
$$

> Pinter pg. 36 3.D

| \*  | I   | v   | h   | d   |
| --- | --- | --- | --- | --- |
| I   | I   | v   | h   | d   |
| v   | v   | I   | d   | h   |
| h   | h   | d   | I   | v   |
| d   | d   | h   | v   |  i |









