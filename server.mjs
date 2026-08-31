import express from "express";
import OpenAI from "openai";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, "public");

app.use(express.json({ limit: "1mb" }));

/* =========================================================
   FRONTEND FILES
   ========================================================= */

app.use(express.static(__dirname));

/* Images inside public folder */
app.use("/public", express.static(publicDir));


/* =========================================================
   OPENAI
   ========================================================= */

const client = process.env.OPENAI_API_KEY
  ? new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    })
  : null;


function clean(value, max = 2000) {
  return String(value ?? "")
    .trim()
    .slice(0, max);
}


/* =========================================================
   AI TEACHER FUNCTION
   ========================================================= */

async function answerWithAI({
  question,
  course,
  project
}) {

  if (!client) {
    throw new Error(
      "AI Teacher is not configured. Please add OPENAI_API_KEY in the Render Environment Variables."
    );
  }

  const response = await client.responses.create({
    model: process.env.OPENAI_MODEL || "gpt-5",

    instructions: [
      "You are the Joining Hands AI Teacher.",
      "Teach beginners about computers.",
      "Explain clearly and step-by-step.",
      "Use simple English, Hindi or Hinglish according to the student's question.",
      "Give practical examples.",
      "Do not pretend to control the student's computer.",
      "Keep answers relevant to the course and lesson.",
      `Course: ${course || "General"}`,
      `Project: ${project || "General"}`
    ].join("\n"),

    input: question
  });

  return (
    response.output_text ||
    "I could not generate an answer right now."
  );
}


/* =========================================================
   AI API
   ========================================================= */

app.post("/api/ask", async (req, res) => {

  const question = clean(req.body?.question);
  const course = clean(req.body?.course, 200);
  const project = clean(req.body?.project, 200);

  if (!question) {
    return res.status(400).json({
      error: "Please type a question first."
    });
  }

  try {

    const answer = await answerWithAI({
      question,
      course,
      project
    });

    return res.json({
      answer
    });

  } catch (error) {

    console.error("AI Teacher error:", error);

    return res.status(500).json({
      error:
        error?.message ||
        "AI Teacher could not answer right now."
    });
  }
});


/* =========================================================
   OLD / COMPATIBILITY AI API
   ========================================================= */

app.post("/api/ai", async (req, res) => {

  const question = clean(req.body?.question);
  const course = clean(req.body?.course, 200);

  const project = clean(
    req.body?.project ||
    req.body?.lessonId,
    200
  );

  if (!question) {
    return res.status(400).json({
      error: "Please type a question first."
    });
  }

  try {

    const answer = await answerWithAI({
      question,
      course,
      project
    });

    return res.json({
      answer
    });

  } catch (error) {

    console.error("AI Teacher error:", error);

    return res.status(500).json({
      error:
        error?.message ||
        "AI Teacher could not answer right now."
    });
  }
});


/* =========================================================
   HEALTH CHECK
   ========================================================= */

app.get("/api/health", (_req, res) => {

  res.json({
    ok: true,
    aiConfigured: Boolean(
      process.env.OPENAI_API_KEY
    )
  });

});


/* =========================================================
   HOMEPAGE
   ========================================================= */

app.get("/", (_req, res) => {

  res.sendFile(
    path.join(__dirname, "index.html")
  );

});


/* =========================================================
   START SERVER
   ========================================================= */

const port = Number(
  process.env.PORT || 3000
);

app.listen(
  port,
  "0.0.0.0",
  () => {

    console.log(
      `Joining Hands AI Computer Learning Lab running on port ${port}`
    );

  }
);
