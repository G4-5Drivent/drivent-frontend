import useAsync from '../useAsync';
import useToken from '../useToken';
import * as bookingApi from '../../services/bookingApi';

export default function useBooking() {
  const token = useToken();

  const { data: booking, loading: bookingLoading, error: bookingError } = useAsync(() => bookingApi.getBooking(token));

  console.log(booking);

  const { act: createBooking, error: createBookingError } = useAsync(() => bookingApi.createBooking(token), false);

  const { act: updateBooking, error: updateBookingError } = useAsync(
    (bookingId, roomId) => bookingApi.updateBooking(token, bookingId, roomId),
    false
  );

  return {
    booking,
    bookingLoading,
    bookingError,
    createBooking,
    updateBooking,
    createBookingError,
    updateBookingError,
  };
}
