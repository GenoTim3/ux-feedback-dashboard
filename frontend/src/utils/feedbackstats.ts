import type { Feedback } from "../services/api";

/**
 * Calculate the total number of feedback entries
 */
export function getTotalFeedback(feedback: Feedback[]): number {
  return feedback.length;
}

/**
 * Calculate the average rating
 */
export function getAverageRating(feedback: Feedback[]): number {
  const total = getTotalFeedback(feedback);
  if (total === 0) return 0;
  const sum = feedback.reduce((acc, f) => acc + f.rating, 0);
  return sum / total;
}

/**
 * Calculate the percentage of positive feedback (rating >= 4)
 */
export function getPositiveFeedbackPercentage(feedback: Feedback[]): number {
  const total = getTotalFeedback(feedback);
  if (total === 0) return 0;
  const positiveCount = feedback.filter((f) => f.rating >= 4).length;
  return (positiveCount / total) * 100;
}
