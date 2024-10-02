import { describe, expect, it } from 'vitest';
import { Vector2D } from './vector2d';

describe('Vector 2D', () => {
  it('Should new up clone', () => {
    const vector = new Vector2D(1, 1);
    expect(vector.x).toBe(1);
    expect(vector.y).toBe(1);
  });

  it('Should clone', () => {
    const vector = new Vector2D(1, 1);
    const clone = vector.clone();
    expect(clone.x).toBe(1);
    expect(clone.y).toBe(1);
  });

  it('Should return zero vector', () => {
    const vector = Vector2D.zero;
    expect(vector.x).toBe(0);
    expect(vector.y).toBe(0);
  });

  it('Should multiply', () => {
    const vector = new Vector2D(1, 1);
    vector.multiply(2);
    expect(vector.x).toBe(2);
    expect(vector.y).toBe(2);
  });

  it('Should negate', () => {
    const vector = new Vector2D(1, 1);
    vector.negate();
    expect(vector.x).toBe(-1);
    expect(vector.y).toBe(-1);
  });

  it('Should add', () => {
    const vector = new Vector2D(1, 1);
    vector.add(new Vector2D(1, 2));
    expect(vector.x).toBe(2);
    expect(vector.y).toBe(3);

    vector.add({ x: 1, y: 2 });
  });

  it('Should subtract', () => {
    const vector = new Vector2D(1, 1);
    vector.subtract(new Vector2D(1, 2));
    expect(vector.x).toBe(0);
    expect(vector.y).toBe(-1);
  });

  it('Should get magnitude', () => {
    const vector = new Vector2D(1, 1);
    const magnitude = vector.magnitude();
    expect(magnitude).toBe(Math.sqrt(2));

    const vector2 = new Vector2D(2, 2);
    const magnitude2 = vector2.magnitude();
    expect(magnitude2).toBe(2.8284271247461903);
  });

  it('Should get magnitude with vector', () => {
    const vector = new Vector2D(1, 1);
    const magnitude = vector.magnitude(new Vector2D(2, 2));
    expect(magnitude).toBe(Math.sqrt(2));
  });

  it('Should get normalized', () => {
    const vector = new Vector2D(12, -5);
    const normalized = vector.normalized;
    expect(normalized.x).toBe(0.9230769230769231);
    expect(normalized.y).toBe(-0.38461538461538464);
  });

  it('Should get normalized zero', () => {
    const vector = new Vector2D(0, 0);
    const normalized = vector.normalized;
    expect(normalized.x).toBe(0);
    expect(normalized.y).toBe(0);
  });

  it('Should get correct unit vector after changing the original vector', () => {
    const vector = new Vector2D(12, -5);
    expect(vector.x).toBe(12);
    expect(vector.y).toBe(-5);
    const normalized = vector.normalized;
    vector.x = 0;
    vector.y = 0;
    const newNormalized = vector.normalized;
    expect(newNormalized.x).toBe(0);
    expect(newNormalized.y).toBe(0);
    expect(normalized.x).not.toBe(newNormalized.x);
    expect(normalized.y).not.toBe(newNormalized.y);
  });

  it('Should round a number', () => {
    const decimalValue = 4.242640687119285;
    const roundedValue = Vector2D.round(decimalValue, 7);
    expect(roundedValue).toBe(4.2426407);
    const roundedValue2 = Vector2D.round(decimalValue, 0);
    expect(roundedValue2).toBe(4);

    const nonDecimalValue = 4;
    const roundedValue3 = Vector2D.round(nonDecimalValue, 7);
    expect(roundedValue3).toBe(4);
  });

  it('Should project vector', () => {
    const unitVectorA = new Vector2D(1, 0);
    const vectorB = new Vector2D(2, 4);
    const projectedPoint = vectorB.dot(unitVectorA); // this should be positive as it is in the same direction as the unit vector
    expect(projectedPoint).toBeGreaterThan(0);
    const vectorBParallel = unitVectorA.clone().multiply(projectedPoint);
    expect(vectorBParallel.x).toBe(2);
    expect(vectorBParallel.y).toBe(0);
    const vectorBPerpendicular = vectorB.clone().subtract(vectorBParallel);
    expect(vectorBPerpendicular.x).toBe(0);
    expect(vectorBPerpendicular.y).toBe(4);
  });

  it('Should project vector from a different axis', () => {
    const vectorA = new Vector2D(2, 2);
    const vectorB = new Vector2D(2, 4);
    const projectedPoint = vectorA.normalized.dot(vectorB) // this should be positive as it is in the same direction as the unit vector
    expect(projectedPoint).toBeGreaterThan(0);
  });
});