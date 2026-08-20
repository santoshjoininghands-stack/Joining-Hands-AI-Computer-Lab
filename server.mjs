import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 10000;

// Allow JSON requests
app.use(express.json());

// Serve website files
app.use(express.static(path.join(__dirname, "public")));


// ==========================================
// AI TEACHER API
// ==========================================

app.post("/api/ask", async (req, res) => {

  try {

    const { question, course, project } = req.body;

    if (!question) {
      return res.status(400).json({
        error: "Please enter a question."
      });
    }


    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {

      console.error("OPENAI_API_KEY is missing.");

      return res.status(500).json({
        error: "OpenAI API key is not configured on the server."
      });

    }


    const prompt = `
You are the AI Teacher for Joining Hands AI Computer Learning & Practical Lab.

Student is currently learning:
Course: ${course || "Computer"}
Project: ${project || "Practical Project"}

Student's question:
${question}

Give a simple, clear and practical answer suitable for a beginner student.

If the question is about Microsoft Word:
- Explain the exact steps.
- Mention the menu/tab/button names.
- Keep the explanation easy to follow.
- Give an example when useful.
- Do not assume the student already knows advanced features.
`;


    const response = await fetch(
      "https://api.openai.com/v1/responses",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },

        body: JSON.stringify({
          model: "gpt-5.6-luna",
          input: prompt
        })
      }
    );


    const data = await response.json();


    if (!response.ok) {

      console.error("OpenAI API Error:", data);

      return res.status(response.status).json({
        error:
          data?.error?.message ||
          "OpenAI API request failed."
      });

    }


    const answer =
      data.output_text ||
      "Sorry, I could not generate an answer.";


    res.json({
      answer: answer
    });


  } catch (error) {

    console.error("Server AI Error:", error);

    res.status(500).json({
      error: "AI Teacher could not answer right now. Please try again."
    });

  }

});


// ==========================================
// WEBSITE ROUTE
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
