import { Canvas } from "@react-three/fiber"
import React from "react"
import "reset-css"
import "../css/main.css"
import Experience from "../Experience"
import * as THREE from "three"

export default function Home() {
  return (
    <>
      <Canvas
        flat
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          outputEncoding: THREE.sRGBEncoding,
        }} // on by default
        // orthographic
        camera={{
          fov: 45,
          // zoom: 100,
          near: 0.1,
          far: 200,
          position: [3, 2, 6],
        }}
      >
        <Experience />
      </Canvas>
    </>
  )
}
