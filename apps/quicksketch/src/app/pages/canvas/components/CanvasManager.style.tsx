import { Paper, styled } from '@mui/material';
export const CanvasManagerContainer = styled('div')`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    'header users'
    'menu .'
    'left controller';
  :focus {
    outline: none;
  }
`;

export const CanvasControllerContainer = styled(Paper)`
  grid-area: controller;
  justify-self: end;
  align-self: end;
  margin-bottom: 8px;
  display: flex;
  flex-flow: row nowrap;
  gap: 4px;
  padding: 4px;
`;