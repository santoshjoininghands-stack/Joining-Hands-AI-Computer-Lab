const curriculum = {
  "MS Word": [
    {
      id: 1,
      title: "Project 1",
      topic: "Introduction to MS Word",
      description: "Learn the basic tools and create your first practical document."
    },
    {
      id: 2,
      title: "Project 2",
      topic: "Text Formatting",
      description: "Practice font, size, bold, italic, underline and alignment."
    },
    {
      id: 3,
      title: "Project 3",
      topic: "Tables",
      description: "Create and format tables in MS Word."
    },
    {
      id: 4,
      title: "Project 4",
      topic: "Book Cover Page",
      description: "Prepare a professional cover page of a book."
    }
  ],

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


// Main page
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
          <p>${curriculum[course].length} practical lessons/projects</p>
          <button onclick="showCourse('${course}')">
            Start Learning
          </button>
        </div>
      `).join("")}
    </div>
  `;
}


// Course page
function showCourse(course) {
  const app = document.getElementById("app");

  app.innerHTML = `
    <button class="back" onclick="showHome()">← Back to Courses</button>

    <div class="hero">
      <h1>${course}</h1>
      <p>Select a lesson/project to start learning.</p>
    </div>

    <div class="lesson-grid">
      ${curriculum[course].map(item => `
        <div class="lesson-card">
          <h3>${item.title}</h3>
          <p><strong>${item.topic}</strong></p>
          <p>${item.description}</p>

          <button onclick="showLesson('${course}', ${item.id})">
            Open Lesson
          </button>
        </div>
      `).join("")}
    </div>
  `;
}


// Lesson page
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

      <p>
        ${lesson.description}
      </p>

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

    </div>
  `;
}


// Start website
document.addEventListener("DOMContentLoaded", showHome);
