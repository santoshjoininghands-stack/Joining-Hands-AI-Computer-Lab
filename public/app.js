Joining Hands - app.js
/* =========================================================
   JOINING HANDS - AI COMPUTER LEARNING LAB
   MAIN APPLICATION
   ========================================================= */

const state = {

  section: "home",

  course: null,

  wordView: null,

  tab: null,

  toolIndex: 0,

  expanded: false,

  practicalOpen: false,

  projectId: null,

  lang: "en"

};


/* =========================================================
   AI TEACHER STATE
   ========================================================= */

const aiState = {

  open: false,

  loading: false,

  messages: [],

  question: "",

  course: "",

  project: ""

};


/* =========================================================
   APP ROOT
   ========================================================= */

function getAppRoot() {

  let root = document.getElementById("app");

  if (!root) {

    root = document.querySelector(".app");

  }

  return root;

}


/* =========================================================
   LANGUAGE
   ========================================================= */

function isHindi() {

  return state.lang === "hi";

}


/* =========================================================
   HTML ESCAPE
   ========================================================= */

function escapeHTML(value) {

  return String(value ?? "")

    .replace(/&/g, "&amp;")

    .replace(/</g, "&lt;")

    .replace(/>/g, "&gt;")

    .replace(/"/g, "&quot;")

    .replace(/'/g, "&#039;");

}


/* =========================================================
   IMAGE PATH
   ========================================================= */

function imagePath(file) {

  if (!file) return "";

  if (
    file.startsWith("/") ||
    file.startsWith("http://") ||
    file.startsWith("https://") ||
    file.startsWith("data:")
  ) {

    return file;

  }

  return "/" + file;

}


/* =========================================================
   WORD TAB DATA
   ========================================================= */

const tabImages = {

  Home: "Home.png",

  Insert: "Insert.png",

  Design: null,

  Layout: "Page Layout.png",

  References: "References.png",

  Mailings: "Mailing.png",

  Review: "Review.png",

  View: "View.png"

};


/* =========================================================
   TAB DESCRIPTIONS
   ========================================================= */

const tabDescriptions = {

  Home: {

    title: "Home Tab",

    description:
      "The Home Tab contains the most commonly used tools for typing, editing and formatting text.",

    hindi:
      "Home Tab में text type करने, edit करने और formatting करने के लिए सबसे ज्यादा इस्तेमाल होने वाले tools होते हैं."

  },

  Insert: {

    title: "Insert Tab",

    description:
      "The Insert Tab is used to add tables, pictures, shapes, charts, links, headers, footers and other objects to a document.",

    hindi:
      "Insert Tab का उपयोग document में table, picture, shapes, charts, links, header, footer और दूसरी चीजें जोड़ने के लिए किया जाता है."

  },

  Design: {

    title: "Design Tab",

    description:
      "The Design Tab is used to change the overall appearance, theme, colors and document background.",

    hindi:
      "Design Tab का उपयोग document की overall appearance, theme, colors और background बदलने के लिए किया जाता है."

  },

  Layout: {

    title: "Page Layout Tab",

    description:
      "The Layout Tab controls page margins, orientation, size, columns, spacing and page arrangement.",

    hindi:
      "Layout Tab का उपयोग page margins, orientation, size, columns, spacing और page arrangement को control करने के लिए किया जाता है."

  },

  References: {

    title: "References Tab",

    description:
      "The References Tab helps create tables of contents, footnotes, citations, captions and other reference information.",

    hindi:
      "References Tab का उपयोग Table of Contents, footnotes, citations, captions और reference information बनाने के लिए किया जाता है."

  },

  Mailings: {

    title: "Mailings Tab",

    description:
      "The Mailings Tab is mainly used for mail merge, envelopes, labels and personalized documents.",

    hindi:
      "Mailings Tab का उपयोग Mail Merge, envelopes, labels और personalized documents बनाने के लिए किया जाता है."

  },

  Review: {

    title: "Review Tab",

    description:
      "The Review Tab provides tools for spelling, grammar, comments, tracking changes and document protection.",

    hindi:
      "Review Tab में spelling, grammar, comments, Track Changes और document protection जैसे tools होते हैं."

  },

  View: {

    title: "View Tab",

    description:
      "The View Tab controls how the document appears on screen and provides tools such as zoom, navigation and different views.",

    hindi:
      "View Tab का उपयोग document को screen पर किस तरह देखना है, zoom, navigation और अलग-अलग views को control करने के लिए किया जाता है."

  }

};


/* =========================================================
   HOME TAB TOOLS
   ========================================================= */

const tabData = {

  Home: [

    [
      "📋",
      "Paste",
      "Inserts copied or cut content into the document.",
      "Use it when you want to place copied or cut content somewhere in the document.",
      "Click Home → Clipboard → Paste.",
      [
        "Copy or cut the content.",
        "Place the cursor where you want the content.",
        "Open the Home tab.",
        "Click Paste.",
        "The copied or cut content will appear at the cursor position."
      ]
    ],

    [
      "✂️",
      "Cut",
      "Removes selected content and places it on the Clipboard.",
      "Use it when you want to move content from one location to another.",
      "Select the content → Home → Cut.",
      [
        "Select the text, picture or object.",
        "Open the Home tab.",
        "Click Cut.",
        "The selected content will be removed.",
        "Place the cursor at the new location.",
        "Click Paste."
      ]
    ],

    [
      "📄",
      "Copy",
      "Creates a copy of selected content without removing the original.",
      "Use it when you need the same content in more than one place.",
      "Select the content → Home → Copy.",
      [
        "Select the text or object.",
        "Open the Home tab.",
        "Click Copy.",
        "Move the cursor to the new location.",
        "Click Paste."
      ]
    ],

    [
      "🖌️",
      "Format Painter",
      "Copies formatting from one piece of content and applies it to another.",
      "Use it when you want two different pieces of text to have the same formatting.",
      "Select formatted text → Format Painter → select the target text.",
      [
        "Select the text that already has the formatting you want.",
        "Click Format Painter.",
        "Move the pointer to the text where you want the formatting.",
        "Select the target text.",
        "The formatting will be copied."
      ]
    ],

    [
      "🔤",
      "Font Name",
      "Changes the typeface used for text.",
      "Use it when you want to change the appearance or style of the text.",
      "Select text → Font Name → choose a font.",
      [
        "Select the text.",
        "Open the Home tab.",
        "Find the Font group.",
        "Open the Font Name list.",
        "Choose a font such as Arial, Calibri or Times New Roman."
      ]
    ],

    [
      "🔢",
      "Font Size",
      "Changes the size of selected text.",
      "Use it when you want text to be larger or smaller.",
      "Select text → Font Size → enter or select a size.",
      [
        "Select the text.",
        "Open the Home tab.",
        "Find Font Size.",
        "Choose the required size.",
        "The selected text will change to that size."
      ]
    ],

    [
      "🔼",
      "Increase Font Size",
      "Makes the selected text larger.",
      "Use it when you want to increase text size quickly.",
      "Select text → Increase Font Size.",
      [
        "Select the text.",
        "Open the Home tab.",
        "Click Increase Font Size.",
        "The text size will increase."
      ]
    ],

    [
      "🔽",
      "Decrease Font Size",
      "Makes the selected text smaller.",
      "Use it when you want to reduce text size quickly.",
      "Select text → Decrease Font Size.",
      [
        "Select the text.",
        "Open the Home tab.",
        "Click Decrease Font Size.",
        "The text size will become smaller."
      ]
    ],

    [
      "🔠",
      "Change Case",
      "Changes text between uppercase, lowercase and other letter cases.",
      "Use it when you want to change capitalization without typing the text again.",
      "Select text → Change Case → choose the required case.",
      [
        "Select the text.",
        "Open the Home tab.",
        "Click Change Case.",
        "Choose UPPERCASE, lowercase, Sentence case or another option.",
        "The selected text will change."
      ]
    ],

    [
      "🧹",
      "Clear All Formatting",
      "Removes formatting from selected text and returns it to normal formatting.",
      "Use it when unwanted formatting has been applied to text.",
      "Select text → Clear All Formatting.",
      [
        "Select the formatted text.",
        "Open the Home tab.",
        "Click Clear All Formatting.",
        "The formatting will be removed."
      ]
    ],

    [
      "B",
      "Bold",
      "Makes text thicker and darker.",
      "Use it for important words, headings or information you want to emphasize.",
      "Select text → Bold.",
      [
        "Select the text.",
        "Open the Home tab.",
        "Click Bold.",
        "The selected text becomes bold.",
        "Shortcut: Ctrl + B."
      ]
    ],

    [
      "I",
      "Italic",
      "Makes text slanted.",
      "Use it to emphasize words or phrases.",
      "Select text → Italic.",
      [
        "Select the text.",
        "Open the Home tab.",
        "Click Italic.",
        "The text becomes slanted.",
        "Shortcut: Ctrl + I."
      ]
    ],

    [
      "U",
      "Underline",
      "Places a line below selected text.",
      "Use it to emphasize important text.",
      "Select text → Underline.",
      [
        "Select the text.",
        "Open the Home tab.",
        "Click Underline.",
        "A line will appear below the text.",
        "Shortcut: Ctrl + U."
      ]
    ],

    [
      "S",
      "Strikethrough",
      "Places a line through the middle of selected text.",
      "Use it when showing deleted, cancelled or outdated information.",
      "Select text → Strikethrough.",
      [
        "Select the text.",
        "Open the Home tab.",
        "Open the Font group.",
        "Click Strikethrough.",
        "A line appears through the selected text."
      ]
    ],

    [
      "H₂",
      "Subscript",
      "Places text slightly below the normal text line and makes it smaller.",
      "Use it for chemical formulas such as H₂O.",
      "Select text → Subscript.",
      [
        "Select the character or text.",
        "Open the Home tab.",
        "Click Subscript.",
        "The selected text moves below the normal text line."
      ]
    ],

    [
      "X²",
      "Superscript",
      "Places text slightly above the normal text line and makes it smaller.",
      "Use it for mathematical powers such as X².",
      "Select text → Superscript.",
      [
        "Select the character or text.",
        "Open the Home tab.",
        "Click Superscript.",
        "The selected text moves above the normal text line."
      ]
    ],

    [
      "🖍️",
      "Text Highlight Color",
      "Adds a colored highlight behind selected text.",
      "Use it to make important text easy to notice.",
      "Select text → Text Highlight Color → choose a color.",
      [
        "Select the text.",
        "Open the Home tab.",
        "Click Text Highlight Color.",
        "Choose a color.",
        "The selected text will be highlighted."
      ]
    ],

    [
      "A",
      "Font Color",
      "Changes the color of selected text.",
      "Use it to emphasize or visually organize information.",
      "Select text → Font Color → choose a color.",
      [
        "Select the text.",
        "Open the Home tab.",
        "Click Font Color.",
        "Choose the required color.",
        "The selected text changes color."
      ]
    ],

    [
      "✨",
      "Text Effects",
      "Applies visual effects such as outline, shadow, glow and other effects.",
      "Use it for decorative headings or special text.",
      "Select text → Text Effects → choose an effect.",
      [
        "Select the text.",
        "Open the Home tab.",
        "Open Text Effects.",
        "Choose the required effect.",
        "The selected text receives the effect."
      ]
    ],

    [
      "•",
      "Bullets",
      "Creates a bulleted list.",
      "Use it when the order of items is not important.",
      "Select text or place the cursor → Bullets.",
      [
        "Place the cursor where you want the list.",
        "Open the Home tab.",
        "Click Bullets.",
        "Type the first item.",
        "Press Enter for the next bullet.",
        "Press Enter twice to finish the list."
      ]
    ],

    [
      "1.",
      "Numbering",
      "Creates a numbered list.",
      "Use it when items need a sequence or order.",
      "Place the cursor → Numbering → type the list.",
      [
        "Place the cursor where you want the list.",
        "Open the Home tab.",
        "Click Numbering.",
        "Type the first item.",
        "Press Enter for the next number.",
        "Press Enter twice to finish."
      ]
    ],

    [
      "1.1",
      "Multilevel List",
      "Creates lists with multiple levels or sub-levels.",
      "Use it for outlines, chapters, topics and subtopics.",
      "Home → Multilevel List → choose a style.",
      [
        "Place the cursor where you want the list.",
        "Open the Home tab.",
        "Click Multilevel List.",
        "Choose a list style.",
        "Type the main item.",
        "Use Tab to create a lower level."
      ]
    ],

    [
      "→",
      "Increase Indent",
      "Moves a paragraph farther inside from the left margin.",
      "Use it to create sub-levels or move content inward.",
      "Select paragraph → Increase Indent.",
      [
        "Select or place the cursor in the paragraph.",
        "Open the Home tab.",
        "Click Increase Indent.",
        "The paragraph moves inward."
      ]
    ],

    [
      "←",
      "Decrease Indent",
      "Moves a paragraph back toward the left margin.",
      "Use it when you want to reduce indentation.",
      "Select paragraph → Decrease Indent.",
      [
        "Select or place the cursor in the paragraph.",
        "Open the Home tab.",
        "Click Decrease Indent.",
        "The paragraph moves toward the left margin."
      ]
    ],

    [
      "↕",
      "Line & Paragraph Spacing",
      "Changes the amount of space between lines and paragraphs.",
      "Use it to improve readability or match document formatting requirements.",
      "Home → Line and Paragraph Spacing → choose a spacing value.",
      [
        "Select the paragraph or paragraphs.",
        "Open the Home tab.",
        "Click Line and Paragraph Spacing.",
        "Choose 1.0, 1.15, 1.5, 2.0 or another value.",
        "The spacing changes."
      ]
    ],

    [
      "A-Z",
      "Sort",
      "Arranges selected text or list items in a chosen order.",
      "Use it to arrange information alphabetically or numerically.",
      "Select the list → Sort → choose the order.",
      [
        "Select the list or text.",
        "Open the Home tab.",
        "Click Sort.",
        "Choose the sorting options.",
        "Choose ascending or descending order.",
        "Click OK."
      ]
    ],

    [
      "¶",
      "Show/Hide",
      "Shows or hides paragraph marks, spaces and other formatting marks.",
      "Use it when you need to understand spacing and paragraph formatting.",
      "Home → Show/Hide ¶.",
      [
        "Open the Home tab.",
        "Find the Paragraph group.",
        "Click Show/Hide ¶.",
        "Formatting marks will appear.",
        "Click it again to hide them."
      ]
    ],

    [
      "⬅",
      "Align Left",
      "Aligns text with the left margin.",
      "Use it for normal paragraphs and left-aligned content.",
      "Select paragraph → Align Left.",
      [
        "Select the paragraph.",
        "Open the Home tab.",
        "Click Align Left.",
        "The text aligns with the left margin.",
        "Shortcut: Ctrl + L."
      ]
    ],

    [
      "↔",
      "Center",
      "Places text in the center between the margins.",
      "Use it for titles, headings and centered information.",
      "Select paragraph → Center.",
      [
        "Select the paragraph.",
        "Open the Home tab.",
        "Click Center.",
        "The text moves to the center.",
        "Shortcut: Ctrl + E."
      ]
    ],

    [
      "➡",
      "Align Right",
      "Aligns text with the right margin.",
      "Use it when information needs to appear on the right side.",
      "Select paragraph → Align Right.",
      [
        "Select the paragraph.",
        "Open the Home tab.",
        "Click Align Right.",
        "The text aligns with the right margin.",
        "Shortcut: Ctrl + R."
      ]
    ],

    [
      "☰",
      "Justify",
      "Aligns text evenly with both the left and right margins.",
      "Use it for professional paragraphs and documents.",
      "Select paragraph → Justify.",
      [
        "Select the paragraph.",
        "Open the Home tab.",
        "Click Justify.",
        "The paragraph aligns with both margins.",
        "Shortcut: Ctrl + J."
      ]
    ]

  ],

  Insert: [

    [
      "📋",
      "Table",
      "Creates a table using rows and columns.",
      "Use it when information needs to be arranged in rows and columns, such as student marks, attendance, price lists or schedules.",
      "Insert → Table → select the required rows and columns.",
      [
        "Place the cursor where you want the table.",
        "Open the Insert tab.",
        "Click Table.",
        "Move over the grid to select the required number of rows and columns.",
        "Click to insert the table.",
        "Enter your information into the cells."
      ]
    ],

    [
      "🖼️",
      "Pictures",
      "Inserts a picture from your computer or available location.",
      "Use it when you want to add photos, screenshots, logos or other images.",
      "Insert → Pictures → choose the picture.",
      [
        "Place the cursor where you want the picture.",
        "Open the Insert tab.",
        "Click Pictures.",
        "Choose the required source.",
        "Select the image.",
        "Click Insert."
      ]
    ],

    [
      "🔷",
      "Shapes",
      "Adds shapes such as rectangles, circles, arrows and callouts.",
      "Use shapes for diagrams, flowcharts, labels and visual explanations.",
      "Insert → Shapes → choose a shape → draw it.",
      [
        "Open the Insert tab.",
        "Click Shapes.",
        "Choose the required shape.",
        "Move the pointer to the document.",
        "Click and drag to draw the shape.",
        "Use Shape Format to change its appearance."
      ]
    ],

    [
      "📊",
      "Chart",
      "Inserts a chart to visually represent data.",
      "Use it when numerical information is easier to understand as a graph or chart.",
      "Insert → Chart → choose chart type → enter data.",
      [
        "Open the Insert tab.",
        "Click Chart.",
        "Choose a chart type.",
        "Click OK.",
        "Enter or replace the sample data.",
        "Close the data window when finished."
      ]
    ],

    [
      "🔗",
      "Link",
      "Adds a clickable hyperlink to a webpage, file or location.",
      "Use it when readers need quick access to another resource.",
      "Select text → Insert → Link → enter the address.",
      [
        "Select the text you want to make clickable.",
        "Open the Insert tab.",
        "Click Link.",
        "Enter or paste the web address.",
        "Click OK.",
        "The selected text becomes a hyperlink."
      ]
    ],

    [
      "🔢",
      "Page Number",
      "Adds page numbers to a document.",
      "Use it in reports, assignments, books and long documents.",
      "Insert → Page Number → choose a position and style.",
      [
        "Open the Insert tab.",
        "Click Page Number.",
        "Choose the location.",
        "Choose a page number style.",
        "Word inserts page numbers into the document."
      ]
    ],

    [
      "🔤",
      "Text Box",
      "Creates a movable box containing text.",
      "Use it for side notes, labels, quotations or special information.",
      "Insert → Text Box → choose a style or draw a box.",
      [
        "Open the Insert tab.",
        "Click Text Box.",
        "Choose a built-in text box or draw one.",
        "Click inside the box.",
        "Type your text.",
        "Move or resize the box as required."
      ]
    ],

    [
      "➕",
      "Header",
      "Adds content to the top area of pages.",
      "Use it for document titles, company names or repeated information.",
      "Insert → Header → choose a style.",
      [
        "Open the Insert tab.",
        "Click Header.",
        "Choose a header style.",
        "Type your content.",
        "Click Close Header and Footer."
      ]
    ],

    [
      "➖",
      "Footer",
      "Adds content to the bottom area of pages.",
      "Use it for page information, document names or other repeated content.",
      "Insert → Footer → choose a style.",
      [
        "Open the Insert tab.",
        "Click Footer.",
        "Choose a footer style.",
        "Enter your content.",
        "Click Close Header and Footer."
      ]
    ]

  ],

  Design: [

    [
      "🎨",
      "Themes",
      "Applies a coordinated design theme to the document.",
      "Use it when you want the document to have a consistent professional appearance.",
      "Design → Themes → choose a theme.",
      [
        "Open the Design tab.",
        "Click Themes.",
        "Move over the available themes to preview them.",
        "Click the theme you want.",
        "The document design changes."
      ]
    ],

    [
      "🌈",
      "Colors",
      "Changes the document theme color combination.",
      "Use it when you want to change the overall color scheme.",
      "Design → Colors → choose a color set.",
      [
        "Open the Design tab.",
        "Click Colors.",
        "Preview the available color sets.",
        "Choose the required colors."
      ]
    ],

    [
      "🔤",
      "Fonts",
      "Changes the font combination used by the document theme.",
      "Use it to create consistent heading and body text formatting.",
      "Design → Fonts → choose a font combination.",
      [
        "Open the Design tab.",
        "Click Fonts.",
        "Choose a font combination.",
        "The document's theme fonts will update."
      ]
    ],

    [
      "💧",
      "Watermark",
      "Adds faint text or an image behind the document content.",
      "Use it for Draft, Confidential, company names or other background identification.",
      "Design → Watermark → choose a watermark or Custom Watermark.",
      [
        "Open the Design tab.",
        "Click Watermark.",
        "Choose a ready-made watermark such as Draft or Confidential.",
        "For your own watermark, choose Custom Watermark.",
        "Choose Text watermark or Picture watermark.",
        "Enter the text or select the picture.",
        "Click Apply or OK."
      ]
    ],

    [
      "🎨",
      "Page Color",
      "Changes the background color of the document page.",
      "Use it when you need a colored document background.",
      "Design → Page Color → choose a color.",
      [
        "Open the Design tab.",
        "Click Page Color.",
        "Choose the required color.",
        "The page background changes."
      ]
    ],

    [
      "▣",
      "Page Borders",
      "Adds a border around the page.",
      "Use it for certificates, decorative documents, assignments or formal pages.",
      "Design → Page Borders → choose border settings.",
      [
        "Open the Design tab.",
        "Click Page Borders.",
        "Choose the border style.",
        "Choose color and width if required.",
        "Choose where the border should apply.",
        "Click OK."
      ]
    ]

  ],

  Layout: [

    [
      "📐",
      "Margins",
      "Controls the blank space around the edges of the page.",
      "Use it when you need standard, narrow or custom page margins.",
      "Layout → Margins → choose a margin setting.",
      [
        "Open the Layout tab.",
        "Click Margins.",
        "Choose Normal, Narrow, Moderate or another setting.",
        "For custom margins, choose Custom Margins.",
        "Enter the required measurements.",
        "Click OK."
      ]
    ],

    [
      "↕️",
      "Orientation",
      "Changes the page between Portrait and Landscape.",
      "Use Landscape for wide tables or content and Portrait for normal documents.",
      "Layout → Orientation → Portrait or Landscape.",
      [
        "Open the Layout tab.",
        "Click Orientation.",
        "Choose Portrait or Landscape.",
        "The page orientation changes."
      ]
    ],

    [
      "📄",
      "Size",
      "Changes the paper size used by the document.",
      "Use it when printing on a specific paper size such as A4 or Letter.",
      "Layout → Size → choose the paper size.",
      [
        "Open the Layout tab.",
        "Click Size.",
        "Choose A4, Letter or another size.",
        "The page size changes."
      ]
    ],

    [
      "📰",
      "Columns",
      "Divides text into multiple vertical columns.",
      "Use it for newsletters, brochures and newspaper-style documents.",
      "Layout → Columns → choose the number of columns.",
      [
        "Select the text if you only want part of the document in columns.",
        "Open the Layout tab.",
        "Click Columns.",
        "Choose Two, Three or another option.",
        "The text is arranged into columns."
      ]
    ],

    [
      "↔️",
      "Indent",
      "Controls how far a paragraph is positioned from the margins.",
      "Use it to organize paragraphs and create structured layouts.",
      "Layout → Indent → adjust Left or Right.",
      [
        "Select the paragraph.",
        "Open the Layout tab.",
        "Find the Indent settings.",
        "Enter the required Left or Right indent.",
        "The paragraph position changes."
      ]
    ],

    [
      "↕️",
      "Spacing",
      "Controls the space before and after paragraphs.",
      "Use it to make documents easier to read and properly formatted.",
      "Layout → Spacing → adjust Before or After.",
      [
        "Select the paragraph or paragraphs.",
        "Open the Layout tab.",
        "Find Spacing.",
        "Change Before or After.",
        "The paragraph spacing changes."
      ]
    ]

  ],

  References: [

    [
      "📚",
      "Table of Contents",
      "Creates a list of headings with page numbers.",
      "Use it in long reports, projects, books and assignments.",
      "References → Table of Contents → choose a style.",
      [
        "Apply Heading styles to your headings.",
        "Place the cursor where you want the table.",
        "Open References.",
        "Click Table of Contents.",
        "Choose an automatic style.",
        "Word creates the table."
      ]
    ],

    [
      "📌",
      "Footnote",
      "Adds explanatory or reference information at the bottom of a page.",
      "Use it when additional information needs to be provided without interrupting the main text.",
      "References → Insert Footnote.",
      [
        "Place the cursor after the relevant text.",
        "Open References.",
        "Click Insert Footnote.",
        "Word moves the cursor to the bottom of the page.",
        "Type the footnote information."
      ]
    ],

    [
      "📝",
      "Citation",
      "Adds a source reference to a document.",
      "Use it when writing research papers, reports or academic assignments.",
      "References → Insert Citation → Add New Source.",
      [
        "Place the cursor where the citation should appear.",
        "Open References.",
        "Click Insert Citation.",
        "Choose Add New Source.",
        "Enter the source information.",
        "Click OK."
      ]
    ],

    [
      "🏷️",
      "Caption",
      "Adds a descriptive label to a picture, table or figure.",
      "Use it when figures and tables need proper numbering and descriptions.",
      "Select the object → References → Insert Caption.",
      [
        "Select the picture, table or figure.",
        "Open References.",
        "Click Insert Caption.",
        "Choose the label.",
        "Enter the caption.",
        "Click OK."
      ]
    ]

  ],

  Mailings: [

    [
      "✉️",
      "Mail Merge",
      "Creates personalized copies of a document for multiple recipients.",
      "Use it for letters, certificates, invitations and other documents containing different recipient information.",
      "Mailings → Start Mail Merge → choose document type.",
      [
        "Open the Mailings tab.",
        "Click Start Mail Merge.",
        "Choose Letters, E-mail Messages, Labels or another option.",
        "Select or create the recipient list.",
        "Insert the required merge fields.",
        "Preview the results.",
        "Finish and merge."
      ]
    ],

    [
      "👥",
      "Select Recipients",
      "Chooses the list of people or records used in a mail merge.",
      "Use it after starting a mail merge when personalized information comes from a list.",
      "Mailings → Select Recipients.",
      [
        "Open Mailings.",
        "Start Mail Merge.",
        "Click Select Recipients.",
        "Choose an existing list or create a new list.",
        "Confirm the recipients."
      ]
    ],

    [
      "🏷️",
      "Labels",
      "Creates printable labels.",
      "Use it for addresses, product labels, folders and similar tasks.",
      "Mailings → Labels.",
      [
        "Open Mailings.",
        "Click Labels.",
        "Enter the label address or text.",
        "Choose the label options.",
        "Click New Document or Print."
      ]
    ],

    [
      "✉️",
      "Envelopes",
      "Creates and prints envelopes with address information.",
      "Use it when preparing physical letters for mailing.",
      "Mailings → Envelopes.",
      [
        "Open Mailings.",
        "Click Envelopes.",
        "Enter the delivery address.",
        "Enter the return address if required.",
        "Choose the envelope options.",
        "Click Print or Add to Document."
      ]
    ]

  ],

  Review: [

    [
      "✓",
      "Spelling & Grammar",
      "Checks the document for spelling and grammar issues.",
      "Use it before submitting or sharing a document.",
      "Review → Spelling & Grammar.",
      [
        "Open the Review tab.",
        "Click Spelling & Grammar.",
        "Review each suggested correction.",
        "Choose Ignore, Change or another option.",
        "Continue until the review is complete."
      ]
    ],

    [
      "💬",
      "New Comment",
      "Adds a comment to selected content.",
      "Use it when giving feedback or making notes without changing the original text.",
      "Select text → Review → New Comment.",
      [
        "Select the relevant text.",
        "Open Review.",
        "Click New Comment.",
        "Type your comment.",
        "Click outside the comment when finished."
      ]
    ],

    [
      "🔄",
      "Track Changes",
      "Records changes made to a document.",
      "Use it when multiple people are editing or reviewing a document.",
      "Review → Track Changes.",
      [
        "Open the Review tab.",
        "Click Track Changes.",
        "Edit the document.",
        "Word records additions, deletions and formatting changes.",
        "Turn Track Changes off when finished."
      ]
    ],

    [
      "🔒",
      "Protect Document",
      "Restricts editing or access to parts of a document.",
      "Use it when you need to prevent unwanted changes.",
      "Review → Protect → choose a protection option.",
      [
        "Open Review.",
        "Choose the appropriate protection option.",
        "Set the required restrictions.",
        "Add a password if required.",
        "Confirm the protection."
      ]
    ]

  ],

  View: [

    [
      "🔍",
      "Zoom",
      "Changes the magnification level used to view the document.",
      "Use it when text or pages are too small or too large on screen.",
      "View → Zoom → choose a zoom percentage.",
      [
        "Open the View tab.",
        "Click Zoom.",
        "Choose the required percentage.",
        "Click OK."
      ]
    ],

    [
      "📄",
      "Print Layout",
      "Shows the document approximately as it will appear when printed.",
      "Use it for normal document editing and print preparation.",
      "View → Print Layout.",
      [
        "Open the View tab.",
        "Click Print Layout.",
        "The document will display in print-style view."
      ]
    ],

    [
      "🧭",
      "Navigation Pane",
      "Shows a navigation panel for finding headings, pages and search results.",
      "Use it to move quickly through long documents.",
      "View → Navigation Pane.",
      [
        "Open the View tab.",
        "Select Navigation Pane.",
        "The navigation panel appears on the side.",
        "Use headings or search to move through the document."
      ]
    ]

  ]

};


/* =========================================================
   PRACTICAL PROJECTS
   ========================================================= */

const projects = [

  {
    id: 1,
    title: "Professional Resume",
    description: "Create a professional resume using MS Word.",
    image: "Project 1.png"
  },

  {
    id: 2,
    title: "Formal Letter",
    description: "Create and format a formal letter.",
    image: "Project 2.png"
  },

  {
    id: 3,
    title: "Student Marksheet",
    description: "Create a marksheet using tables and formatting.",
    image: "Project 3.png"
  },

  {
    id: 4,
    title: "Invitation Card",
    description: "Design an attractive invitation card.",
    image: "Project 4.png"
  },

  {
    id: 5,
    title: "Certificate",
    description: "Create a professional certificate.",
    image: "Project 5.png"
  },

  {
    id: 6,
    title: "School Time Table",
    description: "Create a structured school timetable.",
    image: "Project 6.png"
  },

  {
    id: 7,
    title: "Business Letter",
    description: "Prepare a professional business letter.",
    image: "Project 7.png"
  },

  {
    id: 8,
    title: "Newsletter",
    description: "Create a multi-column newsletter.",
    image: "Project 8.png"
  },

  {
    id: 9,
    title: "Project Report",
    description: "Create a properly formatted project report.",
    image: "Project 9.png"
  },

  {
    id: 10,
    title: "Brochure",
    description: "Design a simple professional brochure.",
    image: "Project 10.png"
  },

  {
    id: 11,
    title: "Advertisement",
    description: "Create an advertisement using Word tools.",
    image: "Project 11.png"
  },

  {
    id: 12,
    title: "Meeting Notice",
    description: "Create a formal meeting notice.",
    image: "Project 12.png"
  },

  {
    id: 13,
    title: "Mail Merge",
    description: "Create personalized documents using Mail Merge.",
    image: "Project 13.png"
  },

  {
    id: 14,
    title: "Final Word Project",
    description: "Complete a full professional MS Word project.",
    image: "Project 14.png"
  }

];  /*
   * =========================================================
   * CONTINUE WORD DATA / VIEW TOOLS
   * =========================================================
   */

  View: [

    [
      "🔍",
      "Zoom",
      "Changes the magnification level used to view the document.",
      "Use it when text or pages are too small or too large on screen.",
      "View → Zoom → choose a zoom percentage.",
      [
        "Open the View tab.",
        "Click Zoom.",
        "Choose the required zoom percentage.",
        "Click OK.",
        "The document appears larger or smaller on screen."
      ]
    ],

    [
      "🔎",
      "100% Zoom",
      "Returns the document view to 100% magnification.",
      "Use it when you want to return to the normal document viewing size.",
      "View → Zoom → 100%.",
      [
        "Open the View tab.",
        "Click Zoom.",
        "Choose 100%.",
        "The document returns to 100% magnification."
      ]
    ],

    [
      "📄",
      "One Page",
      "Displays one complete page on the screen.",
      "Use it when you want to see the overall appearance of a page.",
      "View → Zoom → One Page.",
      [
        "Open the View tab.",
        "Open the Zoom options.",
        "Choose One Page.",
        "Word adjusts the view so one complete page is visible."
      ]
    ],

    [
      "📑",
      "Multiple Pages",
      "Displays more than one page at the same time.",
      "Use it when you want to compare nearby pages or see the document layout.",
      "View → Zoom → Multiple Pages.",
      [
        "Open the View tab.",
        "Open the Zoom options.",
        "Choose Multiple Pages.",
        "Select the required page arrangement if available."
      ]
    ],

    [
      "🧭",
      "Navigation Pane",
      "Displays a navigation panel for searching and moving through the document.",
      "Use it for long documents when you need to quickly find headings, pages or text.",
      "View → Navigation Pane.",
      [
        "Open the View tab.",
        "Click Navigation Pane.",
        "A panel appears on the left side.",
        "Use the Search box to find text.",
        "Use Headings to jump between sections.",
        "Use Pages to move between pages."
      ]
    ],

    [
      "📏",
      "Ruler",
      "Shows horizontal and vertical rulers around the document.",
      "Use it to set margins, tabs and paragraph indentation accurately.",
      "View → Ruler.",
      [
        "Open the View tab.",
        "Find the Show group.",
        "Select Ruler.",
        "The ruler appears around the document.",
        "Use the ruler to adjust indents and tab positions."
      ]
    ],

    [
      "▦",
      "Gridlines",
      "Displays a grid that helps position objects accurately.",
      "Use it when arranging pictures, shapes or other objects.",
      "View → Gridlines.",
      [
        "Open the View tab.",
        "Find the Show group.",
        "Turn on Gridlines.",
        "A grid appears behind the document objects."
      ]
    ],

    [
      "📌",
      "Sidebar / Navigation",
      "Provides additional navigation and document controls.",
      "Use it when working with a long or structured document.",
      "View → Navigation Pane or related navigation option.",
      [
        "Open the View tab.",
        "Choose the required navigation option.",
        "Use the displayed panel to move through the document."
      ]
    ]

  ]

};


/* =========================================================
   APPLICATION STATE INITIALIZATION
   ========================================================= */

function resetWordState() {

  state.course = "word";

  state.wordView = null;

  state.tab = null;

  state.toolIndex = 0;

  /*
   * IMPORTANT:
   * Instructions are collapsed when a tab is first opened.
   */
  state.expanded = false;

  state.practicalOpen = false;

  state.projectId = null;

}


/* =========================================================
   LANGUAGE HELPERS
   ========================================================= */

function textForEnglish(text) {

  return text || "";

}


function textForHindi(text, hindiText) {

  if (isHindi() && hindiText) {

    return hindiText;

  }

  return text || "";

}


/* =========================================================
   SIDEBAR
   ========================================================= */

function renderSidebar(active) {

  return `
    <aside class="jh-sidebar">

      <div class="jh-brand">

        <div class="jh-brand-symbol">

          <img
            src="/logo.jpeg"
            alt="Joining Hands"
            class="jh-logo-image"
            style="
              width:100%;
              height:100%;
              object-fit:contain;
              display:block;
            "
          />

        </div>

        <div>

          <h2>
            JOINING<br>
            HANDS
          </h2>

          <p>
            AI Computer Learning
            <br>
            & Practical Lab
          </p>

        </div>

      </div>


      <nav class="jh-main-nav">

        <button
          type="button"
          class="jh-nav-item ${active === "home" ? "active" : ""}"
          onclick="goHome()"
        >
          🏠
          <span>Home</span>
        </button>


        <button
          type="button"
          class="jh-nav-item ${active === "word" ? "active" : ""}"
          onclick="openWord()"
        >
          📝
          <span>MS Word</span>
        </button>


        <button
          type="button"
          class="jh-nav-item ${active === "excel" ? "active" : ""}"
          onclick="openExcel()"
        >
          📊
          <span>MS Excel</span>
        </button>


        <button
          type="button"
          class="jh-nav-item ${active === "powerpoint" ? "active" : ""}"
          onclick="openPowerPoint()"
        >
          🎞️
          <span>MS PowerPoint</span>
        </button>

      </nav>


      <div class="jh-sidebar-divider"></div>


      <div class="jh-quick-title">
        QUICK LINKS
      </div>


      <nav class="jh-quick-nav">

        <button
          type="button"
          class="jh-quick-item"
          onclick="openAITeacher()"
        >
          🤖
          <span>AI Teacher</span>
        </button>


        <button
          type="button"
          class="jh-quick-item"
          onclick="showComingSoon('My Progress')"
        >
          📈
          <span>My Progress</span>
        </button>


        <button
          type="button"
          class="jh-quick-item"
          onclick="showComingSoon('Practice Tests')"
        >
          📝
          <span>Practice Tests</span>
        </button>


        <button
          type="button"
          class="jh-quick-item"
          onclick="showComingSoon('Downloads')"
        >
          ⬇️
          <span>Downloads</span>
        </button>


        <button
          type="button"
          class="jh-quick-item"
          onclick="showComingSoon('Help & Support')"
        >
          🎧
          <span>Help & Support</span>
        </button>

      </nav>


      <div class="jh-sidebar-motivation">

        <div class="jh-motivation-icon">
          🏆
        </div>

        <h3>
          Keep Learning,
          <br>
          Keep Growing!
        </h3>

        <p>
          Practice daily and become an expert.
        </p>

        <div class="jh-stars">
          ⭐⭐⭐⭐⭐
        </div>

      </div>

    </aside>
  `;

}


/* =========================================================
   TOP HEADER
   ========================================================= */

function renderTopHeader(active) {

  const hindi = isHindi();

  return `
    <header class="jh-top-header">

      <div class="jh-welcome">

        <div class="jh-welcome-small">
          ${hindi ? "Joining Hands Learning Portal" : "Joining Hands Learning Portal"}
        </div>

        <h1>
          ${
            hindi
              ? "सीखें • अभ्यास करें • आगे बढ़ें"
              : "Learn • Practice • Grow"
          }
        </h1>

        <p>
          ${
            hindi
              ? "Computer skills सीखें और practical projects के साथ practice करें."
              : "Learn computer skills and practice them with practical projects."
          }
        </p>

      </div>


      <div class="jh-header-controls">

        <button
          type="button"
          class="jh-language-btn ${!hindi ? "active" : ""}"
          onclick="changeLanguage('en')"
        >
          English
        </button>


        <button
          type="button"
          class="jh-language-btn hindi ${hindi ? "active" : ""}"
          onclick="changeLanguage('hi')"
        >
          हिन्दी
        </button>


        <button
          type="button"
          class="jh-header-ai-btn"
          onclick="openAITeacher()"
        >
          🤖 AI Teacher
        </button>


        <button
          type="button"
          class="jh-theme-btn"
          onclick="toggleTheme()"
          title="Change theme"
        >
          🌙
        </button>

      </div>

    </header>
  `;

}


/* =========================================================
   HOME PAGE
   ========================================================= */

function renderHome() {

  const hindi = isHindi();

  return `

    ${renderTopHeader("home")}


    <section class="jh-home-hero">

      <span class="jh-home-badge">
        🎓 Joining Hands Computer Learning
      </span>

      <h1>
        ${
          hindi
            ? "Computer Skills को आसान तरीके से सीखें"
            : "Learn Computer Skills the Easy Way"
        }
      </h1>

      <p>
        ${
          hindi
            ? "Step-by-step learning, practical work और AI Teacher की मदद से अपने computer skills को मजबूत बनाएं."
            : "Build your computer skills with step-by-step lessons, practical work and help from your AI Teacher."
        }
      </p>

    </section>


    <section class="jh-home-section">

      <div class="jh-section-heading">

        <div class="jh-section-icon">
          🤝
        </div>

        <div>

          <h2>
            ${
              hindi
                ? "Joining Hands के बारे में"
                : "About Joining Hands"
            }
          </h2>

          <p>
            ${
              hindi
                ? "हमारी learning initiative के बारे में जानकारी"
                : "Information about our learning initiative"
            }
          </p>

        </div>

      </div>


      <div class="jh-coming-soon-card">

        <div class="jh-coming-icon">
          🚀
        </div>

        <h3>
          ${
            hindi
              ? "जल्द आ रहा है"
              : "Coming Soon"
          }
        </h3>

        <p>
          ${
            hindi
              ? "Joining Hands के बारे में detailed information जल्द यहां उपलब्ध होगी."
              : "Detailed information about Joining Hands will be available here soon."
          }
        </p>

        <span class="jh-coming-badge">
          Coming Soon
        </span>

      </div>

    </section>


    <section class="jh-home-section">

      <div class="jh-section-heading">

        <div class="jh-section-icon">
          💻
        </div>

        <div>

          <h2>
            ${
              hindi
                ? "हमारे Courses"
                : "Courses We Offer"
            }
          </h2>

          <p>
            ${
              hindi
                ? "अपना course चुनें और learning शुरू करें"
                : "Choose a course and start learning"
            }
          </p>

        </div>

      </div>


      <div class="jh-course-grid">


        <button
          type="button"
          class="jh-course-card"
          onclick="openWord()"
        >

          <div class="jh-course-card-icon">
            📝
          </div>

          <div class="jh-course-card-body">

            <h3>
              MS Word
            </h3>

            <span class="jh-course-subtitle">
              Learning + Practical Work
            </span>

            <p>
              ${
                hindi
                  ? "Word के सभी important tabs सीखें और practical projects करें."
                  : "Learn important Word tabs and complete practical projects."
              }
            </p>

          </div>

          <div class="jh-course-arrow">
            →
          </div>

        </button>


        <button
          type="button"
          class="jh-course-card"
          onclick="openExcel()"
        >

          <div class="jh-course-card-icon">
            📊
          </div>

          <div class="jh-course-card-body">

            <h3>
              MS Excel
            </h3>

            <span class="jh-course-subtitle">
              Formulas + Practice
            </span>

            <p>
              ${
                hindi
                  ? "Excel formulas सीखें और practice sheets के साथ अभ्यास करें."
                  : "Learn Excel formulas and practice them with practical sheets."
              }
            </p>

          </div>

          <div class="jh-course-arrow">
            →
          </div>

        </button>


        <button
          type="button"
          class="jh-course-card"
          onclick="openPowerPoint()"
        >

          <div class="jh-course-card-icon">
            🎞️
          </div>

          <div class="jh-course-card-body">

            <h3>
              MS PowerPoint
            </h3>

            <span class="jh-course-subtitle">
              Coming Soon
            </span>

            <p>
              ${
                hindi
                  ? "PowerPoint learning content जल्द उपलब्ध होगा."
                  : "PowerPoint learning content will be available soon."
              }
            </p>

          </div>

          <div class="jh-course-arrow">
            →
          </div>

        </button>


      </div>

    </section>


    <section class="jh-home-section">

      <div class="jh-section-heading">

        <div class="jh-section-icon">
          🤖
        </div>

        <div>

          <h2>
            AI Teacher
          </h2>

          <p>
            ${
              hindi
                ? "जब भी doubt हो, AI Teacher से पूछें"
                : "Ask the AI Teacher whenever you have a doubt"
            }
          </p>

        </div>

      </div>


      <div class="jh-ai-home-card">

        <div class="jh-ai-home-icon">
          🤖
        </div>

        <div class="jh-ai-home-content">

          <h3>
            ${
              hindi
                ? "आपका Personal AI Computer Teacher"
                : "Your Personal AI Computer Teacher"
            }
          </h3>

          <p>
            ${
              hindi
                ? "MS Word, Excel और computer learning से जुड़े questions पूछें और step-by-step answers पाएं."
                : "Ask questions about MS Word, Excel and computer learning and get step-by-step answers."
            }
          </p>

        </div>


        <button
          type="button"
          class="jh-primary-btn"
          onclick="openAITeacher()"
        >
          ${
            hindi
              ? "AI Teacher खोलें"
              : "Open AI Teacher"
          }
        </button>

      </div>

    </section>

  `;

}


/* =========================================================
   WORD COURSE SELECTION
   ========================================================= */

function openWord() {

  state.section = "word";

  state.course = "word";

  state.wordView = null;

  state.tab = null;

  state.toolIndex = 0;

  state.expanded = false;

  state.practicalOpen = false;

  state.projectId = null;

  render();

}


/* =========================================================
   WORD LEARNING
   ========================================================= */

function openWordLearning() {

  state.section = "word";

  state.course = "word";

  state.wordView = "learning";

  state.tab = null;

  state.toolIndex = 0;

  state.expanded = false;

  state.practicalOpen = false;

  state.projectId = null;

  render();

}


/* =========================================================
   WORD PRACTICAL WORK
   ========================================================= */

function openWordPractical() {

  state.section = "word";

  state.course = "word";

  state.wordView = "practical";

  state.tab = null;

  state.toolIndex = 0;

  state.expanded = false;

  state.practicalOpen = true;

  state.projectId = null;

  render();

}


/* =========================================================
   TAB SELECTION
   ========================================================= */

function selectTab(tabName) {

  if (!tabData[tabName]) {

    return;

  }

  state.tab = tabName;

  state.toolIndex = 0;

  /*
   * Every newly selected tab starts with
   * the detailed instructions collapsed.
   */
  state.expanded = false;

  render();

}


/* =========================================================
   TOOL SELECTION
   ========================================================= */

function selectTool(index) {

  const tools = tabData[state.tab] || [];

  if (!tools[index]) {

    return;

  }

  state.toolIndex = index;

  /*
   * Opened tool starts with instructions collapsed.
   */
  state.expanded = false;

  render();

}


/* =========================================================
   HOW TO USE TOGGLE
   ========================================================= */

function toggleInstructions() {

  state.expanded = !state.expanded;

  render();

}


/* =========================================================
   PROJECT OPEN
   ========================================================= */

function openProject(projectId) {

  const project = projects.find(
    item => Number(item.id) === Number(projectId)
  );

  if (!project) {

    return;

  }

  state.projectId = project.id;

  renderProjectFullscreen(project);

}


/* =========================================================
   PROJECT CLOSE
   ========================================================= */

function closeProject() {

  state.projectId = null;

  const overlay =
    document.getElementById("projectFullscreen");

  if (overlay) {

    overlay.remove();

  }

}


/* =========================================================
   PROJECT FULL SCREEN
   ========================================================= */

function renderProjectFullscreen(project) {

  const existing =
    document.getElementById("projectFullscreen");

  if (existing) {

    existing.remove();

  }

  const index =
    projects.findIndex(
      item => Number(item.id) === Number(project.id)
    );

  const previous =
    projects[
      index > 0 ? index - 1 : projects.length - 1
    ];

  const next =
    projects[
      index < projects.length - 1 ? index + 1 : 0
    ];


  const overlay =
    document.createElement("div");

  overlay.id = "projectFullscreen";

  overlay.innerHTML = `

    <div class="jh-project-fullscreen">

      <header class="jh-project-full-header">

        <div>

          <span>
            PRACTICAL PROJECT ${project.id}
          </span>

          <h2>
            ${escapeHTML(project.title)}
          </h2>

        </div>


        <div class="jh-project-full-actions">

          <button
            type="button"
            onclick="openImageZoom('${escapeHTML(imagePath(project.image))}')"
          >
            🔍 Zoom
          </button>

          <button
            type="button"
            onclick="closeProject()"
          >
            ✕ Close
          </button>

        </div>

      </header>


      <div class="jh-project-full-body">

        <img
          src="${escapeHTML(imagePath(project.image))}"
          alt="${escapeHTML(project.title)}"
          class="jh-project-full-image"
          onclick="openImageZoom('${escapeHTML(imagePath(project.image))}')"
        />

      </div>


      <footer class="jh-project-navigation">

        <button
          type="button"
          onclick="openProject(${previous.id})"
        >
          ← Previous
        </button>


        <span>
          ${index + 1} / ${projects.length}
        </span>


        <button
          type="button"
          onclick="openProject(${next.id})"
        >
          Next →
        </button>

      </footer>

    </div>

  `;


  document.body.appendChild(overlay);

}


/* =========================================================
   IMAGE ZOOM
   ========================================================= */

function openImageZoom(src) {

  if (!src) {

    return;

  }

  const existing =
    document.getElementById("jhImageModal");

  if (existing) {

    existing.remove();

  }


  const modal =
    document.createElement("div");

  modal.id = "jhImageModal";

  modal.className = "jh-image-modal open";

  modal.innerHTML = `

    <button
      type="button"
      class="jh-modal-close"
      aria-label="Close"
      onclick="closeImageZoom()"
    >
      ✕
    </button>

    <img
      src="${escapeHTML(src)}"
      alt="Zoomed image"
    />

  `;


  modal.addEventListener(
    "click",
    event => {

      if (event.target === modal) {

        closeImageZoom();

      }

    }
  );


  document.body.appendChild(modal);

}


function closeImageZoom() {

  const modal =
    document.getElementById("jhImageModal");

  if (modal) {

    modal.remove();

  }

}


/* =========================================================
   COMING SOON
   ========================================================= */

function showComingSoon(name) {

  const existing =
    document.getElementById("jhComingToast");

  if (existing) {

    existing.remove();

  }


  const toast =
    document.createElement("div");

  toast.id = "jhComingToast";

  toast.innerHTML = `

    <div class="jh-coming-toast">

      <strong>
        ${escapeHTML(name)}
      </strong>

      <span>
        This section is coming soon.
      </span>

    </div>

  `;


  document.body.appendChild(toast);


  setTimeout(() => {

    toast.remove();

  }, 3000);

}


/* =========================================================
   HOME NAVIGATION
   ========================================================= */

function goHome() {

  state.section = "home";

  state.course = null;

  state.wordView = null;

  state.tab = null;

  state.toolIndex = 0;

  state.expanded = false;

  state.practicalOpen = false;

  state.projectId = null;

  render();

}


/* =========================================================
   LANGUAGE CHANGE
   ========================================================= */

function changeLanguage(language) {

  if (
    language !== "en" &&
    language !== "hi"
  ) {

    return;

  }

  state.lang = language;

  render();

}


/* =========================================================
   THEME
   ========================================================= */

function toggleTheme() {

  document.body.classList.toggle(
    "jh-dark-mode"
  );

}


/* =========================================================
   RENDER MAIN APPLICATION
   ========================================================= */

function render() {

  const root = getAppRoot();

  if (!root) {

    console.error(
      "Joining Hands: #app root was not found."
    );

    return;

  }


  let content = "";


  if (state.section === "home") {

    content = renderHome();

  }

  else if (
    state.section === "word"
  ) {

    content =
      renderWordPage();

  }

  else if (
    state.section === "excel"
  ) {

    content =
      renderExcelPage();

  }

  else if (
    state.section === "powerpoint"
  ) {

    content =
      renderPowerPointPage();

  }

  else {

    content = renderHome();

  }


  root.innerHTML = `

    <div class="jh-layout">

      ${renderSidebar(state.section)}

      <main class="jh-main">

        ${content}

      </main>

    </div>

  `;


  /*
   * Re-attach any state-dependent UI
   * after the DOM has been recreated.
   */

  if (state.projectId) {

    const project =
      projects.find(
        item =>
          Number(item.id) ===
          Number(state.projectId)
      );

    if (project) {

      renderProjectFullscreen(project);

    }

  }

}  /*
   * =========================================================
   * WORD COURSE PAGE
   * =========================================================
   */

  function renderWordPage() {

    const hindi = isHindi();

    /*
     * First screen after clicking MS Word.
     * Only two options are shown:
     * 1. Learning
     * 2. Practical Works
     */

    if (!state.wordView) {

      return `

        ${renderTopHeader("word")}

        <section class="jh-course-hero word-hero">

          <div class="jh-course-hero-icon">
            📝
          </div>

          <div>

            <span class="jh-small-badge">
              MS WORD
            </span>

            <h1>
              ${
                hindi
                  ? "MS Word सीखें"
                  : "Learn MS Word"
              }
            </h1>

            <p>
              ${
                hindi
                  ? "Learning और Practical Work में से चुनें."
                  : "Choose Learning or Practical Work to continue."
              }
            </p>

          </div>

        </section>


        <section class="jh-word-choice-grid">


          <button
            type="button"
            class="jh-word-choice learning-choice"
            onclick="openWordLearning()"
          >

            <div class="jh-choice-icon">
              📚
            </div>

            <div class="jh-choice-content">

              <span class="jh-choice-number">
                01
              </span>

              <h2>
                ${
                  hindi
                    ? "Learning"
                    : "Learning"
                }
              </h2>

              <p>
                ${
                  hindi
                    ? "MS Word के Home, Insert, Design, Layout, References, Mailings, Review और View tabs को step-by-step सीखें."
                    : "Learn Home, Insert, Design, Layout, References, Mailings, Review and View tabs step-by-step."
                }
              </p>

              <span class="jh-choice-link">
                Start Learning →
              </span>

            </div>

          </button>


          <button
            type="button"
            class="jh-word-choice practical-choice"
            onclick="openWordPractical()"
          >

            <div class="jh-choice-icon">
              🛠️
            </div>

            <div class="jh-choice-content">

              <span class="jh-choice-number">
                02
              </span>

              <h2>
                Practical Works
              </h2>

              <p>
                ${
                  hindi
                    ? "14 practical MS Word projects करें और अपने skills को practice करें."
                    : "Complete 14 practical MS Word projects and practice your skills."
                }
              </p>

              <span class="jh-choice-link">
                View Projects →
              </span>

            </div>

          </button>


        </section>

      `;

    }


    /*
     * Practical Work screen.
     */

    if (
      state.wordView === "practical"
    ) {

      return renderWordPractical();

    }


    /*
     * Learning screen.
     */

    return renderWordLearning();

  }


  /* =========================================================
     WORD LEARNING PAGE
     ========================================================= */

  function renderWordLearning() {

    const hindi = isHindi();

    const tabs = Object.keys(tabData);


    /*
     * No tab selected:
     * show all tabs, but do not show detailed
     * explanation until the student clicks a tab.
     */

    if (!state.tab) {

      return `

        ${renderTopHeader("word")}


        <section class="jh-learning-header">

          <button
            type="button"
            class="jh-back-btn"
            onclick="openWord()"
          >
            ← Back to MS Word
          </button>


          <div class="jh-learning-title">

            <span>
              MS WORD • LEARNING
            </span>

            <h1>
              ${
                hindi
                  ? "MS Word के सभी Tabs"
                  : "MS Word Tabs"
              }
            </h1>

            <p>
              ${
                hindi
                  ? "किसी भी tab पर click करें और उसके tools को सीखें."
                  : "Click any tab to learn its tools and functions."
              }
            </p>

          </div>

        </section>


        <section class="jh-tab-selection-grid">

          ${tabs.map((tabName, index) => {

            const descriptions =
              tabDescriptions[tabName] || {};

            return `

              <button
                type="button"
                class="jh-tab-selection-card"
                onclick="selectTab('${escapeHTML(tabName)}')"
              >

                <div class="jh-tab-card-number">
                  ${String(index + 1).padStart(2, "0")}
                </div>

                <div class="jh-tab-card-icon">
                  ${getTabIcon(tabName)}
                </div>

                <div class="jh-tab-card-content">

                  <h3>
                    ${escapeHTML(
                      descriptions.title || tabName
                    )}
                  </h3>

                  <p>
                    ${escapeHTML(
                      isHindi()
                        ? (
                            descriptions.hindi ||
                            descriptions.description ||
                            ""
                          )
                        : (
                            descriptions.description ||
                            ""
                          )
                    )}
                  </p>

                </div>

                <span class="jh-tab-card-arrow">
                  →
                </span>

              </button>

            `;

          }).join("")}

        </section>

      `;

    }


    return renderSelectedWordTab();

  }


  /* =========================================================
     TAB ICON
     ========================================================= */

  function getTabIcon(tabName) {

    const icons = {

      Home: "🏠",

      Insert: "➕",

      Design: "🎨",

      Layout: "📐",

      References: "📚",

      Mailings: "✉️",

      Review: "✓",

      View: "👁️"

    };

    return icons[tabName] || "📄";

  }


  /* =========================================================
     SELECTED WORD TAB
     ========================================================= */

  function renderSelectedWordTab() {

    const hindi = isHindi();

    const tools =
      tabData[state.tab] || [];

    const current =
      tools[state.toolIndex] ||
      tools[0];


    if (!current) {

      return `

        ${renderTopHeader("word")}

        <div class="jh-empty-state">

          <h2>
            No learning content available.
          </h2>

        </div>

      `;

    }


    const [
      icon,
      name,
      what,
      use,
      path,
      steps
    ] = current;


    const tabImage =
      tabImages[state.tab];


    return `

      ${renderTopHeader("word")}


      <section class="jh-selected-tab-header">

        <div>

          <button
            type="button"
            class="jh-back-btn"
            onclick="openWordLearning()"
          >
            ← All Tabs
          </button>

          <div class="jh-selected-tab-title">

            <span class="jh-selected-tab-icon">
              ${getTabIcon(state.tab)}
            </span>

            <div>

              <span class="jh-small-badge">
                MS WORD • LEARNING
              </span>

              <h1>
                ${escapeHTML(
                  tabDescriptions[state.tab]?.title ||
                  state.tab
                )}
              </h1>

            </div>

          </div>

        </div>


        <div class="jh-tab-switcher">

          ${Object.keys(tabData).map(tabName => `

            <button
              type="button"
              class="${
                state.tab === tabName
                  ? "active"
                  : ""
              }"
              onclick="selectTab('${escapeHTML(tabName)}')"
            >
              ${getTabIcon(tabName)}
              <span>
                ${escapeHTML(tabName)}
              </span>
            </button>

          `).join("")}

        </div>

      </section>


      <!-- =====================================================
           TAB IMAGE
           ===================================================== -->

      <section class="jh-tab-image-section">

        <div class="jh-tab-image-heading">

          <div>

            <span>
              TAB OVERVIEW
            </span>

            <h2>
              ${
                hindi
                  ? "यह Tab कैसा दिखाई देता है?"
                  : "What does this tab look like?"
              }
            </h2>

          </div>


          <button
            type="button"
            class="jh-image-zoom-button"
            onclick="openImageZoom('${escapeHTML(
              imagePath(tabImage)
            )}')"
          >
            🔍 Zoom Image
          </button>

        </div>


        ${
          tabImage
            ? `
              <div class="jh-tab-image-container">

                <img
                  src="${escapeHTML(
                    imagePath(tabImage)
                  )}"
                  alt="${escapeHTML(
                    state.tab
                  )} tab"
                  class="jh-tab-image"
                  onclick="openImageZoom('${escapeHTML(
                    imagePath(tabImage)
                  )}')"
                />

              </div>
            `
            : `
              <div class="jh-no-image">
                Tab image will be added soon.
              </div>
            `
        }

        <p class="jh-image-hint">
          💡 Click the image to zoom.
        </p>

      </section>


      <!-- =====================================================
           TOOL LIST + EXPLANATION
           ===================================================== -->

      <section class="jh-learning-workspace">


        <aside class="jh-tool-sidebar">

          <div class="jh-tool-sidebar-title">

            <span>
              ${getTabIcon(state.tab)}
            </span>

            <div>

              <strong>
                ${escapeHTML(state.tab)}
              </strong>

              <small>
                ${tools.length} learning tools
              </small>

            </div>

          </div>


          <div class="jh-tool-list">

            ${tools.map((tool, index) => `

              <button
                type="button"
                class="jh-tool-item ${
                  index === state.toolIndex
                    ? "active"
                    : ""
                }"
                onclick="selectTool(${index})"
              >

                <span class="jh-tool-number">
                  ${index + 1}
                </span>

                <span class="jh-tool-icon">
                  ${tool[0]}
                </span>

                <span class="jh-tool-name">
                  ${escapeHTML(tool[1])}
                </span>

              </button>

            `).join("")}

          </div>

        </aside>


        <article class="jh-tool-detail">


          <div class="jh-tool-detail-heading">

            <div class="jh-tool-big-icon">
              ${icon}
            </div>

            <div>

              <span class="jh-detail-label">
                ${escapeHTML(state.tab)} TOOL
              </span>

              <h2>
                ${escapeHTML(name)}
              </h2>

            </div>

          </div>


          <!-- WHAT IS THIS -->

          <div class="jh-explanation-card blue">

            <div class="jh-explanation-icon">
              💡
            </div>

            <div>

              <h3>
                ${
                  hindi
                    ? "यह क्या है?"
                    : "What is this?"
                }
              </h3>

              <p>
                ${escapeHTML(
                  what
                )}
              </p>

            </div>

          </div>


          <!-- USE -->

          <div class="jh-explanation-card green">

            <div class="jh-explanation-icon">
              🎯
            </div>

            <div>

              <h3>
                ${
                  hindi
                    ? "इसका उपयोग"
                    : "What is it used for?"
                }
              </h3>

              <p>
                ${escapeHTML(
                  use
                )}
              </p>

            </div>

          </div>


          <!-- HOW TO USE -->

          <div class="jh-instruction-box">

            <button
              type="button"
              class="jh-instruction-header"
              onclick="toggleInstructions()"
            >

              <span>

                <span class="jh-instruction-icon">
                  📋
                </span>

                ${
                  hindi
                    ? "कैसे इस्तेमाल करें?"
                    : "How to use"
                }

              </span>


              <span class="jh-instruction-chevron">
                ${
                  state.expanded
                    ? "▲"
                    : "▼"
                }
              </span>

            </button>


            ${
              state.expanded
                ? `

                  <div class="jh-instruction-body">

                    <div class="jh-path-box">

                      <strong>
                        ${escapeHTML(
                          path
                        )}
                      </strong>

                    </div>


                    <div class="jh-step-list">

                      ${steps.map(
                        (step, index) => `

                          <div class="jh-step">

                            <div class="jh-step-number">
                              ${index + 1}
                            </div>

                            <div class="jh-step-content">

                              <p>
                                ${escapeHTML(
                                  step
                                )}
                              </p>

                            </div>

                          </div>

                        `
                      ).join("")}

                    </div>

                  </div>

                `
                : ""
            }

          </div>


          <div class="jh-practice-tip">

            <div class="jh-practice-tip-icon">
              🛠️
            </div>

            <div>

              <strong>
                ${
                  hindi
                    ? "Practice Tip"
                    : "Practice Tip"
                }
              </strong>

              <p>
                ${
                  hindi
                    ? "इस tool को MS Word में खुद इस्तेमाल करके practice करें."
                    : "Open MS Word and practice this tool yourself."
                }
              </p>

            </div>

          </div>


          <div class="jh-learning-bottom-nav">

            <button
              type="button"
              onclick="previousTool()"
              ${
                state.toolIndex <= 0
                  ? "disabled"
                  : ""
              }
            >
              ← Previous
            </button>


            <span>
              ${state.toolIndex + 1}
              /
              ${tools.length}
            </span>


            <button
              type="button"
              onclick="nextTool()"
              ${
                state.toolIndex >= tools.length - 1
                  ? "disabled"
                  : ""
              }
            >
              Next →
            </button>

          </div>


        </article>

      </section>

    `;

  }


  /* =========================================================
     PREVIOUS TOOL
     ========================================================= */

  function previousTool() {

    const tools =
      tabData[state.tab] || [];

    if (
      state.toolIndex <= 0
    ) {

      return;

    }

    state.toolIndex--;

    state.expanded = false;

    render();

  }


  /* =========================================================
     NEXT TOOL
     ========================================================= */

  function nextTool() {

    const tools =
      tabData[state.tab] || [];

    if (
      state.toolIndex >=
      tools.length - 1
    ) {

      return;

    }

    state.toolIndex++;

    state.expanded = false;

    render();

  }


  /* =========================================================
     PRACTICAL WORK PAGE
     ========================================================= */

  function renderWordPractical() {

    const hindi = isHindi();

    return `

      ${renderTopHeader("word")}


      <section class="jh-practical-header">

        <div>

          <button
            type="button"
            class="jh-back-btn"
            onclick="openWord()"
          >
            ← Back to MS Word
          </button>


          <span class="jh-small-badge">
            MS WORD • PRACTICAL WORK
          </span>


          <h1>
            ${
              hindi
                ? "14 Practical Projects"
                : "14 Practical Projects"
            }
          </h1>


          <p>
            ${
              hindi
                ? "किसी भी project पर click करके उसे full screen में खोलें."
                : "Click any project to open it in full screen."
            }
          </p>

        </div>


        <div class="jh-practical-count">

          <strong>
            ${projects.length}
          </strong>

          <span>
            Projects
          </span>

        </div>

      </section>


      <section class="jh-project-grid">


        ${projects.map((project, index) => `

          <button
            type="button"
            class="jh-project-card"
            onclick="openProject(${project.id})"
          >

            <div class="jh-project-image-wrap">

              <img
                src="${escapeHTML(
                  imagePath(project.image)
                )}"
                alt="${escapeHTML(
                  project.title
                )}"
                loading="lazy"
              />

              <span class="jh-project-number">
                ${String(index + 1).padStart(2, "0")}
              </span>


              <span class="jh-project-open">
                🔍 Open
              </span>

            </div>


            <div class="jh-project-content">

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

              <span class="jh-project-link">
                Open Project →
              </span>

            </div>

          </button>

        `).join("")}

      </section>

    `;

  }


  /* =========================================================
     EXCEL
     ========================================================= */

  function openExcel() {

    state.section = "excel";

    state.course = "excel";

    state.wordView = null;

    state.tab = null;

    state.toolIndex = 0;

    state.expanded = false;

    state.practicalOpen = false;

    state.projectId = null;

    render();

  }


  function renderExcelPage() {

    const hindi = isHindi();

    return `

      ${renderTopHeader("excel")}


      <section class="jh-course-hero excel-hero">

        <div class="jh-course-hero-icon">
          📊
        </div>

        <div>

          <span class="jh-small-badge">
            MS EXCEL
          </span>

          <h1>
            ${
              hindi
                ? "MS Excel"
                : "MS Excel"
            }
          </h1>

          <p>
            ${
              hindi
                ? "Formulas, functions और practical worksheets सीखें."
                : "Learn formulas, functions and practical worksheets."
            }
          </p>

        </div>

      </section>


      <section class="jh-coming-soon-card large">

        <div class="jh-coming-icon">
          📊
        </div>

        <h2>
          ${
            hindi
              ? "Excel Learning Coming Soon"
              : "Excel Learning Coming Soon"
          }
        </h2>

        <p>
          ${
            hindi
              ? "Excel formulas और practice sheets जल्द यहां उपलब्ध होंगी."
              : "Excel formulas and practice sheets will be available here soon."
          }
        </p>

        <span class="jh-coming-badge">
          Coming Soon
        </span>

      </section>

    `;

  }


  /* =========================================================
     POWERPOINT
     ========================================================= */

  function openPowerPoint() {

    state.section = "powerpoint";

    state.course = "powerpoint";

    state.wordView = null;

    state.tab = null;

    state.toolIndex = 0;

    state.expanded = false;

    state.practicalOpen = false;

    state.projectId = null;

    render();

  }


  function renderPowerPointPage() {

    const hindi = isHindi();

    return `

      ${renderTopHeader("powerpoint")}


      <section class="jh-course-hero powerpoint-hero">

        <div class="jh-course-hero-icon">
          🎞️
        </div>

        <div>

          <span class="jh-small-badge">
            MS POWERPOINT
          </span>

          <h1>
            MS PowerPoint
          </h1>

          <p>
            ${
              hindi
                ? "PowerPoint learning content जल्द उपलब्ध होगा."
                : "PowerPoint learning content will be available soon."
            }
          </p>

        </div>

      </section>


      <section class="jh-coming-soon-card large">

        <div class="jh-coming-icon">
          🚀
        </div>

        <h2>
          Coming Soon
        </h2>

        <p>
          ${
            hindi
              ? "PowerPoint का complete learning section जल्द यहां उपलब्ध होगा."
              : "The complete PowerPoint learning section will be available here soon."
          }
        </p>

      </section>

    `;

  }


  /* =========================================================
     AI TEACHER
     ========================================================= */

  function openAITeacher() {

    const existing =
      document.getElementById(
        "jhAITeacher"
      );

    if (existing) {

      existing.classList.add("open");

      return;

    }

    renderAITeacher();

  }


  function closeAITeacher() {

    const panel =
      document.getElementById(
        "jhAITeacher"
      );

    if (panel) {

      panel.classList.remove("open");

    }

  }


  function renderAITeacher() {

    const panel =
      document.createElement("aside");

    panel.id = "jhAITeacher";

    panel.className =
      "jh-ai-teacher-panel open";


    panel.innerHTML = `

      <div class="jh-ai-teacher-header">

        <div class="jh-ai-teacher-title">

          <div class="jh-ai-avatar">
            🤖
          </div>

          <div>

            <strong>
              AI Teacher
            </strong>

            <small>
              Joining Hands
            </small>

          </div>

        </div>


        <button
          type="button"
          onclick="closeAITeacher()"
          class="jh-ai-close"
        >
          ✕
        </button>

      </div>


      <div
        id="jhAIContext"
        class="jh-ai-context"
      >
        ${
          state.course === "word"
            ? "MS Word"
            : state.course === "excel"
              ? "MS Excel"
              : "Computer Learning"
        }
      </div>


      <div
        id="jhAIMessages"
        class="jh-ai-messages"
      >

        <div class="jh-ai-message bot">

          <div class="jh-ai-message-avatar">
            🤖
          </div>

          <div class="jh-ai-message-bubble">

            ${
              isHindi()
                ? "नमस्ते! मैं आपका AI Computer Teacher हूँ। MS Word, Excel या computer learning से जुड़ा कोई भी सवाल पूछें."
                : "Hello! I am your AI Computer Teacher. Ask me anything about MS Word, Excel or computer learning."
            }

          </div>

        </div>

      </div>


      <form
        id="jhAIForm"
        class="jh-ai-input-area"
        onsubmit="askAITeacher(event)"
      >

        <textarea
          id="jhAIQuestion"
          rows="2"
          placeholder="${
            isHindi()
              ? "अपना सवाल लिखें..."
              : "Ask your question..."
          }"
        ></textarea>


        <button
          type="submit"
          class="jh-ai-send"
        >
          ➤
        </button>

      </form>


      <div class="jh-ai-footer">
        AI Teacher uses the connected API to answer your questions.
      </div>

    `;


    document.body.appendChild(panel);

  }


  /* =========================================================
     AI TEACHER QUESTION
     ========================================================= */

  async function askAITeacher(event) {

    event.preventDefault();


    const input =
      document.getElementById(
        "jhAIQuestion"
      );

    const messages =
      document.getElementById(
        "jhAIMessages"
      );


    if (!input || !messages) {

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


    addAITyping();


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

            body: JSON.stringify({

              question,

              course:
                state.course === "word"
                  ? "MS Word"
                  : state.course === "excel"
                    ? "MS Excel"
                    : "General Computer Learning",

              project:
                state.projectId
                  ? String(state.projectId)
                  : state.tab || ""

            })

          }
        );


      const data =
        await response.json();


      removeAITyping();


      if (!response.ok) {

        throw new Error(
          data.error ||
          "AI Teacher could not answer."
        );

      }


      addAIMessage(
        "bot",
        data.answer ||
        "I could not generate an answer."
      );


    }

    catch (error) {

      removeAITyping();


      addAIMessage(
        "bot",
        `Sorry, I could not connect to the AI Teacher.

${error.message || "Please try again."}`
      );

    }

  }


  /* =========================================================
     ADD AI MESSAGE
     ========================================================= */

  function addAIMessage(
    type,
    text
  ) {

    const messages =
      document.getElementById(
        "jhAIMessages"
      );


    if (!messages) {

      return;

    }


    const wrapper =
      document.createElement("div");


    wrapper.className =
      `jh-ai-message ${type}`;


    wrapper.innerHTML = `

      <div class="jh-ai-message-avatar">
        ${
          type === "bot"
            ? "🤖"
            : "👤"
        }
      </div>

      <div class="jh-ai-message-bubble">
        ${formatAIText(text)}
      </div>

    `;


    messages.appendChild(
      wrapper
    );


    messages.scrollTop =
      messages.scrollHeight;

  }


  /* =========================================================
     AI TEXT FORMATTER
     ========================================================= */

  function formatAIText(text) {

    return escapeHTML(
      String(text || "")
    )
      .replace(
        /\*\*(.*?)\*\*/g,
        "<strong>$1</strong>"
      )
      .replace(
        /\n/g,
        "<br>"
      );

  }


  /* =========================================================
     AI TYPING
     ========================================================= */

  function addAITyping() {

    const messages =
      document.getElementById(
        "jhAIMessages"
      );

    if (!messages) {

      return;

    }


    const typing =
      document.createElement("div");

    typing.id =
      "jhAITyping";

    typing.className =
      "jh-ai-message bot";


    typing.innerHTML = `

      <div class="jh-ai-message-avatar">
        🤖
      </div>

      <div class="jh-ai-message-bubble">

        <span class="jh-typing-dot"></span>
        <span class="jh-typing-dot"></span>
        <span class="jh-typing-dot"></span>

      </div>

    `;


    messages.appendChild(
      typing
    );


    messages.scrollTop =
      messages.scrollHeight;

  }


  function removeAITyping() {

    const typing =
      document.getElementById(
        "jhAITyping"
      );

    if (typing) {

      typing.remove();

    }

  }


  /* =========================================================
     INITIAL APPLICATION START
     ========================================================= */

  document.addEventListener(
    "DOMContentLoaded",
    () => {

      /*
       * IMPORTANT:
       * Initial state keeps the Word learning instructions
       * collapsed.
       */

      state.section = "home";

      state.course = null;

      state.wordView = null;

      state.tab = null;

      state.toolIndex = 0;

      state.expanded = false;

      state.practicalOpen = false;

      state.projectId = null;


      render();

    }
  );/* =========================================================
   GLOBAL CLICK HANDLERS
   ========================================================= */

