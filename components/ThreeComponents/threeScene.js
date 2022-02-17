import { World } from './World/World';

let world; 

class ThreeScene {
  constructor(container) {
    world = new World(container)
  }
  start() {
    world.start()
  }
  stop() {
    world.stop()
  }
}

export { ThreeScene };