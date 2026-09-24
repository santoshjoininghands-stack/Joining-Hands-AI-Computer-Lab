/* =========================================================
   JOINING HANDS
   COMPUTER LEARNING LAB
   ========================================================= */

"use strict";


/* =========================================================
   APPLICATION DATA
   ========================================================= */

const tabs = [
  {
    id: "home",
    icon: "🏠",
    name: "Home"
  },
  {
    id: "insert",
    icon: "📄",
    name: "Insert"
  },
  {
    id: "layout",
    icon: "📐",
    name: "Layout"
  },
  {
    id: "references",
    icon: "📚",
    name: "References"
  },
  {
    id: "mailings",
    icon: "✉️",
    name: "Mailings"
  },
  {
    id: "review",
    icon: "📝",
    name: "Review"
  },
  {
    id: "view",
    icon: "👁️",
    name: "View"
  },
  {
    id: "design",
    icon: "🎨",
    name: "Design"
  }
];


const tools = {

  home: [
    {
      name: "Clipboard",
      icon: "📋"
    },
    {
      name: "Font",
      icon: "🔤"
    },
    {
      name: "Paragraph",
      icon: "¶"
    },
    {
      name: "Styles",
      icon: "🖌️"
    },
    {
      name: "Editing",
      icon: "✏️"
    }
  ],

  insert: [
    {
      name: "Cover Page",
      icon: "📄",
      title: "Cover Page"
    },
    {
      name: "Blank Page",
      icon: "📄",
      title: "Blank Page"
    },
    {
      name: "Page Break",
      icon: "↵",
      title: "Page Break"
    },
    {
      name: "Table",
      icon: "▦",
      title: "Table"
    },
    {
      name: "Pictures",
      icon: "🏞️",
      title: "Pictures"
    },
    {
      name: "Shapes",
      icon: "◆",
      title: "Shapes"
    },
    {
      name: "Icons",
      icon: "⭐",
      title: "Icons"
    },
    {
      name: "3D Models",
      icon: "🧊",
      title: "3D Models"
    },
    {
      name: "SmartArt",
      icon: "🔷",
      title: "SmartArt"
    },
    {
      name: "Chart",
      icon: "📊",
      title: "Chart"
    },
    {
      name: "Screenshot",
      icon: "📷",
      title: "Screenshot"
    }
  ],

  layout: [
    {
      name: "Margins",
      icon: "📏"
    },
    {
      name: "Orientation",
      icon: "↔️"
    },
    {
      name: "Size",
      icon: "📐"
    },
    {
      name: "Columns",
      icon: "▥"
    },
    {
      name: "Breaks",
      icon: "↩️"
    },
    {
      name: "Line Numbers",
      icon: "🔢"
    },
    {
      name: "Hyphenation",
      icon: "➖"
    }
  ],

  references: [
    {
      name: "Table of Contents",
      icon: "📑"
    },
    {
      name: "Footnotes",
      icon: "🔢"
    },
    {
      name: "Citations",
      icon: "📚"
    },
    {
      name: "Bibliography",
      icon: "📖"
    },
    {
      name: "Captions",
      icon: "🏷️"
    },
    {
      name: "Index",
      icon: "📇"
    }
  ],

  mailings: [
    {
      name: "Envelopes",
      icon: "✉️"
    },
    {
      name: "Labels",
      icon: "🏷️"
    },
    {
      name: "Mail Merge",
      icon: "📨"
    },
    {
      name: "Select Recipients",
      icon: "👥"
    },
    {
      name: "Address Block",
      icon: "📮"
    }
  ],

  review: [
    {
      name: "Spelling & Grammar",
      icon: "✓"
    },
    {
      name: "Thesaurus",
      icon: "📖"
    },
    {
      name: "Word Count",
      icon: "🔢"
    },
    {
      name: "Comments",
      icon: "💬"
    },
    {
      name: "Track Changes",
      icon: "🔄"
    },
    {
      name: "Compare",
      icon: "⚖️"
    }
  ],

  view: [
    {
      name: "Read Mode",
      icon: "📖"
    },
    {
      name: "Print Layout",
      icon: "🖨️"
    },
    {
      name: "Web Layout",
      icon: "🌐"
    },
    {
      name: "Navigation Pane",
      icon: "🧭"
    },
    {
      name: "Zoom",
      icon: "🔍"
    }
  ],

  design: [
    {
      name: "Themes",
      icon: "🎨"
    },
    {
      name: "Colors",
      icon: "🌈"
    },
    {
      name: "Fonts",
      icon: "🔤"
    },
    {
      name: "Paragraph Spacing",
      icon: "↕️"
    },
    {
      name: "Watermark",
      icon: "💧"
    },
    {
      name: "Page Color",
      icon: "🖌️"
    },
    {
      name: "Page Borders",
      icon: "▣"
    }
  ]
};


