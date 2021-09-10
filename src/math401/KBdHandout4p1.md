---
title: Handout #4 - Part 1
course: 2020MATH401
author: Dylan
source: #index
---

1) Evaluate the following limit using Squeeze theorem (Think about the range of sin(𝜃) 𝑜𝑟 cos(𝜃)) to find the enveloping functions
	a) $$\lim\limits_{\theta \to \infty}-\frac{1}{\theta}\leq\lim\limits_{\theta \to \infty}\frac{\sin{\theta}}{\theta}\leq\lim\limits_{\theta \to \infty}\frac{1}{\theta}$$$$0\leq\lim\limits_{\theta \to \infty}\frac{\sin{\theta}}{\theta}\leq0$$$$\lim\limits_{\theta \to \infty}\frac{\sin{\theta}}{\theta} = 0 \text{ by the squeeze theorem}$$
	b) $$\lim\limits_{\theta \to \infty}\frac{1-cos{\theta}}{\theta}=\lim\limits_{\theta \to \infty}\frac{1}{\theta}-\lim\limits_{\theta \to \infty}\frac{\cos{\theta}}{\theta}$$$$=0-\lim\limits_{\theta \to \infty}\frac{\cos{\theta}}{\theta}
	=-\lim\limits_{\theta \to \infty}\frac{\cos{\theta}}{\theta}$$$$\lim\limits_{\theta \to \infty}-\frac{1}{\theta}\leq-\lim\limits_{\theta \to \infty}\frac{\cos{\theta}}{\theta}\leq\lim\limits_{\theta \to \infty}\frac{1}{\theta}$$$$0\leq-\lim\limits_{\theta \to \infty}\frac{\cos{\theta}}{\theta}\leq0$$$$-\lim\limits_{\theta \to \infty}\frac{\cos{\theta}}{\theta}=0 \text{ by squeeze theorem}$$$$\lim\limits_{\theta \to \infty}\frac{\cos{\theta}}{\theta}=0$$
	c) $$\lim\limits_{\theta \to \infty}\theta^2\cos{\frac{1}{\theta^2}} = \infty$$$$\text{There are no functions that can serve as enveloping functions.}$$
2) Prove that$$\lim\limits_{x\to0}\frac{\sin{\theta}}{\theta} = 1$$ using steps below and using the sketch of a unit circle where the angle 𝜃 is in radians. K is a point on the unit circle.
	a) $$K = (\cos{\theta}, \sin{\theta})$$b) $$\text{Slope of }OK = \frac{\sin{\theta}}{\cos{\theta}}$$c) $$OL: y-\sin{\theta}=\frac{\sin{\theta}}{\cos{\theta}}(x-\cos{\theta})$$d) $$A=(1, 0)$$e) $$L=(1, \frac{\sin{\theta}}{\cos{\theta}})$$f) $$\triangle OAK=\frac{\sin{\theta}}{2}$$g) $$\text{⌔} OAK=\frac{\theta}{2}$$h) $$\triangle OAL=\frac{\sin\theta}{2\cos\theta}$$i) $$\frac{\sin{\theta}}{2}\leq\frac{\theta}{2}\leq\frac{\sin{\theta}}{2\cos{\theta}}$$j) $$\lim_{\theta\to0}1\leq\lim_{\theta\to0}\frac{\theta}{\sin{\theta}}\leq\lim_{\theta\to0}\frac{1}{\cos{\theta}}$$$$\lim_{\theta\to0}\frac{1}{1}\leq\lim_{\theta\to0}\frac{\sin{\theta}}{\theta}\leq\lim_{\theta\to0}\cos{\theta}$$$$1\leq\lim_{\theta\to0}\frac{\sin{\theta}}{\theta}\leq1$$$$\lim_{\theta\to0}\frac{\sin{\theta}}{\theta}=1\text{ by the squeeze theorem}$$