document.addEventListener("click", function (event) {

  /*
   * Close image zoom when clicking outside the image.
   */
  const imageModal =
    document.getElementById("jhImageModal");

  if (
    imageModal &&
    imageModal.classList.contains("open") &&
    event.target === imageModal
  ) {

    closeImageZoom();

  }


  /*
   * Close AI Teacher when clicking outside
   * only if the panel is not being interacted with.
   */
  const aiPanel =
    document.getElementById("jhAITeacher");

  if (
    aiPanel &&
    aiPanel.classList.contains("open")
  ) {

    const aiButton =
      event.target.closest(
        ".jh-header-ai-btn"
      );

    if (
      !aiButton &&
      !aiPanel.contains(event.target)
    ) {

      /*
       * Do not automatically close the AI Teacher.
       * Students may want it open while navigating.
       */

    }

  }

});


/* =========================================================
   KEYBOARD HANDLERS
   ========================================================= */

document.addEventListener(
  "keydown",
  function (event) {

    /*
     * ESC closes image zoom.
     */
    if (
      event.key === "Escape"
    ) {

      closeImageZoom();

    }

    /*
     * ESC closes the practical project
     * fullscreen viewer.
     */
    if (
      event.key === "Escape"
    ) {

      const project =
        document.getElementById(
          "projectFullscreen"
        );

      if (project) {

        closeProject();

      }

    }

  }
);


