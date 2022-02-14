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
import { Loop } from "./systems/Loop";
import {Perlin} from "./textures/three-noise.module"
import { Vector3 } from "three";

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

        const perlin = new Perlin(Math.random())
        const plane = createPlane(scene, camera, renderer)
        const spotLight = createSpotLight();
        const sphere = createSphere(renderer, scene, camera);
        loop = new Loop(camera, scene, renderer)

        loop.updateables.push(plane);

        const setLightPosition = (obj, multiplier) => {
            obj.position.x = - 5 + window.scrollY / multiplier;
            obj.position.y = window.scrollY / multiplier / 100;
        };

        const setSpherePosition = (obj, multiplier) => {
            obj.rotation.y = window.scrollY / multiplier;
        };

        const scrollFunctions = [
            function() { setSpherePosition(sphere, 1000) }, 
            function() { setLightPosition(spotLight, 50) },
        ]

        const lightScroller = new Scroller(scrollFunctions);
        lightScroller.onScroll = () => {
            for (let i = 0; i < scrollFunctions.length; i++) {
                scrollFunctions[i]()
            }
            this.render();
        }

        function updateVertices(geo) {
            let vertices = geo.geometry.attributes.position.array;
            geo.geometry.attributes.position.needsUpdate = true;
            for (let i = 0; i <= vertices.length; i+=3) {
                const vector = new Vector3(vertices[i] * 2 + location, vertices[i+1] * 2, t);
                vertices[i+2] = perlin.get3(vector);
            }
        }

        let t = 0;
        let location = 0;
    
        plane.tick = () => {
            updateVertices(plane)
            t += 0.02;
            location += 0.01;
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