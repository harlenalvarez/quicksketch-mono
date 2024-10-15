import { styled } from '@mui/material';
import { useCallback } from 'react';

const ContentsDiv = styled('div')`
 display: contents;
`

export const StopPropagation = ({ children }: React.PropsWithChildren) => {
  const stopPropagation = useCallback((e: React.SyntheticEvent) => {
    e.stopPropagation();
    e.preventDefault();
  }, []);

  return (
    <ContentsDiv
      onPointerUp={stopPropagation}
      onPointerDown={stopPropagation}
      onPointerMove={stopPropagation}
      onClick={stopPropagation}
      onKeyDown={stopPropagation}
      onKeyUp={stopPropagation}
    // onTouchStart={stopPropagation}
    // onTouchEnd={stopPropagation}
    >
      {children}
    </ContentsDiv>
  )
}