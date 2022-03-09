import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import LogoModel from "../r3fmodels/logoModel";

const LogoIcon = () => {
    return (
        <Canvas dpr={[2, 2]}>
            <Suspense fallback={null} camera={{ fov: 25, near: 0.1, far: 1000, position: [0, 2, 6.5] }}>
                <pointLight position={[20, 20, 10]} />
                <pointLight position={[10, 10, 5]} />
                <pointLight position={[-20, -20, 10]} />
                <pointLight position={[-20, -20, 30]} />
                <pointLight position={[-20, -20, -30]} />
                <LogoModel />
            </Suspense>
        </Canvas>
    );
}

export default LogoIcon;