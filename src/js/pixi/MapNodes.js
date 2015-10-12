import PIXI from 'pixi.js';

const Graphics = PIXI.Graphics;

/*
  Marks a point of interest on the map.

  Extends Pixi.Graphics.

  This class is further extended for each category of points of interest. It
  does not display anything by itself.
*/
class MapNode extends Graphics {
  constructor(id, x, y, onClick) {
    super();
    this.id = id;
    this.x = x;
    this.y = y;
    this.interactive = true;
    this.buttonMode = true;
    this.click = onClick;
  }
}

/*
  Extends MapNode.js to show a ward spot.
*/
export class WardNode extends MapNode {
  constructor(color, ...base) {
    super(...base);
    this.draw(color);
  }

  draw(color) {
    this.lineStyle(2, 0x000000, 1);
    this.beginFill(color);
    this.drawCircle(0, 0, 8);
    this.endFill();
  }
}

/*
  Extends MapNode.js to show a spawn box.
*/
export class BoxNode extends MapNode {
  constructor(alpha, color, outlineColor, verts, ...base) {
    super(...base);
    this.draw(alpha, color, outlineColor, verts);
  }

  draw(alpha, color, outlineColor, verts) {
    this.lineStyle(2, outlineColor, 1);
    this.beginFill(color, alpha);
    this.drawPolygon(verts);
    this.endFill();
  }
}

export class TowerNode extends MapNode {
  constructor(towerColor, detectionColor, alpha, range, ...base) {
    super(...base);
    this.draw(towerColor, detectionColor, alpha, range);
  }

  draw(towerColor, detectionColor, alpha, range) {
    this.lineStyle(2, detectionColor, 1);
    this.beginFill(detectionColor, alpha);
    this.drawCircle(0, 0, range);
    this.endFill;

    this.lineStyle(2, 0x000000, 1);
    this.beginFill(towerColor);
    this.drawRect(-8, -8, 16, 16);
    this.endFill;
  }
}
/*
  Extends MapNode.js to show detection over an area.
*/
export class SentryNode extends MapNode {

}

/*
  Extends MapNode.js to show pull direction.
*/
export class PullNode extends MapNode {

}
