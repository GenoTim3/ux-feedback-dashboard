import { useState } from "react"
import RatingStars from "./RatingStars"
import SuccessState from "./SuccessState"
import { submitFeedback } from "../../services/api.ts"

export default function FeedbackForm() {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState("")
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    await submitFeedback({ rating, comment, page: "Home" })
    setSubmitted(true)
  }

  if (submitted) return <SuccessState />

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow p-6 w-full max-w-md space-y-4"
    >
      <h2 className="text-xl font-semibold">How was your experience?</h2>

      <RatingStars rating={rating} setRating={setRating} />

      <textarea
        className="w-full border rounded p-2"
        placeholder="Tell us more (optional)"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button
        className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        disabled={rating === 0}
      >
        Submit Feedback
      </button>
    </form>
  )
}
