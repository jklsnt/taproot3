---
title:  LinAlg Flow #3
course: 20math530
author: Exr0n
source: KBe2020math530floIndex
---

## Looking forward
- Will use canvas's discussion board in the future.
- Assume matrices have real numbers

## Solving with Matrices
- Elementary matrices (like $\left[\begin{matrix}1 &-2 \\ 0 &1\end{matrix}\right]$)
- Steps walk through
	- Start with $\left[\begin{matrix}a&b\\d&e\end{matrix}\right]$ (the coefficient matrix).
	- You want to get somewhere such that $\left[\begin{matrix}1x\\0y\end{matrix}\right] = \left[\begin{matrix}c\\f\end{matrix}\right]$
	- And ultimately $\left[\begin{matrix}1&0\\0&1\end{matrix}\right]\left[\begin{matrix}x\\y\end{matrix}\right]=\left[\begin{matrix}{ans}_x\\{ans}_y\end{matrix}\right]$
	- ![[srcD3SolveWithMatricies.png]]
	
## Matrix Inverse Formula
- I should technically know this already.

### Derivation
$$
\left[\begin{matrix}a&b\\c&d\end{matrix}\right]
\left[\begin{matrix}w&x\\y&z\end{matrix}\right]
\left[\begin{matrix}aw+by&ax+bz \\ cw+dy&cx+dz\end{matrix}\right]
\\\therefore\\
\begin{split}
aw + by = 1\\
cw + dy = 0\\
ax + bz = 0\\
cx + dz = 1\\
\end{split}
$$

- There's two 2 variable equations.
![[srcIdentityMatrixFormula.png]]

## Matrix Operations
- If we have a set of objects that are almost groups in under both addition and multiplication, then it's called a field
	- 2x2 Matrices aren't quite close enough on the multiplication (too many no inverses) but we can work with other sizes.
### Vector Products
- Matrices of dimension $n$x$1$
- What multiplications on vectors are "nice"?
	- Transpose the first (left) one and multiply normally, then squish 2x2 into 2x1
	- Cross product
	- Element wise (is closed)
	- Take every element and multiply them all together, and then duplicate?
		- No, no identity
	- Any one to one mapping?
		- No, identity doesn't work if it's on the left.

---
