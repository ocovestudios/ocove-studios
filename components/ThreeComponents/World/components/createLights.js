import { AmbientLight } from "three";
import { SpotLight, DirectionalLight } from "three"

const createSpotLight = () => {
    const light = new SpotLight('white', 10);
    light.castShadow = true;
    light.position.set(1, 0, 0)

    return light;
}

const createDirectionalLight = () => {
    const light = new DirectionalLight('white', 5);
    return light;
}

const createAmbientLight = () => {
    const light = new AmbientLight('white')
}

export { createSpotLight, createAmbientLight, createDirectionalLight };