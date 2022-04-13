---
title:   CLI Experiments
context: projects
author:  Huxley Marvit
date: 2022-01-26
---

#disorganized #incomplete

***

# CLI time
https://charm.sh is very cool, and i get to learn go!

## possible projects
skate replacement
- weather thing
	- https://www.iqair.com/dashboard/api
	- 5b78dd52-e51a-47f6-b63f-d580b4e33b83


### weather thing
```sh
curl --location -g --request GET 'http://api.airvisual.com/v2/city?city=San%20Mateo&state=California&country=USA&key=5b78dd52-e51a-47f6-b63f-d580b4e33b83'
curl 'http://api.airvisual.com/v2/city?city=San%20Mateo&state=California&country=USA&key=5b78dd52-e51a-47f6-b63f-d580b4e33b83'
```
yields
```json
{
  "status": "success",
  "data": {
    "city": "San Mateo",
    "state": "California",
    "country": "USA",
    "location": {
      "type": "Point",
      "coordinates": [
        -122.30852,
        37.54914
      ]
    },
    "current": {
      "weather": {
        "ts": "2022-01-27T01:00:00.000Z",
        "tp": 14,
        "pr": 1018,
        "hu": 66,
        "ws": 0.45,
        "wd": 296,
        "ic": "50d"
      },
      "pollution": {
        "ts": "2022-01-27T01:00:00.000Z",
        "aqius": 82, // this is the one we care about!
        "mainus": "p2",
        "aqicn": 38,
        "maincn": "p2"
      }
    }
  }
}
```

```json
{"status":"success",
 	"data":
 		[
			{"city":"Addison"},{"city":"Albany"},{"city":"Amherst"},{"city":"Armonk"},{"city":"Buffalo"}, {"city":"Cairo"},{"city":"Canton"},{"city":"Carthage"},{"city":"Cheektowaga"},{"city":"Cortland West"},{"city":"Dover Plains"},{"city":"Forest Hills"},{"city":"Fredonia"},{"city":"Glen Cove"},{"city":"Hillsdale"},{"city":"Ithaca"},{"city":"Katonah"},{"city":"Keeseville"},{"city":"Middletown"},{"city":"Montauk"},{"city":"Naples"},{"city":"Nassau"},{"city":"New Paltz"},{"city":"New York City"},{"city":"Newburgh"},{"city":"North Tonawanda"},{"city":"Northeast Ithaca"},{"city":"Ossining"},{"city":"Otisville"},{"city":"Peach Lake"},{"city":"Pittsford"},{"city":"Pleasant Valley"},{"city":"Pomona"},{"city":"Port Dickinson"},{"city":"Port Richmond"},{"city":"Poughkeepsie"},{"city":"Riverside"},{"city":"Rochester"},{"city":"Scarsdale"},{"city":"Scotchtown"},{"city":"Shokan"},{"city":"The Bronx"},{"city":"Tonawanda"},{"city":"Utica"},{"city":"Webster"},{"city":"White Plains"},{"city":"Williston"},{"city":"Wilmington"},{"city":"Wynantskill"}
		]
}% 
```


## designing

```sh

$ aqi 

What city do you want to search for?

Filter by Name: Type to filter |
  San Francisco
> San Mateo
  Los Angelos

Press q to quit.

```


```sh
# also can be accessed by $ aqi "San Mateo"

$ aqi 

What city do you want to search for? San Mateo

|   89   |

|||||||||||||||||||||||||||||||||||||		 	| 68% danger

# Press q to quit. ?

```








