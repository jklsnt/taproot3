---
title: best fit lines via matrix equations 
context: linalg
author:  Huxley Marvit
date: 2021-09-22
---

#ret #hw

***


# best fit lines via matrix equations

```ad-abstract
Suppose you have two data points that you want to fit to a line. What are the variables you are solving for? How would you write a matrix equation that will give you the answer when solved?

Use Gaussian elimination to find the line containing (1, 2) and (3, 6).

How would the matrix equation look if you only had one data point? If you had three data points? How would this affect your attempts to solve?

Suppose we have the data points (1, 1), (2, 3), (3, 3). What is the corresponding matrix equation? If your matrix equation is Ax = b, use grapher to graph the SPAN of the columns in your coefficient matrix A and the 3x1 vector b. What do these represent?????
```

- Suppose you have two data points that you want to fit to a line. 
	- What are the variables you are solving for? 
		- m and b -- slope and y intercept
	- How would you write a matrix equation that will give you the answer when solved?
		- $\begin{bmatrix}
		1 & 1 \\
		3 & 1 
		\end{bmatrix}  * \begin{bmatrix}
		m \\
		b 
		\end{bmatrix}$ =   $\begin{bmatrix}
		2 \\
		6 
		\end{bmatrix}$
		
- Use Gaussian elimination to find the line containing (1, 2) and (3, 6).
	- [2, 0] -> y=2x

- How would the matrix equation look if you only had one data point? If you had three data points? How would this affect your attempts to solve?
	- one data point: set of all lines around the point
	- three data points: least squares method? impossible with current method?

- Suppose we have the data points (1, 1), (2, 3), (3, 3). What is the corresponding matrix equation? If your matrix equation is Ax = b, use grapher to graph the SPAN of the columns in your coefficient matrix A and the 3x1 vector b. What do these represent????? 
	- $\begin{bmatrix}
		1 & 1 \\
		2 & 1 \\
		3 & 1 
		\end{bmatrix}  * \begin{bmatrix}
		m \\
		b 
		\end{bmatrix}$ =   $\begin{bmatrix}
		1 \\
		3 \\
		3 
		\end{bmatrix}$
	- grapher? 
		








