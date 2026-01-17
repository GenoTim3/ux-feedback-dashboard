import { type Dispatch, type SetStateAction } from "react";

type Props = {
  rating: number;
  onChange: Dispatch<SetStateAction<number>>;
};

export default function RatingStars({ rating, onChange }: Props) {
  return (
    <div className="flex justify-center space-x-1 mt-4">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          className={`text-3xl ${
            star <= rating ? "text-yellow-400" : "text-gray-300"
          }`}
          onClick={() => onChange(star)}
        >
          ★
        </button>
      ))}
    </div>
  );
}
