import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import ThreeDModel from "../r3fmodels/ThreeDModel";

const ThreeDIcon = () => {
    return (
        <Canvas >
            <Suspense fallback={null}>
                <pointLight position={[20, 20, 10]} />
                <pointLight position={[-20, -20, 10]} />
                <pointLight position={[-20, -20, 30]} />
                <pointLight position={[-20, -20, -30]} />
                <ThreeDModel />
            </Suspense>
        </Canvas>
    );
}

export default ThreeDIcon;