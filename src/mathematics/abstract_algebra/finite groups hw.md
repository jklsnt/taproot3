---
title:   finite groups homework
context: abstract
author:  Huxley Marvit
date: 2022-09-01
---

#ret #hw 

***
# Some finite groups
> Can you add a small number of functions to the set $\{f(x) = x, f(x) = \frac{1}{x}, f(x) = 1 - x\}$ so that it forms a group under composition?

$$
\begin{align*}\\\\
\left\{
\frac{1}{{1-x}},\, \frac{-1}{{1-x}},
\frac{{x-1}}{x}, \frac{x}{{x-1}},
\frac{x}{{1-x}}
\right\}
\end{align*}
$$

> Do the symmetries of an equilateral triangle form a group?

Yes! Closed, has an identity, has inverses, and is associative.

> Are the integers mod 3 a group under addition? under multiplication? What about the integers mod 4?

|                | $\mod 3$         | $\mod 4$         |
| -------------- | ---------------- | ---------------- |
| addition       | yes              | yes              |
| multiplication | no inverse for 0 | no inverse for 0 | 

> Write out operation tables for at least the symmetries of a triangle.

Write? No thanks.
```python
import pprint

a, b, c = range(3)

ops = [[a, b, c], [c, a, b], [b, c, a], [a, c, b], [c, b, a], [b, a, c]]
ops = [[a, b, c], [c, a, b], [b, c, a], [a, c, b], [b, a, c], [c, b, a]]
#symbols = ['△', '->', '<-', '⍋', "◹", "⊿"]
#symbols = ['EE', 'RR', 'RL', 'MA', "MB", "MC"]
symbols = ['EE', 'R1', 'R2', 'S1', "S2", "S3"]

labels = dict([(str(x), symbols[i]) for i,x in enumerate(ops)])

answers = [[[] for _ in range(len(ops))] for _ in range(len(ops))]

for i,v in enumerate(ops):
    for ii,vv in enumerate(ops):

        out = [v[i] for i in vv]

        answers[i][ii] = labels[str(out)]
pprint.pprint(answers)

# returns:
	#[['△', '->', '<-', '⍋', '◹', '⊿'],
	# ['->', '<-', '△', '◹', '⊿', '⍋'],
	# ['<-', '△', '->', '⊿', '⍋', '◹'],
	# ['⍋', '⊿', '◹', '△', '<-', '->'],
	# ['◹', '⍋', '⊿', '->', '△', '<-'],
	# ['⊿', '◹', '⍋', '<-', '->', '△']]
```


and also, [[finite fields and rings hw]] 

