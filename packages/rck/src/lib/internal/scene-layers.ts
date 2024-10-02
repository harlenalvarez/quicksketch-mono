import { Optional } from '@practicaljs/ts-kit';
import { Layers } from '../store';

type LayerWithId = Optional<Required<Layers[string]>, 'disableSync'>;
export const SceneLayersMap: Record<string, LayerWithId> = {
  'main': {
    layerId: 'rck-canvas-main-layer-element'
  },
  'internal': {
    layerId: 'rck-canvas-internal-layer-element'
  }
}

export function registerSceneLayers(layers: Layers) {
  SceneLayersMap['main'] = { layerId: 'rck-canvas-main-layer-element' };
  for (const [name, layer] of Object.entries(layers)) {
    const layerId = `rck-canvas-${name}-layer-element`;
    SceneLayersMap[name] = { ...layer, layerId };
  }
  SceneLayersMap['internal'] = { layerId: 'rck-canvas-internal-layer-element' };
}

export function getSceneLayerElement(name: string) {
  const layer = SceneLayersMap[name];
  if (!layer?.layerId) return null;
  return document.getElementById(layer.layerId) as HTMLCanvasElement | null;
}

export function initSceneLayers(width: number, height: number) {
  for (const name of Object.keys(SceneLayersMap)) {
    const layer = getSceneLayerElement(name);
    if (!layer) continue;
    const context = layer.getContext('2d');
    if (!context) continue;
    layer.width = width * window.devicePixelRatio;
    layer.style.width = `${width}px`;
    layer.height = height * window.devicePixelRatio;
    layer.style.height = `${height}px`;
    // here we set the transform from our transform state, but I might just reuse the default layer
  }
}