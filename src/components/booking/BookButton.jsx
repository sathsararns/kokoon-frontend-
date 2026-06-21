import { createBooking } from "../../services/bookingService";

export default function BookButton({ providerId }) {
  async function handleBook() {
    try {
      await createBooking({
        providerId,
        serviceName: "General Service",
        description: "Need help",
        date: new Date(),
      });

      alert("Booking sent!");
    } catch (err) {
      alert(err.response?.data?.message || "Booking failed");
    }
  }

  return (
    <button
      onClick={handleBook}
      className="bg-green-600 text-white px-4 py-2 rounded"
    >
      Book Now
    </button>
  );
}