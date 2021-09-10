---
title: MVC Day 1 HW
source: #KBdMATH520MasterIndex
course: MATH520
author: Dylan Wallace
---

# Problem 1
Differentiate (with respect to x)

## $(a)$
$$
\begin{aligned}
y &= x^2 + x^{74} - \ln{x} - \log_{3}{x} + 51^x - e^x + \sin{x} - \cos{x} \\
\frac{d}{dx}[y] &= 2x + 74x^{73} - \frac{1}{x} - \frac{1}{x\ln{(3)}} + ln{(51)}*51^x - e^x + \cos{x} + \sin{x} \\
\end{aligned}
$$

## $(c)$
$$
\begin{aligned}
f(x) &= 7 + x^2 + 6x^3 + 3\sqrt[4]{x} + \frac{1}{x} - \ln{x} + 5^x \\
\frac{d}{dx}[f(x)] &= 2x + 18x^2 + \frac{3}{4\sqrt[4]{x^3}} - \frac{1}{x} + \ln{(5)}5^x \\
\end{aligned}
$$

# Problem 2
Sketch the function $f(x) = 2x^5 - 10x^4 - 70x^3$, and label $(x, y)$ of intercepts, maxima, and minima.

![[KBdMATH520Day1HWProblem2.jpg]]

# Problem 5
Find antiderivatives

# $(a)$
$$
\begin{aligned}
\int x^4 + 3x^8 - 12x^7 + 14 \,dx \\
&= \int x^4 \,dx + \int 3x^8 \,dx - \int 12x^7 \,dx \\
&= \frac{1}{5}x^5 + \frac{1}{3}x^9 - \frac{3}{2}x^8 + C \\
\end{aligned}
$$

# $(d)$
$$
\begin{aligned}
\int 323(4x^3 + 3x^2)(x^4 + x^3)^{322} \,dx &= (x^4 + x^3)^{323} + C \\
\end{aligned}
$$

# Problem 6
$f(x) = 2x^5 - 10x^4 - 70x^3$

## $(a)$
Area underneath function from $x=-4$ to $x=-1$:
$$
\begin{aligned}
f(x) &= 2x^5 - 10x^4 - 70x^3 \\
\int_{-4}^{-1} f(x) \,dx &= \int_{-4}^{-1} 2x^5 - 10x^4 - 70x^3 \,dx \\
&= [\frac{1}{3}x^6 - 2x^5 - \frac{2}{35}x^4]_{-4}^{-1} \\
&= -\frac{23775}{7} \\
\end{aligned}
$$
