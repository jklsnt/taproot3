---
title:   mvc ps3
context: mvc
author:  Huxley Marvit
date: 2022-09-04
---

#ret #hw 
$\newcommand{\dd}[2][]{\frac{d#1}{d#2}}$
***

# PS\#3!
- [Review sheet](https://www.overleaf.com/project/6126e06c5485f02584d35c7b) \#1e, 1f, 4, 5e, 5f
- [arc length](https://www.overleaf.com/project/60f50ba561888612164e14b3) \#2, 8 (Again, try not to do it with a calculator! These integrals are trickier than the first one.)
- keep thinking about/working on those two harder 1VC review problems
- Read Andrew's notes on vectors. This is slightly out of order––there's something I want to do before we talk about vectors, which we'll do on Wednesday (?)––but I want you to take a look at these notes anyway, as there's a lot of information in them. I'll ask you to read them in more detail next week (?).
- do vectors #4

***
## Review sheet
>  1.e Differentiate $f(x) = x(x^2 + 2) - \sin\left(x^4 - x^{90}\right) + e^{\sin(x)} + \ln\left(\cos(x^2)\right)$

$$3x^{2}+2+\cos\left(x^{4}-x^{90}\right)\cdot\left(4x^{3}-90x^{89}\right)+e^{\sin\left(x\right)}\cos\left(x\right)-2x\tan\left(x^{2}\right)$$

> 1.f Differentiate $\frac{x^5 + x^{25}}{\sin(x)} + x^5\sin(x) + x^3\sin(x)e^{5x}$

$$\frac{\sin\left(x\right)\left(5x^{4}+25x^{24}\right)-\left(x^{5}+x^{25}\right)\cos\left(x\right)}{\sin^{2}\left(x\right)}+x^{5}\cos\left(x\right)+5x^{4}\sin\left(x\right)+x^{3}\left(\cos\left(x\right)e^{5x}+5\sin\left(x\right)e^{5x}\right)+3x^{2}\sin\left(x\right)e^{5x}$$
## Arc length

> 2. The length of $f(x)=\frac{x^2}{8} - \ln(x)$ between $x=1$ and $x=2$.

$$
\begin{align*}\\
& \frac{d}{dx}\left(x^{2}-\ln\left(x\right)\right)=\frac{x}{4}-\frac{1}{x}\\
& \int_{1}^{2}\sqrt{1+\left(\frac{x}{4}-\frac{1}{x}\right)^{2}}dx &\text{forgot to sqaure this..}
\end{align*}
$$
:(

> 8. When is the slope of $y=x^2$ between $x=1$ and $x=5$ equal to 6?

$$
\begin{align*}
&\dd{x}x^2=6\\
&2x=6\\
&x=3\\
&\to \boxed{(3, 9)}
\end{align*}
$$
## Vectors

> 4. Find the magnitude, direction, and visual representation  of $\vec{x}$ where $\vec{x} = \langle 3, -1, 2 \rangle$

$$
\begin{align*}
||\langle3, -1, 2 \rangle|| &= \sqrt{3^2+1^2+2^{2}}=\sqrt{14}\\
\hat{x}=\frac{\vec{x}}{||x||} &= \left\langle \frac{3}{\sqrt{14}}, \frac{-1}{\sqrt{14}}, \frac{2}{\sqrt{14}}\right\rangle
\end{align*}
$$
![[mvc ps3 2022-09-04 19.11.53.excalidraw]]




























