import useAsync from '../useAsync';
import useToken from '../useToken';
import * as bookingApi from '../../services/bookingApi';

export default function useBooking() {
  const token = useToken();

  const { data: booking, loading: bookingLoading, error: bookingError } = useAsync(() => bookingApi.getBooking(token));

  const {
    data: createdBooking,
    act: createBooking,
    error: createBookingError,
  } = useAsync((roomId) => bookingApi.createBooking(token, roomId), false);

  const {
    data: updatedBooking,
    act: updateBooking,
    error: updateBookingError,
  } = useAsync((roomId) => bookingApi.updateBooking(token, booking.id, roomId), false);

  return {
    booking,
    bookingLoading,
    bookingError,
    createBooking,
    updateBooking,
    createBookingError,
    updateBookingError,
    createdBooking,
    updatedBooking,
  };
}
