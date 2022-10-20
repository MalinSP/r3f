import { useGLTF, useAnimations } from "@react-three/drei"
import { useControls } from "leva"
import React, { useEffect } from "react"

const Fox = () => {
  const foxModel = useGLTF("./Fox/glTF/Fox.gltf")
  const animations = useAnimations(foxModel.animations, foxModel.scene)

  const { animationName } = useControls({
    animationName: {
      options: animations.names,
    },
  })

  useEffect(() => {
    const action = animations.actions[animationName]

    action.reset().fadeIn(0.5).play()

    return () => {
      action.fadeOut(0.5)
    }

    // setTimeout(() => {
    //   animations.actions.Walk.play()
    //   animations.actions.Walk.crossFadeFrom(animations.actions.Run, 1)
    // }, 2000)
  }, [animationName])

  return (
    <>
      <primitive
        object={foxModel.scene}
        scale={0.02}
        position={[-2.5, 0, 2.5]}
        rotation-y={0.3}
      />
    </>
  )
}

export default Fox