/* =========================================================
   EXCEL PLACEHOLDER FUNCTIONS
   ========================================================= */

function openExcelLearning() {

  showComingSoon(
    isHindi()
      ? "Excel Learning"
      : "Excel Learning"
  );

}


function openExcelPractical() {

  showComingSoon(
    isHindi()
      ? "Excel Practical Work"
      : "Excel Practical Work"
  );

}


/* =========================================================
   POWERPOINT PLACEHOLDER FUNCTIONS
   ========================================================= */

function openPowerPointLearning() {

  showComingSoon(
    "PowerPoint Learning"
  );

}


function openPowerPointPractical() {

  showComingSoon(
    "PowerPoint Practical Work"
  );

}


/* =========================================================
   AI TEACHER CONTEXT UPDATE
   ========================================================= */

function updateAIContext() {

  const context =
    document.getElementById(
      "jhAIContext"
    );

  if (!context) {

    return;

  }


  let courseText =
    "Computer Learning";


  if (
    state.course === "word"
  ) {

    courseText =
      "MS Word";

  }

  else if (
    state.course === "excel"
  ) {

    courseText =
      "MS Excel";

  }

  else if (
    state.course === "powerpoint"
  ) {

    courseText =
      "MS PowerPoint";

  }


  if (state.tab) {

    courseText +=
      " • " + state.tab;

  }


  context.textContent =
    courseText;

}


