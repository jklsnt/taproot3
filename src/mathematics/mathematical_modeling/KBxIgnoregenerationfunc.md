---
title:   Generation Function
context: comap
author:  Huxley Marvit
date: 2021-11-08
---

#flo #ret #ref
#disorganized #incomplete
#hw 

***

# Les go.

- we need to figure out:
	- what is the curve of generation over a day
	- how does this curve shift over the seasons?



- our inputs
	- location
	- time of year (season)

- output
	- generation curve over a day



look into: Global Tilted Irradience.

**all we care about is the relative shape and how the relative shape changes!**
this is because the other stuff will be consistent, and we aren't recommending a solar system

### terms:

solar irradiance: power per unit area (W/m^2)
integrated over time gives us: insolation (j/m^2)
solar irradiance aka solar flux: power per unit area!

TSI: total solar irradiance. when the sun is perpendicular! over a sqaure meter. this is just a constant


zenith angle: angle between suns rays and vertical direction (of earth).
"local normal to earths surface" and sun rays (line between point on earth surface and sun)

declination angle: lattitude of point directly under the sun at **noon**
complement of solar zenith angle

subsolar point: point that is closest to the sun on a planet

hour angle _h_: defined as the longitude of the subsolar point relative to its position at noon. AKA how far it moves in an hour! 

A cos zenith angle is the area of sunlight recieved per area on earth AKA how much sunlight area ur actully getting for an area on earth.


### helpful relations

spherical law of cosines!




Q¯day=S0πd¯d2[h0 sinϕ sin δ+cosϕ cos δ sin h0]



### Vars!

Assume circular orbit?

charge
$Q = S_0 \left( \frac{\overline{R_0}}{R_e} \right)^2 \cos \theta_s$
or 
$Q={\begin{cases}S_{o}{\frac {R_{o}^{2}}{R_{E}^{2}}}\cos(\Theta )&\cos(\Theta )>0\\0&\cos(\Theta )\leq 0\end{cases}}$
can be aproximated as 
$Q \approx S_0  \cos \theta_s$


declination angle
$\delta=-0.409\cdot\cos\left(\frac{2\pi}{365}\cdot\left(d+10\right)\right)$

spherical law of cosines
$\cos(c)=\cos(a)\cos(b)+\sin(a)\sin(b)\cos(C)$
and derivation 
$C=h$
$c=\Theta$
$a={\tfrac {1}{2}}\pi -\phi$
 $b={\tfrac {1}{2}}\pi -\delta$
 
to calculation of  cos(zenith)
 $\cos(\Theta )=\sin(\phi )\sin(\delta )+\cos(\phi )\cos(\delta )\cos(h)$
 
substituting back in 
$Q=S_{0}\left(\frac{\overline{R_{0}}}{R_{e}}\right)^{2}\left(\sin\left(\phi\right)\sin\left(\delta\right)+\cos\left(\phi\right)\cos\left(\delta\right)\cos\left(h\right)\right)$

we can get the delta with 
$\delta=-0.409\cdot\cos\left(\frac{2\pi}{365}\cdot\left(d+10\right)\right)$
where 23.45deg in radians in 0.409




integrating over a day, h goes from pi to negative pi
${\overline {Q}}^{\text{day}}=-{\frac {1}{2\pi }}{\int _{\pi }^{-\pi }Q\,dh}$

${\frac  {R_{o}^{2}}{R_{E}^{2}}}$ is constant, so the integral becomes

$\displaystyle {\begin{aligned}\int _{\pi }^{-\pi }Q\,dh&=\int _{h_{o}}^{-h_{o}}Q\,dh\\&=S_{o}{\frac {R_{o}^{2}}{R_{E}^{2}}}\int _{h_{o}}^{-h_{o}}\cos(\Theta )\,dh\\&=S_{o}{\frac {R_{o}^{2}}{R_{E}^{2}}}\left[h\sin(\phi )\sin(\delta )+\cos(\phi )\cos(\delta )\sin(h)\right]_{h=h_{o}}^{h=-h_{o}}\\&=-2S_{o}{\frac {R_{o}^{2}}{R_{E}^{2}}}\left[h_{o}\sin(\phi )\sin(\delta )+\cos(\phi )\cos(\delta )\sin(h_{o})\right]\end{aligned}}$
factoring in the -1/2pi, 

we get the: 


final 
$${\overline {Q}}^{\text{day}}=\frac{S_{0}}{\pi}\frac{R_{0}^{2}}{R_{e}^{2}}\ \left[h_{0}\sin\left(\phi\right)\sin\left(\delta\right)+\cos\left(\phi\right)\cos\left(\delta\right)\sin\left(h_{0}\right)\right]$$




wiki: Let _h_0 be the hour angle when Q becomes positive. This could occur at sunrise when ${\displaystyle \Theta ={\tfrac {1}{2}}\pi }$, or for _h_0 as a solution of

${\displaystyle \sin(\phi )\sin(\delta )+\cos(\phi )\cos(\delta )\cos(h_{o})=0\,}$

or

${\displaystyle \cos(h_{o})=-\tan(\phi )\tan(\delta )}$
end wiki
therefore, $h_{0}=\cos^{-1}\left(-\tan\left(\phi\right)\tan\left(\delta\right)\right)$

theoretical daily average insolation at the top of the atmosphere as a function of lattitude and time of year
![[Pasted image 20211110162119.png]]





![[Pasted image 20211110172859.png]]
equator, summer solstice





$\theta_s$


### Writing!
Assumption: the earths orbit is circular

- {JUSTIFICATION}
	- Given our assumption that the total generation over a year is equal to our total consumption over a year, all that needs to be determined is the distribution of this generation. We can then scale this distribution to match our yearly consumption.

We can model this generated power distribution over a day based on latitude and time of year.


Given our house attributes as inputs, 

- We can model the generation function over a day as such




















