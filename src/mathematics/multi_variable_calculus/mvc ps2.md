---
title:   MVC PS#2
context: mvc
author:  Huxley Marvit
date: 2022-08-31
---

#ret  #hw 
$\newcommand{\dd}[2][]{\frac{d#1}{d#2}}$
***

# PS#2

- [review sheet](https://www.overleaf.com/project/6126e06c5485f02584d35c7b) 1b, 1d, 3, 5b, 5c, 6b, 6c
- check out the additional [fun review problems!](https://nuevaschool.instructure.com/courses/4424/files/506275?wrap=1)
- read [notes on arc length](https://www.overleaf.com/project/60f50ba561888612164e14b3)
- do arc length #1 (yes, you CAN integrate that by hand!)

***

## Review Sheet
> 1.b Differentiate w.r.t x $g(x) = x^{32} - 7x^{12} + x^{-8} - e^{x} + 12\sqrt[7]{x+1} + \left( \cos x \right)^6$

 $$
\begin{align*}
	&\dd{x} (x^{32} - 7x^{12} + x^{-8} - e^{x} + 12\sqrt[7]{x+1} + \left( \cos x \right)^6)\\
&= 32x^{31} - 84x^{11} - 8x^{-9} - e^{x} + \dd{x} (12\sqrt[7]{x+1} + \left( \cos x \right)^6)&\text{power rule}\\\\
&\dd{x} [f(g(x))] = f'[g(x)]g'(x) &\text{chain rule}\\
&f(x) = 12x^{\frac{1}{7}}\\ 
&f'(x) = \frac{12}{7}x^\frac{-6}{7}\\
&g(x) = x+1\\
&g'(x) = 1\\
&f'[g(x)]g(x) = \frac{12}{7}(x+1)^\frac{-6}{7}\\
&\\
&32x^{31} - 84x^{11} - 8x^{-9} - e^{x} + \frac{12}{7}(x+1)^\frac{-6}{7} + \dd{x} (\left( \cos x \right)^6))&\text{substitute}\\
&=32x^{31} - 84x^{11} - 8x^{-9} - e^{x} + \frac{12}{7}(x+1)^\frac{-6}{7} +6(\cos(x))^5\cdot(-\sin(x))&\text{chain rule}\\
&=32x^{31} - 84x^{11} - 8x^{-9} - e^{x} + \frac{12}{7(x+1)^\frac{6}{7}} -6\cos^5(x)\sin(x)&\text{simplify}
\end{align*}
$$

Answer check:
```python
from sympy import *
from sympy.parsing.sympy_parser import parse_expr

x = Symbol('x')
g = parse_expr("x^{32} - 7x^{12} + x^{-8} - e^{x} + 12\sqrt[7]{x+1} + \left( \cos x \right)^6")
print(latex(diff((1+sqrt(x))**Rational(1,3)/sqrt(x),x)))
```
→ $\frac{1}{6 x \left(\sqrt{x} + 1\right)^{\frac{2}{3}}} - \frac{\sqrt[3]{\sqrt{x} + 1}}{2 x^{\frac{3}{2}}}$
