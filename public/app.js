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

  howToOpen: true

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
    id === "home-page" ||
    id === "word"
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

  const app =
    document.getElementById("app");

  if (!app) {
    return;
  }


  app.innerHTML = `

    <div class="app">

      ${renderSidebar()}

      <main class="main">

        ${renderTopHeader()}

        ${renderWordHeader()}


        <div class="learning-layout">

          ${renderToolPanel()}

          ${renderLesson()}

        </div>

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


  /* WORD TABS */

  document
    .querySelectorAll("[data-tab]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const tab =
            button.dataset.tab;

          state.section = tab;

          state.selectedTool = 0;

          render();

        }
      );

    });


  /* TOOLS */

  document
    .querySelectorAll("[data-tool-index]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          state.selectedTool =
            Number(
              button.dataset.toolIndex
            );

          render();

        }
      );

    });


  /* ZOOM */

  document
    .querySelectorAll("[data-action]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const action =
            button.dataset.action;


          if (
            action === "zoom-in"
          ) {

            state.zoom =
              Math.min(
                150,
                state.zoom + 10
              );

            applyZoom();

            updateZoomText();

          }


          if (
            action === "zoom-out"
          ) {

            state.zoom =
              Math.max(
                70,
                state.zoom - 10
              );

            applyZoom();

            updateZoomText();

          }


          if (
            action === "theme"
          ) {

            state.darkMode =
              !state.darkMode;

            document.body.classList.toggle(
              "dark",
              state.darkMode
            );

            render();

          }


          if (
            action === "toggle-how"
          ) {

            state.howToOpen =
              !state.howToOpen;

            render();

          }

        }
      );

    });


  /* SIDEBAR */

  document
    .querySelectorAll("[data-nav]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const nav =
            button.dataset.nav;


          if (nav === "word") {

            state.section = "home";

            state.selectedTool = 0;

            render();

            return;

          }


          if (
            nav === "home-page"
          ) {

            state.section = "home";

            state.selectedTool = 0;

            render();

            return;

          }


          alert(
            `${button.textContent.trim()} section is coming soon.`
          );

        }
      );

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
