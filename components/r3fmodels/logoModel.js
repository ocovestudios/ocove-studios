import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const LogoModel = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/logo.glb");
  useFrame(() => (group.current.rotation.y += 0.005));
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.geometry}
        material={materials["Material.002"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload('3dmodels/logo.glb')

export default LogoModel;