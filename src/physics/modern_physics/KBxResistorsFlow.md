---
title:   Resistors?
context: modphys
author:  Huxley Marvit
date: 2021-09-20
---

#flo  #inclass 

***


## Ref it later #review


charging a battery is fundamentally shoving in current the wrong way

direction of flow doesn't really matter, wrong way of current flow just flips to neg

can walk in whatever loops on the rollercoaster

we need [[KBhPHYS201KirkoffsLaws]]

**most engineers dont go back to the laws to solve a circuit. instead, they:**

replace clusters of parrelles with one equivalent resistor
"morph" the circuit

resistors in series -> one equivalent resistor
one resistor in circuit

```ad-important
v=ir
voltage = current * resistance
```


### howto: calculating equivalent resistors

connected in series: the sum of the individual resistances.

**R + R = 2R**

Two resistors connected in parallel: The reciprocal of the equivalent resistance of two resistances connected in parallel is the sum of the reciprocals of the individual resistances. what??

**1 / Req = 1 / R1 + 1 / R2 + 1 / R3**

just add the reciprocals to get the INVERSE of Req


#### problem:

```	
	   |--20--|
*--10--        --*
	   |--60--|
```


1/20 + 1/60 = 4/60 = 1/r2 
flip, 60/4  = 15

15 + 10 = 25 $\Omega$

***
```
* -- {9v} -- 10 -- [20, 30] -- [40, 50] -- *
```


| R#  | R   | dV   | I    | P    |
| --- | --- | ---- | ---- | ---- |
| 1   | 10  | 2.03 | .203 | 0.41 |
| 2   | 20  | 2.44 | .122 | 0.29 |
| 3   | 30  | 2.44 | .081 | 0.19 |
| 4   | 40  | 4.53 | .113 | 0.51 |
| 5   | 50  | 4.53 | .090 | 0.41 |


summing up parrelel: 10, 12, 22 ohm
sum = 44 ohm
9V/44Ohm = 0.203Amps
coming out of bat

***

1/10000+1/3300 + 1/1000 

470 + 

 = 1183

### power:
P = IV
In Watts
energy per second


```ad-summary
add the resistors
do the sodoku
fill out the table
```











