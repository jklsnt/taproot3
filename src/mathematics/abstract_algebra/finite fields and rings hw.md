---
title:   Finite fields and rings
context: abstract
author:  Huxley Marvit
date: 2022-09-01
---

#ret #hw 

***

# Finite fields and rings

![[KBe20math530refField#Fields]]
and a throwback to Axler 2.A,
![[KBx2AExercises#^319b41]]


> Based on the [[finite groups hw|previous homework assignment]], give some examples of **finite** fields (which are also always finite rings). 
> Can you give examples of finite rings that are not finite fields?
> Recall that the integers are our canonical example of a ring. Can you find **subrings** within the integers?

$\mathbb{Z} \pmod n$ where $n$ is prime are finite fields.

If $n$ is not prime, then the set will necessarily contain a factor of $n$. This factor will multiply cleanly into $n$ and thus skip directly from $n$ past the multiplicative identity back into itself.

For example, 2 has no multiplicative inverse in $\mathbb{Z} \pmod 4$
$$
\begin{align*}
&2\cdot2 \pmod 4 = 0\\
&2\cdot3 \pmod 4 = 2\\
&2\cdot4 \pmod 4 = 0\\
\end{align*}
$$

With rings, there is no need for multiplicative inverses and thus no need for $n$ to be prime, so $\mathbb{Z} \pmod n$ form finite rings.

Similarly, $\mathbb{Z} \pmod n$ where $n$ is not prime form finite rings that are not finite fields.

As for subrings... uh..

Using the normal definitions of multiplication and addition as defined on the integers, the subring must contain the multiplicative and additive identities 0 and 1. Then, 1 can be added onto itself infinitely, meaning no subring can be created. Or at least no subring that I can find before class tomorrow.

Additionally, an interesting question from @albert:
> "Can you ask Jana: you know how in base 10 the 3 divisibility test is to add up all the digits? In general, is there a number whose divisibility test is to add up all the digits in every base?"








