"use client";
import axios from "axios"; // or use fetch
import { useEffect, useState } from "react";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const placeId = process.env.NEXT_PUBLIC_PLACE_ID;
// console.log("apiKeysss", apiKey);

const GoogleReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}&fields=reviews`
        );

        setReviews(response.data.reviews); // Assume the response structure
      } catch (err) {
        setError(err.message);
        console.error("Failed to fetch reviews:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [apiKey, placeId]);

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p>Error loading reviews: {error}</p>;

  return (
    <div>
      <h2>Customer Reviews</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>
              <p>
                {review.authorName}: {review.text}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
};

export default GoogleReviews;
