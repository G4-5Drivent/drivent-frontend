import styled from 'styled-components';
import Room from './Room';

export default function RoomList() {
  return (
    <StyledBox>
      <Room capacity={3} />
    </StyledBox>
  );
}

const StyledBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
