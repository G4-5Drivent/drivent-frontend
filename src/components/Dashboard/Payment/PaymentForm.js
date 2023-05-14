import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Card from 'react-credit-cards';
import { PaymentContext } from '../../../contexts/PaymentContext';

import 'react-credit-cards/es/styles-compiled.css';
import '../../../assets/styles/paymentForm.css';

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData,
} from '../../../assets/utils/PaymentFormUtils';
import ConfirmButton from './ConfirmButton';
import useTicket from '../../../hooks/api/useTicket';
import usePayment from '../../../hooks/api/usePayment';

export default function PaymentForm({ ticketTypeId, setIsPaymentConfirmed }) {
  const { setPaymentConfirmed } = useContext(PaymentContext);

  const [state, setState] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    issuer: '',
    focused: '',
    formData: null,
  });

  const { postPayment } = usePayment();
  const { postTicket } = useTicket();

  const handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      setState((prevState) => ({ ...prevState, issuer }));
    }
  };

  const handleInputFocus = ({ target }) => {
    setState((prevState) => ({ ...prevState, focused: target.name }));
  };

  const handleInputChange = ({ target }) => {
    const { name, value } = target;

    setState((prevState) => ({
      ...prevState,
      [name]: formatInputValue(name, value),
    }));
  };

  const formatInputValue = (name, value) => {
    switch (name) {
    case 'number':
      return formatCreditCardNumber(value);
    case 'expiry':
      return formatExpirationDate(value);
    case 'cvc':
      return formatCVC(value);
    default:
      return value;
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(e.target);
    const ticket = await postTicket(ticketTypeId);
 
    const payment = await postPayment(
      ticket.id,
      {
        issuer: state.issuer,
        number: state.number,
        name: state.name,
        expirationDate: state.expiry,
        cvv: state.cvc,
      },
    );
    if (payment.id) {
      setPaymentConfirmed(true);
    }

    const formData = {
      number: state.number,
      name: state.name,
      expiry: state.expiry,
      cvc: state.cvc,
    };

    setState((prevState) => ({ ...prevState, formData }));
    setState({ number: '', name: '', expiry: '', cvc: '' });
  };

  const formattedFormData = state.formData ? formatFormData(state.formData) : [];

  return (
    <>
      <Container>
        <CardContainer>
          <Card
            number={state.number}
            name={state.name}
            expiry={state.expiry}
            cvc={state.cvc}
            focused={state.focused}
            callback={handleCallback}
          />
        </CardContainer>
        <FormContainer>
          <form className="cardForm">
            <input
              type="tel"
              name="number"
              placeholder="Card Number"
              required
              value={state.number}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <Eg>E.g.: 49..., 51..., 36..., 37...</Eg>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={state.name}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <div className="bottom">
              <input
                type="tel"
                name="expiry"
                placeholder="Valid Thru"
                required
                value={state.expiry}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
              <input
                type="tel"
                name="cvc"
                placeholder="CVC"
                required
                value={state.cvc}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
          </form>
          {formattedFormData.length > 0 && (
            <div>
              {formattedFormData.map((d, i) => (
                <div key={i}>{d}</div>
              ))}
            </div>
          )}
        </FormContainer>
      </Container>
      <ConfirmButton onClick={handleSubmit} label={'FINALIZAR PAGAMENTO'} />
    </>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 17px;
`;

const CardContainer = styled.div`
  margin-right: 20px;
`;

const FormContainer = styled.div``;

const Eg = styled.p`
  font-size: 12px;
  line-height: 10px;
  margin-left: 0.7rem;
  color: #8e8e8e;
`;
