const curriculum = {
  "MS Word": [
    { id: 1, title: "Project 1", topic: "MS Word Practical Project", description: "Complete the project by following the example." },
    { id: 2, title: "Project 2", topic: "MS Word Practical Project", description: "Complete the project by following the example." },
    { id: 3, title: "Project 3", topic: "MS Word Practical Project", description: "Complete the project by following the example." },
    { id: 4, title: "Project 4", topic: "MS Word Practical Project", description: "Complete the project by following the example." },
    { id: 5, title: "Project 5", topic: "MS Word Practical Project", description: "Complete the project by following the example." },
    { id: 6, title: "Project 6", topic: "MS Word Practical Project", description: "Complete the project by following the example." },
    { id: 7, title: "Project 7", topic: "Visitor's Information Sheet", description: "Prepare a visitor's information sheet in MS Word." },
    { id: 8, title: "Project 8", topic: "Sales Chart", description: "Create a sales chart using tables and charts." },
    { id: 9, title: "Project 9", topic: "MS Word Practical Project", description: "Complete the project by following the example." },
    { id: 10, title: "Project 10", topic: "MS Word Practical Project", description: "Complete the project by following the example." },
    { id: 11, title: "Project 11", topic: "MS Word Practical Project", description: "Complete the project by following the example." },
    { id: 12, title: "Project 12", topic: "MS Word Practical Project", description: "Complete the project by following the example." },
    { id: 13, title: "Project 13", topic: "Education", description: "Create an educational information page using MS Word." },
    { id: 14, title: "Project 14", topic: "Kid Helper", description: "Create an attractive information page using text, shapes and images." }
  ],

  "MS Excel": [
    { id: 1, title: "Project 1", topic: "Basic Excel", description: "Learn rows, columns, cells and basic data entry." },
    { id: 2, title: "Project 2", topic: "Basic Formulas", description: "Practice SUM, AVERAGE, MIN and MAX." },
    { id: 3, title: "Project 3", topic: "Formatting", description: "Format an Excel worksheet professionally." }
  ],

  "MS PowerPoint": [
    { id: 1, title: "Project 1", topic: "Create a Presentation", description: "Create your first PowerPoint presentation." },
    { id: 2, title: "Project 2", topic: "Design and Formatting", description: "Practice themes, pictures, shapes and text." }
  ],

  "English": [
    { id: 1, title: "Lesson 1", topic: "Basic English", description: "Practice basic English words and sentences." },
    { id: 2, title: "Lesson 2", topic: "Daily Conversation", description: "Practice common conversations used in daily life." }
  ]
};


// ===============================
// HOME
// ===============================

