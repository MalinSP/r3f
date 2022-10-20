import React from "react"
import { OrbitControls } from "@react-three/drei"
import { Perf } from "r3f-perf"
import Model from "./Model"
import { Suspense } from "react"
import Placeholder from "./Placeholder"
import HamburgerModel from "./HamburgerModel"
import GLBToJSX from "./GLBToJSX"
import Fox from "./Fox"

const Experience = () => {
  // const model = useLoader(GLTFLoader, "./hamburger.glb")

  //DracoLoader
  // const model = useLoader(GLTFLoader, "./hamburger-draco.glb", loader => {
  //   const dracoLoader = new DRACOLoader()
  //   dracoLoader.setDecoderPath("./draco/")
  //   loader.setDRACOLoader(dracoLoader)
  // })

  // const model = useLoader(
  //   GLTFLoader,
  //   "./FlightHelmet/glTF/FlightHelmet.gltf",
  //   loader => {
  //     const dracoLoader = new DRACOLoader()
  //     dracoLoader.setDecoderPath("./draco/")
  //     loader.setDRACOLoader(dracoLoader)
  //   }
  // )

  return (
    <>
      <Perf position="top-left" />
      <OrbitControls makeDefault />

      <directionalLight
        castShadow
        position={[1, 2, 3]}
        intensity={1.5}
        shadow-nornalBias={0.04}
      />
      <ambientLight intensity={0.5} />

      <mesh
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
        receiveShadow
      >
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
      <Suspense fallback={<Placeholder position-y={0.5} scale={[2, 3, 2]} />}>
        {/* <Model /> */}
        {/* <HamburgerModel /> */}
        <GLBToJSX scale={0.35} />
        <Fox />
      </Suspense>
    </>
  )
}

export default Experience
