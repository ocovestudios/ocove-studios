import { createScene } from "./components/createScene";
import { createRenderer } from './systems/createRenderer';
import { createCamera } from "./components/createCamera";
import { createCube } from "./components/createCube";
import { createLights } from './components/createLights';
import { Resizer } from './systems/Resizer'
import { createSpheresArray } from "./components/createSphere";

let camera;
let scene;
let renderer;
let resizer;
let loop;

class World {
    constructor(container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        resizer = new Resizer(container, camera, renderer)
        container.append(renderer.domElement);

        const spheres = createSpheresArray()
        const light = createLights();

        scene.add(light, ...spheres);
        resizer.onResize = () => {
            this.render();
        };
    }
    render() {
        renderer.render(scene, camera);
    }
    start() {
        loop.start();
    }
    
}

export { World }