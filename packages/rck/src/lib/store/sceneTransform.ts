import { PriorityQueue } from '@practicaljs/priority-queue';
import { Point, clamp } from '@qsketch/core';

type SceneTransformSnapshot = {
  scale: number;
  offset: Point;
}

type ShapeCoordinate = {
  id: string
  value: number
}

class SceneTransform {
  private _scale = 1;
  private _offset: Point = { x: 0, y: 0 };
  readonly min = 0.1;
  readonly max = 4;

  private minX = new PriorityQueue<ShapeCoordinate>((a, b) => a.value - b.value, a => a.id);
  private minY = new PriorityQueue<ShapeCoordinate>((a, b) => a.value - b.value, a => a.id);

  private maxX = new PriorityQueue<ShapeCoordinate>((a, b) => b.value - a.value, a => a.id);
  private maxY = new PriorityQueue<ShapeCoordinate>((a, b) => b.value - a.value, a => a.id);

  get scale() {
    return this._scale;
  }

  set scale(value: number) {
    this._scale = clamp(value, this.min, this.max);
  }

  get offset() {
    return this._offset;
  }

  set offset(value: Point) {
    this._offset = { ...value };
  }
}


const sceneTransform = new SceneTransform();
export { sceneTransform };
