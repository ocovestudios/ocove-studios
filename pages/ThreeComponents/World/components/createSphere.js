import { SphereGeometry, MeshStandardMaterial, Mesh } from "three";

const createSphere = () => {
    const size = 0.25 + (Math.random() / 2);
    const geo = new SphereGeometry(size, 32, 64);
    const mat = new MeshStandardMaterial({color: 'blue'});
    const sphere = new Mesh(geo, mat);
    return sphere;
}

const createSpheresArray = () => {
    const spheres = [];
    let x = -3;
    let y = -3;
    let z = 0;
    let vectors = [];

    for (let i = 0; i < 6; i++) {
        x = x + 1
        y = -3;
        for (let i = 0; i < 6; i++) {
            y = y + 1;
            z = Math.random() * 5;
            vectors.push([x, y, z]);
            console.log(x, y)
        }
    }
    
    console.log(vectors)
    for (let i = 0; i < vectors.length; i++) {
        const sphere = createSphere();
        sphere.castShadow = true;
        sphere.receiveShadow = true;
        sphere.position.set(...vectors[i])
        spheres.push(sphere);
    }
    return spheres;
}

export { createSpheresArray }