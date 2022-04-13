---
title:   Linear Independence
context: linalg
author:  Huxley Marvit
date: 2021-09-22
---

#ref #flo 

***


# Linear Independence
concept introduced in [[KBxChapter2AReading]], alberts [[KB20math530refLinearIndependence]]

notes, as explained on by professor dave:

```ad-def
fewest num of elements that can be be used to write any other elements in the vector space
```

don't want unesasarry info!

```ad-example
vecotr a,b,c
if **c can be written in terms of a and b** then the vectors would be referred to as **linearly dependent**
else, if **none can be written in terms of the others**, they are **linearly indepedant**

```

### requirment for linear independence
$\vec{v}_1, \vec{v}_2,...\vec{v}_N$ in [[KBe20math530refVectorSpace]] V

for linear independence this equation will require that all scalars equal zero

$c_1\vec{v}_1, c_2\vec{v}_2,...c_n\vec{v}_N=\vec{0}$

this is because, if we move $-c_1\vec{v}_1$ to the right side, then if the left side doesn't simplify to zero, then the right side could be expressed in terms of all the others

but, if they are all zero, then it's just 0 = 0!


### checking independence
check the requirement to see if it is linearly independant.
or, see if they are co-liniear (lie on the same vector?)


look for a set of non-zero scalars that makes the linear combination of the set equal to 0
if one exists, then it is linearly dependent. if one doesn't then it is linearly independant.

same thing as solving a set of equations:
treat the scalars as the vars, multiply each vector by the scalar, and set it equal to zero
reduce to row echelon form, and if you get a free var, it's not independent? #review
if you can get row echelon form, then it is independent. 

```ad-tip
title: reduced row echelon
wiki:
-   All rows consisting of only zeroes are at the bottom.
-   The [leading coefficient](https://en.wikipedia.org/wiki/Leading_coefficient#Linear_algebra "Leading coefficient") (also called the [pivot](https://en.wikipedia.org/wiki/Pivot_element "Pivot element")) of a nonzero row is always strictly to the right of the leading coefficient of the row above it.
-   The leading entry in each nonzero row is a 1 (called a leading 1).
-   Each column containing a leading 1 has zeros in all its other entries.

example, whose left hand side isn't an idenity matrix:

$\displaystyle \left[{\begin{array}{ccccc}1&0&a_{1}&0&b_{1}\\0&1&a_{2}&0&b_{2}\\0&0&0&1&b_{3}\end{array}}\right]$

```

**another method!**

- if you have a set of vectors that make a sqaure matrix
	- you can find the determinant
		- if the determinant is 0, then the vectors are linearly **dependant**
		- if the determinant is nonzero, then the vectors are linearly **independent**

### things other than vectors
vector spaces can be made of things other than vectors, so we can check the independence of things other than vectors

eg, polynomials!

multiply each by the scalars, distribute and group like terms, factor out the x terms, set = 0
generate a system of equations from each polynomial given that it has to equal 0

can convert this to a matrix
if it's sqaure, take the determinant!

### what's the deal with vector spaces anyways?
they let us unify functions, vectors, and matrices.
lets us use the same tools to answer questions like: can this *object* be written in terms of other objects?


and it lets us do, [[KBxSpansLinAlg]]!












