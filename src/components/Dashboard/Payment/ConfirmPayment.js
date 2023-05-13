import React, { useContext } from 'react';
import Instruction from './Instruction';
import OrderSummaryBox from './OrderSummaryBox';
import PaymentForm from './PaymentForm';
import { PaymentContext } from '../../../contexts/PaymentContext';
import PaymentConfimed from './PaymentConfimed';

export default function ConfirmPayment({ ticket, hotel, totalAmount }) {
  const { paymentConfirmed } = useContext(PaymentContext);

  return (
    <>
      <Instruction> Ingresso Escolhido</Instruction>
      <OrderSummaryBox>
        <h1>
          {ticket} {hotel && `+ ${hotel}`}
        </h1>
        <h2>R$ {totalAmount}</h2>
      </OrderSummaryBox>
      <Instruction> Pagamento </Instruction>
      {paymentConfirmed ? (
        <PaymentConfimed />
      ) : (
        <PaymentForm />
      )}
    </>
  );
}
