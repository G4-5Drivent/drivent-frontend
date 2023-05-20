import { Component, useState } from 'react';
import { Message, StyledButton, Title } from '../../../components/Dashboard/Hotel';
import HotelSection from '../../../components/Dashboard/Hotel/HotelsSection';
import RoomSection from '../../../components/Dashboard/Room/RoomSection';
import useTicketsTypes from '../../../hooks/api/useTicketsTypes';
import styled from 'styled-components';

import useGetTicket from '../../../hooks/api/useGetTicket';

export default function Hotel() {
  const [selection, setSelection] = useState({
    hotel: -1,
    room: -1,
  });

  const { tickets, ticketsLoading, ticketsError, fetchTickets } = useGetTicket();
  
  if (ticketsError) {// new debug line
    return (<MessageBox message="Você ainda não comprou o seu ingresso. Prossiga para a escolha de atividades" />);
  }

  if (ticketsLoading) return <Message message="Carregando" />;

  if (!tickets.TicketType.includesHotel)
    return (
      <MessageBox
        message="Sua modalidade de ingresso não inclui hospedagem
                  Prossiga para a escolha de atividades"
      />
    );

  //const userHasNotPaidTicket = ticketsTypes.every((ticket) => ticket.paid);
  if (tickets.status !== 'PAID')
    return <MessageBox message="Você ainda não pagou o seu ingresso. Prossiga para a escolha de atividades" />;

  return (
    <>
      <Title>Escolha de hotel e quarto</Title>

      <HotelSection selection={selection} setSelection={setSelection} />
      {selection.hotel > 0 && (
        <RoomSection hotelId={selection.hotel} selection={selection} setSelection={setSelection} />
      )}
      {selection.room > 0 && selection.hotel > 0 && <StyledButton>RESERVAR QUARTO</StyledButton>}
    </>
  );
}

function MessageBox({ message }) {
  return (
    <StyledBox>
      <Title>Escolha de hotel e quarto</Title>
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
