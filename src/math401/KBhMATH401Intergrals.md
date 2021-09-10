---
title: Intergration and Anti-Derivation
source: KBhMATH401SubIndex
author: Houjun Liu
course: MATH201
---

# Intergration
Antiderivatives table

| Function                                  | Antidervative                    |
|-------------------------------------------|----------------------------------|
| $x^n$                                     | $\frac{x^{n+1}}{n+1}+c, x\neq-1$ |
| $af(x)$                                   | $a*(f(x)dx)$                     |
| $\frac{1}{x}$                             | $\ln(\|x\|)$                     |
| $sin(at)$                                 | $-\frac{cos(t)}{a}$              |
| $cos(at)$                                 | $\frac{sin(t)}{a}$               |
| $e^a$                                     | $e^a$                            |
| $\frac{1}{1+(ax)^2}$                      | $tan^-1(ax)$                     |
| $\frac{a}{\sqrt{k^2-(ax)^2}}$             | $sin^-1(\frac{ax}{k})$           |
| $\frac{-1}{\sqrt{k^2-(ax)^2}}$            | $cos^-1(\frac{ax}{k})$           |
| $ln(x)$                                   | $xln(x)-x$     <= remember this  |
| $\int f(x)g'(x) dx$                       | $f(x)g(x)-\int f'(x)g(x) dx$     |
| Arc Length  of function $f(x)$            | $\sqrt{1+f'(x)^2} dx$            |
| Arc length of polar function $x(t), y(t)$ | $\sqrt{x'(t)^2 + y'(t)^2}(dt)$   |
| $r(\theta)$                               | $\int_a^B (r(\theta)^2)d\theta$  |
| $sec^2(x)$                                | $tan(x)$                         |

Also, fun other things

|Function|Other Function|
|---|---|
|$\cos{2\theta}$|$1-2sin^2\theta$|
|$\cos{2\theta}$|$2cos^2\theta-1$|
|$sec^2x-1$|$tan^2x$

## Some Limits Too!
$\lim_{\theta \to \infty} tan^{-1} (\theta) = \frac{\pi}{2}$ 

With the reverse product rule, try to make f(x) the simpler derivative, and g(x) the simpler antiderivative

![[Pasted image 20210328150621.png]]

## Useful thing
* Intergration by Parts (reverse product rule) (the f(x)g'(x) rule above)
* u-Substitution (reverse chain rule)
* Compleeting the Square + arcsin/arctan
* Long divide, then intergrate


