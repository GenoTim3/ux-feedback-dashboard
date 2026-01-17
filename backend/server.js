import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
const PORT = 4000;
const DATA_FILE = "./feedback.json";

app.use(cors());
app.use(express.json());

// Ensure feedback.json exists
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([]));
}

// GET all feedback
app.get("/feedback", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
  res.json(data);
});

// POST new feedback
app.post("/feedback", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));

  const newFeedback = {
    id: Date.now(),
    message: req.body.message,
    page: req.body.page || "unknown",
    createdAt: new Date().toISOString()
  };

  data.push(newFeedback);
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));

  res.status(201).json(newFeedback);
});

app.listen(PORT, () => {
  console.log(`✅ Mock backend running on http://localhost:${PORT}`);
});
