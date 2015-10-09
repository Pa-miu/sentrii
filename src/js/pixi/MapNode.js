import PIXI from 'pixi.js';

const Graphics = PIXI.Graphics;

export default class MapNode extends Graphics {
  constructor(id, x, y, color, onClick) {
    super();
    this.x = x;
    this.y = y;
    this.draw(color);
    this.interactive = true;
    this.buttonMode = true;
    this.click = onClick;
  }

  draw(color) {
    this.lineStyle(2, 0x000000, 1);
    this.beginFill(color);
    this.drawCircle(0, 0, 8);
    this.endFill();
  }
}
