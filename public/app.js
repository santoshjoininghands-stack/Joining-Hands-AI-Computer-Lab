function showWordProject(lesson) {

  const app = document.getElementById("app");

  app.innerHTML = `

    <button class="back" onclick="showCourse('MS Word')">
      ← Back to MS Word Projects
    </button>

    <div class="word-practice-page">

      <!-- LEFT: INSTRUCTIONS -->

      <aside class="instructions-panel">

        <h1>${lesson.title}</h1>

        <h2>${lesson.topic}</h2>

        <h3>📋 Your Task</h3>

        <p>
          Recreate the project shown in the example using the
          practice document.
        </p>

        <h3>🪜 Steps</h3>

        <ol>
          <li>Look carefully at the project example.</li>
          <li>Open the practice document.</li>
          <li>Create the same layout and content.</li>
          <li>Use tables, pictures, shapes and formatting where required.</li>
          <li>Compare your work with the example.</li>
        </ol>

        <h3>👀 Project Example</h3>

        <div class="example-image-box">
          <img
            src="${lesson.image}"
            class="example-image"
            onclick="openImage('${lesson.image}')"
          >
        </div>

        <button
          class="full-image-btn"
          onclick="openImage('${lesson.image}')">
          🔍 View Full Size
        </button>

      </aside>


      <!-- MIDDLE: PRACTICE -->

      <section class="practice-panel">

        <div class="practice-header">

          <div>
            <h2>📝 Practice Area</h2>
            <p>Create the project here.</p>
          </div>

          <button onclick="downloadWordDocument()">
            ⬇ Download Word
          </button>

        </div>


        <!-- TOOLBAR -->

        <div class="word-toolbar">

          <button onclick="editorCommand('undo')">↶</button>
          <button onclick="editorCommand('redo')">↷</button>

          <select onchange="setFont(this.value)">
            <option value="">Font</option>
            <option value="Arial">Arial</option>
            <option value="Calibri">Calibri</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Verdana">Verdana</option>
          </select>

          <select onchange="setFontSize(this.value)">
            <option value="">Size</option>
            <option value="12">12</option>
            <option value="14">14</option>
            <option value="16">16</option>
            <option value="18">18</option>
            <option value="20">20</option>
            <option value="24">24</option>
            <option value="28">28</option>
            <option value="32">32</option>
          </select>

          <button onclick="editorCommand('bold')"><b>B</b></button>
          <button onclick="editorCommand('italic')"><i>I</i></button>
          <button onclick="editorCommand('underline')"><u>U</u></button>

          <button onclick="editorCommand('justifyLeft')">≡</button>
          <button onclick="editorCommand('justifyCenter')">≡</button>
          <button onclick="editorCommand('justifyRight')">≡</button>

          <button onclick="editorCommand('insertUnorderedList')">• List</button>
          <button onclick="editorCommand('insertOrderedList')">1. List</button>

          <button onclick="insertTable()">▦ Table</button>

          <button onclick="insertImage()">🖼️ Image</button>

          <button onclick="insertShape('rectangle')">▭ Shape</button>

          <button onclick="insertShape('circle')">○ Shape</button>

          <button onclick="insertLine()">― Line</button>

        </div>


        <!-- DOCUMENT -->

        <div
          id="wordEditor"
          class="word-editor"
          contenteditable="true"
          spellcheck="true">

          <h2>Start Your Project</h2>

          <p>
            Click here and start creating your document.
          </p>

          <p>
            Delete this text and create your project.
          </p>

        </div>


        <div class="editor-footer">

          <button onclick="savePractice()">
            💾 Save
          </button>

          <button onclick="clearEditor()">
            Clear
          </button>

          <span id="saveMessage"></span>

        </div>

      </section>


      <!-- RIGHT: AI TEACHER -->

      <aside class="ai-panel">

        <div class="ai-header">
          <h2>🤖 AI Teacher</h2>
          <p>Ask whenever you are stuck.</p>
        </div>

        <div class="quick-help">

          <button onclick="askQuick('How do I insert a table in MS Word?')">
            How to insert a table?
          </button>

          <button onclick="askQuick('How do I insert and resize a picture in MS Word?')">
            Insert / resize picture
          </button>

          <button onclick="askQuick('How do I make a line dashed in MS Word?')">
            Make dashed line
          </button>

          <button onclick="askQuick('How do I put text inside a table in MS Word?')">
            Text inside table
          </button>

        </div>

        <div
          id="aiMessages"
          class="ai-messages">

          <div class="ai-message">
            👋 Hi! I'm your AI Teacher.<br><br>
            Ask me how to use any MS Word feature.
          </div>

        </div>

        <div class="ai-input-area">

          <textarea
            id="aiQuestion"
            placeholder="Ask your question..."
            rows="3"></textarea>

          <button onclick="askAI()">
            Ask AI Teacher
          </button>

        </div>

      </aside>

    </div>
  `;
}


// ===========================
// IMAGE FULL SCREEN
// ===========================

function openImage(src) {

  const overlay = document.createElement("div");

  overlay.className = "image-overlay";

  overlay.innerHTML = `
    <button class="close-image"
      onclick="this.parentElement.remove()">
      ✕
    </button>

    <img src="${src}">
  `;

  document.body.appendChild(overlay);
}


// ===========================
// WORD TOOLBAR
// ===========================

