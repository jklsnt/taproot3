---
title: Special Relativity
source: KBPhysicsMasterIndex
course: PHYS201
author: Houjun Liu
---

# Special Relativity

* If events are apart for observers to see, two observers have to record the time and compare notes
* It will take time (sound/light) from an event to get from the event to the observer; the travel time needs to be taken into account, and if the objects are moving, calculating time travel would be extremely tricky
* Human senses also have certanty

## Space and Time
* Because it is impossible to observe a result independent of a refrenece point, each observe would idealy want a clock of identical construction
* Laws of inertia (newton's first law) is not true for every coordinate system, i.e....
	* The rotationon of the Earth, if we set the coornate 0,0 at the center of Earth,  causes everything around earth to seem to be rapidly rotating around earth
	* Hence, it would seem like a force would be wildly acting upon all objects around Earth for their velocity to accelerate rapidly

- If an object is translating through one coordinate system, it would be uniformly translating to another coordinate system of the same type that itself is uniformly translated uniformly 

## The Principle of Relativity
**Note: this is not the theory of relativity**

_Laws of Physics should be the same in all inertial refrence frame._

- Classical mechanics => does apply
- Electromagnatism => not sure


There is no true rest frame of the universe; because if so, the theories of mechanics would be "wrong" in all other systems other than the rest frame and will need adjustment. Furthermore, if there is a rest frame, the "physics" on the moving frame would need to account for the velocity of the moving frame.

However, measuring the motions of dfferent celestial bodies, it seems like the motion w.r.t. any frame is governed by the same law. i.e. if you are on earth, your velocity flips (you go around the sun) every half a year. But, w.r.t. earth's frame at any time of the year, physics is no different. So...

![[Pasted image 20210208105746.png]]

### But Light
Maxwell's equations of electromanitism. Speed of a ~~wave~~ light: $\frac{1}{\sqrt{\epsilon_0 \mu_0}} = ~300,000km/s$

But... relative to what? It seems like this is a ground truth relative to some mysterious $K_0$, which, shoulden't exist. Meaning, the speed of light should be inconsistent based on which set of rules you are observing. But it isn't.

So how do we reconcile Relativistic principles and the theory of light?

## The Theory of Relativity
### When does the same time happen?
Put a guy at the midpoint of two things, put up some mirrors, and observe if two things happen at once.

However, how do we know that light travels at the same speed from two directions? Well, because Relativity Depends on this, we choose that this is true.

Furthermore, if two events are simutaneous to one axis M, they cannot be simutaneous on another axis M' that is moving w.r.t. M. Becauese.. THINK — if you are on a train, and moving towards a point, the light coming from both ends equal for M would, in the case of M', come quicker from the B side because you are moving towards it. 

***

# Eistein's train 
Obserber M stands in the non-moving moment, and looks at two lights shining at A and B. If they are simultaneous, the obserber M would see both events D/c seconds after they happened, where D => distance between A&B, and c=>speed of light.

Obserber M', on the train, would instead see the left light at c-V, the rgiht c+V, for M' is moving at a speed of V towards B

![[Screen Shot 2021-02-08 at 5.12.23 PM.png]]

For the A observer, he would think that the light arrived at d/(c-V), and the B observer, d/(c+V). The smaller denominator one (A) would have a greater time — and that makes sense: you are moving away from it.

However, we can't just add c-V ond c+V to the speed of light when you are moving! That's stupid. The speed of light should stay constant for every observer — whether M or M'.

The only way of reconcilling this problem, is that, through moving though space-time, M' actually *time traveled* — that' from M''s vantage point, A and B did not happen at the same time. In fact, B is more recent than A for M'. In this way, M' could still move, see light at the same speed, but see them at different instants — **simutinaety is relative to the vantage point**.

# Time Dialation
The process by which, when 

Let's say you (obs. M') are standing inside a mirror, and light traves from you + bounces back.

![[Pasted image 20210210094000.png]]

However, what if even A actually takes place on a moving surface traveling to the right at a speed V w.r.t. another "stationary w.r.t. ground" obserber M?

![[Pasted image 20210210094151.png]]

First of all, note that distance L did not change — **distances could only be affected by the direction of lght travel, not perpandicular to it.**

![[Pasted image 20210210094431.png]]

To figure out the distance between event A and the mirror, it is simply $\frac{\delta t}{2} \times V$ (speed of prime travel times half the distance between A and B).

And lastly, to figure out how much light travels, it is simply the hipotenuse between L and $\frac{\delta t}{2} \times V$.

![[Pasted image 20210210094759.png]]

Notice! With this roundabout way, we have an equation with $\delta t$ on both sides: becaues we could figure out the distance of light travel to mirror, doubling that divided by speed of light will result in $\delta t$ again!

Doing some algebra to seperate the $\delta t$, we shall get that:

![[Pasted image 20210210095050.png]]

But notice! We could divide the top and bottom by $c$

![[Pasted image 20210210095115.png]]

Why is $2L/c = \delta t'$? Think! look at the primed (moving) frame. W.r.t. the moving object, the light is traveling exactly perpendicular up and down. So, the change in time in that case is just twice the vertical distance divided by the speed of light.

Physicsts tend to define a $\gamma$ and write the same equation as follows: 

![[Pasted image 20210210095218.png]]

Now.... Notice! If $v$ is small, $\gamma=1$  and hence $\delta t = \delta t'$

As $v \to c$, $\gamma$ increases and hence, to M, M' will be traveling quickly foward to time 

![[Pasted image 20210210100247.png]]

So. Knowledges: $\gamma(v) = \frac{1}{\sqrt{1-(v^2/c^2)**2}}$. which means, for speeds at %c, $\gamma(pc) = \frac{1}{\sqrt{1-pc^2}}$. And finally, for stationary observer $x$ and moving observer $x'$, $\delta t  = \delta t' \gamma$.

What's even cooler? this principle applies to the length of the moving frame as well — but backwards. That, at a moving frame, $D' = D \gamma$, where $D$ is size of the moving frame ("length of the spaceship") when it is not moving to the non-moving frame, and $D'$ the size of the moving frame when it is moving to the non-moving frame.

Of course, beware of thinking this as the "length of the ship", though. For instance, if your stationary frame is the spaceship, the "length of the spaceship" would then be the distance between the planets.

Remember: two objects will need to be parallel to each other and one traveling in a linear motion while the other stationary for this to work!

**Displacement equales velocity multiplied by the time interval** (and gamma.)


# Knowledges That Importance
$\gamma(v) = \frac{1}{\sqrt{1-(v^2/c^2)**2}}$. which means, for speeds at %c, $\gamma(pc) = \frac{1}{\sqrt{1-pc^2}}$

## Time Dilation
Should Ted be moving at a velocity $V$ according to the refrence frame of Sally. Time $t$ for Ted would be $\gamma \times t$ for sally.

## Length Contraction
Should Ted be moving at a velocity $V$ according to the refrence frame of Sally. Distance $D$ away from Sally and Ted's shared $D_0$ for Ted would be $\frac{D}{\gamma}$ for sally.

![[Pasted image 20210224111827.png]]

=> "Finding the distance to origin, and multiply by gamma"