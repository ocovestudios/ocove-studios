import { Suspense } from "react";
import { Canvas } from "@react-three/fiber"
import WebModel from "../r3fmodels/webModel";

const WebIcon = () => {
    return (
        <Canvas >
            <Suspense fallback={null}>
                <pointLight position={[20, 20, 10]} />
                <pointLight position={[-20, -20, 10]} />
                <WebModel />
            </Suspense>
        </Canvas>
    )
}

export default WebIcon;