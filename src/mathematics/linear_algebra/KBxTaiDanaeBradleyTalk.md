---
title:   Category Theory <> Linguistics?
context: linalg
author:  Huxley Marvit
date: 2022-05-03
---

#flo #inclass 

***

# ACT (applied category theory) <> linguistics? 
*sounds epic.* 

talk with [Tai-Danae Bradley](https://www.math3ma.com/about)
- she took, so can ask about: group theory and measure theory

- wrote the articles as a study tool, thought that the mathematical language was "a little terse"
- she chatted with 3b1b? also runs [pbs infinite](https://www.youtube.com/watch?v=UIwnCoqx91Q) (that's her)
- wait... she works at googlex?? "the moonshot factory"  sick. [[KBxSort#moonshot]]
	- or, worked? past tense? 
	- recently spun out of alphabet and now works at https://www.sandboxaq.com (broke ssl?) #revisit check out later when not on nueva wifi


## linguistics and category theory

idea of algebraic: orange + fruit → orange fruit
also an idea of statistical: orange + idea → orange idea? doesn't make sense. this is represented with frequency

is some type of mathematical structure
→ uses [[KBxSystemsofSystemsinNatureandDeepLearning#category theory]] and [[mathematics/quantum/index]]

### machine systems of language understanding
now we are talking about GPT3 and such
[corsaurus](https://corsaur.us) and [pomes](https://poems.jklsnt.com/inputPage) might be useful here
asked for gpt to compare dolphins and some random singer, and it worked great! 

so she asks, essentially, wtf? what is the math here, and how does it do it?
answer: category theory, apparently. 

> CT is the network of relationships between mathematical objects

**CT is the bridge.**

objects and morphisms 

#### The Yoneda Lemma
"an objet is completely determined by its relationships to other objects"
this is, up to isomorphism [[KBx3DInclass#isomorphism]] [[KBx3DInclass#isomorphism relations]]

two sets have the same cardinality iff they have the same num of elements
set's Z and X, $X^{Z}$ is the set of all functions from Z → X 

- **the actual definition** :: given sets X and Y, then X is isomorphic to Y iff $X^{Z} \cong Y^Z$ for all sets Z.

thinks of taking $X^Z$ for a given Z as a given 'vantage point'
so saying that they are iso from all vantage points means they are themselves iso

but apparently, this is way overkill, because all need is one set? 

$Z - \{*\}$, set with single element
$\{*\} \to X$ is just a choice of an element in X
so we can say that $X \cong Y$ iff $X^{\{*\}} \to Y^{\{*\}}$

we can think about specifying words in the same way

once we assign probabilities to morphisms, then we have what is called 

**enriched category theory**
where each morphism has its own structure, with probability 

in the category of *sets*, the Yoneda lemma turns out to be overkill.

#### classical → quantum probability
we know that a joint probability distribution gives rise to marginal probabilities, and that marginalizing loses info [[KBxJointAndMarginalProbabilities]]
marginal probabilities are just the sums of rows and column
but! classically, marginalizing loses info, unless we do some quantum witchery?

##### quantum witchery
represent's as a matrix $M$
then does $M^{\intercal}M$

%%$$\begin{pmatrix} 
 \frac{1}{3} & \frac{1}{3} & 0 \\ \frac{1}{3}
\end{pmatrix}$$%%

the squares of the entries of the eigenvalues of $M^{\intercal}M$ are the conditional probability distributions on our org $X$??
*wtf?*

sets? bad. not enough structure. instead, we look at functions on sets? and this gives us the structure we need?

density operators is a special type of linear operator, which is self adjoint and positie semidefinite with trace one
and these density operators ***are*** quantum states

we can visually represent tensors and morphisms graphically, called tensor network diagrams [[KBxModuleOneLinalgTed#Tensor Products]] [[KBxQuantumLectureThree#tensor products]]

also the concept of a projection operator? where you map every vec to its projection onto a given vec?

and this gets us to entanglement?? whatta what what?
i am lost. #review this on her website










