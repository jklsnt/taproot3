---
title: legality in computer security
author: huxley narvit
context: cs240
---

#ret 

---
# Ethics Reflection

**Stories**:
[The Worm](https://groups.csail.mit.edu/mac/classes/6.805/articles/morris-worm.html)
[Silk Road](https://www.wired.com/2015/04/silk-road-1/)
 
 ### The Robert Morris Internet Worm
%% 
 released a self replicating, self propogating worm which exploited the sendmail program
 slowed down a bunch of stuff, spread like wildfire
 he got convicted pretty hard

```ad-question
 why did he release it...?
 ```
 %%

#### Questions

1.  **What are the ethical choices people faced? What, if any, actions would you consider unethical? Why?**
	1.  Of course, Morris releasing the worm in first place was an ethical choice, but so was convicting him. Morris, even if just curious and not intending to hurt, still did hurt and acted irresponsibly. Thus, I would classify his choice as unethical. Those who convicted Morris had to do the same ethical classification I just did, and I have no reason to believe what they did was unethical. 
  
2.  **What, if any, actions in this story do you think should be illegal? What actions are actually illegal? Specify laws that might be relevant, even if no one was caught or prosecuted.**
	1.  Releasing the worm was illegal as it violated the computer Fraud and Abuse Act. Releasing the worm malware should most likely be illegal as it damaged others private property, but defining the group that should be illegal is a much harder task.
	
3. **What things do you think the people involved could have done to achieve their goals while staying within legal and ethical bounds?**
	1.  Morris's goals are quite unclear to me, besides just sheer curiosity about how his worm would fare in the real world. Satisfying this curiosity without releasing the worm into the real world is not an easy task. Morris could have tried to run some type of simulation, or fixed his program to make sure it didn't break machines then install a fail safe, but at the end of the day the question was about the real world and a true test. 

4.  **What would you consider appropriate punishment? If relevant to your story, how does that compare to the punishments that were handed down?**
	1.  The punishment given -- 3 years probation, 400 hours community service, and a fine of $10,050 -- seems a little much to me. Changing those 400 hours to having Morris help prevent future attacks would be more reasonable given that he has proven himself to be capable of sending attacks. 
	
5. **What are the technical lessons that can be learned to improve security?**
	1. Communication networks between devices are scary and need to be checked closely lest more self-replicating worms wreak havoc.


### Silk Road


#### Questions

1. **What are the ethical choices people faced? What, if any, actions would you consider unethical? Why?**
	1.  It's not entirely clear whether or not the Silk Road itself was ethical. It certainly seemed ethical to DPR and his libertarian followers -- they believed that each transaction was a "step toward universal freedom." Almost all the choices surrounding the Silk Road are thus ethical choices, from developing it to selling and buying on it to trying to shut it down. However, the Silk Road did not abide by the accepted social contract, and thus, on average, it would be unethical.
	
2.  **What, if any, actions in this story do you think should be illegal? What actions are actually illegal? Specify laws that might be relevant, even if no one was caught or prosecuted.**
	1.  While I am not educated nearly enough to have informed opinions on the topic, legalizing the drug trade seems like a good idea to me. It allows for safer usage, actual regulation, and isn't conducive to the creation of organized crime networks. While DPR broke many laws with his network, there has also been discussion of the law enforcement agencies conducting unlawful investigations like looking for and seizing evidence without a search warrant. While unlawful searches should, by definition, be illegal, the ethics of it are also not entirely clear to me. There is an argument to be made about not waiting to cut through all the bureaucracy when you believe innocent people are getting hurt and you have the ability to stop it.

3.  **What things do you think the people involved could have done to achieve their goals while staying within legal and ethical bounds?**
	1.  I wonder, could DPR simply have moved somewhere where this trading would be legal? I guess not, because the goal was not to create a drug trade but to "step toward universal freedom," because in DPR's eyes the current system wasn't free. I doubt changing the system by going through the system would have led to the results DPR desired, and I'm sure DPR knew that. Thus, when the infrastructure to radically change the law is not set in place by the law, sidestepping the legal system becomes the inherent solution. As for ethical bounds, I am not qualified to comment, but I will do so anyways! DPR genuinely believes in his cause, and his network could have been a step in the right direction. Or it could have simply been something that ruined a massive quantity of lives. Without knowing, I can't classify DPR's actions from a utilitarian perspective.
	
4.  **What would you consider appropriate punishment? If relevant to your story, how does that compare to the punishments that were handed down?**
	1.  DPR was sentenced to life in prison. From the perspective of a legal system, any sidestep this large does warrant a lifetime in prison regardless of the actual content of the actions. From the perspective of a human, I can't say if it was appropriate for the same reasons as the question above.
	
5.  **What are the technical lessons that can be learned to improve security?**
	1.  Don't trust people on the internet, they could be cops out to get you. Don't reveal your true IP to the world. Set up your information flow such that when people "flip" it doesn't compromise your operation. Be wary of social engineering tactics.




#### Feedback 

Excellent work reflecting on the ethical choices in the Morris worm and Silk Road stories. A few comments for your consideration:

> Those who convicted Morris had to do the same ethical classification

**I like this perspective! Do you think that a justice system should, in general, consider whether actions were ethical in addition to legal? Does ours?**
Ours -- originally -- was meant to, at least according to FIJA (Fully Informed Jury Association). That's why Jury Nullification exists. I think this is part of the whole built in distrust of rulers in the American legal system.
What the justice system should consider is a much harder question. One could argue that the laws should be made in such a way where considering the ethics woudn't change anything substantial, and thus considering ethics in the justice system is fixing the symptoms rather than the problem.

> Morris's goals are quite unclear to me, besides just sheer curiosity about howhis worm would fare in the real world.

**That sounds about right to me.**

> Satisfying this curiosity without releasingthe worm into the real world is not an easy task.

**What about a closed network?**
Yes, you could get close to an answer, but to get a true answer, releasing it into the world would be essentially the only way. 

> Changing those 400 hours to having Morris help prevent future attacks

**I agree; this seems both more reasonable and more useful. This seems like a place where a restorative justice framework offers helpful perspective.**
What about when restoration is not possible? 

> Almost all the choices surrounding the Silk Road are thus ethical choices

**What about the clearly illegal choices made to sustain and protect Silk Road, such as having someone killed?**
Ah, my bad. I meant 'ethical choices' in the sense that the choices operated within the realm of ethics, not 'ethical choices' as in the choice was positive. My point was that many of the choices made around the Silk Road were motivated by ethics, or had ethical considerations, but operated in vastly different ethical frameworks. As for the choices positivity, operating from a ethics-as-emergent-property-of-community perspective, I concluded that the maintainers choices were negative because they didn't follow the social contract.

> Without knowing, I can't classify DPR's actions from a utilitarian perspective.

**I think we can make some pretty good guesses, based on how the government reacted and what actually happened, right? Like, maybe Silk Road could have been the catalyst for a more open and free market, but would the US government (or any government, really) have let that happen without a fight? I’m guessing no, and that many lives would be ruined in the process (see: War on Drugs).**

Not necessarily a catalyst, but a start -- I don't believe the effects of the Silk Road are anywhere near completed. We can't make guesses based on what happened because most things haven't happened yet. I'm sure the Silk Road had a massive impact on crypto, which is looking like it will lead us over the brink of some massive changes. Just look at El Salvador.

And yes, radical change often ruins lives and causes pain, but that does not mean radical change is bad or that we shound't cause it. We just need to hope and do our best to make sure that the good from the change outweighs the bad.


> Don't trust people on the internet, they could be cops out to get you.

**Or worse.**
Uhoh







