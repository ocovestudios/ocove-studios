import { createScene } from "./components/createScene";
import { createRenderer } from './systems/createRenderer';
import { createCamera } from "./components/createCamera";
import { createSpotLight, createDirectionalLight } from './components/createLights';
import { Resizer } from './systems/Resizer'
import { createSpheresArray } from "./components/createSphere";
import { Scroller } from "./systems/Scroller";

let camera;
let scene;
let renderer;
let resizer;
let loop;
let scroller;

class World {
    constructor(container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        resizer = new Resizer(container, camera, renderer)
        container.append(renderer.domElement);

        const spheres = createSpheresArray()
        const spotLight = createSpotLight();
        const directionalLight = createDirectionalLight();

        spheres.forEach(sphere => scene.add(sphere))

        scroller = new Scroller(spotLight);
        scroller.onScroll = () => {
            this.render();
        }

        scene.add(spotLight, directionalLight[0], directionalLight[1]);

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