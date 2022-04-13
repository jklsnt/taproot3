---
title:   LinAlg flo 14
context: 20math530
author:  Exr0n
source:  2020MATH530/KBe2020math530floIndex.md
---

#flo 
#disorganized #incomplete


# Administrative bits
- Will present problems from 2.B and/or 2.C next week
- Mini quiz, stop yourself after an hour
- and give your subconscious a chance to think about things
- **No need to say "clearly", "obviously", "evidently"**

# #icr Axler2.C
#source Axler Linear Algebra Done Right 2.C
## Polynomials are vectors
- because you can add and scale them and they are kind of nice in general

## The box under 2.38 
- You can't understand a vector space just by knowing the vectors inside
	- you also need to know the field that you are in
	- See 2.A ex5
- The field that you are over changes your dimension: usually we think of $\mathbb{C}$ as a vector space over $\mathbb{R}$, but in this class we think of it as over $\mathbb{C}$, which means $\text{dim }\mathbb{C} = 1$

## Axler2.41
- It's my question! See [[KBe20math530floQuestions]]

## Axler2.42
- #tip If it's a spanning list that's the right length, then it's a basis and therefore linearly independent.
- If it's a linearly independent list and it's the right length, then it's a basis and therefore spanning.

## Axler2.43 Dimension of a Sum
### An Example
- If you have two planes in 3 space, and they intersect at exactly one line, then you can't just add the dimension of the two planes (2+2 = 4 which is more than 3 space can allow). 
	- If the planes are parallel, and both subspaces, then we know they both go through the origin and thus are the same plane. 
	
### Some tips
- Usually easiest to get a basis of a subspace by building on instead of taking out
	- for example if you have a slanty plane in 3 space, and you start with standard basis, then you won't even get the slanty plane.

### The span is $U_1+U_2$
- Because it's a double containment
	- $span \subset U_1+U_2$
	- $v \in span \implies v = a_1u_1 + \ldots + a_mb_m + b_1v_1 + \dots$
	- For all $u$. in the span, you can write it as something in $U_1$ + something in $U_2$

---
