import styled from 'styled-components';
import { useState } from 'react';

import Title from '../../../components/Dashboard/Payment/Title';
import Instruction from '../../../components/Dashboard/Payment/Instruction';
import TicketBox from '../../../components/Dashboard/Payment/TicketBox';
import ConfirmButton from '../../../components/Dashboard/Payment/ConfirmButton';
import ConfirmPayment from '../../../components/Dashboard/Payment/ConfirmPayment';

export default function Payment() {
  const [selectedTickets, setSelectedTickets] = useState({
    ingresso: '',
    hospedagem: '',
  });

  const handleTicketSelection = (category, ticket) => {
    if (category === 'ingresso' && ticket === 'Online') {
      setSelectedTickets((prevSelectedTickets) => ({
        ...prevSelectedTickets,
        [category]: ticket,
        hospedagem: '', // reset hospedagem to an empty string when Online is selected
      }));
    } else {
      setSelectedTickets((prevSelectedTickets) => ({
        ...prevSelectedTickets,
        [category]: ticket,
      }));
    }
  };

  const ticketPrice = {
    Presencial: 250,
    Online: 100,
  };

  const hotelPrice = {
    'Sem Hotel': 0,
    'Com Hotel': 350,
  };

  const selectedTicketPrice = selectedTickets.ingresso ? ticketPrice[selectedTickets.ingresso] : 0;
  const selectedHotelPrice = selectedTickets.hospedagem ? hotelPrice[selectedTickets.hospedagem] : 0;
  const totalAmount = selectedTicketPrice + selectedHotelPrice;

  const [isPaymentConfirmed, setIsPaymentConfirmed] = useState(false);

  const handleConfirmPayment = () => {
    setIsPaymentConfirmed(true);
  };

  if (isPaymentConfirmed) {
    return (
      <Container>
        <Title>Ingresso e pagamento</Title>
        <ConfirmPayment ticket={selectedTickets.ingresso} hotel={selectedTickets.hospedagem} totalAmount={totalAmount} />
      </Container>
    );
  }
  return (
    <Container>
      <Title>Ingresso e pagamento</Title>
      <Instruction>Primeiro, escolha sua modalidade de ingresso</Instruction>
      <TicketBoxContainer>
        <TicketBox
          selected={selectedTickets.ingresso === 'Presencial'}
          onClick={() => handleTicketSelection('ingresso', 'Presencial')}
        >
          <h1>Presencial</h1>
          <h2>R$ 250</h2>
        </TicketBox>

        <TicketBox
          selected={selectedTickets.ingresso === 'Online'}
          onClick={() => handleTicketSelection('ingresso', 'Online')}
        >
          <h1>Online</h1>
          <h2>R$ 100</h2>
        </TicketBox>
      </TicketBoxContainer>

      {selectedTickets.ingresso === 'Presencial' && (
        <>
          <Instruction>Ótimo! Agora escolha sua modalidade de hospedagem</Instruction>
          <TicketBoxContainer>
            <TicketBox
              selected={selectedTickets.hospedagem === 'Sem Hotel'}
              onClick={() => handleTicketSelection('hospedagem', 'Sem Hotel')}
            >
              <h1>Sem Hotel</h1>
              <h2>+ R$ 0</h2>
            </TicketBox>

            <TicketBox
              selected={selectedTickets.hospedagem === 'Com Hotel'}
              onClick={() => handleTicketSelection('hospedagem', 'Com Hotel')}
            >
              <h1>Com Hotel</h1>
              <h2>+ R$ 350</h2>
            </TicketBox>
          </TicketBoxContainer>
        </>
      )}

      {(selectedTickets.hospedagem || selectedTickets.ingresso === 'Online')  && (
        <>
          <Instruction>
            Fechado! O total ficou em <TotalAmount>{`R$ ${totalAmount}`}</TotalAmount>. Agora é só confirmar:
          </Instruction>
          <ConfirmButton onClick={handleConfirmPayment} label={'RESERVAR INGRESSO'}/>
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
`;

const TicketBoxContainer = styled.div`
  display: flex;
  column-gap: 24px;
`;

const TotalAmount = styled.span`
  font-weight: 700;
`;
