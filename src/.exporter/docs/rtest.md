---
title:   Chapter 3B Reading
context: linalg
author:  Huxley Marvit
date: 2021-11-01
---

#flo  #hw 

***

# Null Spaces and Ranges


*this is italics*, and **this is bold.**

Two subspaces that are connected with every linear map 

The set of vectors that get mapped to 0 is called the 

```ad-def
title: null space, null T, AKA kernel
for $T \in$ [[KBxL(VcmW)]], the *null space* of $T$, denoted null $T$, is the subset of $V$ consisting of those vectors that $T$ maps to 0:
$$ 
null\ T = {v \in V : Tv = 0}. 
$$
```

### examples of null space
- The zero map! ie, $Tv=0$ then $\textrm{null}\ T = V$
- $D \in L(P(R), P(R))$ where $Dp=p'$, then the constant funcs are gonna go to 0.
	- ie. null space of $D$ equals the set of constant functions.
- backwards shift by one, $\textrm{null}\ T = {(a, 0,0,...)}$



- null space of each linear transformation is a subspace of the domain?
	- ie, the kernel is a subspace.. oh boy


### as a subspace

```ad-def
title: the null space is a subspace
Suppose $T \in L(V,W)$. Then $\textrm{null}\ T$ is a subspace of $V$
```
trivial proof, just plug in zeros.


ooh, and now we get, 

### injective

```ad-def
title: injective
a function $T: V \to W$ is called *injective* if $Tu = Tv$ implies $u=v$
```
#question what does "implies" mean here?

he calls this, **one-to-one**, but this only works one way. else, it's bijective!

this means, that T is injective if it maps **distinct inputs to distinct outputs**


#### checking injection
check if 0 is the only vec that gets mapped to 0. 

```ad-def
title: injetivity is equivelent to null space equals equals {0}
let $T \in L(V,W)$. Then $T$ is injective iff null $T = \{0\}$ 
```

### Range and Surjectivity

time to define, range!

```ad-def
title: range AKA image
for $T$ a function from $V$ to $W$, the *range* of $T$ is the subset of $W$ consisting of those vectors that are of the form of $Tv$ for some $v \in V$: 
$$
\textrm{range} \ T = \{Tv: v \in V\}.
$$

```
just the... normal def of range.

and some examples:
- are in 3.18

```ad-def
title: the range is a subspace!
If $T \in L(V,W),$ then range $T$ is a subspace $W$.
```

and ofc,

```ad-def
title: surjective AKA onto
a function $T: V \to W$ is called *surjective* if its range equals $W$.
```

surjecitvity depends on the space we are mapping into


### Fundemental theorem
this is **important!** that's why the name is dramatic.
```ad-def
title: Fundemental theorem of linear maps
Suppose $V$ is finite-dimensional $T \in L(V,W).$ Then range $T$ is finite-dimensional and 
$$\dim V = \dim null \ T + \dim range \ T$$
```
### 

uh..

def of a smaller vec space is one with less a smaller dim

we can say that no linear transformation from a finite-dimensional vec space to a smaller vec space can be injective
which makes sense! because you need the repeat elements, otherwise it woudnt be smaller. 
```ad-def
title: A map to a smaller dimensinal space is not injective
Suppose $V$ and $W$ are finite-dimensional vector spaces such that $\dim V > \dim W$. Then no linear map from $V$ to $W$ is injective.
```

#review to make this intuitive.

then we can show that no map from finite-dim vec space to a bigger vec space can be surjective

wait no this one doesnt make sense. 
cus two elements can map to one, right? #question
noo! it doesnt, cus then u would need to have a single function output multiple things to make up for it which functions can't do.


```ad-def
title: A map to a larger dimensional space is not surjective
Suppose $V$ and $W$ are finite-dimensional vector spaces such that $\dim V < \dim W$. Then no linear map from $V$ to $W$ is surjective.
```

these have imporant conseqneces! in linear equation theory.


idea: express questions about systems of linear equations in terms of linear maps

ie. use linear transformation to represent querys about linear equations

3.25.. what the hell?? #review #question srry i don't have enough brain space to interpret this right now.


```ad-def
title: homogenous system of linear equations
A homogenous system of linear equations with more variables than equations has nonzero solutions.
```
oh, here, we get to define the concept of **free variables**


```ad-def
title: Inhomogenous system of linear equations
An inhomogenous system of linear equations with more equations than variables has no solution for some choice of the constant terms.
```
these can be proved using gaussian elim!


```ad-reflection
this one needs a reflection! need to watch another vid on the concept of null space and range ect. then take notes on that as well. seek 3b1b for intutive understanding here.
```









