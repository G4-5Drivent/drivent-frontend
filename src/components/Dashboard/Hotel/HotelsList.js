import styled from 'styled-components';
import useHotel from '../../../hooks/api/useHotel';
import Hotel from './Hotel';
import { useForm } from '../../../hooks/useForm';

export default function HotelsList() {
  const { hotels } = useHotel();

  const { data, handleChange, customHandleChange } = useForm({
    initialValues: {
      selectedHotel: -1,
      selectedRoom: -1,
    },
    onSubmit: (formData) => {
      console.log(formData);
    },
  });

  if (!hotels) return null;

  return (
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
              selectedHotel={data.selectedHotel === hotel.id}
              handleChange={customHandleChange}
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
