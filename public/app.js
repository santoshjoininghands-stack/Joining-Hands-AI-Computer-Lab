/* =========================================================
   JOINING HANDS
   MS WORD LEARNING & PRACTICAL LAB
   ========================================================= */

const state = {
  lang: "en",
  dark: false,
  zoom: 100,
  tab: "Home",
  toolIndex: 0,
  expanded: true,
  practicalOpen: false,
  projectId: null
};


/* =========================================================
   TAB ICONS
   ========================================================= */

const icons = {
  Home: "🏠",
  Insert: "📄",
  Design: "🎨",
  Layout: "📐",
  References: "📚",
  Mailings: "✉️",
  Review: "📝",
  View: "👁️"
};


/* =========================================================
   MS WORD LEARNING DATA
   ========================================================= */

const tabData = {

  Home: [

    [
      "📋",
      "Paste",
      "Inserts copied or cut content into the document.",
      "Use Paste when you want to place copied text, pictures or other content somewhere else in the document.",
      "Select the content → Copy/Cut → place the cursor → Home → Paste → choose the required paste option.",
      [
        "Select the content you want to copy or cut.",
        "Go to the Home tab.",
        "Click Paste in the Clipboard group.",
        "The content is inserted at the cursor position."
      ]
    ],

    [
      "✂️",
      "Cut",
      "Removes selected content and places it on the Clipboard.",
      "Use Cut when you want to move text, pictures or other content to another location.",
      "Select the content → Home → Cut → place the cursor at the new location → Paste.",
      [
        "Select the content.",
        "Go to Home → Cut.",
        "Click the new location.",
        "Use Paste to insert the content."
      ]
    ],

    [
      "📄",
      "Copy",
      "Creates a duplicate of selected content without removing the original.",
      "Use Copy when the same content is needed in more than one place.",
      "Select content → Home → Copy → place the cursor → Paste.",
      [
        "Select the text, image or object.",
        "Choose Home → Copy.",
        "Click where the copy should go.",
        "Choose Paste."
      ]
    ],

    [
      "🖌️",
      "Format Painter",
      "Copies formatting from one item and applies it to another.",
      "Use it when two pieces of text should have the same font, size, color, spacing or style.",
      "Select correctly formatted text → Home → Format Painter → select the target text.",
      [
        "Select the text whose formatting you want to copy.",
        "Click Format Painter in the Clipboard group.",
        "Select or drag over the target text.",
        "The target receives the same formatting. Double-click Format Painter to reuse it several times."
      ]
    ],

    [
      "A",
      "Font",
      "Changes the typeface used by selected text.",
      "Use it to choose a readable or required font such as Arial, Calibri or Times New Roman.",
      "Select text → Home → Font Name box → choose a font.",
      [
        "Select the text.",
        "Open the Font Name list.",
        "Choose the required font.",
        "The selected text changes immediately."
      ]
    ],

    [
      "A²",
      "Font Size",
      "Changes the size of selected text.",
      "Use it to make headings larger or body text smaller/larger.",
      "Select text → Home → Font Size → type/select a size.",
      [
        "Select the text.",
        "Open Font Size.",
        "Choose a size or type a number.",
        "Press Enter if you typed the size."
      ]
    ],

    [
      "B",
      "Bold",
      "Makes text darker and thicker.",
      "Use Bold to highlight important words, headings or key information.",
      "Select text → Home → Bold, or use Ctrl+B.",
      [
        "Select the text.",
        "Go to Home → Font group.",
        "Click Bold.",
        "Click Bold again to remove it."
      ]
    ],

    [
      "I",
      "Italic",
      "Makes text slanted.",
      "Use Italic to emphasize words, titles, terms or special notes.",
      "Select text → Home → Italic, or Ctrl+I.",
      [
        "Select the text.",
        "Click Italic in the Font group.",
        "The selected text becomes slanted.",
        "Click again to turn it off."
      ]
    ],

    [
      "U",
      "Underline",
      "Adds a line underneath selected text.",
      "Use Underline when you want to emphasize important text.",
      "Select text → Home → Underline, or Ctrl+U.",
      [
        "Select the text.",
        "Click Underline.",
        "The underline is applied.",
        "Use the drop-down arrow beside Underline for other underline styles."
      ]
    ],

    [
      "🖍️",
      "Text Highlight",
      "Adds a highlight color behind text.",
      "Use it to mark important words or sentences for study or review.",
      "Select text → Home → Text Highlight Color → choose a color.",
      [
        "Select the text.",
        "Click Text Highlight Color.",
        "Choose a color.",
        "The background behind the text is highlighted."
      ]
    ],

    [
      "🎨",
      "Font Color",
      "Changes the color of selected text.",
      "Use it for headings, emphasis or visual organization.",
      "Select text → Home → Font Color → choose a color.",
      [
        "Select the text.",
        "Click the Font Color arrow.",
        "Choose a color.",
        "The selected text changes color."
      ]
    ],

    [
      "•",
      "Bullets",
      "Creates a bulleted list.",
      "Use bullets when the order of items is not important.",
      "Select lines → Home → Bullets → choose a bullet style.",
      [
        "Place the cursor in the list or select existing lines.",
        "Click Bullets.",
        "Choose a bullet style if required.",
        "Press Enter for the next bullet; press Enter twice to finish."
      ]
    ],

    [
      "1.",
      "Numbering",
      "Creates a numbered list.",
      "Use numbering when items need a sequence or order.",
      "Select lines → Home → Numbering → choose a numbering style.",
      [
        "Select the list items or place the cursor at the start.",
        "Click Numbering.",
        "Choose a numbering style.",
        "Press Enter to continue the sequence."
      ]
    ],

    [
      "↔",
      "Increase Indent",
      "Moves a paragraph farther from the left margin.",
      "Use it for sub-points or to show hierarchy.",
      "Place the cursor in the paragraph → Home → Increase Indent.",
      [
        "Click inside the paragraph.",
        "Click Increase Indent.",
        "The paragraph moves inward.",
        "Click again for a deeper level if needed."
      ]
    ],

    [
      "↔",
      "Decrease Indent",
      "Moves an indented paragraph back toward the left margin.",
      "Use it to reduce indentation or return a sub-point to a higher level.",
      "Click inside the paragraph → Home → Decrease Indent.",
      [
        "Click inside the indented paragraph.",
        "Click Decrease Indent.",
        "The paragraph moves toward the left margin.",
        "Repeat if necessary."
      ]
    ],

    [
      "≡",
      "Align Left",
      "Aligns text with the left margin.",
      "Use it for normal paragraphs and many documents.",
      "Select text → Home → Align Left or Ctrl+L.",
      [
        "Select the paragraph(s).",
        "Click Align Left.",
        "The left edges line up.",
        "Use Ctrl+L as a shortcut."
      ]
    ],

    [
      "≡",
      "Center",
      "Centers text between the margins.",
      "Use it for titles, headings and short centered content.",
      "Select text → Home → Center or Ctrl+E.",
      [
        "Select the text.",
        "Click Center.",
        "The text moves to the middle.",
        "Use Ctrl+E as a shortcut."
      ]
    ],

    [
      "≡",
      "Align Right",
      "Aligns text with the right margin.",
      "Use it for dates, signatures or special layouts.",
      "Select text → Home → Align Right or Ctrl+R.",
      [
        "Select the paragraph.",
        "Click Align Right.",
        "The right edges line up.",
        "Use Ctrl+R as a shortcut."
      ]
    ],

    [
      "☰",
      "Justify",
      "Aligns text evenly to both left and right margins.",
      "Use it for formal reports, assignments and long paragraphs.",
      "Select paragraphs → Home → Justify or Ctrl+J.",
      [
        "Select the paragraphs.",
        "Click Justify.",
        "Word adjusts spacing so both margins look aligned.",
        "Use Ctrl+J as a shortcut."
      ]
    ],

    [
      "¶",
      "Show/Hide ¶",
      "Shows non-printing formatting marks such as spaces and paragraph marks.",
      "Use it when checking spacing, blank paragraphs, tabs and formatting problems.",
      "Home → Show/Hide ¶.",
      [
        "Go to Home → Paragraph group.",
        "Click Show/Hide ¶.",
        "Formatting marks become visible.",
        "Click again to hide them."
      ]
    ],

    [
      "Aa",
      "Change Case",
      "Changes selected text between UPPERCASE, lowercase, Title Case and other cases.",
      "Use it when text was typed with the wrong capitalization.",
      "Select text → Home → Change Case → choose the required case.",
      [
        "Select the text.",
        "Click Change Case.",
        "Choose UPPERCASE, lowercase, Capitalize Each Word, etc.",
        "The selected text changes case."
      ]
    ],

    [
      "✕",
      "Clear All Formatting",
      "Removes direct formatting from selected text.",
      "Use it when text has unwanted font, color, size or style formatting.",
      "Select text → Home → Clear All Formatting.",
      [
        "Select the formatted text.",
        "Click Clear All Formatting.",
        "Direct formatting is removed.",
        "The text returns to the document's normal formatting."
      ]
    ]

  ],


  Insert: [

    [
      "📄",
      "Cover Page",
      "Adds a ready-made cover page.",
      "Use it for reports, assignments and projects that need a professional first page.",
      "Insert → Cover Page → choose a design → replace the sample information.",
      [
        "Open the document.",
        "Click Insert.",
        "Choose Cover Page.",
        "Select a design and replace the title, author and other sample fields."
      ]
    ],

    [
      "📃",
      "Blank Page",
      "Adds a new blank page at the cursor position.",
      "Use it when you need a completely empty page for a new section.",
      "Insert → Blank Page.",
      [
        "Place the cursor where the new page should begin.",
        "Click Insert.",
        "Click Blank Page.",
        "A new page is inserted."
      ]
    ],

    [
      "↵",
      "Page Break",
      "Starts the following content on a new page.",
      "Use it instead of pressing Enter many times to move content to another page.",
      "Insert → Page Break, or Ctrl+Enter.",
      [
        "Place the cursor before the content that should start on the next page.",
        "Click Insert → Page Break.",
        "The following content moves to a new page.",
        "Use Ctrl+Enter for the shortcut."
      ]
    ],

    [
      "▦",
      "Table",
      "Creates a table using rows and columns.",
      "Use it for marks, attendance, price lists, schedules or structured data.",
      "Insert → Table → choose the grid size or Insert Table → set rows/columns.",
      [
        "Place the cursor where the table should go.",
        "Click Insert → Table.",
        "Select the required number of columns and rows.",
        "Click a cell and type your data."
      ]
    ],

    [
      "🖼️",
      "Pictures",
      "Inserts an image from your computer or supported location.",
      "Use it for diagrams, photos, screenshots, logos and project illustrations.",
      "Insert → Pictures → choose the source → select image → Insert.",
      [
        "Click Insert → Pictures.",
        "Choose the location/source.",
        "Select the image.",
        "Click Insert and then use Picture Format to resize or position it."
      ]
    ],

    [
      "🔷",
      "Shapes",
      "Adds lines, arrows, rectangles, circles and other shapes.",
      "Use shapes for diagrams, flowcharts, labels and visual explanations.",
      "Insert → Shapes → choose a shape → drag on the page.",
      [
        "Click Insert → Shapes.",
        "Choose a shape.",
        "Click and drag on the document.",
        "Use Shape Format to change fill, outline and effects."
      ]
    ],

    [
      "⭐",
      "Icons",
      "Inserts ready-made icons.",
      "Use icons to make instructions, presentations and documents more visual.",
      "Insert → Icons → search/select an icon → Insert.",
      [
        "Click Insert → Icons.",
        "Search or browse the icon library.",
        "Select an icon.",
        "Click Insert and format it as needed."
      ]
    ],

    [
      "🧊",
      "3D Models",
      "Adds a three-dimensional model.",
      "Use it when a 3D object helps explain a concept.",
      "Insert → 3D Models → choose a source/model → Insert.",
      [
        "Click Insert → 3D Models.",
        "Choose the available source.",
        "Select the model.",
        "Insert it and use the rotation controls to view it."
      ]
    ],

    [
      "✨",
      "SmartArt",
      "Creates visual diagrams such as processes, cycles and hierarchies.",
      "Use it to present information visually instead of using plain paragraphs.",
      "Insert → SmartArt → choose category → choose layout → enter text.",
      [
        "Click Insert → SmartArt.",
        "Choose a category such as Process, List or Hierarchy.",
        "Select a layout.",
        "Enter your information in the SmartArt text pane."
      ]
    ],

    [
      "📊",
      "Chart",
      "Creates charts from numerical data.",
      "Use charts to visually compare data and show trends.",
      "Insert → Chart → choose chart type → enter data.",
      [
        "Click Insert → Chart.",
        "Choose a chart type.",
        "An Excel-style data sheet opens.",
        "Replace the sample data with your own data."
      ]
    ],

    [
      "📸",
      "Screenshot",
      "Captures an available window or screen area.",
      "Use it when you need to insert a screenshot into a document.",
      "Insert → Screenshot → choose a window or Screen Clipping.",
      [
        "Open the window you want to capture.",
        "Go to Insert → Screenshot.",
        "Choose the available window or Screen Clipping.",
        "The screenshot is inserted into the document."
      ]
    ],

    [
      "🔗",
      "Link",
      "Creates a clickable hyperlink.",
      "Use it to connect text to a website, file, email or location.",
      "Select text → Insert → Link → enter address → OK.",
      [
        "Select the text or object.",
        "Click Insert → Link.",
        "Enter or select the destination.",
        "Click OK and test the link."
      ]
    ],

    [
      "🔖",
      "Bookmark",
      "Marks a specific location in a document.",
      "Use it to quickly return to an important location or create internal links.",
      "Insert → Bookmark → name → Add.",
      [
        "Place the cursor at the location.",
        "Click Insert → Bookmark.",
        "Enter a bookmark name without spaces.",
        "Click Add."
      ]
    ],

    [
      "💬",
      "Comment",
      "Adds a comment or note to selected content.",
      "Use it for feedback, review and collaboration.",
      "Select text → Insert → Comment.",
      [
        "Select the relevant text.",
        "Click Insert → Comment.",
        "Type your comment.",
        "Post or save the comment."
      ]
    ],

    [
      "⬆️",
      "Header",
      "Adds content at the top of pages.",
      "Use it for document titles, company names or running information.",
      "Insert → Header → choose a design → enter content.",
      [
        "Click Insert → Header.",
        "Choose a header design.",
        "Type your header information.",
        "Close Header and Footer mode."
      ]
    ],

    [
      "⬇️",
      "Footer",
      "Adds content at the bottom of pages.",
      "Use it for contact information, document names or repeated information.",
      "Insert → Footer → choose a design → enter content.",
      [
        "Click Insert → Footer.",
        "Choose a footer design.",
        "Enter your information.",
        "Close Header and Footer mode."
      ]
    ],

    [
      "#",
      "Page Number",
      "Adds page numbers to the document.",
      "Use it for reports, assignments and multi-page documents.",
      "Insert → Page Number → choose location and style.",
      [
        "Click Insert → Page Number.",
        "Choose Top of Page, Bottom of Page or another position.",
        "Choose a numbering style.",
        "Word inserts page numbers automatically."
      ]
    ],

    [
      "🔲",
      "Text Box",
      "Creates a movable box containing text.",
      "Use it for callouts, side notes, labels and special layouts.",
      "Insert → Text Box → choose/draw a box → type text.",
      [
        "Click Insert → Text Box.",
        "Choose a built-in box or Draw Text Box.",
        "Click and drag if drawing one.",
        "Type your text and format the box."
      ]
    ],

    [
      "🎨",
      "WordArt",
      "Creates decorative stylized text.",
      "Use it for titles, posters and visually attractive headings.",
      "Insert → WordArt → choose a style → type text.",
      [
        "Click Insert → WordArt.",
        "Choose a style.",
        "Type your text.",
        "Use Shape Format to change its appearance."
      ]
    ],

    [
      "⬇️",
      "Drop Cap",
      "Makes the first letter of a paragraph large.",
      "Use it mainly in magazines, newsletters and decorative documents.",
      "Select paragraph → Insert → Drop Cap → choose style.",
      [
        "Place the cursor in the paragraph.",
        "Click Insert → Drop Cap.",
        "Choose Dropped or In Margin.",
        "Adjust options if required."
      ]
    ],

    [
      "✍️",
      "Signature Line",
      "Adds a signature placeholder.",
      "Use it when a document needs a formal signature.",
      "Insert → Signature Line → enter signer information → OK.",
      [
        "Click Insert → Signature Line.",
        "Enter the requested signer information.",
        "Click OK.",
        "The signature line is inserted."
      ]
    ],

    [
      "📅",
      "Date & Time",
      "Inserts the current date and/or time.",
      "Use it for letters, reports and official documents.",
      "Insert → Date & Time → choose format → OK.",
      [
        "Place the cursor where the date/time should appear.",
        "Click Insert → Date & Time.",
        "Choose the desired format.",
        "Click OK."
      ]
    ],

    [
      "∑",
      "Equation",
      "Inserts mathematical equations and symbols.",
      "Use it for mathematical, scientific and engineering documents.",
      "Insert → Equation → choose a structure or type an equation.",
      [
        "Click Insert → Equation.",
        "Choose a built-in equation or create a new one.",
        "Enter the mathematical expression.",
        "Use Equation tools to format it."
      ]
    ],

    [
      "Ω",
      "Symbol",
      "Inserts special characters and symbols.",
      "Use it for characters not available directly on the keyboard.",
      "Insert → Symbol → choose a symbol → Insert.",
      [
        "Place the cursor where the symbol should go.",
        "Click Insert → Symbol.",
        "Choose a symbol or More Symbols.",
        "Click Insert."
      ]
    ]

  ],  /*
   * =========================================================
   * DESIGN TAB
   * =========================================================
   */

  Design: [

    [
      "🎨",
      "Themes",
      "Applies a coordinated design theme to the document.",
      "Use Themes when you want the whole document to have a consistent professional appearance.",
      "Design → Themes → choose a theme.",
      [
        "Open the Design tab.",
        "Click Themes.",
        "Move over the available themes to preview them.",
        "Click the theme you want to apply."
      ]
    ],

    [
      "🎨",
      "Colors",
      "Changes the color scheme used by the document.",
      "Use it when you want headings, shapes and other theme elements to use a different color combination.",
      "Design → Colors → choose a color set.",
      [
        "Open the Design tab.",
        "Click Colors.",
        "Preview the available color schemes.",
        "Click the required color scheme."
      ]
    ],

    [
      "🔤",
      "Fonts",
      "Changes the theme fonts used throughout the document.",
      "Use it when you want headings and body text to follow a consistent font combination.",
      "Design → Fonts → choose a font combination.",
      [
        "Open Design.",
        "Click Fonts.",
        "Preview the available font combinations.",
        "Click the required combination."
      ]
    ],

    [
      "✨",
      "Paragraph Spacing",
      "Changes the spacing between paragraphs across the document.",
      "Use it when the document looks too crowded or has too much empty space.",
      "Design → Paragraph Spacing → choose a spacing preset.",
      [
        "Open Design.",
        "Click Paragraph Spacing.",
        "Preview the available options.",
        "Choose the spacing preset you need."
      ]
    ],

    [
      "💧",
      "Watermark",
      "Places faint text or an image behind the document content.",
      "Use it for labels such as DRAFT, CONFIDENTIAL or a company name.",
      "Design → Watermark → choose a preset or Custom Watermark.",
      [
        "Open the Design tab.",
        "Click Watermark.",
        "Choose a ready-made watermark such as Draft or Confidential.",
        "For your own watermark, choose Custom Watermark.",
        "Choose Text watermark or Picture watermark.",
        "Enter the text or select the picture.",
        "Choose the required layout, color and other settings.",
        "Click Apply or OK."
      ]
    ],

    [
      "🎨",
      "Page Color",
      "Changes the background color of the document page.",
      "Use it when creating posters, invitations or visually styled documents.",
      "Design → Page Color → choose a color.",
      [
        "Open Design.",
        "Click Page Color.",
        "Choose a color.",
        "The page background changes."
      ]
    ],

    [
      "▣",
      "Page Borders",
      "Adds a border around the page.",
      "Use it for certificates, invitations, assignments and decorative documents.",
      "Design → Page Borders → choose border settings → OK.",
      [
        "Open Design.",
        "Click Page Borders.",
        "Choose Box, Shadow, 3-D or another setting.",
        "Select the line style, color and width.",
        "Choose where the border should apply.",
        "Click OK."
      ]
    ]

  ],


  /*
   * =========================================================
   * LAYOUT / PAGE LAYOUT TAB
   * =========================================================
   */

  Layout: [

    [
      "📏",
      "Margins",
      "Controls the empty space around the edges of the page.",
      "Use it when you need more or less writing space or a specific document format.",
      "Layout → Margins → choose a preset or Custom Margins.",
      [
        "Open Layout.",
        "Click Margins.",
        "Choose Normal, Narrow, Moderate or another preset.",
        "For custom values, click Custom Margins.",
        "Enter Top, Bottom, Left and Right values.",
        "Click OK."
      ]
    ],

    [
      "↕️",
      "Orientation",
      "Changes the page between Portrait and Landscape.",
      "Use Landscape for wide tables, charts and documents with many columns.",
      "Layout → Orientation → Portrait or Landscape.",
      [
        "Open Layout.",
        "Click Orientation.",
        "Choose Portrait or Landscape.",
        "The page orientation changes."
      ]
    ],

    [
      "📄",
      "Size",
      "Changes the paper size of the document.",
      "Use it when the document must match a particular paper size such as A4 or Letter.",
      "Layout → Size → choose the required paper size.",
      [
        "Open Layout.",
        "Click Size.",
        "Select A4, Letter, Legal or another available size.",
        "The document page size changes."
      ]
    ],

    [
      "▥",
      "Columns",
      "Divides text into multiple vertical columns.",
      "Use it for newsletters, newspapers, brochures and magazine-style documents.",
      "Layout → Columns → choose One, Two, Three or More Columns.",
      [
        "Select the text if you want columns only for a specific section.",
        "Open Layout.",
        "Click Columns.",
        "Choose Two, Three or another option.",
        "For more control, click More Columns."
      ]
    ],

    [
      "↪️",
      "Breaks",
      "Adds page, section or column breaks.",
      "Use breaks when different parts of a document need different layouts or must start at a specific location.",
      "Layout → Breaks → choose Page Break, Column Break or Section Break.",
      [
        "Place the cursor where the break should occur.",
        "Open Layout.",
        "Click Breaks.",
        "Choose the required break.",
        "Continue typing after the break."
      ]
    ],

    [
      "#",
      "Line Numbers",
      "Displays numbers beside lines of text.",
      "Use it for legal documents, scripts, technical documents and proofreading.",
      "Layout → Line Numbers → choose a numbering option.",
      [
        "Open Layout.",
        "Click Line Numbers.",
        "Choose Continuous, Restart Each Page or another option.",
        "Line numbers appear beside the document text."
      ]
    ],

    [
      "↔",
      "Hyphenation",
      "Controls how words are divided at the end of lines.",
      "Use it to improve text spacing, especially in justified paragraphs.",
      "Layout → Hyphenation → Automatic or Manual.",
      [
        "Open Layout.",
        "Click Hyphenation.",
        "Choose Automatic for automatic hyphenation.",
        "Use Manual if you want to review individual choices."
      ]
    ],

    [
      "↔",
      "Indent",
      "Controls how far a paragraph is positioned from the left and right margins.",
      "Use it to create professional paragraph layouts, quotations and special sections.",
      "Layout → Paragraph → set Left and Right indentation.",
      [
        "Select the paragraph.",
        "Open Layout.",
        "Find the Indent section.",
        "Set Left and Right values.",
        "The paragraph position changes."
      ]
    ],

    [
      "↕️",
      "Spacing",
      "Controls the space before and after paragraphs.",
      "Use it to separate paragraphs without repeatedly pressing Enter.",
      "Layout → Paragraph → Before / After spacing.",
      [
        "Select the paragraphs.",
        "Open Layout.",
        "Find the Spacing section.",
        "Set Before and After values.",
        "The paragraph spacing changes."
      ]
    ],

    [
      "🔲",
      "Position",
      "Controls the position of a selected object on the page.",
      "Use it when placing pictures, shapes or other floating objects.",
      "Select an object → Layout → Position → choose a position.",
      [
        "Select the picture or object.",
        "Open Layout.",
        "Click Position.",
        "Choose one of the available placement options."
      ]
    ],

    [
      "📝",
      "Wrap Text",
      "Controls how text flows around an object.",
      "Use it when you need text beside, around or behind a picture.",
      "Select object → Layout → Wrap Text → choose an option.",
      [
        "Select the picture or object.",
        "Click Wrap Text.",
        "Choose Square, Tight, Through, Behind Text, In Front of Text or another option.",
        "Move the object to see how the text flows around it."
      ]
    ],

    [
      "⬆️",
      "Bring Forward",
      "Moves an object above another overlapping object.",
      "Use it when one picture or shape is hidden behind another object.",
      "Select object → Layout → Bring Forward.",
      [
        "Select the object.",
        "Open Layout.",
        "Click Bring Forward.",
        "Choose Bring Forward or Bring to Front."
      ]
    ],

    [
      "⬇️",
      "Send Backward",
      "Moves an object behind another object.",
      "Use it when objects overlap and you need to control their order.",
      "Select object → Layout → Send Backward.",
      [
        "Select the object.",
        "Open Layout.",
        "Click Send Backward.",
        "Choose Send Backward or Send to Back."
      ]
    ],

    [
      "☷",
      "Selection Pane",
      "Displays a list of objects in the document.",
      "Use it when a document contains many overlapping pictures, shapes or objects.",
      "Layout → Selection Pane.",
      [
        "Open Layout.",
        "Click Selection Pane.",
        "A list of objects appears.",
        "Use the list to select, hide or reorder objects."
      ]
    ],

    [
      "↔",
      "Align",
      "Aligns multiple selected objects relative to each other or the page.",
      "Use it to make pictures, shapes and text boxes line up neatly.",
      "Select multiple objects → Layout → Align → choose an alignment.",
      [
        "Select two or more objects.",
        "Open Layout.",
        "Click Align.",
        "Choose Left, Center, Right, Top, Middle or Bottom.",
        "The selected objects are aligned."
      ]
    ],

    [
      "🔗",
      "Group",
      "Combines multiple objects so they can be moved and formatted together.",
      "Use it when several shapes or objects form one diagram.",
      "Select objects → Layout → Group → Group.",
      [
        "Select multiple objects while holding Ctrl.",
        "Open Layout.",
        "Click Group.",
        "Choose Group.",
        "The objects now behave as one object."
      ]
    ],

    [
      "🔄",
      "Rotate",
      "Rotates or flips a selected object.",
      "Use it when an image, shape or diagram needs a different direction.",
      "Select object → Layout → Rotate → choose a rotation option.",
      [
        "Select the object.",
        "Open Layout.",
        "Click Rotate.",
        "Choose Rotate Right, Rotate Left, Flip Horizontal or Flip Vertical."
      ]
    ]

  ],


  /*
   * =========================================================
   * REFERENCES TAB
   * =========================================================
   */

  References: [

    [
      "📑",
      "Table of Contents",
      "Creates an automatic table of contents from document headings.",
      "Use it in reports, books, assignments and long documents.",
      "References → Table of Contents → choose an automatic style.",
      [
        "Apply Heading 1, Heading 2 and other heading styles to your document.",
        "Place the cursor where the table of contents should appear.",
        "Open References.",
        "Click Table of Contents.",
        "Choose an Automatic Table.",
        "Word creates the table from your headings."
      ]
    ],

    [
      "¹",
      "Footnote",
      "Adds a note at the bottom of the current page.",
      "Use it for explanations, references or additional information.",
      "References → Insert Footnote.",
      [
        "Place the cursor after the word or sentence.",
        "Open References.",
        "Click Insert Footnote.",
        "Type the note at the bottom of the page."
      ]
    ],

    [
      "📚",
      "Citation",
      "Adds a source citation to the document.",
      "Use it when writing academic reports, research papers or assignments.",
      "References → Insert Citation → Add New Source.",
      [
        "Place the cursor where the citation is needed.",
        "Open References.",
        "Click Insert Citation.",
        "Choose Add New Source.",
        "Enter the source information.",
        "Click OK."
      ]
    ],

    [
      "📖",
      "Bibliography",
      "Creates a list of sources used in the document.",
      "Use it at the end of research papers and academic documents.",
      "References → Bibliography → choose a bibliography style.",
      [
        "Add citations to your document.",
        "Place the cursor where the bibliography should appear.",
        "Open References.",
        "Click Bibliography.",
        "Choose a bibliography format."
      ]
    ],

    [
      "🏷️",
      "Caption",
      "Adds a label to pictures, tables or other objects.",
      "Use it when figures and tables need numbered descriptions.",
      "Select object → References → Insert Caption.",
      [
        "Select the picture, table or object.",
        "Open References.",
        "Click Insert Caption.",
        "Choose Figure, Table or another label.",
        "Enter the caption text.",
        "Click OK."
      ]
    ],

    [
      "🔎",
      "Cross-reference",
      "Creates a reference to another part of the document.",
      "Use it when referring to headings, figures, tables or numbered items.",
      "References → Cross-reference → choose reference type → Insert.",
      [
        "Place the cursor where the reference should appear.",
        "Open References.",
        "Click Cross-reference.",
        "Choose the reference type.",
        "Select the target item.",
        "Click Insert."
      ]
    ],

    [
      "🔤",
      "Mark Entry",
      "Marks a word or phrase for an index.",
      "Use it when creating an index for a long book or reference document.",
      "Select the word → References → Mark Entry.",
      [
        "Select the word or phrase.",
        "Open References.",
        "Click Mark Entry.",
        "Review the entry.",
        "Click Mark."
      ]
    ],

    [
      "📇",
      "Insert Index",
      "Creates an alphabetical index from marked entries.",
      "Use it for books, manuals and long reference documents.",
      "References → Insert Index.",
      [
        "Mark the required index entries.",
        "Place the cursor where the index should appear.",
        "Open References.",
        "Click Insert Index.",
        "Choose the required format.",
        "Click OK."
      ]
    ],

    [
      "⚖️",
      "Table of Authorities",
      "Creates a list of legal citations and authorities.",
      "Use it mainly for legal documents.",
      "Mark citations → References → Insert Table of Authorities.",
      [
        "Mark the legal citations.",
        "Place the cursor where the table should appear.",
        "Open References.",
        "Click Insert Table of Authorities.",
        "Choose the required options.",
        "Click OK."
      ]
    ]

  ],


  /*
   * =========================================================
   * MAILINGS TAB
   * =========================================================
   */

  Mailings: [

    [
      "✉️",
      "Envelopes",
      "Creates and prints an envelope.",
      "Use it when preparing physical mail for a recipient.",
      "Mailings → Envelopes → enter delivery and return addresses.",
      [
        "Open Mailings.",
        "Click Envelopes.",
        "Enter the delivery address.",
        "Enter the return address if required.",
        "Choose envelope options.",
        "Click Add to Document or Print."
      ]
    ],

    [
      "🏷️",
      "Labels",
      "Creates printable address or product labels.",
      "Use it for mailing labels, folders, packages and name labels.",
      "Mailings → Labels → enter address/text → choose label options → Print.",
      [
        "Open Mailings.",
        "Click Labels.",
        "Enter the required text.",
        "Click Options to select the label manufacturer and product number.",
        "Click OK.",
        "Choose Print or New Document."
      ]
    ],

    [
      "📨",
      "Start Mail Merge",
      "Starts the process of creating personalized documents for multiple recipients.",
      "Use it for letters, certificates, invitations, labels and email messages.",
      "Mailings → Start Mail Merge → choose document type.",
      [
        "Open Mailings.",
        "Click Start Mail Merge.",
        "Choose Letters, Email Messages, Labels or another type.",
        "Continue with recipient selection and merge fields."
      ]
    ],

    [
      "👥",
      "Select Recipients",
      "Chooses the people or records that will receive the merged document.",
      "Use it when creating personalized documents for many people.",
      "Mailings → Select Recipients → choose or create a list.",
      [
        "Start a Mail Merge.",
        "Click Select Recipients.",
        "Choose an existing list or create a new list.",
        "Select the Excel/CSV or other data source.",
        "Confirm the recipient records."
      ]
    ],

    [
      "✏️",
      "Edit Recipient List",
      "Allows you to review, filter and modify the mail merge recipient list.",
      "Use it when only some recipients should receive the document.",
      "Mailings → Edit Recipient List.",
      [
        "Start Mail Merge.",
        "Open Edit Recipient List.",
        "Review the records.",
        "Use checkboxes or filtering to choose recipients.",
        "Click OK."
      ]
    ],

    [
      "✨",
      "Highlight Merge Fields",
      "Highlights fields inserted into a mail merge document.",
      "Use it to easily identify personalized fields such as names and addresses.",
      "Mailings → Highlight Merge Fields.",
      [
        "Open the Mailings tab.",
        "Click Highlight Merge Fields.",
        "Merge fields become visually easier to identify.",
        "Use the highlighted fields while editing the document."
      ]
    ],

    [
      "📍",
      "Address Block",
      "Inserts a formatted recipient address.",
      "Use it when creating personalized letters or envelopes.",
      "Mailings → Address Block → choose address format.",
      [
        "Start Mail Merge.",
        "Place the cursor where the address should appear.",
        "Click Address Block.",
        "Choose the desired format.",
        "Preview the result.",
        "Click OK."
      ]
    ],

    [
      "👋",
      "Greeting Line",
      "Adds a personalized greeting such as Dear Sir/Madam or Dear Name.",
      "Use it in personalized letters and emails.",
      "Mailings → Greeting Line → choose greeting format.",
      [
        "Place the cursor where the greeting should appear.",
        "Click Greeting Line.",
        "Choose the greeting format.",
        "Set the fallback greeting if needed.",
        "Click OK."
      ]
    ],

    [
      "🔗",
      "Insert Merge Field",
      "Inserts a specific field from the recipient data source.",
      "Use it to add Name, City, Course, Date or other personalized information.",
      "Mailings → Insert Merge Field → choose a field.",
      [
        "Place the cursor where the information should appear.",
        "Click Insert Merge Field.",
        "Choose the required field.",
        "The merge field is inserted.",
        "Preview the merged result later."
      ]
    ],

    [
      "⚙️",
      "Rules",
      "Adds conditions to a mail merge.",
      "Use it when different recipients should receive different text based on their data.",
      "Mailings → Rules → choose a rule such as If...Then...Else.",
      [
        "Place the cursor where conditional text is required.",
        "Click Rules.",
        "Choose the required rule.",
        "Set the condition and values.",
        "Enter the text for each condition.",
        "Confirm the rule."
      ]
    ],

    [
      "🔄",
      "Match Fields",
      "Matches Word's merge fields with columns in the recipient data.",
      "Use it when your Excel/CSV column names do not exactly match Word's expected fields.",
      "Mailings → Match Fields → match each field.",
      [
        "Connect your recipient list.",
        "Click Match Fields.",
        "Review the Word field names.",
        "Select the corresponding data-source fields.",
        "Click OK."
      ]
    ],

    [
      "🔄",
      "Update Labels",
      "Copies the first label's layout and merge fields to the remaining labels.",
      "Use it when creating a sheet of personalized labels.",
      "Mailings → Update Labels.",
      [
        "Create a label mail merge.",
        "Design the first label.",
        "Click Update Labels.",
        "Word copies the layout and fields to the other labels."
      ]
    ],

    [
      "👁️",
      "Preview Results",
      "Shows what the merged documents will look like with real recipient data.",
      "Use it before completing a mail merge to check names, addresses and other fields.",
      "Mailings → Preview Results.",
      [
        "Insert the merge fields.",
        "Click Preview Results.",
        "Use the previous/next record controls.",
        "Check several recipient records.",
        "Turn Preview Results off when you want to edit the fields."
      ]
    ],

    [
      "🔍",
      "Find Recipient",
      "Searches for a particular recipient in the merge list.",
      "Use it when a recipient list contains many records.",
      "Mailings → Find Recipient → search by name or other information.",
      [
        "Open Preview Results.",
        "Click Find Recipient.",
        "Enter the information to search.",
        "Choose the matching record."
      ]
    ],

    [
      "✓",
      "Check for Errors",
      "Checks the mail merge for potential problems.",
      "Use it before completing a large mail merge.",
      "Mailings → Check for Errors.",
      [
        "Complete the merge fields.",
        "Click Check for Errors.",
        "Choose the checking option.",
        "Review any reported problems.",
        "Correct the document and check again."
      ]
    ],

    [
      "✅",
      "Finish & Merge",
      "Completes the mail merge and creates or prints the personalized documents.",
      "Use it after checking the preview and recipient data.",
      "Mailings → Finish & Merge → choose the required output.",
      [
        "Preview the results.",
        "Check the recipients.",
        "Click Finish & Merge.",
        "Choose Edit Individual Documents, Print Documents or another option.",
        "Complete the final step."
      ]
    ]

  ],


  /*
   * =========================================================
   * REVIEW TAB
   * =========================================================
   */

  Review: [

    [
      "ABC✓",
      "Spelling & Grammar",
      "Checks the document for spelling and grammar issues.",
      "Use it before submitting or sharing an important document.",
      "Review → Spelling & Grammar.",
      [
        "Open Review.",
        "Click Spelling & Grammar.",
        "Review each suggested correction.",
        "Choose Change, Ignore or another appropriate option.",
        "Continue until the review is complete."
      ]
    ],

    [
      "📖",
      "Thesaurus",
      "Shows synonyms and related words.",
      "Use it when you want a better or more suitable word.",
      "Select a word → Review → Thesaurus.",
      [
        "Select or place the cursor on a word.",
        "Open Review.",
        "Click Thesaurus.",
        "Review the suggested words.",
        "Choose the suitable alternative if required."
      ]
    ],

    [
      "🔢",
      "Word Count",
      "Shows the number of words, characters and other document statistics.",
      "Use it when an assignment or document has a word limit.",
      "Review → Word Count.",
      [
        "Open Review.",
        "Click Word Count.",
        "Review words, characters, paragraphs and pages.",
        "Close the dialog when finished."
      ]
    ],

    [
      "🔊",
      "Read Aloud",
      "Reads document text aloud.",
      "Use it to listen for grammar, wording and reading-flow problems.",
      "Review → Read Aloud → use the playback controls.",
      [
        "Open Review.",
        "Click Read Aloud.",
        "Word starts reading from the selected/current location.",
        "Use the controls to pause, play or change reading options."
      ]
    ],

    [
      "♿",
      "Check Accessibility",
      "Checks whether the document is accessible to people with disabilities.",
      "Use it before sharing a document with a broad audience.",
      "Review → Check Accessibility.",
      [
        "Open Review.",
        "Click Check Accessibility.",
        "Review the accessibility results.",
        "Fix the suggested issues.",
        "Run the check again if needed."
      ]
    ],

    [
      "🌐",
      "Translate",
      "Translates selected text or the document into another language.",
      "Use it when working with multilingual content.",
      "Review → Translate → choose selection or document translation.",
      [
        "Select the text if you only want part translated.",
        "Open Review.",
        "Click Translate.",
        "Choose Translate Selection or Translate Document.",
        "Select the target language."
      ]
    ],

    [
      "🌐",
      "Language",
      "Sets the language used for proofing and related language features.",
      "Use it when the document contains text in another language.",
      "Review → Language → Set Proofing Language.",
      [
        "Select the text.",
        "Open Review.",
        "Click Language.",
        "Choose Set Proofing Language.",
        "Select the required language.",
        "Click OK."
      ]
    ],

    [
      "💬",
      "New Comment",
      "Adds a new comment to selected content.",
      "Use it when reviewing or discussing a document.",
      "Review → New Comment.",
      [
        "Select the relevant text.",
        "Open Review.",
        "Click New Comment.",
        "Type the comment.",
        "Post the comment."
      ]
    ],

    [
      "🗑️",
      "Delete Comment",
      "Removes a comment.",
      "Use it when a comment is no longer needed.",
      "Select a comment → Review → Delete.",
      [
        "Select or open the comment.",
        "Open Review.",
        "Click Delete.",
        "Choose Delete Comment or the required delete option."
      ]
    ],

    [
      "◀️",
      "Previous",
      "Moves to the previous comment or tracked change.",
      "Use it when reviewing comments or revisions one by one.",
      "Review → Previous.",
      [
        "Open the Review tab.",
        "Make sure comments or tracked changes are available.",
        "Click Previous.",
        "Word moves to the previous item."
      ]
    ],

    [
      "▶️",
      "Next",
      "Moves to the next comment or tracked change.",
      "Use it when reviewing a document sequentially.",
      "Review → Next.",
      [
        "Open Review.",
        "Click Next.",
        "Word moves to the next comment or tracked change.",
        "Continue until all items are reviewed."
      ]
    ],

    [
      "👁️",
      "Show Comments",
      "Displays comments in the document.",
      "Use it when you need to review feedback.",
      [
        "Open Review.",
        "Click Show Comments.",
        "Comments appear in the document/comment area.",
        "Use the controls to review them."
      ]
    ],

    [
      "✓",
      "Accept",
      "Accepts tracked changes.",
      "Use it after reviewing a proposed change and deciding to keep it.",
      "Review → Accept → choose the required option.",
      [
        "Make sure Track Changes/revisions are visible.",
        "Select the change if needed.",
        "Click Accept.",
        "Choose Accept This Change or another option."
      ]
    ],

    [
      "✕",
      "Reject",
      "Rejects tracked changes.",
      "Use it when a proposed change should not become part of the final document.",
      "Review → Reject → choose the required option.",
      [
        "Review the tracked change.",
        "Click Reject.",
        "Choose Reject This Change or another option.",
        "The rejected change is removed."
      ]
    ],

    [
      "📑",
      "Compare",
      "Compares two versions of a document.",
      "Use it to identify differences between document versions.",
      "Review → Compare → choose the two documents.",
      [
        "Open Review.",
        "Click Compare.",
        "Choose the original document.",
        "Choose the revised document.",
        "Review the differences shown by Word."
      ]
    ],

    [
      "🔒",
      "Protect",
      "Restricts editing or protects parts of a document.",
      "Use it when a document should not be freely edited.",
      "Review → Protect → choose the appropriate protection option.",
      [
        "Open Review.",
        "Click Protect.",
        "Choose the required protection method.",
        "Set restrictions or a password if required.",
        "Confirm the protection."
      ]
    ]

  ],


  /*
   * =========================================================
   * VIEW TAB
   * =========================================================
   */

  View: [

    [
      "📖",
      "Read Mode",
      "Displays the document in a reading-focused layout.",
      "Use it when you want to read a document with fewer editing distractions.",
      "View → Read Mode.",
      [
        "Open View.",
        "Click Read Mode.",
        "The document changes to a reading layout.",
        "Use the navigation controls to move through the document."
      ]
    ],

    [
      "🖨️",
      "Print Layout",
      "Shows the document approximately as it will appear when printed.",
      "Use it for normal document editing and print preparation.",
      "View → Print Layout.",
      [
        "Open View.",
        "Click Print Layout.",
        "The document displays pages, margins and page boundaries."
      ]
    ],

    [
      "🌐",
      "Web Layout",
      "Displays the document in a web-page style.",
      "Use it when viewing content intended for online presentation.",
      "View → Web Layout.",
      [
        "Open View.",
        "Click Web Layout.",
        "The document changes to a web-style continuous layout."
      ]
    ],

    [
      "☷",
      "Outline",
      "Shows the document structure based on headings.",
      "Use it to organize and navigate long documents.",
      "View → Outline.",
      [
        "Open View.",
        "Click Outline.",
        "Word displays the document structure.",
        "Use heading levels to organize sections."
      ]
    ],

    [
      "📄",
      "Draft",
      "Shows a simplified editing view.",
      "Use it when focusing mainly on text editing.",
      "View → Draft.",
      [
        "Open View.",
        "Click Draft.",
        "Word switches to a simplified document view."
      ]
    ],

    [
      "🎯",
      "Focus",
      "Reduces distractions while working on the document.",
      "Use it when you want to concentrate on writing.",
      "View → Focus.",
      [
        "Open View.",
        "Click Focus.",
        "Word enters a distraction-reduced view.",
        "Exit Focus when you want the normal interface back."
      ]
    ],

    [
      "🔊",
      "Immersive Reader",
      "Provides reading-focused tools to help understand document content.",
      "Use it when reading or studying text.",
      "View → Immersive Reader.",
      [
        "Open View.",
        "Click Immersive Reader.",
        "Use the available reading and text options.",
        "Exit the mode when finished."
      ]
    ],

    [
      "↕️",
      "Vertical",
      "Displays pages in a vertical scrolling arrangement.",
      "Use it for normal continuous page navigation.",
      "View → Page Movement → Vertical.",
      [
        "Open View.",
        "Find Page Movement.",
        "Choose Vertical.",
        "Scroll normally through the pages."
      ]
    ],

    [
      "↔️",
      "Side to Side",
      "Displays pages beside each other horizontally.",
      "Use it when reviewing two-page spreads or wide documents.",
      "View → Page Movement → Side to Side.",
      [
        "Open View.",
        "Choose Side to Side.",
        "Pages are displayed horizontally.",
        "Use the horizontal scrolling controls to navigate."
      ]
    ],

    [
      "📏",
      "Ruler",
      "Shows the horizontal and vertical rulers.",
      "Use it to set margins, tabs and paragraph indents visually.",
      "View → Show → Ruler.",
      [
        "Open View.",
        "Find the Show group.",
        "Turn on Ruler.",
        "Use the rulers to adjust document layout."
      ]
    ],

    [
      "▦",
      "Gridlines",
      "Displays alignment gridlines.",
      "Use them when positioning objects accurately.",
      "View → Show → Gridlines.",
      [
        "Open View.",
        "Turn on Gridlines.",
        "Use the grid as a visual alignment guide.",
        "Turn it off when finished."
      ]
    ],

    [
      "☰",
      "Navigation Pane",
      "Displays headings, pages and search results in a navigation panel.",
      "Use it to quickly move through a long document.",
      "View → Navigation Pane.",
      [
        "Open View.",
        "Turn on Navigation Pane.",
        "Use the Headings, Pages or Search sections.",
        "Click an item to jump to that location."
      ]
    ],

    [
      "🔍",
      "Zoom",
      "Changes how large or small the document appears on screen.",
      "Use it when text or pages are too small or too large to view comfortably.",
      "View → Zoom → choose a zoom percentage.",
      [
        "Open View.",
        "Click Zoom.",
        "Choose a percentage or enter a custom value.",
        "Click OK."
      ]
    ],

    [
      "1️⃣",
      "100%",
      "Displays the document at its standard 100% zoom level.",
      "Use it when you want a standard viewing size.",
      "View → 100%.",
      [
        "Open View.",
        "Click 100%.",
        "The document returns to 100% zoom."
      ]
    ],

    [
      "📄",
      "One Page",
      "Fits one complete page into the viewing area.",
      "Use it when you want to see the complete page at once.",
      "View → One Page.",
      [
        "Open View.",
        "Open the Zoom controls.",
        "Choose One Page.",
        "Word adjusts the display to fit one page."
      ]
    ],

    [
      "📑",
      "Multiple Pages",
      "Shows several pages at the same time.",
      "Use it when reviewing the overall layout of a multi-page document.",
      "View → Multiple Pages.",
      [
        "Open View.",
        "Choose Multiple Pages.",
        "Word displays several pages together."
      ]
    ],

    [
      "↔️",
      "Page Width",
      "Fits the page to the available window width.",
      "Use it when you want the text to be larger while keeping the page width visible.",
      "View → Page Width.",
      [
        "Open View.",
        "Choose Page Width.",
        "Word adjusts the page to the available width."
      ]
    ],

    [
      "🪟",
      "New Window",
      "Opens another window for the current document.",
      "Use it when you want to view different parts of the same document simultaneously.",
      "View → New Window.",
      [
        "Open View.",
        "Click New Window.",
        "A second window opens for the same document.",
        "Use the windows to compare different sections."
      ]
    ],

    [
      "▣",
      "Arrange All",
      "Arranges open document windows so they can be viewed together.",
      "Use it when multiple Word documents are open.",
      "View → Arrange All.",
      [
        "Open multiple Word documents.",
        "Go to View.",
        "Click Arrange All.",
        "Word arranges the open windows."
      ]
    ],

    [
      "⬛",
      "Split",
      "Divides the document window into separate viewing areas.",
      "Use it to view or compare two parts of the same document.",
      "View → Split.",
      [
        "Open View.",
        "Click Split.",
        "Choose where to divide the window.",
        "Scroll the sections independently."
      ]
    ],

    [
      "🔄",
      "Switch Windows",
      "Switches between open Word document windows.",
      "Use it when several documents are open.",
      "View → Switch Windows → choose the document.",
      [
        "Open View.",
        "Click Switch Windows.",
        "Select the document you want to activate."
      ]
    ],

    [
      "⚙️",
      "Macros",
      "Allows you to work with recorded or programmed macros.",
      "Use macros to automate repeated tasks.",
      "View → Macros → View Macros / Record Macro.",
      [
        "Open View.",
        "Click Macros.",
        "Choose View Macros or Record Macro.",
        "Follow the prompts for the required macro task."
      ]
    ]

  ]

};


