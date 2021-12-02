---
title:   
context: 
author:  Huxley Marvit
date: 2021-11-18
---

#flo  #inclass 

***

# Current! and magnetism!

**flux:** analogy, total number of field lines poking out of a surface

```ad-important
area A and it is perpendicular to B, the flux is 
$$\phi = BA \cos(\theta)$$
```
if the area is tilted, we have lower flux. this makes sense, as really we are just taking the dot product from the normal to the surface.

**change in flux** is what induces current.


EMF :: eletromotive force. it is the rate of change of the flux w.r.t. time
$$EMF = \frac{d\phi}{dt}$$

flux can be changed by ::
- mag field strength 
- total area of loop
- area of the loop that is crossed by the field
- angle of the loop w.r.t. the field
- or, ofc, combos.
the pictures! they match! like this: 

A-B
C-D
B-A
D-C

## the experiment notes, for after break.


moving magnet across coil of wire.

figure out the induced current over time

tenth of an amp.

moving the graph gives us,

`
__/\_	_____
		  \/
`
![[image-1.png||500]]
![[image.png||500]]


***

*welp, it's after 'break.'*
### inductors!

- inductance : 
	- backwards MEF / rate of change of current
		-  units of volts / Amps/sec or (V * S)/A, called a henry


- inductance can be increased with a material inside just like a capacitor

- {start} cap -- switch -- inductor {close} :: called an **inductor-capacitor**
	- big surge of current, 

**L** is used for inductance

the energy alternates between the magnetic and the capacity? called a resonant circuit
fundemental way of oscilating anything
[LC circuit](https://en.wikipedia.org/wiki/LC_circuit)

resonant is defined as
$$ \displaystyle \omega _{0}={\frac {1}{\sqrt {LC}}} $$


- magnetic field builds up in the coil as the capacitor discharges, then since the capacitor is discharged the magnetic field shrinks, which is changing flux, which charges the capacitor
	- thus, it oscilates, 
		- but the charging is changing flux as well... with no resistance tho, this isnt lossy
		
- transformers use inductance to change the voltage
	- can be done by changing the number of 'wraps'
	- ration is defined by $\frac{v_P}{v_S} = \frac{N_P}{N_S}$ where $v_P$ vs $v_S$ is the primary vs. secondary current, and $N_P$ vs $N_S$ is the primary vs. secondary turns

#### solids!

- diamagnetic
	- most materials
		- however, all materials have this characteristic
		- but in other materials, other props overwhelm it
	- no polarized particles, becomes aligned in the presence of magnetic field
- paramagnetic
	- polarized particles, magnetic field aligns them
- and ferromagnetic


***

## the experiment.

#### ex1.
- took three resistors in parrelel to make it work
- taped down the magnetic field sensor right ontop of the wire
- had a large wire loop far away from the sensor, w/ battery, resistors in parrelel, current sensor.
- had a current probe and a magnetic field probe going into logger pro

- we chaanged
	- the resistence, from 2 resistors to 3.

#### ex1
- same thing as earlier, but we removed resistors
	- this is because we don't care about being able to measure the current as long as it is consistent

- then we 












