import styled from 'styled-components';

export default function Hotel({ name, image, vacancies, accomodationKind }) {
  return (
    <StyledHotel>
      <StyledImage src={image} />
      <HotelName>{name}</HotelName>
      <DataTitle>Tipos de acomodação:</DataTitle>
      <Data>{accomodationKind}</Data>
      <DataTitle>Vagas disponíveis:</DataTitle>
      <Data>{vacancies}</Data>
    </StyledHotel>
  );
}

const StyledHotel = styled.div`
  width: 196px;
  height: 264px;
  background: #ebebeb;
  border-radius: 10px;

  box-sizing: border-box;
  padding: 16px 14px;
  margin: 0 20px 20px 0;
`;

const HotelName = styled.h3`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #343434;
  margin: 10px 0;
`;

const DataTitle = styled.h4`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #3c3c3c;
  margin-bottom: 2px;
`;

const Data = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #3c3c3c;
  margin-bottom: 14px;
`;

const StyledImage = styled.img`
  width: 168px;
  height: 109px;
  background: url(image.png);
  border-radius: 5px;
  overflow: hidden;
`;
