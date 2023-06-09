import styled, { css } from 'styled-components';
import { useState } from 'react';
import useActivities from '../../../hooks/api/useActivities';
import { fi } from 'date-fns/locale';
import { toast } from 'react-toastify';

const EventContainer = styled.div`
  width: 265px;
  height: ${({ duration }) => duration * 79}px; /* Adjust the minimum height based on the duration of the event */
  border: none;
  margin-bottom: 10px;
  padding: 10px;
  background: ${({ isSelected }) => (isSelected ? '#D0FFDB' : '#f1f1f1')};
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  overflow-y: auto;
  flex-shrink: 0; /* Prevent shrinking when content is smaller than container */
  cursor: ${({ isSpotsAvailable }) => (isSpotsAvailable ? 'pointer' : 'default')};

  ${({ isSpotsAvailable }) =>
    isSpotsAvailable &&
    css`
      :hover {
        background: #d0ffdb;
      }
    `}
`;

const TitleTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 75px);
`;

const Title = styled.h4`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #343434;
  margin-bottom: 4px;
`;

const Time = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #343434;
`;

const VerticalDivider = styled.div`
  width: 1px;
  height: calc(100%);
  background: #d7d7d7;
  margin: 0 15px;
`;

const Spots = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 9px;
  line-height: 11px;
  position: relative;
  color: ${({ spots }) => (parseInt(spots, 10) > 0 ? '#078632' : '#CC6666')};
`;

const SpotsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 45px;
`;

export default function Event({ title, startsAt, endsAt, spots, duration, id, isSubscribed }) {
  const spotsColor = parseInt(spots) > 0 ? '#078632' : '#CC6666';
  const isSpotsAvailable = parseInt(spots) > 0;
  const [isSelected, setSelected] = useState(false);
  const { subscribeToActivity } = useActivities();

  // eslint-disable-next-line space-before-function-paren
  const handleClick = async () => {
    try {
      await subscribeToActivity(id);
      if (isSpotsAvailable) setSelected((prevSelected) => !prevSelected);
      toast('Inscrição realizada com sucesso');
    } catch (error) {
      if (error.response.status === 409) {
        toast.error('Você já está inscrito nesta atividade');
      } else if (error.response.status === 422) {
        toast.error('Você não pode se inscrever em duas atividades que ocorrem no mesmo horário');
      } else {
        toast.error('Erro ao realizar inscrição');
      }
    }
  };

  return (
    <EventContainer
      duration={duration}
      isSelected={isSelected}
      onClick={handleClick}
      isSpotsAvailable={isSpotsAvailable}
    >
      <TitleTimeContainer>
        <Title isSelected={isSelected}>{title}</Title>
        <Time isSelected={isSelected}>{`${startsAt} - ${endsAt}`}</Time>
      </TitleTimeContainer>
      <VerticalDivider />
      <SpotsContainer>
        {isSelected || isSubscribed ? (
          <ion-icon
            name="checkmark-circle-outline"
            style={{ color: spotsColor, '--ionicon-stroke-width': '32px', fontSize: '24px' }}
          />
        ) : (
          <>
            {isSpotsAvailable ? (
              <ion-icon
                name="log-in-outline"
                style={{ color: spotsColor, '--ionicon-stroke-width': '32px', fontSize: '24px' }}
              />
            ) : (
              <ion-icon
                name="close-circle-outline"
                style={{ color: spotsColor, '--ionicon-stroke-width': '32px', fontSize: '24px' }}
              />
            )}
          </>
        )}
        <Spots spots={spots} isSelected={isSelected}>
          {isSelected ? 'Inscrito' : `${spots} vagas`}
        </Spots>
      </SpotsContainer>
    </EventContainer>
  );
}
