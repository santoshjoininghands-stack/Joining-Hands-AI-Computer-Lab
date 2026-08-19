const curriculum = {
  "MS Word": [
    { id: 1, title: "Project 1", topic: "MS Word Practical Project", description: "Complete the project by following the example." },
    { id: 2, title: "Project 2", topic: "MS Word Practical Project", description: "Complete the project by following the example." },
    { id: 3, title: "Project 3", topic: "MS Word Practical Project", description: "Complete the project by following the example." },
    { id: 4, title: "Project 4", topic: "MS Word Practical Project", description: "Complete the project by following the example." },
    { id: 5, title: "Project 5", topic: "MS Word Practical Project", description: "Complete the project by following the example." },
    { id: 6, title: "Project 6", topic: "MS Word Practical Project", description: "Complete the project by following the example." },
    { id: 7, title: "Project 7", topic: "Visitor's Information Sheet", description: "Prepare a visitor's information sheet in MS Word." },
    { id: 8, title: "Project 8", topic: "Sales Chart", description: "Create a sales chart and present information using tables and charts." },
    { id: 9, title: "Project 9", topic: "MS Word Practical Project", description: "Complete the project by following the example." },
    { id: 10, title: "Project 10", topic: "MS Word Practical Project", description: "Complete the project by following the example." },
    { id: 11, title: "Project 11", topic: "MS Word Practical Project", description: "Complete the project by following the example." },
    { id: 12, title: "Project 12", topic: "MS Word Practical Project", description: "Complete the project by following the example." },
    { id: 13, title: "Project 13", topic: "Education", description: "Create an educational information page using MS Word." },
    { id: 14, title: "Project 14", topic: "Kid Helper", description: "Create an attractive information page using text, shapes and images." }
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


// --------------------------------------------------
// HOME PAGE
// --------------------------------------------------

function showHome() {
  const app = document.getElementById("app");

  if (!app) {
    console.error("Element with id='app' was not found.");
    return;
  }

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


// --------------------------------------------------
// COURSE PAGE
// --------------------------------------------------

function showCourse(course) {
  const app = document.getElementById("app");

  if (!app) return;

  const projects = curriculum[course];

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

      ${projects.map(item => {

        // Only MS Word has uploaded project images
        let imageHTML = "";

        if (course === "MS Word") {
          imageHTML = `
            <div class="project-image">
              <img
                src="/Project ${item.id}.png"
                alt="${item.title}"
                onerror="this.parentElement.style.display='none';"
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

            <button
              onclick="showLesson('${course}', ${item.id})">
              Open Project
            </button>

          </div>

        `;

      }).join("")}

    </div>
  `;
}


// --------------------------------------------------
// PROJECT / LESSON PAGE
// --------------------------------------------------

function showLesson(course, id) {

  const lesson = curriculum[course].find(
    item => item.id === id
  );

  if (!lesson) {
    alert("Project not found.");
    return;
  }

  const app = document.getElementById("app");

  if (!app) return;

  let imageHTML = "";

  if (course === "MS Word") {

    imageHTML = `
      
      <div class="example-section">

        <h2>Example Project</h2>

        <p>
          Study the example carefully before creating your own copy.
        </p>

        <div class="large-project-image">

          <img
            src="/Project ${id}.png"
            alt="${lesson.title} example"
          >

        </div>

      </div>

    `;
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

        <h2>Instructions</h2>

        <div class="step">

          <strong>Step 1</strong>

          <p>
            Look carefully at the example project.
          </p>

        </div>


        <div class="step">

          <strong>Step 2</strong>

          <p>
            Open Microsoft ${course === "MS Word" ? "Word" : course}.
          </p>

        </div>


        <div class="step">

          <strong>Step 3</strong>

          <p>
            Create your own copy of the project.
            Do not simply copy the image.
          </p>

        </div>


        <div class="step">

          <strong>Step 4</strong>

          <p>
            Try to match the formatting, layout,
            text, tables, images and shapes shown
            in the example.
          </p>

        </div>


        <div class="step">

          <strong>Step 5</strong>

          <p>
            Check your work carefully before finishing.
          </p>

        </div>

      </div>


      <div class="practice-box">

        <h2>🎯 Practice Task</h2>

        <p>
          Now create this project yourself in Microsoft ${course === "MS Word" ? "Word" : course}.
        </p>

        <p>
          Keep this website open while you work so that
          you can look at the example whenever you need help.
        </p>

        <button onclick="startPractice()">
          Start Practice
        </button>

      </div>


      <div class="help-box">

        <h2>❓ Need Help?</h2>

        <p>
          Don't know how to do something?
          Ask your teacher or use the help option.
        </p>

        <button onclick="showHelp()">
          Ask for Help
        </button>

      </div>

    </div>

  `;
}


// --------------------------------------------------
// PRACTICE BUTTON
// --------------------------------------------------

function startPractice() {

  alert(
    "Practice started!\n\n" +
    "Open Microsoft Word and create your own copy of the project."
  );

}


// --------------------------------------------------
// HELP BUTTON
// --------------------------------------------------

function showHelp() {

  alert(
    "Need help?\n\n" +
    "You can ask your teacher how to perform the required task."
  );

}


// --------------------------------------------------
// START WEBSITE
// --------------------------------------------------

document.addEventListener(
  "DOMContentLoaded",
  function () {

    showHome();

  }
);
