---
title:   Chapter 2.A exercises
context: linalg
author:  Huxley Marvit
date: 2021-09-28
---

#ret #hw

***


# 2.A Exercises

```ad-abstract
Please reconsider the questions from Friday now that we have discussed them and part of Chapter 2.A. Do you have any questions about the proof of the Linear Dependence Lemma?? See if you can pin down any points where you lose the thread of the proof, and submit those questions and your updated answers for this assignment.

Be sure to try a few problems, so you have some ideas to share with your classmates on Thursday! Ideally consider at least three and complete at least one, but you don't have to submit those yet, just bring your ideas to class.

And if you haven't brought in your old quizzes, please be sure to do so!
```



### Linear Dependence Lemma
- Why do we care that j is the largest element? #question
	- So we can add up everything before it? Just arbitrary?
	- Oh, so we can cancel *everything* after it.
	- Can also choose the smallest, it's just about segmenting

- How does 2.22 work? #question 
	- To get to 2.22, subtract everything but $a_j v_j$ from both sides of $a_1v_1+...+a_mv_m=0$ 
	- Everything past $v_j$ has to equal 0.
	- So we get $a_j v_j = -a_1 v_1 - ... - a_{j-1} v_{j-1}$
	- Divide by $a_j$ and we get 2.22
	- Thus, $v_j$ is a linear combination of the other vectors
	- And in the $span(v_1,...,v_j-1)$
- What $v_j$ is it replacing? #question
	- It's replacing what's in the "...", which is unclear.. is $v_j$ actually in the equation then? Or just in the value? #question
	- Now, we can remove the $j^{th}$ finally, and represent it as the linear combination of the previous elements
	- $\therefore$ any element of the span can be represented without $v_j$
This is called a direct proof!
Also, we can iterate this process until we get a linearly independent list.

### A few problems
~Fibonacci! 

##### excr. 3
Find a number $t$ such that $(3, 1, 4), (2, -3, 5), (5, 9, t)$ is not linearly independent in $R^3$
***
Set up system of equations, 
$3a + 2b = 5$
$a - 3b = 9$
$4a + 5b = t$

solve, get $b=-2$ and $a=3$
plug it back in, $4(3)+5(-2)=2=t$

**answer: 2**

*ah, 2.2 != 2.20 -- nice.*


##### excr. 5
a. show that if we think of C as a vector space over **R**, then the list (1+i, 1-i) is linearly **independent.**

b. show that if we think of C as a vector space over **C**, then the list (1+i, 1-i) is linearly **dependent.**

Means: use scalars from R in the vector space C?
***


a. $a(1+i) + b(1-i) = 0$

prove that the only values of $a$ and $b$ are 0, thus satisfying the linear independence definition.

move i to only one side,
$a+b=i(b-a)$
since $a+b$ comes from R, and R is closed under addition, $a+b$ cannot have a complex component. 
$\therefore$ $a$ and $b$ must $=0$


***

b. $a(1+i) = b(1-i)$

let $b = i$
let $a = 1$

$i(1-i) = i-i^2 = 1+i$
$\therefore$ we can represent $(1-i)$ in terms of $(i+1)$ with scalars from C, and thus, it is linearly dependent.


##### excr. 8
prove or give a counterexample: If $v_1, v_2,...,v_m$ is a linearly independent list of vectors in V and $\lambda \in F$ with $\lambda\ != 0$, then $\lambda v_1, \lambda v_2,...,\lambda v_m$ is linearly independent.
***

 $a_1 v_1 + a_2 v_2 + ... + a_m v_m = 0$ only if all scalars are equal to 0, as given in the definition
 
 $\lambda(a_1 v_1 + a_2 v_2 + ... + a_m v_m) = 0$
$\lambda \cdot 0 = 0$ 
 $\lambda a_1 v_1 +\lambda  a_2 v_2 + ... +\lambda  a_m v_m = 0$ only if all scalars are equal to 0
 $\therefore$  $\lambda v_1, \lambda v_2,...,\lambda v_m$ is linearly independent.

***

Draws from: [[KBxLinearIndependence]] [[KBxSpansLinAlg]]

***

In class review #extract

# In class after

## Direct sums
Don't have the same rules when you add two together and many together!
Intersection of zero != direct sum when you are adding more than one.

$
u_1 + u_2  + ... + u_n = \{u_1+u_2  + ... + u_n \mid u_1 \in U_1 , ... ,  u_n \in U_n\}
$

If the direct sum requirements are not true, then it's just a sum.

Direct sum is all possible combos? 

When all the vectors inside the direct sum are linearly dependent, then you can't make a direct sum with them? Because really, $u_1 \in u_2$
Because the sums will not be unique. **Redundancy!**

$
U_1 = \{\begin{bmatrix} 
 1 \\
 0   
 \end{bmatrix}\}
$
$
U_2 = \{\begin{bmatrix} 
 2 \\
 0   
 \end{bmatrix}\}
$ doesn't work, cus you can just multiply all in $U_1$ by 2 to get things in $U_2$

#question how do finite fields work?
field is just 0 and 1? but what about being closed under addition?


**Trivial**: the simplest one? how do you quantify that? #question
Just about zeros?

Interesting concept: Step 1, to Step J. Represent algo's as an example first, then the final iteration?

Instead of just one generalized loop.
















