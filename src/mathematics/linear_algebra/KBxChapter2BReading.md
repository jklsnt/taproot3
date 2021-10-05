---
title:   Axler Chapter 2B Reading
context: linalg
author:  Huxley Marvit
date: 2021-10-02
---

#flo #hw #reading

***

# Bases !


- types of lists, so far
	- [linearly independent lists](KBxLinearIndependence)
	- spanning lists 
		- list of vecs, that when span()-ed, contains all the elements of the vector space. 
		- ie. you can use linear combo of the original list to get to every element in the vector space

```ad-def 
title: basis
a *basis* of V is a list of vectors in V that is [linearly independant](KBxLinearIndependence) and [spans](KBxSpansLinAlg) V
```

such as, 

```ad-example
standard basis of $F^n$ is $(1,0, ... ,  0), (0,1, ... ,  0) , ... ,  (0, ... ,  0,1)$
$(1,2),(3,5)$ -> basis of $F^2$

```

- things can have many basis!

### criterion for basis

```ad-def
title: criterian for basis
a list $v_1, ... ,  v_n$ of vectors in V is a basis of V iff every $v \in V$ can be written uniqely in the form
$$ v = a_1 v_1  + ... + a_n v_n$$
where $a_1, ... ,  a_n \in F$
```
essentially, for a list of vectors in V to be a basis of V, every element in V has to be written uniqely as the linear combo of the org list of vectors. uh, #review



### spanning lists and basis
- spanning list isnt nesasarrily a basis cus they don't need to be linearly independent
	- but, each spanning list does contain a basis
- each spanning list can be converted to a basis through the removal of some number of elements

- but also, every linearly independent list extends to a basis
	- can be extended to a basis



































