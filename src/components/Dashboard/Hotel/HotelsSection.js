import styled from 'styled-components';
import useHotel from '../../../hooks/api/useHotel';
import Hotel from './Hotel';
import { OptionTitle } from '.';

export default function HotelSection({ selection, setSelection }) {
  const { hotels } = useHotel();

  if (!hotels) return null;

  return (
    <>
      <OptionTitle>Primeiro, escolha seu hotel</OptionTitle>
      <StyledBox>
        {hotels.map(
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
      </StyledBox>
    </>
  );
}

const StyledBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
