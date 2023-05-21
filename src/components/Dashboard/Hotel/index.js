import styled from 'styled-components';

export const Title = styled.h1`
  //font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 40px;
  color: #000000;
`;

export const OptionTitle = styled.h2`
  //font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #8e8e8e;
  margin-bottom: 25px;
  margin-top: 33px;
`;

export const Message = styled.h4`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;

  color: #8e8e8e;

  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 180px;
`;

export const StyledButton = styled.button`
  width: 182px;
  height: 37px;

  background: #e0e0e0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border: none;
  margin-top: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  //font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;

  color: #000000;
  cursor: pointer;
`;

export const StyledHotel = styled.button`
  width: 196px;
  height: 264px;

  border-radius: 10px;

  ${({ selected }) => (selected ? 'background: #FFEED2;' : 'background: #ebebeb;')}

  box-sizing: border-box;
  padding: 16px 14px;
  margin: 0 20px 20px 0;
  cursor: pointer;

  overflow: hidden;
  border: none;
`;

export const HotelName = styled.h3`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #343434;
  margin: 10px 0;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const DataTitle = styled.h4`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #3c3c3c;
  margin-bottom: 2px;
`;

export const Data = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #3c3c3c;
  margin-bottom: 14px;
`;

export const StyledImage = styled.img`
  width: 168px;
  height: 109px;
  background: url(image.png);
  border-radius: 5px;
  overflow: hidden;
`;
