import React, { useRef } from "react"
import { meshBounds, OrbitControls, useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

const Experience = () => {
  const cube = useRef()

  useFrame((state, delta) => {
    cube.current.rotation.y += delta * 0.2
  })

  const handleClick = event => {
    cube.current.material.color.set(`hsl(${Math.random() * 360}, 100%, 75%)`)
    // console.log("---")
    // console.log("distance", event.distance) // Distance between camera and hit point
    // console.log("point", event.point) // Hit point coordinates (in 3D)
    // console.log("uv", event.uv) // UV coordinates on the geometry (in 2D)
    // console.log("object", event.object) // The object that triggered the event
    // console.log("eventObject", event.eventObject) // The object that was listening to the event (useful where there is objects in objects)

    // console.log("---")
    // console.log("x", event.x) // 2D screen coordinates of the pointer
    // console.log("y", event.y) // 2D screen coordinates of the pointer

    // console.log("---")
    // console.log("shiftKey", event.shiftKey) // If the SHIFT key was pressed
    // console.log("ctrlKey", event.ctrlKey) // If the CTRL key was pressed
    // console.log("metaKey", event.metaKey) // If the COMMAND key was pressed
  }

  const modelHamburger = useGLTF("./hamburger.glb")

  return (
    <>
      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <mesh position-x={-2} onClick={e => e.stopPropagation()}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh
        ref={cube}
        raycast={meshBounds}
        position-x={2}
        scale={1.5}
        onClick={handleClick}
        onPointerEnter={() => {
          document.body.style.cursor = "pointer"
        }}
        onPointerLeave={() => {
          document.body.style.cursor = "default"
        }}
      >
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>

      <primitive
        object={modelHamburger.scene}
        scale={0.25}
        position-y={0.5}
        onClick={e => {
          e.stopPropagation()
          console.log(e.object.name) // more than 1 event because of intersection
          console.log(e.eventObject)
        }}
      />
    </>
  )
}

export default Experience

// onContextMenu
// onContextMenu is triggered when the context menu should appear.
// On a desktop, we can show the context menu by inputting a RIGHT CLICK or CTRL + LEFT CLICK.
// On a mobile device, we can display that menu by pressing down for some time.

//=====================
// onDoubleClick
// onDoubleClick is triggered when we double click/tap on the same object.
// The delay between the first and second click/tap is defined by the OS.

//=====================
//onPointerUp
//onPointerUp is triggered when we release the click (left or right) or touch.

//=====================
//onPointerDown
//onPointerDown is triggered when we’ve just clicked or put our finger down.

//=====================
// onPointerOver and onPointerEnter
// onPointerOver and onPointerEnter work exactly the same way.
// The event is triggered when the cursor or finger just went above the object.
// In native JavaScript, the mouseover event is slightly different than the mouseenter because it keeps triggering the event while the cursor enters children of the element being tested.
// (we will talk about elements inside elements in R3F later).

//=====================
// onPointerOut and onPointerLeave
// onPointerOut and onPointerLeave work exactly the same way.
// The event is triggered when the cursor or finger just went out from the object.

//=====================
// onPointerMove
// onPointerMove is triggered with each frame if the cursor has moved since the last frame, while above the object.

//=====================
// onPointerMissed
// onPointerMissed will let you know if the user clicks outside of the object.
// But onPointerMissed is a bit special since we can add it on the <Canvas> and it will be triggered if we click (when the click is released) but none of the listen objects have registered a hit
