/**
 * Map of layers, the 'main' layer is always added as the default layer along with the internal layer
 * providing 'main' or 'internal' will be overwritten by the library
 */
export type Layers = Record<string, {
  /**
   * Disable the sync of the layer with the default layer
   * All affine transformations will have to be done manually
   */
  disableSync?: boolean;
  /**
   * The id of the layer
   * this is set internally and will be overwritten if provided
   */
  layerId?: string;
}>