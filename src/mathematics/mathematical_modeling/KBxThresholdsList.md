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







