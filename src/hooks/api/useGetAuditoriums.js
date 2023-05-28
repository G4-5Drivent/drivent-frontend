import useAsync from '../useAsync';
import * as activitiesApi from '../../services/activitiesApi';
import useToken from '../useToken';

export default function useGetAuditoriums(date) {
  const token = useToken();

  const {
    data: auditoriums,
    loading: auditoriumsLoading,
    error: auditoriumsError,
    act: fetchAuditoriums,
  } = useAsync(() => activitiesApi.getActivitiesByDate(date, token));

  return {
    auditoriums,
    auditoriumsLoading,
    auditoriumsError,
    fetchAuditoriums,
  };
}
