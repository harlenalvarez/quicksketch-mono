import { spaceCoordinate } from './space-coordinate';

describe('SpaceCoordinate', () => {

  describe('Viewport to World transformations', () => {
    it('Should convert a viewport coordinate to a world coordinate', () => {
      const event = { clientX: 1, clientY: 1 } as MouseEvent;
      const transform = new DOMMatrix([1, 0, 0, 1, 0, 0]);
      const mockCanvas: Partial<HTMLCanvasElement> = {
        getBoundingClientRect: () => ({ top: 0, left: 0, right: 0, width: 100, height: 100, x: 0, y: 0, bottom: 0, toJSON: vi.fn() }),
      }
      const mockContext: Partial<CanvasRenderingContext2D> = {
        canvas: mockCanvas as HTMLCanvasElement,
        getTransform: () => transform,
      };

      const worldVector = spaceCoordinate.viewportToWorld(event.clientX, event.clientY, mockContext as CanvasRenderingContext2D);
      expect(worldVector.x).toBe(1);
      expect(worldVector.y).toBe(1);
    });

    it('Should convert a viewport coordinate to world after translation of canvas transform', () => {
      const viewpointOrigin = { x: 0, y: 0 };
      const transform = new DOMMatrix([1, 0, 0, 1, 10, 10]);

      const mockCanvas: Partial<HTMLCanvasElement> = {
        getBoundingClientRect: () => ({ top: 0, left: 0, right: 0, width: 100, height: 100, x: 0, y: 0, bottom: 0, toJSON: vi.fn() }),
      }
      const mockContext: Partial<CanvasRenderingContext2D> = {
        canvas: mockCanvas as HTMLCanvasElement,
        getTransform: () => transform,
      };

      const worldVector = spaceCoordinate.viewportToWorld(viewpointOrigin.x, viewpointOrigin.y, mockContext as CanvasRenderingContext2D);
      expect(worldVector.x).toBe(-10);
      expect(worldVector.y).toBe(-10);
    })
  });
});