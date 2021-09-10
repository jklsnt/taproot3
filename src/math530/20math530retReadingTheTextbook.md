---
title:  ret Reading The Textbook!
course: 20math530
author: Exr0n
source: KBe2020math530refExr0nRetIndex
---
#ret

## Exercises
### 1.A.2
$$
\begin{split}
\left(\frac{-1+\sqrt{3}i}{2}\right)^3 =
\left(\frac{-1+\sqrt{3}i}{2}\right)\left(\frac{-2-2\sqrt{3}i}{4}\right) =
\frac{2+\cancel{2\sqrt{3}i-2\sqrt{3}i}-2*3*i^2}{8} = \frac{8}{8} = 1
\end{split}
$$

### 1.A.10
$$
\begin{aligned}
(4, -3, 1, 7) + 2(x_1, x_2, x_3, x_4) = (5, 9, -6, 8)\\
4+2x_1 &= 5,\\-3+2x_2 &= 9,\\1+2x_3 &= -6,\\7+2x_4 &= 8\\
x &= (\frac{1}{2}, 6, \frac{-7}{2}, \frac{1}{2})\\
\end{aligned}
$$
Not sure how to do this with matrices?

### 1.A.15
$$
\begin{split}
\lambda(x+y)\\
&=\lambda(x_1+y_1, x_2+y_2, x_3+y_3\ ...\ x_n+y_n)\\
&=(\lambda(x_1+y_1), \lambda(x_2+y_2), \lambda(x_3+y_3)\  ...\ \lambda(x_n+y_n))\\
&=(\lambda x_1 + \lambda y_1, \lambda x_2 + \lambda y_2, \lambda x_3 + \lambda y_3 \ ...\ \lambda x_n + \lambda y_n)\\
&=(\lambda x_1, \lambda x_2, \lambda x_3\ ...\ \lambda x_n) + (\lambda y_1, \lambda y_2, \lambda y_3\ ...\ \lambda y_n)\\
&= \lambda(x) + \lambda(y) = \lambda x + \lambda y
\end{split}
$$

## Matrices for Solving Systems
I'm not sure what I should notice, although it's interesting that they are all 2x2 matrices that are (or can be decomposed into) one number away from the identity. I think we mentioned that they were "essential matrices" or something?

## Geometric Interpretation of Dot Product
We talked about it in class, and learned it in physics, but a dot product $A \cdot B$ can be interpreted as the magnitude of $A$'s projection onto $B$ multiplied by the magnitude of $B$. $A \cdot B = |A||B|cos\theta$.

## Dot Product on Vectors as a Group
No. Dot product returns a scalar, which means that this operation is distinctly not closed.

After class on 3 Sep, Daniel mentioned that it might be a group if you define a modified dot product where you take the normal dot product and put it in the direction of the second vector. However, this doesn't work because the for any given $N$x$1$ matrixe $A$ the identity $e$ has to satisfy $A\cdot e = e \cdot A = A$. Thus, the definition that relies on the direction of the second operand will break when the identity is on one of the sides. **Because dot product relies on the angle between the two vectors, I think it would be difficult to find an angle for an identity vector that works with all other angles of vectors. I'm not sure how to formalize this...** #todo

## Inverse of a matrix

I tried this for the previous homework when we were to determine if 2x2 matrices were groups under multiplication, but didn't end up getting anywhere. I will try again...

![[srcIdentityMatrixFormula.png]]

I got something like $w = \frac{1-\frac{bc}{bc-ad}}{a}$, which I don't think is correct. It's also been an hour and a half, so I think I'll have to leave this here for now. #todo

---
