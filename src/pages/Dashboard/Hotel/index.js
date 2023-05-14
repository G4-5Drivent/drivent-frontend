import { useState } from 'react';
import { Title } from '../../../components/Dashboard/Hotel';
import HotelSection from '../../../components/Dashboard/Hotel/HotelsSection';
import RoomSection from '../../../components/Dashboard/Room/RoomSection';

export default function Hotel() {
  const [selection, setSelection] = useState({
    hotel: -1,
    room: -1,
  });

  return (
    <>
      <Title>Escolha de hotel e quarto</Title>

      <HotelSection selection={selection} setSelection={setSelection} />
      {selection.hotel > 0 && (
        <RoomSection hotelId={selection.hotel} selection={selection} setSelection={setSelection} />
      )}
    </>
  );
}
