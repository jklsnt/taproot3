---
title: MVC Day 2
source: #KBdMATH520MasterIndex
course: MATH520
---

# Arc length

$$
\begin{aligned}
dr = \sqrt{dx^2 + dy^2} \\
= \sqrt{dx^2 + dy^2}\cdot \frac{dx}{dx} \\
= \sqrt{\frac{dx^2 + dy^2}{dx^2}}\cdot dx \\
= \sqrt{1 + \frac{dy^2}{dx^2}} dx \\
= \sqrt{(\frac{dy}{dx})^2 + 1} dx \\
\text{Next, we will integrate to find the arc length as a whole.}
L(x_0, x_1) = \int_{x_0}^{x_1} dr \\
= \int_{x_0}^{x_1} \sqrt{(\frac{dy}{dx})^2 + 1} \,dx \\
\text{Given that the arc length is of function } f\text{:} \\
= \int_{x_0}^{x_1} \sqrt{f'{x}^2 + 1} \,dx \\
\text{In the case of the arc length of } f(x) = x^2 \text{ from 5 to 20:} \\
L(5, 20) &= \int_{5}^{20} \sqrt{4x^2 + 1} \,dx \\
= [\frac{1}{2}\sqrt{4x^2 + 1}x + \sinh^{-1}{2x}]_{5}^{20} \\
= 375.346 \\
\end{aligned}
$$