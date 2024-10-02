import { memo, useLayoutEffect, useMemo } from 'react';
import { clsx, getRckStyle, registerSceneLayers } from '../internal';
import type { Layers } from '../store';
import styles from './rck-scene.module.css';
import { Scene } from './scene';

export type RckScene = {
  children: React.ReactNode,
  /**
   * List of named layers that will be rendered on the canvas.
   * layers are rendered in the order they are provided meaning the first layer will be the bottom most layer
   */
  layers?: Layers,
  /**
   * Use the offset to let the container know if you have a static positioned navbar
   */
  offsetTop?: number,
  includeScrollBars?: boolean,
  includeMiniMap?: boolean,
  /**
   * When set to true the canvas will maintain it's aspect ration regardless of screen resolution.
   */
  maintainAspectRatio?: boolean,
  background?: 'dots' | 'grid' | 'plain',
  backgroundColor?: string,
  mode?: 'light' | 'dark'
}

const RckScene = memo(({ children, layers = {}, offsetTop, mode, background = 'dots', backgroundColor = 'transparent' }: RckScene) => {
  registerSceneLayers(layers);
  const fullScreenLayout = getRckStyle(offsetTop);

  useLayoutEffect(() => {
    const doc = document.getElementById('rck-main-container');
    if (doc) {
      const { top } = doc.getBoundingClientRect();
      if (offsetTop && top !== offsetTop) {
        const topDiff = top - offsetTop;
        doc.style.top = `${offsetTop - topDiff}px`;
      }
    }
  }, [layers, offsetTop]);

  const sceneClass = useMemo(() => {
    const backgrounClass = styles[background];
    return clsx(styles.rckScene, backgrounClass, mode === 'dark' && styles.dark);
  }, [background, mode]);

  const sceneStyle = useMemo(() => ({ ...fullScreenLayout, backgroundColor }), [backgroundColor, fullScreenLayout]);

  return (
    <div id='rck-main-container' style={fullScreenLayout} className={styles.rckProviderLayout}>
      <section id='rck-action-section' style={fullScreenLayout} tabIndex={0} className={styles.rckAction}>
        {children}
      </section>
      <section id='rck-popover-section' style={fullScreenLayout} tabIndex={0} className={styles.rckPopover} />
      <section id='rck-scene-section' style={sceneStyle} tabIndex={0} className={sceneClass}>
        <Scene offsetTop={offsetTop} />
      </section>
      <section id='rck-portal-section' className={styles.rckPortal} />
    </div>
  )
}, (prevProps: RckScene, nextProps: RckScene) => {
  // Only check for layer keys
  const layersName = new Set(Object.keys(prevProps.layers ?? {}));
  const prevCount = layersName.size;
  // add new layers and the size should be the same
  for (const key of Object.keys(nextProps.layers ?? {})) {
    layersName.add(key);
  }
  if (layersName.size !== prevCount) return false;

  // check the rest of the props
  if (prevProps.offsetTop !== nextProps.offsetTop) return false;
  if (prevProps.mode !== nextProps.mode) return false;
  if (prevProps.background !== nextProps.background) return false;
  if (prevProps.backgroundColor !== nextProps.backgroundColor) return false;

  return true;
});

RckScene.displayName = 'RckScene';
export { RckScene };
