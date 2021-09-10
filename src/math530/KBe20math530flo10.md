---
title:   Flo 10
context: 20math530
author:  Exr0n
source:  KBe2020math530floIndex
---

#flo

# Span

## Smallest/largest containing subspaces
- Spans are not the largest vector space that contains the given vectors
![[Pasted image 20200924131215.png]]
- The span of that vector is a line. It's a subspace. But it's not the biggest, because there's also R^2

## Spans tend to be infinite
- Usually a span has infinitely many vectors (unless you're in a weird field (modulo) or have the zero span)
- In the span of just one vector, you can multiply by any scalar which there tends to be infinite of
![[Pasted image 20200924131215.png]]
- The span of that vector is a line. It's a subspace. But it's not the biggest, because there's also R^2
- It only won't be infinite if your span is the span of $()$ (empty list)

## Given a linearly independent set of vectors, would the span equal to the vector space?
- No? It's unclear which vector space is being referred to.

## Span of vectors (example 2.6)
- When it's two vectors, you'd expect the span to be a 2d plane unless the vectors are parallel
	- In other words, if they are linear combinations or scalar multiples of one another
	- A linear combination on one other vector is the same as a scalar multiple
	- in 2space they have to not be colinear, in 3space they have to not be coplanar.
	- They have to be linearly independent
- That probably generalizes to higher and lower dimensions

## Adding a vector doesn't make the span smaller
- Because you can just do what you had originally and make it's coefficient zero

## Size of spans/subspaces
- You can't really just count the number of vectors, because say a line and a plane both have infinite points
- But we still want a plane to be larger than a line and a space to be larger than a plane
- So one way we compare is to say $A$ is larger than $B$ if $B$ is strictly contained within $A$
- something like "dimensionality", maybe the minimum number of vectors needed for their span to be equal to the space 

# 2.7 Span is the smallest containing subspace
- First the proof shows that the span is a subspace
- Then, because the span only neds to contain each vector and be a subspace, any subspace containing those vectors will at least contain the span.

# Linear Dependence
- When one of the vectors provides no "new information" aka can be constructed by a linear combination of vectors you already had
- It's a property of a set of vectors, not just one vector. A single vector is always linearly independent on its own, because there's nothing else to depend on.
- The span of the zero vector $(0)$ is linearly dependent on itself, and you already don't really get anything. So we usually talk about it as a span of no vectors $()$

# Rotation matrices
- Find a formula
- Prove the formula
- maybe draw a picture
- [[KBE2020math501floMatriciesAsTransformations]]

---
