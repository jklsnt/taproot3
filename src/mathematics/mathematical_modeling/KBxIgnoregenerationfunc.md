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

$$\displaystyle {\begin{aligned}\int _{\pi }^{-\pi }Q\,dh&
=\int _{h_{o}}^{-h_{o}}Q\,dh\\&
=S_{o}{\frac {R_{o}^{2}}{R_{E}^{2}}}\int _{h_{o}}^{-h_{o}}\cos(\Theta )\,dh\\&
=S_{o}{\frac {R_{o}^{2}}{R_{E}^{2}}}\left[h\sin(\phi )\sin(\delta )+\cos(\phi )\cos(\delta )\sin(h)\right]_{h =h_{o}}^{h=-h_{o}}\\&
=-2S_{o}{\frac {R_{o}^{2}}{R_{E}^{2}}}\left[h_{o}\sin(\phi )\sin(\delta )+\cos(\phi )\cos(\delta )\sin(h_{o})\right]\end{aligned}}$$
factoring in the -1/2pi, 

we get the: 


final 
$${\overline {Q}}^{\text{day}}=\frac{S_{0}}{\pi}\frac{R_{0}^{2}}{R_{e}^{2}}\ \left[h_{0}\sin\left(\phi\right)\sin\left(\delta\right)+\cos\left(\phi\right)\cos\left(\delta\right)\sin\left(h_{0}\right)\right]$$



$$\displaystyle {\begin{aligned}\int _{\pi }^{-\pi }Q\,dh&
	=\int _{h_{o}}^{-h_{o}}Q\,dh\\&
	=S_{o}{\frac {R_{o}^{2}}{R_{E}^{2}}}\int _{h_{o}}^{-h_{o}}\cos(\Theta )\,dh\\&
	=S_{o}{\frac {R_{o}^{2}}{R_{E}^{2}}}\left[h\sin(\phi )\sin(\delta )+\cos(\phi )\cos(\delta )\sin(h)\right]_{h =h_{o}}^{h=-h_{o}}\\&
	=-2S_{o}{\frac {R_{o}^{2}}{R_{E}^{2}}}\left[h_{o}\sin(\phi )\sin(\delta )+\cos(\phi )\cos(\delta )\sin(h_{o})\right]\end{aligned}}$$


wiki: Let _h_0 be the hour angle when Q becomes positive. This could occur at sunrise when ${\displaystyle \Theta ={\tfrac {1}{2}}\pi }$, or for _h_0 as a solution of

${\displaystyle \sin(\phi )\sin(\delta )+\cos(\phi )\cos(\delta )\cos(h_{o})=0\,}$

or

$h_{0}= \cos^{-1}(-\tan(\phi )\tan(\delta ))$
end wiki
therefore, $h_{0}=\cos^{-1}\left(-\tan\left(\phi\right)\tan\left(\delta\right)\right)$

theoretical daily average insolation at the top of the atmosphere as a function of lattitude and time of year
![[Pasted image 20211110162119.png]]





![[Pasted image 20211110172859.png]]
equator, summer solstice





$\theta_s$


### Writing!
Assumption: the earths orbit is circular
Assumption: we are not using tracking PV arrays

- {JUSTIFICATION}
	- Given our assumption that the total generation over a year is equal to our total consumption over a year, all that needs to be determined is the distribution of this generation. We can then scale this distribution to match our yearly consumption.
	
***




We can model the solar irradiance, a measure of power per unit area, as a fraction of the Total Solar Irradiance (TSI). TSI is treated as a constant describing the mean solar irradiance at the mean position of earth as measured on a surface perpendicular to the suns rays. However, due to the curvature of the earths surface, the suns rays are not always received at a perpendicular angle. The difference between these two angles -- perpendicular and actual -- is called the solar zenith angle, denoted $\theta_s$. Formally, this is the angle between the zenith, defined as the local normal vector to the earths surface, and the sun's rays. 
[[Frame 1.pdf]] {FIGURE THINGS}


Thus, we can express the solar irradiance as
$$
Q={\begin{cases}S_{0}
{\left( \frac {R_{0}}{R_{E}} \right)^2}
\cos(\theta_s )&\cos(\theta_s )>0\\0&\cos(\theta_s)\leq 0\end{cases}}
$$
where $R_E$ represents the distance between the earth and the sun, $R_0$ represents the mean distance between the earth and the sun, and $S_0$ represents the TSI. For our purposes, we can approximate the relatively trivial value of $\left( \frac {R_{0}}{R_{E}} \right)^2$ as 1.

Using the spherical law of cosines, 
$$
\cos(c)=\cos(a)\cos(b)+\sin(a)\sin(b)\cos(C)
$$

the solar zenith angle can be calculated as a function of the latitude, declination angle, and the hour angle:

 $$\cos(\theta_s )=\sin(\phi )\sin(\delta )+\cos(\phi )\cos(\delta )\cos(h)$$
 
Here, $\phi$ represents the latitude, $\delta$ represents the declination angle, and $h$ represents the hour angle. The declination angle varies seasonally due to the earths axial tilt, reaching its maximum and minimum on the northern summer and winter solstices respectively.
$\delta$ can be calculated as
$$\delta=-\gamma \cdot\cos\left(\frac{2\pi}{365}\cdot\left(d+10\right)\right)$$
where $\gamma$ represents the earths axial tilt and $d$ is number of days since the beginning of the year.
The hour angle, $h$, represents how far the earth has turned since noon. Formally, it is defined as the difference in longitude between the point closest to the sun at noon to the point's current longitude.
Graphing our equation for $Q$ yields the following:
![[irradiance_day_graph.png]]
*Graph of solar irradiance at the top of the atmosphere over a day at the equator during the northern summer solstice. Generated with values of $S_0 = 1.367$ kW/m$^2$, $\gamma = 0.409$, $d=172$, and $\phi = 0$.*
*

Integrating our equation over a day gives us 

$$
\displaystyle {\begin{aligned}{\overline {Q}}^{\text{day}}
&=-{\frac {1}{2\pi }}{\int _{\pi }^{-\pi }Q\,dh}\\&
=-{\frac {1}{2\pi }}{S_0 \int _{\pi }^{-\pi }\cos(\theta_s)\,dh}\\&
=\frac{S_{0}}{\pi}\ \left[h_{0}\sin\left(\phi\right)\sin\left(\delta\right)+\cos\left(\phi\right)\cos\left(\delta\right)\sin\left(h_{0}\right)\right]
\end{aligned}}
$$
where $h_0$ is defined as the hour angle at sunrise and sunset. $h_0$ can be calculated as 
$$h_{0}= \cos^{-1}(-\tan(\phi )\tan(\delta ))$$

Graphing our equation for $\overline {Q}^{\text{day}}$ yields

![[contourgraph.png]]
*A graph of latitude vs. day of the year vs.  $\overline {Q}^{\text{day}}$. Generated with values of $S_0 = 1.367$ kW/m$^2$ and $\gamma = 0.409$. *


***
%%We can account for this change in angle based 


Due to the earth being spherical, 

We can model the solar irradiance, or power per unit area at a given instance, based on a 


We can model the power per unit area received from the sun at a given instance, called solar irradiance, 

We can model this generated power distribution over a day based on latitude and time of year. 





%%
Given our house attributes as inputs, 

- We can model the generation function over a day as such



