/* =========================================================
   OPEN AI TEACHER WITH CURRENT CONTEXT
   ========================================================= */

function openAITeacherWithContext() {

  openAITeacher();

  setTimeout(
    updateAIContext,
    50
  );

}


/* =========================================================
   REFRESH AI TEACHER CONTEXT
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  function () {

    updateAIContext();

  }
);


/* =========================================================
   WINDOW RESIZE
   ========================================================= */

window.addEventListener(
  "resize",
  function () {

    /*
     * Keep the fullscreen project image
     * inside the available screen.
     */
    const projectImage =
      document.querySelector(
        ".jh-project-full-image"
      );

    if (projectImage) {

      projectImage.style.maxHeight =
        "calc(100vh - 190px)";

    }

  }
);


/* =========================================================
   IMAGE ERROR HANDLING
   ========================================================= */

document.addEventListener(
  "error",
  function (event) {

    const element =
      event.target;


    if (
      element &&
      element.tagName === "IMG"
    ) {

      /*
       * Prevent broken images from making
       * the interface look unfinished.
       */
      if (
        !element.dataset.imageFallback
      ) {

        element.dataset.imageFallback =
          "true";

        element.style.display =
          "none";

        const fallback =
          document.createElement(
            "div"
          );

        fallback.className =
          "jh-image-placeholder";

        fallback.textContent =
          "Image will be available soon.";

        element.parentNode
          ?.appendChild(fallback);

      }

    }

  },
  true
);


