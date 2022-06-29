n
***

 https://tmate.io is frickin sick. live and instant terminal sharing, which works with things like vim and ect!

***

 https://www.youtube.com/watch?v=c6TopwNu7Ok i want this 

***

 a "dilemma" is di-lemma — two conflicting lemmas!

***

 https://www.youtube.com/watch?v=a_uaqvREsFw&ab_channel=Khamurai blender curve thing that i tried to do earlier and failed
 also cool ambient occlusion color trick!

***

 https://casper.com/pillows/foam-pillow/?material=snow cooler pillow, might be interesting

***

 https://www.youtube.com/watch?v=hZuYICAEN9Y i wannaa do thiss
 #SoME2!!

***

 https://devxconf.org is a conf all about dx. also where https://zed.dev presented, which also sounds cool!

***

 https://github.com/casey/just looks handy.

***

 to review: [alberts analog circuit bmi thing](https://docs.google.com/document/d/1d2NWvdbHJqsHG9eh84hhAl_Epmglv-XHA3ptm8njbPE/edit?usp=sharing "https://docs.google.com/document/d/1d2NWvdbHJqsHG9eh84hhAl_Epmglv-XHA3ptm8njbPE/edit?usp=sharing")

***

https://keytap.ggerganov.com *uhoh*

***

 https://www.youtube.com/watch?v=0fDJXmqdN-A is super interesting
 ml genned music video
 navs 3d space but space blends..

***
`
```jsx
// add a colon to activate

<g.C />
```

***

 
```jsx:
import { Canvas, useFrame } from 'https://cdn.skypack.dev/react-three-fiber'

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

<Canvas>
  <ambientLight intensity={0.5} />
  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
  <pointLight position={[-10, -10, -10]} />
  <Box position={[-1.2, 0, 0]} />
  <Box position={[-1.2, 2, 0]} />
  <Box position={[1.2, 0, 0]} />
  <Box position={[4, 0, 0]} />
</Canvas>
```

```jsx:
<div style={{textAlign: "center", fontStyle: "italic"}}>oh no</div>
```

***


 this is better because you dont even need to think about escaping. try, see if can change muscle mem? https://github.com/zhou13/vim-easyescape

***

 might be interesting: obsidian://show-plugin?id=obsidian-latex-suite 
 better than the current plugin?

***
super clean proof that $1 = 0. \overline{999}$:
$$x = 0.\overline{999}$$
$$10x = 9.\overline{999}$$
$$9x = 9$$ 
$$x = 1$$

***

 https://jeremykun.com "math $\cap$ programming"

***

 sneak vim plugin https://www.youtube.com/watch?v=HkY3LoQqKVA

***

 constructor theory? look into this later #review 

***

 fatherly config plans: https://topnotch.app

***

 https://www.youtube.com/watch?v=Qnos8aApa9g vim harpoon demo 

***

 [https://www.townscapergame.com/](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbWU5b05DZzZyX0syeGltbVAzSUZGWkFySTFEZ3xBQ3Jtc0tuX1VZUTFUcHFsaklnd2FFYnlFV1pseDU3Q1hxMm40aWcybXVtMGNkVXhrYWVQaThuY0E2dXJNR2dkVm1rZ3A3NkVTZ2pJWEhVblVDV0ZKcXdFdFZTdHA5b3V4aXExVWFRLXVpeVhtSlpnNDhBYjU5Yw&q=https%3A%2F%2Fwww.townscapergame.com%2F) 
 https://www.youtube.com/watch?v=0bcZb-SsnrA
 wave function collapse maybe with genetic algorythym?? 
 human selection factor
 ray style land construction?

***

 "most of the time, you are stuck." - Sheldon Axler

***

 huh, looks interesting. check this out later https://docs.helix-editor.com/keymap.html

***

 datum, being the singular form of data! 
 this is why you say "these data" instead of "this data"

***

 https://docs.google.com/document/d/1Dos29w-PMHbPD9ZFyTp_8CkZP3e72KeR6VxetFOnRR4/edit category theory mahn doc

***

 dil·et·tante
 
 a person who cultivates an area of interest, such as the arts, without real commitment or knowledge.

"a wealthy literary dilettante"

***

 mahn, [https://github.com/starship/starship](https://github.com/starship/starship "https://github.com/starship/starship")

***

 this is sick https://www.reddit.com/r/unixporn/comments/souv1t/bspwm_i_was_told_you_guys_would_like_my_startup/

***

 "Categorical compositional distributional semantics, also known as DisCoCat for short,"

***

 quantum resources, from [tim!](https://thosgood.com) 
-  https://www.quantinuum.com
-  [qubit.guide](https://qubit.guide)
-  https://topos.site/topos-colloquium/ 
-  ZX-calculus? like, pauli matricies?
-  https://graphicallinearalgebra.net
	-  we can have three dimensional algebra??
	-  search for: diagramatic category theory, string / sheet diagrams
	-  associahedron
-  tropical geometry?

***

 intresting category theory reading from @nickm https://drive.google.com/file/d/1lKQZ6dMxGTHZggNVbQG9JgGGbTo0QwZ6/view
 and also, https://drive.google.com/file/d/1lC7OeM7FTx7cVVv3ILijqwJVtugoEtVE/view #readingsuggestion

***

 #name posit

***

 https://github.com/yoav-lavi/melody this could make writing regex wayy easier, check it out later!
 
***

 gini coefficient is crazy elegant! super #cool way of quantification

***

 toon shaded mandlbulb!!! https://youtu.be/h9NSV3Tj8Q8?t=34 [[KBxBlenderFractals]]
gotta try and replicate.

***

 this font is epic https://dtinth.github.io/comic-mono-font/
 use in tuts!
 #notcursed
 

***

 one of the best units: grams/mile! ~barak
 *(for car emissions)*

***

 helpful to change speed of media easily on multiple different sites
 ```js
document.querySelector('video').playbackRate = 3
```

***

 got published in that journal one time... figure out what it was and update resume stuff
 also, add National ctf time team rank 59

***

to experiment with, when on windows: https://www.nvidia.com/en-us/studio/canvas/

***

 #name ch!li
 like the pepper!
 figma design is [here](https://www.figma.com/file/Z3qcCiUBVYOY8MZwlc6yS1/ch!li?node-id=0%3A1)

***

 planck's constant is denoted as $h$ because it was meant to be a placeholder! so he called it, `holder`!

***

 want to get this working: https://github.com/Lorago/vfetch
 https://github.com/Rosettea/bunnyfetch
 https://github.com/o2sh/onefetch
 https://github.com/kiedtl/gfetch

***

 quantum mechanics,  “I know everything about your car but unfortunately I can’t tell you anything about any of its parts.” 
 
***

 ```rust
dbg!(foo) // the superior way to print debug in rust.
// no more wack dedub traik prinln!-ing!
```

***

 better way to floor in js
 ```js
num | 0 
```
turns out, `parseInt` sucks!
hint: try `parseInt(0.000000000002)`

***

 reallly nice arch config: https://www.reddit.com/r/unixporn/comments/sh2lme/bspwm_levuaska_my_attempt_on_making_a_color_scheme/

***

 good article on [[mathematics/quantum/index]]  from thomas rimer: https://quantum.country/qcvc
 check this out later!

***

 ternary operators are epic. 
 ```python
# python
(falseValue, trueValue)[test]
```
the only thing is, this evaluates both things...
instead, can use
```python
a if x else b
```

***

 "don't become a monk in a monestary" - barry, referring to note taking

***

 github has a quickswitcher! this is a gamechanger, thx @zbuster05.
 
***

 "classes of representation and how they move together" is what algebra is! ~-ted

***

 https://github.com/Exr0nProjects/obsidian-sage yoooo?? @exr0n made a sick plugin! to try out.

***

https://github.com/daaru00/obsidian-commander could be interesting. would love it to show the output below the block,  https://forum.obsidian.md/t/new-plugin-sagecell/13364 style.

***

w/ darkreader, makes lots of ugly pages look nice
```css
html {
  /* max-width: 111vh; */
  max-width: 78rem;
  padding: 3em 1em;
  margin: auto;
  line-height: 1.75;
  font-size: 1rem;
}
```
modified from https://www.swyx.io/css-100-bytes/

***

 python infix operators? this is sick. http://tomerfiliba.com/blog/Infix-Operators/
 essentially, of `add(add(add(5,6),7),8)...` we can write
 ```py
5 |add| 6
```
with a bit of trickery. 

***

 https://www.yourdictionary.com/equivalate is a word! this is amazing.

***

 #name vacuo

***

 "the game I play is a very interesting one: it's imagination in a tight straight-jacket" - feynman

***

 #name ilk

***

 abstract math is "like a metaphor" - ted

***

 https://www.patreon.com/posts/52586182?scrlybrkr=6e7abbc0 #cool blender stuff 
 https://www.youtube.com/watch?v=NmZxWXeIjJI 

***

#stack to finish: https://youtu.be/mTz0GXj8NN0?t=1418

***

 vim in browser, to try https://github.com/glacambre/firenvim
 yo. https://github.com/gelguy/wilder.nvim
 https://github.com/machakann/vim-sandwich
could be interesting: https://github.com/hrsh7th/nvim-cmp
https://github.com/akinsho/bufferline.nvim

***

 #cool chrome extension, https://chrome.google.com/webstore/detail/draft-by-slite/ljkidlijlaapmiilabpldhmhekeionfh?hl=en
 super easy capture

***

>  “Like gods, these mathematical models were opaque, their workings invisible to all but the highest priests in their domain: mathematicians and computer scientists.” (Cathy O’Neil)

***

 #name lohah

***

 super #cool artwork utilizing noise-based volume displacement https://leegriggs.com/volume-mesh
 can't really be done easily in blender.. tried here [[KBxBlenderFractals]]

***

 procedurally generate language from arrival

***

 super #cool things made with curl noise and flow fields! 

***

 #cool lisp interpreter in conways game of life https://github.com/woodrush/lisp-in-life

***

 look into this working /w taproot: obsidian://show-plugin?id=obsidian-icons-plugin

***


 this is crazy #cool, https://www.youtube.com/watch?v=-th6w_ZIvpA&ab_channel=BenThroop
 boids

***

 #name for something: etude. means, a peice of music for the point of demonstration.

***

 #cool word: grok. to understand something intuitively \\ truly

***

 could be a #name for smt: azimuth

***

[very good scoring in this scene. use for later](https://www.youtube.com/watch?v=uvap4gEOC5I&ab_channel=SonyPicturesHomeEntertainment)

***

###### moonshot 
Google X Moonshot. Dream job?

***

 surreal numbering system: completely ordered class of the reals and the infinite and infinitesamal, coined by knuth and proven using conways game of life and combinatorial game theory! #cool

***

 #cool word: beleaguered!

***

 atlas by bicep: sick music video, would love to replicate the effect.

***

 quick proj idea: GAN to generate kanji! dataset, here: https://www.kaggle.com/nmamdbts/yumincho-kanji 

***

 predictability horizon! #cool concept
 
***

 would love to buy some silicon, either [this](https://www.amazon.com/Silicon-Metal-99-999-Pure/dp/B08FVLJM8L) or [this.](https://www.amazon.com/Silicon-Wafer-Single-Sided-Polish/dp/B08RZ5ZYNF/)

***

 config! https://github.com/sainnhe/tmux-fzf

***

[category theory](https://ncatlab.org/nlab/show/category+theory). to #review
[[KBxSystemsofSystemsinNatureandDeepLearning#category theory]]

***

 read this later! supposed to be generalization of godel's incompleteness theorem
 https://ncatlab.org/nlab/show/Lawvere%27s+fixed+point+theorem

***

 proximal: possible #name!
 distal: also a good #name?

***

mechanical pencils!
 want to get: https://www.amazon.com/Al-Star-Graphite-Mechanical-Pencil-L126/dp/B000FA5EHO/ref=sr_1_1?crid=1AGSNPXV81ZUF&dchild=1&keywords=lamy+mechanical+pencil&qid=1633903922&s=office-products&sprefix=lamy+mechan%2Coffice-products%2C232&sr=1-1
 or, https://www.amazon.com/Mechanical-Pencil-Roulette-Silver-M510171P-26/dp/B004OHNTVC/ref=sr_1_3?dchild=1&keywords=kuru%2Btoga&qid=1633903910&s=office-products&sr=1-3&th=1
 maybe https://www.amazon.com/Black-Lacquer-Mechanical-Pencil-Scriveiner/dp/B08BZQDYT7/ref=sr_1_3?dchild=1&keywords=luxury+mechanical+pencils&qid=1633903451&sr=8-3

***

 dismaland: besument park. by banksy. check it out.

***

 Vox Populi: the beliefes of the majority

***

 simplex: simplileft geometric shape in a given dimension? #cool concept

***

eom: good #name for something.
means: end of sentence
but it sounds cool! 

*** 

 defining new term: gardening, as the term for knowledge organization.

***

explanation of power of emergent property: "that even when the underlying rules for a system are extremely simple, the behavior of the system as a whole can be essentially arbitrarily rich and complex." ~wolfram
[computational irreducibility](https://www.wolframscience.com/nks/p737--computational-irreducibility/)

***

hypergraph! edges are sets of points not connections. one model for etomolgysarus
or, bipartite with roots and words
or, store as one and represent subset as another.

bfs and look for number of shared.. roots? plug in for force

***

graph theory! i wanna take it. ~"most likely will exist next year" ~exr0n

***

#cool #name: orhac

***

analog, as something that is analogous

***

```js
<div style="border: 1px solid red, width: 200px, height: 200px, background-color: red"> testing a div?? </div>
```

***

https://jasonwarta.github.io/latex-matrix/ is very useful

***

lemma sort is #cool!

***

convecto, #name for smt
means gather in latin

***

- shopping list:
	- phone case:
		- https://rhinoshield.io/pages/solidsuit?device=iphone-12-pro
	- glasses cleaning cloth
		- https://www.amazon.com/MagicFiber-Microfiber-Cleaning-Cloths-PACK/dp/B0050R67U0
	- card holder
		- https://www.amazon.com/Carbon-Blocking-Minimalist-Aluminum-Version/dp/B07C1N6L2D/ref=sr_1_24?dchild=1&keywords=thin+card+holder&qid=1631938390&sr=8-24
	- desk pad
		- https://www.amazon.com/Glorious-PC-Gaming-Race-G-XXL/dp/B07C84TQ74/ref=sr_1_21?dchild=1&keywords=extra%2Blarge%2Bcloth%2Bdesk%2Bmat&qid=1631940333&sr=8-21&th=1
	- screen protector
		- https://www.amazon.com/Mkeke-Compatible-12-Protector-Pro/dp/B08CV2B3DC


---

#name for someting: taba

---

realized, intrested in the concept of granularity

___

this is another note

---

new note

___
```javascript
CodeMirror.Vim.map('jf', '<Esc>', 'insert')
CodeMirror.Vim.map('j', 'gj', 'normal')
CodeMirror.Vim.map('k', 'gk', 'normal')
```
---
