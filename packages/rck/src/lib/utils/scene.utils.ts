import { clearScene } from '@qsketch/core';
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

/**
 * Clears a 2d canvas
 * @param ctx - canvas 2d context
 */
export const clearAll = (ctx: CanvasRenderingContext2D) => {
  const transform = ctx.getTransform()
  clearScene(ctx, transform.e, transform.f, transform.a);
}

/**
 * With Layer Context
 * @param consumer 
 * @param defaultValue 
 * @returns 
 */
export const withLayerContext = <ReturnType = void, Args extends any[] = []>(
  consumer: (ctx: CanvasRenderingContext2D, ...args: Args) => ReturnType,
  defaultValue?: ReturnType,
  layerName = 'main',
  layerElement?: HTMLCanvasElement | null,
) =>
  (...args: Args) => {
    const layer = layerElement ?? getSceneLayerElement(layerName);
    if (!layer) return defaultValue;
    const ctx = layer.getContext('2d');
    if (!ctx) return defaultValue;
    return consumer(ctx, ...args);
  }
