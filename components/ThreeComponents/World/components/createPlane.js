import { PlaneBufferGeometry, MeshLambertMaterial, PlaneGeometry, MeshStandardMaterial, SmoothShading } from "three";
import { Mesh } from "three";
import { degToRad } from "three/src/math/MathUtils";
import { TextureLoader } from "three";

const createPlane = (scene, camera, renderer) => {
    const geometry = new PlaneGeometry( 5,5,100,100 );
    const material = new MeshStandardMaterial({color: 'white', bumpScale: .1, roughness: 1});
    const texture = new TextureLoader()
        .load('../textures/bump.png', 
            function() {
                renderer.render(scene, camera); 
            }
        )
    material.bumpMap = texture;
    const mesh = new Mesh( geometry, material );
    return mesh;
}

export { createPlane }