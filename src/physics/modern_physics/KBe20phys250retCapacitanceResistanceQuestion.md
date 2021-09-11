---
title:   Computer Speed by Capacitance and Resistance
context: Physics
author:  Exr0n
source:  2020PHYS201/exr0n20phys201retIndex.md
---

# Homework Question
> To carry signals on silicon chips, metal conductors are created. These are usually in the form of rectangular strips as seen in the highly magnified image below. Many of the conductors in this image appear to be connected to nothing, but they are making contact to structures and conductors in lower layer(s). Some are short, but others may run the entire length of the chip.

![KBsrcComputerInternalsAsCapacitors.png](KBsrcComputerInternalsAsCapacitors.png)   

> “Signals” are of course nothing other than changing voltages. So imagine that at one point on the chip, a switch is closed that connects two conductors to the opposite ends of a battery. The question is, how long does it take for the other end of the conductors to reach a substantial fraction of the battery voltage?

> Assume the conductors are L meters long, H meters high, W meters wide, and are separated by S meters. The gap between the conductors is filled with an insulator having relative dielectric constant $\kappa$.

> Write an expression for the resistance of each conductor in terms of the above quantities, and the resistivity of the conductor material, $\rho$.

$$R = \frac{L\rho}{HW}$$

> Write an expression for the capacitance of the two conductors, assuming they form a parallel-plate capacitor.

$$C = \frac{\kappa \epsilon_0 LH}{S}$$

The area should be $LH$ and not $HW$, because while charge collects in the opposite corners when there is no field $E$ (in electrostatics), charge will collect on the face near the other wire in this case because we have a E field (the whole point of a capacitor).

> Combine these to estimate the time it takes for the far end of the conductors to rise to an appreciable fraction of the battery voltage. Do any of the parameters listed above cancel out?

$$
\begin{aligned}
\tau = RC = \frac{L\rho}{\cancel{H}W} \frac{\kappa \epsilon_0 L\cancel{H}}{S} \text{in} \frac{m^2\Omega m\frac{C^2}{Nm^2}}{m^2} = \frac{\cancel{m^2}\Omega m C^2}{m^2N\cancel{m^2}} = \frac{\cancel{m^2}kg\ \cancel{m^2}\ m \cancel{C^2}}{\cancel{m^2}N\cancel{m^2}\cancel{C^2}s} = \frac{kg\ m}{\frac{kg\ m}{s^2}s} = s\\
\end{aligned}
$$

> Assume the conductive strips are made of aluminum, L = 250 μm, k = 2, and H = W = S = 20 nanometers, $\rho = 2.65\times10^{−8}$. What is your calculation of the time constant? Be careful with units, and check to make sure that your answer is in seconds. What does the time constant have to do with how many signals or voltage changes can be sent per second?

$$\tau
= \rho\kappa\epsilon_0\frac{L^2}{WS} = 7.33\times10^{-11}
$$

where $\tau$ is the "time constant", which will show up alot: [[KBrefPhysTimeConstant]]

# #icr in class review
The voltage that we expect to see across the ends of the conductors:
![[srcWiresAsCapacitorsSlowSignal.png]]

## why does capacitence make it go slower?
- Because you are able to fit more charge onto the wire, which means you have to put more charge to get the signal to go all the way down the wire

---
