import { SpotLight, DirectionalLight } from "three"

const createSpotLight = () => {
    const light = new SpotLight('white', 20);
    light.castShadow = true;

    return light;
}

const createDirectionalLight = () => {
    const light1 = new DirectionalLight('white', 5);
    const light2 = new DirectionalLight('white', 5);
    return [light1, light2]
}

export { createSpotLight, createDirectionalLight };