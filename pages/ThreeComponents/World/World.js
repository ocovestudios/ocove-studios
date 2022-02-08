import { createScene } from "./components/createScene";
import { createRenderer } from './systems/createRenderer';
import { createCamera } from "./components/createCamera";
import { createSpotLight, createDirectionalLight } from './components/createLights';
import { Resizer } from './systems/Resizer'
import { createSpheresArray } from "./components/createSpheresArray";
import { Scroller } from "./systems/Scroller";
import { createPlane } from "./components/createPlane";
import {TextureLoader} from "three"
import { createSphere } from "./components/createSphere"

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
        const sphere = createSphere(renderer, scene, camera);
        const directionalLight = createDirectionalLight();

        const texture = new TextureLoader()
        .load('../textures/bump.png', 
            function() {
                renderer.render(scene, camera); 
                console.log(plane.material)
            }
        )
        
        plane.material.bumpMap = texture;

        const setLightPosition = (obj, multiplier) => {
            obj.position.x = - 5 + window.scrollY / multiplier;
            obj.position.y = window.scrollY / multiplier / 100;
        };

        const setSpherePosition = (obj, multiplier) => {
            obj.rotation.y = window.scrollY / multiplier;
        };

        const scrollFunctions = [
            function() { setSpherePosition(sphere, 1000) }, 
            function() { setLightPosition(spotLight, 50) }
        ]

        const lightScroller = new Scroller(scrollFunctions);
        lightScroller.onScroll = () => {
            for (let i = 0; i < scrollFunctions.length; i++) {
                scrollFunctions[i]()
            }
            this.render();
        }

        scene.add(spotLight, plane, sphere);


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