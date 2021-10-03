---
title:   Lin Alg Not Theoretical Long 
context: 
author:  Huxley Marvit
date: 2021-09-22
---

#flo  #inclass 

***


# determinant! for realsies.

determinant of 2x2 matrix

| a   | b   |
| --- | --- |
| c   | d   | 

**ad-bc**

determinant |a| = a

```ad-note
|| around something: generally the size. apllies to magnitudes, absolute value, and cardinality. and determinant!
```

### new method

[ a11 .................... a1n ]
.									|
.									|
.									|
.									|
.									|
[an1.......................ann]

choose a row or a column and expand along it. any row, any column
choose each element and multiply it by the submatrix??

**Multiply each element in any row or column of the matrix by its cofactor**. The sum of these products gives the value of the determinant. -- google

1 1 -1
2 0 2
1 3 -2

choose middle row:
first 2x2 det: 
-1 [ 2 2 
1 -2 ] 

second:
1 -1
1 -2 * 0

third: 
1 -1 
2 2 * 3

take the determiant of each submatrix


![[Pasted image 20210922090627.png]]

```ad-important
use alternating coeficants!!

pos, neg, pos, ect. 
```

### why?
make a torus!
to do this to a plane: glue the top to the bottom to make a tube, then connect the ends of the tubs
many games operated on a torus -- come out the left, go into the right

think of our matrix as operating on a torus:
if you come out, you just come back in
and uh, what?

```ad-def 
title: proof by induction
prove something is true for the base case
prove that it's true for n+1.

like a domino proof:
make sure all the dominoes will hit the next one
then hit the first domino
```

determinant: definition by induction?


### cross product
inp: 3x1 vectors

[a,b,c]
[d,e,f]

$\begin{bmatrix}
i & j & k \\
a & b & c \\
d & e & f 
\end{bmatrix}$

then you just take the determinant:

\+ $i*(bf-ce) - j(af-cd) + k(ae-bd)$


### questions
- do matricies always have an inverse?
	- what about the all zero matrix?
- **what is a geometric intrepretation of the cross product?**
	- use it to find a plane containing two given vectors
	- did this one!
- properties of the determinant
	- why ||?
	- why torus version?
	- |a b| = ?


### ending review

what is cos? adjacent/hypotenuse when looking at a right triangle.. dont have a right triangle? make one!


dot product: gives you the lenght of a projection of a vector onto the other one

selina's proof!
















