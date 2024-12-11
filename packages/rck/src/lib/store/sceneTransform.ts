import { PriorityQueue } from '@qsketch/graph';
import { Vector2D, clamp, spaceCoordinate } from '@qsketch/core';

type SceneTransformSnapshot = {
  scale: number;
  offsetX: number;
  offsetY: number;
}

type ShapeCoordinate = {
  id: string
  value: number
}

const listeners = new Set<() => void>();

class SceneTransform {
  private _scale = 1;
  private _offsetX = 0;
  private _offsetY = 0;
  readonly min = 0.1;
  readonly max = 4;

  private minX = new PriorityQueue<ShapeCoordinate>((a, b) => a.value - b.value, a => a.id);
  private minY = new PriorityQueue<ShapeCoordinate>((a, b) => a.value - b.value, a => a.id);

  private maxX = new PriorityQueue<ShapeCoordinate>((a, b) => b.value - a.value, a => a.id);
  private maxY = new PriorityQueue<ShapeCoordinate>((a, b) => b.value - a.value, a => a.id);

  maintainAspectRatio = false;

  get scale() {
    return this._scale;
  }

  set scale(value: number) {
    this._scale = clamp(value, this.min, this.max);
  }

  get offsetX() {
    return this._offsetX;
  }

  set offsetX(value: number) {
    this._offsetX = value;
  }

  get offsetY() {
    return this._offsetY;
  }

  set offsetY(value: number) {
    this._offsetY = value;
  }

  get pixelRatio() {
    return this.maintainAspectRatio ? devicePixelRatio : 1;
  }

  /**
 * Changes the offset by the desired amount
 * @param deltaX 
 * @param deltaY 
 */
  changeOffset(deltaX: number, deltaY: number) {
    this.offsetX -= deltaX;
    this.offsetY -= deltaY;
    this.notify()
  }

  /**
 * Changes current scaled by the desired amount
 * @param value 
 * @param ctx 
 * @param x 
 * @param y 
 * @returns 
 */
  changeScale(value: number, ctx: CanvasRenderingContext2D, x?: number, y?: number) {
    const prevScale = this.scale;
    this.scale += value;
    const delta = this.scale - prevScale;
    if (!delta) return;
    const { width, height } = ctx.canvas.getBoundingClientRect();
    const domMatrix = ctx.getTransform();
    //this.offset = this.calculateOffset(ctx.getTransform(), this.scale, xPoint, yPoint);
    const viewX = x ?? width / 2;
    const viewY = y ?? height / 2;

    // I might not need this
    // domMatrix.a /= this.pixelRatio;
    // domMatrix.d /= this.pixelRatio;
    const viewVector = new Vector2D(viewX, viewY);
    const prevPoint = spaceCoordinate.viewportToWorld(viewVector, domMatrix);
    domMatrix.a = this.scale;
    domMatrix.d = this.scale;
    const newPoint = spaceCoordinate
      .viewportToWorld(viewVector, domMatrix)
      .subtract(prevPoint)
      .multiply(this.scale);

    this.offsetX += newPoint.x;
    this.offsetY += newPoint.y;

    this.notify()
  }


  private notify() {
    listeners.forEach(l => l())
  }

}


const sceneTransform = new SceneTransform();
export { sceneTransform };