/* =========================================================
   LOCAL STORAGE
   ========================================================= */

function saveLanguage() {

  try {

    localStorage.setItem(
      "jh-language",
      state.lang
    );

  }

  catch (error) {

    console.warn(
      "Could not save language preference.",
      error
    );

  }

}


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

      state.lang =
        saved;

    }

  }

  catch (error) {

    console.warn(
      "Could not load language preference.",
      error
    );

  }

}


/* =========================================================
   WRAPPED LANGUAGE FUNCTION
   ========================================================= */

const originalChangeLanguage =
  changeLanguage;


changeLanguage =
  function (language) {

    originalChangeLanguage(
      language
    );

    saveLanguage();

  };


/* =========================================================
   LOAD USER PREFERENCE
   ========================================================= */

loadLanguage();


/* =========================================================
   ACCESSIBILITY
   ========================================================= */

document.addEventListener(
  "keydown",
  function (event) {

    /*
     * Allow Enter on custom buttons
     * that are represented by divs.
     */
    const target =
      event.target;


    if (
      event.key === "Enter" &&
      target &&
      target.classList &&
      target.classList.contains(
        "jh-clickable"
      )
    ) {

      target.click();

    }

  }
);


/* =========================================================
   AI TEACHER ENTER KEY
   ========================================================= */