/* =========================================================
   FALLBACK / TAB IMAGE MAP
   ========================================================= */

const tabImages = {
  Home: "Home.png",
  Insert: "Insert.png",
  Design: "Design.png",
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
      "The Home tab contains the most commonly used tools for typing, editing, formatting and arranging text.",
    hindi:
      "Home Tab में text को type, edit, format और arrange करने के लिए सबसे ज्यादा उपयोग होने वाले tools होते हैं."
  },

  Insert: {
    title: "Insert Tab",
    description:
      "The Insert tab is used to add pages, tables, pictures, shapes, links, headers, footers, symbols and other objects.",
    hindi:
      "Insert Tab का उपयोग pages, tables, pictures, shapes, links, headers, footers, symbols और अन्य objects जोड़ने के लिए किया जाता है."
  },

  Design: {
    title: "Design Tab",
    description:
      "The Design tab is used to change the overall visual appearance of a Word document.",
    hindi:
      "Design Tab का उपयोग पूरे Word document की visual appearance और page design बदलने के लिए किया जाता है."
  },

  Layout: {
    title: "Page Layout Tab",
    description:
      "The Layout tab controls page setup, margins, orientation, size, columns, paragraph spacing and object arrangement.",
    hindi:
      "Layout Tab का उपयोग page setup, margins, orientation, size, columns, paragraph spacing और objects की arrangement के लिए किया जाता है."
  },

  References: {
    title: "References Tab",
    description:
      "The References tab helps create tables of contents, citations, footnotes, captions, indexes and other references.",
    hindi:
      "References Tab का उपयोग Table of Contents, citations, footnotes, captions, index और अन्य references बनाने के लिए किया जाता है."
  },

  Mailings: {
    title: "Mailings Tab",
    description:
      "The Mailings tab is mainly used for envelopes, labels and Mail Merge.",
    hindi:
      "Mailings Tab का मुख्य उपयोग envelopes, labels और Mail Merge के लिए किया जाता है."
  },

  Review: {
    title: "Review Tab",
    description:
      "The Review tab provides tools for proofreading, comments, translation, tracking changes, comparison and document protection.",
    hindi:
      "Review Tab में proofreading, comments, translation, Track Changes, comparison और document protection के tools होते हैं."
  },

  View: {
    title: "View Tab",
    description:
      "The View tab controls how the document appears on screen, including views, navigation, zoom and windows.",
    hindi:
      "View Tab का उपयोग document को अलग-अलग तरीके से देखने, navigation, zoom और windows manage करने के लिए किया जाता है."
  }

};


