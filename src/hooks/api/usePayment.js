import useAsync from '../useAsync';

import * as paymentApi from '../../services/paymentApi';
import useToken from '../useToken';

export default function usePayment() {
  const token = useToken();

  const {
    data: payment,
    loading: paymentLoading,
    act: postPayment,
  } = useAsync((ticketId, cardData) => paymentApi.postPayment(token, ticketId, cardData), false);

  return {
    payment,
    paymentLoading,
    postPayment,
  };
}
