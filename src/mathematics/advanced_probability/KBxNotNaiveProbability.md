---
title:   Not naive probability
context: advprob
author:  Huxley Marvit
date: 2022-01-18
---

#flo  #inclass 

***

# probability


given a sample space, a **probabilty map** P is a function from subsets of $\Omega$  to [0,1]
where $P(\Omega)$ = 1


can imagine a bunch of disjoint sets, $A_1, A_2, A_3,$ ect. then the prob
$$
P(U^\infty_{i=0} A_i) = \sum_{i=1}^\infty P(A_i)
$$
where all $A_j$ are disjoint.

note: $\Omega$ and the empty set are disjoint
$P(A^c)$ means a complement, or every outcome not in A, is just $1-P(A)$. 

## inclusion / exclusion

overlapping sets, A and B
counting formula, P(A union B) = P(A) + P(B) - P(A intersect B) #extract

if we have three, $P(a \cup b \cup c) = P(A)+P(B)+P(C) - P(A \cap B)  - P(B \cap C) - P(A \cap C) + P(A \cap B \cap C)$

demotmot's problem? de montmort. 

$A_i = i^{th} \textrm{ card has the number i on it}$
$P(winning) = P(A_1 \cup A_2 \cup \dots A_n)$
$=\sum P(A_i) - \sum P(A_i \cap A_j) + \sum P(A_i \cap A_j \cap A_k)$
.... ?? goes to 1-1/e


this is called a derangment
> In combinatorial mathematics, a derangement is a permutation of the elements of a set, such that no element appears in its original position. In other words, a derangement is a permutation that has no fixed points. -wiki

## independence

if we flip a coin and then roll a die,
P(2H) = P(H) P(2) = 1/2 * 1/6 = 1/12

2 events A and B are independent if $P(a \cap B) = P(A) * P(B)$




















