import React from 'react';
import ButtonDayFilter from '../../../components/Dashboard/Activities/ButtonDayFilter';
import Instruction from '../../../components/Dashboard/Activities/Instruction';
import Title from '../../../components/Dashboard/Activities/Title';
import { axiosResponseDays, responseSexta } from '../../../assets/testObj';
import styled from 'styled-components';

export default function Activities() {
  function handleDayFilter(date)  {
    // Handle day filter logic here
    alert('Selected date: ' + date);
  };

  return (
    <>
      <Title>Escolha de atividades</Title>
      <Instruction>Primeiro, filtre pelo dia do evento</Instruction>
      <StyledButtonContainer>
        {axiosResponseDays.data.eventDates.map((eventDate) => (
          <ButtonDayFilter key={eventDate.day} date={eventDate.date} onClick={() => handleDayFilter(eventDate.date)} />
        ))}
      </StyledButtonContainer>
    </>
  );
}

const StyledButtonContainer = styled.div`
  padding-top: 20px;
`;
