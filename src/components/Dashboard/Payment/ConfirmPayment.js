import Instruction from './Instruction';
import OrderSummaryBox from './OrderSummaryBox';

export default function ConfirmPayment({ ticket, hotel, totalAmount }) {
  return (
    <>
      <Instruction> Ingresso Escolhido</Instruction>
      <OrderSummaryBox>
        <h1>
          {ticket} + {hotel}
        </h1>
        <h2>R$ {totalAmount}</h2>
      </OrderSummaryBox>
      <Instruction> Pagamento </Instruction>
    </>
  );
}
