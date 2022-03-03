import { createScene } from "./components/createScene";
import { createRenderer } from './systems/createRenderer';
import { createCamera } from "./components/createCamera";
import { createSpotLight, createDirectionalLight, createAmbientLight } from './components/createLights';
import { Resizer } from './systems/Resizer'
import { Scroller } from "./systems/Scroller";
import { createPlane } from "./components/createPlane";
import { Loop } from "./systems/Loop";
import { setLightPosition, setYRotation, setContainerOpacity } from "./systems/objectAnimations"
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
        const directionalLight = createDirectionalLight()
        const directionalLight2 = createDirectionalLight()
        const ambientLight = createAmbientLight()
        directionalLight.position.set(2, 0, 0)
        directionalLight2.position.set(-2, 0, 0)
        directionalLight.target = plane;
        directionalLight2.target = plane;


        const scrollFunctions = [
            function () { setYRotation(plane, 2000) },
            function () { setContainerOpacity(container, 0) }
        ]
        const lightScroller = new Scroller(scrollFunctions);

        lightScroller.onScroll = () => {
            for (let i = 0; i < scrollFunctions.length; i++) {
                scrollFunctions[i]()
            }
        }

        loop.updateables.push(plane);

        let t = 0;
        let location = 0;

        plane.tick = (delta) => {
            t += 0.125 * delta;
            location += 0.125 * delta;
            updateVertices(plane, location, t)
        }

        scene.add(plane, directionalLight2, directionalLight, ambientLight);

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

    stop() {
        loop.stop()
    }

}

export { World }