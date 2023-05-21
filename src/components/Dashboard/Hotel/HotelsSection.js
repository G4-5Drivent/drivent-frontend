import styled from 'styled-components';
import useHotel from '../../../hooks/api/useHotel';
import Hotel from './Hotel';
import { OptionTitle } from '.';
import useBooking from '../../../hooks/api/useBooking';
import ReservedHotel from './ReservedHotel';

export default function HotelSection({ selection, setSelection, setChangingRoom }) {
  const { hotels } = useHotel();
  const { booking } = useBooking();

  if (!hotels) return null;

  return (
    <>
      <OptionTitle>Primeiro, escolha seu hotel</OptionTitle>
      <StyledBox>
        {!booking ? (
          hotels.map(
            (hotel) =>
              hotel.capacity > 0 && (
                <Hotel
                  id={hotel.id}
                  name={hotel.name}
                  image={hotel.image}
                  accomodationKind={hotel.roomTypes}
                  vacancies={hotel.capacity}
                  key={hotel.id}
                  selected={selection.hotel === hotel.id}
                  selection={selection}
                  setSelection={setSelection}
                />
              )
          )
        ) : (
          <ReservedHotel
            // name={chosenHotel.name}
            // image={chosenHotel.image}
            roomId={booking.Room.id}
            hotelId={booking.Room.hotelId}
            roomName={booking.Room.name}
            roomType={booking.Room.roomType}
            handleClick={setChangingRoom}
          />
        )}
      </StyledBox>
    </>
  );
}

const StyledBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
