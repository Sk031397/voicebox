

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Classroom: THREE.Mesh
    glass: THREE.Mesh
    Lights: THREE.Mesh
  }
  materials: {
    BakedTextures: THREE.MeshStandardMaterial
    Light: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export default function ClassroomD(props: JSX.IntrinsicElements['group']) {
  const group = useRef(null);
  const { nodes, materials } = useGLTF('/classroom_default.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Classroom.geometry} material={materials.BakedTextures} />
      <mesh geometry={nodes.glass.geometry} material={materials.BakedTextures} />
      <mesh geometry={nodes.Lights.geometry} material={materials.Light} />
    </group>
  )
}

useGLTF.preload('/classroom_default.glb')
