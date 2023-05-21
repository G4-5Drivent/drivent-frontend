import { StyledHotel, HotelName, DataTitle, Data, StyledImage } from '.';

export default function Hotel({ id, name, image, vacancies, accomodationKind, selected, selection, setSelection }) {
  return (
    <StyledHotel selected={selected} onClick={handleClick}>
      <StyledImage src={image} />

      <HotelName>{name}</HotelName>

      <DataTitle>Tipos de acomodação:</DataTitle>
      <Data>{accomodationKind}</Data>

      <DataTitle>Vagas disponíveis:</DataTitle>
      <Data>{vacancies}</Data>
    </StyledHotel>
  );

  function handleClick() {
    const newData = {
      ...selection,
      hotel: id,
    };
    setSelection(newData);
  }
}
