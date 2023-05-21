import api from './api';

export async function getBooking(token) {
  const response = await api.get('/booking', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function updateBooking(token, bookingId, roomId) {
  const response = await api.put(
    `/booking/${bookingId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    {
      roomId,
    }
  );
  return response.data;
}

export async function createBooking(token, roomid) {
  const response = await api.post(
    '/booking',
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    {
      roomid,
    }
  );
  return response.data;
}
