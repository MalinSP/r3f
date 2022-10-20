import React, { useRef } from "react"
import {
  OrbitControls,
  useHelper,
  // BakeShadows,
  // softShadows,
  // AccumulativeShadows,
  // RandomizedLight,
  ContactShadows,
  // Sky,
  Environment,
  Lightformer,
  Stage,
} from "@react-three/drei"
import { Perf } from "r3f-perf"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { useControls } from "leva"

// softShadows({
//   frustum: 3.75,
//   size: 0.005,
//   near: 9.5,
//   samples: 17,
//   rings: 11,
// })

const Experience = () => {
  const { color, opacity, blur } = useControls("contact shadows", {
    color: "#1d8f75",
    opacity: { value: 0.4, min: 0, max: 1 },
    blur: { value: 2.8, min: 0, max: 10 },
  })

  const { sunPosition } = useControls("sky", {
    sunPosition: {
      value: [1, 2, 3],
    },
  }) // simple way, usually create Spherical, create vec3, use setFromSpherical

  const { envMapIntensity, envMapHeight, envMapRadius, envMapScale } =
    useControls("environment map", {
      envMapIntensity: {
        value: 3.5,
        min: 0,
        max: 12,
      },
      envMapHeight: {
        value: 7,
        min: 0,
        max: 20,
      },
      envMapRadius: {
        value: 20,
        min: 10,
        max: 100,
      },
      envMapScale: {
        value: 100,
        min: 10,
        max: 1000,
      },
    })

  const directionalLightRef = useRef()
  useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1)
  const cubeRef = useRef()

  useFrame((state, delta) => {
    // const time = state.clock.elapsedTime
    // cubeRef.current.position.x = 2 * Math.sin(time)
    cubeRef.current.rotation.y += delta * 0.2
  })

  return (
    <>
      {/* <Environment
        // background
        preset="sunset"
        ground={{
          height: envMapHeight,
          radius: envMapRadius,
          scale: envMapScale,
        }}
        // resolution={32}
        // files={"./belfast_sunset_puresky_4k.hdr"}
        // preset="sunset"
        // files={[
        //   "./cubeMap/px.png",
        //   "./cubeMap/nx.png",
        //   "./cubeMap/py.png",
        //   "./cubeMap/ny.png",
        //   "./cubeMap/pz.png",
        //   "./cubeMap/nz.png",
        // ]}
      > */}
      {/* <color args={["#000000"]} attach="background" />
        <Lightformer
          position-z={-5}
          scale={10}
          color="red"
          intensity={10}
          form="ring"
        /> */}
      {/* <mesh position-z={-5} scale={10}>
          <planeGeometry />
          <meshBasicMaterial color={[10, 0, 0]} />
        </mesh> */}
      {/* </Environment> */}

      {/* <BakeShadows /> */}
      {/* <color args={["ivory"]} attach="background" /> */}
      <Perf position="top-left" />
      <OrbitControls makeDefault />
      {/* <AccumulativeShadows
        position={[0, -0.99, 0]}
        scale={10} //default
        color="#316d39"
        opacity={0.8}
        blend={100}
        frames={Infinity}
        // frames={100}
        temporal // fix the freeze before first rendering
      >
        <RandomizedLight
          position={[1, 2, 3]}
          amount={8}
          radius={1}
          ambient={0.5}
          intensity={1}
          bias={0.01}
        />
      </AccumulativeShadows> */}

      {/* <ContactShadows
        position={[0, 0, 0]}
        scale={10}
        resolution={512}
        far={5}
        color={color}
        opacity={opacity}
        blur={blur}
        frames={1} //first render and stop, static
      /> */}

      {/* <directionalLight
        castShadow
        // position={[1, 2, 3]}
        position={sunPosition}
        intensity={1.5}
        ref={directionalLightRef}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-top={5}
        shadow-camera-right={5}
        shadow-camera-bottom={-5}
        shadow-camera-left={-5}
        shadow-camera-near={1}
        shadow-camera-far={10}
      /> */}
      {/* <ambientLight intensity={0.5} /> */}

      {/* <Sky sunPosition={sunPosition} /> */}

      {/* <mesh position-y={1} position-x={-2} castShadow>
        <sphereGeometry />
        <meshStandardMaterial
          color="orange"
          envMapIntensity={envMapIntensity}
        />
      </mesh>

      <mesh
        castShadow
        ref={cubeRef}
        position={[2, 1, 0]}
        scale={1.5}
        rotation-y={Math.PI * 0.23}
      >
        <boxGeometry scale={1.5} />
        <meshStandardMaterial
          color="mediumpurple"
          envMapIntensity={envMapIntensity}
        />
      </mesh> */}

      {/* <mesh
        position-y={0}
        rotation-x={-Math.PI * 0.5}
        scale={10}
        // receiveShadow
      >
        <planeGeometry />
        <meshStandardMaterial
          color="greenyellow"
          envMapIntensity={envMapIntensity}
        />
      </mesh> */}
      <Stage
        contactShadow={{ opacity: 0.2, blur: 3 }}
        environment="sunset"
        preset="portrait" //directionalLight preset
        intensity={2}
      >
        <mesh position-y={1} position-x={-2} castShadow>
          <sphereGeometry />
          <meshStandardMaterial
            color="orange"
            envMapIntensity={envMapIntensity}
          />
        </mesh>

        <mesh
          castShadow
          ref={cubeRef}
          position={[2, 1, 0]}
          scale={1.5}
          rotation-y={Math.PI * 0.23}
        >
          <boxGeometry scale={1.5} />
          <meshStandardMaterial
            color="mediumpurple"
            envMapIntensity={envMapIntensity}
          />
        </mesh>
      </Stage>
    </>
  )
}

export default Experience
