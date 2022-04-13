---
title:   Web Dev Resources
context: resources #todo change this
author:  Huxley Marvit
date: 2021-12-26
---

#ref #incomplete

***

# Web Development!

## cool websites
#todo add a note here, and populate!

## front end resources
- of course, [react](https://reactjs.org/)
	- and a great component [library](https://mui.com/components/modal/#main-content) for it
- [tailwind!!!](https://tailwindcss.com/)
	- remember to follow the installation guide specific to your stack:
		- [normal](https://tailwindcss.com/docs/installation)
		- [cdn](https://tailwindcss.com/docs/installation/play-cdn)
		- [react](https://tailwindcss.com/docs/guides/create-react-app)
		- [next](https://tailwindcss.com/docs/guides/nextjs)
	- the v helpful keybind-driven [docs](https://tailwindcss.com/docs/customizing-colors)
- [nextjs](https://nextjs.org)
- [threejs](https://threejs.org/)
	- and react-three-fiber [[KBxR3F]]
- [keycode.info](https://keycode.info/)
	- for getting keycodes and such efficiently!
- if you need cross-platform, check out 
	- [ionic](https://ionicframework.com/)
	- and [capacitor](https://capacitorjs.com)!
- website for free [graphics](https://undraw.co/search)

## back end
- [supabase](https://supabase.com/)
	- easiest database manager i have ever seen. genuinely, get a db up and running in just a few minutes w/ this
		- free, easy, auth, v little boilerplate, and can be realtime if need be
- also, of course, [firebase](https://firebase.google.com/)
- else, [mongodb](https://www.mongodb.com/) is very nice. checkout the MERN stack
- [redis](https://redis.io/) can really help with improving speed and reducing database hits, as well as making data easier to work w/
	- at the cost of more mem usage...



## new discoveries, tips, and tricks
***
x, wrapped by lines. 
n
***

nextjs is so #cool. w/ `_app.js`, you can easily wrap every component, thus providing super easy global state handling w/ a react component and logic!

***

tailwind can have custom args like `mt-[22px]`! 

***

react's `useReducer` is so cool. [docs](https://reactjs.org/docs/hooks-reference.html#usereducer) 
```js
function reducer(state, action) {
  switch (action.type) { // switch statments with logic, that act on objects passed in!
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}
function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
```

***












