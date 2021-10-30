---
title:   Linalg 3A 12
context: linalg
author:  Huxley Marvit
date: 2021-10-27
---

#ref #disorganized #incomplete #hw

***

# Problem 12!

```ad-abstract
title: the problem

Supposed V is finite-dimensional with $\dim V \gt 0$< and suppose $W$ is infinite-dimensional. Prove that $L(V,W)$ is infinite-dimensional.

```

the set of all linear maps.. which are just a bunch of transformations like matrices.

we can do.. proof by ~induction?

ie. prove that we can do $T(a_1, a_2, \dots, a_n) = (a_1, a_2, \dots, a_n, 1)$
and therefore, we can extend it to infin and prove that it works


to do so, we need to prove that each linear map is:
- associative
- homogeneity

no! instead, we can do: 
$T(a_1, a_1, \dots, a_n) = (a_1, a_2, \dots, 1_j,  a_n, 0_1, 0_2, \dots, 0_\infty)$


essentially, have an inf len list of zeroes at the end, then set the first index to 1, then the next, then the next, ect. 

OR!

we can show that an inf len transformation works, and prove that therefore the whole thing needs to be inf len.




```ad-def
inf dimensional:
if there is no spanning set
```



len list LID <= len span list

prove that every new vec is linearly indpendent 
inf list of LID lists



2.15: def inf dimensional
2.10: finite dimensional
2.23: len of LID list <= len spanning list
2.17: linearly indipendent


define a transformation 
- prove inf dimensional
- prove not finite dimensional
- prove that there isnt a spanning list
- len LID <= len spanning list, inf len LID list means no spanning list
- thus, we can say it's inf dimensional



$∀𝑥((𝑥∈𝑆∧𝑥≠𝑎)→⋯)$

for all b except 

if 
where b_k = a_1 and 

all b = 0, b_k 
b = 0, 
for all b_j, b = 0. 
if  = k, b = a_1

all b except b_k = 0. b_k = a_1
$$\forall b\ |\ b \in (b_1, b_2, \dots) ∧ b \neq b_k,\ b = 0.\ b_k = a_1$$
b_j = 0
if j = k, b_j = a_1

{{b_1, b_2, b_3, \cdots | b_i = \begin{cases} { 0 & \ a_1 & i = k} }}

$$\{b_1, b_2, \cdots | b_j = \left\{\begin{array}{lr} a_1 & \text{if }j=k \\ 0 & \text{otherwise} \\ \end{array}\right\}\}$$

