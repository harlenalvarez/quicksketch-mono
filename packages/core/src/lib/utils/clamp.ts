export const clamp = (num: number, min: number, max: number) =>
  Math.max(Math.min(num, Math.max(min, max)), Math.min(min, max));
