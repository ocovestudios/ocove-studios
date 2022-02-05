import { PerspectiveCamera } from "three";

const createCamera = () => {
    const camera = new PerspectiveCamera(
        75, 
        window.innerWidth/window.innerHeight, 
        0.1, 
        1000
    );
    
    camera.position.set(0, 0, 3);

    return camera;
}

export { createCamera };