function editorCommand(command) {

  document.execCommand(command, false, null);

  document.getElementById("wordEditor").focus();
}


function setFont(font) {

  if (!font) return;

  document.execCommand(
    "fontName",
    false,
    font
  );
}


function setFontSize(size) {

  if (!size) return;

  document.execCommand(
    "fontSize",
    false,
    "7"
  );

  document
    .querySelectorAll("#wordEditor font[size='7']")
    .forEach(el => {

      el.removeAttribute("size");
      el.style.fontSize = size + "px";

    });
}


// ===========================
// INSERT TABLE
// ===========================

function insertTable() {

  const rows =
    prompt("Number of rows:", "3");

  const cols =
    prompt("Number of columns:", "3");

  if (!rows || !cols) return;

  let table =
    `<table style="
      border-collapse:collapse;
      width:100%;
      margin:15px 0;
    ">`;

  for (let r = 0; r < Number(rows); r++) {

    table += "<tr>";

    for (let c = 0; c < Number(cols); c++) {

      table += `
        <td style="
          border:1px solid #555;
          padding:8px;
          min-width:50px;
        ">
          &nbsp;
        </td>
      `;

    }

    table += "</tr>";
  }

  table += "</table>";

  document.execCommand(
    "insertHTML",
    false,
    table
  );
}


// ===========================
// INSERT IMAGE
// ===========================

function insertImage() {

  const input =
    document.createElement("input");

  input.type = "file";
  input.accept = "image/*";

  input.onchange = function() {

    const file =
      input.files[0];

    if (!file) return;

    const reader =
      new FileReader();

    reader.onload = function(e) {

      const img = `
        <img
          src="${e.target.result}"
          style="
            max-width:100%;
            width:300px;
            display:block;
            margin:10px 0;
          "
        >
      `;

      document.execCommand(
        "insertHTML",
        false,
        img
      );

    };

    reader.readAsDataURL(file);
  };

  input.click();
}


// ===========================
// INSERT SHAPE
// ===========================

function insertShape(type) {

  let shape;

  if (type === "rectangle") {

    shape = `
      <div
        contenteditable="false"
        style="
          width:180px;
          height:90px;
          border:3px solid #244f91;
          margin:15px;
          display:inline-block;
        ">
      </div>
    `;

  } else {

    shape = `
      <div
        contenteditable="false"
        style="
          width:100px;
          height:100px;
          border:3px solid #244f91;
          border-radius:50%;
          margin:15px;
          display:inline-block;
        ">
      </div>
    `;

  }

  document.execCommand(
    "insertHTML",
    false,
    shape
  );
}


// ===========================
// INSERT LINE
// ===========================

function insertLine() {

  const line = `
    <hr
      style="
        border:0;
        border-top:2px dashed #333;
        margin:20px 0;
      "
    >
  `;

  document.execCommand(
    "insertHTML",
    false,
    line
  );
}


// ===========================
// SAVE
// ===========================

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
    "✓ Saved on this device.";

}


// ===========================
// CLEAR
// ===========================

function clearEditor() {

  if (
    confirm("Clear your entire document?")
  ) {

    document.getElementById(
      "wordEditor"
    ).innerHTML = "";

  }
}


// ===========================
// DOWNLOAD
// ===========================

function downloadWordDocument() {

  const content =
    document.getElementById(
      "wordEditor"
    ).innerHTML;

  const html = `
    <html>
    <head>
      <meta charset="UTF-8">
    </head>

    <body>
      ${content}
    </body>

    </html>
  `;

  const blob =
    new Blob(
      [html],
      {type:"application/msword"}
    );

  const url =
    URL.createObjectURL(blob);

  const link =
    document.createElement("a");

  link.href = url;

  link.download =
    "Joining-Hands-Practice.doc";

  link.click();

  URL.revokeObjectURL(url);
}


// ===========================
// AI TEACHER
// ===========================

async function askQuick(question) {

  document.getElementById(
    "aiQuestion"
  ).value = question;

  await askAI();
}


async function askAI() {

  const input =
    document.getElementById(
      "aiQuestion"
    );

  const question =
    input.value.trim();

  if (!question) return;

  const messages =
    document.getElementById(
      "aiMessages"
    );

  messages.innerHTML += `
    <div class="student-message">
      ${question}
    </div>
  `;

  input.value = "";

  const loading =
    document.createElement("div");

  loading.className =
    "ai-message";

  loading.textContent =
    "Thinking...";

  messages.appendChild(
    loading
  );

  messages.scrollTop =
    messages.scrollHeight;

  try {

    const response =
      await fetch(
        "/api/ai-teacher",
        {
          method:"POST",

          headers:{
            "Content-Type":
              "application/json"
          },

          body:JSON.stringify({

            question:question,

            course:"MS Word",

            project:
              document.querySelector(
                ".lesson-content h1"
              )?.textContent || "MS Word Project"

          })
        }
      );

    const data =
      await response.json();

    loading.remove();

    if (!response.ok) {
      throw new Error(
        data.error ||
        "AI Teacher is unavailable."
      );
    }

    const answer =
      document.createElement("div");

    answer.className =
      "ai-message";

    answer.textContent =
      data.answer;

    messages.appendChild(
      answer
    );

  } catch(error) {

    loading.textContent =
      "AI Teacher could not connect. Please check the server API setup.";

  }

  messages.scrollTop =
    messages.scrollHeight;
}
