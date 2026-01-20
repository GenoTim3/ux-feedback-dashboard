# UX Feedback Dashboard 🚀

A full-stack UX feedback collection and admin dashboard built for learning modern frontend + backend workflows **without requiring AWS, cloud accounts, or a credit card**.

This project simulates a real-world SaaS feedback system using:
- React + Vite + TypeScript (Frontend)
- Tailwind CSS (Styling)
- Node.js + Express (Mock Backend API)
- File-based persistence (local JSON)

The architecture mirrors what you’d deploy to AWS later (API Gateway + Lambda + DynamoDB), but runs 100% locally.

Remember to use 3 terminals to congrol Front, End, and CURl results

First project of this type to come from me 

---

## ✨ Features

### User-Facing
- Star-based UX rating system
- Optional written feedback
- Submit feedback from any page
- Success confirmation UI

### Admin Dashboard
- View submitted feedback
- Star ratings visualization
- Timestamped entries
- Clean, readable layout

### Backend
- REST API (`GET /feedback`, `POST /feedback`)
- Persistent storage via `feedback.json`
- CORS-enabled for frontend usage
- No database or cloud required

---

## 🧱 Project Structure

ux-feedback-dashboard/
│
├── frontend/ # React + Vite frontend
│ ├── src/
│ │ ├── pages/
│ │ │ ├── Home.tsx
│ │ │ └── Admin.tsx
│ │ ├── components/
│ │ │ └── StarRating.tsx
│ │ ├── services/
│ │ │ └── api.ts
│ │ └── styles/
│ │ └── globals.css
│ └── package.json
│
├── backend/ # Mock Express backend
│ ├── server.js
│ ├── feedback.json
│ └── package.json
│
└── README.md

yaml
Copy code

---

## ⚙️ Prerequisites

Make sure you have the following installed:

- **Node.js 20.19+ or 22+**
  ```bash
  node --version
npm

Git

🚀 Running the Project (New Machine Setup)
1️⃣ Clone the Repository
bash
Copy code
git clone https://github.com/GenoTim3/ux-feedback-dashboard.git
cd ux-feedback-dashboard
2️⃣ Start the Backend (Mock API)
bash
Copy code
cd backend
npm install
npm run dev
You should see:

arduino
Copy code
✅ Mock backend running on http://localhost:4000
Test it (optional):

bash
Copy code
curl http://localhost:4000/feedback
3️⃣ Start the Frontend
Open a new terminal:

bash
Copy code
cd frontend
npm install
npm run dev
Vite will output a local URL, usually:

arduino
Copy code
http://localhost:5173
🧪 How to Use the App
Submit Feedback
Open http://localhost:5173

Select a star rating

Enter optional feedback

Click Submit Feedback

View Feedback (Admin)
Navigate to /admin

View all submitted feedback

Feedback persists across refreshes

🔌 API Reference (Mock Backend)
GET /feedback
Returns all feedback entries.

POST /feedback
Creates a new feedback entry.

json
Copy code
{
  "message": "Loved the UI",
  "page": "home"
}