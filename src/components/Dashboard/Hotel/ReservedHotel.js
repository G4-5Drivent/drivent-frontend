import styled from 'styled-components';
import { StyledHotel, HotelName, DataTitle, Data, StyledImage, StyledButton } from '.';
import useRoom from '../../../hooks/api/useRoom';
import MessageBox from '../../MessageBox';

export default function ReservedHotel({ name, image, roomName, roomType, hotelId, roomId, changeRoom }) {
  const { rooms } = useRoom(hotelId);

  if (!rooms) return <MessageBox message="Carregando..."></MessageBox>;

  const chosenRoom = rooms.find((room) => room.id === roomId);

  return (
    <StyledBox>
      <StyledHotel selected>
        <StyledImage src={image} />

        <HotelName>{name}</HotelName>

        <DataTitle>Quarto reservado:</DataTitle>
        <Data>{`${roomName} (${roomType})`}</Data>

        <DataTitle>Pessoas no seu quarto:</DataTitle>
        <Data>{getRoomText()}</Data>
      </StyledHotel>
      <StyledButton onClick={changeRoom}>TROCAR DE QUARTO</StyledButton>
    </StyledBox>
  );

  function getRoomText() {
    if (chosenRoom.capacity === 1) return 'Você ';
    else return `Você e mais ${chosenRoom.capacity - 1}`;
  }
}

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
`;
