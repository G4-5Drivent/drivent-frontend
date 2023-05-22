import styled from 'styled-components';
import { Message } from './Dashboard/Hotel';
import { Title } from './Dashboard/Hotel';

export default function MessageBox({ message }) {
  return (
    <StyledBox>
      <Title>Escolha de hotel e quarto</Title>
      <Message>{message}</Message>
    </StyledBox>
  );
}

const StyledBox = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  display: flex;
  flex-direction: column;
`;
