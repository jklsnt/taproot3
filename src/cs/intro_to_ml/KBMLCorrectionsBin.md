---
title:   Ml Corrections Bin 
context: ML301
author:  Huxley
source:  #index
---

#ref #ret 

---

# Corrections! 


## Validation
org: [[KBValidationPB]]
```
Problem 2c. This is the lowest possible score, but is it the worst score? Consider: let's say you wanted a model that identifies whether a picture contains a dog. I give a model that is wrong 100% of the time. Specifically, if the picture contains a dog, the model says it's doesn't, and if the picture doesn't contain a dog, the model says it does. Is that model useful to you? Is there a model that would be less useful? What would its accuracy score be?
Wesley Chao, Oct 23 at 5:26pm
Problems 5 & 6: how do you know the probability is 100%? Is it necessary to return a probability of 100% for the model to be perfect?
```


For problem 2c, the least helpful score would be 0.5, in which every sample is sorted randomly. This would give virtually no information, and is just as good as random.

The 'worst' possible score, however, would still be 0. This is just a definitions games, as, of course, you could simply flip the results around and get a perfect score.

In actuality we don't really know the probability that a perfect model will return. Thus, all we can say is that the probability will be >= 50%. 


## Classification 
```
Excellent work, Huxley! You only had to do exercises in two of the four notebooks, but you not only did all four but also did the advanced exercises in each. I wonder — is this assignment challenging enough for you? Do you feel like you’re learning, or are you doing a non-trivial amount of rote work? If the latter, let’s talk! I’d love to find a more challenging project for you to spend your time on that would also demonstrate understanding of the material. Some specific comments below. 

Decision Tree: good work on the standard exercise; I agreed with your answers. A question on #5: what happens if you don’t use either petal width or petal length? Is the structure of the graph still the same? 

On the advanced exercise, good work figuring out how to implement a random forest classifier and calculating the F1 score. However, the exercise isn’t merely a coding exercise — it’s also to answer the question of how the random forest classifier performs relative to the single decision tree. What would you use to make that comparison? Also, note that you’re calculating the accuracy using the data and target, but as you correctly pointed out in question 4 of the standard exercise, if you try to predict the target of a datapoint in your training data using a decision tree, you’ll always get the right answer, which is why you’re getting an F1 score of 1. 

Logistic Regression, generated data: Very nice work tackling both advanced exercises! Your plot of the model fit is an excellent visualization of what the model learned, and I appreciate you being diligent about citing your sources. On the multinomial regression, your output looks pretty similar to the built-in output, with the exception of the second test item. Why do you think your output is so different?

Logistic Regression, iris data: Great work here as well (although, as I’m sure you noticed, the exercises on these two notebooks is very similar). One small note: you say that we don’t provide labels for the classes. I think what you meant is that we don’t provide names for the classes — “labels” in ML has a special meaning, which is the target or correct answer. 

Naive Bayes: I agree that words like “mars” and “shaders” which show up exclusively in one category modify the probabilities considerably. Are there other, less obvious words that also have a large effect on probabilities?

In the advanced exercise, you wrote efficient, technically solid, well-documented code… but you didn’t actually answer the question. Which words have large effects on predicted probabilities, and do their relative number of appearances in each newsgroup match your intuition?
```


Hi Wes,

Each of these notebooks do introduce new concepts to me, so I am definitely still learning. They just go by pretty quickly. However, I would love to work on some more projects, especially once we get to the more advanced topics! 


#5: Using sepal length and sepal width, the structure is significantly more complicated. See attached image. 


As for the random forest and decision tree, if I were to compare them, I would compare their F1 scores on test data. 


For Naive Bayes, less obvious words which sway the prediction immensely include: 'on', 'that', and 'of'. 

The words 'on', 'that', and 'of' appear much more in sci.space than the other categories, and tend to sway the prediction towards sci.space greatly. This does not match my intuition of how the model should work. 

Thanks for the feedback!


## Linear Regression 

```
General note: when you submit via a git repo, please tell me what I should be looking at, even if it should be obvious. In this case, you have a notebook in the main directory of your repo, but also a linear regression folder that contains another notebook — one of them has a solution for exercise 4, but the other doesn’t. If you want to make sure I see all the work you’ve done, help me out and tell me where the relevant files are. 

Exercise 1-2. These would be the numbers you expect if the model found weights exactly corresponding to original equation; i.e. the data before introducing noise. Given that the model does not find these exact weights, what numbers would you expect the model to predict?

Nice work taking on the advanced exercises! For exercise 3, you used support vector machine-based regression. Why did you choose this method over polynomial regression? What are the pros and cons of your approach? 

For exercise 4, you implemented and plotted a regularized best-fit line using ridge regression. But this plot looks a lot like the plot of the non-regularized model. How do you know your code worked? What would we expect to see here? Do we see it? If not, why not?
```

Sorry for the confusion! In the future, I'll submit the direct github link to the file, or add a comment with all the direct links. 

Exercises 1-2: I would expect the model to predict numbers according to the intercept and coefficient that it did find, which, "if the linear regression code was working," should be close the to function that the model is trying to fit, right? I think I may be misunderstanding your question. 


I don't have a lot of logic behind why I chose to use SVM besides the fact that it looked interesting and I wanted to figure out how to use it. I believe that polynomial regression is more prone to overfitting, but I'm not entirely sure on that. 

More broadly speaking, to know if my regularization code worked, I could look for an increase in R^2. This is because a completely over-fitted model would, by definition, have an R^2 of 0. Generalizing, or regularizing the model would make the model less specific to the training data, increasing the R^2. 



































