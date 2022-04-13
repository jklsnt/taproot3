---
title:   Quantum Information and Computation
context: quantum
author:  Huxley Marvit
date: 2022-01-23
---

#ret #hw 

***

# High frequency arbitrage

## The Problem
Optimize the payoff for both players in a system with two markets and three unique items. Selling two distinct items on the same market yields a payoff of $m$ for both parties, whereas selling the same item on the same market yields a payoff of $-M$ for both parties, where $0 < m < M$. Selling on distinct markets always yields a payoff of $0$.

Each play can sell on their local market instantly, and on the foreign market after 40ms. Communication between players also takes 40ms, one way.

Every 0.5ms each play receives a randomly chosen item to sell, and decides where to sell it on the same tick.

## The Solution
Players A and B could utilize the following deterministic scheme based on what items they received to determine what market to sell on.

| Item | A     | B     |
| ---- | ----- | ----- |
| $x$  | $m_1$ | $m_2$ |
| $y$  | $m_2$ | $m_1$ |
| $z$  | $m_1$ | $m_2$ | 

In a system with only two items, $x$ and $y$, this strategy yields the theoretical perfect payoff: 

| A Item | B Item | A Market | B Market | Reward |
| ------ | ------ | -------- | -------- | ------ |
| $x$    | $y$    | $m_1$    | $m_1$    | $2m$   |
| $y$    | $x$    | $m_2$    | $m_2$    | $2m$   |
| $x$    | $x$    | $m_1$    | $m_2$    | $0$    | 
| $y$    | $y$    | $m_2$    | $m_1$    | $0$    | 

In scenarios where players receive distinct items, a maximal reward is always received. When players receive the same item, $-M$ is always avoided, yielding again the maximal reward. Moving to three items, while $-M$ is always avoided, $\frac{1}{3}$ of the time an opportunity to receive $2m$ will be missed.


### Generalizing
Using the same strategy scheme, the probability of receiving the maximal payoff is $\frac{m}{n}$ where $m$ is the number of markets and $n$ is the number of items.
$$P(2m) = \frac{m}{n}$$
$$P(-2M) = 0$$
$$P(O) = P(2m^c) = 1- \frac{m}{n}$$
Thus, as the $n-m$ increases, our expected value decreases significantly, eventually rendering the strategy unviable.






























