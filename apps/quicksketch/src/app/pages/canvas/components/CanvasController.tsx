import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton, Tooltip } from '@mui/material';
import { StopPropagation } from '../../../components';
import { CanvasControllerContainer } from './CanvasManager.style';
export const CanvasController = () => {
  return (
    <StopPropagation>
      <CanvasControllerContainer>
        <Tooltip title='Zoom out' placement='top' arrow>
          <IconButton>
            <RemoveIcon />
          </IconButton>
        </Tooltip>
      </CanvasControllerContainer>
    </StopPropagation>
  )
}