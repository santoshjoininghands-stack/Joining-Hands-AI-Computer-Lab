/* =========================================================
   JOINING HANDS — AI COMPUTER LEARNING LAB
   app.js — Part 1
   ========================================================= */

"use strict";


/* =========================================================
   APPLICATION STATE
   ========================================================= */

const state = {

  section: "home",

  course: null,

  wordView: null,

  excelView: null,

  powerpointView: null,

  selectedTool: 0,

  expanded: false,

  language: "en",

  darkMode: false,

  zoom: 100

};


/* =========================================================
   TRANSLATIONS
   ========================================================= */

const translations = {

  en: {

    home: "Home",

    msWord: "MS Word",

    msExcel: "MS Excel",

    powerpoint: "MS PowerPoint",

    aiTeacher: "AI Teacher",

    details: "Details",

    learning: "Learning",

    practical: "Practical Work",

    comingSoon: "Coming Soon",

    english: "English",

    hindi: "हिन्दी",

    zoom: "Zoom",

    previous: "Previous",

    next: "Next",

    what: "What is this?",

    use: "What is it used for?",

    steps: "How to use",

    askAI: "Ask AI Teacher",

    openProject: "Open Project",

    back: "Back",

    courses: "Courses",

    courseDetails: "Course Details",

    learnComputer: "Learn Computer Skills",

    learnComputerText:
      "Learn Microsoft Word, Excel and PowerPoint through simple explanations and practical projects.",

    wordDescription:
      "Learn Microsoft Word from basic tools to practical document creation.",

    excelDescription:
      "Learn Microsoft Excel, formulas, functions and practical spreadsheet work.",

    powerpointDescription:
      "Learn Microsoft PowerPoint and create professional presentations."

  },

  hi: {

    home: "होम",

    msWord: "MS Word",

    msExcel: "MS Excel",

    powerpoint: "MS PowerPoint",

    aiTeacher: "AI Teacher",

    details: "विवरण",

    learning: "Learning",

    practical: "Practical Work",

    comingSoon: "जल्द आ रहा है",

    english: "English",

    hindi: "हिन्दी",

    zoom: "Zoom",

    previous: "पिछला",

    next: "अगला",

    what: "यह क्या है?",

    use: "इसका उपयोग किस लिए होता है?",

    steps: "कैसे उपयोग करें",

    askAI: "AI Teacher से पूछें",

    openProject: "Project खोलें",

    back: "वापस",

    courses: "Courses",

    courseDetails: "Course Details",

    learnComputer: "Computer Skills सीखें",

    learnComputerText:
      "Microsoft Word, Excel और PowerPoint को आसान explanation और practical projects के माध्यम से सीखें।",

    wordDescription:
      "Microsoft Word को basic tools से लेकर practical document creation तक सीखें।",

    excelDescription:
      "Microsoft Excel, formulas, functions और practical spreadsheet work सीखें।",

    powerpointDescription:
      "Microsoft PowerPoint सीखें और professional presentations बनाएं।"

  }

};


function t(key) {

  return (
    translations[state.language]?.[key] ||
    translations.en[key] ||
    key
  );

}


/* =========================================================
   WORD TAB DATA
   ========================================================= */

const wordTabs = [

  {
    name: "Home",
    image: "Home.png",
    description:
      "The Home tab contains the most commonly used commands for editing and formatting text.",
    hindi:
      "Home tab में text को edit और format करने के लिए सबसे अधिक उपयोग होने वाले commands होते हैं."
  },

  {
    name: "Insert",
    image: "Insert.png",
    description:
      "The Insert tab lets you add tables, pictures, shapes, links, headers, footers and other objects.",
    hindi:
      "Insert tab की मदद से आप tables, pictures, shapes, links, headers और footers आदि जोड़ सकते हैं."
  },

  {
    name: "Page Layout",
    image: "Page Layout.png",
    description:
      "The Page Layout tab controls page size, margins, orientation, columns and page arrangement.",
    hindi:
      "Page Layout tab से page size, margins, orientation, columns और page arrangement बदला जाता है."
  },

  {
    name: "References",
    image: "References.png",
    description:
      "The References tab is used for table of contents, footnotes, citations, bibliography and related tools.",
    hindi:
      "References tab का उपयोग table of contents, footnotes, citations और bibliography के लिए किया जाता है."
  },

  {
    name: "Mailings",
    image: "Mailing.png",
    description:
      "The Mailings tab is used for mail merge, envelopes, labels and creating personalized documents.",
    hindi:
      "Mailings tab का उपयोग mail merge, envelopes, labels और personalized documents बनाने के लिए किया जाता है."
  },

  {
    name: "Review",
    image: "Review.png",
    description:
      "The Review tab provides spelling, grammar, comments, tracking and document protection tools.",
    hindi:
      "Review tab में spelling, grammar, comments, tracking और document protection के tools होते हैं."
  },

  {
    name: "View",
    image: "View.png",
    description:
      "The View tab controls document views, zoom, window arrangement and navigation options.",
    hindi:
      "View tab से document view, zoom, window arrangement और navigation options control किए जाते हैं."
  }

];


/* =========================================================
   WORD TOOL DATA
   ========================================================= */

