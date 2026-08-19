const curriculum = {
  "MS Word": Array.from({ length: 14 }, (_, i) => ({
    id: i + 1,
    title: `Project ${i + 1}`,
    topic: `MS Word Practical Project ${i + 1}`,
    description: `Complete this practical MS Word project by following the instructions and creating the document yourself.`,
    image: `/Project ${i + 1}.png`
  })),

  "MS Excel": [
    {
      id: 1,
      title: "Project 1",
      topic: "Basic Excel",
      description: "Learn rows, columns, cells and basic data entry."
    },
    {
      id: 2,
      title: "Project 2",
      topic: "Basic Formulas",
      description: "Practice SUM, AVERAGE, MIN and MAX."
    },
    {
      id: 3,
      title: "Project 3",
      topic: "Formatting",
      description: "Format an Excel worksheet professionally."
    }
  ],

  "MS PowerPoint": [
    {
      id: 1,
      title: "Project 1",
      topic: "Create a Presentation",
      description: "Create your first PowerPoint presentation."
    },
    {
      id: 2,
      title: "Project 2",
      topic: "Design and Formatting",
      description: "Practice themes, pictures, shapes and text."
    }
  ],

  "English": [
    {
      id: 1,
      title: "Lesson 1",
      topic: "Basic English",
      description: "Practice basic English words and sentences."
    },
    {
      id: 2,
      title: "Lesson 2",
      topic: "Daily Conversation",
      description: "Practice common conversations used in daily life."
    }
  ]
};


// =========================
// HOME PAGE
// =========================

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


// =========================
// COURSE PAGE
// =========================

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

      ${curriculum[course].map(item => `

        <div class="lesson-card">

          ${
            item.image
              ? `<img
                  class="project-thumb"
                  src="${item.image}"
                  alt="${item.title}"
                  onerror="this.style.display='none'"
                >`
              : ""
          }

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

      `).join("")}

    </div>
  `;
}


// =========================
// PROJECT PAGE
// =========================

function showLesson(course, id) {

  const lesson =
    curriculum[course].find(item => item.id === id);

  const app = document.getElementById("app");

  if (course === "MS Word") {
    showWordProject(lesson);
    return;
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

      <p>${lesson.description}</p>

      <div class="practice-box">

        <h3>🎯 Practice Task</h3>

        <p>
          Complete this practical task yourself.
        </p>

      </div>

    </div>
  `;
}


// =========================
// MS WORD PROJECT
// =========================

function showWordProject(lesson) {

  const app = document.getElementById("app");

  app.innerHTML = `

    <button
      class="back"
      onclick="showCourse('MS Word')">
      ← Back to MS Word Projects
    </button>

    <div class="word-practice-page">

      <!-- INSTRUCTIONS -->

      <div class="instructions-panel">

        <h1>${lesson.title}</h1>

        <h2>${lesson.topic}</h2>

        <h3>📋 Instructions</h3>

        <ol>

          <li>
            Read the project carefully.
          </li>

          <li>
            Look at the project example below.
          </li>

          <li>
            Create the same document in the practice area.
          </li>

          <li>
            Use the formatting tools to make your document
            look similar to the example.
          </li>

          <li>
            Check your work before downloading it.
          </li>

        </ol>

        <div class="task-box">

          <h3>🎯 Your Task</h3>

          <p>
            Recreate <strong>${lesson.title}</strong>
            as closely as possible using MS Word skills.
          </p>

        </div>

        ${
          lesson.image
            ? `
              <h3>👀 Project Example</h3>

              <div class="example-image-box">

                <img
                  src="${lesson.image}"
                  class="example-image"
                  alt="${lesson.title}"
                >

              </div>
            `
            : ""
        }

      </div>


      <!-- PRACTICE AREA -->

      <div class="practice-panel">

        <div class="practice-header">

          <div>

            <h2>📝 Practice in Word</h2>

            <p>
              Type and format your document below.
            </p>

          </div>

          <button onclick="downloadWordDocument()">
            ⬇ Download Word
          </button>

        </div>


        <!-- TOOLBAR -->

        <div class="word-toolbar">

          <button onclick="formatText('bold')">
            <b>B</b>
          </button>

          <button onclick="formatText('italic')">
            <i>I</i>
          </button>

          <button onclick="formatText('underline')">
            <u>U</u>
          </button>

          <select onchange="changeFontSize(this.value)">

            <option value="">Size</option>
            <option value="12">12</option>
            <option value="14">14</option>
            <option value="16">16</option>
            <option value="18">18</option>
            <option value="20">20</option>
            <option value="24">24</option>
            <option value="28">28</option>

          </select>


          <button onclick="formatText('justifyLeft')">
            Left
          </button>

          <button onclick="formatText('justifyCenter')">
            Center
          </button>

          <button onclick="formatText('justifyRight')">
            Right
          </button>


          <button onclick="formatText('insertUnorderedList')">
            • List
          </button>

        </div>


        <!-- EDITOR -->

        <div
          id="wordEditor"
          class="word-editor"
          contenteditable="true"
          spellcheck="true"
        >

          <h2>Start Your Project</h2>

          <p>
            Click here and start creating your document.
          </p>

          <p>
            Replace this text with your own work.
          </p>

        </div>


        <div class="editor-footer">

          <button onclick="clearEditor()">
            Clear
          </button>

          <button onclick="savePractice()">
            💾 Save Practice
          </button>

          <span id="saveMessage"></span>

        </div>

      </div>

    </div>
  `;
}


// =========================
// WORD FORMATTING
// =========================

function formatText(command) {

  document.execCommand(command, false, null);

  document.getElementById("wordEditor").focus();
}


function changeFontSize(size) {

  if (!size) return;

  document.execCommand(
    "fontSize",
    false,
    "7"
  );

  const fonts =
    document.querySelectorAll(
      "#wordEditor font[size='7']"
    );

  fonts.forEach(font => {

    font.removeAttribute("size");

    font.style.fontSize =
      `${size}px`;

  });

}


// =========================
// SAVE PRACTICE
// =========================

function savePractice() {

  const editor =
    document.getElementById("wordEditor");

  localStorage.setItem(
    "joiningHandsWordPractice",
    editor.innerHTML
  );

  document.getElementById(
    "saveMessage"
  ).textContent =
    "✓ Your practice has been saved on this device.";

}


// =========================
// CLEAR
// =========================

function clearEditor() {

  if (
    confirm(
      "Are you sure you want to clear your work?"
    )
  ) {

    document.getElementById(
      "wordEditor"
    ).innerHTML = "";

  }

}


// =========================
// DOWNLOAD AS WORD FILE
// =========================

function downloadWordDocument() {

  const editor =
    document.getElementById("wordEditor");

  const content =
    editor.innerHTML;

  const html = `

    <html>

      <head>

        <meta charset="UTF-8">

        <style>

          body {
            font-family: Arial;
            margin: 40px;
          }

        </style>

      </head>

      <body>

        ${content}

      </body>

    </html>
  `;


  const blob =
    new Blob(
      [html],
      {
        type:
          "application/msword"
      }
    );


  const url =
    URL.createObjectURL(blob);


  const link =
    document.createElement("a");

  link.href = url;

  link.download =
    "Joining-Hands-${lessonTitleForDownload()}.doc";

  link.click();

  URL.revokeObjectURL(url);
}


function lessonTitleForDownload() {

  const editor =
    document.getElementById("wordEditor");

  return "Practice";
}


// =========================
// START
// =========================

document.addEventListener(
  "DOMContentLoaded",
  showHome
);
