import { OptionTitle, Title } from '../../../components/Dashboard/Hotel';
import HotelComponent from '../../../components/Dashboard/Hotel/Hotel';

export default function Hotel() {
  return (
    <>
      <Title>Escolha de hotel e quarto</Title>
      <OptionTitle>Primeiro, escolha seu hotel</OptionTitle>
      <HotelComponent />
    </>
  );
}
