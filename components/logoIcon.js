import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('3dmodels/3d-logo-2.glb')
  useFrame(() => (group.current.rotation.y += 0.005));

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Retopo-material'].geometry}
        material={materials['Material.002']}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.5}
      />
    </group>
  )
}

useGLTF.preload('3dmodels/3d-logo-2.glb')