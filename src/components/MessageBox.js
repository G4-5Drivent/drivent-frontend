import styled from 'styled-components';
import { Message } from './Dashboard/Hotel';

export default function MessageBox({ message }) {
  return (
    <StyledBox>
      <Message>{message}</Message>
    </StyledBox>
  );
}

const StyledBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
