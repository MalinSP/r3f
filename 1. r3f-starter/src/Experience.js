import { useFrame, extend, useThree } from "@react-three/fiber"
import React, { useRef } from "react"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import CustomObject from "./CustomObject"

extend({ OrbitControls: OrbitControls })

const Experience = () => {
  const cubeRef = useRef()
  const groupRef = useRef()

  // const state = useThree()
  // console.log(state)

  //const { camera, gl } = useThree()
  // console.log(camera, gl)

  useFrame((state, delta) => {
    // console.log(state)
    // console.log(state.camera)
    // console.log(state.clock.elapsedTime)
    cubeRef.current.rotation.y += delta
    // groupRef.current.rotation.y += delta

    // const angle = state.clock.elapsedTime
    // state.camera.position.x = Math.sin(angle) * 8
    // state.camera.position.z = Math.cos(angle) * 8
    // state.camera.lookAt(0, 0, 0)
  })

  return (
    <>
      {/* <orbitControls args={[camera, gl.domElement]} /> */}
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      <group ref={groupRef}>
        <mesh position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>

        <mesh
          ref={cubeRef}
          scale={1.2}
          position={[2, 0, 0]}
          rotation-y={Math.PI * 0.23}
        >
          <boxGeometry scale={1.5} />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
      </group>
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>

      <CustomObject />
    </>
  )
}

export default Experience
