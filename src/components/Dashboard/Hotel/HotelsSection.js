import styled from 'styled-components';
import useHotel from '../../../hooks/api/useHotel';
import Hotel from './Hotel';
import { OptionTitle } from '.';
import useBooking from '../../../hooks/api/useBooking';
import ReservedHotel from './ReservedHotel';
import MessageBox from '../../MessageBox';
import { useEffect, useState } from 'react';
import { set } from 'date-fns';

export default function HotelSection({
  selection,
  setSelection,
  changeRoom,
  changingRoom,
  updateRoomSuccess,
  setUpdateRoomSuccess,
  setChangingRoom,
}) {
  const { hotels, hotelsLoading } = useHotel();
  const { booking, bookingLoading, updatedBooking, createdBooking } = useBooking();

  useEffect(() => {
    if (updateRoomSuccess) {
      setTimeout(() => window.location.reload(), 500);
    }
  }, [updateRoomSuccess]);

  if (bookingLoading || hotelsLoading) return <MessageBox message="Carregando" />;

  let chosenHotel = null;
  if (updatedBooking) {
    chosenHotel = findHotelById(hotels, updatedBooking.Room.hotelId);
  }
  if (createdBooking) {
    chosenHotel = findHotelById(hotels, createdBooking.Room.hotelId);
  }
  if (booking) {
    chosenHotel = findHotelById(hotels, booking.Room.hotelId);
  }

  return (
    <>
      <OptionTitle>{booking ? 'Você já escolheu seu quarto:' : 'Primeiro, escolha seu hotel'}</OptionTitle>
      <StyledBox>
        {(!booking || changingRoom) &&
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
          )}
        {!changingRoom && booking && chosenHotel && (
          <ReservedHotel
            name={chosenHotel.name}
            image={chosenHotel.image}
            roomId={booking.Room.id}
            hotelId={booking.Room.hotelId}
            roomName={booking.Room.name}
            roomType={booking.Room.roomType}
            changeRoom={changeRoom}
            setChangingRoom={setChangingRoom}
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

function findHotelById(hotels, id) {
  return hotels.find((hotel) => hotel.id === id);
}
