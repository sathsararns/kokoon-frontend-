import { useEffect, useState } from "react";
import api from "../../utils/api";
import { cancelBooking, rateBooking } from "../../services/bookingService";
import { socket } from "../../lib/socket";

export default function CustomerDashboard() {
  const [bookings, setBookings] = useState([]);

  // ⭐ rating + review states
  const [rating, setRating] = useState({});
  const [review, setReview] = useState({});

  async function loadBookings() {
    try {
      const res = await api.get("/bookings/customer");
      setBookings(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadBookings();

    socket.on("booking-updated", () => {
      loadBookings();
    });

    return () => {
      socket.off("booking-updated");
    };
  }, []);

  async function handleCancel(id) {
    try {
      await cancelBooking(id);
      loadBookings();
    } catch (err) {
      alert(err.response?.data?.message || "Cancel failed");
    }
  }

  // ⭐ SUBMIT RATING
  async function handleRate(id) {
    try {
      await rateBooking(id, {
        rating: rating[id],
        review: review[id],
      });

      loadBookings();
    } catch (err) {
      alert(err.response?.data?.message || "Rating failed");
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        My Bookings
      </h1>

      <div className="space-y-4">

        {bookings.length === 0 && (
          <p>No bookings found</p>
        )}

        {bookings.map((b) => (
          <div
            key={b._id}
            className="border p-4 rounded bg-white shadow-sm"
          >
            <p><b>Service:</b> {b.serviceName}</p>
            <p><b>Description:</b> {b.description}</p>

            <p>
              <b>Date:</b>{" "}
              {new Date(b.date).toLocaleString()}
            </p>

            {/* PROVIDER */}
            <p>
              <b>Provider:</b>{" "}
              {b.providerId?.firstName}{" "}
              {b.providerId?.lastName}
            </p>

            {/* STATUS */}
            <p className="mt-2">
              <b>Status:</b>{" "}
              <span
                className={
                  b.status === "accepted"
                    ? "text-green-600 font-bold"
                    : b.status === "rejected"
                    ? "text-red-600 font-bold"
                    : b.status === "completed"
                    ? "text-blue-600 font-bold"
                    : "text-yellow-600 font-bold"
                }
              >
                {b.status}
              </span>
            </p>

            {/* COMPLETED MESSAGE */}
            {b.status === "completed" && (
              <p className="text-blue-600 font-bold mt-2">
                Service Completed ✔ Pay Provider
              </p>
            )}

            {/* ⭐ RATING SYSTEM */}
            {b.status === "completed" && !b.rating && (
              <div className="mt-3 space-y-2">

                <select
                  className="border p-1"
                  onChange={(e) =>
                    setRating({
                      ...rating,
                      [b._id]: e.target.value,
                    })
                  }
                >
                  <option value="">Rate</option>
                  <option value="1">1 ⭐</option>
                  <option value="2">2 ⭐</option>
                  <option value="3">3 ⭐</option>
                  <option value="4">4 ⭐</option>
                  <option value="5">5 ⭐</option>
                </select>

                <input
                  placeholder="Write review"
                  className="border p-1 w-full"
                  onChange={(e) =>
                    setReview({
                      ...review,
                      [b._id]: e.target.value,
                    })
                  }
                />

                <button
                  onClick={() => handleRate(b._id)}
                  className="bg-purple-600 text-white px-3 py-1 rounded"
                >
                  Submit Rating
                </button>
              </div>
            )}

            {/* ⭐ SHOW EXISTING RATING */}
            {b.rating && (
              <div className="mt-2 text-yellow-600">
                ⭐ {b.rating} / 5
                <br />
                📝 {b.review}
              </div>
            )}

            {/* CANCEL */}
            {b.status === "pending" && (
              <button
                onClick={() => handleCancel(b._id)}
                className="bg-red-600 text-white px-3 py-1 rounded mt-3"
              >
                Cancel Booking
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}