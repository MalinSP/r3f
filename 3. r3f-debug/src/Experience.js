import React from "react"
import { OrbitControls } from "@react-three/drei"
import { useControls, button } from "leva"
import { Perf } from "r3f-perf"

const Experience = () => {
  const { perfVisible } = useControls({
    perfVisible: true,
  })

  const { position, color, visible } = useControls("sphere", {
    position: {
      value: { x: -2, y: 0 },
      step: 0.01,
    },
    color: "#ff0000",
    visible: true,
    myInterval: {
      min: 0,
      max: 10,
      value: [4, 5],
    },
    clickMe: button(() => {}),
    choice: { options: ["a", "b", "c"] },
  })

  const { scale } = useControls("cube", {
    scale: {
      value: 1.5,
      step: 0.01,
      min: 0,
      max: 5,
    },
  })

  return (
    <>
      {perfVisible && <Perf position="top-left" />}
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <mesh position={[position.x, position.y, 0]}>
        <sphereGeometry />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh
        position={[2, 0, 0]}
        scale={scale}
        rotation-y={Math.PI * 0.23}
        visible={visible}
      >
        <boxGeometry scale={1.5} />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  )
}

export default Experience
