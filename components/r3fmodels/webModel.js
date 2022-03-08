import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const WebModel = (props) => {
    const group = useRef()
    const { nodes, materials } = useGLTF('/3dmodels/web_icon.glb')

    useFrame(() => (group.current.rotation.y += 0.005));

    return (
        <group ref={group} {...props} dispose={null}>
            <group
                position={[-0.61, 0.00, 0.87]}
                rotation={[1.91, -1.21, -Math.PI / 2]}
                scale={[0.05, 0.05, 0.05]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere.geometry}
                    material={materials['Material.002']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere_1.geometry}
                    material={materials['Material.001']}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/3dmodels/web_icon.glb')

export default WebModel;

