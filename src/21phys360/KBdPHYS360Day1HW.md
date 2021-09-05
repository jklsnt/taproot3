---
title: Adv Mech Day 1 HW
course: PHYS360
author: Dylan Wallace
source: KBPHYS360MasterIndex
---

# Section A

First, we will simplify the problem to a single dimension. We can do this because the object is only moving in a single direction and won't change its direction at any point. Therefore, all vectors will act like scalars or will be replaced by scalars for the moment.
Also, the initial starting point for the object will be at $<0>$. 
Given that:

$$
\begin{aligned}
F = m\cdot a \\
W = \int_{0}^{d} F \,dx \\
= \int_{0}^{d} m\cdot a \,dx \\
\text{Mass is constant so we can extract that from the integral:} \\
= m\cdot \int_{0}^{d} a \,dx \\
\text{Because acceleration is the derivative of velocity, the next step is trivial:} \\
= m\cdot \frac{1}{2}\int_{0}^{d} 2a \,dx \\
= m\cdot \frac{1}{2}v_f^2 \\
= \frac{1}{2}mv_f^2 \\
\end{aligned}
$$

# Section B
We will define $d_{2x}$ as the final distance, and $d_{1x}$ as the initial distance that the object hypothetically would have traveled given constant force. Given this:

$$
\begin{aligned}
\delta KE_{x} &= \int_{d_{1x}}^{d_{2x}} F \,dx \\
&= \int_{d_{1x}}^{d_{2x}} ma \,dx \\
&= m\cdot \int_{d_{1x}}^{d_{2x}} a \,dx
&= \frac{1}{2}m\cdot [v_{f}^2]_{d_{1x}}^{d_{2x}} \\
\text{By definition, we can replace the result of the integral with } v_{2x}^2 - v_{1x}^2 \\
&= \frac{1}{2}m\cdot (v_{2x}^2 - v_{1x}^2) \\
&= \frac{1}{2}mv_{2x}^2 - \frac{1}{2}mv_{1x}^2 \\
\end{aligned}
$$

# Section C
We extrapolate from previous sections.

$$
\begin{aligned}
W &= \int \vec{F}\cdot d\vec{r} \\
&= \int F_{x} \,dx + \int F_{y} \,dy + \int F_{z} \,dz \\
\text{We can just use our 1D formulas from the other sections.} \\
\text{I trust you to be forgiving enough to let me reuse them.} \\
&= KE_{x} + KE_{y} + KE_{z} \\
&= (KE_{xf} + KE_{yf} + KE_{zf}) - (KE_{xo} + KE_{yo} + KE_{zo}) \\
&= (\frac{1}{2}mv_{xf}^2 + \frac{1}{2}mv_{yf}^2 + \frac{1}{2}mv_{zf}^2) - (\frac{1}{2}mv_{xo}^2 + \frac{1}{2}mv_{yo}^2 + \frac{1}{2}mv_{zo}^2) \\
&= \frac{1}{2}mv_{f}^2 - \frac{1}{2}mv_{o}^2
\end{aligned}
$$

# Calculus is scary