const wordTools = {

  Home: [

    {
      name: "Clipboard",
      icon: "📋",
      what:
        "Clipboard contains commands such as Cut, Copy, Paste and Format Painter.",
      action:
        "Use it when you want to move, duplicate or copy formatting from one place to another."
    },

    {
      name: "Font",
      icon: "🔤",
      what:
        "Font tools control the appearance of text.",
      action:
        "Select text first, then change font name, font size, bold, italic, underline or text colour."
    },

    {
      name: "Paragraph",
      icon: "¶",
      what:
        "Paragraph tools control alignment, spacing, bullets and numbering.",
      action:
        "Select a paragraph and choose left, centre, right or justified alignment. You can also add bullets or numbering."
    },

    {
      name: "Styles",
      icon: "🎨",
      what:
        "Styles are predefined formatting combinations.",
      action:
        "Select text and choose a style such as Heading 1, Heading 2 or Title."
    },

    {
      name: "Editing",
      icon: "🔎",
      what:
        "Editing tools help you find, replace and select text.",
      action:
        "Use Find to search for text and Replace to change matching text."
    }

  ],

  Insert: [

    {
      name: "Pages",
      icon: "📄",
      what:
        "Pages tools allow you to insert a cover page, blank page or page break.",
      action:
        "Choose the required page command from the Insert tab."
    },

    {
      name: "Table",
      icon: "▦",
      what:
        "The Table command inserts rows and columns into a document.",
      action:
        "Click Insert → Table and select the number of rows and columns."
    },

    {
      name: "Pictures",
      icon: "🖼️",
      what:
        "Pictures lets you insert images into a Word document.",
      action:
        "Click Insert → Pictures and select an image from your computer."
    },

    {
      name: "Shapes",
      icon: "🔷",
      what:
        "Shapes lets you insert arrows, rectangles, circles and other shapes.",
      action:
        "Choose Insert → Shapes and select the shape you want."
    },

    {
      name: "Links",
      icon: "🔗",
      what:
        "Links allow you to connect text or objects to webpages or other locations.",
      action:
        "Select text and choose Insert → Link."
    },

    {
      name: "Header & Footer",
      icon: "📑",
      what:
        "Headers and footers add information at the top or bottom of pages.",
      action:
        "Choose Insert → Header or Footer and select a design."
    }

  ],

  "Page Layout": [

    {
      name: "Margins",
      icon: "📐",
      what:
        "Margins control the blank space around the edges of a page.",
      action:
        "Go to Page Layout → Margins and select a preset or create custom margins."
    },

    {
      name: "Orientation",
      icon: "↔️",
      what:
        "Orientation controls whether the page is Portrait or Landscape.",
      action:
        "Choose Page Layout → Orientation."
    },

    {
      name: "Size",
      icon: "📃",
      what:
        "Page Size controls the physical size of the document page.",
      action:
        "Choose Page Layout → Size and select a paper size such as A4."
    },

    {
      name: "Columns",
      icon: "▤",
      what:
        "Columns divide text into multiple vertical sections.",
      action:
        "Select Page Layout → Columns and choose the required number."
    }

  ],

  References: [

    {
      name: "Table of Contents",
      icon: "📚",
      what:
        "A table of contents lists document headings with their page numbers.",
      action:
        "Apply heading styles first, then choose References → Table of Contents."
    },

    {
      name: "Footnotes",
      icon: "🔢",
      what:
        "Footnotes add notes or references at the bottom of a page.",
      action:
        "Place the cursor after the required text and select Insert Footnote."
    },

    {
      name: "Citations",
      icon: "📖",
      what:
        "Citations identify the sources used in a document.",
      action:
        "Choose References → Insert Citation and add the source details."
    }

  ],

  Mailings: [

    {
      name: "Mail Merge",
      icon: "✉️",
      what:
        "Mail Merge creates multiple personalized documents from one template.",
      action:
        "Create the main document, select recipients, insert fields and finish the merge."
    },

    {
      name: "Envelopes",
      icon: "✉️",
      what:
        "Envelopes tools help create and print envelopes.",
      action:
        "Choose Mailings → Envelopes and enter the delivery and return addresses."
    },

    {
      name: "Labels",
      icon: "🏷️",
      what:
        "Labels allow you to create printable address or product labels.",
      action:
        "Choose Mailings → Labels and select the required label type."
    }

  ],

  Review: [

    {
      name: "Spelling & Grammar",
      icon: "✓",
      what:
        "This tool checks spelling and grammar mistakes.",
      action:
        "Go to Review → Spelling & Grammar and review the suggestions."
    },

    {
      name: "Comments",
      icon: "💬",
      what:
        "Comments let you add notes to specific parts of a document.",
      action:
        "Select text and choose Review → New Comment."
    },

    {
      name: "Track Changes",
      icon: "📝",
      what:
        "Track Changes records edits made to a document.",
      action:
        "Turn on Review → Track Changes before making edits."
    }

  ],

  View: [

    {
      name: "Read Mode",
      icon: "📖",
      what:
        "Read Mode provides a comfortable view for reading documents.",
      action:
        "Choose View → Read Mode."
    },

    {
      name: "Print Layout",
      icon: "🖨️",
      what:
        "Print Layout shows the document approximately as it will appear when printed.",
      action:
        "Choose View → Print Layout."
    },

    {
      name: "Zoom",
      icon: "🔍",
      what:
        "Zoom changes the size at which the document is displayed on screen.",
      action:
        "Use View → Zoom or the zoom control at the bottom of Word."
    }

  ]



/* =========================================================
   WORD EXPANDED TOOLS
   ========================================================= */

function addExpandedWordTools(
  tabName,
  items
) {

  if (!Array.isArray(items)) {
    return;
  }

  if (!wordTools[tabName]) {
    wordTools[tabName] = [];
  }

  const existing =
    new Set(
      wordTools[tabName].map(
        item => item.name
      )
    );

  items.forEach(item => {

    let tool = null;

    /*
     * Support both formats:
     *
     * Object:
     * {
     *   name,
     *   icon,
     *   what,
     *   action
     * }
     *
     * Array:
     * [
     *   name,
     *   icon,
     *   what,
     *   action
     * ]
     */

    if (Array.isArray(item)) {

      tool = {

        name: item[0] || "Tool",

        icon: item[1] || "🔹",

        what: item[2] || "",

        action: item[3] || ""

      };

    }

    else if (
      item &&
      typeof item === "object"
    ) {

      tool = {

        name:
          item.name ||
          item.title ||
          "Tool",

        icon:
          item.icon ||
          "🔹",

        what:
          item.what ||
          item.description ||
          "",

        action:
          item.action ||
          item.use ||
          ""

      };

    }


    if (
      !tool ||
      existing.has(tool.name)
    ) {
      return;
    }


    wordTools[tabName].push(tool);

    existing.add(tool.name);

  });

}


/* =========================================================
   ADDITIONAL HOME TOOLS
   ========================================================= */

addExpandedWordTools(
  "Home",
  [
    [
      "Font Name",
      "🔤",
      "Changes the typeface of selected text.",
      "Select text and choose a font such as Arial or Times New Roman."
    ],

    [
      "Font Size",
      "🔠",
      "Changes the size of selected text.",
      "Select text and choose a size such as 12, 14 or 16."
    ],

    [
      "Bold",
      "B",
      "Makes selected text darker and thicker.",
      "Select text and click Bold or press Ctrl+B."
    ],

    [
      "Italic",
      "I",
      "Slants selected text.",
      "Select text and click Italic or press Ctrl+I."
    ],

    [
      "Underline",
      "U",
      "Adds a line underneath selected text.",
      "Select text and click Underline or press Ctrl+U."
    ],

    [
      "Text Colour",
      "🖍️",
      "Changes the colour of text.",
      "Select text and choose a colour from Font Colour."
    ],

    [
      "Highlight",
      "🟨",
      "Highlights selected text.",
      "Select text and choose a highlight colour."
    ],

    [
      "Bullets",
      "•",
      "Creates a bulleted list.",
      "Select lines and choose the Bullets command."
    ],

    [
      "Numbering",
      "1.",
      "Creates a numbered list.",
      "Select lines and choose Numbering."
    ],

    [
      "Alignment",
      "☰",
      "Controls the horizontal alignment of paragraphs.",
      "Choose Left, Centre, Right or Justify."
    ]

  ]
);


/* =========================================================
   ADDITIONAL INSERT TOOLS
   ========================================================= */

addExpandedWordTools(
  "Insert",
  [

    [
      "Text Box",
      "▣",
      "Adds a movable text box.",
      "Choose Insert → Text Box and select a design."
    ],

    [
      "WordArt",
      "🔠",
      "Adds decorative text.",
      "Choose Insert → WordArt and select a style."
    ],

    [
      "Chart",
      "📊",
      "Adds charts such as column, line or pie charts.",
      "Choose Insert → Chart and select the chart type."
    ],

    [
      "Symbol",
      "Ω",
      "Adds special characters and symbols.",
      "Choose Insert → Symbol and select the required symbol."
    ]

  ]
);


/* =========================================================
   DOM HELPERS
   ========================================================= */

function getApp() {

  return document.getElementById(
    "app"
  );

}


function escapeHTML(value) {

  return String(
    value ?? ""
  )

    .replace(
      /&/g,
      "&amp;"
    )

    .replace(
      /</g,
      "&lt;"
    )

    .replace(
      />/g,
      "&gt;"
    )

    .replace(
      /"/g,
      "&quot;"
    )

    .replace(
      /'/g,
      "&#039;"
    );

}


/* =========================================================
   LANGUAGE
   ========================================================= */

function loadLanguage() {

  try {

    const saved =
      localStorage.getItem(
        "jh-language"
      );

    if (
      saved === "en" ||
      saved === "hi"
    ) {

      state.language = saved;

    }

  }

  catch (error) {

    console.warn(
      "Language preference could not be loaded.",
      error
    );

  }

}


function saveLanguage() {

  try {

    localStorage.setItem(
      "jh-language",
      state.language
    );

  }

  catch (error) {

    console.warn(
      "Language preference could not be saved.",
      error
    );

  }

}


function toggleLanguage() {

  state.language =
    state.language === "en"
      ? "hi"
      : "en";

  saveLanguage();

  render();

}


/* =========================================================
   DARK MODE
   ========================================================= */

function toggleDarkMode() {

  state.darkMode =
    !state.darkMode;

  document.body.classList.toggle(
    "dark",
    state.darkMode
  );

}


/* =========================================================
   IMAGE PATH
   ========================================================= */

function imagePath(file) {

  if (!file) {
    return "";
  }

  if (
    file.startsWith("/") ||
    file.startsWith("http") ||
    file.startsWith("data:")
  ) {

    return file;

  }

  return "/" + file;

}


/* =========================================================
   IMAGE ZOOM
   ========================================================= */

function openImage(src) {

  const old =
    document.getElementById(
      "imageModal"
    );

  if (old) {
    old.remove();
  }


  const modal =
    document.createElement(
      "div"
    );

  modal.id =
    "imageModal";

  modal.className =
    "image-modal open";

  modal.innerHTML = `

    <button
      class="close-modal"
      aria-label="Close"
    >
      ×
    </button>

    <img
      class="modal-img"
      src="${escapeHTML(
        imagePath(src)
      )}"
      alt="Zoomed image"
    >

  `;


  modal.addEventListener(
    "click",
    function(event) {

      if (
        event.target === modal ||
        event.target.classList.contains(
          "close-modal"
        )
      ) {

        modal.remove();

      }

    }
  );


  document.body.appendChild(
    modal
  );

}


function closeImage() {

  const modal =
    document.getElementById(
      "imageModal"
    );

  if (modal) {
    modal.remove();
  }

}


/* =========================================================
   ZOOM
   ========================================================= */

function zoomIn() {

  state.zoom =
    Math.min(
      160,
      state.zoom + 10
    );

  applyZoom();

}


function zoomOut() {

  state.zoom =
    Math.max(
      70,
      state.zoom - 10
    );

  applyZoom();

}


function resetZoom() {

  state.zoom = 100;

  applyZoom();

}


function applyZoom() {

  document.documentElement.style.setProperty(
    "--jh-content-zoom",
    `${state.zoom / 100}`
  );


  const value =
    document.getElementById(
      "zoomValue"
    );

  if (value) {

    value.textContent =
      `${state.zoom}%`;

  }
/* =========================================================
   RENDER APPLICATION
   ========================================================= */

function render() {

  const app = getApp();

  if (!app) {
    return;
  }

  document.body.classList.toggle(
    "dark",
    state.darkMode
  );


  if (state.section === "home") {

    renderHome();

    return;

  }


  if (state.section === "word") {

    renderWord();

    return;

  }


  if (state.section === "excel") {

    renderExcel();

    return;

  }


  if (state.section === "powerpoint") {

    renderPowerPoint();

    return;

  }


  if (state.section === "ai") {

    renderAITeacher();

    return;

  }


  renderHome();

}


/* =========================================================
   MAIN LAYOUT
   ========================================================= */

function mainLayout(content) {

  return `

    <div class="jh-layout">

      ${renderSidebar()}

      <main class="jh-main">

        ${renderTopHeader()}

        ${content}

      </main>

    </div>

  `;

}


/* =========================================================
   SIDEBAR
   ========================================================= */

function renderSidebar() {

  return `

    <aside class="jh-sidebar">

      <div class="jh-brand">

        <div class="jh-logo">

          <img
            src="/Logo.jpeg"
            alt="Joining Hands"
            onerror="this.style.display='none'"
          >

        </div>

        <div>

          <div class="jh-brand-title">
            Joining Hands
          </div>

          <div class="jh-brand-subtitle">
            Computer Learning
          </div>

        </div>

      </div>


      <nav class="jh-sidebar-nav">

        <button
          class="jh-nav-item ${
            state.section === "home"
              ? "active"
              : ""
          }"
          onclick="goHome()"
        >

          <span>🏠</span>

          <span>${t("home")}</span>

        </button>


        <div class="jh-nav-label">
          COURSES
        </div>


        <button
          class="jh-nav-item ${
            state.section === "word"
              ? "active"
              : ""
          }"
          onclick="openWord()"
        >

          <span>📘</span>

          <span>${t("msWord")}</span>

        </button>


        <button
          class="jh-nav-item ${
            state.section === "excel"
              ? "active"
              : ""
          }"
          onclick="openExcel()"
        >

          <span>📊</span>

          <span>${t("msExcel")}</span>

        </button>


        <button
          class="jh-nav-item ${
            state.section === "powerpoint"
              ? "active"
              : ""
          }"
          onclick="openPowerPoint()"
        >

          <span>📽️</span>

          <span>${t("powerpoint")}</span>

        </button>


        <div class="jh-nav-label">
          AI LEARNING
        </div>


        <button
          class="jh-nav-item ${
            state.section === "ai"
              ? "active"
              : ""
          }"
          onclick="openAITeacher()"
        >

          <span>🤖</span>

          <span>${t("aiTeacher")}</span>

        </button>

      </nav>


      <div class="jh-sidebar-bottom">

        <div class="jh-sidebar-help">

          <div class="jh-help-icon">
            ⭐
          </div>

          <div>

            <strong>
              Learn by Doing
            </strong>

            <p>
              Practice what you learn with practical projects.
            </p>

          </div>

        </div>

      </div>

    </aside>

  `;

}


/* =========================================================
   TOP HEADER
   ========================================================= */

function renderTopHeader() {

  return `

    <header class="jh-top-header">

      <div>

        <div class="jh-welcome">
          Welcome to Joining Hands
        </div>

        <h1 class="jh-page-title">

          ${
            state.section === "word"
              ? "MS Word"
              : state.section === "excel"
              ? "MS Excel"
              : state.section === "powerpoint"
              ? "MS PowerPoint"
              : state.section === "ai"
              ? "AI Teacher"
              : "Computer Learning Lab"
          }

        </h1>

      </div>


      <div class="jh-header-actions">

        <button
          class="jh-language-btn"
          onclick="toggleLanguage()"
        >

          ${
            state.language === "en"
              ? "हिन्दी"
              : "English"
          }

        </button>


        <button
          class="jh-theme-btn"
          onclick="toggleDarkMode()"
          title="Toggle dark mode"
        >

          ${
            state.darkMode
              ? "☀️"
              : "🌙"
          }

        </button>

      </div>

    </header>

  `;

}


/* =========================================================
   HOME
   ========================================================= */

function renderHome() {

  const content = `

    <section class="jh-home">

      <div class="jh-home-hero">

        <div class="jh-home-hero-icon">
          💻
        </div>

        <div>

          <div class="jh-eyebrow">
            JOINING HANDS
          </div>

          <h2>
            ${t("learnComputer")}
          </h2>

          <p>
            ${t("learnComputerText")}
          </p>

        </div>

      </div>


      <section class="jh-section">

        <div class="jh-section-heading">

          <div>

            <h2>
              ${t("courses")}
            </h2>

            <p>
              Choose a course to start learning.
            </p>

          </div>

        </div>


        <div class="jh-course-grid">

          <article
            class="jh-course-card"
            onclick="openWord()"
          >

            <div class="jh-course-icon word">
              W
            </div>

            <div class="jh-course-content">

              <h3>
                MS Word
              </h3>

              <p>
                ${t("wordDescription")}
              </p>

              <span class="jh-course-link">
                Start Learning →
              </span>

            </div>

          </article>


          <article
            class="jh-course-card"
            onclick="openExcel()"
          >

            <div class="jh-course-icon excel">
              X
            </div>

            <div class="jh-course-content">

              <h3>
                MS Excel
              </h3>

              <p>
                ${t("excelDescription")}
              </p>

              <span class="jh-course-link">
                Start Learning →
              </span>

            </div>

          </article>


          <article
            class="jh-course-card"
            onclick="openPowerPoint()"
          >

            <div class="jh-course-icon powerpoint">
              P
            </div>

            <div class="jh-course-content">

              <h3>
                MS PowerPoint
              </h3>

              <p>
                ${t("powerpointDescription")}
              </p>

              <span class="jh-course-link">
                Start Learning →
              </span>

            </div>

          </article>

        </div>

      </section>


      <section class="jh-section">

        <div class="jh-section-heading">

          <div>

            <h2>
              Joining Hands
            </h2>

            <p>
              Details about Joining Hands and our learning programme.
            </p>

          </div>

        </div>


        <div class="jh-coming-soon">

          <div class="jh-coming-icon">
            🚀
          </div>

          <div>

            <h3>
              ${t("comingSoon")}
            </h3>

            <p>
              Detailed information about Joining Hands will be added here soon.
            </p>

          </div>

        </div>

      </section>


      <section class="jh-section">

        <div class="jh-section-heading">

          <div>

            <h2>
              ${t("courseDetails")}
            </h2>

            <p>
              Explore what you will learn in each course.
            </p>

          </div>

        </div>


        <div class="jh-info-grid">

          <div class="jh-info-box">

            <span class="jh-info-number">
              01
            </span>

            <h3>
              Learn
            </h3>

            <p>
              Understand each tool with simple explanations, screenshots and step-by-step instructions.
            </p>

          </div>


          <div class="jh-info-box">

            <span class="jh-info-number">
              02
            </span>

            <h3>
              Practice
            </h3>

            <p>
              Work on practical projects after learning the tools.
            </p>

          </div>


          <div class="jh-info-box">

            <span class="jh-info-number">
              03
            </span>

            <h3>
              Ask AI
            </h3>

            <p>
              Ask the AI Teacher questions whenever you need help.
            </p>

          </div>

        </div>

      </section>

    </section>

  `;


  getApp().innerHTML =
    mainLayout(content);

}


/* =========================================================
   WORD COURSE
   ========================================================= */

function renderWord() {

  if (!state.wordView) {

    state.wordView =
      "learning";

  }


  if (
    state.wordView === "practice"
  ) {

    renderWordPractice();

    return;

  }


  renderWordLearning();

}


/* =========================================================
   WORD COURSE HEADER
   ========================================================= */

function renderWordCourseHeader(
  active
) {

  return `

    <div class="jh-course-header">

      <div class="jh-course-heading">

        <div class="jh-large-course-icon word">
          W
        </div>

        <div>

          <div class="jh-eyebrow">
            MICROSOFT WORD
          </div>

          <h2>
            MS Word
          </h2>

          <p>
            Learn Word tools and practice them through projects.
          </p>

        </div>

      </div>


      <div class="jh-course-switch">

        <button
          class="${
            active === "learning"
              ? "active"
              : ""
          }"
          onclick="openWordLearning()"
        >

          📖
          ${t("learning")}

        </button>


        <button
          class="${
            active === "practice"
              ? "active"
              : ""
          }"
          onclick="openWordPractice()"
        >

          🛠️
          ${t("practical")}

        </button>

      </div>

    </div>

  `;

}


/* =========================================================
   WORD LEARNING
   ========================================================= */

function renderWordLearning() {

  const activeTab =
    state.wordTab ||
    null;

  const tabButtons =
    wordTabs
      .map(
        tab => `

          <button
            class="jh-tab-button ${
              activeTab === tab.name
                ? "active"
                : ""
            }"
            onclick="selectWordTab('${escapeHTML(tab.name)}')"
          >

            ${escapeHTML(tab.name)}

          </button>

        `
      )
      .join("");


  let lesson = "";


  if (activeTab) {

    lesson =
      renderWordLesson(
        activeTab
      );

  }

  else {

    lesson = `

      <div class="jh-empty-learning">

        <div class="jh-empty-icon">
          👆
        </div>

        <h3>
          Select a Word tab to start learning
        </h3>

        <p>
          Click Home, Insert, Page Layout, References, Mailings, Review or View above.
          The tab image and complete explanation will appear here.
        </p>

      </div>

    `;

  }


  const content = `

    ${renderWordCourseHeader(
      "learning"
    )}


    <section class="jh-learning-panel">

      <div class="jh-tab-strip">

        ${tabButtons}

      </div>


      ${lesson}

    </section>

  `;


  getApp().innerHTML =
    mainLayout(content);

}


/* =========================================================
   WORD LESSON
   ========================================================= */

function renderWordLesson(
  tabName
) {

  const tab =
    wordTabs.find(
      item =>
        item.name === tabName
    );


  if (!tab) {

    return "";

  }


  const tools =
    wordTools[tabName] ||
    [];


  const toolHTML =
    tools
      .map(
        (tool, index) => `

          <button
            class="jh-tool-item ${
              state.selectedTool === index
                ? "active"
                : ""
            }"
            onclick="selectWordTool(${index})"
          >

            <span class="jh-tool-icon">
              ${escapeHTML(tool.icon)}
            </span>

            <span>
              ${escapeHTML(tool.name)}
            </span>

          </button>

        `
      )
      .join("");


  const selected =
    tools[
      Math.min(
        state.selectedTool,
        Math.max(
          tools.length - 1,
          0
        )
      )
    ];


  if (!selected) {

    return `

      <div class="jh-lesson">

        <div class="jh-tab-image-box">

          <img
            src="${imagePath(tab.image)}"
            alt="${escapeHTML(tab.name)} tab"
            class="jh-tab-image"
            onclick="openImage('${escapeHTML(tab.image)}')"
            onerror="this.style.display='none'"
          >

        </div>

        <div class="jh-tab-introduction">

          <h2>
            ${escapeHTML(tab.name)}
          </h2>

          <p>
            ${
              state.language === "hi"
                ? escapeHTML(tab.hindi)
                : escapeHTML(tab.description)
            }
          </p>

        </div>

      </div>

    `;

  }


  return `

    <div class="jh-lesson-layout">


      <aside class="jh-tools-panel">

        <div class="jh-tools-title">
          Tools in ${escapeHTML(tab.name)}
        </div>

        <div class="jh-tools-list">

          ${toolHTML}

        </div>

      </aside>


      <article class="jh-lesson">

        <div class="jh-lesson-top">

          <div>

            <div class="jh-eyebrow">
              ${escapeHTML(tab.name)}
            </div>

            <h2>
              ${escapeHTML(selected.name)}
            </h2>

          </div>


          <div class="jh-zoom-control">

            <button
              onclick="zoomOut()"
              title="Zoom out"
            >
              −
            </button>

            <span id="zoomValue">
              ${state.zoom}%
            </span>

            <button
              onclick="zoomIn()"
              title="Zoom in"
            >
              +
            </button>

            <button
              onclick="resetZoom()"
              title="Reset zoom"
            >
              ↺
            </button>

          </div>

        </div>


        <div class="jh-tab-image-box">

          <img
            src="${imagePath(tab.image)}"
            alt="${escapeHTML(tab.name)} tab"
            class="jh-tab-image"
            style="transform:scale(var(--jh-content-zoom,1));transform-origin:center top"
            onclick="openImage('${escapeHTML(tab.image)}')"
            onerror="this.style.display='none'"
          >

        </div>


        <div class="jh-explanation-grid">

          <section class="jh-explanation-card blue">

            <div class="jh-card-icon">
              💡
            </div>

            <div>

              <h3>
                ${t("what")}
              </h3>

              <p>
                ${
                  state.language === "hi"
                    ? escapeHTML(
                        selected.what
                      )
                    : escapeHTML(
                        selected.what
                      )
                }
              </p>

            </div>

          </section>


          <section class="jh-explanation-card green">

            <div class="jh-card-icon">
              🎯
            </div>

            <div>

              <h3>
                ${t("use")}
              </h3>

              <p>
                ${escapeHTML(
                  selected.action
                )}
              </p>

            </div>

          </section>


          <section class="jh-explanation-card yellow">

            <div class="jh-card-icon">
              🪜
            </div>

            <div>

              <h3>
                ${t("steps")}
              </h3>

              <ol>

                ${createSteps(
                  selected.action
                )}

              </ol>

            </div>

          </section>

        </div>


        <div class="jh-ai-inline">

          <div>

            <strong>
              🤖 Need help?
            </strong>

            <p>
              Ask the AI Teacher about this Word tool.
            </p>

          </div>

          <button
            onclick="askAboutCurrentTool()"
          >
            ${t("askAI")}
          </button>

        </div>

      </article>

    </div>

  `;

}


/* =========================================================
   CREATE SIMPLE STEPS
   ========================================================= */

function createSteps(
  text
) {

  const cleanText =
    String(text || "")
      .replace(
        /\.$/,
        ""
      );


  return `

    <li>
      Open the relevant tab in Microsoft Word.
    </li>

    <li>
      Find the required command or tool.
    </li>

    <li>
      Select the command and apply it to your document.
    </li>

    <li>
      Check the result and make any required changes.
    </li>

    <li>
      Practice the same task yourself.
    </li>

  `;

}


/* =========================================================
   WORD PRACTICAL WORK
   ========================================================= */

const wordProjects = [

  {
    id: 1,
    title: "Project 1 — Basic Letter",
    description:
      "Create and format a simple formal letter.",
    image: "Project 1.png"
  },

  {
    id: 2,
    title: "Project 2 — Resume",
    description:
      "Create a clean and professional resume.",
    image: "Project 2.png"
  },

  {
    id: 3,
    title: "Project 3 — Application",
    description:
      "Prepare a formal application using Word.",
    image: "Project 3.png"
  },

  {
    id: 4,
    title: "Project 4 — Notice",
    description:
      "Design a properly formatted notice.",
    image: "Project 4.png"
  },

  {
    id: 5,
    title: "Project 5 — Table",
    description:
      "Create and format a table.",
    image: "Project 5.png"
  },

  {
    id: 6,
    title: "Project 6 — Report",
    description:
      "Prepare a structured report.",
    image: "Project 6.png"
  },

  {
    id: 7,
    title: "Project 7 — Certificate",
    description:
      "Create a simple certificate.",
    image: "Project 7.png"
  },

  {
    id: 8,
    title: "Project 8 — Invitation",
    description:
      "Create an invitation document.",
    image: "Project 8.png"
  },

  {
    id: 9,
    title: "Project 9 — Brochure",
    description:
      "Design a simple brochure.",
    image: "Project 9.png"
  },

  {
    id: 10,
    title: "Project 10 — Newspaper",
    description:
      "Create a basic newspaper-style page.",
    image: "Project 10.png"
  },

  {
    id: 11,
    title: "Project 11 — Mail Merge",
    description:
      "Practice creating personalized letters.",
    image: "Project 11.png"
  },

  {
    id: 12,
    title: "Project 12 — Invoice",
    description:
      "Create a simple invoice.",
    image: "Project 12.png"
  },

  {
    id: 13,
    title: "Project 13 — Flyer",
    description:
      "Design a promotional flyer.",
    image: "Project 13.png"
  },

  {
    id: 14,
    title: "Project 14 — Final Project",
    description:
      "Combine the Word skills you have learned.",
    image: "Project 14.png"
  }

];


function renderWordPractice() {

  const cards =
    wordProjects
      .map(
        project => `

          <article
            class="jh-project-card"
            onclick="openWordProject(${project.id})"
          >

            <img
              src="${imagePath(
                project.image
              )}"
              alt="${escapeHTML(
                project.title
              )}"
              onerror="this.style.display='none'"
            >

            <div class="jh-project-body">

              <h3>
                ${escapeHTML(
                  project.title
                )}
              </h3>

              <p>
                ${escapeHTML(
                  project.description
                )}
              </p>

              <span>
                ${t("openProject")} →
              </span>

            </div>

          </article>

        `
      )
      .join("");


  const content = `

    ${renderWordCourseHeader(
      "practice"
    )}


    <section class="jh-project-section">

      <div class="jh-section-heading">

        <div>

          <h2>
            Practical Work
          </h2>

          <p>
            Choose a project and practise what you have learned.
          </p>

        </div>

        <div class="jh-project-count">
          ${wordProjects.length} Projects
        </div>

      </div>


      <div class="jh-project-grid">

        ${cards}

      </div>

    </section>

  `;


  getApp().innerHTML =
    mainLayout(content);

}
}/* =========================================================
   WORD PROJECT VIEW
   ========================================================= */

function openWordProject(id) {

  const project =
    wordProjects.find(
      item => item.id === id
    );

  if (!project) {
    return;
  }


  const content = `

    <div class="jh-project-view">

      <div class="jh-project-view-header">

        <button
          class="jh-back-button"
          onclick="openWordPractice()"
        >
          ← ${t("back")}
        </button>


        <div>

          <div class="jh-eyebrow">
            PRACTICAL WORK
          </div>

          <h2>
            ${escapeHTML(
              project.title
            )}
          </h2>

        </div>

      </div>


      <div class="jh-project-full">

        <div class="jh-project-full-image">

          <img
            src="${imagePath(
              project.image
            )}"
            alt="${escapeHTML(
              project.title
            )}"
            onclick="openImage('${escapeHTML(
              project.image
            )}')"
            onerror="this.style.display='none'"
          >

        </div>


        <div class="jh-project-full-info">

          <h3>
            ${escapeHTML(
              project.title
            )}
          </h3>

          <p>
            ${escapeHTML(
              project.description
            )}
          </p>


          <div class="jh-practice-instructions">

            <h4>
              Practice Instructions
            </h4>

            <ol>

              <li>
                Open Microsoft Word.
              </li>

              <li>
                Study the project example carefully.
              </li>

              <li>
                Create a new document.
              </li>

              <li>
                Recreate the project yourself using the Word tools you have learned.
              </li>

              <li>
                Save your completed work.
              </li>

            </ol>

          </div>


          <button
            class="jh-ai-action"
            onclick="askAboutProject(${project.id})"
          >

            🤖 Ask AI Teacher about this project

          </button>

        </div>

      </div>

    </div>

  `;


  getApp().innerHTML =
    mainLayout(content);

}


/* =========================================================
   EXCEL DATA
   ========================================================= */

const excelTopics = [

  {
    name: "Basic Formulas",
    icon: "➗",
    what:
      "Excel formulas are instructions used to calculate or process data.",
    use:
      "They are used to perform calculations automatically.",
    steps: [
      "Select a cell.",
      "Type = followed by the calculation.",
      "Press Enter.",
      "Excel displays the calculated result."
    ]
  },

  {
    name: "SUM",
    icon: "Σ",
    what:
      "SUM adds numbers from selected cells.",
    use:
      "It is commonly used for totals.",
    steps: [
      "Select the cell where you want the total.",
      "Type =SUM(",
      "Select the cells you want to add.",
      "Close the bracket and press Enter."
    ]
  },

  {
    name: "AVERAGE",
    icon: "📊",
    what:
      "AVERAGE calculates the average of selected numbers.",
    use:
      "It is useful for marks, scores and other numerical data.",
    steps: [
      "Select the result cell.",
      "Type =AVERAGE(",
      "Select the required cells.",
      "Close the bracket and press Enter."
    ]
  },

  {
    name: "COUNT",
    icon: "🔢",
    what:
      "COUNT counts cells containing numbers.",
    use:
      "It is useful when you need to know how many numerical entries exist.",
    steps: [
      "Select the result cell.",
      "Type =COUNT(",
      "Select the required range.",
      "Press Enter."
    ]
  },

  {
    name: "MAX",
    icon: "⬆️",
    what:
      "MAX returns the largest number in a range.",
    use:
      "It can be used to find the highest marks, sales or value.",
    steps: [
      "Select the result cell.",
      "Type =MAX(",
      "Select the range.",
      "Press Enter."
    ]
  },

  {
    name: "MIN",
    icon: "⬇️",
    what:
      "MIN returns the smallest number in a range.",
    use:
      "It can be used to find the lowest value in a dataset.",
    steps: [
      "Select the result cell.",
      "Type =MIN(",
      "Select the range.",
      "Press Enter."
    ]
  },

  {
    name: "IF",
    icon: "❓",
    what:
      "IF checks a condition and returns one result when it is true and another when it is false.",
    use:
      "It is useful for decisions such as Pass/Fail or Yes/No.",
    steps: [
      "Select the result cell.",
      "Type an IF formula.",
      "Enter the condition and results.",
      "Press Enter and check the result."
    ]
  },

  {
    name: "Percentage",
    icon: "%",
    what:
      "Percentage calculations show a value as a proportion of a total.",
    use:
      "They are commonly used for marks, discounts, growth and reports.",
    steps: [
      "Enter the required values.",
      "Create the percentage formula.",
      "Press Enter.",
      "Apply percentage formatting if required."
    ]
  }

];


/* =========================================================
   EXCEL COURSE
   ========================================================= */

function renderExcel() {

  const content = `

    <div class="jh-course-header">

      <div class="jh-course-heading">

        <div class="jh-large-course-icon excel">
          X
        </div>

        <div>

          <div class="jh-eyebrow">
            MICROSOFT EXCEL
          </div>

          <h2>
            MS Excel
          </h2>

          <p>
            Learn formulas and functions, then practise with spreadsheets.
          </p>

        </div>

      </div>


      <div class="jh-course-switch">

        <button
          class="active"
          onclick="openExcel()"
        >
          📊 Learning
        </button>

        <button
          onclick="showExcelPractice()"
        >
          🛠️ Practical Work
        </button>

      </div>

    </div>


    <section class="jh-learning-panel">

      <div class="jh-section-heading">

        <div>

          <h2>
            Excel Formulas & Functions
          </h2>

          <p>
            Select a formula to learn what it does and how to use it.
          </p>

        </div>

      </div>


      <div class="jh-excel-topic-grid">

        ${excelTopics
          .map(
            (topic, index) => `

              <button
                class="jh-excel-topic ${
                  index === 0
                    ? "active"
                    : ""
                }"
                onclick="selectExcelTopic(${index})"
              >

                <span>
                  ${escapeHTML(
                    topic.icon
                  )}
                </span>

                <strong>
                  ${escapeHTML(
                    topic.name
                  )}
                </strong>

              </button>

            `
          )
          .join("")}

      </div>


      <div id="excelLesson">

        ${renderExcelLesson(
          0
        )}

      </div>

    </section>

  `;


  getApp().innerHTML =
    mainLayout(content);

}


