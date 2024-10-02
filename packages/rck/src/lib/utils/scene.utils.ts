import { getSceneLayerElement } from '../internal';

/**
 * Gets the CanvasRenderingContext2D for the specified layer
 * if no layer is provided the default layer ('main') is used
 * @param layer string
 * @param inCanvas HTMLCanvasElement | null
 * @returns CanvasRenderingContext2D | null
 */
export const getLayerContext = (layer?: string, inCanvas?: HTMLCanvasElement | null): CanvasRenderingContext2D | null => {
  const canvas = inCanvas ?? getSceneLayerElement(layer ?? 'main');
  if (!canvas) return null;
  return canvas.getContext('2d');
}