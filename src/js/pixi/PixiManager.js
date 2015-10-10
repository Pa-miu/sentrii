import PIXI from 'pixi.js';
import MapNode from './MapNode';
import { NEUTRAL } from '../constants/MapConstants';

let instance = null;
let stage;
let renderer;

const configObject = {
  wards: {
    runes: {
      NEUTRAL: {
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
    },
    offense: {
      RADIANT: {
        color: 0xffae73,
        points: [
          { id: 'O1-r', x: 197, y: 243 },
          { id: 'O2-r', x: 253, y: 249 },
          { id: 'O3-r', x: 301, y: 201 },
          { id: 'O4-r', x: 307, y: 147 },
          { id: 'O5-r', x: 449, y: 246 },
          { id: 'O6-r', x: 488, y: 455 },
          { id: 'O7-r', x: 510, y: 306 },
          { id: 'O8-r', x: 566, y: 542 },
          { id: 'O9-r', x: 583, y: 205 },
          { id: 'O10-r', x: 716, y: 534 },
          { id: 'O11-r', x: 747, y: 477 },
          { id: 'O12-r', x: 792, y: 589 },
          { id: 'O13-r', x: 906, y: 689 }
        ]
      }
    }
  }
};

/*
  The references to the nodes on the map stored within a JSON-like
  object. The format is:
{
  <groupName>: {          // 'wards', 'camps', etc
    <filterName>: {       // 'runes', 'offense', etc
      neutral: [MapNode, MapNode, MapNode, ...],
      radiant: [...etc],
      dire: [...etc]
    }
  }
}
*/
const containerMap = {};

/*
  PixiManager is a bridge between MapContent and all Pixi-related operations and entities
*/
export default class PixiManager {
  constructor(width, height, domTarget, faction, filters) {
    if (!instance) {
      instance = this;
      stage = new PIXI.Container();
      renderer = PIXI.autoDetectRenderer(width, height, { antialias: true, transparent: true });
      domTarget.appendChild(renderer.view);
      this.loadResources(this.initialize.bind(this, faction, filters));
    }
    return instance;
  }

  loadResources(onComplete) {
    PIXI.loader
      .add('images/minimap683.png')
      .load(onComplete);
  }

  initialize(faction, filters) {
    const bgSprite = new PIXI.Sprite(PIXI.loader.resources['images/minimap683.png'].texture);
    stage.addChild(bgSprite);
    stage.scale.set(0.66, 0.66);
    this.readConfig(configObject);
    this.recieveFilters(faction, filters);
    this.update();
  }

  /*
    Starts reading in a configuration group by group.
    Groups are semantically related collections of filters
    like 'wards' or 'camps'
  */
  readConfig(config) {
    for (const groupKey in config) {
      const group = config[groupKey];
      // Create a new object at this group name
      containerMap[groupKey] = {};
      // Read in the group
      this.readFilter(group, groupKey);
    }
  }

  /*
    Starts reading in a group filter by filter
    Filters are a category of nodes on the map identified by their color
  */
  readFilter(group, groupKey) {
    for (const filterKey in group) {
      // Store the filter
      const filter = group[filterKey];
      // Create a new object at this container name
      containerMap[groupKey][filterKey] = {};

      /*
        Some filters should display different nodes depending on the active
        faction so all available factions will be read
      */
      for (const factionKey in filter) {
        // Read in the filter nodes for every faction
        const container = this.readFaction(filter[factionKey]);
        // Store the refs to the container
        containerMap[groupKey][filterKey][factionKey] = container;
        // Add the container to the stage
        stage.addChild(container);
      }
    }
  }

  /*
    Starts reading in a filter faction by faction
    Filters are a category of nodes on the map identified by their color
  */
  readFaction(factionFilter) {
    const color = factionFilter.color;
    const onClick = (event) => {
      console.log(event.target.id + ' ' + event.target.x + ' ' + event.target.y);
    };

    const container = new PIXI.Container();     // Create an empty array for every node
    // Iterate through the filter points
    for (let i = 0; i < factionFilter.points.length; i++) {
      const point = factionFilter.points[i];
      // Create a new node out of the points configuration
      const node = new MapNode(point.id, point.x, point.y, color, onClick);
      container.addChild(node);             // Add the new node to the container
    }
    return container;
  }

  recieveFilters(faction, filters) {
    for (const groupKey in containerMap) {
      for (const filterKey in containerMap[groupKey]) {
        for (const factionKey in containerMap[groupKey][filterKey]) {
          const container = containerMap[groupKey][filterKey][factionKey];
          if (factionKey === NEUTRAL || factionKey === faction) {
            container.visible = filters[groupKey][filterKey];
          }
          else if (factionKey !== faction) {
            container.visible = false;
          }
        }
      }
    }
  }

  update() {
    renderer.render(stage);
  }
}
