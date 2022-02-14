import { SphereGeometry, MeshStandardMaterial, Mesh, TextureLoader } from "three";

const createSphere = (renderer, scene, camera) => {
    const size = 0.25 + (Math.random() / 2);
    const geo = new SphereGeometry(size, 32, 64);
    const texture = new TextureLoader()
    .load('../textures/bump.png', 
        function() {
            renderer.render(scene, camera); 
        }
    )
    const mat = new MeshStandardMaterial({color: 'lightblue', bumpMap: texture, bumpScale: .1});
    const sphere = new Mesh(geo, mat)
    sphere.castShadow = true;
    sphere.receiveShadow = true;
    return sphere;
}

export { createSphere }