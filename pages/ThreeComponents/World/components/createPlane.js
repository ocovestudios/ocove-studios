import { Perlin } from "../textures/createPerlinNoise"
import { PlaneBufferGeometry, MeshLambertMaterial, PlaneGeometry, MeshStandardMaterial, SmoothShading } from "three";
import { Mesh } from "three";
import { degToRad } from "three/src/math/MathUtils";
import { TextureLoader } from "three";

const createPlane = () => {
    const geometry = new PlaneGeometry( 5, 5 );
    const material = new MeshStandardMaterial({color: 'white', bumpScale: .1});
    const mesh = new Mesh( geometry, material );
    return mesh;
}

export { createPlane }