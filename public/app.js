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
    },
    {
      id: 5,
      title: "Project 5",
      topic: "MS Word Practical Project",
      description: "Complete the practical MS Word project by following the sample."
    },
    {
      id: 6,
      title: "Project 6",
      topic: "MS Word Practical Project",
      description: "Complete the practical MS Word project by following the sample."
    },
    {
      id: 7,
      title: "Project 7",
      topic: "Prepare a Visitor's Information Sheet",
      description: "Create a professional visitor's information sheet using text, shapes, formatting and page layout."
    },
    {
      id: 8,
      title: "Project 8",
      topic: "Sales Chart for Six Months",
      description: "Create a sales report using tables, charts and formatting."
    },
    {
      id: 9,
      title: "Project 9",
      topic: "Global Climate Change",
      description: "Create an informative document about global climate change using text, tables, charts and graphics."
    },
    {
      id: 10,
      title: "Project 10",
      topic: "Globalization",
      description: "Create an informative document about globalization using text, shapes, diagrams and charts."
    },
    {
      id: 11,
      title: "Project 11",
      topic: "Comparative Analysis of Admission in Colleges/University",
      description: "Prepare a comparative analysis using tables, data and charts."
    },
    {
      id: 12,
      title: "Project 12",
      topic: "Water Pollution",
      description: "Create an awareness document about water pollution using text, shapes and graphics."
    },
    {
      id: 13,
      title: "Project 13",
      topic: "Education",
      description: "Create an educational document using text, diagrams, tables and charts."
    },
    {
      id: 14,
      title: "Project 14",
      topic: "Kid Helper",
      description: "Create a resource document for teachers and parents using text, images, shapes and charts."
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
    <button class="back" onclick="showHome()">
      ← Back to Courses
    </button>

    <div class="hero">
      <h1>${course}</h1>
      <p>Select a lesson/project to start learning.</p>
    </div>

    <div class="lesson-grid">
      ${curriculum[course].map(item => `
        <div class="lesson-card">

          ${
            course === "MS Word"
              ? `
                <img
                  src="/Project%20${item.id}.png"
                  alt="${item.title}"
                  class="project-thumb"
                  onerror="this.style.display='none'"
                >
              `
              : ""
          }

          <h3>${item.title}</h3>

          <p>
            <strong>${item.topic}</strong>
          </p>

          <p>${item.description}</p>

          <button onclick="showLesson('${course}', ${item.id})">
            Open Project
          </button>

        </div>
      `).join("")}
    </div>
  `;
}


// Lesson / Project page
function showLesson(course, id) {
  const lesson = curriculum[course].find(item => item.id === id);

  if (!lesson) return;

  const app = document.getElementById("app");

  const projectImage =
    course === "MS Word"
      ? `
        <div class="project-preview">
          <img
            src="/Project%20${id}.png"
            alt="${lesson.title}"
            class="project-image"
          >
        </div>
      `
      : "";

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

      ${projectImage}

      <div class="step">
        <strong>Step 1:</strong>
        Open ${course}.
      </div>

      <div class="step">
        <strong>Step 2:</strong>
        Look carefully at the sample project shown above.
      </div>

      <div class="step">
        <strong>Step 3:</strong>
        Create the same project yourself in ${course}.
      </div>

      <div class="step">
        <strong>Step 4:</strong>
        Check your work and make corrections.
      </div>

      <div class="practice-box">
        <h3>🎯 Practice Task</h3>

        <p>
          Now create this project yourself without copying directly.
          Try to match the layout, formatting, text, tables, shapes,
          charts and images shown in the sample.
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