/* =========================================================
   PRACTICAL PROJECTS
   ========================================================= */

const projects = [
  {
    id: 1,
    title: "Microsoft Word - Lesson 1",
    shortTitle: "Lesson 1",
    description: "Basic MS Word practical learning project.",
    image: "Project 1.png"
  },
  {
    id: 2,
    title: "Microsoft Word - Lesson 2",
    shortTitle: "Lesson 2",
    description: "Practice project for MS Word tools.",
    image: "Project 2.png"
  },
  {
    id: 3,
    title: "Microsoft Word - Lesson 3",
    shortTitle: "Lesson 3",
    description: "Practice document formatting.",
    image: "Project 3.png"
  },
  {
    id: 4,
    title: "Microsoft Word - Lesson 4",
    shortTitle: "Lesson 4",
    description: "Document creation and formatting practice.",
    image: "Project 4.png"
  },
  {
    id: 5,
    title: "Microsoft Word - Lesson 5",
    shortTitle: "Lesson 5",
    description: "Practical MS Word project.",
    image: "Project 5.png"
  },
  {
    id: 6,
    title: "Microsoft Word - Lesson 6",
    shortTitle: "Lesson 6",
    description: "Practical formatting project.",
    image: "Project 6.png"
  },
  {
    id: 7,
    title: "Microsoft Word - Lesson 7",
    shortTitle: "Lesson 7",
    description: "Document design practice.",
    image: "Project 7.png"
  },
  {
    id: 8,
    title: "Microsoft Word - Lesson 8",
    shortTitle: "Lesson 8",
    description: "Practical document project.",
    image: "Project 8.png"
  },
  {
    id: 9,
    title: "Microsoft Word - Lesson 9",
    shortTitle: "Lesson 9",
    description: "Advanced formatting practice.",
    image: "Project 9.png"
  },
  {
    id: 10,
    title: "Microsoft Word - Lesson 10",
    shortTitle: "Lesson 10",
    description: "Practical Word project.",
    image: "Project 10.png"
  },
  {
    id: 11,
    title: "Microsoft Word - Lesson 11",
    shortTitle: "Lesson 11",
    description: "Practical document project.",
    image: "Project 11.png"
  },
  {
    id: 12,
    title: "Microsoft Word - Lesson 12",
    shortTitle: "Lesson 12",
    description: "Advanced Word practice.",
    image: "Project 12.png"
  },
  {
    id: 13,
    title: "Microsoft Word - Lesson 13",
    shortTitle: "Lesson 13",
    description: "Practical project.",
    image: "Project 13.png"
  },
  {
    id: 14,
    title: "Microsoft Word - Lesson 14",
    shortTitle: "Lesson 14",
    description: "Final practical Word project.",
    image: "Project 14.png"
  }
];


