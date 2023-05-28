import styled from 'styled-components';
import Event from './Events';
import { useState } from 'react';
import useGetAuditoriums from '../../../hooks/api/useGetAuditoriums';
import UserWarning from './UserWarning';

const Wrapper = styled.div`
  margin-top: 40px;
  width: 864px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #d7d7d7;
`;

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const AuditoriumLabel = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  width: 288px;

  color: #7b7b7b;
`;

const AuditoriumContainer = styled.div`
  width: 288px;
  height: 392px;
  //border-right: 1px solid #d7d7d7;
  //border-bottom: 1px solid #d7d7d7;
  border-left: 1px solid #d7d7d7;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;

  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  :first-child {
    border-left: none;
  }
`;

function calculateDuration(startTime, endTime) {
  const [startHour, startMinute] = startTime.split(':').map(Number);
  const [endHour, endMinute] = endTime.split(':').map(Number);

  // Calculate the duration in hours
  const duration = endHour + endMinute / 60 - (startHour + startMinute / 60);

  return duration;
}

export default function ActivitiesSchedule({ selectedDate, schedule }) {
  const { auditoriums, auditoriumsLoading } = useGetAuditoriums(selectedDate);
  const [selectedEvents, setSelectedEvents] = useState({});

  if (auditoriumsLoading || !auditoriums) return <UserWarning msg="Carregando..." />;

  console.log('auditoriums: ', auditoriums);

  async function handleEventClick(event) {
    const { name, spots } = event;
    if (parseInt(spots) > 0) {
      setSelectedEvents((prevSelectedEvents) => ({
        ...prevSelectedEvents,
        [name]: true,
      }));
    }
  }

  return (
    <Wrapper>
      <LabelContainer>
        {auditoriums.map((auditorium) => (
          <AuditoriumLabel key={auditorium.name}>{auditorium.name}</AuditoriumLabel>
        ))}
      </LabelContainer>
      <MainContainer>
        {auditoriums.map((auditorium) => (
          <AuditoriumContainer key={auditorium.name}>
            {auditorium.activities.map((activity) => {
              const { name, startsAt, endsAt, spotsAvailable, id, isSubscribed } = activity;
              const duration = calculateDuration(startsAt, endsAt);
              const isSelected = selectedEvents[name] || false;

              return (
                <Event
                  key={name}
                  id={id}
                  title={name}
                  startsAt={startsAt}
                  endsAt={endsAt}
                  spots={spotsAvailable}
                  duration={duration}
                  isSelected={isSelected}
                  onClick={handleEventClick}
                  isSubscribed={isSubscribed}
                />
              );
            })}
          </AuditoriumContainer>
        ))}
      </MainContainer>
    </Wrapper>
  );
}
