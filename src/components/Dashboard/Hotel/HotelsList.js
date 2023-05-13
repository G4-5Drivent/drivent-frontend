import styled from 'styled-components';
import useHotel from '../../../hooks/api/useHotel';
import Hotel from './Hotel';

export default function HotelsList() {
  const { hotels } = useHotel();

  if (!hotels) return null;

  return (
    <StyledBox>
      {hotels.map(
        (hotel) =>
          hotel.capacity > 0 && (
            <Hotel
              name={hotel.name}
              image={hotel.image}
              accomodationKind={hotel.roomTypes}
              vacancies={hotel.capacity}
              key={hotel.id}
            />
          )
      )}
    </StyledBox>
  );
}

const StyledBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