/* =========================================================
   EXCEL LESSON
   ========================================================= */

function renderExcelLesson(
  index
) {

  const topic =
    excelTopics[index] ||
    excelTopics[0];


  return `

    <article class="jh-excel-lesson">

      <div class="jh-lesson-top">

        <div>

          <div class="jh-eyebrow">
            EXCEL
          </div>

          <h2>
            ${escapeHTML(
              topic.name
            )}
          </h2>

        </div>


        <div class="jh-zoom-control">

          <button
            onclick="zoomOut()"
          >
            −
          </button>

          <span id="zoomValue">
            ${state.zoom}%
          </span>

          <button
            onclick="zoomIn()"
          >
            +
          </button>

          <button
            onclick="resetZoom()"
          >
            ↺
          </button>

        </div>

      </div>


      <div class="jh-explanation-grid">

        <section class="jh-explanation-card blue">

          <div class="jh-card-icon">
            💡
          </div>

          <div>

            <h3>
              ${t("what")}
            </h3>

            <p>
              ${escapeHTML(
                topic.what
              )}
            </p>

          </div>

        </section>


        <section class="jh-explanation-card green">

          <div class="jh-card-icon">
            🎯
          </div>

          <div>

            <h3>
              ${t("use")}
            </h3>

            <p>
              ${escapeHTML(
                topic.use
              )}
            </p>

          </div>

        </section>


        <section class="jh-explanation-card yellow">

          <div class="jh-card-icon">
            🪜
          </div>

          <div>

            <h3>
              ${t("steps")}
            </h3>

            <ol>

              ${topic.steps
                .map(
                  step => `
                    <li>
                      ${escapeHTML(
                        step
                      )}
                    </li>
                  `
                )
                .join("")}

            </ol>

          </div>

        </section>

      </div>


      <div class="jh-formula-example">

        <h3>
          Formula Example
        </h3>

        <code>
          ${
            topic.name === "SUM"
              ? "=SUM(A1:A10)"
              : topic.name === "AVERAGE"
              ? "=AVERAGE(A1:A10)"
              : topic.name === "COUNT"
              ? "=COUNT(A1:A10)"
              : topic.name === "MAX"
              ? "=MAX(A1:A10)"
              : topic.name === "MIN"
              ? "=MIN(A1:A10)"
              : topic.name === "IF"
              ? '=IF(A1>=40,"Pass","Fail")'
              : topic.name === "Percentage"
              ? "=Obtained/Total*100"
              : "=A1+B1"
          }
        </code>

      </div>


      <div class="jh-ai-inline">

        <div>

          <strong>
            🤖 Need help?
          </strong>

          <p>
            Ask the AI Teacher about this Excel topic.
          </p>

        </div>

        <button
          onclick="askAboutExcel(${index})"
        >
          ${t("askAI")}
        </button>

      </div>

    </article>

  `;

}


