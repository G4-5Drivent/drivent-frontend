import { OptionTitle, Title } from '../../../components/Dashboard/Hotel';
import HotelsList from '../../../components/Dashboard/Hotel/HotelsList';

export default function Hotel() {
  return (
    <>
      <Title>Escolha de hotel e quarto</Title>
      <OptionTitle>Primeiro, escolha seu hotel</OptionTitle>
      <HotelsList />
      <OptionTitle>Ótima pedida! Agora escolha seu quarto:</OptionTitle>
      <></>
    </>
  );
}
