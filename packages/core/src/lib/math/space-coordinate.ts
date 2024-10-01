import { Vector2D } from './vector2d';

export class SpaceCoordinate {
  viewportToWorld(viewportPoint: Vector2D, context: CanvasRenderingContext2D | DOMMatrix): Vector2D {
    const matrix = 'getTransform' in context ? context.getTransform() : context;
    const inverse = this.inverseSTOnly(matrix);
    const point = this.transformPoint(viewportPoint, inverse);
    return point;
  }

  worldToViewport(worldPoint: Vector2D, context: CanvasRenderingContext2D | DOMMatrix): Vector2D {
    const matrix = 'getTransform' in context ? context.getTransform() : context;
    const point = this.transformPoint(worldPoint, matrix);
    return point;
  }

  // inverse only scaling and translation since that is the only transformation that can be applied to the canvas
  private inverseSTOnly(m: DOMMatrix): DOMMatrix {
    if (!m.is2D) return m.inverse();
    // column matrix is TR ( T = translation, R = rotation)
    const determinant = m.a * m.d; // - m.b * m.c comment out since b and c are always 0;
    if (determinant === 0) {
      return m.inverse();
    }
    // get the cofactors of the matrix and divide by the determinant
    // some of the cofactors will always be 0 since we only scale and translate
    const c11 = m.d / determinant; // before I was dividing by devicePixelRatio but that might not be needed since my determinant is already scaled by devicePixelRatio
    //const c22 = m.a/ devicePixelRatio / determinant; we don't skew the canvas so this is always the same as c11

    const c31 = (-(m.e * m.d)) / determinant;
    const c32 = -(m.a * m.f) / determinant;
    return new DOMMatrix([c11, 0, 0, c11, c31, c32]);
  }

  private transformPoint(point: Vector2D, m: DOMMatrix): Vector2D {
    const x = m.a * point.x + m.c * point.y + m.e;
    const y = m.b * point.x + m.d * point.y + m.f;
    return new Vector2D(x, y);
  }
}


export const spaceCoordinate = new SpaceCoordinate();
