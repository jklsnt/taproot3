---
title:   Cryptography
context: compsec
author:  Huxley Marvit
date: 2021-10-07
---

#ret #incomplete #hw
***

# Cryptography!
## Hashes

### Requirements for a hash
First, how do we know if it works?
A hash needs to be:
- One way?
- Deterministic
- Unique

How we we prove it is one way?
uh, we can't. unless we prove P!=NP.
hash function zoo!
https://ehash.iaik.tugraz.at/wiki/The_Hash_Function_Zoo
***
- [source](https://stackoverflow.com/questions/2889473/when-is-it-safe-to-use-a-broken-hash-function)
	-   No preimage: given _y_, it should not be feasible to find _x_ such that _h(x) = y_.
	-   No second preimage: given _x1_, it should not be feasible to find _x2_ (distinct from _x1_) such that _h(x1) = h(x2)_.
	-   No collision: it should not be feasible to find any _x1_ and _x2_ (distinct from each other) such that _h(x1) = h(x2)_.
	
-   what this means
	-   not feasible to get the original from the function output
	-   not feasible to find a colliding hash?
	-   not feasible to find collisions
- breaking a hash function, from [here](https://stackoverflow.com/questions/2889473/when-is-it-safe-to-use-a-broken-hash-function)

```ad-def
title: what does it mean for a hash function to be broken?

"For a hash function with a _n_-bit output, there are generic attacks (which work regardless of the details of the hash function) in _2n_ operations for the two first properties, and _2n/2_ operations for the third. If, for a given hash function, an attack is found, which, by exploiting special details of how the hash function operates, finds a preimage, a second preimage or a collision faster than the corresponding generic attack, then the hash function is said to be 'broken.'"
```



## Custom hashing function

what if... we just use a neural network?

create a giant, randomly initialized neural network. 
then, have permuting layers in the middle which make the output space non-continuous

[[KBxCryptographyRet]]






























