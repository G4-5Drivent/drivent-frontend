import api from './api';

export async function postPayment(token, ticketId, cardData) {
  const body = { ticketId, cardData };
  const response = await api.post('/payments/process', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
