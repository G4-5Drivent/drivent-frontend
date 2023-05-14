import styled from 'styled-components';
import Room from './Room';
import useRoom from '../../../hooks/api/useRoom';
import { OptionTitle } from '../Hotel';
import { useEffect, useRef } from 'react';

export default function RoomSection({ hotelId }) {
  const componentRef = useRef(null);

  useEffect(() => {
    if (componentRef.current) {
      componentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [componentRef, hotelId]);

  if (!hotelId || hotelId === undefined) return null;

  const { rooms } = useRoom(hotelId);

  if (!rooms) return <OptionTitle>Algo deu errado!</OptionTitle>;

  return (
    <>
      <OptionTitle ref={componentRef}>Ótima pedida! Agora escolha seu quarto:</OptionTitle>
      <StyledBox>
        {rooms.map((room) => (
          <Room capacity={room.capacity} name={room.name} />
        ))}
      </StyledBox>
    </>
  );
}

const StyledBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