/* =========================================================
   SELECT EXCEL TOPIC
   ========================================================= */

function selectExcelTopic(
  index
) {

  document
    .querySelectorAll(
      ".jh-excel-topic"
    )
    .forEach(
      (button, i) => {

        button.classList.toggle(
          "active",
          i === index
        );

      }
    );


  const lesson =
    document.getElementById(
      "excelLesson"
    );


  if (lesson) {

    lesson.innerHTML =
      renderExcelLesson(
        index
      );

  }

}


/* =========================================================
   EXCEL PRACTICAL WORK
   ========================================================= */

function showExcelPractice() {

  const content = `

    <div class="jh-course-header">

      <div class="jh-course-heading">

        <div class="jh-large-course-icon excel">
          X
        </div>

        <div>

          <div class="jh-eyebrow">
            MICROSOFT EXCEL
          </div>

          <h2>
            MS Excel
          </h2>

          <p>
            Practical spreadsheets and formula exercises.
          </p>

        </div>

      </div>


      <div class="jh-course-switch">

        <button
          onclick="openExcel()"
        >
          📊 Learning
        </button>

        <button
          class="active"
          onclick="showExcelPractice()"
        >
          🛠️ Practical Work
        </button>

      </div>

    </div>


    <section class="jh-learning-panel">

      <div class="jh-coming-soon">

        <div class="jh-coming-icon">
          📊
        </div>

        <div>

          <h3>
            Excel Practice Sheets Coming Soon
          </h3>

          <p>
            Practical Excel worksheets and exercises will be added here soon.
          </p>

        </div>

      </div>

    </section>

  `;


  getApp().innerHTML =
    mainLayout(content);

}


