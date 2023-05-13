import React, { createContext, useState } from 'react';

export const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

  return (
    <PaymentContext.Provider value={{ paymentConfirmed, setPaymentConfirmed }}>
      {children}
    </PaymentContext.Provider>
  );
};