function showHome() {

  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="hero">
      <h1>Learn & Practice</h1>

      <p>
        Welcome to Joining Hands AI Computer Learning & Practical Lab.
        Choose a course and start learning through practical projects.
      </p>
    </div>

    <h2>Courses</h2>

    <div class="grid">

      ${Object.keys(curriculum).map(course => `

        <div class="course-card">

          <h3>${course}</h3>

          <p>
            ${curriculum[course].length}
            practical lessons/projects
          </p>

          <button onclick="showCourse('${course}')">
            Start Learning
          </button>

        </div>

      `).join("")}

    </div>
  `;
}


// ===============================
// COURSE
// ===============================

function showCourse(course) {

  const app = document.getElementById("app");

  app.innerHTML = `

    <button class="back" onclick="showHome()">
      ← Back to Courses
    </button>

    <div class="hero">

      <h1>${course}</h1>

      <p>
        Select a lesson/project to start learning.
      </p>

    </div>

    <div class="lesson-grid">

      ${curriculum[course].map(item => {

        let imageHTML = "";

        if (course === "MS Word") {

          imageHTML = `
            <div class="project-image">
              <img
                src="/Project ${item.id}.png"
                alt="${item.title}"
              >
            </div>
          `;
        }

        return `

          <div class="lesson-card">

            ${imageHTML}

            <h3>${item.title}</h3>

            <p>
              <strong>${item.topic}</strong>
            </p>

            <p>
              ${item.description}
            </p>

            <button onclick="showLesson('${course}', ${item.id})">
              Open Project
            </button>

          </div>

        `;

      }).join("")}

    </div>
  `;
}


// ===============================
// PROJECT PAGE
// ===============================

function showLesson(course, id) {
  const lesson = curriculum[course].find(item => item.id === id);

  const app = document.getElementById("app");

  app.innerHTML = `
    <button class="back" onclick="showCourse('${course}')">
      ← Back to ${course}
    </button>

    <div class="lesson-content">

      <h1>${lesson.title}</h1>

      <h2>${lesson.topic}</h2>

      <p>${lesson.description}</p>

      <div class="step">
        <strong>Step 1:</strong>
        Open ${course}.
      </div>

      <div class="step">
        <strong>Step 2:</strong>
        Follow the instructions shown in this lesson.
      </div>

      <div class="step">
        <strong>Step 3:</strong>
        Complete the practical project yourself.
      </div>

      <div class="step">
        <strong>Step 4:</strong>
        Check your work and make corrections.
      </div>

      <div class="practice-box">
        <h3>🎯 Practice Task</h3>

        <p>
          Now create the project yourself without copying the steps.
        </p>

        <button onclick="alert('Practice task started!')">
          Start Practice
        </button>
      </div>

      <!-- AI TEACHER -->
      <div class="ai-box">

        <h2>💬 Ask a Question</h2>

        <p>
          Don't know how to do something? Ask your AI Teacher.
        </p>

        <textarea
          id="aiQuestion"
          placeholder="Example: How do I add a shape in MS Word?"
          rows="5"
        ></textarea>

        <button id="askAIButton" onclick="askAITeacher('${course}', '${lesson.title}')">
          🤖 Ask AI Teacher
        </button>

        <div id="aiLoading" style="display:none;">
          ⏳ AI Teacher is thinking...
        </div>

        <div id="aiAnswer" class="ai-answer" style="display:none;">
        </div>

      </div>

    </div>
  `;
}


// ===============================
// AI TEACHER
// ===============================

async function askAITeacher(course, project) {

  const questionBox = document.getElementById("aiQuestion");
  const answerBox = document.getElementById("aiAnswer");
  const loadingBox = document.getElementById("aiLoading");
  const button = document.getElementById("askAIButton");

  const question = questionBox.value.trim();

  if (!question) {
    alert("Please type your question first.");
    return;
  }

  // Show loading
  loadingBox.style.display = "block";
  answerBox.style.display = "none";
  button.disabled = true;
  button.innerText = "⏳ Thinking...";

  try {

    const response = await fetch("/api/ask", {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        question: question,
        course: course,
        project: project
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Something went wrong.");
    }

    // Show AI answer
    answerBox.innerHTML = `
      <h3>💡 AI Teacher</h3>
      <div class="ai-response"></div>
    `;

    // Use textContent so AI response is displayed safely
    answerBox.querySelector(".ai-response").textContent = data.answer;

    answerBox.style.display = "block";

  } catch (error) {

    console.error("AI Teacher Error:", error);

    answerBox.innerHTML = `
      <h3>❌ Unable to get answer</h3>
      <p>
        ${error.message}
      </p>
      <p>
        Please try again in a moment.
      </p>
    `;

    answerBox.style.display = "block";

  } finally {

    loadingBox.style.display = "none";
    button.disabled = false;
    button.innerText = "🤖 Ask AI Teacher";
  }
}


  app.innerHTML = `

    <button
      class="back"
      onclick="showCourse('${course}')">

      ← Back to ${course}

    </button>


    <div class="lesson-content">

      <h1>${lesson.title}</h1>

      <h2>${lesson.topic}</h2>

      <p>
        ${lesson.description}
      </p>


      ${imageHTML}


      <div class="instructions">

        <h2>📋 Instructions</h2>

        <div class="step">
          <strong>Step 1</strong>
          <p>Look carefully at the example project.</p>
        </div>

        <div class="step">
          <strong>Step 2</strong>
          <p>Open Microsoft Word on your computer.</p>
        </div>

        <div class="step">
          <strong>Step 3</strong>
          <p>Create a new blank document.</p>
        </div>

        <div class="step">
          <strong>Step 4</strong>
          <p>
            Create your own copy of the project.
            Do not simply copy the picture.
          </p>
        </div>

        <div class="step">
          <strong>Step 5</strong>
          <p>
            Try to match the text, formatting, tables,
            images, shapes and layout.
          </p>
        </div>

        <div class="step">
          <strong>Step 6</strong>
          <p>
            Check your work carefully before finishing.
          </p>
        </div>

      </div>


      <!-- PRACTICE -->

      <div class="practice-box">

        <h2>🎯 Practice</h2>

        <p>
          Now create this project yourself in Microsoft Word.
        </p>

        <button
          class="practice-button"
          onclick="openWord()">

          📝 Open Microsoft Word

        </button>

        <p class="small-note">
          If Microsoft Word does not open automatically,
          open Word manually from your computer.
        </p>

      </div>


      <!-- HELP -->

      <div class="help-box">

        <h2>❓ Need Help?</h2>

        <p>
          Don't know how to do something?
          Ask your question here.
        </p>

        <button
          class="help-button"
          onclick="showHelp()">

          💬 Ask a Question

        </button>

      </div>

    </div>

  `;
}


// ===============================
// OPEN WORD
// ===============================

function openWord() {

  // Try to open Microsoft Word
  window.location.href = "ms-word:";

  // Show instructions as fallback
  setTimeout(function () {

    alert(
      "Microsoft Word could not be opened automatically.\n\n" +
      "Please open Microsoft Word from your computer and create a new blank document."
    );

  }, 1500);
}


// ===============================
// HELP PANEL
// ===============================

function showHelp() {

  const old = document.getElementById("helpModal");

  if (old) {
    old.remove();
  }


  document.body.insertAdjacentHTML("beforeend", `

    <div id="helpModal" class="help-modal">

      <div class="help-modal-content">

        <button
          class="close-help"
          onclick="closeHelp()">

          ×

        </button>

        <h2>💬 Ask a Question</h2>

        <p>
          Type your question below.
        </p>

        <textarea
          id="studentQuestion"
          placeholder="Example: How do I insert a table in MS Word?"
        ></textarea>

        <button
          class="ask-button"
          onclick="askQuestion()">

          Ask Question

        </button>

        <div id="helpAnswer"></div>

      </div>

    </div>

  `);
}


// ===============================
// CLOSE HELP
// ===============================

function closeHelp() {

  const modal = document.getElementById("helpModal");

  if (modal) {
    modal.remove();
  }

}


// ===============================
// ASK QUESTION
// ===============================

function askQuestion() {

  const question =
    document.getElementById("studentQuestion").value.trim();

  const answer =
    document.getElementById("helpAnswer");


  if (!question) {

    answer.innerHTML = `
      <p class="error-message">
        Please type your question first.
      </p>
    `;

    return;
  }


  answer.innerHTML = `

    <div class="help-answer">

      <h3>💡 Help</h3>

      <p>
        Your question is:
      </p>

      <p>
        <strong>${escapeHTML(question)}</strong>
      </p>

      <p>
        AI help will be connected here in the next step.
        For now, ask your teacher if you need immediate help.
      </p>

    </div>

  `;
}


// ===============================
// IMAGE VIEWER
// ===============================

function openImage(imageSrc) {

  document.body.insertAdjacentHTML("beforeend", `

    <div
      id="imageModal"
      class="image-modal"
      onclick="closeImage()">

      <div class="image-modal-content">

        <img src="${imageSrc}">

        <p>
          Click anywhere to close
        </p>

      </div>

    </div>

  `);
}


function closeImage() {

  const modal =
    document.getElementById("imageModal");

  if (modal) {
    modal.remove();
  }

}


// ===============================
// SECURITY
// ===============================

function escapeHTML(text) {

  const div = document.createElement("div");

  div.textContent = text;

  return div.innerHTML;

}


// ===============================
// START
// ===============================

document.addEventListener(
  "DOMContentLoaded",
  showHome
);
