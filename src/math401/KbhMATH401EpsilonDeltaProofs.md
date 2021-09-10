---
title: Epsilon Delta Proofs
source: KBhMATH401Limits
author: Houjun Liu
course: MATH401
---

# Epsilon Delta Proofs
The secrets of the limit

## Formal Definition of a Limit
 \definition[for all $\epsilon > 0$, there exists a $\delta$ such that $if\ 0<|x-a|<\delta,\ then\  0<|f(x)-L|<\epsilon$]{Limit Definition}{$\lim_{x\to a} f(x) = L$}
 
## An Epsilon Delta Proof
Let's prove $\lim_{x\to 2} x^2 = 4$ together!

The crux of the proof is to come up with a value $\delta$ that is a function of $\epsilon$ assuming that $0 < \epsilon$  that meets $0<|x-a|<\delta$. 

Oh, here's some symbols

| Symbol    | Definition    |
|-----------|---------------|
| $\forall$ | For all       |
| $\exists$ | There exisits |
| $s.t.$    | Such that     |
And so, the formal and pretentious definition of a limit:

$\lim_{x\to a} f(x) = L\ where\ \forall \epsilon > 0, \exists \delta > 0,\ s.t.\ 0<|x-a|<\delta \to |f(x) -L|<\epsilon.$ 

This needs to go before **every Epsilon Delta proof.**

* Step 1: Re-write the Definition Above w.r.t. the function
* Step 2: Do scratch work to identify delta
* Step 3: Plug it in to verify
