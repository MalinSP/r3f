import React from "react"
import { Clone, useGLTF } from "@react-three/drei"

const HamburgerModel = () => {
  const model = useGLTF("./hamburger.glb")
  return (
    <>
      <Clone object={model.scene} scale={0.35} position-x={-4} />
      <Clone object={model.scene} scale={0.35} position-x={0} />
      <Clone object={model.scene} scale={0.35} position-x={4} />
    </>
  )
}

useGLTF.preload("./hamburger.glb")

export default HamburgerModel