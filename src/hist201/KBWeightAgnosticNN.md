---
title:   Weight Agnostic Neural Networks
context: ML301
author:  Huxley
source:  #index
---

#ref #ret 

--- 


# Weight Agnostic Neural Networks
*Or WANNN, for short.*

My personal note's on [this article](https://towardsdatascience.com/weight-agnostic-neural-networks-fce8120ee829), and also [this article](https://ai.googleblog.com/2019/08/exploring-weight-agnostic-neural.html).

---


Animals can perform tasks when they are born without prior experience to the world. If the brain is pre-wired, then learning new from experience would cause a loss of the old skill. What gives? 


WANNs can perform tasks regardless of the weights in its connections by operating off of a pre-made structure. 


Also, finding structures with inductive bias is hard and slow!


## NEAT 
*NeuroEvolution of Augmented Topologies*


Genetic algorithm in which mutations are done by changing the **structure** of the network.


## Back to WANN 

Can generalize the network to work with a range of weight values? 

Instead of changing connection weights, they 

- add connections, 
- add weight,
- change activation functions. 


> Networks in which the structure enables the task to be completed, not the weights, can be developed.


### Finding WANNs

Start with a small amount of network architectures then use NEAT on them. With this system of growth and training, easier and more efficient to optimize models across a wide range of input values. 

Also optimizes for less complexity in the network. 

Is general, but not as good at the individual scenarios as normal networks. 

**Proposed: WANN as starting point, then run normal training on the network**

Also allows for much easier training as the structure generally has a lot less nodes as it is specialized for a certain task. 

Analogous to how animals learn.

Can also copy WANN network, and individually train, then use them in collections for different input values? 



## So? 

WANNs make models more interpretable, as their solutions or logic is encoded directly into their structure. 

More general, and deals better with varying inputs. 

Also allows us to encode 'intellegence' from the creation of of the network 

Can be used to find 'building blocks,' sort of like automating the finding of revolutionary structures like CNNs.


















