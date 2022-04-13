---
title:   Thresholds list
context: comap
author:  Huxley Marvit
date: 2021-11-15
---

#ref #hw 

***

# Thresholds

### prelim
- temp


### series (racks)
- voltage

### parallel
- usable capacity * efficiency
- discharge rate * efficiency


### calculate
- lifetime
- env impact
- cost
- dimensions
- weight
- maintenance
- safety


### objects
```js
"single battery" ::
{
	usable capacity, // satisfy
	discharge rate, // satify
	current type, 
	// instantaneous,
	round trip efficiency,
	cycle count,
	type,
	cost,
	dimensions,
	weight,
	maintenance,
	safety
}


"rack" ::
{
	count,
}

"type" ::
{
	environmental impact,
	temp operability,
}

"output object" ::
{
	battery,
	in rack, 
	racks,
	aggregate environmental impact,
	aggregate cost,
	volume,
	aggregate weight,
	maintenance, 
	safety, 
	lifetime score,
}

```


### calculations
	
lifetime score = cycle count * usable capacity



### inputs for a place!

- location
- num people
- size
- yearly average tempature
- standard dev of yearly average temp
- days of autonomy 
- AHP matrix


$$


\begin{table}[!ht]
    \centering
    \begin{tabular}{|l|l|l|l|l|l|l|l|l|l|l|}
    \hline
        name & in\_rack & racks & total\_count & ag\_env & ag\_cost & volume & ag\_weight & maintenance & safety & lifetime\_score \\ \hline
        Discover AES 7.4 kWh & 1 & 9 & 9 & 1.088888888888889 & 58302 & 32552.415 & 1728 & 1 & 10 & 29600 \\ \hline
    \end{tabular}
\end{table}



$$








- smt
	- smt








