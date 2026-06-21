import { useEffect, useState } from "react";
import {
  getProviderBookings,
  updateBookingStatus,
} from "../../services/bookingService";
import api from "../../utils/api";

export default function ProviderDashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    loadBookings();
  }, []);

  async function loadBookings() {
    try {
      const res = await getProviderBookings();
      setBookings(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleStatus(id, status) {
    try {
      await updateBookingStatus(id, status);
      loadBookings();
    } catch (err) {
      alert("Status update failed");
    }
  }

  // ✅ NEW: MARK COMPLETED
  async function handleComplete(id) {
    try {
      await api.put(`/bookings/complete/${id}`);
      loadBookings();
    } catch (err) {
      alert("Failed to mark complete");
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Provider Dashboard
      </h1>

      <div className="space-y-4">

        {bookings.length === 0 && (
          <p>No bookings yet</p>
        )}

        {bookings.map((b) => (
          <div
            key={b._id}
            className="border p-4 rounded bg-white"
          >
            <p><b>Service:</b> {b.serviceName}</p>
            <p><b>Description:</b> {b.description}</p>
            <p>
              <b>Date:</b>{" "}
              {new Date(b.date).toLocaleString()}
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

            {/* ACTION BUTTONS */}
            {b.status === "pending" && (
              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => handleStatus(b._id, "accepted")}
                  className="bg-green-600 text-white px-3 py-1 rounded"
                >
                  Accept
                </button>

                <button
                  onClick={() => handleStatus(b._id, "rejected")}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Reject
                </button>
              </div>
            )}

            {/* NEW: COMPLETE BUTTON */}
            {b.status === "accepted" && (
              <button
                onClick={() => handleComplete(b._id)}
                className="bg-blue-600 text-white px-3 py-1 rounded mt-3"
              >
                Mark Completed
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}