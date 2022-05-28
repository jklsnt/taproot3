---
defines-react-components: true
react-components-namespace: g
---

```
```jsx:component:MyComponent
return <div>Hewwo {props.name}!</div>
```

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


```
```jsx:component:C
 import moment from 'https://cdn.skypack.dev/moment'; 
 const [date, setDate] = useState(new Date());
 useEffect(() => {
  var timerID = setInterval( () => setDate(new Date()), 100 );
  return function cleanup() {
      clearInterval(timerID);
    };
 });
return (
  <div>
  {moment().valueOf()}
  </div>
); 
```
