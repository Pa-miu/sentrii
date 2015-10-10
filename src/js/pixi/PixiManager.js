import PIXI from 'pixi.js';
import { RADIANT, DIRE, NEUTRAL } from '../constants/MapConstants';
import MapNode from './MapNode';

let instance = null;
let stage;
let renderer;

const configObject = {
  wards: {
    runes: {
      color: 0xff7979,
      faction: NEUTRAL,
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
  }
};

/*
  The references to the nodes on the map stored within a JSON-like
  object. The format is:
{
  <groupName>: {          // 'wards', 'camps', etc
    <filterName>: {       // 'runes', 'offensive', etc
      faction: RADIANT    // RADIANT, NEUTRAL, etc
      nodes: [MapNode, MapNode, MapNode, ...]
    }
  }
}
*/
const containerMap = {};

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
    this.readConfig(configObject);

    stage.scale.set(0.66, 0.66);
    this.update();
  }

  readConfig(config) {
    for (const groupKey in config) {
      const group = config[groupKey];
      // Create a new object at this group name
      containerMap[groupKey] = {};
      // Read in the group
      this.readFilter(group, groupKey);
    }
  }

  readFilter(group, groupKey) {
    let color = 0xffffff;
    const onClick = (event) => {
      console.log(event.target.id + ' ' + event.target.x + ' ' + event.target.y);
    };

    for (const filterKey in group) {
      const filter = group[filterKey];                  // Store the filter
      color = filter.color;                       // Get the filter's color
      const container = new PIXI.Container(); // Create an empty array for every node
      // Iterate through the filter points
      for (let i = 0; i < filter.points.length; i++) {
        const point = filter.points[i];
        // Create a new node out of the points configuration
        const node = new MapNode(point.id, point.x, point.y, color, onClick);
        container.addChild(node);             // Add the new node to the container
      }
      // Create a new object at this container name
      containerMap[groupKey][filterKey] = {};
      // Store the faction these nodes belong to
      containerMap[groupKey][filterKey].faction = filter.faction;
      // Store the reference to these nodes
      containerMap[groupKey][filterKey].nodes = container;
      // Add the container to the stage
      stage.addChild(container);
    }
  }

  recieveFilters(filters, faction) {
    for (const groupKey in containerMap) {
      for (const filterKey in containerMap[groupKey]) {
        const container = containerMap[groupKey][filterKey].nodes;
        container.visible = filters[groupKey][filterKey];
      }
    }
  }

  update() {
    renderer.render(stage);
  }
}