/* =========================================================
   POWERPOINT
   ========================================================= */

const powerpointTopics = [

  {
    name: "Home",
    icon: "🏠",
    what:
      "The Home tab contains common commands for creating and formatting slides.",
    use:
      "Use it to format text, create slides and arrange basic content.",
    steps: [
      "Open the Home tab.",
      "Choose the required command.",
      "Apply it to the selected slide or object.",
      "Check the result."
    ]
  },

  {
    name: "Insert",
    icon: "➕",
    what:
      "The Insert tab adds pictures, shapes, charts, tables and other objects.",
    use:
      "Use it to add visual and data elements to presentations.",
    steps: [
      "Open Insert.",
      "Choose an object.",
      "Select or create the object.",
      "Position it on the slide."
    ]
  },

  {
    name: "Design",
    icon: "🎨",
    what:
      "Design controls themes, colours and overall presentation appearance.",
    use:
      "Use it to give slides a consistent professional appearance.",
    steps: [
      "Open Design.",
      "Choose a theme.",
      "Select variants if needed.",
      "Review the presentation."
    ]
  },

  {
    name: "Transitions",
    icon: "✨",
    what:
      "Transitions control how one slide changes to the next.",
    use:
      "Use them to create smooth movement between slides.",
    steps: [
      "Select a slide.",
      "Open Transitions.",
      "Choose an effect.",
      "Preview the transition."
    ]
  },

  {
    name: "Animations",
    icon: "🎬",
    what:
      "Animations control movement of objects on a slide.",
    use:
      "Use them to introduce or emphasize slide content.",
    steps: [
      "Select an object.",
      "Open Animations.",
      "Choose an animation.",
      "Preview the result."
    ]
  },

  {
    name: "Slide Show",
    icon: "▶️",
    what:
      "Slide Show tools are used to present slides to an audience.",
    use:
      "Use them when you want to deliver your presentation.",
    steps: [
      "Open Slide Show.",
      "Choose From Beginning or From Current Slide.",
      "Present your slides.",
      "Use navigation controls during the presentation."
    ]
  }

];


