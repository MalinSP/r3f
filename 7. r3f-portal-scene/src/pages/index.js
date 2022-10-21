import { Canvas } from "@react-three/fiber"
import React, { StrictMode } from "react"
import "reset-css"
import "../css/main.css"
import Experience from "../Experience"

export default function Home() {
  return (
    <>
      <StrictMode>
        <Canvas
          flat
          shadows
          // gl={{
          //   antialias: true, // on by default
          //   toneMapping: THREE.ACESFilmicToneMapping,
          //   outputEncoding: THREE.sRGBEncoding,
          // }}
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
      </StrictMode>
    </>
  )
}
