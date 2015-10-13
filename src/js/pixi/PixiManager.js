import PIXI from 'pixi.js';
import { NodeConfig } from './NodeConfig';
import { WardNode, BoxNode, TowerNode, PullNode } from './MapNodes';
import { NEUTRAL, WARD, BOX, TOWER, STACK } from '../constants/MapConstants';

let instance = null;  // Singleton instance reference
let stage = null;     // Root PIXI.Container object
let renderer = null;  // Main renderer
let coords = null;    // Coordinate PIXI.Text reference

const pixiScale = 0.66; // Default zoom of the stage

const handleClick = (event) => {
  console.log(event.target.id + ' ' + event.target.x + ' ' + event.target.y);
};

/*
  The references to the nodes on the map stored within a JSON-like
  object. The format is:
{
  <groupName>: {          // 'wards', 'camps', etc
    <filterName>: {       // 'runes', 'offense', etc
      neutral: [WardNode, WardNode, WardNode, ...],
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
    stage.scale.set(pixiScale, pixiScale);
    stage.interactive = true;
    this.drawBG();
    this.drawCoords();
    this.readConfig(NodeConfig);
    this.recieveFilters(faction, filters);
    this.update();
  }

  drawBG() {
    const bgSprite = new PIXI.Sprite(PIXI.loader.resources['images/minimap683.png'].texture);
    stage.addChild(bgSprite);
  }

  drawCoords() {
    coords = new PIXI.Text('(0, 0)', { font: '20px Arial', fill: 0xffffff });
    const clamp = (min, max, num) => {
      return Math.max(min, Math.min(num, max));
    };

    stage.on('mousemove', (e) => {
      const x = clamp(0, 1000, Math.round(e.data.global.x / pixiScale));
      const y = clamp(0, 1000, Math.round(e.data.global.y / pixiScale));
      coords.text = '(' + x + ', ' + y + ')';
    });
    stage.addChild(coords);
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
    const attributes = factionFilter.attributes;
    const type = factionFilter.type;

    // Create a container for the nodes
    const container = new PIXI.Container();

    // Iterate through the filter points
    for (let i = 0; i < factionFilter.points.length; i++) {
      const point = factionFilter.points[i];
      // Create a new node out of the points configuration
      const node = this.selectConstructor(type, attributes, point);
      // Add the new node to the container
      if (node) {
        container.addChild(node);
      }
    }
    return container;
  }

  selectConstructor(type, attributes, point) {
    let newNode = null;
    switch(type) {
      case WARD:
        newNode = new WardNode(attributes.color,
                               point.id, point.x, point.y, handleClick);
        break;
      case BOX:
        newNode = new BoxNode(attributes.alpha,
                              attributes.color,
                              attributes.outlineColor,
                              point.verts, point.id, point.x, point.y, handleClick);
        break;
      case TOWER:
        newNode = new TowerNode(attributes.towerColor,
                                attributes.detectionColor,
                                attributes.alpha,
                                attributes.range,
                                point.id, point.x, point.y, handleClick);
        break;
      case STACK:
        newNode = new PullNode(attributes.alpha,
                               attributes.color,
                               point.rotation, point.times, point.textx, point.texty, 
                               point.id, point.x, point.y, handleClick);
        break;
    }
    return newNode;
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
    requestAnimationFrame(this.update.bind(this));
  }
}
