import styled from 'styled-components';
import Room from './Room';
import useRoom from '../../../hooks/api/useRoom';
import { OptionTitle } from '../../../components/Dashboard/Hotel';

export default function RoomSection({ hotelId }) {
  if (!hotelId || hotelId === undefined) return null;

  const { rooms } = useRoom(hotelId);

  return (
    <>
      <OptionTitle>Ótima pedida! Agora escolha seu quarto:</OptionTitle>
      <StyledBox>
        {rooms.map((room) => (
          <Room capacity={3} />
        ))}
      </StyledBox>
    </>
  );
}

const StyledBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
