import { MeshPhysicalMaterial } from "three";
import { PlaneGeometry, MeshStandardMaterial, DoubleSide, TextureLoader } from "three";
import { Mesh } from "three";

const createPlane = () => {
    const geometry = new PlaneGeometry( 2.5, 3.2, 30, 30 );
    const material = new MeshPhysicalMaterial({color: 'white', bumpScale: .1, roughness: .55, metalness: 0.15});
    const texture = new TextureLoader()
    texture.load('./textures/color2.png', function( tex ) {
        material.map = tex;
        material.needsUpdate = true;
    })
    material.side = DoubleSide
    const mesh = new Mesh( geometry, material );
    mesh.position.x = 0;
    return mesh;
}

export { createPlane }