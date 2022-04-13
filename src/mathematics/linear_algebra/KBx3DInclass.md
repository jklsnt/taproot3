---
title:   Chapter 3D Inclass
context: linalg
author:  Huxley Marvit
date: 2021-11-29
---

#flo  #inclass 

***

# Let's review
inclass notes on [[KBxChapter3DReading]]

### singularity
- non-singular :: has in inverse! it is not, singular.
- lots of things are equivalent to invertibility, like 
	- systems of equations,
	- determinants (they do exists, axler!)
		- |A| != 0
	- ect.

$Ax = b\ \textrm{has only one solution} \leftrightarrow \textrm{A is nonsingular} \leftrightarrow \textrm{A has an inverse} \leftrightarrow |A| \neq 0 \to null A = {0}$

- inverse of a matrix, pulls from ofc inverse of multiplication
	- cus 1/x is the multiplicative inverse

- invertibility is equal to bijectivity!
	- the proof: 
		- assume invertible, show injective and surjective
			- use the inverse to make things equivalent
			- prove injective and surjective
		- other direction,
			- defines two identity maps, proves linearity

- #question : does bijectivity imply linearity? it should..
	- because, bijectivity means invertibility.. prove this later?
	- supposedly it's an iff? no..
	- NO! this is **WRONG**! smh. just make a peicewise function.


### isomorphism! 
#extract

- strong, but not quite as strong as equal
	- not equal, cus can be diffs in formatting, but they *function* the same way
> practically equal

#question is a vec space isomorphic to itself? ~nina
yes, just follow the def!

- isomprhism is a superset of equal
	- any equal vec space is isomorphic, but isomorphic doesnt nessasarily mean equal
	

#### isomorphism relations

> all we care about is whether they have the same dimension

same dimension only shows that vec spaces are isomorphic if they are over the *same* field. otherwise, we don't know.

$L(V,W)$ and $F^{m,n}$ are isomorphic
the zero in $M(T) = 0$ is the zero matrix, so an m\*n matrix full of zzeerohws.

### operators
- can be injective but not surjective and vise versa
	- on inf dim vec space?

- BUT! on finite dim vec spaces, either injectivity or surjectivity is enough.
- we already showed that bijective means invertible, now we only need one, and we can show that they are all equal

```ad-def
title: nullity
dimension of the null space
eg. "nullity of zero"
```

- remember, 0 is not linearly independent! little bit wack
	- can take lots of non-trivial combos of 0 to get zero
	
- injectivity and sujectivity behave diff on operators


### wrapping up
we are not doing proof presentations, we are gonna work in small groups. and we get to choose!

we should mostly be prepping for the **3 hour exam all of next week!** 

and make sure that we posted our proof presentations to the discussion page
























