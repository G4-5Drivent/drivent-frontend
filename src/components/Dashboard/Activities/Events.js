import styled from 'styled-components';

const EventContainer = styled.div`
  width: 265px;
  height: ${({ duration }) => duration * 79}px; /* Adjust the minimum height based on the duration of the event */
  border: none;
  margin-bottom: 10px;
  padding: 10px;
  background: #f1f1f1;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  overflow-y: auto;
  flex-shrink: 0; /* Prevent shrinking when content is smaller than container */
  cursor: pointer;

  :hover {
    background: #e0e0e0;
  }
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

`;

export default function Event({ title, time, spots, duration }) {
  const spotsColor = parseInt(spots) > 0 ? '#078632' : '#CC6666';

  return (
    <EventContainer duration={duration}>
      <TitleTimeContainer>
        <Title>{title}</Title>
        <Time>{time}</Time>
      </TitleTimeContainer>

      <VerticalDivider />

      {parseInt(spots) > 0 ? (
        <SpotsContainer>
          <ion-icon
            name="log-in-outline"
            style={{ color: spotsColor, '--ionicon-stroke-width': '32px', fontSize: '24px' }}
          />

          <Spots spots={spots}>{spots} vagas</Spots>
        </SpotsContainer>
      ) : (
        <SpotsContainer>
          <ion-icon name="close-circle-outline" style={{ color: spotsColor, '--ionicon-stroke-width': '32px', fontSize: '24px'  }} />
          <Spots spots={spots}> Esgotado </Spots>
        </SpotsContainer>
      )}
    </EventContainer>
  );
}
