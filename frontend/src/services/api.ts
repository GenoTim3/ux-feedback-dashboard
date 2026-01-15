// Minimal stub API service for local development
export async function submitFeedback(data: any) {
  console.log("Submitting feedback:", data)

  // Simulate async API call
  return new Promise((resolve) => setTimeout(resolve, 500))
}