/* =========================================================
   STATE
   ========================================================= */

const state = {

  section: "home",

  selectedTool: 0,

  zoom: 110,

  darkMode: false,

  howToOpen: true,

  wordMode: "chooser",
  page: "word"

};


/* =========================================================
   HELPER
   ========================================================= */

function escapeHTML(value) {

  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}


/* =========================================================
   GET CURRENT DATA
   ========================================================= */

function getCurrentTab() {

  return tabs.find(
    tab => tab.id === state.section
  ) || tabs[0];

}


function getCurrentTools() {

  return tools[state.section] || [];

}


function getCurrentTool() {

  const list = getCurrentTools();

  return list[state.selectedTool] || list[0];

}


/* =========================================================
   LESSON CONTENT
   ========================================================= */

function getLessonContent() {

  const tab = getCurrentTab();

  const tool = getCurrentTool();

  if (!tool) {

    return {

      title: tab.name,

      what:
        "This section contains useful Microsoft Word tools.",

      when:
        "Use these tools when working on your document.",

      example:
        "Select an option from the left side."

    };

  }


  const title =
    tool.title ||
    tool.name;


  const descriptions = {

    "Cover Page": {
      what:
        "Adds a professionally designed cover page to your document.",

      when:
        "Use it when you want to add a title page at the beginning of a document.",

      example:
        "Insert → Cover Page → Choose a design."
    },

    "Blank Page": {
      what:
        "Adds a new blank page at the cursor position.",

      when:
        "Use it when you need a completely empty page for a new section.",

      example:
        "Insert → Blank Page."
    },

    "Page Break": {
      what:
        "Moves the content after the cursor to a new page.",

      when:
        "Use it when you want a new page to begin at a specific location.",

      example:
        "Insert → Page Break."
    },

    "Table": {
      what:
        "Creates rows and columns for organizing information.",

      when:
        "Use tables when you need to present information in a structured format.",

      example:
        "Insert → Table → Select the required rows and columns."
    },

    "Pictures": {
      what:
        "Inserts a picture from your computer into the document.",

      when:
        "Use it when you want to add photographs, screenshots or other images.",

      example:
        "Insert → Pictures → This Device."
    },

    "Shapes": {
      what:
        "Adds shapes such as rectangles, circles, arrows and flowchart symbols.",

      when:
        "Use shapes for diagrams, labels, arrows and visual explanations.",

      example:
        "Insert → Shapes → Select a shape → Draw it on the page."
    },

    "Icons": {
      what:
        "Adds ready-made icons to your document.",

      when:
        "Use icons to make documents easier to understand visually.",

      example:
        "Insert → Icons → Search for an icon."
    }

  };


  return {

    title,

    what:
      descriptions[title]?.what ||
      `The ${title} option provides tools for working with your Word document.`,

    when:
      descriptions[title]?.when ||
      `Use ${title} when you need to work with this part of your document.`,

    example:
      descriptions[title]?.example ||
      `Open the ${tab.name} tab and select ${title}.`

  };

}


/* =========================================================
   WORD LEARNING / PRACTICAL WORKS
   ========================================================= */

const practicalProjects = Array.from({ length: 14 }, (_, i) => ({
  number: i + 1,
  title: `Practical Project ${i + 1}`,
  image: `/Project ${i + 1}.png`
}));

function renderWordChooser() {
  return `
    <section class="word-chooser">
      <div class="chooser-card">
        <div class="chooser-icon">📚</div>
        <h2>MS Word</h2>
        <p>Choose how you want to learn and practice Microsoft Word.</p>

        <div class="chooser-actions">
          <button type="button" class="chooser-btn learning-btn" data-word-mode="learning">
            📖
            <span>
              <strong>Learning</strong>
              <small>Learn Word tabs step-by-step</small>
            </span>
          </button>

          <button type="button" class="chooser-btn practical-btn" data-word-mode="practical">
            📁
            <span>
              <strong>Practical Works</strong>
              <small>Practice all 14 practical projects</small>
            </span>
          </button>
        </div>
      </div>
    </section>
  `;
}