function renderPowerPoint() {

  const topics =
    powerpointTopics
      .map(
        (topic, index) => `

          <button
            class="jh-excel-topic ${
              index === 0
                ? "active"
                : ""
            }"
            onclick="selectPowerPointTopic(${index})"
          >

            <span>
              ${escapeHTML(
                topic.icon
              )}
            </span>

            <strong>
              ${escapeHTML(
                topic.name
              )}
            </strong>

          </button>

        `
      )
      .join("");


  const content = `

    <div class="jh-course-header">

      <div class="jh-course-heading">

        <div class="jh-large-course-icon powerpoint">
          P
        </div>

        <div>

          <div class="jh-eyebrow">
            MICROSOFT POWERPOINT
          </div>

          <h2>
            MS PowerPoint
          </h2>

          <p>
            Learn the essential tools for creating presentations.
          </p>

        </div>

      </div>

    </div>


    <section class="jh-learning-panel">

      <div class="jh-section-heading">

        <div>

          <h2>
            PowerPoint Learning
          </h2>

          <p>
            Select a topic to learn more.
          </p>

        </div>

      </div>


      <div class="jh-excel-topic-grid">

        ${topics}

      </div>


      <div id="powerpointLesson">

        ${renderPowerPointLesson(
          0
        )}

      </div>

    </section>

  `;


  getApp().innerHTML =
    mainLayout(content);

}


/* =========================================================
   POWERPOINT LESSON
   ========================================================= */

