---
title: MVC Day 2 HW
source: #KBdMATH520MasterIndex
course: MATH520
---

# Review Sheet

## Problem 1
### $(b)$
$$
\begin{aligned}
g(x) &= x^{32} - 7x^{12} + x^{-8} - e^x + 12\sqrt[7]{x + 1} + (\cos{x})^6 \\
g'(x) &= 32x^{31} - 84x^{11} - 8x^{-9} - e^x + \frac{12}{\sqrt[7]{x + 1}^6} + 6\sin{(x)}(\cos{x})^5
\end{aligned}
$$

### $(d)$
$$
\begin{aligned}
f(x) &= 3x(x^2 + 1)^3 + \cos{(\sin{(x)})} + \frac{x^9 + x^4}{2x + 5} \\
f'(x) &= 18x^2(x^2 + 1)^2 - \cos{(x)}\sin{(\sin{(x)})} + \frac{19x^9 + 45x^8 + 8x^9 + 10x^3}{4x^2 + 10x + 25} \\
\end{aligned}
$$

## Problem 3
$$
\begin{aligned}
a\cdot b &= 120 \\
b(a) &= \frac{a}{120} \\
p(a) &= 5\cdot 2a + 6\cdot 2b(a) \\
&= 10a + \frac{1440}{a} \\
p'(a) &= 10 - \frac{1440}{a^2} \\
p'(a_0) &= 0 \\
0 &= 10 - \frac{1440}{a_0^2} \\
\frac{1440}{a_0^2} &= 10 \\
1440 &= 10\cdot a_0^2 \\
144 &= a_0^2 \\
a_0 &= {-12, 12} \\
a_0 \text{ has to be positive; therefore } a_0 \text{ is equal to } 12 \text{.}\\
p(a_0) &= p(12) == 10(12) + 12\cdot \frac{12}{120} \\
&= 120 + \frac{12}{10} \\
&= 121 \frac{1}{5} \\
\end{aligned}
$$

The least amount of money would be spent with a dimension of 12x10 ft.
As for the most amount of money, as it is possible to create an enclosure with an area of $120$ square feet and an infinitely long perimeter, it is impossible to reach an answer.

## Problem 5
### $(b)$
$$
\begin{aligned}
\int x^3 + 3\sqrt[5]{x} + 8x^{\frac{2}{3}} + bx + a \,dx &= \frac{1}{4}x^{4} + \frac{5}{2}\sqrt[5]{x}^6 + \frac{40}{3}x^{\frac{5}{3}} + \frac{b}{2}x^2 + ax + C \\
\end{aligned}
$$

### $(c)$
$$
\begin{aligned}
\int 72 + \frac{1}{x} - 4x^7 + (x - 2)^3 - \cos{x} + e^x dx &= 72x + \ln{x} - \frac{1}{2}x^8 + \frac{1}{4}(x - 2)^4 + \sin{x} + e^x + C \\
\end{aligned}
$$

## Problem 6
### $(b)$
$$
\begin{aligned}
A &= \int_{-1}^{-2} f(x) \,dx \\
&= \int_{-1}^{-2} 2x^5 - 10x^4 - 70x^3 \,dx \\
&= [\frac{1}{3}x^6 - 2x^5 - \frac{35}{2}x^4]_{-1}^{-2} \\
&= \frac{359}{2} \\
\end{aligned}
$$

### $(c)$
The area would be infinite, as after $x=9$, the function is constantly increasing and not approaching a number.

# Arc Length
## #1
$$
\begin{aligned}
A &= \int_{0}^{2} dr \\
&= \int_{0}^{2} \sqrt{f'(x)^2 + 1} \,dx \\
&= \int_{0}^{2} \sqrt{(\frac{3}{2}x^{\frac{1}{2}})^2 + 1} \,dx \\
&= \int_{0}^{2} \sqrt{\frac{9}{4}x + 1} \,dx \\
&= \frac{8}{27}\cdot \int_{0}^{2} \frac{27}{8}\sqrt{\frac{9}{4}x + 1} \,dx \\
&= \frac{8}{27}\cdot \int_{0}^{2} \frac{3}{2}\cdot \frac{9}{4}\sqrt{\frac{9}{4}x + 1} \,dx \\
&= \frac{8}{27} [(\frac{9}{4}x + 1)^{\frac{3}{2}}]_{0}^{2} \\
&= \frac{8}{27} ((\frac{11}{2})^{\frac{3}{2}} - 1) \\
&= \frac{8}{27} (\sqrt{\frac{1331}{8}} - 1) \\
\end{aligned}
$$