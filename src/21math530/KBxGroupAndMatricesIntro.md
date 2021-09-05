---
title:   Introduction to Groups and Matrices
context: MATH530
author:  Huxley Marvit
source:  #index
---

#ref #ret 

---


# [The Assignment](https://nuevaschool.instructure.com/courses/3718/assignments/61005)

![[Screen Shot 2021-08-28 at 6.12.09 PM.png]]
![[8-28-21, 9:32 PM Microsoft Lens.pdf]]

```ad-comment 
For some reason the pdf isn't rendering, so I'll attach it as an additional file. Apologies for the handwriting..
```

### **Tell us why you decided to sign up for this class.**

I spend most of my free time doing programming projects with my friends, and recently I've been doing a lot of Machine Learning. My 'excuse' for taking linear algebra is that in my more recent ML projects I've had to go lower level and I'm being held back by my understanding of linear algebra and statistics, but frankly linear algebra just sounds really cool and I enjoy Nueva math classes a lot.

###  **read 1.a from the textbook. we will discuss any questions on monday! **

q: is division also a lie? yes!
q: do tuples all need the same type? why call them n-tuples instead of lists?
q: why is it called liniear algebra? the explanation that it doesnt deal with geo doesnt explain it 



### **Which of the number systems we discussed are groups under addition? Under multiplication?**

- natural
	- \+ N: no identity
	- \* N: no inverse
- whole
	- \+ N: no inverse
	- \* N: no inverse
- integers
	- \+ Y
	- \* N: no inverse
- rational
	- \+ Y
	- \* Y : wrong! no inverse for 0. ish...
- real 
	- \+ Y
	- \* Y
- complex
	- \+ Y
	- \* Y
missing zero!


### **Is there a multiplication for 3 by 1 vectors that satisfies all group requirements?**
Y -- Multiply equal indices. 

E.g.   $
\begin{bmatrix} 1 & 2 & 3 \end{bmatrix} 
$ $
\begin{bmatrix} 2 & 2 & 2 \end{bmatrix} = \begin{bmatrix} 1*2 & 2*2 & 3*2 \end{bmatrix} = \begin{bmatrix} 2 & 4 & 6 \end{bmatrix}
$


### **Is there an identity for multiplication on 2 by 2 matrices?**

Y --  $
\begin{bmatrix} 1 & 0 \\ 0 & 1  \end{bmatrix} 
$ 

0s cancel the multiplications where the operation index doesn't match the sum of the matrix indices.

expand to 1s along the diagonal






