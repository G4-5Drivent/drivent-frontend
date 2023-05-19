import api from './api';

export async function postTicket(token, ticketTypeId) {
  const response = await api.post(
    '/tickets',
    { ticketTypeId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
}

export async function getTickets(token) {
  const response = await api.get('/tickets', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
