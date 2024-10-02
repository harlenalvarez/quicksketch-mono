import { spaceCoordinate } from './space-coordinate';
import { Vector2D } from './vector2d';

describe('SpaceCoordinate', () => {

  describe('Viewport to World transformations', () => {
    it('Should convert a viewport coordinate to a world coordinate', () => {
      const event = new Vector2D(1, 1);
      const transform = new DOMMatrix([1, 0, 0, 1, 0, 0]);
      const mockCanvas: Partial<HTMLCanvasElement> = {
        getBoundingClientRect: () => ({ top: 0, left: 0, right: 0, width: 100, height: 100, x: 0, y: 0, bottom: 0, toJSON: vi.fn() }),
      }
      const mockContext: Partial<CanvasRenderingContext2D> = {
        canvas: mockCanvas as HTMLCanvasElement,
        getTransform: () => transform,
      };

      const worldVector = spaceCoordinate.viewportToWorld(event, mockContext as CanvasRenderingContext2D);
      expect(worldVector.x).toBe(1);
      expect(worldVector.y).toBe(1);
    });

    it('Should convert a viewport coordinate to world after translation of canvas transform', () => {
      const viewpointOrigin = new Vector2D(0, 0);
      const transform = new DOMMatrix([1, 0, 0, 1, 10, 10]);

      const mockCanvas: Partial<HTMLCanvasElement> = {
        getBoundingClientRect: () => ({ top: 0, left: 0, right: 0, width: 100, height: 100, x: 0, y: 0, bottom: 0, toJSON: vi.fn() }),
      }
      const mockContext: Partial<CanvasRenderingContext2D> = {
        canvas: mockCanvas as HTMLCanvasElement,
        getTransform: () => transform,
      };

      const worldVector = spaceCoordinate.viewportToWorld(viewpointOrigin, mockContext as CanvasRenderingContext2D);
      expect(worldVector.x).toBe(-10);
      expect(worldVector.y).toBe(-10);
    });

    it('Should convert a viewport coordinate to world after scaling of canvas transform', () => {
      const viewpointOrigin = new Vector2D(0, 0);
      const transform = new DOMMatrix([2, 0, 0, 2, 0, 0]);

      const mockCanvas: Partial<HTMLCanvasElement> = {
        getBoundingClientRect: () => ({ top: 0, left: 0, right: 0, width: 100, height: 100, x: 0, y: 0, bottom: 0, toJSON: vi.fn() }),
      }
      const mockContext: Partial<CanvasRenderingContext2D> = {
        canvas: mockCanvas as HTMLCanvasElement,
        getTransform: () => transform,
      };

      const worldVector = spaceCoordinate.viewportToWorld(viewpointOrigin, mockContext as CanvasRenderingContext2D);
      expect(worldVector.x).toBe(0);
      expect(worldVector.y).toBe(0);
    });

    it('Should convert a viewport coordinate to world after scaling and translation of canvas transform', () => {
      const viewpointOrigin = new Vector2D(0, 0);
      const transform = new DOMMatrix([2, 0, 0, 2, 10, 10]);

      const mockCanvas: Partial<HTMLCanvasElement> = {
        getBoundingClientRect: () => ({ top: 0, left: 0, right: 0, width: 100, height: 100, x: 0, y: 0, bottom: 0, toJSON: vi.fn() }),
      }
      const mockContext: Partial<CanvasRenderingContext2D> = {
        canvas: mockCanvas as HTMLCanvasElement,
        getTransform: () => transform,
      };

      const worldVector = spaceCoordinate.viewportToWorld(viewpointOrigin, mockContext as CanvasRenderingContext2D);
      expect(worldVector.x).toBe(-5);
      expect(worldVector.y).toBe(-5);
    });
  });

  describe('World to Viewport transformations', () => {
    it('Should convert a world coordinate to a viewport coordinate', () => {
      const worldTransform = new DOMMatrix([1, 0, 0, 1, 10, 10]);
      const worldVector = new Vector2D(-10, -10);
      const viewportVector = spaceCoordinate.worldToViewport(worldVector, worldTransform);
      expect(viewportVector.x).toBe(0);
      expect(viewportVector.y).toBe(0);
    });

    it('Should convert a world coordinate to a viewport coordinate after scaling of canvas transform', () => {
      const worldTransform = new DOMMatrix([2, 0, 0, 2, 0, 0]);
      const worldVector = new Vector2D(0, 0);
      const viewportVector = spaceCoordinate.worldToViewport(worldVector, worldTransform);
      expect(viewportVector.x).toBe(0);
      expect(viewportVector.y).toBe(0);
    });

    it('Should convert a world coordinate to a viewport coordinate after scaling and translation of canvas transform', () => {
      const worldTransform = new DOMMatrix([2, 0, 0, 2, 10, 10]);
      const worldVector = new Vector2D(-5, -5);
      const viewportVector = spaceCoordinate.worldToViewport(worldVector, worldTransform);
      expect(viewportVector.x).toBe(0);
      expect(viewportVector.y).toBe(0);
    });
  });
});