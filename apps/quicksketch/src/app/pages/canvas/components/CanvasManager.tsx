import { CanvasController } from './CanvasController'
import { CanvasManagerContainer } from './CanvasManager.style'

export const CanvasManager = () => {
  return <CanvasManagerContainer>
    <CanvasController />
  </CanvasManagerContainer>
}