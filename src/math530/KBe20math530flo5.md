---
title:  linalg flow 5
course: 20math530
author: Exr0n
source: KBe2020math530floIndex
---

## Participation
- Unmute yourself

## Homework Review
- From homework [[20math530retReadingTheTextbook]]

### Is Dot Product Nice?
- Nice = group properties
	- They aren't because its not closed
	- However, we still like dot product because it can easily tell us if the thing is perpendicular

### Inverse of a matrix
- Use 2 systems of equations (2 variables, 2 equations, twice)
![[KBe20math530srcMatrixInverse.png]]
- $y = \frac{c}{bc-ad} = \frac{-c}{ad-bc}$
- Determinant determines whether its possible to have an inverse (because if it's zero, then it's not possible!)
	- A matrix with no inverse is **SINGULAR**
	- Determinant of $A$ is zero
	- A has no inverse
    - [invertable matrix theorem](https://mathworld.wolfram.com/InvertibleMatrixTheorem.html)

## Proof Attempt Discussion Page?

## Small Groups
1. Calculate cross products
2. Graph cross products
3. Cross Product geometry?
	- It's the perpendicular!
	- #bonushw its perpendicular
4. Determinant geometric interpretation?
	- It's the perpendicular! IF you crossproduct-ify
	- $\begin{bmatrix}x\\y\end{bmatrix}\Rightarrow\left|\begin{bmatrix}i&j\\x&y\end{bmatrix}\right| = iy-jx = \begin{bmatrix}y\\-x\end{bmatrix}$
## Taking the Determinant (why +-+-?)
- We take the sub-matrices on a torus
	- But if you wrap everything around properly then you have a plus in front of every coefficient
	- But if you don't wrap it, then the determinant ends up being the negative, so that's why there's the whole plus minus thing.

---
