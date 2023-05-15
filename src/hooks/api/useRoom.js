import useAsync from '../useAsync';
import useToken from '../useToken';
import * as roomApi from '../../services/roomApi';
import { useEffect } from 'react';

export default function useRoom(hotelId) {
  const token = useToken();

  const {
    data: rooms,
    loading: roomsLoading,
    error: roomsError,
    act: getRooms,
  } = useAsync(() => roomApi.getRoomsFromHotel(token, hotelId));

  useEffect(() => {
    if (hotelId) {
      getRooms();
    }
  }, [hotelId]);

  return {
    rooms,
    roomsLoading,
    roomsError,
    getRooms,
  };
}
