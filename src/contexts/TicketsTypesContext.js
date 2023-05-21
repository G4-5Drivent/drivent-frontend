import { createContext } from 'react';

import Splash from '../components/Splash';

import useTicketsTypes from '../hooks/api/useTicketsTypes';

const TicketsTypesInfoContext = createContext();
export default TicketsTypesInfoContext;

export function TicketsTypesInfoProvider({ children }) {
  const { ticketsTypes, ticketsTypesLoading, ticketsTypesError } = useTicketsTypes();

  if (ticketsTypesLoading) {
    return <Splash loading />;
  }

  if (!ticketsTypes || ticketsTypesError) {
    let message = ticketsTypesError?.response
      ? ticketsTypesError.response.data.message
      : 'Could not connect to server. Please try again later.';
    return <Splash message={message} />;
  }

  // Add this check
  if (!ticketsTypes) {
    return <Splash message="Please sign in to view ticket types." />;
  }

  return (
    <TicketsTypesInfoContext.Provider
      value={{ ticketsTypesInfo: ticketsTypes, ticketsTypesInfoError: ticketsTypesError }}
    >
      {children}
    </TicketsTypesInfoContext.Provider>
  );
}

