import api from "../Utils/api";

// create booking
export const createBooking = (data) =>
  api.post("/bookings", data);

export const getBookings = () =>
  api.get("/bookings");
// customer bookings
export const getCustomerBookings = () =>
  api.get("/bookings/customer");

// provider bookings
export const getProviderBookings = () =>
  api.get("/bookings/provider");

// update status
export const updateBookingStatus = (id, status) =>
  api.put(`/bookings/${id}`, { status });