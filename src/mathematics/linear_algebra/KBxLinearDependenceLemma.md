---
title:   Linear Dependence Lemma
context: linalg
author:  Huxley Marvit
date: 2021-10-02
---

#atomic 
sourced from [[KBx2AExercises]]

***

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