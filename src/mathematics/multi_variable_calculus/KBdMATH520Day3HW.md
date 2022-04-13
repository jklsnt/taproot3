---
title: MVC Day 3 HW
source: #KBdMATH520MasterIndex
course: MATH520
author: Dylan Wallace
---

# Review Sheet
## Problem 1
### $(e)$
$$
\begin{aligned}
f(x) &= x(x^2 + 2) - \sin{(x^4 - x^{90})} + e^{\sin{(x)}} + \ln{\cos{(x^2)}} \\
f'(x) &= 3x^2 + 2 - (4x^3 - 90x^{89})\cos{(x^4 - x^90)} + \cos{(x)}e^{\sin{(x)}} + -\frac{2x\sin{(x^2)}}{\cos{(x^2)}} \\
\end{aligned}
$$

### $(f)$
$$
\begin{aligned}
y &= \frac{x^5 + x^{25}}{\sin{(x)}} + x^5\sin{(x)} + x^3\sin{(x)}e^{5x} \\
\frac{d}{dx}[y] &= \frac{\sin{(x)}(5x^4 + 25x^{24}) - \cos{(x)}(x^4 + x^25)}{\sin^2{(x)}} + (5x^4\sin{(x)} + x^5\cos{(x)}) + ((3x^2\sin{(x)} + x^3\cos{(x)})e^{5x} + 5x^4\sin{(x)}e^{5x}) \\
\end{aligned}
$$

## Problem 4
### $(a)$
$$
\begin{aligned}
V &= 24.0Lmol^{-1} \\
V(t) &= 24t \\
R(t) &= \sqrt[3]{\frac{3}{4}V(t)} \\
&= \sqrt[3]{18t} \\
t &= 3 \\
V(3) &= 72L \\
R(3) &= 3\sqrt[3]{2} * 10cm &= 30\sqrt[3]{2} cm\\
V'(t) &= 24 \\
R'(t) &= \frac{18}{\sqrt[3]{18t}^2} \\
V'(3) &= 24 Ls^{-1} \\
R'(3) &= \frac{18}{\sqrt[3]{18(3)}^2} \\
&= \frac{18}{6\sqrt[3]{2}} * 10cms^{-1} &= \frac{30}{\sqrt[3]{2}} cms^{-1}\\
\end{aligned}
$$

### $(b)$
Assuming that the question is asking how much time would have passed when the radius is 3m:
$$
\begin{aligned}
3m &= 30 * 10 cm \\
R(t) &= 30 \\
\sqrt[3]{18t} &= 30 \\
18t &= 30^3 \\
t &= \frac{30^3}{18} \\
&= 1500
\end{aligned}
$$

## Problem 5
### $(e)$
$$
\begin{aligned}
\int (4y - y^2 + 4y^3 + 1)^{-2/3} (12y^2 - 2y + 4) \,dy \\
&= 3 \int \frac{1}{3} (4y - y^2 + 4y^3 + 1)^{-2/3} (12y^2 - 2y + 4) \,dy \\
&= 3(4y - 4^2 + 4y^3 + 1)^{1/3} + C \\
\end{aligned}
$$

### $(f)$
$$
\begin{aligned}
\int 2x \cos{(x)} \,dx &= 2x \sin{(x)} - \int 2 \sin{(x)} \,dx \\
&= 2x \sin{(x)} - 2 \int \sin{(x)} \,dx \\
&= 2x \sin{(x)} + 2 \cos{(x)} \\
\end{aligned}
$$

# Arc Length
## Problem 2
$$
\begin{aligned}
f(x) &= \frac{x^2}{8} - \ln{x} \\
f'(x) &= \frac{1}{4}x - \frac{1}{x} \\
L &= \int_1^2 \sqrt{1 + f'(x)^2} \,dx \\
&= \int_1^2 \sqrt{1 + (\frac{1}{16}x^2 - \frac{1}{2} + \frac{1}{x^2})} \,dx \\
&= \int_1^2 \sqrt{\frac{1}{16}x^2 + \frac{1}{2} + \frac{1}{x^2}} \,dx \\
&= [\frac{\sqrt{\frac{(x^2 + 4)^2}{x^2}}(x^3 + 8x\log{(x)})}{8(x^2 + 4)}]_1^2 \\
&= \frac{3}{8} + \log{2} \\
\end{aligned}
$$

## Problem 8
$$
\begin{aligned}
f(x) &= x^2 \\
f'(x) &= 2x \\
f'(x) &= 6 \\
2x &= 6 \\
x &= 3 \\
\end{aligned}
$$