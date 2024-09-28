import { useLayoutEffect, useMemo } from 'react';


import { clsx, getRckStyle } from '../internal';
import styles from './rck-provider.module.css';

export type RckProviderProps = {
  children: React.ReactNode,
  /**
   * layers are rendered in the order they are provided meaning the first layer will be the bottom most layer
   */
  layers: string[],
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

export const RckProvider = ({ children, layers, offsetTop, mode, background = 'dots', backgroundColor = 'transparent' }: RckProviderProps) => {
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
  }, [offsetTop]);

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
        <div>Scene Goes Here</div>
      </section>
      <section id='rck-portal-section' className={styles.rckPortal} />
    </div>
  )
}