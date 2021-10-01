---
title:   Chapter 2A Reading Notes
context: linalg
author:  Huxley Marvit
date: 2021-09-21
---

#flo #hw

***


# Finite-Dimensional Vector Spaces

```ad-tip
title: Review
F denotes R or C
V denotes a [[KBe20math530refVectorSpace]] over F 
```


- lin alg does not focus on arbitrary vector spaces
- it focuses on finite-dimensional vector spaces!

```ad-abstract
title: learning objectives for the chapter
- span //covered in section
- linear independence //covered in section
- bases 
- dimension

```

- **notation**:
	- lists of vectors:
		- (2,1,4),(3,2,5)
			- list len 2 of vectors in R^3
		- n-tuples without surrounding parens
		
- *linear combination*
	- a linear combination of _x_ and _y_ would be any expression of the form _ax_ + _by_, where _a_ and _b_ are constants ~wiki
	- multiply each element in a list of vectors by an element in F
	- and then add them up!
	- any relation between the element scalar and what's being multiplied? can the scalars repeat?  #question
		- yes, yes they can.
	
- *span*
	- the set of all linear combos of a list of vectors
		- denoted: span(v1,...,vm)
	- span of empty list is {0}
	- aka. linear span
- [[KBxSpansLinAlg]]

```ad-tip
the span of a list of vectors in V is the smallest subspace of V containing all the vectors in the list

```ad-question
but don't you get out a single vector at the end..? because you add them? #question no! because it's the *set* of all linear combos
```

- *finite-dimensional vector space
	- a vector space is called finite-dimensional if some list of vectors in it spaces the space
		- spans the space..?
		- ????


- linear independence
	- a list of vecors in V where the only choise of a1 ... am in F that makes a1v1 + ... + amvm = 0 is a1 = ... = am = 0
	- uniqe way to get 0?
- lineary dependant 
	- opposite, can get to 0 with non-zero scalars
- [[KBxLinearIndependence]]

#review the end here
#todo some exercises




























