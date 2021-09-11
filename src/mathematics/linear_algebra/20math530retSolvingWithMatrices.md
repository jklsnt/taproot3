---
title:  Solving with matrices
course: 20math530
author: Albert Huang
source: KBe2020math530refExr0nRetIndex
---
#ret

1. >  Suppose A = $\begin{pmatrix} 1 & 3\\ 2 & -1 \end{pmatrix}$ and B = $\begin{pmatrix} 0 & -1\\ 2 & 1 \end{pmatrix}$.
	> Multiply $AB$ and $BA$. What do you notice???

Nothing. Matrix multiplication is not commutative.

2. > Use matrices to solve the system:
   > $\begin{aligned}2x-y=3\\x+3y=5\end{aligned}$
   
$$
\begin{aligned}
&&\left[\begin{matrix}2&-1\\1&3\end{matrix}\right]
\left[\begin{matrix}x\\y\end{matrix}\right]&=
&\left[\begin{matrix}3\\5\end{matrix}\right]
\\
&\left[\begin{matrix}3&0\\0&1\end{matrix}\right]
&\left[\begin{matrix}2&-1\\1&3\end{matrix}\right]
\left[\begin{matrix}x\\y\end{matrix}\right]&=
&\left[\begin{matrix}3&0\\0&1\end{matrix}\right]
\left[\begin{matrix}3\\5\end{matrix}\right]
\\
\left[\begin{matrix}1&1\\0&1\end{matrix}\right]
&\left[\begin{matrix}3&0\\0&1\end{matrix}\right]
&\left[\begin{matrix}2&-1\\1&3\end{matrix}\right]
\left[\begin{matrix}x\\y\end{matrix}\right]&=
\left[\begin{matrix}1&1\\0&1\end{matrix}\right]
&\left[\begin{matrix}3&0\\0&1\end{matrix}\right]
\left[\begin{matrix}3\\5\end{matrix}\right]
\\
\left[\begin{matrix}1&1\\0&1\end{matrix}\right]
&&\left[\begin{matrix}6&-3\\1&3\end{matrix}\right]
\left[\begin{matrix}x\\y\end{matrix}\right]&=
\left[\begin{matrix}1&1\\0&1\end{matrix}\right]
&\left[\begin{matrix}9\\5\end{matrix}\right]
\\
&&\left[\begin{matrix}7&0\\1&3\end{matrix}\right]
\left[\begin{matrix}x\\y\end{matrix}\right]&=
&\left[\begin{matrix}14\\5\end{matrix}\right]
\\
&&\left[\begin{matrix}7x\\x+3y\end{matrix}\right]&=
&\left[\begin{matrix}14\\5\end{matrix}\right]
\\
&\left[\begin{matrix}\frac{1}{7}&0\\0&1\end{matrix}\right]
&\left[\begin{matrix}7x\\x+3y\end{matrix}\right]&=
&\left[\begin{matrix}\frac{1}{7}&0\\0&1\end{matrix}\right]
\left[\begin{matrix}14\\5\end{matrix}\right]
\\
&&\left[\begin{matrix}x\\x+3y\end{matrix}\right]&=
&\left[\begin{matrix}2\\5\end{matrix}\right]
\end{aligned}
$$
$$
\begin{aligned}
x = 2
\\
x + 3 y = 5
\end{aligned}
$$
I'm not sure how to solve the rest of it with matrices, so I'll just do it normally:
$$
\begin{aligned}
x &= 2\\
x + 3y &= 5\\
2 + 3y &= 5\\
3y &= 3\\
y &= 1\\
\end{aligned}
$$
3. > Do 2x2 matrices form a group under
   > a. addition?
   > b. multiplication?
   
See [[KBe2020math530refGroups]]
I'll assume that our matrices have real numbers in them.

| Operation \ Property | Closed | Identity | Inverse | Associative? | Final |
|----------------------|--------|----------|---------|--------------|-------|
| Addition             | Yes    | $e=\left[\begin{matrix}0&0\\0&0\end{matrix}\right]$ | $\left[\begin{matrix}a&b\\c&d\end{matrix}\right] + \left[\begin{matrix}-a&-b\\-c&-d\end{matrix}\right]=e$| "Inherits from addition" | Yes |
| Multiplication       | Yes    | $e=\left[\begin{matrix}1&0\\0&1\end{matrix}\right]$ | Maybe? | Yes, see below | Undecided |

Associativity of 2x2 matrices under multiplication:
$$
\begin{aligned}
\left(\left[\begin{matrix}a&b\\c&d\end{matrix}\right]
\left[\begin{matrix}e&f\\g&h\end{matrix}\right]\right)
\left[\begin{matrix}i&j\\k&l\end{matrix}\right]
= 
\left[\begin{matrix}ae+bg&af+bh \\ ce+dg&cf+dh \end{matrix}\right]
\left[\begin{matrix}i&j\\k&l\end{matrix}\right]
\\=
\left[\begin{matrix}aei+bgi+afk+bhk&aej+bgj+afl+bhl\\cei+dgi+cfk+dhk&cej+dgj+cfl+dhl\end{matrix}\right]
\\=
\left[\begin{matrix}a&b\\c&d\end{matrix}\right]
\left[\begin{matrix}ei+fk&ej+fl\\gi+hk&gj+hl\end{matrix}\right]
=
\left[\begin{matrix}a&b\\c&d\end{matrix}\right]
\left(\left[\begin{matrix}e&f\\g&h\end{matrix}\right]
\left[\begin{matrix}i&j\\k&l\end{matrix}\right]\right)
\end{aligned}
$$

I can't figure out if 2x2 matrices have multiplicative inverses... I tried to work it out using algebra but kept proving identities. Not sure what the right way to go about this is...

I spent far too long on this assignment (1.6h), so I probably won't spend as much time LaTeXing my homework in the future.
