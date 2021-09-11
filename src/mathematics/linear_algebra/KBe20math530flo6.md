---
title:  Linalg Flo 6
course: 20math530
author: Exr0n
source: KBe2020math530floIndex
---

#flo 

## Talking about the reading (vector spaces)
### Vector space
#### Identity
- It would be the additive identity, because the multiplicitive one doesn't count because multiply doesn't take two elements from the same field
#### Operations
- Scalar multiplication
	- Not a multiplication on $V$
	- We need another field of scalars
	- Fundamental difference: **operates on different objects** (only happens on scalar multiplications)
- addition
#### Linearity
- Something that's linear means "things work for addition and scalar multiplication"
- Take $-2x+1y=3$
	- Multiplying by scalars
	- adding them
	- similar to a line in standard form--slope stays constant
- Take $2x-3y+1z=2$
	- a plane in 3d
	- if you pick a direction, the slope stays the same
	- thus, a plane is linear
#### Vector
- Something in a vector space
- inifinite lists
	- It's like decimals, except you can chose any number instead of just [0-9]
	- base infinity basically
- Most common vector space
	- $\mathbb{F}^n$, like $\mathbb{R}^3$ (might also be $\mathbb{C}^2$ or something, although that's hard to visualize)
	- #definition canonical
		- something "standard", basically everyone should know what you are talking about
		- canonical vector space is $\mathbb{R}^2$
#### Distributive property
- Important to tie operations together

#### Vector Space as a Set of Functions
- like $\mathbb{R}^{[0, 1]}$: the functions from $[0, 1]$ that end up as real numbers
	- Identity = $f(x) = 0$
#### Subspaces
- A subspace of this has to be a group on it's own
- Conditions for a subspace
	- See 1.34
	- Just check
		- additive identity
		- closed under addition
		- closed under scalar multiplication
- What other subspaces of this vector space are there that also have a domain from $[0, 1]$?
	- Like continuous functions from zero to one
	- functions who's derivatives are continuous or constant or zero
	- even functions are also a subspace 
	![[KBe20math530srcEvenFunctionsAreSubspacesOfFtotheS.png]]
- Subspaces of $\mathbb{F}^3$
	- Most contain infinite vectors (except $\{ 0 \}$)
	- $\begin{bmatrix}x\\y\\0\end{bmatrix}$ is a subspace with infinite vectors
#### Notation
- #note $\mathbb{F}^2$ is almost always either $\mathbb{R}^2$ or $\mathbb{C}^2$, mostly $\mathbb{R}^2$

### Direct sums
- Something that isn't a direct sum
	- in $\mathbb{R}^3$, $\begin{bmatrix}x\\y\\0\end{bmatrix}$ and $\begin{bmatrix}x\\x\\0\end{bmatrix}$
		- Two ways to write $0$:
			- $\begin{bmatrix}0\\0\\0\end{bmatrix} + \begin{bmatrix}0\\0\\0\\\end{bmatrix} = \begin{bmatrix}0\\0\\0\end{bmatrix} = \begin{bmatrix}1\\1\\0\end{bmatrix} + \begin{bmatrix}-1\\-1\\0\end{bmatrix}$
### $\mathbb{F}^\infty$
- Functions from naturals to your field, (assign an element to each natural)
	- that would be the same as ordering the elements in your field?
	- Tons of functions, any one is an infinite vector??

## If and Only If proofs (iff)
- You have to take the proof in both directions 
- **Assumption**: "now suppose the only way to write 0 as a sum of u_1 + ... | u_m, where each u_j is in U_j, is by taking each u_j equal to 0"
	- Assume the red part, then show the green part. Then, assume the green and show it gets the red.
	- ![[KBe20math530srcIfOnlyIfProofs.png]] 
- #future geometrical interpretation of determinants

---
