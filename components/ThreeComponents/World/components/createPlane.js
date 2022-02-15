import { PlaneBufferGeometry, MeshLambertMaterial, PlaneGeometry, MeshStandardMaterial, SmoothShading, DoubleSide } from "three";
import { Mesh } from "three";
import { degToRad } from "three/src/math/MathUtils";
import { TextureLoader } from "three";
import { MeshPhysicalMaterial } from "three";
import { MeshToonMaterial } from "three";

const createPlane = () => {
    const geometry = new PlaneGeometry( 5, 5, 100, 100 );
    const material = new MeshStandardMaterial({color: 'white', bumpScale: .1, roughness: 1, metalness: 0});
    material.side = DoubleSide
    const mesh = new Mesh( geometry, material );
    mesh.position.x = 0;
    return mesh;
}

export { createPlane }