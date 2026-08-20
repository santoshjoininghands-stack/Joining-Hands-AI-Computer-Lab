// ==========================================================
// JOINING HANDS
// AI COMPUTER LEARNING & PRACTICAL LAB
// COMPLETE APP.JS
// ==========================================================


// ==========================================================
// SETTINGS
// ==========================================================

const WORD_HOME_IMAGE = "Home.png";


// ==========================================================
// CURRICULUM
// ==========================================================

const curriculum = {

  "MS Word": [

    {
      id: 1,
      title: "Project 1",
      topic: "MS Word Practical Project",
      description: "Complete the project by following the example.",
      image: "Project 1.png"
    },

    {
      id: 2,
      title: "Project 2",
      topic: "MS Word Practical Project",
      description: "Complete the project by following the example.",
      image: "Project 2.png"
    },

    {
      id: 3,
      title: "Project 3",
      topic: "MS Word Practical Project",
      description: "Complete the project by following the example.",
      image: "Project 3.png"
    },

    {
      id: 4,
      title: "Project 4",
      topic: "MS Word Practical Project",
      description: "Complete the project by following the example.",
      image: "Project 4.png"
    },

    {
      id: 5,
      title: "Project 5",
      topic: "MS Word Practical Project",
      description: "Complete the project by following the example.",
      image: "Project 5.png"
    },

    {
      id: 6,
      title: "Project 6",
      topic: "MS Word Practical Project",
      description: "Complete the project by following the example.",
      image: "Project 6.png"
    },

    {
      id: 7,
      title: "Project 7",
      topic: "Visitor's Information Sheet",
      description: "Prepare a visitor's information sheet in MS Word.",
      image: "Project 7.png"
    },

    {
      id: 8,
      title: "Project 8",
      topic: "Sales Chart",
      description: "Create a sales chart using tables and charts.",
      image: "Project 8.png"
    },

    {
      id: 9,
      title: "Project 9",
      topic: "MS Word Practical Project",
      description: "Complete the project by following the example.",
      image: "Project 9.png"
    },

    {
      id: 10,
      title: "Project 10",
      topic: "MS Word Practical Project",
      description: "Complete the project by following the example.",
      image: "Project 10.png"
    },

    {
      id: 11,
      title: "Project 11",
      topic: "MS Word Practical Project",
      description: "Complete the project by following the example.",
      image: "Project 11.png"
    },

    {
      id: 12,
      title: "Project 12",
      topic: "MS Word Practical Project",
      description: "Complete the project by following the example.",
      image: "Project 12.png"
    },

    {
      id: 13,
      title: "Project 13",
      topic: "Education",
      description: "Create an educational information page using MS Word.",
      image: "Project 13.png"
    },

    {
      id: 14,
      title: "Project 14",
      topic: "Kid Helper",
      description: "Create an attractive information page using text, shapes and images.",
      image: "Project 14.png"
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


// ==========================================================
// HOME PAGE
// ==========================================================

function showHome() {

  const app = document.getElementById("app");

  app.innerHTML = `

    <div class="hero">

      <h1>
        Learn & Practice
      </h1>

      <p>
        Welcome to Joining Hands AI Computer Learning
        & Practical Lab.
        Choose a course and start learning through
        practical projects.
      </p>

    </div>


    <h2>
      Courses
    </h2>


    <div class="grid">

      ${Object.keys(curriculum).map(course => `

        <div class="course-card">

          <h3>
            ${course}
          </h3>

          <p>
            ${curriculum[course].length}
            practical lessons/projects
          </p>

          <button
            onclick="showCourse('${course}')"
          >
            Start Learning
          </button>

        </div>

      `).join("")}

    </div>

  `;
}


// ==========================================================
// COURSE PAGE
// ==========================================================

function showCourse(course) {

  const app = document.getElementById("app");


  // --------------------------------------------------------
  // SPECIAL MS WORD PAGE
  // --------------------------------------------------------

  if (course === "MS Word") {

    app.innerHTML = `

      <button
        class="back"
        onclick="showHome()"
      >
        ← Back to Courses
      </button>


      <div class="hero course-hero">

        <h1>
          MS Word
        </h1>

        <p>
          Learn MS Word first and then practice
          through 14 practical projects.
        </p>

      </div>


      <div class="word-options">


        <!-- LEARNING -->

        <div class="word-option-card">

          <div class="option-icon">
            📚
          </div>

          <h2>
            Learning
          </h2>

          <p>
            Learn MS Word tabs, tools, formatting,
            shortcuts and their uses.
          </p>

          <button
            onclick="showWordLearning()"
          >
            📚 Start Learning
          </button>

        </div>


        <!-- PROJECTS -->

        <div class="word-option-card">

          <div class="option-icon">
            💻
          </div>

          <h2>
            Practical Projects
          </h2>

          <p>
            Practice all 14 MS Word practical
            projects with reference images.
          </p>

          <button
            onclick="showWordProjects()"
          >
            💻 Start Projects
          </button>

        </div>


      </div>

    `;

    return;
  }


  // --------------------------------------------------------
  // OTHER COURSES
  // --------------------------------------------------------

  app.innerHTML = `

    <button
      class="back"
      onclick="showHome()"
    >
      ← Back to Courses
    </button>


    <div class="hero course-hero">

      <h1>
        ${course}
      </h1>

      <p>
        Select a lesson/project to start learning.
      </p>

    </div>


    <div class="lesson-grid compact-grid">

      ${curriculum[course].map(item => `

        <div class="lesson-card compact-card">


          ${
            item.image
              ? `

                <div class="project-image">

                  <img
                    src="${item.image}"
                    alt="${item.title}"
                    onerror="this.style.display='none'"
                  >

                </div>

              `
              : ""
          }


          <h3>
            ${item.title}
          </h3>


          <p class="project-topic">
            ${item.topic}
          </p>


          <p class="project-description">
            ${item.description}
          </p>


          <button
            onclick="showLesson('${course}', ${item.id})"
          >
            Open Project
          </button>


        </div>

      `).join("")}

    </div>

  `;

}


// ==========================================================
// MS WORD LEARNING PAGE
// ==========================================================

function showWordLearning() {

  const app = document.getElementById("app");


  app.innerHTML = `

    <button
      class="back"
      onclick="showCourse('MS Word')"
    >
      ← Back to MS Word
    </button>


    <div class="hero course-hero">

      <h1>
        📚 MS Word Learning
      </h1>

      <p>
        Learn MS Word tabs, tools, formatting
        and keyboard shortcuts.
      </p>

    </div>


    <!-- TAB MENU -->

    <div class="word-tab-menu">


      <button
        class="active-tab"
        onclick="showWordTab('Home', this)"
      >
        🏠 Home
      </button>


      <button
        onclick="showWordTab('Insert', this)"
      >
        ➕ Insert
      </button>


      <button
        onclick="showWordTab('Design', this)"
      >
        🎨 Design
      </button>


      <button
        onclick="showWordTab('Layout', this)"
      >
        📄 Layout
      </button>


      <button
        onclick="showWordTab('References', this)"
      >
        📚 References
      </button>


      <button
        onclick="showWordTab('Mailings', this)"
      >
        ✉️ Mailings
      </button>


      <button
        onclick="showWordTab('Review', this)"
      >
        ✅ Review
      </button>


      <button
        onclick="showWordTab('View', this)"
      >
        👁️ View
      </button>


    </div>


    <div id="wordLearningContent">

      ${getHomeTabContent()}

    </div>

  `;

}


// ==========================================================
// WORD TAB SWITCHING
// ==========================================================

function showWordTab(tab, button) {


  document
    .querySelectorAll(".word-tab-menu button")
    .forEach(btn => {

      btn.classList.remove("active-tab");

    });


  if (button) {

    button.classList.add("active-tab");

  }


  const content =
    document.getElementById("wordLearningContent");


  if (!content) {
    return;
  }


  if (tab === "Home") {

    content.innerHTML =
      getHomeTabContent();

    return;

  }


  content.innerHTML = `

    <div class="learning-content">


      <div class="note-section">

        <h2>
          📚 ${tab} Tab
        </h2>


        <p>

          The learning material for the
          <strong>${tab}</strong> tab will be added here.

        </p>


        <div class="important-note">

          <strong>
            Coming Soon
          </strong>

          <p>

            This section is prepared for
            detailed ${tab} Tab learning,
            including its image, tools,
            explanations and practical exercises.

          </p>

        </div>


      </div>

    </div>

  `;

}


// ==========================================================
// HOME TAB LEARNING CONTENT
// ==========================================================

function getHomeTabContent() {

  return `

    <div class="learning-content">


      <!-- TITLE -->

      <div class="learning-title">

        <h1>
          MS Word – Home Tab
        </h1>

        <p>
          MS Word Home Tab – सभी महत्वपूर्ण विकल्पों की जानकारी
        </p>

      </div>


      <!-- IMAGE -->

      <div class="learning-image-box">

        <img
          src="${WORD_HOME_IMAGE}"
          alt="MS Word Home Tab"
          class="word-tab-image"
          onclick="openImage('${WORD_HOME_IMAGE}')"
        >

        <p>
          🔍 Click the image to view it larger.
        </p>

      </div>


      <!-- INTRODUCTION -->

      <div class="note-section">

        <h2>
          📖 Home Tab क्या है?
        </h2>


        <p>

          MS Word का <strong>Home Tab</strong>
          document में text को type, edit,
          format और arrange करने के लिए
          सबसे ज्यादा इस्तेमाल होने वाला tab है।

        </p>


        <h3>
          Home Tab के मुख्य Groups
        </h3>


        <ol>

          <li>
            Clipboard
          </li>

          <li>
            Font
          </li>

          <li>
            Paragraph
          </li>

          <li>
            Styles
          </li>

          <li>
            Editing
          </li>

        </ol>

      </div>


      <!-- CLIPBOARD -->

      <div class="note-section">

        <h2>
          1️⃣ Clipboard Group
        </h2>


        <p>

          Clipboard का उपयोग content को
          Copy, Cut और Paste करने के लिए
          किया जाता है।

        </p>


        <div class="tool-grid">


          <div class="mini-tool">

            <h3>
              📋 Paste
            </h3>

            <p>
              Cut या Copy किए हुए content को
              document में insert करता है।
            </p>

            <strong>
              Ctrl + V
            </strong>

          </div>


          <div class="mini-tool">

            <h3>
              ✂️ Cut
            </h3>

            <p>
              Selected content को हटाकर
              Clipboard में रखता है।
            </p>

            <strong>
              Ctrl + X
            </strong>

          </div>


          <div class="mini-tool">

            <h3>
              📄 Copy
            </h3>

            <p>
              Selected content की copy बनाता है।
            </p>

            <strong>
              Ctrl + C
            </strong>

          </div>


          <div class="mini-tool">

            <h3>
              🖌️ Format Painter
            </h3>

            <p>
              एक text की formatting को
              दूसरे text पर apply करता है।
            </p>

          </div>


        </div>

      </div>


      <!-- FONT -->

      <div class="note-section">

        <h2>
          2️⃣ Font Group
        </h2>


        <p>

          Font Group का उपयोग text की
          appearance और formatting बदलने के
          लिए किया जाता है।

        </p>


        <div class="tool-grid">


          <div class="mini-tool">

            <h3>
              🔤 Font Name
            </h3>

            <p>
              Text का font बदलता है।
            </p>

            <small>
              Example: Arial, Calibri,
              Times New Roman
            </small>

          </div>


          <div class="mini-tool">

            <h3>
              🔢 Font Size
            </h3>

            <p>
              Text का size बदलता है।
            </p>

          </div>


          <div class="mini-tool">

            <h3>
              🔼 Increase Font Size
            </h3>

            <p>
              Font का आकार बड़ा करता है।
            </p>

          </div>


          <div class="mini-tool">

            <h3>
              🔽 Decrease Font Size
            </h3>

            <p>
              Font का आकार छोटा करता है।
            </p>

          </div>


          <div class="mini-tool">

            <h3>
              🔠 Change Case
            </h3>

            <p>
              Text को UPPERCASE,
              lowercase आदि में बदलता है।
            </p>

          </div>


          <div class="mini-tool">

            <h3>
              🧹 Clear All Formatting
            </h3>

            <p>
              Text की formatting हटाकर
              normal text बनाता है।
            </p>

          </div>


        </div>

      </div>


      <!-- TEXT FORMATTING -->

      <div class="note-section">

        <h2>
          3️⃣ Text Formatting
        </h2>


        <div class="tool-grid">


          <div class="mini-tool">

            <h3>
              <b>Bold</b>
            </h3>

            <p>
              Text को मोटा/dark करता है।
            </p>

            <strong>
              Ctrl + B
            </strong>

          </div>


          <div class="mini-tool">

            <h3>
              <i>Italic</i>
            </h3>

            <p>
              Text को तिरछा करता है।
            </p>

            <strong>
              Ctrl + I
            </strong>

          </div>


          <div class="mini-tool">

            <h3>
              <u>Underline</u>
            </h3>

            <p>
              Text के नीचे line लगाता है।
            </p>

            <strong>
              Ctrl + U
            </strong>

          </div>


          <div class="mini-tool">

            <h3>
              Strikethrough
            </h3>

            <p>
              Text के बीच में line लगाता है।
            </p>

          </div>


          <div class="mini-tool">

            <h3>
              Subscript
            </h3>

            <p>
              Text को नीचे छोटा करके लिखता है।
            </p>

            <strong>
              H₂O
            </strong>

          </div>


          <div class="mini-tool">

            <h3>
              Superscript
            </h3>

            <p>
              Text को ऊपर छोटा करके लिखता है।
            </p>

            <strong>
              X²
            </strong>

          </div>


          <div class="mini-tool">

            <h3>
              Text Highlight Color
            </h3>

            <p>
              Text के पीछे highlight color
              लगाता है।
            </p>

          </div>


          <div class="mini-tool">

            <h3>
              Font Color
            </h3>

            <p>
              Text का color बदलता है।
            </p>

          </div>


          <div class="mini-tool">

            <h3>
              Text Effects
            </h3>

            <p>
              Text पर अलग-अलग visual effects
              apply करता है।
            </p>

          </div>


        </div>

      </div>


      <!-- PARAGRAPH -->

      <div class="note-section">

        <h2>
          4️⃣ Paragraph Group
        </h2>


        <div class="tool-grid">


          <div class="mini-tool">

            <h3>
              • Bullets
            </h3>

            <p>
              Bullet वाली list बनाने के लिए।
            </p>

          </div>


          <div class="mini-tool">

            <h3>
              1. Numbering
            </h3>

            <p>
              Number वाली list बनाने के लिए।
            </p>

          </div>


          <div class="mini-tool">

            <h3>
              Multilevel List
            </h3>

            <p>
              अलग-अलग levels वाली list
              बनाने के लिए।
            </p>

          </div>


          <div class="mini-tool">

            <h3>
              Increase Indent
            </h3>

            <p>
              Paragraph को अंदर shift करता है।
            </p>

          </div>


          <div class="mini-tool">

            <h3>
              Decrease Indent
            </h3>

            <p>
              Paragraph को वापस left side
              की तरफ लाता है।
            </p>

          </div>


          <div class="mini-tool">

            <h3>
              Sort
            </h3>

            <p>
              Text को A-Z या Z-A order में
              arrange करता है।
            </p>

          </div>


          <div class="mini-tool">

            <h3>
              Show/Hide ¶
            </h3>

            <p>
              Spaces, paragraph marks और
              formatting marks दिखाता है।
            </p>

          </div>


        </div>

      </div>


      <!-- ALIGNMENT -->

      <div class="note-section">

        <h2>
          5️⃣ Text Alignment
        </h2>


        <div class="tool-grid">


          <div class="mini-tool">

            <h3>
              Align Left
            </h3>

            <p>
              Text को left side align करता है।
            </p>

            <strong>
              Ctrl + L
            </strong>

          </div>


          <div class="mini-tool">

            <h3>
              Center
            </h3>

            <p>
              Text को center में रखता है।
            </p>

            <strong>
              Ctrl + E
            </strong>

          </div>


          <div class="mini-tool">

            <h3>
              Align Right
            </h3>

            <p>
              Text को right side align करता है।
            </p>

            <strong>
              Ctrl + R
            </strong>

          </div>


          <div class="mini-tool">

            <h3>
              Justify
            </h3>

            <p>
              Text को दोनों margins के
              साथ align करता है।
            </p>

            <strong>
              Ctrl + J
            </strong>

          </div>


        </div>

      </div>


      <!-- SPACING -->

      <div class="note-section">

        <h2>
          6️⃣ Line & Paragraph Spacing
        </h2>


        <p>

          Lines और paragraphs के बीच की
          दूरी को control करने के लिए
          इसका उपयोग किया जाता है।

        </p>


        <ul>

          <li>
            1.0 – Single
          </li>

          <li>
            1.15
          </li>

          <li>
            1.5 – One and a half
          </li>

          <li>
            2.0 – Double
          </li>

        </ul>

      </div>


      <!-- SHADING & BORDER -->

      <div class="note-section">

        <h2>
          7️⃣ Shading & Borders
        </h2>


        <div class="tool-grid">


          <div class="mini-tool">

            <h3>
              🎨 Shading
            </h3>

            <p>
              Paragraph या text के पीछे
              background color लगाता है।
            </p>

          </div>


          <div class="mini-tool">

            <h3>
              ▣ Borders
            </h3>

            <p>
              Text या paragraph के चारों
              ओर border लगाता है।
            </p>

          </div>


        </div>

      </div>


      <!-- STYLES -->

      <div class="note-section">

        <h2>
          8️⃣ Styles
        </h2>


        <p>

          Styles predefined formatting
          combinations हैं जिनसे document
          को जल्दी और professionally
          format किया जा सकता है।

        </p>


        <div class="tool-grid">


          <div class="mini-tool">

            <h3>
              Normal
            </h3>

            <p>
              Normal paragraph text के लिए।
            </p>

          </div>


          <div class="mini-tool">

            <h3>
              No Spacing
            </h3>

            <p>
              Extra paragraph spacing हटाने
              के लिए।
            </p>

          </div>


          <div class="mini-tool">

            <h3>
              Heading 1
            </h3>

            <p>
              Main heading के लिए।
            </p>

          </div>


          <div class="mini-tool">

            <h3>
              Heading 2
            </h3>

            <p>
              Sub-heading के लिए।
            </p>

          </div>


          <div class="mini-tool">

            <h3>
              Title
            </h3>

            <p>
              Document के main title के लिए।
            </p>

          </div>


        </div>

      </div>


      <!-- SHORTCUTS -->

      <div class="note-section">

        <h2>
          ⌨️ Important Keyboard Shortcuts
        </h2>


        <div class="shortcut-grid">


          <div>
            Copy
            <strong>Ctrl + C</strong>
          </div>


          <div>
            Cut
            <strong>Ctrl + X</strong>
          </div>


          <div>
            Paste
            <strong>Ctrl + V</strong>
          </div>


          <div>
            Undo
            <strong>Ctrl + Z</strong>
          </div>


          <div>
            Save
            <strong>Ctrl + S</strong>
          </div>


          <div>
            Select All
            <strong>Ctrl + A</strong>
          </div>


          <div>
            Bold
            <strong>Ctrl + B</strong>
          </div>


          <div>
            Italic
            <strong>Ctrl + I</strong>
          </div>


          <div>
            Underline
            <strong>Ctrl + U</strong>
          </div>


          <div>
            Align Left
            <strong>Ctrl + L</strong>
          </div>


          <div>
            Center
            <strong>Ctrl + E</strong>
          </div>


          <div>
            Align Right
            <strong>Ctrl + R</strong>
          </div>


          <div>
            Justify
            <strong>Ctrl + J</strong>
          </div>


          <div>
            Find
            <strong>Ctrl + F</strong>
          </div>


          <div>
            Print
            <strong>Ctrl + P</strong>
          </div>


        </div>

      </div>


      <!-- PRACTICE -->

      <div class="practice-box">

        <h2>
          🧪 Practice Before Starting Projects
        </h2>


        <p>

          पहले MS Word में एक page बनाइए
          और नीचे दिए गए सभी options को practice कीजिए।

        </p>


        <ol>

          <li>
            एक suitable title लिखें।
          </li>

          <li>
            Title Style apply करें।
          </li>

          <li>
            Font और Font Size change करें।
          </li>

          <li>
            Bold apply करें।
          </li>

          <li>
            Italic apply करें।
          </li>

          <li>
            Underline apply करें।
          </li>

          <li>
            Bullets वाली list बनाएं।
          </li>

          <li>
            Numbering वाली list बनाएं।
          </li>

          <li>
            Text को Center करें।
          </li>

          <li>
            Paragraph को Justify करें।
          </li>

          <li>
            Line spacing change करें।
          </li>

          <li>
            Text highlight करें।
          </li>

          <li>
            Font color change करें।
          </li>

          <li>
            Paragraph पर border लगाएं।
          </li>

          <li>
            Document को save करें।
          </li>

        </ol>

      </div>


      <!-- PROJECT BUTTON -->

      <div class="learning-next">

        <h2>
          🎯 अब Practical Projects शुरू करें
        </h2>


        <p>

          Home Tab के basic tools समझने के
          बाद अब 14 practical projects complete करें।

        </p>


        <button
          onclick="showWordProjects()"
        >
          💻 Start 14 Projects
        </button>

      </div>


    </div>

  `;

}


// ==========================================================
// MS WORD PROJECTS PAGE
// ==========================================================

function showWordProjects() {

  const app = document.getElementById("app");


  app.innerHTML = `

    <button
      class="back"
      onclick="showCourse('MS Word')"
    >
      ← Back to MS Word
    </button>


    <div class="hero course-hero">

      <h1>
        💻 MS Word Practical Projects
      </h1>

      <p>
        Complete all 14 practical projects.
      </p>

    </div>


    <div class="lesson-grid compact-grid">


      ${curriculum["MS Word"].map(item => `

        <div class="lesson-card compact-card">


          <div class="project-image">

            <img
              src="${item.image}"
              alt="${item.title}"
              onerror="this.style.display='none'"
            >

          </div>


          <h3>
            ${item.title}
          </h3>


          <p class="project-topic">
            ${item.topic}
          </p>


          <p class="project-description">
            ${item.description}
          </p>


          <button
            onclick="showLesson('MS Word', ${item.id})"
          >
            Open Project
          </button>


        </div>

      `).join("")}


    </div>

  `;

}


// ==========================================================
// PROJECT PAGE
// ==========================================================

function showLesson(course, id) {


  const lesson =
    curriculum[course].find(item => item.id === id);


  if (!lesson) {

    alert("Project not found.");

    return;

  }


  const app =
    document.getElementById("app");


  app.innerHTML = `

    <button
      class="back"
      onclick="showCourse('${course}')"
    >
      ← Back to ${course}
    </button>


    <div class="lesson-content">


      <!-- PROJECT INFORMATION -->

      <div class="lesson-header">

        <h1>
          ${lesson.title}
        </h1>

        <h2>
          ${lesson.topic}
        </h2>

        <p>
          ${lesson.description}
        </p>

      </div>


      <!-- EXAMPLE -->

      ${
        lesson.image
          ? `

            <div class="example-section">

              <h2>
                📘 Example Project
              </h2>


              <div class="example-image-container">

                <img
                  src="${lesson.image}"
                  alt="${lesson.title}"
                  class="example-image"
                  onclick="openImage('${lesson.image}')"
                >

              </div>


              <p class="image-note">
                🔍 Click the image to view it larger.
              </p>

            </div>

          `
          : ""
      }


      <!-- PRACTICE INSTRUCTIONS -->

      <div class="practice-instructions">

        <h2>
          📝 How to Practice
        </h2>


        <div class="step">

          <strong>
            Step 1:
          </strong>

          Open Microsoft Word on your computer.

        </div>


        <div class="step">

          <strong>
            Step 2:
          </strong>

          Look carefully at the example shown above.

        </div>


        <div class="step">

          <strong>
            Step 3:
          </strong>

          Create your own copy of the project
          in MS Word.

        </div>


        <div class="step">

          <strong>
            Step 4:
          </strong>

          Try to make your project as similar
          to the example as possible.

        </div>


        <div class="step">

          <strong>
            Step 5:
          </strong>

          Save your completed project.

        </div>


      </div>


      <!-- PRACTICE -->

      <div class="practice-box">

        <h3>
          🎯 Ready to Practice?
        </h3>


        <p>
          Create your own copy of this project
          in Microsoft Word.
        </p>


        <button
          onclick="startPractice('${course}', ${lesson.id})"
        >
          💻 Start Practice
        </button>


        <button
          class="help-button"
          onclick="showHelp('${course}', '${lesson.title}')"
        >
          🤖 Ask AI Teacher
        </button>


      </div>


    </div>

  `;

}


// ==========================================================
// START PRACTICE
// ==========================================================

function startPractice(course, id) {

  const lesson =
    curriculum[course].find(item => item.id === id);


  if (!lesson) {

    alert("Project not found.");

    return;

  }


  const confirmed =
    confirm(
      "Open Microsoft Word and start this project?\n\n" +
      lesson.title
    );


  if (!confirmed) {
    return;
  }


  openWord();

}


// ==========================================================
// OPEN MICROSOFT WORD
// ==========================================================

function openWord() {

  try {

    window.location.href = "ms-word:";

  } catch (error) {

    console.log(error);

  }


  setTimeout(function () {

    alert(

      "Microsoft Word could not be opened automatically.\n\n" +

      "Please open Microsoft Word manually and " +

      "create a new blank document."

    );

  }, 1500);

}


// ==========================================================
// AI HELP MODAL
// ==========================================================

function showHelp(course, project) {


  const old =
    document.getElementById("helpModal");


  if (old) {

    old.remove();

  }


  document.body.insertAdjacentHTML(

    "beforeend",

    `

    <div
      id="helpModal"
      class="help-modal"
    >


      <div class="help-modal-content">


        <button
          class="close-help"
          onclick="closeHelp()"
        >
          ×
        </button>


        <h2>
          🤖 Ask Your AI Teacher
        </h2>


        <p>
          Ask anything about
          ${escapeHTML(project)}.
        </p>


        <textarea
          id="studentQuestion"
          placeholder="Example: How do I insert a table in MS Word?"
        ></textarea>


        <button
          id="askButton"
          class="ask-button"
          onclick="askQuestion('${course}', '${project}')"
        >
          Ask Question
        </button>


        <div id="helpAnswer"></div>


      </div>


    </div>

    `

  );

}


// ==========================================================
// CLOSE HELP
// ==========================================================

function closeHelp() {

  const modal =
    document.getElementById("helpModal");


  if (modal) {

    modal.remove();

  }

}


// ==========================================================
// ASK AI TEACHER
// ==========================================================

async function askQuestion(course, project) {


  const questionElement =
    document.getElementById("studentQuestion");


  const answer =
    document.getElementById("helpAnswer");


  const button =
    document.getElementById("askButton");


  const question =
    questionElement.value.trim();


  if (!question) {

    answer.innerHTML = `

      <div class="help-answer">

        <p>
          Please type your question first.
        </p>

      </div>

    `;

    return;

  }


  button.disabled = true;

  button.innerText =
    "⏳ AI Teacher is thinking...";


  answer.innerHTML = `

    <div class="help-answer">

      <h3>
        🤔 AI Teacher
      </h3>

      <p>
        Please wait while I prepare the answer...
      </p>

    </div>

  `;


  try {


    const response =
      await fetch("/api/ask", {

        method: "POST",

        headers: {

          "Content-Type":
            "application/json"

        },

        body: JSON.stringify({

          question: question,

          course: course,

          project: project

        })

      });


    const data =
      await response.json();


    if (!response.ok) {

      throw new Error(

        data.error ||
        "AI Teacher could not answer."

      );

    }


    answer.innerHTML = `

      <div class="help-answer">

        <h3>
          💡 AI Teacher
        </h3>

        <div class="ai-response"></div>

      </div>

    `;


    const responseBox =
      answer.querySelector(".ai-response");


    responseBox.textContent =
      data.answer ||
      "No answer received.";


  }


  catch (error) {


    console.error(
      "AI Teacher Error:",
      error
    );


    answer.innerHTML = `

      <div class="help-answer">

        <h3>
          ❌ AI Teacher Error
        </h3>


        <p>
          ${escapeHTML(error.message)}
        </p>


        <p>
          Please try again.
        </p>

      </div>

    `;

  }


  button.disabled = false;

  button.innerText =
    "Ask Question";

}


// ==========================================================
// IMAGE VIEWER
// ==========================================================

function openImage(imageSrc) {


  const old =
    document.getElementById("imageModal");


  if (old) {

    old.remove();

  }


  document.body.insertAdjacentHTML(

    "beforeend",

    `

    <div
      id="imageModal"
      class="image-modal"
      onclick="closeImage()"
    >


      <div class="image-modal-content">


        <img
          src="${imageSrc}"
          alt="Preview"
        >


        <p>
          Click anywhere to close
        </p>


      </div>


    </div>

    `

  );

}


// ==========================================================
// CLOSE IMAGE
// ==========================================================

function closeImage() {


  const modal =
    document.getElementById("imageModal");


  if (modal) {

    modal.remove();

  }

}


// ==========================================================
// SECURITY
// ==========================================================

function escapeHTML(text) {


  const div =
    document.createElement("div");


  div.textContent =
    text;


  return div.innerHTML;

}


// ==========================================================
// START WEBSITE
// ==========================================================

document.addEventListener(

  "DOMContentLoaded",

  showHome

);
