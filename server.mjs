import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import "dotenv/config";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, "public");

app.use(express.json({ limit: "1mb" }));
app.use(express.static(publicDir));

/* =========================================================
   GOOGLE GEMINI CONFIGURATION
   ========================================================= */

const GEMINI_API_KEY = String(
  process.env.GEMINI_API_KEY || ""
).trim();

const GEMINI_MODEL = String(
  process.env.GEMINI_MODEL || "gemini-3.8-flash"
).trim();

const PORT = Number(
  process.env.PORT || 3000
);


/* =========================================================
   HELPER FUNCTIONS
   ========================================================= */

function clean(value, max = 4000) {
  return String(value ?? "")
    .trim()
    .slice(0, max);
}


function cleanHistory(history) {
  if (!Array.isArray(history)) {
    return [];
  }

  return history
    .slice(-12)
    .map((item) => {
      const role =
        item?.role === "assistant"
          ? "model"
          : "user";

      const content =
        clean(item?.content, 3000);

      return {
        role,
        content
      };
    })
    .filter((item) => item.content);
}


/* =========================================================
   GEMINI AI TEACHER
   ========================================================= */

async function answerWithAI({
  question,
  course,
  project,
  language,
  history
}) {

  if (!GEMINI_API_KEY) {
    throw new Error(
      "Gemini AI is not configured. Please add GEMINI_API_KEY in Render → Environment."
    );
  }


  const preferredLanguage =
    language === "hi"
      ? "Hindi"
      : "English or Hinglish depending on the student's question";


  const systemInstruction = `
You are the Joining Hands AI Teacher.

You teach beginner students at:
Joining Hands Computer Learning & Practical Lab.

Your job is to teach computer skills clearly, patiently and practically.

TEACHING RULES:

1. Preferred response language:
   ${preferredLanguage}

2. If the student asks in Hindi:
   Answer naturally in Hindi.

3. If the student asks in Hinglish:
   Answer naturally in simple Hinglish.

4. If the student asks in English:
   Answer in clear simple English.

5. Use easy language suitable for beginners.

6. For Microsoft Word questions, always use the exact
   Microsoft Word command/option names so students can
   find them easily in Word.

7. When explaining a feature, explain:

   - What does it do?
   - When should you use it?
   - Real-life example
   - Step-by-step instructions

8. Give practical examples wherever useful.

9. If appropriate, give a small practice task.

10. Do not claim that you clicked, opened, edited or changed
    anything on the student's computer.

11. Never reveal API keys or internal server information.

12. Stay focused on computer learning.

13. If the question is simple, give a simple answer.

14. Do not unnecessarily use difficult technical words.

CURRENT COURSE:
${course || "General Computer Learning"}

CURRENT TAB / PROJECT:
${project || "General"}
`.trim();


  /* -------------------------------------------------------
     PREVIOUS CHAT HISTORY
     ------------------------------------------------------- */

  const previousMessages =
    cleanHistory(history);


  const contents = [];


  for (const item of previousMessages) {

    contents.push({
      role: item.role,

      parts: [
        {
          text: item.content
        }
      ]
    });

  }


  /* -------------------------------------------------------
     CURRENT QUESTION
     ------------------------------------------------------- */

  const lastMessage =
    previousMessages[
      previousMessages.length - 1
    ];


  if (
    !lastMessage ||
    lastMessage.role !== "user" ||
    lastMessage.content !== question
  ) {

    contents.push({
      role: "user",

      parts: [
        {
          text: question
        }
      ]
    });

  }


  /* -------------------------------------------------------
     GEMINI API URL
     ------------------------------------------------------- */

  const url =
    `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(
      GEMINI_MODEL
    )}:generateContent?key=${encodeURIComponent(
      GEMINI_API_KEY
    )}`;


  /* -------------------------------------------------------
     SEND REQUEST TO GEMINI
     ------------------------------------------------------- */

  const response =
    await fetch(
      url,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({

          systemInstruction: {

            parts: [
              {
                text: systemInstruction
              }
            ]

          },

          contents,

          generationConfig: {

            temperature: 0.4,

            maxOutputTokens: 1500

          }

        })

      }
    );


  /* -------------------------------------------------------
     READ GEMINI RESPONSE
     ------------------------------------------------------- */

  let data = {};

  try {

    data =
      await response.json();

  } catch {

    data = {};

  }


  /* -------------------------------------------------------
     HANDLE GEMINI ERROR
     ------------------------------------------------------- */

  if (!response.ok) {

    console.error(
      "Gemini API response:",
      JSON.stringify(
        data,
        null,
        2
      )
    );


    const googleMessage =
      data?.error?.message ||
      `Gemini API request failed with status ${response.status}.`;


    throw new Error(
      googleMessage
    );

  }


  /* -------------------------------------------------------
     GET ANSWER
     ------------------------------------------------------- */

  const answer =
    data?.candidates?.[0]?.content?.parts
      ?.map(
        (part) =>
          part?.text || ""
      )
      .join("")
      .trim();


  if (!answer) {

    console.error(
      "Gemini returned no answer:",
      JSON.stringify(
        data,
        null,
        2
      )
    );


    throw new Error(
      "Gemini returned an empty answer. Please try again."
    );

  }


  return answer;
}


