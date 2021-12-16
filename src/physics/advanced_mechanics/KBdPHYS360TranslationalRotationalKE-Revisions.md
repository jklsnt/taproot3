---
title: Physics 360 Translational and Rotational KE HW
course: PHYS360
author: Dylan Wallace
source: KBPHYS360MasterIndex
---

# Problem 1
$$
\begin{aligned}
KE_{total} &= \sum_{i=1}^{N} \frac{1}{2}m_{i}v_{i}^2 \\
&= \sum_{i=1}^{N} \frac{1}{2}m_{i}(\vec{v}_{i}\cdot \vec{v}_{i}) \\
&= \sum_{i=1}^{N} \frac{1}{2}m_{i}(\vec{V}_{CM}(t)^2 + 2\vec{V}_{CM}(t)\cdot\vec{v}_i'(t) + \vec{v}_i'(t)^2) \\
&= \sum_{i=1}^{N} \frac{1}{2}m_{i}(\vec{V}_{CM}(t)^2 + 2\vec{V}_{CM}(t)\cdot\vec{v}_i'(t)) + \sum_{i=1}^{N} \frac{1}{2}m_{i}(v_i'^2) \\
&= \frac{1}{2}MV_{CM}^2 + V_{CM}\cdot \sum_{i=1}^{N} m_{i}\vec{v}_i' + \sum_{i=1}^{N} \frac{1}{2}m_{i}(v_i'^2) \\
&= \frac{1}{2}Mv_{CM}^2 + \frac{1}{2} \sum_{i=1}^{N} m_{i}(v_i'^2) \\
\end{aligned}
$$

We know that the equation of the center of mass is $\vec{R}_{CM} = \frac{1}{M}\sum_{i=0}^{N} m_i\vec{r}_i$.
We can rewrite this in the reference frame of the center of mass, and we get $\vec{R}_{CM}' = \frac{1}{M}\sum_{i=0}^{N} m_i\vec{r}_i' = 0$.
We can differentiate both sides to get $0 = \frac{d}{dt}\,\frac{1}{M}\sum_{i=0}^{N} m_i\vec{r}_i' = \frac{1}{M}\sum_{i=0}^{N} m_i\vec{v}_i' = \sum{i=0}^{N} m_i\vec{v}_i'$.
Therefore, we know that $\sum_{i=0}^{N} m_{i}\vec{v}_i' = 0$ and we can take it out of the equation in the solution above.

More intuitively, the distance between a point on a mass and its center of mass is always constant, so its change over time should be 0, making the term also equal 0.















