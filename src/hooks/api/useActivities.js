import useAsync from '../useAsync';
import * as activitiesApi from '../../services/activitiesApi';
import useToken from '../useToken';

export default function useActivities() {
  const token = useToken();

  const {
    data: days,
    loading: daysLoading,
    error: daysError,
    act: fetchDays,
  } = useAsync(() => activitiesApi.getDays(token));

  const { act: subscribeToActivity } = useAsync(
    (activityId) => activitiesApi.subscribeToActivity(activityId, token),
    false
  );

  return {
    days,
    daysLoading,
    daysError,
    fetchDays,
    subscribeToActivity,
  };
}