function renderPowerPointLesson(
  index
) {

  const topic =
    powerpointTopics[index] ||
    powerpointTopics[0];


  return `

    <article class="jh-excel-lesson">

      <div class="jh-lesson-top">

        <div>

          <div class="jh-eyebrow">
            POWERPOINT
          </div>

          <h2>
            ${escapeHTML(
              topic.name
            )}
          </h2>

        </div>

      </div>


      <div class="jh-explanation-grid">

        <section class="jh-explanation-card blue">

          <div class="jh-card-icon">
            💡
          </div>

          <div>

            <h3>
              ${t("what")}
            </h3>

            <p>
              ${escapeHTML(
                topic.what
              )}
            </p>

          </div>

        </section>


        <section class="jh-explanation-card green">

          <div class="jh-card-icon">
            🎯
          </div>

          <div>

            <h3>
              ${t("use")}
            </h3>

            <p>
              ${escapeHTML(
                topic.use
              )}
            </p>

          </div>

        </section>


        <section class="jh-explanation-card yellow">

          <div class="jh-card-icon">
            🪜
          </div>

          <div>

            <h3>
              ${t("steps")}
            </h3>

            <ol>

              ${topic.steps
                .map(
                  step => `
                    <li>
                      ${escapeHTML(
                        step
                      )}
                    </li>
                  `
                )
                .join("")}

            </ol>

          </div>

        </section>

      </div>


      <div class="jh-ai-inline">

        <div>

          <strong>
            🤖 Need help?
          </strong>

          <p>
            Ask the AI Teacher about this PowerPoint topic.
          </p>

        </div>

        <button
          onclick="askAboutPowerPoint(${index})"
        >
          ${t("askAI")}
        </button>

      </div>

    </article>

  `;

}


/* =========================================================
   SELECT POWERPOINT TOPIC
   ========================================================= */

function selectPowerPointTopic(
  index
) {

  document
    .querySelectorAll(
      ".jh-excel-topic"
    )
    .forEach(
      (button, i) => {

        button.classList.toggle(
          "active",
          i === index
        );

      }
    );


  const lesson =
    document.getElementById(
      "powerpointLesson"
    );


  if (lesson) {

    lesson.innerHTML =
      renderPowerPointLesson(
        index
      );

  }

}


/* =========================================================
   AI TEACHER PAGE
   ========================================================= */

function renderAITeacher() {

  const content = `

    <section class="jh-ai-page">

      <div class="jh-ai-hero">

        <div class="jh-ai-avatar">
          🤖
        </div>

        <div>

          <div class="jh-eyebrow">
            JOINING HANDS AI
          </div>

          <h2>
            AI Teacher
          </h2>

          <p>
            Ask questions about MS Word, Excel, PowerPoint or basic computer learning.
          </p>

        </div>

      </div>


      <div class="jh-ai-card">

        <div class="jh-ai-messages" id="aiMessages">

          <div class="jh-ai-message assistant">

            <div class="jh-ai-message-avatar">
              🤖
            </div>

            <div>

              <strong>
                AI Teacher
              </strong>

              <p>
                Hello! Ask me anything about computer learning. I can explain it step by step in English, Hindi or Hinglish.
              </p>

            </div>

          </div>

        </div>


        <form
          class="jh-ai-form"
          onsubmit="sendAIQuestion(event)"
        >

          <textarea
            id="aiQuestion"
            placeholder="Type your question here..."
            rows="3"
          ></textarea>


          <div class="jh-ai-form-bottom">

            <span>
              Press Send to ask your question.
            </span>

            <button
              type="submit"
            >
              Send 🚀
            </button>

          </div>

        </form>

      </div>

    </section>

  `;


  getApp().innerHTML =
    mainLayout(content);

}


/* =========================================================
   AI MESSAGE HELPERS
   ========================================================= */

function addAIMessage(
  role,
  text
) {

  const messages =
    document.getElementById(
      "aiMessages"
    );


  if (!messages) {
    return;
  }


  const item =
    document.createElement(
      "div"
    );


  item.className =
    `jh-ai-message ${role}`;


  item.innerHTML = `

    <div class="jh-ai-message-avatar">
      ${
        role === "user"
          ? "👤"
          : "🤖"
      }
    </div>

    <div>

      <strong>
        ${
          role === "user"
            ? "You"
            : "AI Teacher"
        }
      </strong>

      <p>
        ${escapeHTML(text)}
      </p>

    </div>

  `;


  messages.appendChild(
    item
  );


  messages.scrollTop =
    messages.scrollHeight;

}


/* =========================================================
   AI TEACHER REQUEST
   ========================================================= */

async function sendAIQuestion(
  event
) {

  event.preventDefault();


  const input =
    document.getElementById(
      "aiQuestion"
    );


  if (!input) {
    return;
  }


  const question =
    input.value.trim();


  if (!question) {
    return;
  }


  addAIMessage(
    "user",
    question
  );


  input.value = "";


  const typing =
    document.createElement(
      "div"
    );


  typing.className =
    "jh-ai-message assistant";


  typing.id =
    "aiTyping";


  typing.innerHTML = `

    <div class="jh-ai-message-avatar">
      🤖
    </div>

    <div>

      <strong>
        AI Teacher
      </strong>

      <p>
        Thinking...
      </p>

    </div>

  `;


  const messages =
    document.getElementById(
      "aiMessages"
    );


  if (messages) {

    messages.appendChild(
      typing
    );

    messages.scrollTop =
      messages.scrollHeight;

  }


  try {

    const response =
      await fetch(
        "/api/ask",
        {

          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body:
            JSON.stringify({

              question,

              course:
                state.course ||
                "General Computer Learning",

              project:
                ""

            })

        }
      );


    const data =
      await response.json();


    if (typing) {
      typing.remove();
    }


    if (!response.ok) {

      throw new Error(
        data?.error ||
        "AI Teacher could not answer."
      );

    }


    addAIMessage(
      "assistant",
      data.answer ||
      "I could not generate an answer."
    );

  }

  catch (error) {

    if (typing) {
      typing.remove();
    }


    addAIMessage(
      "assistant",
      "Sorry, I could not connect to the AI Teacher. Please check the server and OpenAI API configuration."
    );


    console.error(
      "AI Teacher request failed:",
      error
    );

  }

}


/* =========================================================
   AI CONTEXT QUESTIONS
   ========================================================= */

function askAIWithContext(
  question,
  course,
  project
) {

  state.course =
    course ||
    "General Computer Learning";


  state.aiContext =
    project ||
    "";


  openAITeacher();


  setTimeout(
    () => {

      const input =
        document.getElementById(
          "aiQuestion"
        );


      if (input) {

        input.value =
          question;

        input.focus();

      }

    },
    100
  );

}


function askAboutCurrentTool() {

  const tab =
    state.wordTab ||
    "MS Word";


  const tools =
    wordTools[tab] ||
    [];


  const tool =
    tools[state.selectedTool] ||
    tools[0];


  const question =
    tool
      ? `Please explain the MS Word ${tool.name} tool to me step by step.`
      : "Please help me learn MS Word.";


  askAIWithContext(
    question,
    "MS Word",
    tab
  );

}


function askAboutProject(
  id
) {

  const project =
    wordProjects.find(
      item => item.id === id
    );


  if (!project) {
    return;
  }


  askAIWithContext(

    `Please teach me how to complete ${project.title}. Give me simple step-by-step instructions.`,

    "MS Word",

    project.title

  );

}


function askAboutExcel(
  index
) {

  const topic =
    excelTopics[index];


  if (!topic) {
    return;
  }


  askAIWithContext(

    `Please explain Excel ${topic.name} with a simple example and step-by-step instructions.`,

    "MS Excel",

    topic.name

  );

}


function askAboutPowerPoint(
  index
) {

  const topic =
    powerpointTopics[index];


  if (!topic) {
    return;
  }


  askAIWithContext(

    `Please explain the PowerPoint ${topic.name} topic step by step.`,

    "MS PowerPoint",

    topic.name

  );

}/* =========================================================
   SIDEBAR AI TEACHER
   ========================================================= */

function createAITeacherPanel() {

  return `

    <aside class="jh-ai-side-panel">

      <div class="jh-ai-side-header">

        <div class="jh-ai-side-avatar">
          🤖
        </div>

        <div>

          <strong>
            AI Teacher
          </strong>

          <span>
            Ask me anything
          </span>

        </div>

      </div>


      <div
        class="jh-ai-side-messages"
        id="sideAIMessages"
      >

        <div class="jh-side-ai-message">

          <div class="jh-side-ai-avatar">
            🤖
          </div>

          <div>

            <strong>
              AI Teacher
            </strong>

            <p>
              Hi! Ask me a question about Word, Excel, PowerPoint or basic computer learning.
            </p>

          </div>

        </div>

      </div>


      <form
        class="jh-side-ai-form"
        onsubmit="sendSideAIQuestion(event)"
      >

        <textarea
          id="sideAIQuestion"
          rows="2"
          placeholder="Ask your question..."
        ></textarea>


        <button type="submit">
          Send 🚀
        </button>

      </form>

    </aside>

  `;

}


