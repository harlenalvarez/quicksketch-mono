
export type Point = {
  x: number;
  y: number;
}
/**
 * Methods that do vector to vector calculations like add mutates the current vector.
 * Use the clone method to create a new vector with the same x and y values.
 * @class Vector2D
 */
export class Vector2D implements Point {
  constructor(private _x: number, private _y: number) { }
  #_normalized?: Vector2D;
  #_magnitude?: number;

  get x(): number {
    return this._x;
  }

  set x(value: number) {
    this._x = value;
    this.#_normalized = undefined;
    this.#_magnitude = undefined;
  }

  get y(): number {
    return this._y;
  }

  set y(value: number) {
    this._y = value;
    this.#_normalized = undefined;
    this.#_magnitude = undefined;
  }

  /**
   * Returns a unit vector, which is a vector with the same direction but a magnitude of 1.
   * If the vector has a magnitude of 0, it returns a zero vector.
   * This is usefull for finding the direction of a vector.
   * @returns The unit vector.
   */
  get normalized(): Vector2D {
    if (this.#_normalized) {
      return this.#_normalized;
    }
    const magnitude = this.magnitude();
    if (magnitude === 0) {
      return Vector2D.zero;
    }
    this.#_normalized = this.clone().multiply(1 / magnitude);
    return this.#_normalized;
  }

  static get zero(): Vector2D {
    return new Vector2D(0, 0);
  }

  /**
   * Creates a new Vector2D object with the same x and y values as the current vector.
   * @returns A new Vector2D object.
   */
  clone(): Vector2D {
    const cloned = new Vector2D(this.x, this.y);
    if (this.#_normalized) {
      cloned.#_normalized = this.#_normalized.clone();
    }
    return cloned;
  }

  /**
   * Multiplies the x and y values of the current vector by the given scalar.
   * @param vector - The vector to add.
   * @returns The current vector.
   */
  multiply(scalar: number): Vector2D {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }

  /**
   * Negates the x and y values of the current vector.
   * This is useful for finding the opposite direction of a vector.
   * @returns The current vector.
   */
  negate(): Vector2D {
    return this.multiply(-1);
  }

  /**
   * Adds the x and y values of the given vector to the current vector.
   * @param vector - The vector to add.
   * @returns The current vector.
   */
  add(vector: Point): Vector2D {
    this.x += vector.x;
    this.y += vector.y;
    return this;
  }

  /**
   * Subtracts the given vector from this vector.
   * 
   * @param vector - The vector to subtract.
   * @returns The resulting vector after subtraction.
   */
  subtract(vector: Point): Vector2D {
    this.x -= vector.x;
    this.y -= vector.y;
    return this;
  }

  /**
   * Calculates the magnitude of the vector.
   * If a vector is provided, it calculates the distance between this vector and the provided vector.
   * If no vector is provided, it calculates the magnitude of this vector.
   * @param originVector - The optional vector to calculate the distance from.
   * @returns The magnitude of the vector.
   */
  magnitude(originVector?: Point): number {
    if (originVector) {
      const deltaX = this.x - originVector.x;
      const deltaY = this.y - originVector.y;
      return Math.hypot(deltaX, deltaY);
    }
    if (this.#_magnitude) {
      return this.#_magnitude;
    }
    this.#_magnitude = Math.hypot(this.x, this.y);
    return this.#_magnitude;
  }

  /**
   * Calculates the dot product between this vector and the given vector.
   * The dot product is a scalar value that represents the projection of one vector onto another.
   * It is useful for finding the angle between two vectors.
   * It is also useful for finding the component of one vector in the direction of another vector.
   * for example if the dot product is 0, the vectors are perpendicular.
   * if the dot product is positive, the vectors are in the same direction.
   * if the dot product is negative, the vectors are in opposite directions.
   * @param vector - The vector to calculate the dot product with.
   * @returns The dot product of the two vectors.
   */
  dot(vector: Point): number {
    return this.x * vector.x + this.y * vector.y;
  }

  static round(value: number, decimals: number): number {
    return Number(Math.round(Number(value + 'e' + decimals)) + 'e-' + decimals);
  }
}