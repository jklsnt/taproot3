---
title: Solving Limits with Elimination
source: KBMATH401ComputingLimits
course: MATH401
author: Houjun Liu
---

# Solving Limits with Elimination

With solving limits via elimination, we are tipically analyzing a rational function that needs factoring of a term out of the polynomials on the top and/or the bottom to get out of the indeterminate form $(\frac{0}{0})$.

* Try factoring both the top and bottom
    * $(x\pm1)$
    * $(x\pm2)$
* Rationalize all of the square roots

Tip for picking factors

***

**Tip!** If you plug in a value to an expression, and out pops 0, that value is a **zero** of the expression. It is helpful like this

Factor: $(x^6-1)$

As you could see, plugging $x=1$ yields $0$, meaning that $(x-1)$ is a **zero** of $(x^6-1)$, and hence would be able to be factored out.

To factor it out, either do synthetic division or long division.

***

Let's do a problem solve for $\lim_{x\to 2} \frac{(x^2-4)}{(x-2)}$

1. First, notice the fact this function will have a hole at $x=2$. This is especially important because after we simplify we will loose this hole. 
2. Ok, now let's simply. $\frac{(x^2-4)}{(x-2)} = \frac{(x+2)(\cancel{(x-2)})}{(\cancel{x-2})} = (x+2)$
3. Great! So, we know that this function behaves linearly with simply a hole at 2.
4. Doing the double-sided limits…
    * Evaluating $\lim_{x\to2^+}$, the value will be $4$ because $2+2=4$.
    * Evaluating \
 
 Here's another one! $\lim_{x\to0} \frac{\sqrt{x+4}-2}{x}$
 
 1. First, notice that if we are going to solve this problem, we have to divide the top thing ($\sqrt{x+4}-2$) by $x$, somehow 
 2. The only thing we could do here is rationalize the top by multiplying the whole faction by a fancy one $\frac{\sqrt{x+4}+2}{\sqrt{x+4}+2}$.
 3. This results in $\frac{x+4-4}{x\times(\sqrt{x+4}+2)}$, which simplifies to $\frac{\cancel{x}}{\cancel{x}\times(\sqrt{x+4}+2)}$
 4. Plugging in $x=0$, you get $\frac{1}{4}$.
 
 **If there is no factors, you got yourself a vertical asymtote. Refer to #missing #disorganized for solution!**
 
 
