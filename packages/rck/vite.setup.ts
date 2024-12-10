import { afterAll, beforeAll, vi } from 'vitest';

class Custom2DDomMatrix {
  a = 1;
  b = 0;
  c = 0;
  d = 1;
  e = 0;
  f = 0;
  is2D = true;

  constructor(init?: [number, number, number, number, number, number]) {
    if (init) {
      this.a = init[0];
      this.b = init[1];
      this.c = init[2];
      this.d = init[3];
      this.e = init[4];
      this.f = init[5];
    }

  }

  transformPoint = (point: DOMPointInit) => {
    const scaleReciprocalX = 1 / (this.a / 1);
    const scaleReciprocalY = 1 / (this.d / 1);

    const scaleClientX = scaleReciprocalX === 1 ? point.x : point.x! * scaleReciprocalX;
    const scaleClientY = scaleReciprocalY === 1 ? point.y : point.y! * scaleReciprocalY;

    const newX = scaleClientX! - this.e / this.a
    const newY = scaleClientY! - this.f / this.d
    return { x: newX, y: newY };
  }
}

beforeAll(() => {
  vi.stubGlobal('Path2D', vi.fn(() => ({
    rect: vi.fn(),
    roundRect: vi.fn()
  })));

  vi.stubGlobal('DOMMatrix', Custom2DDomMatrix);
  vi.stubGlobal('devicePixelRatio', 1);
});

afterAll(() => {
  vi.unstubAllGlobals();
});