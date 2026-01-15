export async function submitFeedback(data: any) {
  console.log("Submitting feedback:", data)
  return new Promise((resolve) => setTimeout(resolve, 500))
}
