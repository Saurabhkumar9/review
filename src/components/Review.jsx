import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Review = () => {
  const key = import.meta.env.VITE_REACT_APP_URL;
  const [reviews, setReview] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchReview = async () => {
    try {
      const response = await axios.get(`${key}`);
      console.log("✅ Got Data:", response.data);

      const sortedReviews = (response.data.reviews || []).sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      
      setReview(sortedReviews);
    } catch (error) {
      console.error("❌ Error fetching review:", error);
      setReview([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReview();
  }, []);

  const formatDateTime = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">User Reviews</h2>
      
      {loading ? (
        <p>Loading reviews...</p>
      ) : reviews.length === 0 ? (
        <p className="text-gray-500">No reviews yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm text-left">
            <thead className="bg-gray-200 text-gray-700 uppercase">
              <tr>
                <th className="px-4 py-2 border">No.</th>
                <th className="px-4 py-2 border">Username</th>
                <th className="px-4 py-2 border">Comment</th>
                <th className="px-4 py-2 border">Rating</th>
                <th className="px-4 py-2 border">Date & Time</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review, index) => (
                <tr key={review._id || index} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">{index + 1}</td>
                  <td className="px-4 py-2 border">{review.current_userId?.name || "Anonymous"}</td>
                  <td className="px-4 py-2 border">{review.comment}</td>
                  <td className="px-4 py-2 border">{review.rating}</td>
                  <td className="px-4 py-2 border">{formatDateTime(review.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Review;
