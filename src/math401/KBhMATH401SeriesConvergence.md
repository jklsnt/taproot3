---
title: Series Convergence
source: KBhMATH401SubIndex
course: MATH401
author: Houjun Liu
---

# Series Convergence

## Geometric Series

In $\sum_{k=0}^\infty a(r^k)$, where $|r|<1$, the series converges to $\sum_{k=0}^\infty a(r^k) = \frac{a}{1-r}$ 

In $\sum_{k=0}^n a(r^k)$,  $\sum_{k=0}^n a(r^k) = \frac{a-ar^{n+1}}{1-r}$ 

## nth term divergence test
If $\lim_{n \to \infty} a_n$ is not zero, the series **will** diverge. The inverse is not necessarily true; that is, if this fails, use another test to test convergence.

## Intergral Test

If the intergral to infinity is convergent, the sequence is convergent as long as the sequence is continuous, positive, and decreasing. The inverse applies, too.

## Power Series
$\sum^{\infty}_{n=1} \frac{1}{n^p}$

If a p-series has a p > 1, the p-series will converge

If a p-series has a p <= 1, the p-series will diverge

## Comparison Test

Both provided that $a_n,b_n \geq 0\ \&\ a_n \leq b_n$

![[Pasted image 20210308082352.png]]

![[Pasted image 20210308082201.png]]

Also, if $\lim_{n \to \infty} \frac{a_n}{b_n} = C\ (0<c<\infty)$, the two series will either both converge or both diverge. So you only need to test one.


## Alternating Series Test
![[Pasted image 20210309081249.png]]

## Ratio Test
In a geometric series, the common ratio is simply $r = \frac{r^{n+1}}{r^n}$.

If $r$ is an real value, $|r|<1$, then series converges. If $|r| \geq 1$, the series diverges.

As limit goes to infinity in the $r$, if the common ratio approaches <1, that means that the ratio will get smaller and smaller, just like if $r$ were to be a real value and it was smaller than one. Meaning that the series **converges.**

![[Pasted image 20210310083028.png]]

And so, formally.

![[Pasted image 20210310083142.png]]

The inverse is true, too.

**However, if the ratio is equal to one, the test is inconclusive.**

***

Absolute Convergence => series who converge and whose absolute value converges

Conditional Convergence => series who converge and whose absolute value does not converge

## So what is the error of a talor series? (Lagrange Error)
The error at point $x$ of a $n$th degree talor polynomial centered at $a$ modeling a function with an absolute maximum value of $M$ in its $n+1$th dervitave between a bound containing $x$ and $a$:

$|E(x)| \leq \frac{M(x-a)^{n+1}}{(n+1)!}$


## Power Series
$f(x) = \sum_{n=0}^{\infty} a_n(x-c)^n= a_n(x-c)^0 + a_n(x-c)^1 ...$

For instance, a geometric series is a special power series...

$g(x) = \sum_{n=0}^{\infty} = ax^n$

This geometric series converges if $|x|<1$, and so it has an interval of convergence of $-1 < x < 1$. If this converges, this function will converge to $\frac{a}{1-x}$

**Interval of Convergence**: at what values of $x$ does the series converge?

**Radius of Convergence**: at what absolute distance from $c$ (the "centering" of the series) will the series converge?

To figure the interval of convergence, simply use the ratio test and solve for $x$ that makes the ratio $< 1$. Then, think about the inconclusive cases whereby ratio $= 1$ — then, use the comparison test, or intergral test.

![[Pasted image 20210317084838.png]]

**Derivatives, intergrals have the same radius of convergence as the parent function, but their interval may be different due to different behavior at endpoints**