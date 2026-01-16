import Stars from "../components/ui/Stars"

const mockFeedback = [
  {
    id: 1,
    rating: 5,
    comment: "Amazing experience!",
    createdAt: "2026-01-14",
  },
  {
    id: 2,
    rating: 4,
    comment: "Very good, but could be faster.",
    createdAt: "2026-01-13",
  },
  {
    id: 3,
    rating: 2,
    comment: "Confusing UI.",
    createdAt: "2026-01-12",
  },
]

// Metrics calculations
const total = mockFeedback.length

const avgRating =
  mockFeedback.reduce((sum, f) => sum + f.rating, 0) / total

const positivePct =
  (mockFeedback.filter((f) => f.rating >= 4).length / total) * 100

function ratingBadge(rating: number) {
  if (rating >= 4) return "bg-green-100 text-green-800"
  if (rating === 3) return "bg-yellow-100 text-yellow-800"
  return "bg-red-100 text-red-800"
}

export default function Admin() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-sm text-gray-500">Average Rating</p>
          <p className="text-3xl font-bold mt-2">
            {avgRating.toFixed(1)} ⭐
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-sm text-gray-500">Total Feedback</p>
          <p className="text-3xl font-bold mt-2">{total}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-sm text-gray-500">Positive Feedback</p>
          <p className="text-3xl font-bold mt-2">
            {positivePct.toFixed(0)}%
          </p>
        </div>
      </div>

      {/* Feedback table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left">Rating</th>
              <th className="px-4 py-3 text-left">Comment</th>
              <th className="px-4 py-3 text-left">Date</th>
            </tr>
          </thead>

          <tbody>
            {mockFeedback.length === 0 ? (
              <tr>
                <td
                  colSpan={3}
                  className="px-4 py-10 text-center text-gray-500"
                >
                  No feedback submitted yet.
                </td>
              </tr>
            ) : (
              mockFeedback.map((item) => (
                <tr
                  key={item.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${ratingBadge(
                        item.rating
                      )}`}
                    >
                      <Stars rating={item.rating} />
                      {item.rating}
                    </span>
                  </td>

                  <td className="px-4 py-3 max-w-md text-gray-700">
                    {item.comment}
                  </td>

                  <td className="px-4 py-3 text-gray-500">
                    {item.createdAt}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </main>
  )
}
