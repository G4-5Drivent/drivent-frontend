import useAsync from '../useAsync';
import * as ticketApi from '../../services/ticketApi';
import useToken from '../useToken';

export default function useGetTicket() {
  const token = useToken();

  const {
    data: tickets,
    loading: ticketsLoading,
    error: ticketsError,
    act: fetchTickets,
  } = useAsync(() => ticketApi.getTickets(token), true);

  return {
    tickets,
    ticketsLoading,
    ticketsError,
    fetchTickets,
  };
}
