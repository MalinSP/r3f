import { Canvas } from "@react-three/fiber"
import React, { StrictMode } from "react"
import "reset-css"
import "../css/main.css"
import Experience from "../Experience"
import * as THREE from "three"
import { Leva } from "leva"

//Acumulative shadow can be rendered on a plane only

// const created = ({ scene }) => {
//   // console.log(state.gl)
//   // gl.setClearColor("#ff0000", 1)
//   scene.background = new THREE.Color("red")
// }

export default function Home() {
  return (
    <>
      <StrictMode>
        <Canvas
          shadows={false}
          flat
          gl={{
            antialias: true, // on by default
            toneMapping: THREE.ACESFilmicToneMapping,
            outputEncoding: THREE.sRGBEncoding,
          }}
          // orthographic
          camera={{
            fov: 45,
            // zoom: 100,
            near: 0.1,
            far: 200,
            position: [-4, 3, 6],
          }}
          // onCreated={created}
        >
          <Experience />
        </Canvas>
        <Leva />
      </StrictMode>
    </>
  )
}
