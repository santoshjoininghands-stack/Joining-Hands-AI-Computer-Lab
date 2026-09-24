import express from "express";
import OpenAI from "openai";
import path from "path";
import { fileURLToPath } from "url";
import "dotenv/config";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, "public");

app.use(express.json({ limit: "1mb" }));
app.use(express.static(publicDir));

const port = Number(process.env.PORT || 3000);

const apiKey = String(
  process.env.OPENAI_API_KEY || ""
).trim();

const model =
  String(
    process.env.OPENAI_MODEL ||
    "gpt-5.6-luna"
  ).trim();

const client = apiKey
  ? new OpenAI({ apiKey })
  : null;


/* =========================================================
   HELPERS
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
    .map(item => {

      const role =
        item?.role === "user"
          ? "user"
          : "assistant";

      const content =
        clean(item?.content, 3000);

      return {
        role,
        content
      };

    })
    .filter(item => item.content);

}


/* =========================================================
   AI TEACHER
   ========================================================= */

async function answerWithAI({
  question,
  course,
  project,
  language,
  history
}) {

  if (!client) {

    throw new Error(
      "AI Teacher is not configured on the server. Please add OPENAI_API_KEY in Render → Environment."
    );

  }


  const preferredLanguage =
    language === "hi"
      ? "Hindi"
      : "English or Hinglish depending on the student's question";


  const instructions = [

    "You are the Joining Hands AI Teacher.",

    "You teach beginner students computer skills.",

    "Be patient, friendly and practical.",

    `Preferred response language: ${preferredLanguage}.`,

    "If the student asks in Hindi or Hinglish, answer naturally in Hindi/Hinglish.",

    "If the student asks in English, answer in clear simple English.",

    "For computer questions, explain what the option does, when it is useful, give a realistic example, and then give numbered step-by-step instructions.",

    "Use the exact Microsoft Word command names when relevant so the student can find the same command in Word.",

    "Do not claim that you clicked, opened or changed anything on the student's computer.",

    "If the student asks something unrelated, answer briefly and safely, then guide them back to computer learning when appropriate.",

    `Current course: ${course || "General Computer Learning"}`,

    `Current lesson/project/tab: ${project || "General"}`

  ].join("\n");


  const priorMessages =
    cleanHistory(history);


  const input = [

    ...priorMessages,

    {
      role: "user",
      content: question
    }

  ];


  const response =
    await client.responses.create({

      model,

      instructions,

      input

    });


  const answer =
    String(
      response?.output_text || ""
    ).trim();


  if (!answer) {

    throw new Error(
      "OpenAI returned no text for this question."
    );

  }


  return answer;

}


/* =========================================================
   MAIN AI ENDPOINT
   ========================================================= */

app.post("/api/ask", async (req, res) => {

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
      "AI Teacher error:",
      error
    );


    const status =
      Number(
        error?.status
      ) || 500;


    let message =
      "AI Teacher could not answer right now. Please try again.";


    if (
      error?.code ===
      "insufficient_quota"
    ) {

      message =
        "The OpenAI API account has no available API credits/quota.";

    }

    else if (
      status === 401
    ) {

      message =
        "The OpenAI API key is invalid or not accepted.";

    }

    else if (
      status === 429
    ) {

      message =
        "The AI service is temporarily rate-limited. Please try again in a moment.";

    }

    else if (
      status === 404
    ) {

      message =
        `The configured AI model "${model}" is not available for this API account.`;

    }

    else if (
      error?.message &&
      !String(error.message)
        .toLowerCase()
        .includes("api key")
    ) {

      message =
        String(error.message)
          .slice(0, 500);

    }


    return res.status(status >= 400 && status < 600 ? status : 500)
      .json({

        ok: false,

        error: message

      });

  }

});


/* =========================================================
   COMPATIBILITY ENDPOINT
   ========================================================= */

app.post("/api/ai", async (req, res) => {

  req.body = req.body || {};

  try {

    const answer =
      await answerWithAI({

        question:
          clean(req.body.question),

        course:
          clean(req.body.course, 200),

        project:
          clean(
            req.body.project ||
            req.body.lessonId,
            300
          ),

        language:
          clean(req.body.language, 20),

        history:
          req.body.history

      });


    return res.json({

      ok: true,

      answer

    });

  }

  catch (error) {

    console.error(
      "Compatibility AI endpoint error:",
      error
    );

    return res.status(
      Number(error?.status) || 500
    ).json({

      ok: false,

      error:
        error?.message ||
        "AI Teacher could not answer."

    });

  }

});


/* =========================================================
   HEALTH CHECK
   ========================================================= */

app.get("/api/health", (_req, res) => {

  res.json({

    ok: true,

    aiConfigured:
      Boolean(apiKey),

    model,

    service:
      "Joining Hands AI Teacher"

  });

});


/* =========================================================
   FRONTEND FALLBACK
   ========================================================= */

app.use((req, res, next) => {

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

});


/* =========================================================
   START
   ========================================================= */

app.listen(
  port,
  "0.0.0.0",
  () => {

    console.log(
      "Joining Hands AI Computer Learning Lab running on port",
      port
    );

    console.log(
      "Public directory:",
      publicDir
    );

    console.log(
      "AI configured:",
      Boolean(apiKey)
    );

    console.log(
      "AI model:",
      model
    );

  }
);
