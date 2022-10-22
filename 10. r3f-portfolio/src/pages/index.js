import { Canvas } from "@react-three/fiber"
import { Leva } from "leva"
import React, { StrictMode } from "react"
import "reset-css"
import "../css/main.css"
import Experience from "../Experience"

export default function Home() {
  return (
    <>
      <StrictMode>
        <Canvas
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
            far: 2000,
            position: [-3, 1.5, 4],
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
