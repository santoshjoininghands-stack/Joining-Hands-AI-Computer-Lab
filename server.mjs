import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import OpenAI from "openai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 10000;

// OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// AI Teacher
app.post("/api/ask", async (req, res) => {
  try {
    const { question, course, project } = req.body;

    if (!question || !question.trim()) {
      return res.status(400).json({
        error: "Please enter a question."
      });
    }

    const prompt = `
You are the AI Teacher for Joining Hands AI Computer Learning & Practical Lab.

Student is currently learning:
Course: ${course || "Computer Learning"}
Project/Lesson: ${project || "General"}

Answer the student's question in a simple, practical and student-friendly way.

If the question is about MS Word, Excel or PowerPoint:
- Give clear step-by-step instructions.
- Use simple language.
- Mention the exact menu/button names where possible.
- Give a small example when useful.
- Do not make the answer unnecessarily complicated.

Student's question:
${question}
`;

    const response = await openai.responses.create({
      model: "gpt-5.6-luna",
      input: prompt
    });

    res.json({
      answer: response.output_text
    });

  } catch (error) {
    console.error("OpenAI error:", error);

    res.status(500).json({
      error: "AI Teacher could not answer right now. Please try again."
    });
  }
});

// Website
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(
    `Joining Hands learning site running on port ${PORT}`
  );
});
