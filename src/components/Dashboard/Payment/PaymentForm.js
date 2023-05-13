import React, { useState } from 'react';
import styled from 'styled-components';
import Card from 'react-credit-cards';

import 'react-credit-cards/es/styles-compiled.css';
import '../../../assets/styles/paymentForm.css';

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData,
} from '../../../assets/utils/PaymentFormUtils';
import ConfirmButton from './ConfirmButton';

export default function PaymentForm() {
  const [state, setState] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    issuer: '',
    focused: '',
    formData: null,
  });

  const handleConfirm = () => {
    alert(`
      Card information:
      Number: ${state.number}
      Name: ${state.name}
      Expiry: ${state.expiry}
      CVC: ${state.cvc}
    `);
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = [...e.target.elements]
      .filter((d) => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    setState((prevState) => ({ ...prevState, formData }));
    e.target.reset();
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
          <form onSubmit={handleSubmit} className="cardForm">
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
      <ConfirmButton label={'FINALIZAR PAGAMENTO'} onClick={handleConfirm} />
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
