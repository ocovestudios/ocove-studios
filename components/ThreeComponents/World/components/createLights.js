import { AmbientLight } from "three";
import { SpotLight, DirectionalLight } from "three"

const createSpotLight = () => {
    const light = new SpotLight('white', 10);
    light.castShadow = true;

    return light;
}

const createDirectionalLight = () => {
    const light1 = new DirectionalLight('white', 2);
    return light1
}

const createAmbientLight = () => {
    const light = new AmbientLight('white')
}

export { createSpotLight, createAmbientLight, createDirectionalLight };