function renderPracticalProjects() {
  return `
    <section class="practical-section">
      <div class="practical-header">
        <div>
          <h2>📁 MS Word Practical Works</h2>
          <p>Click any project to open its image in full screen.</p>
        </div>
        <button type="button" class="back-btn" data-word-mode="chooser">← Back</button>
      </div>

      <div class="projects-grid">
        ${practicalProjects.map(project => `
          <button
            type="button"
            class="project-card"
            data-project-image="${escapeHTML(project.image)}"
            data-project-title="${escapeHTML(project.title)}"
          >
            <div class="project-number">${project.number}</div>

            <div class="project-preview">
              <img
                src="${escapeHTML(project.image)}"
                alt="${escapeHTML(project.title)}"
                loading="lazy"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
              >
              <div class="project-missing">🖼️ Image not available</div>
            </div>

            <div class="project-name">${escapeHTML(project.title)}</div>
            <span class="project-open">Open Full Screen →</span>
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function openImageViewer(src, title) {
  const old = document.getElementById("image-viewer");
  if (old) old.remove();

  const viewer = document.createElement("div");
  viewer.id = "image-viewer";
  viewer.className = "image-viewer";

  viewer.innerHTML = `
    <button type="button" class="image-viewer-close">×</button>
    <div class="image-viewer-title">${escapeHTML(title || "Image")}</div>
    <img src="${escapeHTML(src)}" alt="${escapeHTML(title || "Image")}">
  `;

  document.body.appendChild(viewer);

  const close = () => viewer.remove();

  viewer.querySelector(".image-viewer-close")
    .addEventListener("click", close);

  viewer.addEventListener("click", event => {
    if (event.target === viewer) close();
  });
}

function renderWordContent() {

  if (state.wordMode === "practical") {
    return renderPracticalProjects();
  }

  if (state.wordMode === "learning") {
    return `
      ${renderWordHeader()}

      <div class="learning-layout">
        ${renderToolPanel()}
        ${renderLesson()}
      </div>
    `;
  }

  return renderWordChooser();
}

/* =========================================================
   SIDEBAR
   ========================================================= */

function renderSidebar() {

  return `

    <aside class="sidebar">

      <div class="logo-area">

        <div class="logo-icon">
          🎓
          <br>
          🤝
        </div>

        <div class="logo-text">

          <h1>
            JOINING<br>
            HANDS
          </h1>

          <p>
            AI Computer Learning<br>
            & Practical Lab
            by Santosh Kumar
          </p>

        </div>

      </div>


      <nav class="nav">

        ${renderNavItem(
          "home-page",
          "⌂",
          "Home"
        )}

        ${renderNavItem(
          "word",
          "📄",
          "MS Word"
        )}

        ${renderNavItem(
          "excel",
          "📊",
          "MS Excel"
        )}

        ${renderNavItem(
          "powerpoint",
          "🎮",
          "MS PowerPoint"
        )}

        ${renderNavItem(
          "english",
          "📖",
          "English"
        )}

      </nav>


      <div class="quick-title">
        QUICK LINKS
      </div>


      <nav class="nav">

        ${renderNavItem(
          "ai",
          "🤖",
          "AI Teacher"
        )}

        ${renderNavItem(
          "progress",
          "📈",
          "My Progress"
        )}

        ${renderNavItem(
          "tests",
          "📝",
          "Practice Tests"
        )}

        ${renderNavItem(
          "downloads",
          "⬇️",
          "Downloads"
        )}

      </nav>

    </aside>

  `;

}


function renderNavItem(
  id,
  icon,
  label
) {

  const active =
    (id === "word" && state.page === "word") ||
    (id === "home-page" && state.page === "home")
      ? "active"
      : "";

  return `

    <button
      class="nav-item ${active}"
      data-nav="${id}"
      type="button"
    >

      <span class="nav-icon">
        ${icon}
      </span>

      <span>
        ${label}
      </span>

    </button>

  `;

}


/* =========================================================
   TOP HEADER
   ========================================================= */

function renderTopHeader() {

  return `

    <div class="top-header">

      <div>

        <div class="welcome">
          Welcome back! 👋
        </div>

        <h1 class="main-title">
          Computer Learning
        </h1>

        <p class="subtitle">
          Learn step-by-step, practice every tool,
          and complete practical projects. 🎓
        </p>

      </div>


      <div class="controls">

        <button
          class="lang-btn active"
          type="button"
        >
          हिन्दी 🌐
        </button>

        <button
          class="lang-btn"
          type="button"
        >
          English 🌐
        </button>


        <div class="zoom-control">

          <span>
            🔍
          </span>

          <span class="zoom-value">
            ${state.zoom}%
          </span>

          <button
            type="button"
            data-action="zoom-out"
          >
            −
          </button>

          <button
            type="button"
            data-action="zoom-in"
          >
            +
          </button>

        </div>


        <button
          class="theme-btn"
          type="button"
          data-action="theme"
          title="Change theme"
        >
          ${state.darkMode ? "☀️" : "🌙"}
        </button>

      </div>

    </div>

  `;

}


/* =========================================================
   WORD HEADER
   ========================================================= */

function renderWordHeader() {

  return `

    <section class="word-header">

      <div class="word-header-top">

        <div class="word-logo">
          W
        </div>

        <div class="word-info">

          <h2>
            MS Word
          </h2>

          <p>
            Learn every important MS Word tab
            step-by-step with examples.
          </p>

        </div>

      </div>


      <div class="word-tabs">

        ${tabs.map(tab => `

          <button
            type="button"
            class="word-tab ${
              tab.id === state.section
                ? "active"
                : ""
            }"
            data-tab="${tab.id}"
          >

            ${tab.icon}
            ${tab.name}

          </button>

        `).join("")}

      </div>

    </section>

  `;

}


