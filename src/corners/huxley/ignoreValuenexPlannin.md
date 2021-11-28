---
title:   valuenex plannin
context: valuenex
author:  Huxley Marvit
date: 2021-11-27
---

#ref

***

# valuenex!

### i need to get done:
- sliders, which 
- export to video

parse the data
calculate the intensity

- pass to shaders:
	- array of all `clusters`
		- that need to be
			- shown given time frame
			- softmaxed
		- including `cluster` objects with 
			- x, y, intensity

- intensity per `cluster` is calculated as
	- num of `companies` in a given `cluster` that exists during a given time frame
	- do this by:
		- sorting arr of objects by date, 
		- then o(n) counting sort
		- softmax

- arr of all companies sorted by date
	- how does this work??
	- can we just do counting sort cus we know upper and lower date bounds?



regardless, i need to:

- get arr of companie objects :: now
- make ui for sliders
	- which allow setting of start date, end date, and increases at a set speed
- export to video







