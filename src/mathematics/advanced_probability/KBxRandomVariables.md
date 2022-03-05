---
title:   Random Variables
context: prob
author:  Huxley Marvit
date: 2022-02-04
---

#flo #inclass 

***

# random vars!
denote using capital letters, because they are not normal variables!
also can write the roman numeral bars above and below them

for each outcome in the sample space, a random var takes on a value. think, P(Y=0) = 1/8 where Y is the number of times a coin lands on heads when u flip it three times
ie. it's a function from the sample space to the real numbers

also the concept of discrete random vars, which is when it takes separated vals

PMF -> probability mass function
PDF -> probability density function, which is what you need for continuous random variables
they are functions which assign probs to random events where X=some constant

if defined on the same sample space, you can do operations on them!

bernoulli random var, or an indicator random var. if you are trying to indicate something (like a coin landed heads) then use an indicator var, else it's generally called a bernoulli r. v.



we can say. "let x be distributed with this distribution on p" w/ $X$ ~ $\text{Bern}(p)$

i.i.d -> two independent random vars with the same distribution
random vars taking on values are events


these variables are also called succesfull if they take on 1 and failure if they take on 0

### binomial distribution

flip a coin 8 times, what's the prob that you get 6 heads?
too big to list the sample space (2^8)
P(7 heads) = P(hhhhhhhht) + P(hhhhhhhth) + ...
we can represent this as $8(\frac{1}{2})^{7}(\frac{1}{2})$ which are the 8 possibilities of the 7 heads and the one tails
continuing this with the binomial distribution, we get
$P(\text{6 heads}) = {8 \choose 6} (\frac{1}{2})^{6}  (\frac{1}{2})^{2}$

$P(X=k) = {n \choose k} p^{k} (1-p)^{(n-k)}$
which is the PMF for X, which is a binomial r. v. 









