import PIXI from 'pixi.js';
import MapNode from './MapNode';

let instance = null;
let stage;
let renderer;

const configObject = {
  runes: {
    color: 0xff7979,
    points: [
      { id: 'R1', x: 294, y: 376 },
      { id: 'R2', x: 379, y: 339 },
      { id: 'R3', x: 380, y: 481 },
      { id: 'R4', x: 403, y: 466 },
      { id: 'R5', x: 448, y: 431 },
      { id: 'R6', x: 625, y: 686 },
      { id: 'R7', x: 660, y: 590 },
      { id: 'R8', x: 679, y: 665 },
      { id: 'R9', x: 718, y: 698 },
      { id: 'R10', x: 750, y: 650 },
      { id: 'R11', x: 772, y: 708 }
    ]
  }
};

const nodeRefs = {};

/*
  PixiManager is a bridge between MapContent and all Pixi-related operations and entities
*/
export default class PixiManager {
  constructor(width, height, domTarget) {
    if (!instance) {
      instance = this;
      stage = new PIXI.Container();
      renderer = PIXI.autoDetectRenderer(width, height, { antialias: true, transparent: true });
      domTarget.appendChild(renderer.view);
      this.loadResources(this.initialize.bind(this));
    }
    return instance;
  }

  loadResources(onComplete) {
    PIXI.loader
      .add('images/minimap683.png')
      .load(onComplete);
  }

  initialize() {
    const bgSprite = new PIXI.Sprite(PIXI.loader.resources['images/minimap683.png'].texture);
    stage.addChild(bgSprite);

    this.read(configObject);

    stage.scale.set(0.66, 0.66);
    requestAnimationFrame(this.update);
  }

  read(config) {
    let color = 0xffffff;
    const onClick = (event) => {
      console.log(event.target.id + ' ' + event.target.x + ' ' + event.target.y);
    };

    for (const key in config) {
      const filter = config[key];   // Store the filter
      color = filter.color;         // Get the filter's color
      const nodes = [];             // Create an empty array for every node
      // Iterate through the filter points
      for (let i = 0; i < filter.points.length; i++) {
        const point = filter.points[i];
        // Create a new node out of the points configuration
        const node = new MapNode(point.id, point.x, point.y, color, onClick);
        nodes.push(node);     // Push it into the array
        stage.addChild(node); // Push it on the stage
      }

      nodeRefs[key] = nodes;  // Store the references to these nodes
    }
  }

  update() {
    renderer.render(stage);
  }
}
