const API_BASE_URL = "http://localhost:4000";

export type Feedback = {
  id: number;
  rating: number;
  message: string;
  page: string;
  createdAt: string;
};

export async function submitFeedback(data: {
  rating: number;
  message: string;
  page: string;
}) {
  const response = await fetch(`${API_BASE_URL}/feedback`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to submit feedback");
  }

  return response.json();
}

export async function getFeedback(): Promise<Feedback[]> {
  const response = await fetch(`${API_BASE_URL}/feedback`);

  if (!response.ok) {
    throw new Error("Failed to fetch feedback");
  }

  return response.json();
}
