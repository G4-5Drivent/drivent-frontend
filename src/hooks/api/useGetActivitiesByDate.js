import useAsync from '../useAsync';
import * as activitiesApi from '../../services/activitiesApi';
import useToken from '../useToken';

export default function useGetActivitiesByDate(date) {
  const token = useToken();

  const {
    data: activities,
    loading: activitiesLoading,
    error: activitiesError,
    act: fetchActivities,
  } = useAsync(() => activitiesApi.getActivitiesByDate(date, token));

  return {
    activities,
    activitiesLoading,
    activitiesError,
    fetchActivities,
  };
}
