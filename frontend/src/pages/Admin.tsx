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
            {mockFeedback.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="px-4 py-3 font-semibold">
                  {item.rating} ⭐
                </td>
                <td className="px-4 py-3">{item.comment}</td>
                <td className="px-4 py-3 text-gray-500">
                  {item.createdAt}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}
