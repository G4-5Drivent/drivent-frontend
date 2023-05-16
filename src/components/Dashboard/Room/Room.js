import styled from 'styled-components';
import { BsPerson as PersonOutlineIcon, BsFillPersonFill as PersonIcon } from 'react-icons/bs';

export default function Room({ capacity, name, selected, selection, setSelection, id, bookings }) {
  const selectedCount = selected ? 1 : 0;
  const availableArr = numberToArray(capacity - bookings.length - selectedCount);
  const reservedArr = numberToArray(bookings.length);

  const isFull = bookings.length === capacity;

  return (
    <StyledRoom onClick={handleClick} selected={selected} disabled={isFull}>
      <RoomName>{name}</RoomName>
      <IconsBox>
        {selected && <PersonIcon size={30} color="#FF4791" />}
        {reservedArr.map((item) => (
          <PersonIcon size={30} color="#000" id="icon" disabled={isFull} />
        ))}
        {availableArr.map((item) => (
          <PersonOutlineIcon size={30} color="#000" disabled />
        ))}
      </IconsBox>
    </StyledRoom>
  );

  function handleClick() {
    const newData = { ...selection, room: id };
    setSelection(newData);
  }
}

function numberToArray(number) {
  const array = [];
  for (let i = 0; i < number; i++) {
    array.push(i);
  }
  return array;
}

const StyledRoom = styled.button`
  width: 190px;
  height: 45px;

  border: 1px solid #cecece;
  border-radius: 10px;

  box-sizing: border-box;
  padding: 11px 16px;

  ${({ selected }) => (selected ? 'background: #FFEED2;' : 'background: #fff;')}

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
  margin: 0 17px 17px 0;

  #icon path {
    ${({ disabled }) => disabled && 'fill: #8C8C8C;'}
  }

  :disabled {
    background: #e9e9e9;
    cursor: not-allowed;
  }
`;

const IconsBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RoomName = styled.h3`
  //font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #454545;
`;
