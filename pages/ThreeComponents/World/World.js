import { createScene } from "./components/createScene";
import { createRenderer } from './systems/createRenderer';
import { createCamera } from "./components/createCamera";
import { createSpotLight, createDirectionalLight } from './components/createLights';
import { Resizer } from './systems/Resizer'
import { createSpheresArray } from "./components/createSphere";
import { Scroller } from "./systems/Scroller";
import { createPlane } from "./components/createPlane";
import {TextureLoader} from "three"

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
        const plane = createPlane()
        const spotLight = createSpotLight();
        const directionalLight = createDirectionalLight();

        const texture = new TextureLoader()
            .load('../textures/bump.png', 
                function() {
                    renderer.render(scene, camera); 
                    console.log(plane.material)
                }
            )

        plane.material.bumpMap = texture;

        const lightScroller = new Scroller(spotLight, 50);
        lightScroller.onScroll = () => {
            this.render();
        }

        scene.add(spotLight, plane);


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