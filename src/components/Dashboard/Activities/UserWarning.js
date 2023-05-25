import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
`;

const StyledBox = styled.div`
  width: 100%;
  height: calc(100% - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
  font-size: 34px;
  line-height: 40px;
`;

const StyledInstruction = styled.p`
  font-size: 20px;
  line-height: 23px;
  color: #8e8e8e;
  margin-top: 37px;
`;

const Message = styled.h4`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #8e8e8e;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 180px;
`;

export default function UserWarning({ msg }) {
  return (
    <Container>
      <Title>Ingresso e pagamento</Title>
      <StyledBox>
        <Message>{msg}</Message>
      </StyledBox>
    </Container>
  );
}
