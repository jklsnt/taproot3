---
title: Adv Mech Center Of Mass HW
course: PHYS360
author: Dylan Wallace
source: KBPHYS360MasterIndex
---

# Problem 1

## $(1a)$
$$
\begin{aligned}
PE &= -W \\
W &= \int_{R_e}^\infty F(r) \,dr \\
\end{aligned}
$$
We know that the force applied to a point mass $m$ by the gravitational field of the earth (with mass $M_e$) with distance $x$ is modeled by $$F(r) = \frac{GmM_e}{r^2}$$.
Therefore, our work integral can be modified to be
$$
\begin{aligned}
W &= \int_{R_e}^\infty \frac{GmM_e}{r^2}\,dr \\
&= GmM_e \int_{R_e}^\infty \frac{1}{r^2} \,dr \\
&= GmM_e [-\frac{1}{r}]_{R_e}^\infty \\
&= -\frac{GmM_e}{R_e} \\
PE &= \frac{GmM_e}{R_e}
\end{aligned}
$$

## $(1b)$
$$
\begin{aligned}
KE &= \frac{1}{2}mv^2 \\
KE &= PE \\
\frac{1}{2}mv^2 &= \frac{GmM_e}{R_e} \\
v &= \sqrt{\frac{2GM_e}{R_e}}
\end{aligned}
$$

## $(1c)$
$$
\begin{aligned}
v &= \sqrt{\frac{2GM_e}{R_e}} \\
&= \sqrt{\frac{2\cdot 6.674 \cdot 10^{-11} \cdot 5.972 × 10^{24}}{6.371\cdot 10^{6}}} \\
&= 11185.7 m/s \\
&= 25020.1 mph \\
\end{aligned}
$$

# Problem 2
$$
\begin{aligned}
\sum_{i=1}^{n} \vec{F}_{net,i} &= (\sum_{i=1}^{n} m_i) \ddot{\vec{r}}_{CM} \\
\sum_{i=1}^{n} m_i \ddot{\vec{r}}_{i} &= (\sum_{i=1}^{n} m_i) \ddot{\vec{r}}_{CM} \\
\int \int \sum_{i=1}^{n} m_i \ddot{\vec{r}}_{i} \,dt\,dt &= \int \int (\sum_{i=1}^{n} m_i) \ddot{\vec{r}}_{CM} \,dt\,dt \\
\int \sum_{i=1}^{n} m_i \dot{\vec{r}}_{i} \,dt + C_1 &= \int (\sum_{i=1}^{n} m_i) \dot{\vec{r}}_{CM} \,dt + C_1 \\
\sum_{i=1}^{n} m_i \vec{r}_{i} + C_1t + C_2 &= (\sum_{i=1}^{n} m_i) \vec{r}_{CM} + C_1t + C_2 \\
\end{aligned}
$$
Both constants are the same constant on both sides of the equation so they will cancel out.
The sum of all mass is just $M$.
$$
\begin{aligned}
\vec{r}_{CM} &= \frac{1}{M} \sum_{i=1}^{n} m_i \vec{r}_{i} \\
\end{aligned}
$$

# Problem 3
Any force within a system will have an opposite force applied as well (Newton's 3rd law). Therefore, forces within a system will cancel out and will have no effect on the center of mass.

# Problem 4
$$
\begin{aligned}
\vec{v} &= \frac{<1, −4, 1> + 2<−3, −2, 6> + 3<2, 5, −3> + 4<−2, 4, 6>}{1 + 2 + 3 + 4} \\
&= <-0.7, 2.3, 2.8> \\
\end{aligned}
$$

![[Screen Shot 2021-09-05 at 7.09.00 PM.png]]