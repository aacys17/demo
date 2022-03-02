import styled from 'styled-components';
import Card from '@mui/material/Card';

export const BoardContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 1rem;
  margin-left: 1rem;
`;

export const BoardDesign = styled(Card)`
  border: 2px solid red;
  // justify-content: space-around;
`;
