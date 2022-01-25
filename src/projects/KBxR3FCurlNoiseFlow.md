---
title:   Curl Noise Flow R3F Experiment
context: explor
author:  Huxley Marvit
date: 2021-12-27
---

#ref #incomplete

***

# Curl Noise Flow
*lets get it.*



## how does curl noise work?
perlin noise, but instead of grayscale values it produces vectors!
then, we put particles into the vector field and track their movement.



## the experiment idea
3d space, animated curl noise (so really 4d noise)

use afterimage processing from threejs to maintain trails -- but this wont work with rotation!
sooo...

static camera, moving points in three space? 

- 3d cross section of 4 dimensional flow field
- threejs particles 




could make it be like a clock, where there are specially places cells at the places in the digits

hmm.... maybe do this 2d.

could also set up with different noise functions



## resources
- https://www.youtube.com/watch?v=BjoM9oKOAKY&ab_channel=TheCodingTrain
- https://stackoverflow.com/questions/46084830/in-three-js-is-there-a-way-to-produce-a-trail-that-slowly-fades-over-time
	- https://discourse.threejs.org/t/afterimage-pixellation/4884/7
- https://www.npmjs.com/package/vector-field
- https://tympanus.net/codrops/2019/01/17/interactive-particles-with-three-js/
- https://www.reddit.com/r/processing/comments/4tknqs/audioreactive_flowfieldparticlesvoronoi_rendered/












