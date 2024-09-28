import { Vector2D } from './vector2d';

export class SpaceCoordinate {
  viewportToWorld(clientX: number, clientY: number, context: CanvasRenderingContext2D | DOMMatrix): Vector2D {
    const viewportPoint = new Vector2D(clientX, clientY);
    const matrix = 'getTransform' in context ? context.getTransform() : context;
    const point = matrix.transformPoint(viewportPoint);
    return new Vector2D(point.x, point.y);
  }
}


export const spaceCoordinate = new SpaceCoordinate();