/* =========================================================
   EXCEL / POWERPOINT PLACEHOLDER DATA
   ========================================================= */

const courseData = {
  excel: {
    title: "MS Excel",
    description: "Excel formulas, functions and practical spreadsheet exercises.",
    comingSoon: true
  },

  powerpoint: {
    title: "MS PowerPoint",
    description: "Learn presentations, slides, designs, animations and practical work.",
    comingSoon: true
  }
};


/* =========================================================
   LANGUAGE HELPERS
   ========================================================= */

function isHindi() {
  return state.lang === "hi";
}

function text(en, hi) {
  return isHindi() ? hi : en;
}


/* =========================================================
   SAFE HTML HELPERS
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
   IMAGE PATH HELPER
   ========================================================= */

function imagePath(file) {
  return encodeURI(file);
}


/* =========================================================
   AI TEACHER STATE
   ========================================================= */

const aiState = {
  open: false,
  loading: false,
  messages: []
};


/* =========================================================
   FIND MAIN APP CONTAINER
   ========================================================= */

function getAppRoot() {
  return (
    document.getElementById("app") ||
    document.getElementById("root") ||
    document.querySelector("main") ||
    document.body
  );
}


/* =========================================================
   NAVIGATION
   ========================================================= */

function setSection(section) {
  state.section = section;

  if (section === "word") {
    state.wordView = null;
  }

  render();
}


