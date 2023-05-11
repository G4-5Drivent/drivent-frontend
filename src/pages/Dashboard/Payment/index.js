import styled from 'styled-components';
import { useState } from 'react';

import Title from '../../../components/Dashboard/Payment/Title';
import Instruction from '../../../components/Dashboard/Payment/Instruction';
import TicketBox from '../../../components/Dashboard/Payment/TicketBox';

export default function Payment() {
  const [selectedTickets, setSelectedTickets] = useState({
    ingresso: '',
    hospedagem: ''
  });

  const handleTicketSelection = (category, ticket) => {
    setSelectedTickets((prevSelectedTickets) => ({
      ...prevSelectedTickets,
      [category]: ticket
    }));
  };

  const ticketPrice = {
    presencial: 250,
    online: 100
  };

  const hotelPrice = {
    'sem-hotel': 0,
    'com-hotel': 350
  };

  const selectedTicketPrice = selectedTickets.ingresso ? ticketPrice[selectedTickets.ingresso] : 0;
  const selectedHotelPrice = selectedTickets.hospedagem ? hotelPrice[selectedTickets.hospedagem] : 0;
  const totalAmount = selectedTicketPrice + selectedHotelPrice;

  return (
    <Container>
      <Title>Ingresso e pagamento</Title>
      <Instruction>Primeiro, escolha sua modalidade de ingresso</Instruction>
      <TicketBoxContainer>
        <TicketBox
          selected={selectedTickets.ingresso === 'presencial'}
          onClick={() => handleTicketSelection('ingresso', 'presencial')}
        >
          <h1>Presencial</h1>
          <h2>R$ 250</h2>
        </TicketBox>

        <TicketBox
          selected={selectedTickets.ingresso === 'online'}
          onClick={() => handleTicketSelection('ingresso', 'online')}
        >
          <h1>Online</h1>
          <h2>R$ 100</h2>
        </TicketBox>
      </TicketBoxContainer>

      {selectedTickets.ingresso && (
        <>
          <Instruction>Ótimo! Agora escolha sua modalidade de hospedagem</Instruction>
          <TicketBoxContainer>
            <TicketBox
              selected={selectedTickets.hospedagem === 'sem-hotel'}
              onClick={() => handleTicketSelection('hospedagem', 'sem-hotel')}
            >
              <h1>Sem Hotel</h1>
              <h2>+ R$ 0</h2>
            </TicketBox>

            <TicketBox
              selected={selectedTickets.hospedagem === 'com-hotel'}
              onClick={() => handleTicketSelection('hospedagem', 'com-hotel')}
            >
              <h1>Com Hotel</h1>
              <h2>+ R$ 350</h2>
            </TicketBox>
          </TicketBoxContainer>
        </>
      )}

      {selectedTickets.hospedagem && (
        <Instruction>
          Fechado! O total ficou em <TotalAmount>{`R$ ${totalAmount}`}</TotalAmount>. Agora é só confirmar:
        </Instruction>
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
