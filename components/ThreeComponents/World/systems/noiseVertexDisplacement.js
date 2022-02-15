import { Vector3 } from "three";
import { Perlin } from "../textures/three-noise.module"

const perlin = new Perlin(Math.random())

function updateVertices(geo, location, t) {
    let vertices = geo.geometry.attributes.position.array;
    geo.geometry.attributes.position.needsUpdate = true;
    geo.geometry.computeVertexNormals();
    for (let i = 0; i <= vertices.length; i+=3) {
        const vector = new Vector3(vertices[i] + location, vertices[i+1], t);
        vertices[i+2] = perlin.get3(vector) / 2;
    }
}

export { updateVertices }