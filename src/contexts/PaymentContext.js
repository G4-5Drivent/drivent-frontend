import React, { createContext, useState } from 'react';
import usePayment from '../hooks/api/usePayment';
import useTicket from '../hooks/api/useTicket';

export const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

  return <PaymentContext.Provider value={{ setPaymentConfirmed, paymentConfirmed }}>{children}</PaymentContext.Provider>;
};
