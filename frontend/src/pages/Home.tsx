import { useState } from "react";
import { submitFeedback } from "../services/api";
import StarRating from "../components//feedback/RatingStars.tsx";

export default function Home() {
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit() {
    setError("");

    try {
      await submitFeedback({
        rating,
        message,
        page: "home",
      });

      setSubmitted(true);
      setMessage("");
      setRating(0);
    } catch {
      setError("Failed to submit feedback. Please try again.");
    }
  }

  return (
    <div className="max-w-xl mx-auto mt-16 text-center">
      <h1 className="text-3xl font-bold mb-4">
        UX Feedback Dashboard 🚀
      </h1>

      {submitted ? (
        <p className="text-green-600">
          Thanks for your feedback!
        </p>
      ) : (
        <>
          <StarRating rating={rating} onChange={setRating} />

          <textarea
            className="w-full border p-2 mt-4 rounded"
            placeholder="Optional feedback..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            onClick={handleSubmit}
            className="mt-4 bg-black text-white px-4 py-2 rounded disabled:opacity-50"
            disabled={rating === 0}
          >
            Submit Feedback
          </button>

          {error && (
            <p className="text-red-600 mt-2">
              {error}
            </p>
          )}
        </>
      )}
    </div>
  );
}
