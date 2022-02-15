import { Mesh, BoxGeometry, MeshStandardMaterial } from "three";

const createCube = () => {
    const geometry = new BoxGeometry( 1, 1, 1 );
    const material = new MeshStandardMaterial( { color: 'purple' } );
    const cube = new Mesh( geometry, material );
    cube.rotation.set(2, 3, 4)
    
    return cube;
}

export { createCube };