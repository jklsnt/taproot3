---
title:  Chapter 1.B
context: MATH530
author:  Huxley Marvit
source:  #KBxLinAlgMasterIndex
---

#flo #ref  #hw

---


# def of a vector space
- **Props of addition and scalar multiplication in F^N**
	- +: comutative, associative, identiy
		- every element has an additive inverse
	- \*: associative, identity
	- addition and scalar multiplication, connected by distributive props


- let *V* be a set with an addition and scalar multiplication that satisfy the props,
```ad-def
**addition, scalar multiplication**
- addition: assigns an element u+v in V to each pair of elements u, v in V
- scalar multiplication: lv with l in f and v in V

```


```ad-def
**vector space**
is V with addition and SCMUL with:

- commutativitity
- associativity
- additive idenitity
- additive inverse
- multiplicative identity
- distibutive properties
```
- no multiplicative inverse?
	- is this how you solve the 0 issue?
- vec, point 
	- elements of vec space are called vecs or points
- simplest vec space: $\{0\}$
- f^infin is the set of all seqencues of elements of F
	- additive identity: seqnece of all zeros
- vector space can include a set of functions? not quite..
	- let S be a set, and F^S be the set of functions from S to F
	- what?? #review 
- let S be the interval [0,1] and F=R
	- R^\[\0, \1\] is the set of real valued function on the interval [0,1]
	- ??
- F^N -> F^{1,2,...,n}
- F^infin -> F^{1,2,...}
- vector spaces need unique additive inverse
	- 0'=0'+0=0+0'=0
		- nicer than my proof
- unique additive inverse
	- w=w+0=w+(v+w')=(w+v)=(w+v)+w'=0+w'=w'

```ad-important
V denotes a vector space over F
```



```ad-question
1. no multiplicative inverse required?
2. what does the set of functions from S to F mean?
```

## exercises
1. prove that -(-v) = v
	1. -(-v) = -1(-1v) = (-1\*(-1))v  = 1v = v
2. ab = 0, prove that a or b = 0
	1. a=0/v = 0, v=0/a = 0
4. empty set is not a vector space, it fails to satisfy only of the reqs. which one?
	1. no additive idenity
		1. "there exists an element 0 in v" no there doesn't. 




homework: [[KBxSolvingSystems]]









