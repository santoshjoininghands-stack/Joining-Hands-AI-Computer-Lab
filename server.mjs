import express from "express";
import OpenAI from "openai";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, "public");

app.use(express.json({ limit: "1mb" }));
app.use(express.static(publicDir));

const client = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

function clean(value, max = 2000) {
  return String(value ?? "").trim().slice(0, max);
}

async function answerWithAI({ question, course, project }) {
  if (!client) {
    throw new Error("AI Teacher is not configured. Add OPENAI_API_KEY to the .env file.");
  }

  const response = await client.responses.create({
    model: process.env.OPENAI_MODEL || "gpt-5",
    instructions: [
      "You are the Joining Hands AI Teacher for a beginner-friendly computer learning portal.",
      "Teach clearly and safely. Prefer simple English or Hindi/Hinglish depending on the student's question.",
      "Give practical, step-by-step instructions. Do not pretend to have performed actions on the student's computer.",
      "The current course and project context are provided below. Keep the answer relevant to that context.",
      `Course: ${course || "General"}`,
      `Project: ${project || "General"}`
    ].join("\n"),
    input: question
  });

  return response.output_text || "I could not generate an answer right now.";
}

// Main endpoint used by the website.
app.post("/api/ask", async (req, res) => {
  const question = clean(req.body?.question);
  const course = clean(req.body?.course, 200);
  const project = clean(req.body?.project, 200);

  if (!question) {
    return res.status(400).json({ error: "Please type a question first." });
  }

  try {
    const answer = await answerWithAI({ question, course, project });
    res.json({ answer });
  } catch (error) {
    console.error("AI Teacher error:", error);
    res.status(500).json({
      error: error?.message || "AI Teacher could not answer right now."
    });
  }
});

// Compatibility endpoint for the earlier AI/API version.
app.post("/api/ai", async (req, res) => {
  const question = clean(req.body?.question);
  const course = clean(req.body?.course, 200);
  const project = clean(req.body?.project || req.body?.lessonId, 200);
  if (!question) return res.status(400).json({ error: "Please type a question first." });

  try {
    const answer = await answerWithAI({ question, course, project });
    res.json({ answer });
  } catch (error) {
    console.error("AI Teacher error:", error);
    res.status(500).json({ error: error?.message || "AI Teacher could not answer right now." });
  }
});

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, aiConfigured: Boolean(process.env.OPENAI_API_KEY) });
});

app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api/")) {
    return res.sendFile(path.join(publicDir, "index.html"));
  }
  next();
});

const port = Number(process.env.PORT || 3000);
app.listen(port, "0.0.0.0", () => {
  console.log(`Joining Hands AI Computer Learning Lab running on port ${port}`);
});
