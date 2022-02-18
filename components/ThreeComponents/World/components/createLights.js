import { AmbientLight } from "three";
import { SpotLight, DirectionalLight } from "three"

const createSpotLight = () => {
    const light = new SpotLight('#87CEFA', 20);
    light.castShadow = true;
    light.position.set(10, 0, 0)
    return light;
}

const createDirectionalLight = () => {
    const light = new DirectionalLight('white', 2.5);
    return light;
}

const createAmbientLight = () => {
    const light = new AmbientLight('#A6C1FF')
    return light
}

export { createSpotLight, createAmbientLight, createDirectionalLight };