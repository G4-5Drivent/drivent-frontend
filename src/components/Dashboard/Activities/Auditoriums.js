import styled from 'styled-components';

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
  border-right: 1px solid #d7d7d7;
  border-bottom: 1px solid #d7d7d7;
  border-left: 1px solid #d7d7d7;

  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  :last-child {
    border-right: none;
  }
`;

const DateLabel = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  width: 100%;
  margin-top: 50%;
  color: #7b7b7b;
`;

export default function ActivitiesSchedule({ selectedDate }) {
  return (
    <Wrapper>
      <LabelContainer>
        <AuditoriumLabel>Auditorium 1</AuditoriumLabel>
        <AuditoriumLabel>Auditorium 2</AuditoriumLabel>
        <AuditoriumLabel>Auditorium 3</AuditoriumLabel>
      </LabelContainer>
      <MainContainer>
        <AuditoriumContainer><DateLabel>{selectedDate}</DateLabel></AuditoriumContainer>
        <AuditoriumContainer><DateLabel>{selectedDate}</DateLabel></AuditoriumContainer>
        <AuditoriumContainer><DateLabel>{selectedDate}</DateLabel></AuditoriumContainer>
      </MainContainer>
    </Wrapper>
  );
}
