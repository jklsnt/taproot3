---
title:   Syllogisms and the Contrapositive
context: linalg
author:  Huxley Marvit
date: 2021-09-18
---

#ret #ref #hw

---


```ad-abstract
title: The Assignment
Write up a [truth table](https://sites.millersville.edu/bikenaga/math-proof/truth-tables/truth-tables.html) for A,B, A⇒B,B⇒A, and ¬A⇒¬B.

Take a look at this [page](http://www.math.hawaii.edu/~hile/math100/logice.htm) on syllogisms and try a few exercises (notice the importance of the contrapositive).

Be aware that we will be reading 2.A for next Thursday!
```

### Terminology
`¬` = !
`⇒` = implies

### Truth Table

| A   | B   | A->B | B->A | ¬A⇒¬B |
| --- | --- | ---- | ---- | ----- |
| T   | T   | T    | T    | T     |
| T   | F   | F    | T    | T     |
| F   | T   | T    | F    | F     |
| F   | F   | T    | T    | T     | 


### Syllogisms
```ad-qoute
teacher of logic and a lover of nonsense
```

_Lewis Carroll created these puzzles. In each puzzle you are to write the assertions symbolically as implications, along with their contrapositives, and then string together with arrows all the assertions to arrive at a final conclusion. Your answer will be an ultimate implication, which you must then cleverly translate back into ordinary language._


##### Saucepans  -- 1

1.  My saucepans are the only things I have that are made of tin.  
2. I find all _your_ presents very useful.  
3. None of my saucepans are of the slightest use.

a. It is saucepan
b. it is tin
c. it is your present
d. it is useful

a -> b, !b -> !a
b -> a, !a -> !b
c -> d, !d -> !c
a -> !d, d -> !a

b -> a -> !d -> !c 
"If it is tin then it is not your present"


##### Jenkins -- 5

1.  No experienced person is incompetent.  
2.  Jenkins is always blundering.  
3.  No competent person is always blundering.

a. is experienced 
b. is incompetent
c. is Jenkins :)
d. is always blundering

a -> !b, b -> !a
!b -> a, !a -> b #review ..
c -> d, !d -> !c
!a -> d, !d -> a
d -> !a, a -> !d

c -> d -> !a -> b
"Jenkins is incompetent :("

##### Hummingbirds -- 10

1. All hummingbirds are richly colored..
2. No large birds live on honey.
3. Birds that do not live on honey are dull in color.


a. is hb
b. is richly colored
c. is large
d. lives on honey

a -> b, !b -> !a
c -> !d, d -> !c
!d -> !b, b -> d

a -> b -> d -> !c 
"Hummingbirds are not large"


##### Bridges -- 20

1. I despise anything that cannot be used as a bridge.
2. Everything, that is worth writing an ode to, would be a welcome gift to me. 3. A rainbow will not bear the weight of a wheelbarrow. 4. Whatever can be used as a bridge will bear the weight of a wheelbarrow.
5. I would not take, as a gift, a thing that I despise.


a. is despised
b. can be used as bridge
c. worth writing an ode to
d. welcome gift
e. is rainbow
f. will bear the weight of a wheelbarrow

!b -> a, !a -> b
c -> d, !d -> !c
e -> !f, f -> !e
b -> f, !f -> !b
a -> !d, d -> !a

e -> !f -> !b -> a -> !d -> !c 
"Rainbows are not worth writing an ode to" ??

##### Cats -- 25

1. The only animals in this house are cats.
2. Every animal is suitable for a pet, that loves to gaze at the moon.
3. When I detest an animal, I avoid it.
4. No animals are carnivorous, unless they prowl at night.
5. No cat fails to kill mice.
6. No animals ever take to me, except what are in this house.
7. Kangaroos are not suitable for pets.
8. None but carnivora kill mice.
9. I detest animals that do not take to me.
10. Animals, that prowl at night, always love to gaze at the moon.

// a. is animal -- universal set
b. is in house.
c. is cat
d. suitable for pet
e. loves to gaze at the moon
f. is detested
g. is avoided
h. is carnivorous 
i. prowls at night
j. kills mice
k. takes to him
l. is kangaroo


b -> c, !c -> !b
//c -> a, !a -> !c
e -> d, !d -> !e
// d -> a, !a -> !d
f -> g, !g -> !f
i -> h, !h -> !i
h -> i, !i -> !h
//h -> a, !a -> !h
c -> j, !j -> !c
k -> b, !b -> !k 
l -> !d, d -> !l
j -> h, !h -> !j
!k -> f, !f -> k
i -> e, !e -> !i


!g -> !f -> k -> b -> c -> j -> h -> i -> e -> d -> !l

"I avoid kangaroos" :(


















