import { PlaneBufferGeometry, MeshLambertMaterial, PlaneGeometry, MeshStandardMaterial, SmoothShading, DoubleSide } from "three";
import { Mesh } from "three";
import { degToRad } from "three/src/math/MathUtils";
import { TextureLoader } from "three";
import { MeshPhysicalMaterial } from "three";
import { MeshToonMaterial } from "three";

const createPlane = (scene, camera, renderer) => {
    const geometry = new PlaneGeometry( 5,5,100,100 );
    const material = new MeshStandardMaterial({color: 'white', bumpScale: .1, roughness: .5, metalness: 0});
    const texture = new TextureLoader()
        .load('../textures/color1.png', 
            function() {
            }
        )
    material.side = DoubleSide
    const mesh = new Mesh( geometry, material );
    return mesh;
}

export { createPlane }