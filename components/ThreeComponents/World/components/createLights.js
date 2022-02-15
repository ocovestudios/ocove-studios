import { AmbientLight } from "three";
import { SpotLight, DirectionalLight } from "three"

const createSpotLight = () => {
    const light = new SpotLight('white', 10);
    light.castShadow = true;

    return light;
}

const createDirectionalLight = () => {
    const light = new DirectionalLight('white', 2);
    light.position.set(-10,0,5)
    return light
}

const createAmbientLight = () => {
    const light = new AmbientLight('white')
}

export { createSpotLight, createAmbientLight, createDirectionalLight };