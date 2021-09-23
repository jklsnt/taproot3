---
title:   Spans
context: linalg
author:  Huxley Marvit
date: 2021-09-22
---

#flo #ref

***

# Spans
concept introduced in [[KBxChapter2AReading]]

notes, on as explained by professor dave.

```ad-tip
title: review: subspace
a vector space contained inside another vector space

eg. S is a subspace of V
that means every element in S is also in V

which means, the only things we need to check that arn't inhereited from the paret space are:
- if S is closed
	- a in S, then ca is in S // closed under scalar multiplication
	- a in S, b in s, then a+b in S // closed under addition


```


#### checking a subspace

eg. subspace: R^3
S = [x, 0, -x]
multiply by c: [cx, 0, -cx], still in the same form.
add another vector: [x, 0, -x] + [y, 0, -y] = [x+y, 0, -(x+y)] still in the same form
so it's closed under addition and SCAMUL!
therefore it's a subspace


### defining the span

$\vec{v}_1, \vec{v}_2,...\vec{v}_N$ in V

sum of these elements multiplied by some scalars: 
$a_1\vec{v}_1 + a_2\vec{v}_2 + ...a_n\vec{v}_N$ 


is called a **linear combination**

```ad-important
the set of all linear combinatins is called the span
```

eg. 

$\vec{v}_1 = \begin{bmatrix}
2 \\
1 \\
-1 
\end{bmatrix}$, $\vec{v}_2 = \begin{bmatrix}
0 \\
2 \\
2 
\end{bmatrix}$, $\vec{v}_3 = \begin{bmatrix}
-1 \\
-1 \\
-1 
\end{bmatrix}$

span($\vec{v_1},\vec{v_2},\vec{v_3}$) =  $\begin{bmatrix} 2a \\ a \\ -a  \end{bmatrix}$ + $\begin{bmatrix} 0 \\ 2b \\ 2b  \end{bmatrix}$ + $\begin{bmatrix} -c \\ -c \\ -c  \end{bmatrix}$ = $\begin{bmatrix} 2a & +0 & -c \\ a & +2b & -c \\ -a & +2b & -c  \end{bmatrix}$ 

the span of any number of elements of vector space V is also a subspace of V
actully, it is the *smallest subspace* of V that contains the set of elements that you ran the span on
it is the intersection of all subspaces that contain them?
**span: important for describing vector spaces**




















