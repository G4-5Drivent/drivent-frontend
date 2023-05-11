import useAsync from '../useAsync';
import useToken from '../useToken';

import * as enrollmentApi from '../../services/hotelApi';

export default function useHotel() {
  const token = useToken();

  const {
    data: hotels,
    loading: hotelsLoading,
    error: hotelsError,
    act: getHotels,
  } = useAsync(() => enrollmentApi.getPersonalInformations(token));

  return {
    hotels,
    hotelsLoading,
    hotelsError,
    getHotels,
  };
}
