import styled from 'styled-components';
import { MdPersonOutline as PersonIcon } from 'react-icons/md';

export default function Room({ capacity }) {
  const personArr = numberToArray(capacity);

  return (
    <StyledRoom>
      <RoomName>101</RoomName>
      <IconsBox>
        {personArr.map((item) => (
          <PersonIcon size={30} color="#CECECE" />
        ))}
      </IconsBox>
    </StyledRoom>
  );
}

function numberToArray(number) {
  const array = [];
  for (let i = 0; i < number; i++) {
    array.push(i);
  }
  return array;
}

const StyledRoom = styled.div`
  width: 190px;
  height: 45px;

  border: 1px solid #cecece;
  border-radius: 10px;

  box-sizing: border-box;
  padding: 11px 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
`;

const IconsBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RoomName = styled.h3`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #454545;
`;
