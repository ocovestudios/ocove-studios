import { Perlin } from "../textures/createPerlinNoise"
import { PlaneGeometry, MeshStandardMaterial } from "three";
import { Mesh } from "three";

const createPlane = () => {
    const geo = new PlaneGeometry(1000, 1000)
    const mat = new MeshStandardMaterial({color: 'white'})
    const mesh = new Mesh(geo, mat)

    console.log(mesh)

    var perlin = new Perlin();
    var peak = 60;
    var smoothing = 300;
    function refreshVertices() {
        var vertices = mesh.geometry.attributes.position.array;
        for (var i = 0; i <= vertices.length; i += 3) {
            vertices[i+2] = peak * perlin.noise(
                (terrain.position.x + vertices[i])/smoothing, 
                (terrain.position.z + vertices[i+1])/smoothing
            );
        }
        terrain.geometry.attributes.position.needsUpdate = true;
        terrain.geometry.computeVertexNormals();
    }

    return mesh;
}

export { createPlane }