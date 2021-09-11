---
title: Validation Part B
context: ML301
author:  Huxley
source:  #index
---

---

# Part A

- What are the best and worst possible scores it could get?
	- When using f1 score, the best possible score would be 1, and the worst would be 0. 
- Why do you think the model is getting the score you're seeing? 
	- The score I'm seeing is 1. This is expected, as I am testing a decision tree on the iris data it was trained on.
- How do the scores between the training and testing sets compare?
	- I would assume that the testing set score would have a lower f1 score than the training set, as the model is specifically fitted for the training data.







# Part B

Please answer the following questions and briefly explain your answer:

- Thinking about the R^2 metric used for evaluating regression, answer the following questions:
	- What is the best highest possible score you could get?
		- The highest possible score is 1, representing a perfect fit. In order to achieve an R^2 of 1, the error must be 0. 
	- If your model simply predicted the average value of the training set no matter what the input was, what score would you get on a test set whose average matched that of the training set?
		- The score would be 0, as the denominator and numerator would be equal. This would result in the equation 1-1, which equals 0. 
	- What is the lowest score that you can get?
		- Negative infinity. 
- When using accuracy to measure your model's performance on a classification problem:
	- What is the best possible score you could get?
		- 1. In a scenario with x samples, an entirely correct classification would lead to x/x, which is 1. 
	- If your model always predicted the same class no matter what the input, what score would you get on a test set where 85% of the items were in that class?
		- 85%
- What is the worst possible score you can get on a dataset that only has two classes?
	- 0. Every sample could be sorted incorrectly as long as there is more than one class. 

- A model gets a recall score of 0 for class A on a test set with classes A, B, and C. If you take one of the test items that is in class A and have this model predict what class it is, what will it predict?
	- A recall score of 0 for class A means that every item in class A was labeled incorrectly. When given another sample in class A, the model will predict either class B or class C.

- A model gets a precision score of 1 for class A on a test set with classes A, B, and C. If you take one of the test items that is in class A and have your model predict what class it is, what will it predict?
	- The model could predict any of the three classes. A precision value is only effected by true positive and false positive rate, meaning that when given a sample in class A, predicting C or B would not lower class A's precision.
	
- If a model with classes A and B has an AUC score of 1 and you give it an item from the test set that is in class A, what class will it predict and what probability will it give for that class?
	- It will predict class A, and give a probability of 100%. This is because an AUC score of 1 represents a perfect model.  


- If a model with classes A and B has an AUC score of 0 and you give it an item from the test set that is in class A, what class will it predict and what probability will it give for that class?
	- This means that the model is always perfectly incorrect. If you were to give it a sample from class B, it will always pick class A, and vise versa. The model would still give a probability of 100%.  
















