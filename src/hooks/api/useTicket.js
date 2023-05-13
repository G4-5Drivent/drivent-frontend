import useAsync from '../useAsync';

import * as ticketApi from '../../services/ticketApi';
import useToken from '../useToken';

export default function useTicket(ticketTypeId) {
  const token = useToken();

  const {
    data: ticket,
    loading: ticketLoading,
    act: postTicket,
  } = useAsync((ticketTypeId) => ticketApi.postTicket(token, ticketTypeId), false);

  return {
    ticket,
    ticketLoading,
    postTicket,
  };
}
