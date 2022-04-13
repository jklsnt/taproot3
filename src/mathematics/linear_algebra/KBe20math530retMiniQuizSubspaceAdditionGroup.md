---
title:  "Mini Quiz: Subspace Addition forms Groups?"
course: 20math530
author: Exr0n
source: KBe2020math530refExr0nRetIndex
---

# Problem
> Do subspaces form a group under subspace addition?

- Properties for a group: [[KBe2020math530refGroups]]
- Closed, Identity, Inverses, Associative

# Working it out
I don't actually remember the exact definition of subspace addition. If I remember correctly from the proof of Axler exercise 1.C.14, the sum of two subspaces is the subspace where each vector is the sum of two vectors in the original two subspaces?

## Closed
I don't remember if it was guaranteed to be a subspace, but it must have the identity (because the constituents both had the identity), it is closed under scalar multiplication (because you could take the sum apart, multiply the bits from each smaller subspace which are closed under scalar multiplication, and then put them back together again). I think it is closed under addition because both parts are closed under addition. This is by no means a rigorous proof, but it is as close as I can get without knowing the actual definition of a subspace sum, and I think its reasonably convincing.

## Identity
If the above is true, then subspaces are closed under subspace addition. The identity subspace would be the one with only the field additive identity, because there is only one element so the resulting subspace sum has the same number of elements as the other original subspace, and because the identity vector plus any vector of the other subspace will be that other vector by definition.

## Inverse
Because the subspace sum is all of the possible outputs when adding each vector in the two subspaces, if a subspace has two or more unique elements then it's not possible to have an inverse subspace: it would not be possible to create a subspace and force the parings such that the resulting subpsace sum is the degenerate one (${0}$).

# Checking
Now I will look back at the textbook to see what the formal definition of subspace sum is and if my previous conclusions were valid. The quiz assignment says to avoid help from classes or websites, so I am not sure if I am allowed to look at the textbook. If not, please grade me on the previous sections only.

It seems like my notion of subspace sums is roughly correct, so I am pretty sure that
$$
\fbox{ No, subspaces do not form a group under subspace addition due to a lack of inverses. }
$$

---
