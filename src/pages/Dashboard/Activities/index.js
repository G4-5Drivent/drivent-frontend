import React, { useState } from 'react';
import ButtonDayFilter from '../../../components/Dashboard/Activities/ButtonDayFilter';
import Instruction from '../../../components/Dashboard/Activities/Instruction';
import Title from '../../../components/Dashboard/Activities/Title';
import { axiosResponseDays, response1, response2, response3 } from '../../../assets/testObj';
import styled from 'styled-components';
import ActivitiesSchedule from '../../../components/Dashboard/Activities/Auditoriums';

export default function Activities() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [schedule, setSchedule] = useState(null);

  function handleDayFilter(date) {
    setSelectedDate(date);
    setSchedule(handleSchedule(date));
  }

  function handleSchedule(date) {
    const selectedEventDate = axiosResponseDays.data.eventDates.find((eventDate) => eventDate.date === date);
    if (selectedEventDate) {
      const relatedTableId = selectedEventDate.relatedTableId;
      switch (relatedTableId) {
      case 1:
        return response1;
      case 2:
        return response2;
      case 3:
        return response3;
      default:
        return null;
      }
    }
    return null;
  }
  console.log(schedule);
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

      {selectedDate && <ActivitiesSchedule selectedDate={selectedDate} schedule={schedule} />}
    </>
  );
}

const StyledButtonContainer = styled.div`
  padding-top: 20px;
`;
