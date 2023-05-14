import { useState } from 'react';
import { OptionTitle, Title } from '../../../components/Dashboard/Hotel';
import HotelsList from '../../../components/Dashboard/Hotel/HotelsList';
import RoomList from '../../../components/Dashboard/Room/RoomList';

export default function Hotel() {
  const [selection, setSelection] = useState({
    hotel: -1,
    room: -1,
  });

  return (
    <>
      <Title>Escolha de hotel e quarto</Title>
      <OptionTitle>Primeiro, escolha seu hotel</OptionTitle>
      <HotelsList selection={selection} setSelection={setSelection} />
      <OptionTitle>Ótima pedida! Agora escolha seu quarto:</OptionTitle>
      <RoomList />
    </>
  );
}
