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

```python
import matplotlib.pyplot as plt
   
Year = [1920,1930,1940,1950,1960,1970,1980,1990,2000,2010]
Unemployment_Rate = [9.8,12,8,7.2,6.9,7,6.5,6.2,5.5,6.3]
  
plt.plot(Year, Unemployment_Rate, color='red', marker='o')
plt.title('Unemployment Rate Vs Year', fontsize=14)
plt.xlabel('Year', fontsize=14)
plt.ylabel('Unemployment Rate', fontsize=14)
plt.grid(True)
plt.show()
```

```sage

```












