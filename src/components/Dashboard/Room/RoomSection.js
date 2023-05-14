import styled from 'styled-components';
import Room from './Room';
import useRoom from '../../../hooks/api/useRoom';
import { OptionTitle } from '../Hotel';
import { useEffect, useRef } from 'react';

export default function RoomSection({ selection, setSelection }) {
  const componentRef = useRef(null);
  const { hotel: hotelId } = selection;

  useEffect(() => {
    focusOn(componentRef);
  }, [hotelId]);

  if (!hotelId || hotelId === undefined) return null;

  const { rooms } = useRoom(hotelId);

  if (!rooms) return <OptionTitle>Algo deu errado!</OptionTitle>;

  return (
    <>
      <OptionTitle ref={componentRef}>Ótima pedida! Agora escolha seu quarto:</OptionTitle>
      <StyledBox>
        {rooms.map((room) => (
          <Room
            id={room.id}
            capacity={room.capacity}
            name={room.name}
            selected={room.id === selection.room}
            selection={selection}
            setSelection={setSelection}
          />
        ))}
      </StyledBox>
    </>
  );
}

function focusOn(ref) {
  if (ref.current) {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }
}

const StyledBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
