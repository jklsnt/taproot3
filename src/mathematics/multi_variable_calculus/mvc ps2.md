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

 $$\begin{align*}
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
&=\boxed{32x^{31} - 84x^{11} - 8x^{-9} - e^{x} + \frac{12}{7(x+1)^\frac{6}{7}} -6\cos^5(x)\sin(x)}&\text{simplify}
\end{align*}
$$

> 1.d Differentiate w.r.t x $f(x) = 3x(x^2 + 1)^3 + \cos\big(\sin(x)\big) + \frac{x^9 + x^4}{2x + 5}$

$$
\begin{align*}
	&\dd{x} (3x(x^2 + 1)^3 + \cos\big(\sin(x)\big) + \frac{x^9 + x^4}{2x + 5}\\\\
	&\dd{x} (3x(x^2+1)^3\\
&\dd{x}[f(x)g(x)] = f(x)g'(x)+f'(x)g(x) &\text{product rule}\\
&f(x) = 3x, f'(x) = 3\\
&g(x) = (x^2+1)^{3},g'(x)=6x(x^2+1)^2&\text{chain rule}\\
&\dd{x} (3x(x^2+1)^{3}=
3x\cdot(3(x^2+1)^2\cdot 2x)+3(x^2+1)^3 = 3x\cdot6x(x^2+1)^2+3(x^2+1)^3&\text{substitute}\\\\
& 3x\cdot6x(x^2+1)^2+3(x^2+1)^3+\dd{x} (\cos\big(\sin(x)\big) + \frac{x^9 + x^4}{2x + 5})\\
& =3x\cdot6x(x^2+1)^2+3(x^2+1)^3-\sin(\sin(x))\cdot\cos(x)+\dd{x}(\frac{x^9 + x^4}{2x + 5})\\\\

& \dd{x} \frac{f(x)}{g(x)} = \frac{g(x) f'(x) - f(x) g'(x)}{g(x)^2}&\text{quotient rule}\\
&\dd{x} \frac{x^9 + x^4}{2x + 5} = \frac{(2x+5)(9x^8+4x^3)-(x^9+x^4)\cdot 2}{(2x+5)^2}\\\\


\end{align*}
$$
$$\begin{align*}
&3x\cdot6x(x^2+1)^2+3(x^2+1)^3-\sin(\sin(x))\cdot\cos(x)+\frac{(2x+5)(9x^8+4x^3)-(x^9+x^4)\cdot 2}{(2x+5)^2}\\
&=\boxed{18x^2(x^2+1)^2+3(x^2+1)^3-\sin(\sin(x))\cdot\cos(x)+\frac{16x^9+45x^8+6x^4+20x^3}{(2x+5)^2}}&\text{simplify}

\end{align*}
$$
> 3. You want to build an enclosure for your prize-winning Highland cow, Bessie. You want the enclosure to be a 120-square-foot rectangle, with two of the sides made out of material that costs $5 per foot, and the other two sides made out of material that costs $6 per foot. Assuming you want to spend the least amount of money, what should the dimensions be? How much will you spend? If you []()want to spend the greatest amount of money, what will the dimensions be? How much will you spend?

![[mvc ps2 2022-08-31 15.02.30.excalidraw||200]]

$$
\begin{align*} \\
&10w+12h = p\\
&w\cdot h = 120\\
&p(w) = 10w+12 \frac{120}{w}\\\\
&

\text{minimize:}\\
&\dd{w}p(w) = 10- \frac{1440}{w^{2}}\\
&0=10- \frac{1440}{w^{2}}=\frac{10w^2-1440}{w^{2}}\\
&10w^2-1440=0\\
&w^2=144\\
&\boxed{w=12}\\
&p(12) = 240\\
&\\\\
&\text{maximize:}\\
&\lim_{w \to 0^{+}} p(w) = \boxed{\infty}\\
\\
&
\text{maximize, assuming min length is 1ft:}\\
&p(1) = \boxed{10+12\cdot120 = 1450}
\end{align*}
$$
> 5.b $\displaystyle \int x^3 + 3\sqrt[5]{x} + 8x^{2/3} + bx + a \, dx$

$$
\frac{x^4}{4} + \frac{5x^\frac{6}{5}}{2}+\frac{24x^\frac{5}{3}}{5}
+\frac{bx^2}{2}+ax+C
$$
> 5.c  $\displaystyle \int  72 + \frac1x - 4x^7 + (x-2)^3 - \cos(x) + e^x \, dx$

$$
72x+\log(|x|)-\frac{x^8}{2}+\frac{(x-2)^4}{4}-\sin(x)+e^x+C
$$
> 6. $f(x) = 2x^{5} - 10x^{4} - 70x^{3}$
> 6.b What's the area underneath this function, from $x=-4$ to $x=-1$? (If you still have your nice picture, shade in this area, and label it!)

$$
\begin{align*}
&\int_{-4}^{-1} f(x) \, dx= \left[\frac{x^{6}}{3}-2x^5-\frac{35x^4}{2}\right]^{-1}_{-4}\\
&=\frac{-91}{6}+\frac{3200}{3}=\boxed{\frac{2103}{2}}
\end{align*}
$$
> 6.c What about the area underneath this function from $x=-1$ to $x=-2$? (Note that I'm asking for the *area*.)

$$
\begin{align*}
\int_{-2}^{-1} f(x) \, dx= \frac{-91}{6}-\frac{584}{3} = \boxed{-\frac{1259}{6}}
\end{align*}
$$

