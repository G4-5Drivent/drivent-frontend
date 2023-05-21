import { Component, useState } from 'react';
import { Message, StyledButton, Title } from '../../../components/Dashboard/Hotel';
import HotelSection from '../../../components/Dashboard/Hotel/HotelsSection';
import RoomSection from '../../../components/Dashboard/Room/RoomSection';
import useTicketsTypes from '../../../hooks/api/useTicketsTypes';
import styled from 'styled-components';

import useGetTicket from '../../../hooks/api/useGetTicket';
import useBooking from '../../../hooks/api/useBooking';
import MessageBox from '../../../components/MessageBox';
import { toast } from 'react-toastify';

export default function Hotel() {
  const [selection, setSelection] = useState({
    hotel: -1,
    room: -1,
  });
  const [changingRoom, setChangingRoom] = useState(false);

  const { tickets, ticketsLoading, ticketsError, fetchTickets } = useGetTicket();
  const { updateBooking, createBooking } = useBooking();

  if (ticketsError) {
    return <MessageBox message="Você ainda não comprou o seu ingresso. Prossiga para a escolha de atividades" />;
  }

  if (ticketsLoading) return <Message message="Carregando" />;

  if (!tickets.TicketType.includesHotel)
    return (
      <MessageBox
        message="Sua modalidade de ingresso não inclui hospedagem
                  Prossiga para a escolha de atividades"
      />
    );

  if (tickets.status !== 'PAID')
    return <MessageBox message="Você ainda não pagou o seu ingresso. Prossiga para a escolha de atividades" />;

  return (
    <>
      <Title>Escolha de hotel e quarto</Title>

      <HotelSection selection={selection} setSelection={setSelection} changingRoom={() => setChangingRoom(true)} />
      {selection.hotel > 0 && (
        <RoomSection hotelId={selection.hotel} selection={selection} setSelection={setSelection} />
      )}
      {selection.room > 0 && selection.hotel > 0 && <StyledButton onClick={handleClick}>RESERVAR QUARTO</StyledButton>}
    </>
  );

  async function handleClick() {
    try {
      if (changingRoom) {
        await updateBooking(selection.room);
        toast('Quarto alterado com sucesso!');
      } else {
        await createBooking(selection.room);
        toast('Quarto reservado com sucesso!');
      }
    } catch (error) {
      toast.error('Erro ao reservar quarto');
    }
  }
}
