---
title:   Bases
context: Linear Algebra
author:  Exr0n
source:  2020MATH530/KBe2020math530index.md
---

#source Axler "Linear Algebra Done Right" chapter 2.B

#flo #ref
#disorganized #incomplete

# Bases
## Summary
If it spans, and it's linearly independent, it's a basis!

## Axler2.27 #definition basis
> A *basis* of $V$ is a list of vectors in $V$ that is linearly independent and spans $V$.
- Basically a linearly independent spanning list, or the "minimum" amount of information contained in a vector space

### Other Results
- Axler2.29 "criterion for a basis"
	- A list is a basis if and only if each vector in $V$ can be written as exactly one linear combination of the list
- Axler2.31 all spanning lists contain a basis
	- Intuitive. A spanning list might not be linearly independent, but some subset of it must be.
- Axler2.32 Any finite dimensional vector space has a basis
	- Intuitive. It has a spanning list
	- Also, no infinite dimensional vector space has a basis, by definition
- Axler2.33 Linearly indepedent lists can be extended to a basis
	- Intuitive. Do this by adding in vectors that "bring new information"
- Axler2.34 Every subspace of $V$ is part of a direct sum of $V$
	- Intuitive. Kind of like saying there's an additive complement to every subspace of $V$
	- Any vector space can be thought of the span of it's basis. Because $V$ has a basis, and one of $U$'s basises can be written as a subsequence of $V$'s basis, that basis can be expanded and the expanded elements spanned to form the complement vecspace.

---
