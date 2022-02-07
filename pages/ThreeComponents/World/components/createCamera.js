import { PerspectiveCamera, OrthographicCamera } from "three";

const createCamera = () => {
    const camera = new PerspectiveCamera(
        1, 
        window.innerWidth/window.innerHeight, 
        0.1, 
        1000
    );
    
    camera.position.set(0, 0, 100);

    return camera;
}

export { createCamera };