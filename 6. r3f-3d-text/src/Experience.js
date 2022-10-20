import React, { useEffect, useState, useRef } from "react"
import {
  Center,
  OrbitControls,
  Text3D,
  useMatcapTexture,
} from "@react-three/drei"
import { Perf } from "r3f-perf"
import * as THREE from "three"
import { useFrame } from "@react-three/fiber"

const torusGeometry = new THREE.TorusGeometry(1, 0.6, 16, 32)
const material = new THREE.MeshMatcapMaterial()

const Experience = () => {
  const [matcapTexture] = useMatcapTexture("7B5254_E9DCC7_B19986_C8AC91", 256)
  const donutRef = useRef()
  const donut = useRef() //second solution fill this object

  // const [torusGeometry, setTorusGeometry] = useState()
  // const [material, setMaterial] = useState()

  useEffect(() => {
    matcapTexture.encoding = THREE.sRGBEncoding
    matcapTexture.needsUpdate = true

    material.matcap = matcapTexture
    material.needsUpdate = true
  }, [])

  useFrame((state, delta) => {
    donutRef.current.children.forEach(donut => {
      donut.rotation.x += delta * 0.2
    })
  })

  return (
    <>
      <Perf position="top-left" />
      <OrbitControls makeDefault />
      {/* <torusGeometry ref={setTorusGeometry} args={[1, 0.6, 16, 32]} />
      <meshMatcapMaterial ref={setMaterial} matcap={matcapTexture} /> */}
      <Center>
        <Text3D
          font="./fonts/helvetiker_regular.typeface.json"
          size={0.75}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
          material={material}
        >
          Hello r3F
          {/* <meshMatcapMaterial matcap={matcapTexture} /> */}
        </Text3D>
      </Center>

      <group ref={donutRef}>
        {[...Array(100)].map((_, index) => {
          return (
            <mesh
              // ref={(element)=> donuts.current.push[index] = element}
              key={index}
              position={[
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
              ]}
              scale={0.2 + Math.random() * 0.2}
              rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
              geometry={torusGeometry}
              material={material}
            />
          )
        })}
      </group>
    </>
  )
}

export default Experience
