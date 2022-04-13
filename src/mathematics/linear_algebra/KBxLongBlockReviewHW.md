---
title:   Long Block Review HW
context: linalg
author:  Huxley Marvit
date: 2021-11-06
---

#ret  #hw 

***

# Long Block Review Homework
```ad-note
Hey Jana, 

Just to let you know, a bunch of the embedded matrices in the homework aren't showing up for many of us. It's most likely some strange Canvas glitch.
```

Here's some review from the long block material:

1. *Multiply the following matrices by a variety of vectors (pick at least four 2x1 vectors yourself) and figure out what they do geometrically to the vectors (if you're feeling ambitious, maybe try representing with a **vector field**!):*

$
\begin{bmatrix} 
 2 & 0  \\
 0 & 1  
 \end{bmatrix} \to \begin{bmatrix} 
 2x \\
 y   
 \end{bmatrix}
$ -> scales x component by 2.

$
\begin{bmatrix} 
 0 & -1 \\
 1 & 0  
 \end{bmatrix} \to \begin{bmatrix} 
 -y \\
 x   
 \end{bmatrix}
$ -> rotate 90 counterclockwise


$
\begin{bmatrix} 
 0 & 0 \\
 0 & 3
 \end{bmatrix} \to \begin{bmatrix} 
 0 \\
 3y   
 \end{bmatrix}
$ -> aligns to y axis then scales by three


$
\begin{bmatrix} 
 1 & 1  \\
 0 & 1
 \end{bmatrix} \to \begin{bmatrix} 
 x+y \\
 y   
 \end{bmatrix}
$ -> 45 shear


$
\begin{bmatrix} 
 1 & 1  \\
 0 & 1
 \end{bmatrix} \to \begin{bmatrix} 
 x+y \\
 y   
 \end{bmatrix}
$ -> 45 shear

2. *Now let's try considering how these transformations are related to the determinant... Recall that we denote the determinant of A as |A| to suggest that the determinant somehow gives the **size** of the matrix. How might you represent the **size** of the above matrices? Of the identity?*
	3. Area of parallelogram created by unit vectors post transformation

*When you multiply any of these matrices together, or with the identity, what is the **size** of the new matrix?*
By the product of linear maps, the determinant of the two matrices multiplied together.

3. *With the above notion of how the determinant is related to the geometric effect of the matrix mutliplication, we may not be too surprised to hear that matrices have inverses iff they have a nonzero determinant.*

*Which of the following matrices have inverses? Can you see any relation between the rows or columns of a matrix and its invertibility?*
If either the rows or the columns are linearly dependent, the matrix is not invertible.
$
\begin{bmatrix} 
 2 & 2 \\
 1 & 1  
 \end{bmatrix}
$ -> n

$
\begin{bmatrix} 
 2 & 1 \\
 0 & 1  
 \end{bmatrix}
$ -> y

$
\begin{bmatrix} 
 1 & 3 \\
 2 & 6  
 \end{bmatrix}
$ -> n

$
\begin{bmatrix} 
 1 & 1 & 1 \\
 0 & 1 & 1 \\
 1 & 0 & 0   
 \end{bmatrix}
$ -> n

$
\begin{bmatrix} 
 1 & -1 & 2 \\
 1 & 0 & 1 \\
 2 & 1 & 0   
 \end{bmatrix}
$ -> y

$
\begin{bmatrix} 
 1 & 3 & 0 \\
 1 & 1 & 0 \\
 0 & 1 & 0   
 \end{bmatrix}
$ -> n














