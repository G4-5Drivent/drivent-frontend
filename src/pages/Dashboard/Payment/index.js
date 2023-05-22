import styled from 'styled-components';
import { useContext, useState } from 'react';

import Title from '../../../components/Dashboard/Payment/Title';
import Instruction from '../../../components/Dashboard/Payment/Instruction';
import TicketBox from '../../../components/Dashboard/Payment/TicketBox';
import ConfirmButton from '../../../components/Dashboard/Payment/ConfirmButton';
import ConfirmPayment from '../../../components/Dashboard/Payment/ConfirmPayment';
import TicketsTypesInfoContext from '../../../contexts/TicketsTypesContext';
import { PaymentContext } from '../../../contexts/PaymentContext';
import useGetTicket from '../../../hooks/api/useGetTicket';
import OrderSummaryBox from '../../../components/Dashboard/Payment/OrderSummaryBox';
import PaymentConfirmed from '../../../components/Dashboard/Payment/PaymentConfimed';
import useTicket from '../../../hooks/api/useTicket';
import useEnrollment from '../../../hooks/api/useEnrollment';
import { Message } from '../../../components/Dashboard/Hotel';

export default function Payment() {
  const { enrollment } = useEnrollment();
  const { postTicket } = useTicket();
  const { ticketsTypesInfo } = useContext(TicketsTypesInfoContext);
  const { setPaymentConfirmed } = useContext(PaymentContext);
  let paidTicket = false;
  let reservedTicket = false;
  const [selectedTickets, setSelectedTickets] = useState({
    ingresso: '',
    hospedagem: '',
  });
  const { tickets, ticketsLoading } = useGetTicket();
  const presentialWithoutHotel = ticketsTypesInfo.find(
    (ticketType) => !ticketType.isRemote && !ticketType.includesHotel
  );
  const presentialWithHotel = ticketsTypesInfo.find((ticketType) => !ticketType.isRemote && ticketType.includesHotel);
  const online = ticketsTypesInfo.find((ticketType) => ticketType.isRemote);

  const handleTicketSelection = (category, ticket) => {
    if (category === 'ingresso' && ticket === 'Online') {
      setSelectedTickets((prevSelectedTickets) => ({
        ...prevSelectedTickets,
        [category]: ticket,
        hospedagem: '', // reset hospedagem to an empty string when Online is selected
      }));
    } else {
      setSelectedTickets((prevSelectedTickets) => ({
        ...prevSelectedTickets,
        [category]: ticket,
      }));
    }
  };

  const ticketPrice = {
    Presencial: presentialWithoutHotel.price,
    Online: online.price,
  };

  const hotelPrice = {
    'Sem Hotel': 0,
    'Com Hotel': presentialWithHotel.price - presentialWithoutHotel.price,
  };

  const selectedTicketPrice = selectedTickets.ingresso ? ticketPrice[selectedTickets.ingresso] : 0;
  const selectedHotelPrice = selectedTickets.hospedagem ? hotelPrice[selectedTickets.hospedagem] : 0;
  const totalAmount = selectedTicketPrice + selectedHotelPrice;

  const [isTicketReserved, setIsTicketReserved] = useState(false);
  const [ticketId, setTicketId] = useState(null);

  const ticketTypeId = (() => {
    if (totalAmount === presentialWithHotel.price) return presentialWithHotel.id;
    if (totalAmount === presentialWithoutHotel.price) return presentialWithoutHotel.id;
    if (totalAmount === online.price) return online.id;
    return null;
  })();

  async function reserveTicket(e) {
    e.preventDefault();
    setPaymentConfirmed(false);
    const ticket = await postTicket(ticketTypeId);
    setTicketId(ticket.id);
    setIsTicketReserved(true);
  }

  const ticketInfo = {
    tipo: null,
    hospedagem: null,
    price: null,
  };

  if (ticketsLoading) {
    return <Instruction> Carregando ...</Instruction>;
  } else if (tickets) {
    if (tickets.status === 'PAID') paidTicket = true;
    else if (tickets.status === 'RESERVED') reservedTicket = true;
    ticketInfo.tipo = tickets.TicketType.name.slice(0, 1) === 'P' ? 'Presencial' : 'Online';
    ticketInfo.hospedagem = tickets.TicketType.includesHotel ? 'Com Hotel' : '';
    ticketInfo.price = tickets.TicketType.price;
  }

  if(!enrollment) {
    return(
      <Container>
        <Title>Ingresso e pagamento</Title>
        <StyledBox>
          <Message>
            Você precisa completar sua inscrição antes <br/> de prosseguir pra escolha de ingresso.
          </Message>
        </StyledBox>
      </Container>
    );
  }

  if (paidTicket) {
    return (
      <Container>
        <Title> Ingresso Escolhido</Title>
        <OrderSummaryBox>
          <h1>
            {ticketInfo.tipo} {ticketInfo.hospedagem && `+ ${ticketInfo.hospedagem}`}
          </h1>
          <h2>R$ {ticketInfo.price}</h2>
        </OrderSummaryBox>
        <Instruction> Pagamento </Instruction>
        <PaymentConfirmed />
      </Container>
    );
  }

  if (isTicketReserved || reservedTicket) {
    return (
      <Container>
        <Title>Ingresso e pagamento</Title>
        <ConfirmPayment
          ticket={
            selectedTickets.ingresso ||
            (tickets?.ticketTypeId === presentialWithHotel.id
              ? 'Presencial'
              : tickets?.ticketTypeId === presentialWithoutHotel.id
                ? 'Presencial'
                : 'Online')
          }
          ticketId={ticketId || tickets?.id}
          hotel={
            selectedTickets.hospedagem ||
            (tickets?.ticketTypeId === presentialWithHotel.id
              ? 'Com Hotel'
              : tickets?.ticketTypeId === presentialWithoutHotel.id
                ? 'Sem Hotel'
                : '')
          }
          totalAmount={totalAmount || tickets?.TicketType.price}
        />
      </Container>
    );
  }

  return (
    <Container>
      <Title>Ingresso e pagamento</Title>
      <Instruction>Primeiro, escolha sua modalidade de ingresso</Instruction>
      <TicketBoxContainer>
        <TicketBox
          selected={selectedTickets.ingresso === 'Presencial'}
          onClick={() => handleTicketSelection('ingresso', 'Presencial')}
        >
          <h1>Presencial</h1>
          <h2>R$ {ticketPrice.Presencial}</h2>
        </TicketBox>

        <TicketBox
          selected={selectedTickets.ingresso === 'Online'}
          onClick={() => handleTicketSelection('ingresso', 'Online')}
        >
          <h1>Online</h1>
          <h2>R$ {ticketPrice.Online}</h2>
        </TicketBox>
      </TicketBoxContainer>

      {selectedTickets.ingresso === 'Presencial' && (
        <>
          <Instruction>Ótimo! Agora escolha sua modalidade de hospedagem</Instruction>
          <TicketBoxContainer>
            <TicketBox
              selected={selectedTickets.hospedagem === 'Sem Hotel'}
              onClick={() => handleTicketSelection('hospedagem', 'Sem Hotel')}
            >
              <h1>Sem Hotel</h1>
              <h2>+ R$ 0</h2>
            </TicketBox>

            <TicketBox
              selected={selectedTickets.hospedagem === 'Com Hotel'}
              onClick={() => handleTicketSelection('hospedagem', 'Com Hotel')}
            >
              <h1>Com Hotel</h1>
              <h2>+ {hotelPrice['Com Hotel']}</h2>
            </TicketBox>
          </TicketBoxContainer>
        </>
      )}

      {(selectedTickets.hospedagem || selectedTickets.ingresso === 'Online') && (
        <>
          <Instruction>
            Fechado! O total ficou em <TotalAmount>{`R$ ${totalAmount}`}</TotalAmount>. Agora é só confirmar:
          </Instruction>
          <ConfirmButton onClick={(e) => reserveTicket(e)} label={'RESERVAR INGRESSO'} />
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  //font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
`;

const TicketBoxContainer = styled.div`
  display: flex;
  column-gap: 24px;
`;

const TotalAmount = styled.span`
  font-weight: 700;
`;

const StyledBox = styled.div`
  width: 100%;
  height: calc(100% - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
