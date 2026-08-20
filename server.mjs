import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));


// ==========================================
// AI TEACHER - GOOGLE GEMINI
// ==========================================

app.post("/api/ask", async (req, res) => {

  try {

    const { question, course, project } = req.body;

    if (!question || !question.trim()) {
      return res.status(400).json({
        error: "Please enter a question."
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {

      console.error("GEMINI_API_KEY is missing.");

      return res.status(500).json({
        error: "Gemini API key is not configured on the server."
      });
    }


    const prompt = `
You are the AI Teacher for Joining Hands AI Computer Learning & Practical Lab.

The student is currently learning:

Course: ${course || "Computer"}
Project: ${project || "Practical Project"}

Student's question:
${question}

Your job is to help the student understand the task.

IMPORTANT RULES:

1. Give simple answers suitable for beginners.
2. If the question is about MS Word, give exact step-by-step instructions.
3. Mention the correct MS Word tab/menu/button names.
4. Explain one step at a time.
5. Give a small example when useful.
6. Do not use complicated technical language.
7. Do not do the student's project for them.
8. Help them understand how to complete it themselves.
9. Keep the answer reasonably short.
10. If the question is unrelated to computer learning, politely say that you are the Joining Hands AI Teacher and ask them to ask a computer-learning question.

Example style:

Question:
How do I add a shape?

Answer:
To add a shape in MS Word:

1. Open the Insert tab.
2. Click Shapes.
3. Choose the shape you want.
4. Click and drag on the page to draw the shape.
5. Use Shape Format to change its colour, outline or size.

Now answer the student's question.
`;


    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey
        },

        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt
                }
              ]
            }
          ]
        })
      }
    );


    const data = await response.json();


    if (!response.ok) {

      console.error("Gemini API Error:", data);

      return res.status(response.status).json({
        error:
          data?.error?.message ||
          "Gemini AI request failed."
      });

    }


    const answer =
      data?.candidates?.[0]?.content?.parts?.[0]?.text;


    if (!answer) {

      return res.status(500).json({
        error: "Gemini did not return an answer."
      });

    }


    res.json({
      answer: answer
    });


  } catch (error) {

    console.error("AI Teacher Error:", error);

    res.status(500).json({
      error:
        "AI Teacher could not answer right now. Please try again."
    });

  }

});


// ==========================================
// WEBSITE
// ==========================================

app.get("*", (req, res) => {

  res.sendFile(
    path.join(__dirname, "public", "index.html")
  );

});


// ==========================================
// START SERVER
// ==========================================

app.listen(
  PORT,
  "0.0.0.0",
  () => {
    console.log(
      `Joining Hands learning site running on port ${PORT}`
    );
  }
);
