---
title:   Chapter 3C Reading
context: linalg
author:  Huxley Marvit
date: 2021-11-17
---

#flo  #hw 

***


# 3C! 

matricies as values of $T_{vj}$ in terms of a a basis of $W$?

```ad-def
title: matrix, $A_{j,k}$
Let $m$ and $n$ denote possitive integers. An $m-\text{by}-n$ matrix A is a rectangular array of elements of $F$ with $m$ rows and $n$ columns:

$$
A = \begin{bmatrix} 
 A_{1,1} \dots & A_{1,n} \\
 
 \vdots & \vdots \\
 A_{m,1} \dots & A_{m,n}
 \end{bmatrix}.
$$
The notation $A-{j,k}$ denotes the entry in row $j$, column $k$ of $A$. In other words, the first index refers to the row number and the second index refers to the column number.

```
just defining a matrix simply. #question, what is a non-rectangular array?
REMEBER :: this is 1-indexed! not 0-indexed! 

**key definition**
```ad-def
title: matrix of a linear map, $M(T)$
Suppose $T \in L(V,W)$ and $v_1, \dots, v_n$ is a basis of $V$ and $w_1, \dots, w_n$ is a basis of $W$. The matrix of T with respect to these bases is the $m$-by-$n$ matrix $M(T)$ whos entries $A_{j,k}$ are defined by 

$$
T_{vk} = A_{1,k} w_1 + \dots + A_{m,k} w_m.
$$
If the bases are not clear from the context, then the notation 
$M(T, (v_1, \dots, v_n), (w_1, \dots, w_n))$ is used.

```

the matrix which represents the linear map? 

constructing the matrix:
![[Screen Shot 2021-11-17 at 1.17.40 PM.png||300]]

if it maps from n-dim to m-dim, then the matrix is m-by-n.

### addition and SCAMUL of matricies
*assume that V and W are finite-dim!*

```ad-def
title: matrix addition
The sum of two matricies of the same size is the amtric obtained by adding corresponding entries in the matricies.
{the latex}.
In other words, $(A+C)_{j,k} = A_{j,k} + C_{j,k}$.
```

assuming that all the same bases are used for all three linear maps, $S+T, S, T$,

```ad-def
title: the matrix of the sum of linear maps
Suppose $S,T \in L(V,W).$ Then $M(S+T) = M(S)+M(T)$.
```

and also,
```ad-def 
title: SCAMUL of a matrix
The product of a scalar and a matrix is the matrix obtained by multiplying each entry in the matrix by the scalar
{the latex}

In other words, $(\lambda A)_{j,k} = \lambda(A_{j,k})$

```

```ad-def
title: The matrix of a scalar times a linear map
Suppose $\lambda \in F$ and $T \in L(V,W)$. Then $M(\lambda T) = \lambda M(T).$
```

and, ofc, more vector spaces

```ad-def
title: $F^{m,n}$
For $m$ and $n$ positive integers, the set of all $m$-by-$n$ matrices with intries in $F$ is denoted by $F^{m,n}$.

```
sick.

```ad-def
title: $\dim F^{m,n} = mn$
suppose $m$ and $n$ are positive integers. With addition and SCAMUL defined as above, $F^{m,n}$ is a vector space with dimension $mn$.
```

### matrix multiplication
*wait we are just getting to this? goddamn.*

'makes sense' means having the operations defined.

this part doesn't make sense to me.

we have a desired equation, $M(ST)=M(S)M(T)$ and we want to define matrix multiplication as such that it holds. thus, we get, 

```ad-def
title: matrix multiplication
Suppose A is an $m$-by-$n$ matrix and $C$ is an $n$-by-$p$ matrix. Then $AC$ is defined to be the $m$-by-$p$ matrix whose entry in row j, the column $k$ is given by the following equation:

$$
(AC)_{j,k} = \sum^{n}_{r=1}A_{j,r} C _{r,k}.
$$
In other words, the entry n row $j$, column $k$, of $AC$ is computed by taking row $j$ of A and column $k$ of C, multiply together corresponding entries, and then summing.
```
formally defining what we already know how to do. #cool!

remember, this only works when the columns of the first matrix equals the number of rows of the second matrix.

this is the motivation for the definition of matrix multiplication that we have been taught. 

intresting how cyclic this type of understanding is.


anyways, It's not commutative! 
```ad-def
title: the matrix of the product of linear maps
If $T\in L(U,V)$ and $S \in L(V,W)$, then $M(ST) = M(S)M(T)$.
```

vertically centered dot is a placeholder?

```ad-def
title: $A_{j,.}, A_{.,k}$
Suppose A is an $M$-by-$n$ matrix.

- If 1 <= j <= m, then $A_{j,.}$ denotes the 1-by-$n$ matrix consisting of row j of A.
- If 1 <= k <= n, then $A_{.,k}$ denotes the m-by-$1$ matrix consisting of column k of A.
```
what if it's less than one? does that mean the notation isn't defined? or is it like an index out of range err? #question

another way to think about matrix multiplication, 
- entry in row j column k of AC = row j of A * column k of C
	- ooh, that is alot cleaner.

```ad-def
title: Entry of matrix product equals row times column
Suppose A is an $m$-by-$n$ matrix and C is an $n$-by-$p$ matrix. Then 
$$(AC)_{j,k} = A_{j,.}C_{.,k}$$
for 1 <= j <= n and 1 <= k <= p.
```

wait, another one?
the column of k of AC equals A times column k of C.

```ad-def
title: column of matrix product equals matrix times column
Suppose A is an $m$-by-$n$ matric and C is an $n$-by-$p$ matrix. Then 
$$(AC)_{.,k} = AC_{.,k}$$
for 1 <= k <= p.
```

final one, as a linear combination.
$$
\left[\begin{matrix}7\\19\\31\end{matrix}\right] = 5 \left[\begin{matrix}1\\3\\5\end{matrix}\right] + 1 \left[\begin{matrix}2\\4\\6\end{matrix}\right].
$$

what? this doesnt make sense.


```ad-def
title: Linear combination of columns
Suppose A is an $m$-by-$n$ matrix and $c = \begin{bmatrix} 
 c_1 \\ 
 \vdots \\ 
 c_n  
 \end{bmatrix}$ is an n-by-1 matrix. 
 Then 
 $$
 Ac = c_1 A_{.,1} + \dots + c_n A_{.,n}
 $$

In other words, $Ac$ is a linear combination of the columns of A, with the sclars that multiply the columns coming from c.
 
```
wait but does that returns a matrix? #question 

haha, two more ways are given by exrs. 10 & 11. amazing.


```ad-reflection
this chapter was mostly about differnt ways we can think about, and thus define, matrix multiplication. 
intrestng how we needed all this info which we understood through using matrix multiplication to understand why it is that matrix multiplication is defined as such.
```















