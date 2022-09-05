---
title:   Kyntic
context: proj
author:  Huxley Marvit
date: 2022-01-08
---

#flo #ref #incomplete

***

# Kyntic? sure!

[the repo](https://github.com/TheEnquirer/kyntic)
[the designs](https://www.figma.com/file/i2i4nugfhshJLqCwftb4wf/kyntic?node-id=0%3A1)

gradient:
https://cssgradient.io
background: rgb(171,197,197);  
background: linear-gradient(90deg, rgba(171,197,197,1) 0%, rgba(199,196,225,1) 50%, rgba(163,115,144,1) 100%);

inspo: https://miro.medium.com/max/2000/1*9XUTmFn8Ok0CeJ2QkI1_ig.png

auth: https://www.youtube.com/watch?v=oXWImFqsQF4&ab_channel=NaderDabit
or, https://www.pullrequest.com/blog/authentication-with-nextjs-and-supabase/

fitting https://subprotocol.com/system/genetic-js.html
gradient? https://codepen.io/grayghostvisuals/pen/gpROOz

## bugs
- reload on day doesnt show / fetch the data

## database planning *alright.*


have a table with

| uuid     | user | date   | data...                        |
| -------- | ---- | ------ | ------------------------------ |
| nanoid() | jeff | Date() | all the data in multiple cells |
| nanoid() | alb | Date() | all the data in multiple cells |
| nanoid() | alb | Date() | all the data in multiple cells |
| nanoid() | jeff | Date() | all the data in multiple cells |
and ect.

have another table, which stores user specific things:

| user | global data |
| ---- | ----------- |

#### global data
| workouts | activities |
| -------- | ---------- |

#### logging data
| date | mood | sleep | exercise (json?) | screen time | activities | notes | tics? tic data? | perceived severity? |
| ---- | ---- | ----- | ---------------- | ----------- | ---------- | ----- | --------------- | ------------------- |

mood: int
sleep: int
screen time: int
perceived severity: int
notes: text
exercise: json
activities: json

[[KBxKynticDesignReviewNotes]]


##  view screen!

https://hypeserver.github.io/react-date-range/
daily radar chart?

## possible additions
something that tells you what you have tracked at the top of the log screen



## still todo
- connecting: 
	- works!
- logs data to a file: works
- push to db: breaks.
	- [x] set up some dummy files so i can debug database rules

- recording while phone is off: doesn't work.
	- onboard storage??


- onboard storage
	- telling sensor to connect || js → swift → sensor
	- request the data               || js → swift → sensor
		- on button press
		- upsert data given log id into db
	- store times for start and stop of logs


***
deliverables: 

- dummy code to let me push files to the db 
	- debug the actual pushing!
	
- get nick the xcode!
	- get nick the laptop w/ new user

	- dependendant:
		- get onboard storage working

- fix the wack css/ionic bug :: done!
- package


## submitting the damn thing
https://appstoreconnect.apple.com/apps/1643229581/appstore/reviewsubmissions/details/b1d2ecd4-cd05-48f5-a271-664e143f8906

Hi App Review team,

Guideline 2.1
This Kyntic app does not participate in health-related human subject research as the data is written for the benefit of user's own records, and not harvested on our end for any type of research. 

Our main features are as follows: 
- Allow the user to input information about their day, such as their sleep, mood, and activities. 
- Allow the user to visualize this data over a time frame. 
- Optionally record movement sensor data from an external MBIENTlab sensor that we will be providing to those who need to download the app.

Guideline 4.3
My apologies! I initially submitted the app under my personal developer account (FILL), but got rejected on the grounds that this type of app needed to be submitted under an organization account. I tried to transfer the app, but app transfers are only allowed if a version of the app has already been approved. After talking to Apple Support, they recommended changing the name of the original submission in my personal account and re-uploading the app here with my Shabang Systems, LLC developer account.

Apologies for the confusion, and thanks so much!
- Huxley

***

Hi App Review team,

Guideline 2.1
This app (Kyntic) is **not** for conducting health-related human subject research! Kyntic serves as a digital analogue to an already existing paper-driven journaling system. Currently, Comprehensive Behavioral Intervention for Tics (CBIT) therapists — therapists who help those with Tourette's syndrome manage their symptoms — rely on a paper journal/notebook that patients are meant to fill out during the day. Many people find it cumbersome to fill out a paper journal every day, and CBIT therapists find it hard to organize and view trends in data that is contained in a paper notebook. After working with CBIT therapists as well as those with Tourrette's, we developed Kyntic, a better system that allows patients to fill out a digital version of the same form.

Additionally, because Kyntic allows the move from the physical to the digital, instead of asking those with Tourrette's to estimate the severity of their symptoms, we can optionally detect tics as they happen.

Our main features are as follows:
- Allow the user to input information about their day, such as their sleep, mood, and activities.
- Allow the user to visualize this data over a time frame.
- Optionally record movement sensor data from an external MBIENTlab sensor that we will be providing to those who need to download the app.

Guideline 4.3
My apologies! I initially submitted the app under my personal developer account (huxley.marvit@icloud.com), but got rejected on the grounds that this type of app needed to be submitted under an organization account. I tried to transfer the app, but app transfers are only allowed if a version of the app has already been approved. After talking to Apple Support, they recommended changing the name of the original submission in my personal account and re-uploading the app here with my Shabang Systems, LLC developer account.

Apologies for the confusion, and thanks so much!
- Huxley



### **Guideline 2.1 - Information Needed**
We’re looking forward to completing the review of your app, but we need more information to continue.

**Next Steps**
Please provide detailed answers to the following questions in your reply to this message in App Store Connect:

- Is this app for conducting health-related human subject research?
- What are the main features of the app?

### **Guideline 4.3 - Design**

This app duplicates the content and functionality of other apps submitted by you or another developer to the App Store, which is considered a form of spam.

Specifically, this app appears to be available in the same territories as another identical app submitted to the App Store. It would be appropriate to restrict the available territories for individual apps to those areas in which you intend to market and sell it and ensure none of the selected territories overlap.

Apps that simply duplicate content or functionality create clutter, diminish the overall experience for the end user, and reduce the ability of developers to market their apps.

The next submission of this app may require a longer review time, and this app will not be eligible for an expedited review until this issue is resolved.