/* =========================================================
   TOOL PANEL
   ========================================================= */

function renderToolPanel() {

  const list = getCurrentTools();

  const tab = getCurrentTab();

  return `

    <aside class="tool-panel">

      <div class="tool-panel-title">

        ▦
        Tools in ${escapeHTML(tab.name)} Tab

      </div>


      <div class="tool-list">

        ${list.map(
          (tool, index) => `

            <button
              type="button"
              class="tool-item ${
                index === state.selectedTool
                  ? "active"
                  : ""
              }"
              data-tool-index="${index}"
            >

              <span class="tool-name">

                <span class="tool-icon">
                  ${tool.icon}
                </span>

                <span>
                  ${escapeHTML(tool.name)}
                </span>

              </span>

              <span class="arrow">
                ›
              </span>

            </button>

          `
        ).join("")}

      </div>

    </aside>

  `;

}


/* =========================================================
   LESSON
   ========================================================= */

function renderLesson() {

  const content =
    getLessonContent();

  const tool =
    getCurrentTool();

  return `

    <section class="lesson">

      <div class="lesson-title">

        <span class="lesson-title-icon">
          ${tool?.icon || "📄"}
        </span>

        <h2>
          ${escapeHTML(content.title)}
        </h2>

      </div>


      <div class="info-grid">


        <div class="info-card blue">

          <h3>

            <span class="card-icon">
              🔵
            </span>

            What does it do?

          </h3>

          <p>
            ${escapeHTML(content.what)}
          </p>

        </div>


        <div class="info-card green">

          <h3>

            <span class="card-icon">
              🟢
            </span>

            When should you use it?

          </h3>

          <p>
            ${escapeHTML(content.when)}
          </p>

        </div>


        <div class="info-card yellow">

          <h3>

            <span class="card-icon">
              💡
            </span>

            Example

          </h3>

          <p>
            ${escapeHTML(content.example)}
          </p>

        </div>


      </div>


      <div
        class="how-to ${
          state.howToOpen
            ? ""
            : "collapsed"
        }"
      >

        <button
          type="button"
          class="how-header"
          data-action="toggle-how"
        >

          <span class="how-title">

            📖
            How to use this option?

          </span>

          <span class="how-arrow">
            ^
          </span>

        </button>


        ${
          state.howToOpen
            ? renderSteps(content)
            : ""
        }

      </div>

    </section>

  `;

}


/* =========================================================
   STEPS
   ========================================================= */

