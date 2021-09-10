---
title:   Data Processing Responses 
context: ML301
author:  Huxley
source:  #index
---

#ret 

---

Original Submission: [[KBDataProcessingRett]]

# Comment Response 

- 2b. How do you convert from the 1-10 rating scale to positive/negative/neutral?
	- You would have to pick ranges that define what is positive/negative/neutral 

- 2c. Given that the reviews vary greatly in their length, is one of these preferred over the other?
	- BOW doesn't work well when length varies. TFIDF, however, does. 

- 2e. Why not accuracy, precision, or recall?
	- Those would all work as well. I just decided to list one possible validation metric as opposed to all of them. 

- 3a. This could work, but I think you will find this problem more straightforward as a different kind of problem.
	- I guess this problem could be done as a clustering problem, representing each movie as a location in a multidimensional space then placing users in the space and clustering. 

- 3b. Semi-supervised usually refers to models where we have some labels, and we generate additional labels. Where do our labels come from? How do we generate the additional ones?
	- The original labels would most likely be generated. As time progresses, we get labels back from the users that are interacting with our model's recommendations.

- 3c. Be more specific: which features would you use which techniques on? For example, you could use bag of words or OHE on the names of the stars, but you’d get pretty different results depending on which one you picked.
	- OHE: name of stars, genre. BOW or TFID: title. 

- 3e. A user not watching a recommendation is not necessarily good signal on whether it's a good recommendation (i.e. I might really like a movie, and just not have time to watch it right now). Conversely, a user watching a movie is not necessarily signal that it was a good recommendation (maybe I watched it because you recommended it, but I hated it).
	- This depends on the goal of the recommendation. If you get a good recommendation and don't watch it, was it really a good recommendation? If the goal is simply to increase watch time, and thus increase the number of ads viewed, then yes watching or not watching is a good metric. Think click-bait. Of course, this has to be weighed against the long term effects of the recommendation. 

- 3f. I know you are kidding (I hope so, at least!), but the whole point of us learning about ethics is precisely so that they do not crumble in the face of capitalism! 
	- I think maybe we should shift the goal to rebuilding the already crumbled ethics... 

- 4b. Where do these labels come from?
	- From the friends you asked. 

- 4c/d. Why WPIE/NN? Is there a simpler approach we might try first?
	- BOW, TFIDF, or word vectors would work, but Facebook's method itself would most likely work better. As for the type of model, Decision Trees and Random Forests would work.

- 4e. Why not accuracy, precision, or recall?
	- Again, just decided to list one validation metric. Accuracy, precision, and recall would also work. 
	
	
	