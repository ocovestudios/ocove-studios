import { PlaneGeometry, MeshStandardMaterial, DoubleSide, TextureLoader } from "three";
import { Mesh } from "three";

const createPlane = () => {
    const geometry = new PlaneGeometry( 2.5, 3.2, 25, 25 );
    const material = new MeshStandardMaterial({color: 'white', bumpScale: .1, roughness: .5, metalness: 0.1});
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