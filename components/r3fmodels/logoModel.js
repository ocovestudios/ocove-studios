import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const LogoModel = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/3dmodels/logoV2.glb");
  useFrame(() => (group.current.rotation.y += 0.005));
  return (
    <group ref={group} {...props} dispose={null} scale={[1.8, 1.8, 1.8]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve001.geometry}
        material={materials["Material.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

export default LogoModel;

useGLTF.preload("/3dmodels/logoV2.glb");