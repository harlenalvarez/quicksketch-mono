import { useEffect } from 'react';
import { initSceneLayers, SceneLayersMap } from '../../internal';
import styles from './scene.module.css';

type SceneProps = {
  offsetTop?: number,
}
export const Scene = ({ offsetTop }: SceneProps) => {
  useEffect(() => {
    const height = window.innerHeight - (offsetTop || 0);
    initSceneLayers(window.innerWidth, height);
  }, [offsetTop]);
  return (
    <>
      {
        Object.values(SceneLayersMap).map(({ layerId }) => (
          <canvas key={layerId} id={layerId} className={styles.sceneChild}>
            HTML Canvas is not supported in this browser, to view this content refer to the list of supported browsers
            <a href='https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API#browser_compatibility'>Browser Compatinility</a>
          </canvas>
        ))
      }
    </>
  )
}