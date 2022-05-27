---
title:   Important Inequalities in Probability
context: probability
author:  Huxley Marvit
date: 2022-05-27
---

#flo  #inclass 

***
# Inequalities!
## cauchy-scharzt
- says that $|E(XY)| \leq \sqrt{E(X^2)E(Y^2)}$
	- given a case $E(X) = E(Y) = 0$
		- E(XY) = Cov(X,Y)
			- E(X^2) = Var(X)
			- E(Y^2) = Var(Y)
		- which means that $|\text{Corr}(X, Y)| \leq 1$

## jensen's inequality
given a [[KBxRandomVariables]] $X$,

some convex function g:
	$E(g(X) \geq g(E(X))$

> **convex** :: concave up
> 	equivalent to second derivative being ≥ 0

if it is concave down, flip the inequality! 

## markhovs inequality 
- consider a setup where
	- you ask a bunch of people what their income is
		- you get an average of $100,000
			- then 2/3 group having income over $200,000 is **impossible**
				- instead, the maximum fraction of people over $200,000 is 1/2
				- or, $P(|X| > a) < \frac{E(|X|)}{a}$ 
					- a > 0 


## chebychev inequality 
$P(|X - \mu| > a) \leq \frac{\sigma^{2}}{a^2}$ 
where $\sigma^{2} \to \text{Var(X)}$
and $\mu \to E(X)$