document.addEventListener(
  "keydown",
  function (event) {

    const target =
      event.target;


    if (
      target &&
      target.id === "jhAIQuestion" &&
      event.key === "Enter" &&
      !event.shiftKey
    ) {

      event.preventDefault();


      const form =
        document.getElementById(
          "jhAIForm"
        );


      if (form) {

        form.requestSubmit();

      }

    }

  }
);


/* =========================================================
   SAFE API HEALTH CHECK
   ========================================================= */

async function checkAIHealth() {

  try {

    const response =
      await fetch(
        "/api/health"
      );


    if (!response.ok) {

      return {
        ok: false,
        aiConfigured: false
      };

    }


    return await response.json();

  }

  catch (error) {

    return {
      ok: false,
      aiConfigured: false
    };

  }

}


/* =========================================================
   AI STATUS INDICATOR
   ========================================================= */

async function updateAIStatus() {

  const health =
    await checkAIHealth();


  const indicator =
    document.querySelector(
      ".jh-ai-status"
    );


  if (!indicator) {

    return;

  }


  if (
    health.ok &&
    health.aiConfigured
  ) {

    indicator.textContent =
      "AI Online";

    indicator.classList.add(
      "online"
    );

    indicator.classList.remove(
      "offline"
    );

  }

  else {

    indicator.textContent =
      "AI Offline";

    indicator.classList.add(
      "offline"
    );

    indicator.classList.remove(
      "online"
    );

  }

}


