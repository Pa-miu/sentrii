import PIXI from 'pixi.js';
import MapNode from './MapNode';

let instance = null;
let stage, renderer;

export default class PixiManager {
  constructor(width, height, domTarget) {
    if (!instance) {
      instance = this;
      stage = new PIXI.Container();
      renderer = PIXI.autoDetectRenderer(width, height, {antialias: true, transparent: true});
      domTarget.appendChild(renderer.view);
      this.loadResources(this.initialize.bind(this));
    }
    return instance
  }

  loadResources(onComplete) {
    PIXI.loader
      .add("images/minimap683.png")
      .load(onComplete);
  }

  initialize() {
    const bgSprite = new PIXI.Sprite(PIXI.loader.resources['images/minimap683.png'].texture);
    bgSprite.scale.set(0.66, 0.66);
    stage.addChild(bgSprite);

    let wardSpot = new PIXI.Graphics();
    wardSpot.lineStyle(1, 0x000000, 1)
    wardSpot.beginFill(0xff7979);
    wardSpot.drawCircle(0, 0, 4);
    wardSpot.endFill();
    wardSpot.interactive = true;
    wardSpot.buttonMode = true;
    wardSpot.position.x = 449;
    wardSpot.position.y = 440;
    wardSpot.click = (event) => {
      console.log('Clicked');
    };
    stage.addChild(wardSpot);
    this.update();
  }

  update() {
    renderer.render(stage);
  }
}
