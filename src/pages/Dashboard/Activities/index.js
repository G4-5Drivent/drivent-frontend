import React, { useState } from 'react';
import ButtonDayFilter from '../../../components/Dashboard/Activities/ButtonDayFilter';
import Instruction from '../../../components/Dashboard/Activities/Instruction';
import Title from '../../../components/Dashboard/Activities/Title';
import { axiosResponseDays, response1, response2, response3 } from '../../../assets/testObj';
import styled from 'styled-components';
import ActivitiesSchedule from '../../../components/Dashboard/Activities/Auditoriums';
import useGetTicket from '../../../hooks/api/useGetTicket';
import UserWarning from '../../../components/Dashboard/Activities/UserWarning';
import useGetActivitiesDays from '../../../hooks/api/useGetActivitiesDays';

export default function Activities() {
  const [selectedDate, setSelectedDate] = useState(null);
  
  const { days, daysLoading, daysError, fetchDays } = useGetActivitiesDays();

  function handleDayFilter(date) {
    setSelectedDate(date);
  }

  const { tickets, ticketsLoading, ticketsError, fetchTickets } = useGetTicket();

  if (ticketsLoading || daysLoading) return <UserWarning msg="Carregando......" />;

  if (!tickets) {
    return <UserWarning msg="Você ainda não comprou o seu ingresso. Prossiga para a compra do seu ingresso." />;
  }

  if (tickets.status !== 'PAID') {
    return <UserWarning msg="Você precisa ter confirmado pagamento antes de fazer a escolha de atividades" />;
  }

  if (tickets.TicketType.isRemote) {
    return (
      <UserWarning msg="Sua modalidade de ingresso não necessita escolher atividade.Você terá acesso a todas as atividades. " />
    );
  }

  return (
    <>
      <Title>Escolha de atividades</Title>
      <Instruction>Primeiro, filtre pelo dia do evento</Instruction>
      <StyledButtonContainer>
        {days.map((eventDate) => (
          <ButtonDayFilter
            key={eventDate.day}
            day={eventDate.day}
            date={eventDate.date}
            selected={eventDate.date === selectedDate}
            onClick={() => handleDayFilter(eventDate.date)}
          />
        ))}
      </StyledButtonContainer>

      {selectedDate && <ActivitiesSchedule selectedDate={selectedDate} />}
    </>
  );
}

const StyledButtonContainer = styled.div`
  padding-top: 20px;
`;