function renderSteps(content) {

  return `

    <div class="steps">


      <div class="step">

        <div class="step-number">
          1
        </div>

        <div class="step-text">
          Open Microsoft Word and
          select the appropriate tab.
        </div>

        <div class="step-image">

          <div
            style="
              height:100%;
              display:flex;
              align-items:center;
              justify-content:center;
              font-size:42px;
            "
          >
            📄
          </div>

        </div>

      </div>


      <div class="step">

        <div class="step-number">
          2
        </div>

        <div class="step-text">

          Find
          <strong>
            ${escapeHTML(content.title)}
          </strong>
          in the tools list and click it.

        </div>

        <div class="step-image">

          <div
            style="
              height:100%;
              display:flex;
              align-items:center;
              justify-content:center;
              font-size:42px;
            "
          >
            🖱️
          </div>

        </div>

      </div>


      <div class="step">

        <div class="step-number">
          3
        </div>

        <div class="step-text">

          Follow the instructions and
          practice the option yourself.

        </div>

        <div class="step-image">

          <div
            style="
              height:100%;
              display:flex;
              align-items:center;
              justify-content:center;
              font-size:42px;
            "
          >
            🎯
          </div>

        </div>

      </div>


      <div class="example-box">

        <strong>
          💡 Practice:
        </strong>

        <br><br>

        Try this option in Microsoft Word
        and repeat the steps until you
        can use it without help.

      </div>

    </div>

  `;

}


/* =========================================================
   COMPLETE RENDER
   ========================================================= */

function render() {

  const app = document.getElementById("app");

  if (!app) {
    return;
  }

  const content =
    state.page === "word"
      ? renderWordContent()
      : `
        <section class="word-chooser">
          <div class="chooser-card">
            <div class="chooser-icon">🏠</div>
            <h2>Welcome to Joining Hands</h2>
            <p>Choose <strong>MS Word</strong> from the left menu to continue.</p>
          </div>
        </section>
      `;

  app.innerHTML = `

    <div class="app">

      ${renderSidebar()}

      <main class="main">

        ${renderTopHeader()}

        ${content}

      </main>

    </div>

  `;

  attachEvents();
  applyZoom();

}


/* =========================================================
   EVENTS
   ========================================================= */

function attachEvents() {

  /* WORD MODE */

  document
    .querySelectorAll("[data-word-mode]")
    .forEach(button => {

      button.addEventListener("click", () => {

        state.wordMode = button.dataset.wordMode;

        if (state.wordMode === "learning") {
          state.section = "home";
          state.selectedTool = 0;
        }

        render();

      });

    });


  /* WORD TABS */

  document
    .querySelectorAll("[data-tab]")
    .forEach(button => {

      button.addEventListener("click", () => {

        state.section = button.dataset.tab;
        state.selectedTool = 0;
        state.wordMode = "learning";

        render();

      });

    });


  /* TOOLS */

  document
    .querySelectorAll("[data-tool-index]")
    .forEach(button => {

      button.addEventListener("click", () => {

        state.selectedTool =
          Number(button.dataset.toolIndex);

        render();

      });

    });


  /* PRACTICAL PROJECTS */

  document
    .querySelectorAll("[data-project-image]")
    .forEach(button => {

      button.addEventListener("click", () => {

        openImageViewer(
          button.dataset.projectImage,
          button.dataset.projectTitle
        );

      });

    });


  /* ZOOM / THEME / HOW TO */

  document
    .querySelectorAll("[data-action]")
    .forEach(button => {

      button.addEventListener("click", () => {

        const action = button.dataset.action;

        if (action === "zoom-in") {

          state.zoom =
            Math.min(150, state.zoom + 10);

          applyZoom();
          updateZoomText();

        }

        if (action === "zoom-out") {

          state.zoom =
            Math.max(70, state.zoom - 10);

          applyZoom();
          updateZoomText();

        }

        if (action === "theme") {

          state.darkMode =
            !state.darkMode;

          document.body.classList.toggle(
            "dark",
            state.darkMode
          );

          render();

        }

        if (action === "toggle-how") {

          state.howToOpen =
            !state.howToOpen;

          render();

        }

      });

    });


  /* SIDEBAR */

  document
    .querySelectorAll("[data-nav]")
    .forEach(button => {

      button.addEventListener("click", () => {

        const nav = button.dataset.nav;

        if (nav === "word") {

          state.page = "word";
          state.wordMode = "chooser";
          state.section = "home";
          state.selectedTool = 0;

          render();
          return;

        }

        if (nav === "home-page") {

          state.page = "home";
          render();
          return;

        }

        alert(
          `${button.textContent.trim()} section is coming soon.`
        );

      });

    });

}