/* =========================================================
   INITIAL AI STATUS CHECK
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  function () {

    setTimeout(
      updateAIStatus,
      500
    );

  }
);


/* =========================================================
   PRINT SUPPORT
   ========================================================= */

function printCurrentProject() {

  const project =
    document.querySelector(
      ".jh-project-fullscreen"
    );


  if (!project) {

    return;

  }


  window.print();

}


/* =========================================================
   PROJECT IMAGE DOWNLOAD
   ========================================================= */

function openProjectImageInNewTab(
  projectId
) {

  const project =
    projects.find(
      item =>
        Number(item.id) ===
        Number(projectId)
    );


  if (!project) {

    return;

  }


  const url =
    imagePath(
      project.image
    );


  window.open(
    url,
    "_blank",
    "noopener,noreferrer"
  );

}


/* =========================================================
   NAVIGATION HELPERS
   ========================================================= */

function goToNextTab() {

  const tabs =
    Object.keys(tabData);


  const currentIndex =
    tabs.indexOf(
      state.tab
    );


  if (
    currentIndex === -1
  ) {

    selectTab(
      tabs[0]
    );

    return;

  }


  const nextIndex =
    currentIndex + 1;


  if (
    nextIndex >=
    tabs.length
  ) {

    openWordPractical();

    return;

  }


  selectTab(
    tabs[nextIndex]
  );

}