/* =========================================================
   MAIN AI TEACHER API
   ========================================================= */

app.post(
  "/api/ask",
  async (req, res) => {

    const question =
      clean(
        req.body?.question
      );


    const course =
      clean(
        req.body?.course,
        200
      );


    const project =
      clean(
        req.body?.project,
        300
      );


    const language =
      clean(
        req.body?.language,
        20
      );


    const history =
      req.body?.history;


    if (!question) {

      return res.status(400).json({

        ok: false,

        error:
          "Please type a question first."

      });

    }


    try {

      const answer =
        await answerWithAI({

          question,
          course,
          project,
          language,
          history

        });


      return res.json({

        ok: true,

        answer

      });

    }

    catch (error) {

      console.error(
        "AI Teacher /api/ask error:",
        error
      );


      return res.status(500).json({

        ok: false,

        error:
          error?.message ||
          "Gemini AI Teacher could not answer right now."

      });

    }

  }
);


/* =========================================================
   COMPATIBILITY ENDPOINT
   ========================================================= */

app.post(
  "/api/ai",
  async (req, res) => {

    const question =
      clean(
        req.body?.question
      );


    const course =
      clean(
        req.body?.course,
        200
      );


    const project =
      clean(
        req.body?.project ||
        req.body?.lessonId,
        300
      );


    const language =
      clean(
        req.body?.language,
        20
      );


    const history =
      req.body?.history;


    if (!question) {

      return res.status(400).json({

        ok: false,

        error:
          "Please type a question first."

      });

    }


    try {

      const answer =
        await answerWithAI({

          question,
          course,
          project,
          language,
          history

        });


      return res.json({

        ok: true,

        answer

      });

    }

    catch (error) {

      console.error(
        "AI Teacher /api/ai error:",
        error
      );


      return res.status(500).json({

        ok: false,

        error:
          error?.message ||
          "Gemini AI Teacher could not answer right now."

      });

    }

  }
);


/* =========================================================
   HEALTH CHECK
   ========================================================= */

app.get(
  "/api/health",
  (_req, res) => {

    res.json({

      ok: true,

      aiConfigured:
        Boolean(
          GEMINI_API_KEY
        ),

      provider:
        "Google Gemini",

      model:
        GEMINI_MODEL,

      service:
        "Joining Hands AI Teacher"

    });

  }
);


/* =========================================================
   AI TEST ENDPOINT
   ========================================================= */

app.get(
  "/api/ai-test",
  async (_req, res) => {

    if (!GEMINI_API_KEY) {

      return res.status(500).json({

        ok: false,

        error:
          "GEMINI_API_KEY is not configured in Render."

      });

    }


    try {

      const answer =
        await answerWithAI({

          question:
            "Reply with exactly: AI Teacher is working.",

          course:
            "General Computer Learning",

          project:
            "System Test",

          language:
            "en",

          history:
            []

        });


      return res.json({

        ok: true,

        answer

      });

    }

    catch (error) {

      console.error(
        "Gemini test error:",
        error
      );


      return res.status(500).json({

        ok: false,

        error:
          error?.message ||
          "Gemini test failed."

      });

    }

  }
);


/* =========================================================
   FRONTEND FALLBACK
   ========================================================= */

app.use(
  (req, res, next) => {

    if (
      req.method === "GET" &&
      !req.path.startsWith("/api/")
    ) {

      return res.sendFile(

        path.join(
          publicDir,
          "index.html"
        )

      );

    }

    next();

  }
);


/* =========================================================
   START SERVER
   ========================================================= */

app.listen(
  PORT,
  "0.0.0.0",
  () => {

    console.log(
      `Joining Hands AI Computer Learning Lab running on port ${PORT}`
    );

    console.log(
      "Gemini AI configured:",
      Boolean(
        GEMINI_API_KEY
      )
    );

    console.log(
      "Gemini model:",
      GEMINI_MODEL
    );

  }
);
