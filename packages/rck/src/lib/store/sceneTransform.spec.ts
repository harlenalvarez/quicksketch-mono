import { spaceCoordinate, Vector2D } from '@qsketch/core';
import { sceneTransform } from './sceneTransform';

describe('sceneTransform', () => {
  beforeEach(() => {
    sceneTransform.scale = 1;
    sceneTransform.offsetX = 0;
    sceneTransform.offsetY = 0;
  });
  it('should change scale', () => {
    // scene transform should start at 0 with a scale of 1
    // lets "zoom in" by .5 scale

    const ctx = {
      getTransform: () => new DOMMatrix([1, 0, 0, 1, 0, 0]),
      canvas: {
        getBoundingClientRect: () => ({ width: 100, height: 100 })
      }
    } as CanvasRenderingContext2D;

    sceneTransform.changeScale(.5, ctx);
    expect(sceneTransform.scale).toBe(1.5);
    // expect the offset to have changed to keep the point in the center on the screen
    // in our imaginary viewport the center is 50, 50
    const newTransform = new DOMMatrix([sceneTransform.scale, 0, 0, sceneTransform.scale, sceneTransform.offsetX, sceneTransform.offsetY]);
    const centerVector = new Vector2D(50, 50);


    const worldPoint = spaceCoordinate.viewportToWorld(centerVector, newTransform);
    expect(worldPoint.x).toBe(50);
    expect(worldPoint.y).toBe(50);

    expect(Math.round(sceneTransform.offsetX)).toBe(-25);
    expect(Math.round(sceneTransform.offsetY)).toBe(-25);
  });

  it('Should change scale on translated transform', () => {
    const scrolledDownBy10 = new DOMMatrix([1, 0, 0, 1, 0, -10]);
    const ctx = {
      getTransform: () => scrolledDownBy10,
      canvas: {
        getBoundingClientRect: () => ({ width: 100, height: 100 })
      }
    } as CanvasRenderingContext2D;

    sceneTransform.changeScale(.5, ctx);

    expect(sceneTransform.scale).toBe(1.5);

    const newTransform = new DOMMatrix([sceneTransform.scale, 0, 0, sceneTransform.scale, sceneTransform.offsetX, sceneTransform.offsetY]);
    const centerVector = new Vector2D(50, 50);
    const worldPoint = spaceCoordinate.viewportToWorld(centerVector, newTransform);
    expect(Math.round(worldPoint.x)).toBe(50);
    expect(Math.round(worldPoint.y)).toBe(53);

    expect(Math.round(sceneTransform.offsetX)).toBe(-25);
    expect(Math.round(sceneTransform.offsetY)).toBe(-30);
  })
});