function goToPreviousTab() {

  const tabs =
    Object.keys(tabData);


  const currentIndex =
    tabs.indexOf(
      state.tab
    );


  if (
    currentIndex <= 0
  ) {

    openWordLearning();

    return;

  }


  selectTab(
    tabs[currentIndex - 1]
  );

}


/* =========================================================
   PROJECT NAVIGATION
   ========================================================= */

function nextProject() {

  if (
    !state.projectId
  ) {

    return;

  }


  const index =
    projects.findIndex(
      item =>
        Number(item.id) ===
        Number(state.projectId)
    );


  if (
    index === -1
  ) {

    return;

  }


  const next =
    projects[
      (index + 1) %
      projects.length
    ];


  openProject(
    next.id
  );

}


function previousProject() {

  if (
    !state.projectId
  ) {

    return;

  }


  const index =
    projects.findIndex(
      item =>
        Number(item.id) ===
        Number(state.projectId)
    );


  if (
    index === -1
  ) {

    return;

  }


  const previous =
    projects[
      (index - 1 +
        projects.length) %
      projects.length
    ];


  openProject(
    previous.id
  );

}


/* =========================================================
   MOBILE SIDEBAR
   ========================================================= */

function toggleMobileSidebar() {

  const sidebar =
    document.querySelector(
      ".jh-sidebar"
    );


  if (!sidebar) {

    return;

  }


  sidebar.classList.toggle(
    "mobile-open"
  );

}


/* =========================================================
   CLOSE MOBILE SIDEBAR AFTER NAVIGATION
   ========================================================= */

document.addEventListener(
  "click",
  function (event) {

    const button =
      event.target.closest(
        ".jh-nav-item"
      );


    if (!button) {

      return;

    }


    const sidebar =
      document.querySelector(
        ".jh-sidebar"
      );


    if (
      sidebar &&
      window.innerWidth <= 760
    ) {

      sidebar.classList.remove(
        "mobile-open"
      );

    }

  }
);


/* =========================================================
   PREVENT ACCIDENTAL FORM SUBMISSION
   ========================================================= */

document.addEventListener(
  "submit",
  function (event) {

    const form =
      event.target;


    if (
      form &&
      form.classList &&
      form.classList.contains(
        "jh-no-submit"
      )
    ) {

      event.preventDefault();

    }

  }
);


/* =========================================================
   FINAL SAFETY CHECK
   ========================================================= */

if (
  typeof window !== "undefined"
) {

  window.JoiningHands =
    {

      state,

      projects,

      tabData,

      tabImages,

      openWord,

      openWordLearning,

      openWordPractical,

      openExcel,

      openPowerPoint,

      selectTab,

      selectTool,

      openProject,

      closeProject,

      openImageZoom,

      closeImageZoom,

      openAITeacher,

      closeAITeacher,

      askAITeacher,

      goHome,

      changeLanguage

    };

}




/* =========================================================
   FINAL APP BOOTSTRAP
   ========================================================= */

/*
 * Make sure the application renders once the page is ready.
 * If Part 3 already registered DOMContentLoaded, this check
 * prevents duplicate rendering.
 */

(function bootstrapJoiningHands() {

  function start() {

    loadLanguage();

    state.section =
      state.section || "home";

    state.toolIndex =
      Number.isInteger(state.toolIndex)
        ? state.toolIndex
        : 0;

    state.expanded = false;

    render();

    setTimeout(
      updateAIStatus,
      500
    );

  }


  if (
    document.readyState === "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      start,
      {
        once: true
      }
    );

  }

  else {

    start();

  }

})();


/* =========================================================
   GLOBAL ERROR HANDLING
   ========================================================= */

window.addEventListener(
  "error",
  function (event) {

    console.error(
      "Joining Hands application error:",
      event.error || event.message
    );

  }
);


window.addEventListener(
  "unhandledrejection",
  function (event) {

    console.error(
      "Joining Hands promise error:",
      event.reason
    );

  }
);


/* =========================================================
   END
   ========================================================= */

