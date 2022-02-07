import { SpotLight, DirectionalLight } from "three"

const createSpotLight = () => {
    const light = new SpotLight('white', 30);
    light.castShadow = true;
    light.position.set(20, 20, 10)

    return light;
}

const createDirectionalLight = () => {
    const light1 = new DirectionalLight('white', 5);
    const light2 = new DirectionalLight('white', 5);
    light1.position.set(10, 0, -5)
    light2.position.set(-10, 0, -5)
    return [light1, light2]
}

export { createSpotLight, createDirectionalLight };