import api from './api';

export async function getDays(token) {
  const response = await api.get('/activities/days', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function getActivitiesByDate(date, token) {
  const response = await api.get(`/activities/places/date/${date}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function subscribeToActivity(activityId, token) {
  const response = await api.post(
    '/activities',
    { activityId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
}
