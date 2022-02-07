import { DirectionalLight } from "three"

const createLights = () => {
    const light = new DirectionalLight('white', 4);
    light.castShadow = true;
    light.position.set(5, 5, 4)

    return light;
}

export { createLights };