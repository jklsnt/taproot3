---
title:   Quantum Lecture Two
context: quantum
author:  Huxley Marvit
date: 2022-02-01
---

#flo #inclass 

***

# learn by doing!

to remember:

qubit is a q&a, it will answer +1 or -1, 
qubit is the unit of info for quantum properties

when we are using complex components, we are distribution more information? because they have a complex and a real part?

we have to allow for a part to remain unobservable
not the same thing ofc, cus that woudn't help, but mixed in!

- if you ignore the unobservable things, then the **system seems random.**


## notation
bra-ket notation, and the linalg notation.

*linalg*
$|u  \rangle = \begin{pmatrix}  1 \\ 0    \end{pmatrix}$
$|d \rangle = \begin{pmatrix}  0 \\ 1    \end{pmatrix}$

*bra-ket*
$\sum_{j} \langle k|M|j \rangle \sigma_{j}= \sum_{j} \beta_{j} \langle k | j \rangle$ 
where  $\langle k|M|j \rangle$ ->  $\begin{pmatrix} k_1 & k_2 \end{pmatrix} \begin{pmatrix} m_{11} & m_{12} \\ m_{21} & m_{22} \end{pmatrix}  \begin{pmatrix} j_1  \\  j_2 \end{pmatrix}$ in standard linalg notation 
the vec $|u \rangle$ is a unit vector inside a sphere in two complex dimensions
we multiply these unit vectors by matrices, which are like events/measurements?

we actully multiply by **unitary matricies**
$\langle k|M|j \rangle$ will return a complex scalar of at most magnitude one, as the M stems from the unit vec inside the complex circle?
but! this will **not** give us the `a` of the `qna`! don't get this confused.


 $\begin{pmatrix} k_1 & k_2 \end{pmatrix} \begin{pmatrix} m_{11} & m_{12} \\ m_{21} & m_{22} \end{pmatrix}  \begin{pmatrix} j_1  \\  j_2 \end{pmatrix}$ in standard linalg notation 

unit vec to another unit vec is what a unitary matrix is? so when me multiply by u and d, we get out another basis vec?
alright.

## postulates, for now

measurable stuff is represented by the operators L
it also needs to be hermitian

any state vector has to have unit length

there is a distinction between the result of a measurement and what happens to the operator?
doing something to a system -> we get an answer, and the state changes. this state is unobservable.

this "something" is multiplying by an **observable operator**
what does that mean? i dont know!

and, pauli matricies are important? we will be using them a lot
of which the only eigen values are +1/-1

we are constrained to the sphere so we are limited to only movement and rotation, not scaling!













