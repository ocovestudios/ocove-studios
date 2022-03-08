import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import LogoModel from "../r3fmodels/logoModel";

const LogoIcon = () => {
    return (
        <Canvas>
            <Suspense fallback={null}>
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