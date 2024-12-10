/**
 * Clears a 2d canvas
 * @param ctx - canvas 2d context
 */
export const clearScene = (ctx: CanvasRenderingContext2D, x = 0, y = 0, scale = 1) => {
  if (!ctx?.canvas) return;
  const { width, height } = ctx.canvas.getBoundingClientRect();
  const deviceWidth = width * window.devicePixelRatio
  const deviceHeight = height * window.devicePixelRatio
  ctx.clearRect(0 - (x / scale), 0 - (y / scale), deviceWidth / scale, deviceHeight / scale);
};