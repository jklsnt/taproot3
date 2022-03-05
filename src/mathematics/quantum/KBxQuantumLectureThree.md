---
title:   Lecture three!
context: quantum
author:  Huxley Marvit
date: 2022-02-08
---

#flo #inclass 

***

# quantum

quantum indexing is important! it's essentially, binary indexing.

 ## tensor products!
- combination of two vector spaces, denoted as H because they are Hilbert spaces
	- they are finite dim! so not really proper Hilbert spaces? #question what is a Hilbert space?
		- for now, treat is as a finite dimensional complex vector space. it represents the state space of a qubit
		- and all the vectors in it have unit len!
- tensor products are just to define two vector spaces to make another bigger vector space

- binary indexing because the product is preserved? that's kinda cool
	 - our subscript indicing can also be used to denote which basis vector you want 
	 - for example, $$e_{00} \to \begin{pmatrix}1 \\ 0 \\ 0 \\ 0 \\ \end{pmatrix} \text{ and } e_{11} \to \begin{pmatrix}0 \\ 0 \\ 0 \\ 1 \\ \end{pmatrix} $$



- **entanglement** is the tensor product of the state matrices of each qubit? or it's where you can't separate the tensor product? #question 
	- no. a quantum state is the tensor product of two other vectors, then it is **separable.** otherwise, it is **entangled.**

an example of a separable state is as follows:

$$\begin{pmatrix}
1  \\ 0
\end{pmatrix}
\otimes
\begin{pmatrix}
0  \\ 1
\end{pmatrix} = 

\begin{pmatrix}
1 \begin{pmatrix}
0  \\ 1
\end{pmatrix}  \\ 
0 \begin{pmatrix}
0  \\ 1
\end{pmatrix}  \\ 
\end{pmatrix}  = 
\begin{pmatrix}
0  \\ 1  \\ 0  \\ 0
\end{pmatrix} = | ud \rangle$$
- the indexing is done by $a(x y)$ where $x=01$ and $y=10$, in binary 
	- together, this makes 6 in binary, which we just count down from the top to get

## the matricies!

$$
I=\begin{pmatrix}1 & 0 \\ 0 & 1\end{pmatrix} --- X=\begin{pmatrix}0 & 1 \\ 1 & 0\end{pmatrix} --- H= \frac{1}{\sqrt{2}}\begin{pmatrix}1 & 1 \\ 1 & -1\end{pmatrix}
$$

a matrix is **unitary** when its conjugate transpose U* is also its inverse
$$A^{H}= A^{-1} \to A^{H}A^{-1}=I$$
a matrix is **hermetian** when it's *equal* to it's conjugate transpose
$A^{H}= \overline{A^T}$

if **U** is a unitary matrix, then $||U_{a}||=||a||$

we also define the adjoint of a matrix U, which is $U^*$. ie, $V[r,c] = \overline{U}[c,r]$
 then we talk about, tensor products! defined, [here](https://docs.google.com/presentation/d/1czOEaLF55yv385mpBf79K0UKQxZIavoekfQo8KMHkkw/edit#slide=id.g6ea6897bfe_0_125)










