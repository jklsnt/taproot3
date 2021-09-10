---
title:   flo 11
context: 20math530
author:  Exr0n
source:  KBe2020math530floIndex
---

#flo 

# Polynomials 
- See [[KBrefPolynomial]]

## 0 polynomial
- Has degree $-infty$
- Degrees are usually positive, except for the $0$ degree
- "that's too hard, and we're not going to do it here"

## Identically zero
- Like $0$ or $0 x^0$
- Most polynomials are sometimes zero, but polynomials that are "identically zero" means that it's always zero (instead of just sometimes zero)

## $\mathcal{P}_m(F)$
- Polynomials with coefficients in $F$ whose highest degree is $m$
- It can't be "whose degree is exactly $m$" because otherwise you won't have the identity and it won't be closed under addition (in the case where coefficient sum $a_m + b_m = 0$)

### It's a finite dimensional vector space
- $$a_0z^0+...+a_mz^m + b_0z^0 + ... + b_mz^m = (a_0+b_0)z^0 + ... + (a_m+b_m)z^m$$

## Proof of 2.16
- Structure: proof by contradiction

# Linear Independence
- "non-trivial" means "simplest possible", which has usually got the most zeros
- See [[KB20math530refLinearIndependence]]

## 2.21 Linear Dependence Lemma 2.21
#toexpand
- it's saying that any linearly independent list has a vector inside that doesn't "contribute anything", and that if you remove it you'l have the same span. Implicitly, maybe through induction?) if you remove a dependent vector enough times then you get a linearly independent list.
- The list $(1, 1, 1), (2, 2, 2), (3, 3, 3)$ is really dependent, but $(0), (0), (0)$ is the most dependent (you have to remove all to get independence).

<p style="page-break-before: always"></p>
- how
- to
- pagebreak

---

# Exercise 2.A.1
## Lemma
> If vectors $v_1, v_2, v_3, v_4$ span $V$, then the list
> $$v_1-v_2, v_2-v_3, v_3-v_4, v_4$$
> also spans $V$.

## Proof
We prove the lemma by showing that any vector $v \in V$ can be written in the form $a_1v_1 + a_2v_2 + a_3+v_3 + a_4v_4$ can also be written as a linear combination of the form
$$
b_1 (v_1-v_2) + b_2 (v_2-v_3) + b_3(v_3-v_4) + b_4v_4
$$

If we set
$$
\begin{aligned}
b_1 &= a_1\\
b_2 &= a_1 + a_2\\
b_3 &= a_1 + a_2 + a_3\\
b_4 &= a_1 + a_2 + a_3 + a_4\\
\end{aligned}
$$
then the two combinations will be equivalent:

$\begin{aligned} &a_1(v_1-v_2) + (a_1+a_2)(v_2-v_3) + (a_1+a_2+a_3)(v_3-v_4) + (a_1+a_2+a_3+a_4)v_4\\ =  &a_1v_1 \cancel{- a_1v_2 + a_1v_2} +a_2v_2 \cancel{- (a_1+a_2)v_3 + (a_1+a_2)v_3} +a_3v_3 - \cancel{(a_1+a_2+a_3)v_4 + (a_1+a_2+a_3)v_4} + a_4v_4\\ = a_1v_1 + a_2v_2 + a_3v_3 + a_4 v_4 \end{aligned}$

---
