---
title:   Chapter 2.A Reference
context: linalg
author:  Huxley Marvit
date: 2021-09-29
---

#ref #incomplete

***

# Chapter 2A

## Overview

- [[KBxLinearCombinations]]
- [[KBxLinearIndependence]]
- [[KBxSpansLinAlg]]



## Definitions

### Linear Combination
```ad-def
A *linear combination* of a list $v_1,...,v_m$ of vectors in $V$ is a vector of the form 
$$a_1 v_1 + ... + a_m v_m$$
where $a_1,...,a_m \in F$
```
The sum of a list of vectors $v_1, ... , v_m$ all multiplied by scalars $a_1, ... , a_m$
Or, adding up scalar multiples of vectors in a list


#### Properties
Can form new vectors out of old ones!

### Spans
```ad-def
The set of all linear combinations of a list of vectors $v_1, ... , v_m$ in V is called the *span* of $v_1, ... , v_m$, as denoted by span($v_1, ... , v_m$)

The span of the empty list $()$ is defined to be {0}
```

#### Properties
The span of elements A in V is the smallest subspace in V that contains all of A
This is because the span closes it under SCAMUL and addition, so it satisfies the requirements for a subspace.

### Finite-dimensional vector space
```ad-def
A vector space is called *finite-dimensional* is some list of vectors in it spans the space
And, if there isn't, then it is *infinite-dimensional*.
```

### Polynomial
```ad-def
$p(z) = a_0 + a_1z + a_2z^2 + ... + a_mz^m$
```


### Linear Independence

```ad-def

A list $v_1, ... , v_m$ of vectors in V is called *linearly indepentant* if the only choice of $a_1, ... , a_m \in F$ that makes $a_1 v_1 + ... + a_m v_m$ equal 0 is $a_1 = ... = a_m = 0$

```

if $a_1 v_1 + ... + a_m v_m = 0$ can only be satisfied when all $a$ are 0, then the list is *linearly independent*

Subtract first term from both sides, $a_2 v_2 + ... + a_m v_m = -a_1 v_1$  -- unless this is 0=0, then $v_1$ can be represented as a linear combo of the others.

Which means, that something is linearly independent if and only if (iff) each vector in the span($v_1, ... , v_m$) has a unique representation as a linear combination of $v_1, ... , v_m$.


#### Properties
As in, there is no repeat information! Everything is independent of each other.

Each vector in the span of the input has only ONE representation as a linear combo of the input vectors.

Can check if a set of vectors is linearly independent by creating a matrix out of them, then trying to reduce to reduced row echelon. If you can reduce it, then it is independent. Otherwise, it is linearly dependent.

Or, if it's a square matrix, you can take the determinant. If it's not 0, then it's independent. If it is 0, then it's dependent.

If all vectors give unique information, then it is linearly independent.



### Linear Dependence
```ad-def
A list of vectors V is *linearly dependent* if it is not linearly independent. 
Or, if there exists some $a_1 , ... , a_m$ not all 0 such that $a_1 v_1  + ... +  a_m v_m = 0$
```
This means that there is redundant info, and that at least one of the vectors in the input list can be represented as the linear combination of the other ones.


#### Properties

Every list of vectors in V containing the 0 vector is linearly dependent. This is because you can you can multiply $v_0$ by any scalar and get 0.


### Linear Dependence Lemma

```ad-def
It states that given a linearly dependent list of vectors, one of the vectors is in the span of the previous ones and furthermore we can throw out that vector without changing the span of the original list.
```
Which makes sense, because it is redundant info.