/* =========================================================
   OPEN WORD
   ========================================================= */

function openWord() {
  state.course = "word";
  state.wordView = null;
  state.tab = null;
  state.toolIndex = 0;
  state.practicalOpen = false;
  state.projectId = null;

  render();
}


/* =========================================================
   OPEN WORD LEARNING
   ========================================================= */

function openWordLearning() {
  state.course = "word";
  state.wordView = "learning";
  state.tab = null;
  state.toolIndex = 0;
  state.practicalOpen = false;
  state.projectId = null;

  render();
}


/* =========================================================
   OPEN WORD PRACTICAL WORK
   ========================================================= */

function openWordPractical() {
  state.course = "word";
  state.wordView = "practical";
  state.tab = null;
  state.toolIndex = 0;
  state.practicalOpen = false;
  state.projectId = null;

  render();
}


/* =========================================================
   SELECT WORD TAB
   ========================================================= */

function selectTab(tabName) {
  if (!tabData[tabName]) return;

  state.course = "word";
  state.wordView = "learning";
  state.tab = tabName;
  state.toolIndex = 0;
  state.expanded = true;

  render();
}


/* =========================================================
   SELECT TOOL
   ========================================================= */

function selectTool(index) {
  state.toolIndex = Number(index) || 0;
  state.expanded = true;
  render();
}


/* =========================================================
   OPEN PROJECT
   ========================================================= */

function openProject(projectId) {
  state.projectId = Number(projectId);
  state.practicalOpen = true;

  render();
}


/* =========================================================
   CLOSE PROJECT
   ========================================================= */

function closeProject() {
  state.practicalOpen = false;
  state.projectId = null;

  render();
}


/* =========================================================
   IMAGE ZOOM
   ========================================================= */

