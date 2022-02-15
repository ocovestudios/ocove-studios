import { createScene } from "./components/createScene";
import { createRenderer } from './systems/createRenderer';
import { createCamera } from "./components/createCamera";
import { createSpotLight, createDirectionalLight, createAmbientLight } from './components/createLights';
import { Resizer } from './systems/Resizer'
import { Scroller } from "./systems/Scroller";
import { createPlane } from "./components/createPlane";
import { Loop } from "./systems/Loop";
import { setLightPosition, setYRotation } from "./systems/objectAnimations"
import { updateVertices } from "./systems/noiseVertexDisplacement"

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
        loop = new Loop(camera, scene, renderer)

        const plane = createPlane()
        const spotLight = createSpotLight();
        const directionalLight = createDirectionalLight()

        const scrollFunctions = [
            function() { setYRotation(plane, 1500) }, 
            function() { setLightPosition(spotLight, 700) },
        ]
        const lightScroller = new Scroller(scrollFunctions);

        loop.updateables.push(plane);

        lightScroller.onScroll = () => {
            for (let i = 0; i < scrollFunctions.length; i++) {
                scrollFunctions[i]()
            }
        }

        let t = 0;
        let location = 0;
    
        plane.tick = () => {
            t += 0.005;
            location += 0.005;
            updateVertices(plane, location, t)
        }

        scene.add(plane, spotLight, directionalLight);

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