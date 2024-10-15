import { createContext, useContext } from 'react';

type RckSettingsType = {
  /**
 * Use the offset to let the container know if you have a static positioned navbar
 */
  offsetTop?: number,
  includeScrollBars?: boolean,
  includeMiniMap?: boolean,
  /**
   * When set to true the canvas will maintain it's aspect ration regardless of screen resolution.
   */
  maintainAspectRatio?: boolean
}

export const RckSettings = createContext({} as RckSettingsType)

export const useRckSettings = () => useContext(RckSettings);