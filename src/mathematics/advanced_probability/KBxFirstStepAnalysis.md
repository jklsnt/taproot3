---
title:   First Step Analysis
context: advprob
author:  Huxley Marvit
date: 2022-02-01
---

#flo #inclass 

***

# first step analysis!

## ameoba prob:
- every step, it can 
	- die
	- do nothing
	- split into two
what is the prob that it goes extinct?

we can do something called first step analysis, and get that P(D) = 1


## gamblers ruin
repeated bets
A wins bet with prob $p$
and B wins w/ prob $q$, which is $= 1-p$
which is symmetric.

A starts w/ i dollars, and B starts with N-i dollars

$pi=P(\text{A wins game | A starts with i}) = p p_{i}+1+q+p_i-1$
diff eq time?

so we make a geuss, like $p_{i}= x^i$ which is wrong but helpful
we do some algebra, and get $x=1 \text{ or } x=\frac{1-p}{p}=\frac{q}{p}$
and then we do diff eq. and get $p_{i}=A(1)^1+B(\frac{q}{p})^i$ for constants A and B
wtf??





