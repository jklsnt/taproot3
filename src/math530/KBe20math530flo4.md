---
title:  Linear Algebra class Flo 4
course: 20math530
author: Exr0n
source: KBe2020math530floIndex

---

- Vector spaces and fields are like groups
	- With 2 operations
- Vector
	- direction and magnitude
	- numbers with an order
		- list = ordered set
		- $N$x$1$ matrix
	- A vector is not just an $N$x$1$ matrix. **A vector exists in a vector space**
		- might be full of physics vectors, matrices, or polynomials
- Field
	- Addition and multiplication might be different
		- might be related to normal addition/multiplication
		- might by any binary operation
		- Addition is "primary" operation, multiplication is "secondary"
			- addition is really good (more group like)
			- multiplication needs to exclude the additive identity (because it can't have an inverse)
		- questions
			- multiplication is repeated addition?
				- not necessarily
			- binary expressions?
			- associative?
				- both yes
		- 1.3 demonstrates that the complex numbers are a field
			- commutativity
			- associativity
			- identities
			- additive inverse
			- multiplicative inverse except additive identity
			- distributive
	- usually means Reals or Complex
		- integers mod 3 are a field
			- #bonushw show integers mod 3 are a field
	- higher dimensions
		- $R^2$ is a Cartesian plane, $R^4$ is a space
	- operations
		- addition is really nice (element wise)
		- scalar multiplication is easy enough
		- vector vector multiplication is hard to find
- two square roots of $i$
	- fundamental theorem of algebra
		- (important)
	- So, $i$ should have two square roots
	- Powers of $i$ go in a circle (90 degrees rotation)
		- Complex number rotation gives a preferred direction
		- So that's why the quadrants are numbered in that direction
	- One can be found geometrically
	![[20math530srcSquareRootI.png]]
	- We could also try it algebraically
		- $(a+bi)^2=i=a^2-b^2+2abi$
		- so $a^2-b^2 = 0$ and $2ab = 1$
- dot product
	- How much of $\vec{A}$ is in the direction of $\vec{B}$ multiplied by the magnitude of $\vec{B}$
	- $\vec{A} \cdot \vec{B} = |A||B| cos \theta$
		- #bonushw prove that ^^
	- Identity: $\frac{\vec{A}\cdot\vec{B}}{|A||B|} = cos \theta$
- cross product
	- only works on 3x1 matrices
	- steps
		- determinant
		- $i$, $j$, $k$ are the unit vectors
		- $$\begin{bmatrix}2\\1\\0\end{bmatrix}\begin{bmatrix}1\\2\\-1\end{bmatrix} =
		\left|\begin{bmatrix}i &j &k\\2 &1 &0\\1 &2 &-1\end{bmatrix}\right| = i\left|\begin{bmatrix}1&0\\2&-1\end{bmatrix}\right|-j\left|\begin{bmatrix}2&0\\1&-1\end{bmatrix}\right| + k\left|\begin{bmatrix}2&1\\1&2\end{bmatrix}\right| = \begin{bmatrix}-1\\2\\3\end{bmatrix}$$
- dropping zero: $0a = (0+0)a = 0a+0a \Rightarrow 0a = 0$, so the additive identity can't have a multiplicative inverse (everything multiplied it will just be the additive identity)
	- ![[20math530srcFieldsMultiplyCannotBeGroup.png]]
- determinant
	- measures the "size" of a matrix, denoted absolute value (relevant to inverse of a matrix multiplication)
- #todo #exr0n #future prove identities are unique

---
