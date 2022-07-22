---
title:   valuenex plannin context: valuenex author:  Huxley Marvit date: 2021-11-27
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
	- **Answer** we are just sorting by the publication date



regardless, i need to:

- get arr of companie objects :: nownot
- make ui for sliders
	- which allow setting of start date, end date, and increases at a set speed
- export to video


- **have**
	- parsing data
	- initializing clusters
	- finding intensities  
	- pass to shaders

- **need**
	- export to video
	- sliders! (ui)
	- stop when done (don't need)
	- new softmax integration
	- css!

now :: initialization array, done!
now :: match incriment of arr to incriment of dates?
now :: sliders! (not-ui)
now :: passing to shaders


## part two


rendering sprites, instead.

- need to find out:
	- can we render 10k sprites?
	- can we not have to render 10k things?
	- how does addition work with transparency?
	- how do we handle normalization?


***
***

## alright. let's go.

- style the button || done
- add the valunex logo on the top
- change the colors around? || done
- experiment with hover and such || done
- test out performance on less beefy machine
- try out other csvs
- package? comment? idk.


- fix the hard coded! || nah
- fix the starting position + timeline || done
- look into extensions || done
	- tooltips! || done
	
- make electron app?

### before we release. 
- comment? docstrings? build? 
- make a new gh repo
	- transfer!
- soup it up. add in the og shade.mjs || done

*** 
### STILL TODO:
- test out performance on less beefy machine || @huxley
- try out other csvs || nah
- package? || @albert
- comment? idk. || @huxley @albert 
- make a new gh repo || @huxley, or @albert if he wants
	- transfer!












































