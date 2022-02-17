import { PlaneBufferGeometry, MeshLambertMaterial, MeshBasicMaterial, MeshPhongMaterial, PlaneGeometry, MeshStandardMaterial, DoubleSide } from "three";
import { Mesh } from "three";
import { degToRad } from "three/src/math/MathUtils";
import { TextureLoader } from "three";
import { MeshPhysicalMaterial } from "three";
import { MeshToonMaterial } from "three";

const createPlane = () => {
    const geometry = new PlaneGeometry( 2.5, 3.2, 50, 50 );
    const material = new MeshStandardMaterial({color: 'white', bumpScale: .1, roughness: 1, metalness: 0});
    const material2 = new MeshBasicMaterial({color: 'blue'})
    console.log(geometry)
    material.side = DoubleSide
    const mesh = new Mesh( geometry, material );
    mesh.position.x = 0;
    return mesh;
}

export { createPlane }