import React from 'react';
import styled from 'styled-components';

export default function PaymentConfirmed() {
  return (
    <Container>
      <ion-icon
        name="checkmark-circle"
        style={{
          color: '#36B853',
          fontSize: '50px',
          width: '50px',
          height: '50px',
        }}
      />
      <MessageContainer>
        <h1>Pagamento Confirmado!</h1>
        <h2>Prossiga para escolha de hospedagem e atividades.</h2>
      </MessageContainer>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 15px;
  display: flex;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
  font-size: 16px;
  line-height: 19px;
  color: #454545;

  h1{
    font-weight: 700;
  }
  h2{
    font-weight: 400;
  }
`;
