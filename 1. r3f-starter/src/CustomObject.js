import React, { useEffect, useMemo, useRef } from "react"
import * as THREE from "three"

const CustomObject = () => {
  const geometryRef = useRef()
  const verticesCount = 10 * 3 // ten triangles with 3 vertices
  // const positions = new Float32Array(verticesCount * 3) // 3 values for x,y,z

  // for (let i = 0; i < verticesCount * 3; i++) {
  //   positions[i] = (Math.random() - 0.5) * 3
  // }

  const positions = useMemo(() => {
    const positions = new Float32Array(verticesCount * 3) // 3 values for x,y,z
    for (let i = 0; i < verticesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 3
    }
    return positions
  }, [])

  // As you can see, there is an issue with our triangles although we have lights in the scene. It’s because we didn’t provide any normal to the geometry and the triangles don’t know where they are oriented. Instead of calculating and sending our own normal attribute, we can ask Three.js to do it with computeVertexNormals on BufferGeometry.

  useEffect(() => {
    geometryRef.current.computeVertexNormals()
  }, [])

  return (
    <mesh>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute
          attach="attributes-position"
          count={verticesCount} //how many vertices
          itemSize={3} // how many items from the arr compose one vertex
          array={positions} //actual arr
        />
      </bufferGeometry>
      <meshStandardMaterial color="red" side={THREE.DoubleSide} />
    </mesh>
  )
}

export default CustomObject
