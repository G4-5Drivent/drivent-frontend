import styled from 'styled-components';
import useHotel from '../../../hooks/api/useHotel';
import Hotel from './Hotel';

export default function HotelsList() {
  const { hotels } = useHotel();

  if (!hotels) return null;

  return (
    <StyledBox>
      {hotels.map((hotel) => (
        <Hotel
          name={hotel.name}
          image={hotel.image}
          accomodationKind={hotel}
          vacancies={hotel.vacancies}
          key={hotel.id}
        />
      ))}
    </StyledBox>
  );
}

const StyledBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
