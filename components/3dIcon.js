import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/3dmodels/3D_icon.glb')
    useFrame(() => (group.current.rotation.y += 0.005));
    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <group name="Sun" position={[9.43, 5.737, 0]} rotation={[-0.722, 0.108, -0.285]} />
                <mesh
                    name="Icosphere"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere.geometry}
                    material={materials['Material.001']}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/3dmodels/3D_icon.glb')