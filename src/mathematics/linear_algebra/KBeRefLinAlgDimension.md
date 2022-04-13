---
title:   Linear Algebra Dimensions (Axler 2.C)
context: Linear Algebra
author:  Exr0n
source:  2020MATH530/KBe2020math530index.md
---

#source Axler2.C

#ref
#disorganized #incomplete

# #definition dimension
> The dimension of $V$ (denoted $\text{dim }V$ is the length of a basis in $V$
- This relies on Axler2.35: Basis length does not depend on the basis
> Any two bases of a finite-dimensional vector space have the same length

## Results
## Axler2.38 Dimension of a subspace
> If $V$ is finite-dimensional and $U$ is a subspace of $V$, then $\text{dim }U \le \text{dim }V$
- Intuitive. The basis of a subspace is shorter than the basis of the original vecspace, because otherwise it's span would be larger than the original vecspace (because bases are linearly independent + len lin-indep $\le$ len span).

## Axler2.39 Linearly independent list of the right length is a basis
> All linearly independent lists of the length $\text{dim }V$ are bases.
- Intuitive. If it's already linearly independent meaning each element brings "new information", then if there's that many elements then there should be that much information.

## Axler2.43 Dimension of a sum
> If $U_1$ and $U_2$ are subspaces of a finite dimensional vecspace, then
> $$\text{dim}(U_1+U_2) = \text{dim }U_1 + \text{dim }U_2 - \text{dim}(U_1\cap U_2)$$
- This inducts into something analogous to PIE! [[KBrefPrincipleInclusionExclusion]]

---
