import { SphereGeometry, MeshStandardMaterial, ShadowMaterial, Mesh } from "three";

const createSphere = () => {
    const size = 0.25 + (Math.random() / 2);
    const geo = new SphereGeometry(size, 32, 64);
    const mat = new MeshStandardMaterial({color: 'lightblue'});
    const sphere = new Mesh(geo, mat);
    sphere.castShadow = true;
    sphere.receiveShadow = true;
    return sphere;
}

const createVectors = () => {
    const numVectors = 8;
    const vectors = [];

    let x = -(numVectors/2);
    let y = -(numVectors/2);
    let z = 0;

    for (let i = 0; i < numVectors; i++) {
        x = x + 1
        y = -3;
        for (let i = 0; i < numVectors; i++) {
            y = y + 1;
            z = Math.random() * 5;
            vectors.push([x, y, z]);
            console.log(x, y)
        }
    }

    return vectors
}

const createSpheresArray = () => {
    const spheres = [];
    const vectors = createVectors();
    
    for (let i = 0; i < vectors.length; i++) {
        const sphere = createSphere();
        sphere.position.set(...vectors[i])
        spheres.push(sphere);
    }
    return spheres;
}

export { createSpheresArray }