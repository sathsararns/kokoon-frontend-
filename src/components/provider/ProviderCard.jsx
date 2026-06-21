import { useEffect, useState } from "react";
import { getProviderRating } from "../services/bookingService";

export default function ProviderCard({ provider }) {
  const [rating, setRating] = useState(null);

  useEffect(() => {
    async function fetchRating() {
      try {
        const res = await getProviderRating(provider._id);
        setRating(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchRating();
  }, []);

  return (
    <div className="border p-4 rounded bg-white">
      <h2 className="font-bold">
        {provider.firstName} {provider.lastName}
      </h2>

      <p>{provider.category}</p>

      {/* ⭐ RATING DISPLAY */}
      <div className="mt-2 text-yellow-600 font-bold">
        ⭐ {rating?.average || 0} / 5
        <span className="text-gray-500 ml-2">
          ({rating?.totalReviews || 0} reviews)
        </span>
      </div>
    </div>
  );
}