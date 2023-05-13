import useAsync from '../useAsync';

import * as ticketsTypesApi from '../../services/ticketsTypesApi';
import useToken from '../useToken';

export default function useTicketsTypes() {
  const token = useToken();

  const {
    data: ticketsTypes,
    loading: ticketsTypesLoading,
    error: ticketsTypesError,
  } = useAsync(() => ticketsTypesApi.getTicketsTypesInfo(token));

  return {
    ticketsTypes,
    ticketsTypesLoading,
    ticketsTypesError,
  };
}
