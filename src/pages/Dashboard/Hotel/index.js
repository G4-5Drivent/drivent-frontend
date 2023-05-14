import { useState } from 'react';
import { OptionTitle, Title } from '../../../components/Dashboard/Hotel';
import HotelSection from '../../../components/Dashboard/Hotel/HotelsList';
import RoomSection from '../../../components/Dashboard/Room/RoomList';

export default function Hotel() {
  const [selection, setSelection] = useState({
    hotel: -1,
    room: -1,
  });

  return (
    <>
      <Title>Escolha de hotel e quarto</Title>

      <HotelSection selection={selection} setSelection={setSelection} />
      <RoomSection />
    </>
  );
}
