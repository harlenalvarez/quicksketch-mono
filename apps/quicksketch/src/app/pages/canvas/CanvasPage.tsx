import { RckScene } from '@qsketch/rck';
import { CanvasManager } from './components';
export const CanvasPage = () => {
  return (
    <div>
      <RckScene mode='light'>
        <CanvasManager />
      </RckScene>
    </div>
  )
}