/* =========================================================
   SIDEBAR AI QUESTION
   ========================================================= */

async function sendSideAIQuestion(
  event
) {

  event.preventDefault();


  const input =
    document.getElementById(
      "sideAIQuestion"
    );


  const messages =
    document.getElementById(
      "sideAIMessages"
    );


  if (!input || !messages) {
    return;
  }


  const question =
    input.value.trim();


  if (!question) {
    return;
  }


  addSideAIMessage(
    "user",
    question
  );


  input.value = "";


  const typing =
    document.createElement(
      "div"
    );


  typing.className =
    "jh-side-ai-message";


  typing.id =
    "sideAITyping";


  typing.innerHTML = `

    <div class="jh-side-ai-avatar">
      🤖
    </div>

    <div>

      <strong>
        AI Teacher
      </strong>

      <p>
        Thinking...
      </p>

    </div>

  `;


  messages.appendChild(
    typing
  );


  messages.scrollTop =
    messages.scrollHeight;


  try {

    const response =
      await fetch(
        "/api/ask",
        {

          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body:
            JSON.stringify({

              question,

              course:
                state.course ||
                "General Computer Learning",

              project:
                state.aiContext ||
                ""

            })

        }
      );


    const data =
      await response.json();


    if (typing) {
      typing.remove();
    }


    if (!response.ok) {

      throw new Error(
        data?.error ||
        "AI Teacher could not answer."
      );

    }


    addSideAIMessage(
      "assistant",
      data.answer ||
      "I could not generate an answer."
    );

  }

  catch (error) {

    if (typing) {
      typing.remove();
    }


    addSideAIMessage(

      "assistant",

      "Sorry, I could not connect to the AI Teacher. Please check the server and OpenAI API key."

    );


    console.error(
      "Sidebar AI error:",
      error
    );

  }

}


/* =========================================================
   SIDEBAR AI MESSAGE
   ========================================================= */

function addSideAIMessage(
  role,
  text
) {

  const messages =
    document.getElementById(
      "sideAIMessages"
    );


  if (!messages) {
    return;
  }


  const item =
    document.createElement(
      "div"
    );


  item.className =
    "jh-side-ai-message";


  item.innerHTML = `

    <div class="jh-side-ai-avatar">

      ${
        role === "user"
          ? "👤"
          : "🤖"
      }

    </div>


    <div>

      <strong>

        ${
          role === "user"
            ? "You"
            : "AI Teacher"
        }

      </strong>


      <p>
        ${escapeHTML(text)}
      </p>

    </div>

  `;


  messages.appendChild(
    item
  );


  messages.scrollTop =
    messages.scrollHeight;

}


/* =========================================================
   GLOBAL SEARCH
   ========================================================= */

function searchContent(
  value
) {

  const query =
    String(value || "")
      .trim()
      .toLowerCase();


  if (!query) {
    return;
  }


  if (
    query.includes("word") ||
    query.includes("ms word")
  ) {

    openWord();

    return;

  }


  if (
    query.includes("excel") ||
    query.includes("formula")
  ) {

    openExcel();

    return;

  }


  if (
    query.includes("powerpoint") ||
    query.includes("power point")
  ) {

    renderPowerPoint();

    return;

  }


  if (
    query.includes("ai") ||
    query.includes("teacher")
  ) {

    openAITeacher();

    return;

  }

}


/* =========================================================
   SAFE HTML ESCAPE
   ========================================================= */

function escapeHTML(
  value
) {

  return String(
    value ?? ""
  )

    .replace(
      /&/g,
      "&amp;"
    )

    .replace(
      /</g,
      "&lt;"
    )

    .replace(
      />/g,
      "&gt;"
    )

    .replace(
      /"/g,
      "&quot;"
    )

    .replace(
      /'/g,
      "&#039;"
    );

}


/* =========================================================
   IMAGE PATH
   ========================================================= */

function imagePath(
  image
) {

  if (!image) {
    return "";
  }


  if (
    image.startsWith(
      "/"
    ) ||
    image.startsWith(
      "http"
    )
  ) {

    return image;

  }


  return "/" + image;

}


/* =========================================================
   IMAGE ZOOM
   ========================================================= */

function openImage(
  image
) {

  const modal =
    document.getElementById(
      "imageModal"
    );


  const img =
    document.getElementById(
      "modalImage"
    );


  if (!modal || !img) {
    return;
  }


  img.src =
    imagePath(image);


  modal.classList.add(
    "open"
  );

}


function closeImage() {

  const modal =
    document.getElementById(
      "imageModal"
    );


  if (modal) {

    modal.classList.remove(
      "open"
    );

  }

}


/* =========================================================
   ZOOM CONTROLS
   ========================================================= */

function zoomIn() {

  state.zoom =
    Math.min(
      180,
      Number(state.zoom || 100) + 10
    );


  updateZoom();

}


function zoomOut() {

  state.zoom =
    Math.max(
      60,
      Number(state.zoom || 100) - 10
    );


  updateZoom();

}


function resetZoom() {

  state.zoom = 100;

  updateZoom();

}


function updateZoom() {

  document
    .querySelectorAll(
      "#zoomValue"
    )
    .forEach(
      element => {

        element.textContent =
          `${state.zoom}%`;

      }
    );


  document
    .querySelectorAll(
      ".jh-zoomable-image"
    )
    .forEach(
      image => {

        image.style.transform =
          `scale(${state.zoom / 100})`;

      }
    );

}


/* =========================================================
   LANGUAGE SWITCH
   ========================================================= */

function toggleLanguage() {

  state.language =
    state.language === "en"
      ? "hi"
      : "en";


  render();

}


/* =========================================================
   DARK MODE
   ========================================================= */

function toggleDarkMode() {

  state.dark =
    !state.dark;


  document.body.classList.toggle(
    "dark",
    state.dark
  );


  localStorage.setItem(
    "jh-dark-mode",
    state.dark
      ? "1"
      : "0"
  );

}


/* =========================================================
   NAVIGATION
   ========================================================= */

function goHome() {

  state.page =
    "home";

  render();

}


function openWord() {

  state.page =
    "word";

  state.course =
    "MS Word";

  render();

}


function openExcel() {

  state.page =
    "excel";

  state.course =
    "MS Excel";

  renderExcel();

}


function openAITeacher() {

  state.page =
    "ai";

  renderAITeacher();

}


/* =========================================================
   INITIAL STATE
   ========================================================= */

if (
  typeof state ===
  "undefined"
) {

  window.state = {

    page:
      "home",

    course:
      "",

    wordTab:
      "Home",

    selectedTool:
      0,

    zoom:
      100,

    language:
      "en",

    dark:
      localStorage.getItem(
        "jh-dark-mode"
      ) === "1",

    aiContext:
      ""

  };

}


/* =========================================================
   IMAGE MODAL
   ========================================================= */

function ensureImageModal() {

  if (
    document.getElementById(
      "imageModal"
    )
  ) {

    return;

  }


  const modal =
    document.createElement(
      "div"
    );


  modal.id =
    "imageModal";


  modal.className =
    "image-modal";


  modal.innerHTML = `

    <button
      class="close-modal"
      onclick="closeImage()"
      aria-label="Close"
    >
      ×
    </button>


    <img
      id="modalImage"
      class="modal-img"
      alt="Zoomed learning image"
    >

  `;


  modal.addEventListener(
    "click",
    event => {

      if (
        event.target ===
        modal
      ) {

        closeImage();

      }

    }
  );


  document.body.appendChild(
    modal
  );

}


/* =========================================================
   KEYBOARD SUPPORT
   ========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key ===
      "Escape"
    ) {

      closeImage();

    }

  }
);


/* =========================================================
   START APPLICATION
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    ensureImageModal();

    if (
      typeof render ===
      "function"
    ) {

      render();

    }

  }
);
