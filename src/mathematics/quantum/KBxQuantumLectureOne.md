---
title:   Quantum Lecture One
context: quantum
author:  Huxley Marvit
date: 2022-01-25
---

#flo #inclass 

***

# quantum l1

he's doing [[KBxSystemsofSystemsinNatureandDeepLearning#category theory]]! should ask about it.

instead of fields, we look to the information they carry 

this paradigm shift resolved [this](<https://en.wikipedia.org/wiki/Firewall_(physics)>) paradox recently


all quantum properties are described with qubits

elementary particles have no spatial extent
- if they did, they would be made up of something
	- unlike proton! as it has some volume
- wait but.. how do we make other things up? #question 
	- mesh of particles w/ 'space' in between?

but these elementary particles and protons still have some of the same traits/properties?

not a point, but a flow? #question huh
- points in spacetime, not space?

these points have a property called **spin**

the qubit has memory? 


#question what does it mean to "ask"?

asking is pathing, so we can't just measure the same thing over and over
- but once we do this, it's primed!
we need to get a bunch of otherwise indistinguishable particles and measure them all to get 'true' probabilities

asking `up`, is "prepared in the up state"
now ask again at some angle $\theta$. what is the prob that it will say +1 again?
well,
$<\sigma> = \hat{n} \cdot \hat{m}$



**the quantum `or` is not commutative**

but, we are gonna represent it as linalg anyways. [[mathematics/linear_algebra/index]] 

***

really, we are making a whole different type of logic. [[KBxFunctionalProgramming#booleans]] be damned!
this works by having a qubit, which is a "q&a machine." essentially, we can measure it in a direction, and it will give us an answer (+1 or -1)
the answer it gives us is probabilistic and path dependent

pattern lies at a higher level of abstraction: the **probabilities** propagate at a higher level of abstraction
but only the probabilities.

### dealing with complex vector spaces

$z|A \rangle$ is called a ket.
which = $\langle A|Z^*$ , called a bra (get it?)
*we can think of these as complex vectors, or the row and column vectors of a matrix.*

ket is the row vec, and bra is the column vec.

```ad-tip
title: this star is called a hermission operator:
```ad-def
An Hermitian operator is **the physicist's version of an object that mathematicians call a self-adjoint operator**. It is a linear operator on a vector space V that is equipped with positive definite inner product. In physics an inner product is usually notated as a bra and ket, following Dirac -google
```

so, 
$\langle A|B \rangle$ yields a scalar. we can take the complex conjugate, yielding
$(|B \rangle)^{*}( \langle A | )^*$

we can also define them as 
$|A \rangle = \sum_{i} \sigma_{i}|i \rangle$ and $\langle j|A \rangle = \sigma_j$

$|A \rangle = \sigma_{u}| u \rangle + \sigma_{d}| d \rangle$
















