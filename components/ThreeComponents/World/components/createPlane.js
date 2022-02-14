import { PlaneBufferGeometry, MeshLambertMaterial, PlaneGeometry, MeshStandardMaterial, SmoothShading, DoubleSide } from "three";
import { Mesh } from "three";
import { degToRad } from "three/src/math/MathUtils";
import { TextureLoader } from "three";
import { MeshPhysicalMaterial } from "three";

const createPlane = (scene, camera, renderer) => {
    const geometry = new PlaneGeometry( 5,5,100,100 );
    const material = new MeshPhysicalMaterial({color: 'white', bumpScale: .1, SmoothShading: true});
    const texture = new TextureLoader()
        .load('../textures/bump.png', 
            function() {
                renderer.render(scene, camera); 
            }
        )
    material.bumpMap = texture
    material.side = DoubleSide
    const mesh = new Mesh( geometry, material );
    return mesh;
}

export { createPlane }