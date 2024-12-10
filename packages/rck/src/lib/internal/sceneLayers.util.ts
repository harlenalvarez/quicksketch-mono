import { Optional } from '@practicaljs/ts-kit';
import { Layers } from '../store';

type LayerWithId = Optional<Required<Layers[string]>, 'disableSync'>;
export const SceneLayersMap: Record<string, LayerWithId> = {};

export const getPixelRatio = (maintainPixelRatio?: boolean) => maintainPixelRatio ? window.devicePixelRatio : 1;

export function registerSceneLayers(layers: Layers) {
  for (const [name, layer] of Object.entries(layers)) {
    if (name === 'internal' || !name) continue;
    const layerId = `rck-canvas-${name}-layer-element`;
    SceneLayersMap[name] = { ...layer, layerId };
  }
  if (!Object.keys(SceneLayersMap).length || !SceneLayersMap['main']) {
    SceneLayersMap['main'] = { layerId: 'rck-canvas-main-layer-element' };
  }
  SceneLayersMap['internal'] = { layerId: 'rck-canvas-internal-layer-element' };
}

export function getSceneLayerElement(name: string) {
  const layer = SceneLayersMap[name];
  if (!layer?.layerId) return null;
  return document.getElementById(layer.layerId) as HTMLCanvasElement | null;
}

export function initSceneLayers(width: number, height: number, maintainPixelRatio?: boolean) {
  const pixelRatio = getPixelRatio(maintainPixelRatio);
  for (const name of Object.keys(SceneLayersMap)) {
    const layer = getSceneLayerElement(name);
    if (!layer) continue;
    const context = layer.getContext('2d');
    if (!context) continue;
    layer.width = width * pixelRatio;
    layer.style.width = `${width}px`;
    layer.height = height * pixelRatio;
    layer.style.height = `${height}px`;
    // here we set the transform from our transform state, but I might just reuse the default layer
  }
}