/* =========================================================
   ZOOM
   ========================================================= */

function applyZoom() {

  const main =
    document.querySelector(".main");

  if (!main) {
    return;
  }

  main.style.zoom =
    `${state.zoom / 100}`;

}


function updateZoomText() {

  const element =
    document.querySelector(".zoom-value");

  if (element) {

    element.textContent =
      `${state.zoom}%`;

  }

}


/* =========================================================
   START APPLICATION
   ========================================================= */

function startApp() {

  document.body.classList.toggle(
    "dark",
    state.darkMode
  );

  render();

}


/* =========================================================
   DOM READY
   ========================================================= */

if (
  document.readyState === "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    startApp,
    {
      once: true
    }
  );

} else {

  startApp();

}


/* =========================================================
   WORD CHOOSER / PRACTICAL WORKS STYLES
   ========================================================= */

const joiningHandsExtraStyles = document.createElement("style");

joiningHandsExtraStyles.textContent = `
.word-chooser {
  padding: 28px;
}

.chooser-card {
  max-width: 900px;
  margin: 25px auto;
  padding: 42px;
  border-radius: 28px;
  background: rgba(255,255,255,.97);
  box-shadow: 0 15px 45px rgba(55,35,120,.12);
  text-align: center;
}

.chooser-icon {
  font-size: 58px;
  margin-bottom: 8px;
}

.chooser-card h2 {
  font-size: 34px;
  margin: 8px 0;
}

.chooser-card p {
  color: #667085;
  font-size: 17px;
}

.chooser-actions {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.chooser-btn {
  border: 0;
  border-radius: 20px;
  padding: 25px;
  display: flex;
  align-items: center;
  gap: 18px;
  text-align: left;
  cursor: pointer;
  font-size: 24px;
  transition: .2s;
}

.chooser-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 28px rgba(50,40,120,.16);
}

.chooser-btn span {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.chooser-btn small {
  font-size: 14px;
  font-weight: 500;
}

.learning-btn {
  background: #eaf1ff;
  color: #2855d9;
}

.practical-btn {
  background: #f1e9ff;
  color: #7139d9;
}

.practical-section {
  padding: 28px;
}

.practical-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 22px;
}

.practical-header h2 {
  margin: 0 0 6px;
  font-size: 30px;
}

.practical-header p {
  margin: 0;
  color: #667085;
}

.back-btn {
  border: 0;
  border-radius: 12px;
  padding: 12px 18px;
  background: #eef0ff;
  color: #4d36c9;
  font-weight: 700;
  cursor: pointer;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.project-card {
  border: 1px solid #e5e7eb;
  border-radius: 18px;
  padding: 12px;
  background: #fff;
  cursor: pointer;
  text-align: left;
  box-shadow: 0 8px 22px rgba(30,30,80,.07);
}

.project-card:hover {
  transform: translateY(-3px);
}

.project-number {
  display: inline-flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #eef0ff;
  color: #5535d8;
  font-weight: 800;
  margin-bottom: 8px;
}

.project-preview {
  height: 190px;
  border-radius: 12px;
  overflow: hidden;
  background: #f7f8fc;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-preview img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.project-missing {
  display: none;
  align-items: center;
  justify-content: center;
  color: #777;
  height: 100%;
}

.project-name {
  font-weight: 800;
  margin: 12px 4px 5px;
}

.project-open {
  color: #5b3bd1;
  font-size: 13px;
  font-weight: 700;
  margin-left: 4px;
}

.image-viewer {
  position: fixed;
  inset: 0;
  z-index: 99999;
  background: rgba(8,10,25,.94);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 70px 30px 30px;
}

.image-viewer img {
  max-width: 96vw;
  max-height: 88vh;
  object-fit: contain;
  background: #fff;
  border-radius: 8px;
}

.image-viewer-close {
  position: absolute;
  top: 18px;
  right: 24px;
  width: 48px;
  height: 48px;
  border: 0;
  border-radius: 50%;
  background: #fff;
  color: #222;
  font-size: 32px;
  cursor: pointer;
}

.image-viewer-title {
  position: absolute;
  top: 22px;
  left: 30px;
  color: #fff;
  font-size: 18px;
  font-weight: 800;
}

@media (max-width: 900px) {
  .chooser-actions,
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
`;

document.head.appendChild(joiningHandsExtraStyles);
