import { World } from './World/World';

function threeScene(container) {
  const world = new World(container);
  world.start();
}

export { threeScene };