function openImageZoom(src, title = "") {

  const old = document.getElementById("imageZoomModal");

  if (old) old.remove();

  const modal = document.createElement("div");

  modal.id = "imageZoomModal";

  modal.innerHTML = `
    <div class="jh-image-modal-backdrop">
      <button
        class="jh-image-close"
        type="button"
        aria-label="Close"
        onclick="closeImageZoom()"
      >
        ×
      </button>

      <div class="jh-image-modal-content">
        ${
          title
            ? `<div class="jh-image-modal-title">${escapeHTML(title)}</div>`
            : ""
        }

        <img
          src="${escapeHTML(src)}"
          alt="${escapeHTML(title || "Image preview")}"
          class="jh-zoomed-image"
        />
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  document.body.classList.add("jh-modal-open");
}


function closeImageZoom() {

  const modal = document.getElementById("imageZoomModal");

  if (modal) modal.remove();

  document.body.classList.remove("jh-modal-open");
}


/* =========================================================
   AI TEACHER
   ========================================================= */

function openAITeacher() {
  aiState.open = true;

  renderAIOverlay();
}


function closeAITeacher() {
  aiState.open = false;

  const overlay = document.getElementById("aiTeacherOverlay");

  if (overlay) overlay.remove();
}


function clearAIChat() {
  aiState.messages = [];

  renderAIOverlay();
}


function addAIMessage(role, content) {
  aiState.messages.push({
    role,
    content,
    time: Date.now()
  });
}


function currentAIContext() {

  let course = "MS Word";

  if (state.course === "excel") {
    course = "MS Excel";
  }

  if (state.course === "powerpoint") {
    course = "MS PowerPoint";
  }

  let project = "";

  if (state.projectId) {
    const p = projects.find(
      item => item.id === Number(state.projectId)
    );

    if (p) {
      project = p.title;
    }
  }

  if (state.tab) {
    project = `${state.tab} Tab`;
  }

  return {
    course,
    project
  };
}


async function askAITeacher(question) {

  const cleanQuestion = String(question || "").trim();

  if (!cleanQuestion || aiState.loading) return;

  addAIMessage("user", cleanQuestion);

  aiState.loading = true;

  renderAIOverlay();

  const context = currentAIContext();

  try {

    const response = await fetch("/api/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        question: cleanQuestion,
        course: context.course,
        project: context.project
      })
    });

    let data = {};

    try {
      data = await response.json();
    } catch {
      data = {};
    }

    if (!response.ok) {
      throw new Error(
        data.error ||
        `AI Teacher request failed (${response.status}).`
      );
    }

    addAIMessage(
      "assistant",
      data.answer || "I could not generate an answer right now."
    );

  } catch (error) {

    console.error("AI Teacher error:", error);

    addAIMessage(
      "error",
      error?.message ||
      "AI Teacher is currently unavailable. Please try again."
    );

  } finally {

    aiState.loading = false;

    renderAIOverlay();
  }
}


/* =========================================================
   AI TEACHER OVERLAY
   ========================================================= */

function renderAIOverlay() {

  const old = document.getElementById("aiTeacherOverlay");

  if (old) old.remove();

  if (!aiState.open) return;

  const context = currentAIContext();

  const overlay = document.createElement("div");

  overlay.id = "aiTeacherOverlay";

  overlay.innerHTML = `
    <div class="jh-ai-backdrop" onclick="if(event.target===this) closeAITeacher()">

      <div class="jh-ai-panel">

        <div class="jh-ai-header">

          <div class="jh-ai-title">

            <div class="jh-ai-avatar">🤖</div>

            <div>
              <h2>AI Teacher</h2>
              <div class="jh-ai-context">
                ${escapeHTML(context.course)}
                ${
                  context.project
                    ? ` • ${escapeHTML(context.project)}`
                    : ""
                }
              </div>
            </div>

          </div>

          <div class="jh-ai-actions">

            <button
              type="button"
              class="jh-ai-clear"
              onclick="clearAIChat()"
            >
              Clear
            </button>

            <button
              type="button"
              class="jh-ai-close"
              onclick="closeAITeacher()"
              aria-label="Close AI Teacher"
            >
              ×
            </button>

          </div>

        </div>


        <div class="jh-ai-messages" id="aiMessages">

          ${
            aiState.messages.length === 0
              ? `
                <div class="jh-ai-welcome">

                  <div class="jh-ai-welcome-icon">🎓</div>

                  <h3>
                    ${isHindi() ? "AI Teacher से पूछें" : "Ask your AI Teacher"}
                  </h3>

                  <p>
                    ${
                      isHindi()
                        ? "MS Word, Excel या computer learning से जुड़ा कोई भी सवाल पूछें."
                        : "Ask anything about MS Word, Excel or computer learning."
                    }
                  </p>

                  <div class="jh-ai-suggestions">

                    <button
                      type="button"
                      onclick="askAITeacher('How do I insert a watermark in MS Word?')"
                    >
                      💧 How do I insert a watermark?
                    </button>

                    <button
                      type="button"
                      onclick="askAITeacher('Explain the Home tab in MS Word.')"
                    >
                      📝 Explain the Home tab
                    </button>

                    <button
                      type="button"
                      onclick="askAITeacher('Explain this topic step by step in simple language.')"
                    >
                      📚 Explain step by step
                    </button>

                  </div>

                </div>
              `
              : aiState.messages.map(message => {

                  const cls =
                    message.role === "user"
                      ? "user"
                      : message.role === "error"
                        ? "error"
                        : "assistant";

                  return `
                    <div class="jh-ai-message ${cls}">

                      <div class="jh-ai-message-label">
                        ${
                          message.role === "user"
                            ? "You"
                            : message.role === "error"
                              ? "AI Teacher"
                              : "🤖 AI Teacher"
                        }
                      </div>

                      <div class="jh-ai-message-body">
                        ${escapeHTML(message.content).replace(/\n/g, "<br>")}
                      </div>

                    </div>
                  `;
                }).join("")
          }

          ${
            aiState.loading
              ? `
                <div class="jh-ai-message assistant">

                  <div class="jh-ai-message-label">
                    🤖 AI Teacher
                  </div>

                  <div class="jh-ai-thinking">
                    <span></span>
                    <span></span>
                    <span></span>
                    <em>AI Teacher is thinking...</em>
                  </div>

                </div>
              `
              : ""
          }

        </div>


        <form
          class="jh-ai-input-area"
          id="aiTeacherForm"
          onsubmit="submitAITeacher(event)"
        >

          <textarea
            id="aiTeacherInput"
            placeholder="${
              isHindi()
                ? "अपना सवाल यहाँ लिखें..."
                : "Type your question here..."
            }"
            rows="3"
            ${aiState.loading ? "disabled" : ""}
          ></textarea>

          <button
            type="submit"
            class="jh-ai-send"
            ${aiState.loading ? "disabled" : ""}
          >
            ${
              aiState.loading
                ? "Thinking..."
                : "Ask AI Teacher →"
            }
          </button>

        </form>

        <div class="jh-ai-footer">
          ${
            isHindi()
              ? "AI Teacher आपको step-by-step समझाने में मदद करेगा."
              : "AI Teacher provides step-by-step learning guidance."
          }
        </div>

      </div>

    </div>
  `;

  document.body.appendChild(overlay);

  const input = document.getElementById("aiTeacherInput");

  if (input) {

    input.focus();

    input.addEventListener("keydown", event => {

      if (
        event.key === "Enter" &&
        (event.ctrlKey || event.metaKey)
      ) {
        event.preventDefault();

        const form =
          document.getElementById("aiTeacherForm");

        if (form) form.requestSubmit();
      }

    });
  }

  const messages =
    document.getElementById("aiMessages");

  if (messages) {
    messages.scrollTop = messages.scrollHeight;
  }
}


function submitAITeacher(event) {

  event.preventDefault();

  const input =
    document.getElementById("aiTeacherInput");

  if (!input) return;

  const question = input.value.trim();

  if (!question) return;

  input.value = "";

  askAITeacher(question);
}


/* =========================================================
   IMAGE ZOOM + PROJECT FULLSCREEN STYLES
   ========================================================= */

function injectRuntimeStyles() {

  if (document.getElementById("jh-runtime-styles")) {
    return;
  }

  const style = document.createElement("style");

  style.id = "jh-runtime-styles";

  style.textContent = `

    body.jh-modal-open {
      overflow: hidden;
    }

    .jh-image-modal-backdrop {
      position: fixed;
      inset: 0;
      z-index: 99999;
      background: rgba(8, 15, 35, .92);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 30px;
    }

    .jh-image-modal-content {
      width: min(95vw, 1500px);
      height: min(92vh, 1000px);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .jh-image-modal-title {
      color: white;
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 14px;
    }

    .jh-zoomed-image {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      border-radius: 14px;
      background: white;
      box-shadow: 0 20px 70px rgba(0,0,0,.45);
      cursor: zoom-out;
    }

    .jh-image-close {
      position: fixed;
      top: 20px;
      right: 25px;
      z-index: 100000;
      width: 48px;
      height: 48px;
      border: 0;
      border-radius: 50%;
      background: white;
      color: #351a75;
      font-size: 32px;
      cursor: pointer;
      box-shadow: 0 5px 20px rgba(0,0,0,.3);
    }

    .jh-ai-backdrop {
      position: fixed;
      inset: 0;
      z-index: 90000;
      background: rgba(10, 18, 40, .55);
      backdrop-filter: blur(5px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 25px;
    }

    .jh-ai-panel {
      width: min(850px, 96vw);
      height: min(760px, 92vh);
      background: white;
      border-radius: 24px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      box-shadow: 0 30px 100px rgba(20,20,60,.35);
    }

    .jh-ai-header {
      padding: 18px 22px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: linear-gradient(135deg,#235ee7,#7639df);
      color: white;
    }

    .jh-ai-title {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .jh-ai-avatar {
      width: 48px;
      height: 48px;
      display: grid;
      place-items: center;
      background: white;
      border-radius: 14px;
      font-size: 27px;
    }

    .jh-ai-title h2 {
      margin: 0;
      font-size: 22px;
    }

    .jh-ai-context {
      margin-top: 3px;
      font-size: 13px;
      opacity: .85;
    }

    .jh-ai-actions {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .jh-ai-clear,
    .jh-ai-close {
      border: 0;
      cursor: pointer;
    }

    .jh-ai-clear {
      background: rgba(255,255,255,.16);
      color: white;
      padding: 9px 13px;
      border-radius: 10px;
    }

    .jh-ai-close {
      background: rgba(255,255,255,.16);
      color: white;
      width: 38px;
      height: 38px;
      border-radius: 10px;
      font-size: 25px;
    }

    .jh-ai-messages {
      flex: 1;
      overflow-y: auto;
      padding: 24px;
      background: #f7f8fd;
    }

    .jh-ai-welcome {
      max-width: 600px;
      margin: 55px auto;
      text-align: center;
    }

    .jh-ai-welcome-icon {
      font-size: 48px;
    }

    .jh-ai-welcome h3 {
      margin: 12px 0 8px;
      color: #38206f;
    }

    .jh-ai-welcome p {
      color: #64708b;
    }

    .jh-ai-suggestions {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 9px;
      margin-top: 20px;
    }

    .jh-ai-suggestions button {
      border: 1px solid #ddd3fa;
      background: white;
      color: #4d2cb5;
      padding: 10px 13px;
      border-radius: 12px;
      cursor: pointer;
    }

    .jh-ai-message {
      max-width: 82%;
      margin-bottom: 16px;
      padding: 14px 17px;
      border-radius: 16px;
      line-height: 1.55;
    }

    .jh-ai-message.user {
      margin-left: auto;
      background: #e8e0ff;
      color: #281553;
    }

    .jh-ai-message.assistant {
      margin-right: auto;
      background: white;
      border: 1px solid #e6e7f0;
      color: #202b43;
    }

    .jh-ai-message.error {
      margin-right: auto;
      background: #fff0f0;
      color: #9d2222;
      border: 1px solid #ffd0d0;
    }

    .jh-ai-message-label {
      font-size: 12px;
      font-weight: 800;
      margin-bottom: 6px;
      opacity: .7;
    }

    .jh-ai-message-body {
      white-space: normal;
      word-break: break-word;
    }

    .jh-ai-thinking {
      display: flex;
      align-items: center;
      gap: 5px;
    }

    .jh-ai-thinking span {
      width: 7px;
      height: 7px;
      background: #6c43dd;
      border-radius: 50%;
      animation: jhAiPulse 1s infinite;
    }

    .jh-ai-thinking span:nth-child(2) {
      animation-delay: .15s;
    }

    .jh-ai-thinking span:nth-child(3) {
      animation-delay: .3s;
    }

    .jh-ai-thinking em {
      margin-left: 6px;
      font-style: normal;
      color: #6b7185;
      font-size: 13px;
    }

    @keyframes jhAiPulse {
      0%,100% { opacity: .3; transform: translateY(0); }
      50% { opacity: 1; transform: translateY(-3px); }
    }

    .jh-ai-input-area {
      display: flex;
      gap: 12px;
      padding: 16px;
      border-top: 1px solid #e8e9f0;
      background: white;
    }

    .jh-ai-input-area textarea {
      flex: 1;
      resize: none;
      border: 1px solid #d9dce8;
      border-radius: 14px;
      padding: 13px;
      font: inherit;
      outline: none;
    }

    .jh-ai-input-area textarea:focus {
      border-color: #6b42df;
      box-shadow: 0 0 0 3px rgba(107,66,223,.1);
    }

    .jh-ai-send {
      align-self: stretch;
      min-width: 150px;
      border: 0;
      border-radius: 14px;
      background: linear-gradient(135deg,#2863ed,#7139df);
      color: white;
      font-weight: 800;
      cursor: pointer;
      padding: 0 18px;
    }

    .jh-ai-send:disabled {
      opacity: .6;
      cursor: not-allowed;
    }

    .jh-ai-footer {
      padding: 8px 16px 12px;
      font-size: 11px;
      text-align: center;
      color: #8a91a5;
      background: white;
    }

    @media (max-width: 700px) {

      .jh-ai-backdrop {
        padding: 0;
      }

      .jh-ai-panel {
        width: 100vw;
        height: 100vh;
        border-radius: 0;
      }

      .jh-ai-message {
        max-width: 92%;
      }

      .jh-ai-input-area {
        flex-direction: column;
      }

      .jh-ai-send {
        min-height: 48px;
      }
    }

  `;

  document.head.appendChild(style);
}


/* =========================================================
   STARTUP
   ========================================================= */

injectRuntimeStyles();
/* =========================================================
   MAIN PAGE RENDERING
   ========================================================= */

function render() {
  const root = getAppRoot();

  if (!root) return;

  if (state.section === "home") {
    root.innerHTML = renderHomePage();
  } else {
    root.innerHTML = renderCoursePage();
  }

  attachEvents();

  if (state.section === "word" && state.practicalOpen) {
    renderProjectFullscreen();
  }
}


/* =========================================================
   HOME PAGE
   ========================================================= */

function renderHomePage() {

  return `
    <div class="jh-layout">

      ${renderSidebar("home")}

      <main class="jh-main">

        ${renderTopHeader()}

        <section class="jh-home-hero">

          <div class="jh-home-badge">
            🎓 AI Computer Learning & Practical Lab
          </div>

          <h1>
            ${isHindi()
              ? "Joining Hands Learning Portal"
              : "Joining Hands Learning Portal"}
          </h1>

          <p>
            ${
              isHindi()
                ? "Computer सीखें step-by-step, practical work करें और अपने skills को मजबूत बनाएं."
                : "Learn computer skills step-by-step, practice every important tool and complete practical projects."
            }
          </p>

        </section>


        <section class="jh-home-section">

          <div class="jh-section-heading">

            <span class="jh-section-icon">🏫</span>

            <div>
              <h2>
                ${isHindi() ? "Joining Hands" : "Joining Hands"}
              </h2>

              <p>
                ${
                  isHindi()
                    ? "हमारे learning portal के बारे में जानें."
                    : "Learn about our learning portal."
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
                isHindi()
                  ? "Details Coming Soon"
                  : "Details Coming Soon"
              }
            </h3>

            <p>
              ${
                isHindi()
                  ? "Joining Hands के बारे में पूरी जानकारी जल्द ही यहाँ उपलब्ध होगी."
                  : "Complete information about Joining Hands will be added here soon."
              }
            </p>

            <span class="jh-coming-badge">
              Coming Soon
            </span>

          </div>

        </section>


        <section class="jh-home-section">

          <div class="jh-section-heading">

            <span class="jh-section-icon">📚</span>

            <div>

              <h2>
                ${
                  isHindi()
                    ? "हमारे Courses"
                    : "Courses We Offer"
                }
              </h2>

              <p>
                ${
                  isHindi()
                    ? "अपना course चुनें और learning शुरू करें."
                    : "Choose a course and start learning."
                }
              </p>

            </div>

          </div>


          <div class="jh-course-grid">

            ${renderHomeCourseCard(
              "word",
              "📝",
              "MS Word",
              "14 Practical Projects",
              "Learn Word tabs, tools, formatting and practical work."
            )}

            ${renderHomeCourseCard(
              "excel",
              "📊",
              "MS Excel",
              "Formulas + Practice Sheets",
              "Learn Excel formulas, functions and spreadsheet skills."
            )}

            ${renderHomeCourseCard(
              "powerpoint",
              "🎞️",
              "MS PowerPoint",
              "Presentations + Practical Work",
              "Learn slides, designs, animations and presentations."
            )}

          </div>

        </section>


        <section class="jh-home-section">

          <div class="jh-section-heading">

            <span class="jh-section-icon">🤖</span>

            <div>

              <h2>
                ${isHindi() ? "AI Teacher" : "AI Teacher"}
              </h2>

              <p>
                ${
                  isHindi()
                    ? "जब भी किसी topic को समझने में परेशानी हो, AI Teacher से पूछें."
                    : "Ask the AI Teacher whenever you need help understanding a topic."
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
                  isHindi()
                    ? "अपने सवाल पूछें"
                    : "Ask Your Questions"
                }
              </h3>

              <p>
                ${
                  isHindi()
                    ? "MS Word, Excel और computer learning से जुड़े questions पूछें और step-by-step explanation पाएँ."
                    : "Ask questions about MS Word, Excel and computer learning and get step-by-step explanations."
                }
              </p>

            </div>

            <button
              type="button"
              class="jh-primary-btn"
              onclick="openAITeacher()"
            >
              🤖 ${isHindi() ? "AI Teacher खोलें" : "Open AI Teacher"}
            </button>

          </div>

        </section>

      </main>

    </div>
  `;
}


/* =========================================================
   HOME COURSE CARD
   ========================================================= */

function renderHomeCourseCard(
  course,
  icon,
  title,
  subtitle,
  description
) {

  return `
    <article
      class="jh-course-card"
      onclick="openCourseFromHome('${course}')"
    >

      <div class="jh-course-card-icon">
        ${icon}
      </div>

      <div class="jh-course-card-body">

        <h3>${escapeHTML(title)}</h3>

        <span class="jh-course-subtitle">
          ${escapeHTML(subtitle)}
        </span>

        <p>
          ${escapeHTML(description)}
        </p>

      </div>

      <div class="jh-course-arrow">
        →
      </div>

    </article>
  `;
}


/* =========================================================
   OPEN COURSE FROM HOME
   ========================================================= */

function openCourseFromHome(course) {

  if (course === "word") {
    openWord();
    return;
  }

  state.course = course;
  state.section = course;
  state.wordView = null;
  state.tab = null;

  render();
}


/* =========================================================
   COURSE PAGE
   ========================================================= */

function renderCoursePage() {

  if (state.course === "word") {
    return renderWordCourse();
  }

  if (state.course === "excel") {
    return renderExcelCourse();
  }

  if (state.course === "powerpoint") {
    return renderPowerPointCourse();
  }

  return renderHomePage();
}


/* =========================================================
   WORD COURSE
   ========================================================= */

function renderWordCourse() {

  return `
    <div class="jh-layout">

      ${renderSidebar("word")}

      <main class="jh-main">

        ${renderTopHeader()}

        ${renderWordBanner()}

        ${
          !state.wordView
            ? renderWordChoiceScreen()
            : state.wordView === "learning"
              ? renderWordLearning()
              : renderWordPractical()
        }

      </main>

    </div>
  `;
}


/* =========================================================
   WORD BANNER
   ========================================================= */

function renderWordBanner() {

  return `
    <section class="jh-course-banner">

      <div class="jh-course-banner-icon">
        W
      </div>

      <div class="jh-course-banner-text">

        <h1>MS Word</h1>

        <p>
          ${
            isHindi()
              ? "MS Word को learning और practical projects के साथ step-by-step सीखें."
              : "Learn MS Word step-by-step with detailed learning and practical projects."
          }
        </p>

      </div>

      <div class="jh-course-banner-stat">
        <strong>14</strong>
        <span>
          ${isHindi() ? "Projects" : "Projects"}
        </span>
      </div>

    </section>
  `;
}


/* =========================================================
   WORD CHOICE SCREEN
   ========================================================= */

function renderWordChoiceScreen() {

  return `
    <section class="jh-word-choice">

      <div class="jh-page-title">

        <span>📝</span>

        <div>
          <h2>
            ${isHindi() ? "MS Word Learning" : "MS Word Learning"}
          </h2>

          <p>
            ${
              isHindi()
                ? "नीचे से चुनें कि आप क्या सीखना चाहते हैं."
                : "Choose what you want to learn."
            }
          </p>
        </div>

      </div>


      <div class="jh-word-choice-grid">

        <button
          type="button"
          class="jh-choice-card learning"
          onclick="openWordLearning()"
        >

          <div class="jh-choice-icon">
            📚
          </div>

          <div>

            <h3>
              ${isHindi() ? "Learning" : "Learning"}
            </h3>

            <p>
              ${
                isHindi()
                  ? "Home, Insert, Design, Layout, References, Mailings, Review और View tabs सीखें."
                  : "Learn Home, Insert, Design, Layout, References, Mailings, Review and View tabs."
              }
            </p>

          </div>

          <span>→</span>

        </button>


        <button
          type="button"
          class="jh-choice-card practical"
          onclick="openWordPractical()"
        >

          <div class="jh-choice-icon">
            🛠️
          </div>

          <div>

            <h3>
              ${isHindi() ? "Practical Works" : "Practical Works"}
            </h3>

            <p>
              ${
                isHindi()
                  ? "सभी 14 practical projects करें."
                  : "Open and practice all 14 practical projects."
              }
            </p>

          </div>

          <span>→</span>

        </button>

      </div>

    </section>
  `;
}


/* =========================================================
   WORD LEARNING PAGE
   ========================================================= */

function renderWordLearning() {

  const selectedTab = state.tab;

  return `
    <section class="jh-learning-page">

      <div class="jh-learning-heading">

        <div>

          <h2>
            📚 ${isHindi() ? "MS Word Learning" : "MS Word Learning"}
          </h2>

          <p>
            ${
              isHindi()
                ? "किसी भी tab पर click करके उसके tools और practical steps सीखें."
                : "Click a tab to learn its tools and step-by-step practical instructions."
            }
          </p>

        </div>

        <button
          type="button"
          class="jh-back-btn"
          onclick="openWord()"
        >
          ← ${isHindi() ? "Back" : "Back"}
        </button>

      </div>


      <div class="jh-tab-strip">

        ${Object.keys(tabData).map(tab => `

          <button
            type="button"
            class="jh-tab-button ${
              selectedTab === tab ? "active" : ""
            }"
            onclick="selectTab('${escapeHTML(tab)}')"
          >

            <span>
              ${getTabIcon(tab)}
            </span>

            ${escapeHTML(tab)}

          </button>

        `).join("")}

      </div>


      ${
        selectedTab
          ? renderSelectedTab(selectedTab)
          : renderNoTabSelected()
      }

    </section>
  `;
}


/* =========================================================
   TAB ICONS
   ========================================================= */

function getTabIcon(tab) {

  const icons = {
    Home: "🏠",
    Insert: "📄",
    Design: "🎨",
    Layout: "📐",
    References: "📚",
    Mailings: "✉️",
    Review: "📝",
    View: "👁️"
  };

  return icons[tab] || "📄";
}


/* =========================================================
   NO TAB SELECTED
   ========================================================= */

function renderNoTabSelected() {

  return `
    <div class="jh-no-tab">

      <div class="jh-no-tab-icon">
        👆
      </div>

      <h3>
        ${
          isHindi()
            ? "कोई Tab चुनें"
            : "Select a Tab to Start Learning"
        }
      </h3>

      <p>
        ${
          isHindi()
            ? "ऊपर Home, Insert, Design, Layout आदि में से किसी tab पर click करें."
            : "Click Home, Insert, Design, Layout or any other tab above to see its image and detailed explanation."
        }
      </p>

    </div>
  `;
}


/* =========================================================
   SELECTED TAB
   ========================================================= */

function renderSelectedTab(tab) {

  const description =
    tabDescriptions[tab] || {
      title: `${tab} Tab`,
      description: "",
      hindi: ""
    };

  const image =
    tabImages[tab] ||
    `${tab}.png`;

  const tools =
    Array.isArray(tabData[tab])
      ? tabData[tab]
      : [];

  return `
    <div class="jh-selected-tab">

      <div class="jh-selected-tab-header">

        <div>

          <div class="jh-small-label">
            ${getTabIcon(tab)}
            ${isHindi() ? "Selected Tab" : "Selected Tab"}
          </div>

          <h2>
            ${escapeHTML(
              isHindi()
                ? `${description.title}`
                : description.title
            )}
          </h2>

          <p>
            ${
              isHindi()
                ? escapeHTML(description.hindi)
                : escapeHTML(description.description)
            }
          </p>

        </div>

      </div>


      <!-- TAB IMAGE -->
      <div class="jh-tab-image-card">

        <div class="jh-tab-image-title">

          <span>
            🖼️
          </span>

          <span>
            ${
              isHindi()
                ? "Tab का चित्र — बड़ा करने के लिए click करें"
                : "Tab Image — Click to Zoom"
            }
          </span>

        </div>

        <img
          src="${imagePath(image)}"
          alt="${escapeHTML(tab + " Tab")}"
          class="jh-tab-main-image"
          onclick="openImageZoom('${escapeHTML(imagePath(image))}', '${escapeHTML(tab + " Tab")}')"
          onerror="this.parentElement.classList.add('image-error')"
        />

      </div>


      <!-- TOOLS -->
      <div class="jh-tools-section">

        <div class="jh-tools-title">

          <h3>
            🧰
            ${
              isHindi()
                ? `${tab} Tab के Tools`
                : `Tools in ${tab} Tab`
            }
          </h3>

          <span>
            ${tools.length}
            ${isHindi() ? "tools" : "tools"}
          </span>

        </div>


        <div class="jh-tool-layout">

          <div class="jh-tool-list">

            ${
              tools.length
                ? tools.map((tool, index) =>
                    renderToolListItem(tool, index)
                  ).join("")
                : `
                  <div class="jh-empty">
                    ${
                      isHindi()
                        ? "इस tab के tools अभी add नहीं किए गए हैं."
                        : "Tools for this tab have not been added yet."
                    }
                  </div>
                `
            }

          </div>


          <div class="jh-tool-detail">

            ${
              tools.length
                ? renderToolDetail(
                    tools[state.toolIndex] || tools[0],
                    state.toolIndex
                  )
                : ""
            }

          </div>

        </div>

      </div>

    </div>
  `;
}


/* =========================================================
   TOOL LIST ITEM
   ========================================================= */

function renderToolListItem(tool, index) {

  const title = tool[1] || `Tool ${index + 1}`;

  return `
    <button
      type="button"
      class="jh-tool-item ${
        state.toolIndex === index ? "active" : ""
      }"
      onclick="selectTool(${index})"
    >

      <span class="jh-tool-item-icon">
        ${tool[0] || "🔹"}
      </span>

      <span class="jh-tool-item-name">
        ${escapeHTML(title)}
      </span>

      <span class="jh-tool-item-arrow">
        →
      </span>

    </button>
  `;
}


/* =========================================================
   TOOL DETAIL
   ========================================================= */

function renderToolDetail(tool, index) {

  if (!tool) return "";

  const icon = tool[0] || "🔹";
  const title = tool[1] || "";
  const what = tool[2] || "";
  const when = tool[3] || "";
  const how = tool[4] || "";
  const steps = Array.isArray(tool[5])
    ? tool[5]
    : [];

  return `
    <article class="jh-tool-detail-card">

      <div class="jh-tool-detail-heading">

        <div class="jh-big-tool-icon">
          ${icon}
        </div>

        <div>

          <span class="jh-tool-number">
            ${index + 1}
          </span>

          <h2>
            ${escapeHTML(title)}
          </h2>

        </div>

      </div>


      <div class="jh-info-grid">

        <div class="jh-info-box what">

          <div class="jh-info-title">
            🔵
            ${
              isHindi()
                ? "यह क्या करता है?"
                : "What does it do?"
            }
          </div>

          <p>
            ${escapeHTML(
              translateToolText(
                what,
                "what"
              )
            )}
          </p>

        </div>


        <div class="jh-info-box when">

          <div class="jh-info-title">
            🟢
            ${
              isHindi()
                ? "इसे कब उपयोग करें?"
                : "When should you use it?"
            }
          </div>

          <p>
            ${escapeHTML(
              translateToolText(
                when,
                "when"
              )
            )}
          </p>

        </div>


        <div class="jh-info-box example">

          <div class="jh-info-title">
            💡
            ${
              isHindi()
                ? "कैसे उपयोग करें?"
                : "How to use it?"
            }
          </div>

          <p>
            ${escapeHTML(how)}
          </p>

        </div>

      </div>


      <div class="jh-how-to">

        <button
          type="button"
          class="jh-how-to-header"
          onclick="toggleInstructions()"
        >

          <span>
            📖
            ${
              isHindi()
                ? "इस option को कैसे उपयोग करें?"
                : "How to use this option?"
            }
          </span>

          <span>
            ${
              state.expanded
                ? "⌃"
                : "⌄"
            }
          </span>

        </button>


        ${
          state.expanded
            ? `
              <div class="jh-step-list">

                ${
                  steps.length
                    ? steps.map((step, i) => `
                        <div class="jh-step">

                          <div class="jh-step-number">
                            ${i + 1}
                          </div>

                          <div class="jh-step-content">
                            ${escapeHTML(
                              translateStepText(step)
                            )}
                          </div>

                        </div>
                      `).join("")
                    : `
                      <p class="jh-empty">
                        ${
                          isHindi()
                            ? "इस option के steps अभी add नहीं किए गए हैं."
                            : "Step-by-step instructions are not available yet."
                        }
                      </p>
                    `
                }

              </div>
            `
            : ""
        }

      </div>

    </article>
  `;
}


/* =========================================================
   TOGGLE INSTRUCTIONS
   ========================================================= */

function toggleInstructions() {

  state.expanded = !state.expanded;

  render();
}


/* =========================================================
   TRANSLATION SUPPORT
   ========================================================= */

function translateToolText(value, type) {

  if (!isHindi()) {
    return value;
  }

  const dictionary = {

    "Paste": {
      what: "Copy या Cut की गई चीज़ को document में insert करता है.",
      when: "जब आपको copied या cut content को document में कहीं और डालना हो."
    },

    "Cut": {
      what: "Selected content को हटाकर Clipboard में रखता है.",
      when: "जब content को एक जगह से दूसरी जगह move करना हो."
    },

    "Copy": {
      what: "Selected content की duplicate copy बनाता है.",
      when: "जब original content को रखते हुए उसकी copy बनानी हो."
    },

    "Bold": {
      what: "Text को मोटा और darker करता है.",
      when: "Important words, headings या information highlight करने के लिए."
    },

    "Italic": {
      what: "Text को slanted या तिरछा करता है.",
      when: "किसी word को emphasize करने के लिए."
    },

    "Underline": {
      what: "Text के नीचे line लगाता है.",
      when: "Important text को emphasize करने के लिए."
    },

    "Watermark": {
      what: "Document के पीछे हल्का text या picture लगाता है.",
      when: "Draft, Confidential या company name दिखाने के लिए."
    }

  };

  return dictionary[value]?.[type] || value;
}


function translateStepText(value) {

  if (!isHindi()) return value;

  const translations = {

    "Open the Design tab.":
      "Design tab को open करें.",

    "Click Watermark.":
      "Watermark पर click करें.",

    "Choose a ready-made watermark such as Draft or Confidential.":
      "Draft या Confidential जैसे ready-made watermark को चुनें.",

    "For your own watermark, choose Custom Watermark.":
      "अपना watermark बनाने के लिए Custom Watermark चुनें.",

    "Choose Text watermark or Picture watermark.":
      "Text watermark या Picture watermark चुनें.",

    "Enter the text or select the picture.":
      "Text लिखें या picture select करें.",

    "Click Apply or OK.":
      "Apply या OK पर click करें.",

    "Select the text.":
      "Text को select करें.",

    "Open the Home tab.":
      "Home tab को open करें.",

    "Click the Paste button in the Clipboard group.":
      "Clipboard group में Paste button पर click करें."

  };

  return translations[value] || value;
}


/* =========================================================
   PRACTICAL WORK PAGE
   ========================================================= */

function renderWordPractical() {

  return `
    <section class="jh-practical-page">

      <div class="jh-learning-heading">

        <div>

          <h2>
            🛠️
            ${
              isHindi()
                ? "MS Word Practical Works"
                : "MS Word Practical Works"
            }
          </h2>

          <p>
            ${
              isHindi()
                ? "नीचे सभी 14 practical projects दिए गए हैं. किसी project पर click करके उसे पूरा खोलें."
                : "All 14 practical projects are listed below. Click any project to open it."
            }
          </p>

        </div>

        <button
          type="button"
          class="jh-back-btn"
          onclick="openWord()"
        >
          ← ${isHindi() ? "Back" : "Back"}
        </button>

      </div>


      <div class="jh-project-count">

        <span>📁</span>

        <strong>
          14
        </strong>

        <span>
          ${
            isHindi()
              ? "Practical Projects"
              : "Practical Projects"
          }
        </span>

      </div>


      <div class="jh-project-grid">

        ${projects.map(project =>
          renderProjectCard(project)
        ).join("")}

      </div>

    </section>
  `;
}


/* =========================================================
   PROJECT CARD
   ========================================================= */

function renderProjectCard(project) {

  return `
    <article
      class="jh-project-card"
      onclick="openProject(${project.id})"
    >

      <div class="jh-project-image-wrap">

        <img
          src="${imagePath(project.image)}"
          alt="${escapeHTML(project.title)}"
          class="jh-project-thumbnail"
          loading="lazy"
          onerror="this.style.display='none'; this.parentElement.classList.add('project-image-error')"
        />

        <div class="jh-project-overlay">
          <span>
            🔍 Open Project
          </span>
        </div>

      </div>


      <div class="jh-project-info">

        <span class="jh-project-number">
          Project ${project.id}
        </span>

        <h3>
          ${escapeHTML(project.title)}
        </h3>

        <p>
          ${escapeHTML(project.description)}
        </p>

        <div class="jh-project-open">
          ${
            isHindi()
              ? "Open Project"
              : "Open Project"
          }
          →
        </div>

      </div>

    </article>
  `;
}


/* =========================================================
   FULL-SCREEN PROJECT VIEW
   ========================================================= */

function renderProjectFullscreen() {

  const project =
    projects.find(
      item => item.id === Number(state.projectId)
    );

  if (!project) return;

  const old =
    document.getElementById("projectFullscreen");

  if (old) old.remove();

  const overlay =
    document.createElement("div");

  overlay.id = "projectFullscreen";

  overlay.innerHTML = `

    <div class="jh-project-fullscreen">

      <div class="jh-project-full-header">

        <div>

          <span>
            📁 Project ${project.id}
          </span>

          <h2>
            ${escapeHTML(project.title)}
          </h2>

        </div>


        <div class="jh-project-full-actions">

          <button
            type="button"
            onclick="openImageZoom('${escapeHTML(imagePath(project.image))}', '${escapeHTML(project.title)}')"
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

      </div>


      <div
        class="jh-project-full-body"
        onclick="if(event.target===this) closeProject()"
      >

        <img
          src="${imagePath(project.image)}"
          alt="${escapeHTML(project.title)}"
          class="jh-project-full-image"
          onclick="openImageZoom('${escapeHTML(imagePath(project.image))}', '${escapeHTML(project.title)}')"
        />

      </div>


      <div class="jh-project-navigation">

        ${
          project.id > 1
            ? `
              <button
                type="button"
                onclick="openProject(${project.id - 1})"
              >
                ← Previous Project
              </button>
            `
            : `<span></span>`
        }


        <span>
          ${project.id} / ${projects.length}
        </span>


        ${
          project.id < projects.length
            ? `
              <button
                type="button"
                onclick="openProject(${project.id + 1})"
              >
                Next Project →
              </button>
            `
            : `<span></span>`
        }

      </div>

    </div>

  `;

  document.body.appendChild(overlay);

  document.body.classList.add("jh-modal-open");
}


/* =========================================================
   EXCEL PAGE
   ========================================================= */

function renderExcelCourse() {

  return `
    <div class="jh-layout">

      ${renderSidebar("excel")}

      <main class="jh-main">

        ${renderTopHeader()}

        <section class="jh-course-banner excel">

          <div class="jh-course-banner-icon">
            X
          </div>

          <div class="jh-course-banner-text">

            <h1>MS Excel</h1>

            <p>
              ${
                isHindi()
                  ? "Excel formulas और practical spreadsheet learning."
                  : "Learn Excel formulas, functions and practical spreadsheet skills."
              }
            </p>

          </div>

        </section>


        <section class="jh-coming-large">

          <div class="jh-coming-large-icon">
            📊
          </div>

          <h2>
            ${
              isHindi()
                ? "MS Excel Learning"
                : "MS Excel Learning"
            }
          </h2>

          <p>
            ${
              isHindi()
                ? "Excel formulas और practice sheets यहाँ जल्द उपलब्ध होंगी."
                : "Excel formulas and practice sheets will be added here soon."
            }
          </p>

          <span>
            Coming Soon
          </span>

        </section>

      </main>

    </div>
  `;
}


/* =========================================================
   POWERPOINT PAGE
   ========================================================= */

function renderPowerPointCourse() {

  return `
    <div class="jh-layout">

      ${renderSidebar("powerpoint")}

      <main class="jh-main">

        ${renderTopHeader()}

        <section class="jh-course-banner powerpoint">

          <div class="jh-course-banner-icon">
            P
          </div>

          <div class="jh-course-banner-text">

            <h1>MS PowerPoint</h1>

            <p>
              ${
                isHindi()
                  ? "Presentations और practical slide learning."
                  : "Learn presentations, slides, designs and practical work."
              }
            </p>

          </div>

        </section>


        <section class="jh-coming-large">

          <div class="jh-coming-large-icon">
            🎞️
          </div>

          <h2>
            MS PowerPoint
          </h2>

          <p>
            ${
              isHindi()
                ? "PowerPoint learning और practical work जल्द add किया जाएगा."
                : "PowerPoint learning and practical work will be added soon."
            }
          </p>

          <span>
            Coming Soon
          </span>

        </section>

      </main>

    </div>
  `;
}


/* =========================================================
   TOP HEADER
   ========================================================= */

function renderTopHeader() {

  return `
    <header class="jh-top-header">

      <div class="jh-welcome">

        <div class="jh-welcome-small">
          Welcome back! 👋
        </div>

        <h1>
          <span>Computer</span>
          <span> Learning</span>
        </h1>

        <p>
          ${
            isHindi()
              ? "Step-by-step सीखें, practice करें और practical projects complete करें. 🎓"
              : "Learn step-by-step, practice every tool, and complete practical projects. 🎓"
          }
        </p>

      </div>


      <div class="jh-header-controls">

        <button
          type="button"
          class="jh-language-btn hindi ${
            isHindi() ? "active" : ""
          }"
          onclick="changeLanguage('hi')"
        >
          हिन्दी 🌐
        </button>


        <button
          type="button"
          class="jh-language-btn english ${
            !isHindi() ? "active" : ""
          }"
          onclick="changeLanguage('en')"
        >
          English 🌐
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
          aria-label="Toggle theme"
        >
          🌙
        </button>

      </div>

    </header>
  `;
}


/* =========================================================
   SIDEBAR
   ========================================================= */

function renderSidebar(active) {

  return `
    <aside class="jh-sidebar">

      <div class="jh-brand">

        <div class="jh-brand-symbol">
          🎓
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
          class="jh-nav-item ${
            active === "home" ? "active" : ""
          }"
          onclick="goHome()"
        >
          🏠
          <span>Home</span>
        </button>


        <button
          type="button"
          class="jh-nav-item ${
            active === "word" ? "active" : ""
          }"
          onclick="openWord()"
        >
          📝
          <span>MS Word</span>
        </button>


        <button
          type="button"
          class="jh-nav-item ${
            active === "excel" ? "active" : ""
          }"
          onclick="openExcel()"
        >
          📊
          <span>MS Excel</span>
        </button>


        <button
          type="button"
          class="jh-nav-item ${
            active === "powerpoint" ? "active" : ""
          }"
          onclick="openPowerPoint()"
        >
          🎞️
          <span>MS PowerPoint</span>
        </button>


        <button
          type="button"
          class="jh-nav-item"
          onclick="changeLanguage(
            isHindi() ? 'en' : 'hi'
          )"
        >
          📖
          <span>
            ${isHindi() ? "English" : "हिन्दी"}
          </span>
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
          Practice daily and
          become an expert.
        </p>

        <div class="jh-stars">
          ⭐⭐⭐⭐⭐
        </div>

      </div>

    </aside>
  `;
}


/* =========================================================
   SIDEBAR NAVIGATION
   ========================================================= */

function goHome() {

  state.section = "home";
  state.course = null;
  state.wordView = null;
  state.tab = null;
  state.toolIndex = 0;
  state.practicalOpen = false;
  state.projectId = null;

  render();
}


function openExcel() {

  state.section = "excel";
  state.course = "excel";
  state.wordView = null;
  state.tab = null;
  state.practicalOpen = false;
  state.projectId = null;

  render();
}


function openPowerPoint() {

  state.section = "powerpoint";
  state.course = "powerpoint";
  state.wordView = null;
  state.tab = null;
  state.practicalOpen = false;
  state.projectId = null;

  render();
}


/* =========================================================
   LANGUAGE
   ========================================================= */

function changeLanguage(language) {

  state.lang =
    language === "hi"
      ? "hi"
      : "en";

  render();

  if (aiState.open) {
    renderAIOverlay();
  }
}


/* =========================================================
   THEME
   ========================================================= */

function toggleTheme() {

  document.body.classList.toggle("jh-dark-mode");

  const dark =
    document.body.classList.contains("jh-dark-mode");

  localStorage.setItem(
    "jh-theme",
    dark ? "dark" : "light"
  );
}


/* =========================================================
   COMING SOON
   ========================================================= */

function showComingSoon(title) {

  const old =
    document.getElementById("jhComingToast");

  if (old) old.remove();

  const toast =
    document.createElement("div");

  toast.id = "jhComingToast";

  toast.innerHTML = `
    <div class="jh-coming-toast">

      <strong>
        🚀 ${escapeHTML(title)}
      </strong>

      <span>
        ${
          isHindi()
            ? "यह section जल्द उपलब्ध होगा."
            : "This section will be available soon."
        }
      </span>

    </div>
  `;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3500);
}


/* =========================================================
   EVENT HANDLERS
   ========================================================= */

function attachEvents() {

  /*
   * The application primarily uses inline onclick handlers.
   * This function is kept so additional event listeners can
   * safely be added later without changing the render system.
   */

  document.querySelectorAll(".jh-tab-main-image").forEach(image => {

    image.addEventListener("keydown", event => {

      if (event.key === "Enter") {
        image.click();
      }

    });

  });

}


/* =========================================================
   KEYBOARD SHORTCUTS
   ========================================================= */

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {

    closeImageZoom();

    if (state.practicalOpen) {
      closeProject();
    }

    if (aiState.open) {
      closeAITeacher();
    }

  }

});


/* =========================================================
   INITIAL STATE
   ========================================================= */

function initializeApplication() {

  const savedTheme =
    localStorage.getItem("jh-theme");

  if (savedTheme === "dark") {
    document.body.classList.add("jh-dark-mode");
  }

  state.section = "home";
  state.course = null;
  state.wordView = null;
  state.tab = null;
  state.toolIndex = 0;
  state.expanded = true;
  state.practicalOpen = false;
  state.projectId = null;

  render();
}


/* =========================================================
   START APPLICATION
   ========================================================= */

if (
  document.readyState === "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    initializeApplication
  );

} else {

  initializeApplication();

}
