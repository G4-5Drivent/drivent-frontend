import React, { useState } from 'react';
import ButtonDayFilter from '../../../components/Dashboard/Activities/ButtonDayFilter';
import Instruction from '../../../components/Dashboard/Activities/Instruction';
import Title from '../../../components/Dashboard/Activities/Title';
import { axiosResponseDays, responseSexta } from '../../../assets/testObj';
import styled from 'styled-components';
import { set } from 'date-fns';
import ActivitiesSchedule from '../../../components/Dashboard/Activities/Auditoriums';

export default function Activities() {
  const [selectedDate, setSelectedDate] = useState(null);

  function handleDayFilter(date) {
    setSelectedDate(date);
  }

  return (
    <>
      <Title>Escolha de atividades</Title>
      <Instruction>Primeiro, filtre pelo dia do evento</Instruction>
      <StyledButtonContainer>
        {axiosResponseDays.data.eventDates.map((eventDate) => (
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
