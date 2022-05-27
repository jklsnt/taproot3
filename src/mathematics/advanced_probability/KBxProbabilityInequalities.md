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
- says that $|E(XY)| \leq \sqrt{E(X)^{2}E(Y)^{2}}$
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
















