---
title:   3D Reading
context: linalg
author:  Huxley Marvit
date: 2021-11-26
---

#flo  #hw 

***

# Invertibility and Isomorphic Vector Spaces

### invertibility and relating sets
- what does invertible mean w.r.t. linear maps?

```ad-def
title: invertible, inverse
- A linear map $T \in L(V,W)$ is called *invertible* if there exists a linear map $S \in L(W,V)$ such that $ST$ equals the identity map on $V$ and $TS$ equals the identity map on $W$. 
- A linear map $S \in L(W,V)$ satisfying $ST = I$ and $TS=I$ is called an *inverse* of $T$ (note that the first $I$ is the identity map on $V$ and the second $I$ is the identity map on $W$.
```
relates to injectivity and surjectivity.. #extract

```ad-def
title: inverse is unique
An invertible linear map has a unique inverse
```

proof is just setting
$$S_1 = S_1I = S_1(TS_2) ... = S_2$$
long chain of equalitys based on the fact it acts as the inverse

```ad-def
title: $T^{-1}$
If $T$ is invertible, then its inverse is denoted by $T^{-1}$. In other words, if $T \in L(V,W)$ is invertible, then $T^{-1}$ is the unique element of $L(W,V)$ such that $T^{-1}T=I$ and $TT^{-1}=I$.
```

Just the inverse.
oh, and here we get the thing i was wondering about earlier

```ad-def
title: invertibility is equivalent to injectivty and surjectivity
A linear map is invertivle iff it is injective and surjective
```
aka. bijective means invertible

pretty simple proof, just using the definitions very closely.

### maps that are not invertible

- multi by $x^2$ from P(R) to P(R) cus not surjective. #extract 
	- this is because 1 is not in the range.
	
- backwards shift from f^infin to itself
	- not injective

### isomorphic vec spaces

'essentially the same,' bar the names of the elems

```ad-def
title: isomorphism, isomorphic
- An isomorphism is an invertible linear map
- two vector spaces are called isomorphic if there is an isomorphism from one vector space onto the other one
```
which means they are bijective.

essentially relabeling $v$ as $Tv$.

```ad-comment
isomorphic means equal shape in greek
isos -> equal, morph -> shape
```
but people use isomprhism when they want to emphazise how two spaces can be essentially the same

```ad-def
title: dimension shows whether vector spaces are isomorphic
Two finite-dim vec spaces over **F** are isomorphic iff they have the same dimension
```
makes sense.

uh,

```ad-def
title: L(V,W) and $F^(m,n)$ are isomorphic
Suppose $v_1, \dots, v_n$ is a basis of $V$ and $w_1, \dots, w_m$ is a basis of $W$. Then $M$ is an isomprhism between $L(V,W)$ and $F^{m,n}$.
```
amazing.

pluging in dimension results, we get

```ad-def
title: $\dim L(V,W)=(\dim V)(\dim W)$
Suppose $V$ and $W$ are finite-dim. Then $L(V,W)$ is finite-dim and 
$$\dim L(V,W)=(\dim V)(\dim W)$$
```

Amazing proof.


### linear maps though of as matrix multiplication

not the matrix of a map like in [[KBxChapter3CReading]], but the matrix of a vector.

```ad-def
title: matrix of a vector, M(v)
Suppose $v \in V$ and $v_1, \dots, v_n$ is a basis of $V$. The matrix of v w.r.t. this basis is the n-by-1 matrix 
$$
M(v) = \begin{bmatrix} 
c_1  \\ 
 \vdots \\ 
 c_n  
 \end{bmatrix}.
$$

where $c_1, \dots, c_n$ are the scalars such that
$$ v = c_1 v_1 + \dots + c_n V_n. $$
```
again, about representing as a [[KBxLinearCombinations]] of the basis vecs. 


```ad-def
title: $M(T)._{,k} = M(vk).$
Suppose $T \in L(V,W)$ and $v_1, \dots, v_n$ is a basis of $V$ and $w_1, \dots, w_m$ is a basis of $W$. Let 1 <= k <= n. Then the $k^{th}$ column of $M(T)$, which is denoted by $M(T)._{,k}$ equals $M(vk)$.
```
takin their word for this one.

now we fit together mat of lin map, mat of vec, and matmul.

```ad-def
title: linear maps act like matrix multiplication
Suppose $T \in L(V,W)$ and $v \in V$. Suppose $v_1, \dots, v_n$ is a basis of $V$ and $w_1, \dots, w_m$ is a basis of $W$. Then 
$$M(Tv) = M(T)M(v).$$
```

every m-by-n mat induces another linear map from $F^{n,1}$ to  $F^{1,m}.$  

with isomorphisms, we can think of linear maps as multiplicaions on $F^{n,1}$ by some mat.

axler focuses on linear maps as matricie and vise versa

### operators

linear maps from a vector space to itself are *very* important

we give them their own notation,

```ad-def
title: operator, $L(V)$
- A linear map from a vector space to itself is called an *operator.*
- The notation $L(V)$ denotes the set of all operators on $V$. In other words, $L(V) = L(V,V).$
```

**THIS IS IMPORTANT!**
says that the deepest and more important parts of linalg (and the rest of the book) deal with operators.
#extract

- remember, neither injectivity nor surjectivity implies invertibility
- but it does for operators! normally, injectivity is easier so that is checked

```ad-def
title: injectivity is equivalent to surjectivity in finite dimensions
Suppose $V$ is finite-dim and $T \in L(V).$ Then the following are equivalent:

a. T is invertible
b. T is injective
c. T is surjective
```
proof via multiple uses of fundemental theorem of linear algebra

```ad-abstract
this seems like a very important chapter. need to do some extracting on this one.
big concepts were isomorphism and operators. extract later!
```










