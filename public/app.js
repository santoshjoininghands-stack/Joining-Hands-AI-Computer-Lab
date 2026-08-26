const state = {
  lang: "en",
  dark: false,
  zoom: 100,
  tab: "Home",
  toolIndex: 0,
  expanded: true,
  page: "home"
};

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

const tabData = {
  Home: [
    ["📋","Paste","Inserts copied or cut content into the document.","Use Paste when you want to place copied text, pictures or other content somewhere else in the document.","Select the content → Copy/Cut → place the cursor → Home → Paste → choose the required paste option.",[
      "Select the content you want to copy or cut.",
      "Go to the Home tab.",
      "Click Paste in the Clipboard group.",
      "The content is inserted at the cursor position."
    ]],

    ["✂️","Cut","Removes selected content and places it on the Clipboard.","Use Cut when you want to move text, pictures or other content to another location.","Select the content → Home → Cut → place the cursor at the new location → Paste.",[
      "Select the content.",
      "Go to Home → Cut.",
      "Click the new location.",
      "Use Paste to insert the content."
    ]],

    ["📄","Copy","Creates a duplicate of selected content without removing the original.","Use Copy when the same content is needed in more than one place.","Select content → Home → Copy → place the cursor → Paste.",[
      "Select the text, image or object.",
      "Choose Home → Copy.",
      "Click where the copy should go.",
      "Choose Paste."
    ]],

    ["🖌️","Format Painter","Copies formatting from one item and applies it to another.","Use it when two pieces of text should have the same font, size, color, spacing or style.","Select correctly formatted text → Home → Format Painter → select the target text.",[
      "Select the text whose formatting you want to copy.",
      "Click Format Painter in the Clipboard group.",
      "Select or drag over the target text.",
      "The target receives the same formatting."
    ]],

    ["A","Font","Changes the typeface used by selected text.","Use it to choose a readable or required font such as Arial, Calibri or Times New Roman.","Select text → Home → Font Name box → choose a font.",[
      "Select the text.",
      "Open the Font Name list.",
      "Choose the required font.",
      "The selected text changes immediately."
    ]],

    ["A²","Font Size","Changes the size of selected text.","Use it to make headings larger or body text smaller or larger.","Select text → Home → Font Size → type or select a size.",[
      "Select the text.",
      "Open Font Size.",
      "Choose a size or type a number.",
      "Press Enter if you typed the size."
    ]],

    ["B","Bold","Makes text darker and thicker.","Use Bold to highlight important words, headings or key information.","Select text → Home → Bold, or use Ctrl+B.",[
      "Select the text.",
      "Go to Home → Font group.",
      "Click Bold.",
      "Click Bold again to remove it."
    ]],

    ["I","Italic","Makes text slanted.","Use Italic to emphasize words, titles, terms or special notes.","Select text → Home → Italic, or Ctrl+I.",[
      "Select the text.",
      "Click Italic in the Font group.",
      "The selected text becomes slanted.",
      "Click again to turn it off."
    ]],

    ["U","Underline","Adds a line underneath selected text.","Use Underline when you want to emphasize important text.","Select text → Home → Underline, or Ctrl+U.",[
      "Select the text.",
      "Click Underline.",
      "The underline is applied.",
      "Click again to turn it off."
    ]],

    ["🖍️","Text Highlight","Adds a highlight color behind text.","Use it to mark important words or sentences for study or review.","Select text → Home → Text Highlight Color → choose a color.",[
      "Select the text.",
      "Click Text Highlight Color.",
      "Choose a color.",
      "The background behind the text is highlighted."
    ]],

    ["🎨","Font Color","Changes the color of selected text.","Use it for headings, emphasis or visual organization.","Select text → Home → Font Color → choose a color.",[
      "Select the text.",
      "Click the Font Color arrow.",
      "Choose a color.",
      "The selected text changes color."
    ]],

    ["•","Bullets","Creates a bulleted list.","Use bullets when the order of items is not important.","Select lines → Home → Bullets → choose a bullet style.",[
      "Place the cursor in the list or select existing lines.",
      "Click Bullets.",
      "Choose a bullet style if required.",
      "Press Enter for the next bullet; press Enter twice to finish."
    ]],

    ["1.","Numbering","Creates a numbered list.","Use numbering when items need a sequence or order.","Select lines → Home → Numbering → choose a numbering style.",[
      "Select the list items or place the cursor at the start.",
      "Click Numbering.",
      "Choose a numbering style.",
      "Press Enter to continue the sequence."
    ]],

    ["↔","Increase Indent","Moves a paragraph farther from the left margin.","Use it for sub-points or to show hierarchy.","Place the cursor in the paragraph → Home → Increase Indent.",[
      "Click inside the paragraph.",
      "Click Increase Indent.",
      "The paragraph moves inward.",
      "Click again for a deeper level if needed."
    ]],

    ["↔","Decrease Indent","Moves an indented paragraph back toward the left margin.","Use it to reduce indentation or return a sub-point to a higher level.","Click inside the paragraph → Home → Decrease Indent.",[
      "Click inside the indented paragraph.",
      "Click Decrease Indent.",
      "The paragraph moves toward the left margin.",
      "Repeat if necessary."
    ]],

    ["≡","Align Left","Aligns text with the left margin.","Use it for normal paragraphs and many documents.","Select text → Home → Align Left or Ctrl+L.",[
      "Select the paragraph(s).",
      "Click Align Left.",
      "The left edges line up.",
      "Use Ctrl+L as a shortcut."
    ]],

    ["≡","Center","Centers text between the margins.","Use it for titles, headings and short centered content.","Select text → Home → Center or Ctrl+E.",[
      "Select the text.",
      "Click Center.",
      "The text moves to the middle.",
      "Use Ctrl+E as a shortcut."
    ]],

    ["≡","Align Right","Aligns text with the right margin.","Use it for dates, signatures or special layouts.","Select text → Home → Align Right or Ctrl+R.",[
      "Select the paragraph.",
      "Click Align Right.",
      "The right edges line up.",
      "Use Ctrl+R as a shortcut."
    ]],

    ["☰","Justify","Aligns text evenly to both left and right margins.","Use it for formal reports, assignments and long paragraphs.","Select paragraphs → Home → Justify or Ctrl+J.",[
      "Select the paragraphs.",
      "Click Justify.",
      "Word adjusts spacing so both margins look aligned.",
      "Use Ctrl+J as a shortcut."
    ]],

    ["¶","Show/Hide ¶","Shows non-printing formatting marks such as spaces and paragraph marks.","Use it when checking spacing, blank paragraphs, tabs and formatting problems.","Home → Show/Hide ¶.",[
      "Go to Home → Paragraph group.",
      "Click Show/Hide ¶.",
      "Formatting marks become visible.",
      "Click again to hide them."
    ]],

    ["Aa","Change Case","Changes selected text between UPPERCASE, lowercase, Title Case and other cases.","Use it when text was typed with the wrong capitalization.","Select text → Home → Change Case → choose the required case.",[
      "Select the text.",
      "Click Change Case.",
      "Choose UPPERCASE, lowercase, Capitalize Each Word, etc.",
      "The selected text changes case."
    ]],

    ["✕","Clear All Formatting","Removes direct formatting from selected text.","Use it when text has unwanted font, color, size or style formatting.","Select text → Home → Clear All Formatting.",[
      "Select the formatted text.",
      "Click Clear All Formatting.",
      "Direct formatting is removed.",
      "The text returns to the document's normal formatting."
    ]]
  ],

  Insert: [
    ["📄","Cover Page","Adds a ready-made cover page.","Use it for reports, assignments and projects that need a professional first page.","Insert → Cover Page → choose a design → replace the sample information.",[
      "Open the document.",
      "Click Insert.",
      "Choose Cover Page.",
      "Select a design and replace the title, author and other sample fields."
    ]],

    ["📃","Blank Page","Adds a new blank page at the cursor position.","Use it when you need a completely empty page for a new section.","Insert → Blank Page.",[
      "Place the cursor where the new page should begin.",
      "Click Insert.",
      "Click Blank Page.",
      "A new page is inserted."
    ]],

    ["↵","Page Break","Starts the following content on a new page.","Use it instead of pressing Enter many times to move content to another page.","Insert → Page Break, or Ctrl+Enter.",[
      "Place the cursor before the content that should start on the next page.",
      "Click Insert → Page Break.",
      "The following content moves to a new page.",
      "Use Ctrl+Enter for the shortcut."
    ]],

    ["▦","Table","Creates a table using rows and columns.","Use it for marks, attendance, price lists, schedules or structured data.","Insert → Table → choose the grid size or Insert Table → set rows and columns.",[
      "Place the cursor where the table should go.",
      "Click Insert → Table.",
      "Select the required number of columns and rows.",
      "Click a cell and type your data."
    ]],

    ["🖼️","Pictures","Inserts an image from your computer or supported location.","Use it for diagrams, photos, screenshots, logos and project illustrations.","Insert → Pictures → choose the source → select image → Insert.",[
      "Click Insert → Pictures.",
      "Choose the location or source.",
      "Select the image.",
      "Click Insert and then use Picture Format to resize or position it."
    ]],

    ["🔷","Shapes","Adds lines, arrows, rectangles, circles and other shapes.","Use shapes for diagrams, flowcharts, labels and visual explanations.","Insert → Shapes → choose a shape → drag on the page.",[
      "Click Insert → Shapes.",
      "Choose a shape.",
      "Click and drag on the document.",
      "Use Shape Format to change fill, outline and effects."
    ]],

    ["⭐","Icons","Inserts ready-made icons.","Use icons to make instructions, presentations and documents more visual.","Insert → Icons → search or select an icon → Insert.",[
      "Click Insert → Icons.",
      "Search or browse the icon library.",
      "Select an icon.",
      "Click Insert and format it as needed."
    ]],

    ["🧊","3D Models","Adds a three-dimensional model.","Use it when a 3D object helps explain a concept.","Insert → 3D Models → choose a source or model → Insert.",[
      "Click Insert → 3D Models.",
      "Choose the available source.",
      "Select the model.",
      "Insert it and use the rotation controls to view it."
    ]],

    ["✨","SmartArt","Creates visual diagrams such as processes, cycles and hierarchies.","Use it to present information visually instead of using plain paragraphs.","Insert → SmartArt → choose a category → choose a layout → enter text.",[
      "Click Insert → SmartArt.",
      "Choose a category such as Process, List or Hierarchy.",
      "Select a layout.",
      "Enter your information in the SmartArt text pane."
    ]],

    ["📊","Chart","Creates charts from numerical data.","Use charts to visually compare data and show trends.","Insert → Chart → choose a chart type → enter data.",[
      "Click Insert → Chart.",
      "Choose a chart type.",
      "An Excel-style data sheet opens.",
      "Replace the sample data with your own data."
    ]],

    ["📸","Screenshot","Captures an available window or screen area.","Use it when you need to insert a screenshot into a document.","Insert → Screenshot → choose a window or Screen Clipping.",[
      "Open the window you want to capture.",
      "Go to Insert → Screenshot.",
      "Choose the available window or Screen Clipping.",
      "The screenshot is inserted into the document."
    ]],

    ["🔌","Get Add-ins","Finds additional Office add-ins.","Use it when you need an extra tool or service inside Word.","Insert → Get Add-ins → search → Add.",[
      "Click Insert → Get Add-ins.",
      "Search for the required add-in.",
      "Read its description and permissions.",
      "Click Add if you trust and need it."
    ]],

    ["📦","My Add-ins","Shows installed add-ins.","Use it to access add-ins already connected to Word.","Insert → My Add-ins.",[
      "Open Insert.",
      "Click My Add-ins.",
      "Find the installed add-in.",
      "Select it to open it."
    ]],

    ["🌐","Wikipedia","Provides access to Wikipedia-related information where available.","Use it for quick reference while researching a topic.","Insert → Wikipedia or the available research/add-in option.",[
      "Open the Insert tab.",
      "Open the available Wikipedia or research tool.",
      "Search for your topic.",
      "Use reliable information and verify important facts."
    ]],

    ["▶️","Online Videos","Inserts online video content when supported.","Use it when a video is useful for explaining a topic.","Insert → Online Video → search or paste supported video information.",[
      "Click Insert → Online Video.",
      "Search or enter supported video information.",
      "Select the video.",
      "Insert it and adjust its position if required."
    ]],

    ["🔗","Link","Creates a clickable hyperlink.","Use it to connect text to a website, file, email or location.","Select text → Insert → Link → enter address → OK.",[
      "Select the text or object.",
      "Click Insert → Link.",
      "Enter or select the destination.",
      "Click OK and test the link."
    ]],

    ["🔖","Bookmark","Marks a specific location in a document.","Use it to quickly return to an important location or create internal links.","Insert → Bookmark → name → Add.",[
      "Place the cursor at the location.",
      "Click Insert → Bookmark.",
      "Enter a bookmark name without spaces.",
      "Click Add."
    ]],

    ["🔁","Cross-reference","Creates a reference to another heading, figure, table or numbered item.","Use it in long documents when references need to update automatically.","Insert → Cross-reference → choose reference type → Insert.",[
      "Place the cursor where the reference should appear.",
      "Click Insert → Cross-reference.",
      "Choose the reference type and item.",
      "Click Insert."
    ]],

    ["💬","Comment","Adds a comment or note to selected content.","Use it for feedback, review and collaboration.","Select text → Insert → Comment.",[
      "Select the relevant text.",
      "Click Insert → Comment.",
      "Type your comment.",
      "Post or save the comment."
    ]],

    ["⬆️","Header","Adds content at the top of pages.","Use it for document titles, company names or running information.","Insert → Header → choose a design → enter content.",[
      "Click Insert → Header.",
      "Choose a header design.",
      "Type your header information.",
      "Close Header and Footer mode."
    ]],

    ["⬇️","Footer","Adds content at the bottom of pages.","Use it for contact information, document names or other repeated information.","Insert → Footer → choose a design → enter content.",[
      "Click Insert → Footer.",
      "Choose a footer design.",
      "Enter your information.",
      "Close Header and Footer mode."
    ]],

    ["#","Page Number","Adds page numbers to the document.","Use it for reports, assignments and multi-page documents.","Insert → Page Number → choose location and style.",[
      "Click Insert → Page Number.",
      "Choose Top of Page, Bottom of Page or another position.",
      "Choose a numbering style.",
      "Word inserts the page numbers automatically."
    ]],

    ["🔲","Text Box","Creates a movable box containing text.","Use it for callouts, side notes, labels and special layouts.","Insert → Text Box → choose/draw a box → type text.",[
      "Click Insert → Text Box.",
      "Choose a built-in box or Draw Text Box.",
      "Click and drag if drawing one.",
      "Type your text and format the box."
    ]],

    ["⚡","Quick Parts","Stores and inserts reusable content.","Use it for repeated text, fields, document properties or building blocks.","Insert → Quick Parts → choose the required option.",[
      "Select reusable content if creating a new building block.",
      "Open Insert → Quick Parts.",
      "Choose the required building block or AutoText.",
      "Insert it where needed."
    ]],

    ["🎨","WordArt","Creates decorative stylized text.","Use it for titles, posters and visually attractive headings.","Insert → WordArt → choose a style → type text.",[
      "Click Insert → WordArt.",
      "Choose a style.",
      "Type your text.",
      "Use Shape Format to change its appearance."
    ]],

    ["⬇️","Drop Cap","Makes the first letter of a paragraph large.","Use it mainly in magazines, newsletters and decorative documents.","Select paragraph → Insert → Drop Cap → choose style.",[
      "Place the cursor in the paragraph.",
      "Click Insert → Drop Cap.",
      "Choose Dropped or In Margin.",
      "Adjust options if required."
    ]],

    ["✍️","Signature Line","Adds a signature placeholder.","Use it when a document needs a formal signature.","Insert → Signature Line → enter signer information → OK.",[
      "Click Insert → Signature Line.",
      "Enter the requested signer information.",
      "Click OK.",
      "The signature line is inserted."
    ]],

    ["📅","Date & Time","Inserts the current date and/or time.","Use it for letters, reports and official documents.","Insert → Date & Time → choose format → OK.",[
      "Place the cursor where the date/time should appear.",
      "Click Insert → Date & Time.",
      "Choose the desired format.",
      "Click OK."
    ]],

    ["📎","Object","Embeds or links another file or object.","Use it to include spreadsheets, PDFs or other supported files.","Insert → Object → choose object/file → OK.",[
      "Click Insert → Object.",
      "Choose Create New or Create from File.",
      "Select the required file or object.",
      "Choose the desired display/link options and click OK."
    ]],

    ["∑","Equation","Inserts mathematical equations and symbols.","Use it for mathematical, scientific and engineering documents.","Insert → Equation → choose a structure or type an equation.",[
      "Click Insert → Equation.",
      "Choose a built-in equation or create a new one.",
      "Enter the mathematical expression.",
      "Use Equation tools to format it."
    ]],

    ["Ω","Symbol","Inserts special characters and symbols.","Use it for characters not available directly on the keyboard.","Insert → Symbol → choose a symbol → Insert.",[
      "Place the cursor where the symbol should go.",
      "Click Insert → Symbol.",
      "Choose a symbol or More Symbols.",
      "Click Insert."
    ]]
  ],

  Design: [
    ["🎨","Themes","Applies a coordinated visual theme to the document.","Use it when you want a consistent professional design.","Design → Themes → choose a theme.",[
      "Open Design.",
      "Click Themes.",
      "Preview the available designs.",
      "Choose the theme you want."
    ]],

    ["🌈","Colors","Changes the theme color palette.","Use it to quickly coordinate headings, shapes and accents.","Design → Colors → choose a color set.",[
      "Open Design → Colors.",
      "Preview a palette.",
      "Choose the color set.",
      "The document theme colors update."
    ]],

    ["🔤","Fonts","Changes the theme font pairing.","Use it to give the whole document consistent typography.","Design → Fonts → choose a font set.",[
      "Open Design → Fonts.",
      "Preview font combinations.",
      "Choose a set.",
      "Theme-linked headings and body text update."
    ]],

    ["✨","Effects","Changes theme effects for objects.","Use it to coordinate visual effects across shapes and graphics.","Design → Effects → choose an effect set.",[
      "Open Design → Effects.",
      "Preview options.",
      "Choose the desired effect set.",
      "Applicable objects use the new theme effects."
    ]],

    ["💧","Watermark","Places faint text or an image behind page content.","Use it for Draft, Confidential, Sample, Approved or branding.","Design → Watermark → choose preset or Custom Watermark.",[
      "Open the Design tab.",
      "Click Watermark.",
      "Choose a preset watermark OR click Custom Watermark.",
      "Choose Text watermark or Picture watermark and set the required options.",
      "Click Apply/OK.",
      "The watermark appears behind the document content."
    ]],

    ["🎨","Page Color","Changes the page background color.","Use it for visual worksheets or digital documents.","Design → Page Color.",[
      "Click Design → Page Color.",
      "Choose a color.",
      "Use More Colors if required.",
      "Check readability and printing requirements."
    ]],

    ["▣","Page Borders","Adds a border around pages.","Use it for certificates, invitations and decorative pages.","Design → Page Borders.",[
      "Click Design → Page Borders.",
      "Choose Box, Shadow or another border setting.",
      "Choose style, color and width.",
      "Select Apply to and click OK."
    ]]
  ],

  Layout: [
    ["🎨","Themes","Applies document theme settings when available.","Use it to keep the document's overall appearance consistent.","Layout/Design → Themes.",[
      "Open the appropriate tab in your Word version.",
      "Choose Themes.",
      "Preview the available themes.",
      "Select the required theme."
    ]],

    ["📏","Margins","Sets the blank space around the page.","Use it when preparing assignments, reports or documents for printing.","Layout → Margins → choose a preset or Custom Margins.",[
      "Open Layout.",
      "Click Margins.",
      "Choose Normal, Narrow, Wide or another preset.",
      "For custom values, choose Custom Margins and enter Top, Bottom, Left and Right values."
    ]],

    ["↔️","Orientation","Changes the page between Portrait and Landscape.","Use Landscape for wide tables, charts and documents.","Layout → Orientation → Portrait or Landscape.",[
      "Open Layout.",
      "Click Orientation.",
      "Choose Portrait or Landscape.",
      "The page orientation changes."
    ]],

    ["📄","Size","Changes the paper size.","Use it when a document must follow a specific paper standard such as A4 or Letter.","Layout → Size → choose paper size.",[
      "Open Layout.",
      "Click Size.",
      "Choose A4, Letter, Legal or another available size.",
      "The page size changes."
    ]],

    ["▤","Columns","Divides text into multiple columns.","Use it for newsletters, brochures and newspaper-style layouts.","Layout → Columns → choose number of columns.",[
      "Select the text if only part of the document should use columns.",
      "Open Layout → Columns.",
      "Choose Two, Three or another option.",
      "The selected text or document is arranged into columns."
    ]],

    ["↪️","Breaks","Adds page, section or column breaks.","Use it when different sections need different layouts or when content must start at a controlled point.","Layout → Breaks.",[
      "Place the cursor where the break should occur.",
      "Click Layout → Breaks.",
      "Choose Page Break, Column Break or a Section Break.",
      "Continue editing the new section."
    ]],

    ["🔢","Line Numbers","Adds numbers beside lines of text.","Use it for legal documents, scripts, coding notes and review work.","Layout → Line Numbers.",[
      "Open Layout.",
      "Click Line Numbers.",
      "Choose Continuous, Restart Each Page or another option.",
      "Line numbers appear beside the document text."
    ]],

    ["🔤","Hyphenation","Controls how long words are divided at line endings.","Use it to improve text flow in narrow columns or professional layouts.","Layout → Hyphenation.",[
      "Open Layout.",
      "Click Hyphenation.",
      "Choose None, Automatic or Manual.",
      "Review the resulting line breaks."
    ]],

    ["↔️","Indent","Controls the left and right paragraph indentation.","Use it to structure paragraphs and create professional layouts.","Layout → Paragraph → set Left and Right indent values.",[
      "Select the paragraph(s).",
      "Open Layout → Paragraph.",
      "Set Left and Right indent values.",
      "Review the paragraph position."
    ]],

    ["↕️","Spacing","Controls the space before and after paragraphs.","Use it to improve readability and document structure.","Layout → Paragraph → Before/After spacing.",[
      "Select the paragraph(s).",
      "Open Layout → Paragraph.",
      "Set Before and After spacing.",
      "Review the distance between paragraphs."
    ]],

    ["📍","Position","Controls the position of a selected object.","Use it when placing pictures, shapes or other floating objects.","Select object → Layout → Position → choose a position.",[
      "Select the picture or object.",
      "Open Layout.",
      "Click Position.",
      "Choose the desired placement."
    ]],

    ["🔲","Wrap Text","Controls how text flows around an object.","Use it when a picture or shape needs text beside, above or below it.","Select object → Layout → Wrap Text → choose option.",[
      "Select the object.",
      "Click Wrap Text.",
      "Choose Square, Tight, Behind Text, In Front of Text or another option.",
      "Move the object and check how the text flows around it."
    ]],

    ["⬆️","Bring Forward","Moves an object in front of another object.","Use it when objects overlap and one needs to appear above another.","Select object → Layout → Bring Forward.",[
      "Select the object.",
      "Open Layout → Bring Forward.",
      "Choose Bring Forward or Bring to Front.",
      "Check the stacking order."
    ]],

    ["⬇️","Send Backward","Moves an object behind another object.","Use it when an image, shape or watermark-like object should sit behind another object.","Select object → Layout → Send Backward.",[
      "Select the object.",
      "Open Layout → Send Backward.",
      "Choose Send Backward or Send to Back.",
      "Check the stacking order."
    ]],

    ["📋","Selection Pane","Shows and manages objects in the document.","Use it when many pictures, shapes or objects overlap.","Layout → Selection Pane.",[
      "Open Layout.",
      "Click Selection Pane.",
      "Use the list to select, hide or rename objects.",
      "Arrange objects more easily from the pane."
    ]],

    ["↔️","Align","Aligns objects relative to each other or the page.","Use it for clean diagrams and professional layouts.","Select multiple objects → Layout → Align → choose an alignment.",[
      "Select two or more objects.",
      "Open Layout → Align.",
      "Choose Left, Center, Right, Top, Middle or Bottom.",
      "Use Align to Page or Align Selected Objects as needed."
    ]],

    ["🔗","Group","Combines multiple objects into one movable group.","Use it when several shapes or pictures should move together.","Select objects → Layout → Group → Group.",[
      "Select multiple objects.",
      "Open Layout → Group.",
      "Choose Group.",
      "The objects now move and resize together."
    ]],

    ["🔄","Rotate","Rotates or flips a selected object.","Use it to change the direction of pictures, shapes and diagrams.","Select object → Layout → Rotate.",[
      "Select the object.",
      "Open Layout → Rotate.",
      "Choose Rotate Right, Rotate Left or Flip.",
      "Check the final orientation."
    ]]
  ],

  References: [
    ["📑","Table of Contents","Creates a table of contents from document headings.","Use it in reports, projects, books and long documents.","References → Table of Contents → choose a style.",[
      "Apply Heading 1, Heading 2 and other heading styles.",
      "Open References.",
      "Click Table of Contents.",
      "Choose an automatic style."
    ]],

    ["📝","Footnotes","Adds notes at the bottom of a page.","Use it to explain information or provide a source without interrupting the main text.","References → Insert Footnote.",[
      "Place the cursor after the relevant text.",
      "Click References → Insert Footnote.",
      "Type the note at the bottom of the page.",
      "Word numbers the footnote automatically."
    ]],

    ["📚","Citations & Bibliography","Adds source citations and creates a bibliography.","Use it for academic reports and research documents.","References → Insert Citation → Add New Source → Bibliography.",[
      "Open References.",
      "Choose a citation style.",
      "Click Insert Citation → Add New Source.",
      "Enter source details and insert the citation."
    ]],

    ["🏷️","Captions","Adds labels to pictures, tables and other items.","Use it when figures and tables need numbered labels.","References → Insert Caption.",[
      "Select the picture, table or object.",
      "Click References → Insert Caption.",
      "Choose the label such as Figure or Table.",
      "Enter the caption and click OK."
    ]],

    ["🔎","Cross-reference","Creates references to headings, figures, tables or numbered items.","Use it in long documents where references may change.","References → Cross-reference.",[
      "Place the cursor where the reference should appear.",
      "Click Cross-reference.",
      "Choose the reference type.",
      "Select the item and click Insert."
    ]],

    ["🔤","Index","Creates an alphabetical index of important terms.","Use it in books, manuals and long reference documents.","References → Mark Entry → Insert Index.",[
      "Select an important word.",
      "Click Mark Entry.",
      "Mark the required terms throughout the document.",
      "Click Insert Index to create the index."
    ]],

    ["⚖️","Table of Authorities","Creates a list of legal citations.","Use it for legal documents containing authorities and cases.","References → Mark Citation → Table of Authorities.",[
      "Select a legal citation.",
      "Click Mark Citation.",
      "Mark the required citations.",
      "Choose Insert Table of Authorities."
    ]]
  ],

  Mailings: [
    ["✉️","Envelopes","Creates and prints envelopes.","Use it when preparing physical mail.","Mailings → Envelopes.",[
      "Open Mailings.",
      "Click Envelopes.",
      "Enter delivery and return addresses.",
      "Choose printing options and click Print or Add to Document."
    ]],

    ["🏷️","Labels","Creates printable address or product labels.","Use it for mailing labels, name labels or product labels.","Mailings → Labels.",[
      "Click Mailings → Labels.",
      "Enter the label information.",
      "Choose the label vendor and product number if needed.",
      "Click Print or New Document."
    ]],

    ["📨","Start Mail Merge","Starts a mail merge document.","Use it to create personalized letters, emails, labels or envelopes for many recipients.","Mailings → Start Mail Merge → choose document type.",[
      "Open Mailings.",
      "Click Start Mail Merge.",
      "Choose Letters, E-mail Messages, Labels or Envelopes.",
      "Continue with recipient selection."
    ]],

    ["👥","Select Recipients","Chooses the list of people for mail merge.","Use it when the same document must be personalized for many recipients.","Mailings → Select Recipients.",[
      "Start a Mail Merge.",
      "Click Select Recipients.",
      "Choose an existing list or type a new list.",
      "Confirm the recipient records."
    ]],

    ["📝","Edit Recipient List","Edits and filters the mail merge recipient list.","Use it to remove, filter or sort recipients.","Mailings → Edit Recipient List.",[
      "Open Mailings.",
      "Click Edit Recipient List.",
      "Select or clear recipients.",
      "Use sorting and filtering if required."
    ]],

    ["🔦","Highlight Merge Fields","Highlights mail merge fields in the document.","Use it to identify inserted merge fields easily.","Mailings → Highlight Merge Fields.",[
      "Open the Mailings tab.",
      "Click Highlight Merge Fields.",
      "Merge fields become visually easier to identify.",
      "Continue editing the document."
    ]],

    ["📍","Address Block","Inserts a formatted recipient address.","Use it when creating personalized letters and envelopes.","Mailings → Address Block.",[
      "Place the cursor where the address should appear.",
      "Click Address Block.",
      "Choose the address format.",
      "Preview the result and click OK."
    ]],

    ["👋","Greeting Line","Adds a personalized greeting.","Use it for letters such as Dear Sir/Madam or Dear Name.","Mailings → Greeting Line.",[
      "Place the cursor where the greeting should appear.",
      "Click Greeting Line.",
      "Choose the greeting format.",
      "Preview and click OK."
    ]],

    ["🔗","Insert Merge Field","Inserts a specific field from the recipient data.","Use it when you want individual data such as Name, City or Date.","Mailings → Insert Merge Field.",[
      "Place the cursor where the field should appear.",
      "Click Insert Merge Field.",
      "Choose a field such as First Name or City.",
      "The field is inserted into the document."
    ]],

    ["⚙️","Rules","Adds conditions to a mail merge.","Use it when different recipients should receive different text based on their data.","Mailings → Rules.",[
      "Place the cursor where the rule should apply.",
      "Click Rules.",
      "Choose a rule such as If...Then...Else.",
      "Set the condition and resulting text."
    ]],

    ["🔄","Match Fields","Matches your data columns with Word's expected fields.","Use it when imported data uses different column names.","Mailings → Match Fields.",[
      "Open the Mailings tab.",
      "Click Match Fields.",
      "Match your data columns to Word's fields.",
      "Confirm the mapping."
    ]],

    ["🔃","Update Labels","Updates all labels with the first label's design and fields.","Use it when creating label sheets.","Mailings → Update Labels.",[
      "Create the first label.",
      "Insert the required merge fields.",
      "Click Update Labels.",
      "The remaining labels receive the same layout and fields."
    ]],

    ["👁️","Preview Results","Shows how the mail merge will look for recipients.","Use it before completing the merge to check personalization.","Mailings → Preview Results.",[
      "Click Preview Results.",
      "Review different recipients using the navigation buttons.",
      "Check names, addresses and other fields.",
      "Turn preview off if you need to edit the fields."
    ]],

    ["🔍","Find Recipient","Finds a particular recipient in the merge list.","Use it when checking one person's final result.","Mailings → Find Recipient.",[
      "Open Preview Results.",
      "Click Find Recipient.",
      "Search for the recipient.",
      "Review the corresponding merged document."
    ]],

    ["✅","Check for Errors","Checks the mail merge for common problems.","Use it before finishing a large mail merge.","Mailings → Check for Errors.",[
      "Complete your merge fields.",
      "Click Check for Errors.",
      "Choose the available checking option.",
      "Correct any problems that Word reports."
    ]],

    ["🏁","Finish & Merge","Completes the mail merge.","Use it to print, create individual documents or send merged emails.","Mailings → Finish & Merge.",[
      "Preview the results carefully.",
      "Click Finish & Merge.",
      "Choose Edit Individual Documents, Print Documents or Send E-mail Messages.",
      "Complete the final action."
    ]]
  ],

  Review: [
    ["ABC","Spelling & Grammar","Checks spelling and grammar issues.","Use it to proofread documents before submission or sharing.","Review → Spelling & Grammar.",[
      "Open Review.",
      "Click Spelling & Grammar.",
      "Review each suggested correction.",
      "Accept, ignore or change the suggestion."
    ]],

    ["📖","Thesaurus","Shows synonyms and related words.","Use it to find alternative words and improve writing.","Review → Thesaurus.",[
      "Select or place the cursor on a word.",
      "Open Review → Thesaurus.",
      "Review suggested synonyms.",
      "Choose a suitable alternative if required."
    ]],

    ["🔢","Word Count","Counts words, characters, paragraphs and pages.","Use it when an assignment or document has a length requirement.","Review → Word Count.",[
      "Open Review.",
      "Click Word Count.",
      "Review words, characters, paragraphs and pages.",
      "Select text first if you want the count for only that selection."
    ]],

    ["🔊","Read Aloud","Reads the document aloud.","Use it to proofread wording and listen for mistakes.","Review → Read Aloud.",[
      "Open Review.",
      "Click Read Aloud.",
      "Use the playback controls.",
      "Listen for errors and edit the document as needed."
    ]],

    ["♿","Check Accessibility","Checks the document for accessibility problems.","Use it before sharing a document with different users.","Review → Check Accessibility.",[
      "Open Review.",
      "Click Check Accessibility.",
      "Review the issues shown in the Accessibility pane.",
      "Fix the suggested problems where appropriate."
    ]],

    ["🌐","Translate","Translates selected text or a document.","Use it when you need another language version.","Review → Translate.",[
      "Select the text if translating only part of the document.",
      "Open Review → Translate.",
      "Choose the source and target language.",
      "Review and insert the translation."
    ]],

    ["🗣️","Language","Sets proofing or language preferences.","Use it to make spelling and grammar checks work with the correct language.","Review → Language.",[
      "Select the text or document.",
      "Click Review → Language.",
      "Choose Set Proofing Language.",
      "Select the correct language and confirm."
    ]],

    ["💬","New Comment","Adds a new comment.","Use it to give feedback or ask a question about selected content.","Review → New Comment.",[
      "Select the relevant text.",
      "Click New Comment.",
      "Type your comment.",
      "Post or save the comment."
    ]],

    ["🗑️","Delete","Removes comments.","Use it when a comment is no longer needed.","Review → Delete.",[
      "Select the comment.",
      "Click Review → Delete.",
      "Choose Delete Comment or the appropriate option.",
      "The comment is removed."
    ]],

    ["⬅️","Previous","Moves to the previous comment or tracked change.","Use it while reviewing changes in sequence.","Review → Previous.",[
      "Open the Review tab.",
      "Make sure comments or tracked changes are visible.",
      "Click Previous.",
      "Word moves to the previous item."
    ]],

    ["➡️","Next","Moves to the next comment or tracked change.","Use it to review items one by one.","Review → Next.",[
      "Open Review.",
      "Make sure comments or tracked changes are visible.",
      "Click Next.",
      "Word moves to the next item."
    ]],

    ["💬","Show Comments","Shows or hides comments.","Use it to control the visibility of comments during review.","Review → Show Comments.",[
      "Open Review.",
      "Click Show Comments.",
      "Review the comments panel or bubbles.",
      "Use the same control to change the view if required."
    ]],

    ["👁️","Show Markup","Controls which tracked changes and comments are displayed.","Use it when reviewing a document with multiple types of markup.","Review → Show Markup.",[
      "Open Review.",
      "Click Show Markup.",
      "Choose comments, insertions, deletions or formatting as required.",
      "Review the document with the selected markup visible."
    ]],

    ["📋","Reviewing Pane","Shows a summary of tracked changes and comments.","Use it when a document contains many changes.","Review → Reviewing Pane.",[
      "Open Review.",
      "Click Reviewing Pane.",
      "Choose vertical or horizontal view if available.",
      "Review changes and comments from the pane."
    ]],

    ["✅","Accept","Accepts tracked changes.","Use it after reviewing a change and deciding to keep it.","Review → Accept.",[
      "Select or move to a tracked change.",
      "Click Accept.",
      "Choose Accept This Change or another available option.",
      "The accepted change becomes part of the document."
    ]],

    ["❌","Reject","Rejects tracked changes.","Use it when a suggested change should not be kept.","Review → Reject.",[
      "Select or move to a tracked change.",
      "Click Reject.",
      "Choose Reject This Change or another option.",
      "The change is removed or reverted."
    ]],

    ["🔍","Compare","Compares two versions of a document.","Use it to identify differences between two documents.","Review → Compare.",[
      "Open Review.",
      "Click Compare.",
      "Select the original and revised documents.",
      "Review the differences shown by Word."
    ]],

    ["🔒","Protect","Restricts editing or protects document content.","Use it when a document should not be freely edited.","Review → Protect.",[
      "Open Review.",
      "Choose the available protection option.",
      "Set the required restrictions.",
      "Add a password only if appropriate and store it safely."
    ]],

    ["✍️","Hide Ink","Hides or shows ink annotations.","Use it when reviewing documents containing handwritten ink.","Review → Hide Ink.",[
      "Open Review.",
      "Click Hide Ink.",
      "Ink annotations are hidden.",
      "Click again when you want to show them."
    ]]
  ],

  View: [
    ["📖","Read Mode","Shows the document in a reading-friendly layout.","Use it when you mainly want to read rather than edit.","View → Read Mode.",[
      "Open View.",
      "Click Read Mode.",
      "Read through the document using the navigation controls.",
      "Exit Read Mode when you need to edit."
    ]],

    ["🎯","Focus","Reduces distractions while reading or editing.","Use it when you want to concentrate on the document.","View → Focus.",[
      "Open View.",
      "Click Focus.",
      "The interface becomes less distracting.",
      "Exit Focus when finished."
    ]],

    ["📚","Immersive Reader","Provides reading and comprehension tools.","Use it to improve readability and focus on text.","View → Immersive Reader.",[
      "Open View.",
      "Click Immersive Reader.",
      "Use the available reading and text preferences.",
      "Exit when finished."
    ]],

    ["↕️","Vertical","Displays pages in a vertical scrolling layout.","Use it for normal document reading and editing.","View → Page Movement → Vertical.",[
      "Open View.",
      "Find Page Movement.",
      "Choose Vertical.",
      "Scroll through pages from top to bottom."
    ]],

    ["↔️","Side to Side","Displays pages beside each other.","Use it when reading a document like a book.","View → Page Movement → Side to Side.",[
      "Open View.",
      "Choose Side to Side under Page Movement.",
      "Scroll horizontally through pages.",
      "Return to Vertical when needed."
    ]],

    ["📏","Ruler","Shows the horizontal and vertical rulers.","Use it to set tabs, margins and indents visually.","View → Ruler.",[
      "Open View.",
      "Check Ruler.",
      "Use the ruler to adjust indents and tab positions.",
      "Uncheck it when you no longer need it."
    ]],

    ["▦","Gridlines","Shows alignment gridlines.","Use it when positioning shapes and objects.","View → Gridlines.",[
      "Open View.",
      "Turn on Gridlines.",
      "Use the grid to align objects.",
      "Turn it off when finished."
    ]],

    ["🧭","Navigation Pane","Shows headings, pages and search results in a side panel.","Use it to navigate long documents quickly.","View → Navigation Pane.",[
      "Open View.",
      "Turn on Navigation Pane.",
      "Use Headings, Pages or Search.",
      "Click a result to jump to that location."
    ]],

    ["🔍","Zoom","Changes how large the document appears on screen.","Use it to inspect details or see more of a page at once.","View → Zoom.",[
      "Click View → Zoom.",
      "Choose a percentage or preset.",
      "Use Page Width or Multiple Pages when useful.",
      "Return to 100% for normal viewing."
    ]],

    ["🪟","New Window","Opens another window for the same document.","Use it when you want to view different parts of one document simultaneously.","View → New Window.",[
      "Click View → New Window.",
      "A second window opens for the same document.",
      "Scroll to a different section in each window.",
      "Close the extra window when finished."
    ]],

    ["✂️","Split","Splits the current document window into two panes.","Use it to compare or reference two parts of the same document.","View → Split.",[
      "Click View → Split.",
      "Choose the split position.",
      "Scroll each pane independently.",
      "Remove the split when finished."
    ]],

    ["🔄","Switch Windows","Switches between open Word windows.","Use it when multiple documents or windows are open.","View → Switch Windows.",[
      "Click View → Switch Windows.",
      "Choose the required document or window.",
      "Word switches to it."
    ]],

    ["⚙️","Macros","Runs or manages recorded VBA macros.","Use it to automate repeated tasks only when macros are trusted.","View → Macros → View Macros / Record Macro.",[
      "Open View → Macros.",
      "Choose View Macros or Record Macro.",
      "For a new macro, follow the recording prompts.",
      "Only run macros from trusted sources."
    ]]
  ]
};

const bilingual = {
  "Paste":[
    "चिपकाए गए content को document में insert करता है।",
    "जब copied या cut content को दूसरी जगह रखना हो।"
  ],

  "Cut":[
    "चयनित content को हटाकर Clipboard में रखता है।",
    "जब content को एक जगह से दूसरी जगह move करना हो।"
  ],

  "Copy":[
    "चयनित content की duplicate copy बनाता है।",
    "जब वही content दूसरी जगह भी चाहिए।"
  ],

  "Format Painter":[
    "एक text की formatting दूसरे text पर लागू करता है।",
    "जब दो हिस्सों की formatting समान करनी हो।"
  ],

  "Bold":[
    "Text को मोटा और गहरा करता है।",
    "महत्वपूर्ण words या headings को highlight करने के लिए।"
  ],

  "Italic":[
    "Text को तिरछा करता है।",
    "Emphasis या अलग text style के लिए।"
  ],

  "Underline":[
    "Text के नीचे line लगाता है।",
    "महत्वपूर्ण text को emphasize करने के लिए।"
  ],

  "Table":[
    "Rows और columns वाली table बनाता है।",
    "Marks, attendance, schedule या structured data के लिए।"
  ],

  "Watermark":[
    "Page content के पीछे हल्का text या image लगाता है।",
    "Draft, Confidential, Sample या branding के लिए।"
  ],

  "Page Color":[
    "Page का background color बदलता है।",
    "Digital worksheets या visual documents के लिए।"
  ],

  "Page Borders":[
    "Page के चारों ओर border लगाता है।",
    "Certificates, invitations और decorative pages के लिए।"
  ],

  "Margins":[
    "Page के चारों ओर blank space सेट करता है।",
    "Assignment, report formatting और writing space नियंत्रित करने के लिए।"
  ]
};

function trText(en) {
  if (state.lang === "en") return en;
  return bilingual[en]?.[0] || en;
}

function trUse(en) {
  if (state.lang === "en") return en;
  return bilingual[en]?.[1] || en;
}

function currentTools() {
  return tabData[state.tab] || [];
}

function render() {
  const app = document.getElementById("app");

  if (state.page !== "word") {
    renderLanding(app);
    return;
  }

  app.className = state.dark ? "app dark" : "app";

  const tools = currentTools();

  if (state.toolIndex >= tools.length) {
    state.toolIndex = 0;
  }

  const t = tools[state.toolIndex];

  app.innerHTML = `
    <div class="app ${state.dark ? "dark" : ""}">

      <aside class="sidebar">

        <div class="logo">
          <div class="logo-mark">🎓🤝</div>
          <div>
            <div class="logo-title">JOINING HANDS</div>
            <div class="logo-sub">
              AI Computer Learning<br>
              & Practical Lab
            </div>
          </div>
        </div>

        <nav class="side-nav">

          <button class="nav-btn" data-side="Home">
            <span class="nav-icon">⌂</span>
            Home
          </button>

          <button class="nav-btn" data-side="MS Word">
            <span class="nav-icon">📝</span>
            MS Word
          </button>

          <button class="nav-btn" data-side="MS Excel">
            <span class="nav-icon">📊</span>
            MS Excel
          </button>

          <button class="nav-btn" data-side="MS PowerPoint">
            <span class="nav-icon">📽️</span>
            MS PowerPoint
          </button>

          <button class="nav-btn" data-langside>
            <span class="nav-icon">📖</span>
            ${state.lang === "en" ? "English" : "हिन्दी"}
          </button>

        </nav>

        <div class="side-label">Quick Links</div>

        <nav class="side-nav">

          <button class="nav-btn" id="aiTeacherBtn">
            <span class="nav-icon">🤖</span>
            AI Teacher
          </button>

          <button class="nav-btn">
            <span class="nav-icon">📈</span>
            My Progress
          </button>

          <button class="nav-btn">
            <span class="nav-icon">📝</span>
            Practice Tests
          </button>

          <button class="nav-btn">
            <span class="nav-icon">⬇️</span>
            Downloads
          </button>

          <button class="nav-btn">
            <span class="nav-icon">🎧</span>
            Help & Support
          </button>

        </nav>

        <div class="promo">
          <b>🏆 Keep Learning,<br>Keep Growing!</b>
          <p>Practice daily and become an expert.</p>
          <div class="stars">★★★★★</div>
        </div>

      </aside>

      <main class="main">

        <div class="topbar">

          <div>
            <div class="welcome">
              ${state.lang === "en"
                ? "Welcome back! 👋"
                : "वापसी पर स्वागत है! 👋"}
            </div>

            <div class="page-title">
              Computer Learning
            </div>

            <p class="page-sub">
              ${
                state.lang === "en"
                  ? "Learn step-by-step, practice every tool, and complete practical projects."
                  : "Step-by-step सीखें, हर tool की practice करें और practical projects पूरा करें।"
              }
              🎓
            </p>
          </div>

          <div class="actions">

            <button class="lang-btn hi" id="hiBtn">
              हिन्दी 🌐
            </button>

            <button class="lang-btn" id="enBtn">
              English 🌐
            </button>

            <div class="zoombar">
              <span>🔍</span>
              <b>Image Zoom</b>
              <button id="minus">−</button>
              <span class="zoom-value">${state.zoom}%</span>
              <button id="plus">+</button>
            </div>

            <button class="dark-btn" id="darkBtn">
              ${state.dark ? "☀️" : "🌙"}
            </button>

          </div>

        </div>

        <section class="hero">

          <div class="hero-icon">W</div>

          <div>
            <h2>MS Word</h2>
            <p>
              ${
                state.lang === "en"
                  ? "Learn every important MS Word tab step-by-step with examples."
                  : "MS Word के सभी important tabs को examples के साथ step-by-step सीखें।"
              }
            </p>
          </div>

          <div class="tabs">

            ${Object.keys(tabData).map(x => `
              <button
                class="tab-btn ${state.tab === x ? "active" : ""}"
                data-tab="${x}"
              >
                ${icons[x] || "📌"} ${x}
              </button>
            `).join("")}

          </div>

        </section>

        <div class="content-grid">

          <section class="tool-panel">

            <div class="panel-title">
              ▦
              ${state.lang === "en" ? "Tools in" : "Tools —"}
              ${state.tab} Tab
            </div>

            <div class="tool-list">

              ${tools.map((x,i) => `
                <button
                  class="tool-btn ${i === state.toolIndex ? "active" : ""}"
                  data-tool="${i}"
                >
                  <span class="tool-ico">${x[0]}</span>
                  <span>${x[1]}</span>
                  <span style="margin-left:auto">›</span>
                </button>
              `).join("")}

            </div>

          </section>

          <section class="lesson-panel">

            <div class="lesson-head">

              <div>
                <h3 class="lesson-title">
                  ${t[0]} ${trText(t[1])}
                  <small>${state.tab} Tab</small>
                </h3>
              </div>

              <span>📘</span>

            </div>

            <div class="cards">

              <div class="info-card blue">
                <h4>🔵 What does it do?</h4>
                <p>${trText(t[2])}</p>
              </div>

              <div class="info-card green">
                <h4>🟢 When should you use it?</h4>
                <p>${trUse(t[3])}</p>
              </div>

              <div class="info-card yellow">
                <h4>💡 Example</h4>
                <p>
                  ${
                    state.lang === "en"
                      ? t[4].split(" → ")[0] + "."
                      : (bilingual[t[1]]?.[1] || t[4])
                  }
                </p>
              </div>

            </div>

            <div class="instruction">

              <button id="instructionToggle">
                <span>📖 How to use this option?</span>
                <span>${state.expanded ? "⌃" : "⌄"}</span>
              </button>

              ${
                state.expanded
                  ? `
                    <div class="steps">

                      ${t[5].map((s,i) => `
                        <div class="step">

                          <div class="num">
                            ${i + 1}
                          </div>

                          <div>
                            <p>
                              <b>
                                ${
                                  state.lang === "en"
                                    ? s
                                    : stepHindi(s,t[1],i)
                                }
                              </b>
                            </p>
                          </div>

                        </div>
                      `).join("")}

                    </div>
                  `
                  : ""
              }

            </div>

            <div class="practice">

              <div>
                <b>
                  ⭐
                  ${
                    state.lang === "en"
                      ? "Practice Task"
                      : "Practice Task"
                  }
                </b>

                <p>${practiceText(t[1])}</p>
              </div>

              <button id="practiceBtn">
                ${
                  state.lang === "en"
                    ? "Start Practice →"
                    : "Practice शुरू करें →"
                }
              </button>

            </div>

          </section>

        </div>

        <div class="bottom-nav">

          <button id="prev">
            ←
            ${
              state.lang === "en"
                ? "Previous Tool"
                : "पिछला Tool"
            }
          </button>

          <button id="next">
            ${
              state.lang === "en"
                ? "Next Tool"
                : "अगला Tool"
            }
            →
          </button>

        </div>

        <section class="projects">

          <h3>
            ${
              state.lang === "en"
                ? "14 Practical Projects"
                : "14 Practical Projects — 14 प्रोजेक्ट्स"
            }
          </h3>

          <div class="project-grid">

            ${Array.from({length:14},(_,i) => `
              <div class="project-card">

                <img
                  src="Project ${i+1}.png"
                  onerror="this.style.visibility='hidden'"
                >

                <h4>Project ${i+1}</h4>

                <p>
                  ${
                    state.lang === "en"
                      ? "Practice project — complete the task step-by-step."
                      : "Practice project — दिए गए task को step-by-step पूरा करें।"
                  }
                </p>

              </div>
            `).join("")}

          </div>

        </section>

      </main>

    </div>

    <div class="image-modal" id="modal">
      <button class="close-modal" id="closeModal">×</button>
      <img class="modal-img" id="modalImg">
    </div>
  `;

  bind();
}

function stepHindi(s,name,i) {

  const common = {

    "Paste": [
      "जिस content को copy या cut करना है उसे select करें।",
      "Home tab पर जाएँ।",
      "Clipboard group में Paste पर click करें।",
      "Content cursor की position पर insert हो जाएगा।"
    ],

    "Bold": [
      "जिस text को bold करना है उसे select करें।",
      "Home → Font group में जाएँ।",
      "Bold पर click करें।",
      "Bold हटाने के लिए फिर से click करें।"
    ],

    "Italic": [
      "Text को select करें।",
      "Font group में Italic पर click करें।",
      "Selected text slanted हो जाएगा।",
      "हटाने के लिए फिर से click करें।"
    ],

    "Underline": [
      "Text को select करें।",
      "Underline पर click करें।",
      "Text के नीचे line आ जाएगी।",
      "हटाने के लिए फिर से click करें।"
    ],

    "Table": [
      "जहाँ table चाहिए वहाँ cursor रखें।",
      "Insert → Table पर click करें।",
      "Rows और columns चुनें।",
      "Cells में अपना data type करें।"
    ],

    "Watermark": [
      "Design → Watermark पर जाएँ।",
      "Preset watermark चुनें या Custom Watermark खोलें।",
      "Text/image और उसकी settings चुनें।",
      "Apply/OK पर click करें।",
      "Watermark page के content के पीछे दिखाई देगा।"
    ],

    "Page Color": [
      "Design → Page Color पर जाएँ।",
      "अपना color चुनें।",
      "जरूरत हो तो More Colors चुनें।",
      "Document का page background बदल जाएगा।"
    ],

    "Page Borders": [
      "Design → Page Borders खोलें।",
      "Border setting/style चुनें।",
      "Color और width चुनें।",
      "Apply to चुनकर OK करें।"
    ],

    "Margins": [
      "Layout → Margins पर जाएँ।",
      "Normal, Narrow, Wide या कोई preset चुनें।",
      "Custom Margins से अपने values भी डाल सकते हैं।",
      "Page के चारों ओर का blank space बदल जाएगा।"
    ]
  };

  return common[name]?.[i] || s;
}

function practiceText(name) {

  const p = {

    Paste:
      "Copy a paragraph and paste it at the end of the document. Then change its font.",

    Cut:
      "Move one sentence from the first paragraph to the last paragraph.",

    Table:
      "Create a 4-column student marks table with at least 5 students.",

    Watermark:
      "Add a CONFIDENTIAL watermark to a practice document, then remove it.",

    "Page Color":
      "Change the page color, check readability, then return to white.",

    "Page Borders":
      "Create a simple border around a one-page assignment.",

    Bold:
      "Make the main heading bold and highlight two important words.",

    Italic:
      "Italicize three technical terms in a paragraph.",

    Underline:
      "Underline the title and one important sentence."
  };

  return p[name] ||
    `Open MS Word and practice the ${name} option using a small sample document.`;
}

function renderLanding(app) {

  const title =
    state.page === "home"
      ? "Computer Learning"
      : state.page === "excel"
      ? "MS Excel"
      : "MS PowerPoint";

  const subtitle =
    state.page === "home"
      ? "Choose a course to start learning step-by-step."
      : `The ${title} learning section is ready to connect. More lessons can be added here without affecting MS Word.`;

  app.innerHTML = `

    <div class="app ${state.dark ? "dark" : ""}">

      <aside class="sidebar">

        <div class="logo">
          <div class="logo-mark">🎓🤝</div>

          <div>
            <div class="logo-title">
              JOINING HANDS
            </div>

            <div class="logo-sub">
              AI Computer Learning<br>
              & Practical Lab
            </div>
          </div>
        </div>

        <nav class="side-nav">

          <button
            class="nav-btn ${state.page === "home" ? "active" : ""}"
            data-side="Home"
          >
            <span class="nav-icon">⌂</span>
            Home
          </button>

          <button
            class="nav-btn ${state.page === "word" ? "active" : ""}"
            data-side="MS Word"
          >
            <span class="nav-icon">📝</span>
            MS Word
          </button>

          <button
            class="nav-btn ${state.page === "excel" ? "active" : ""}"
            data-side="MS Excel"
          >
            <span class="nav-icon">📊</span>
            MS Excel
          </button>

          <button
            class="nav-btn ${state.page === "powerpoint" ? "active" : ""}"
            data-side="MS PowerPoint"
          >
            <span class="nav-icon">📽️</span>
            MS PowerPoint
          </button>

          <button class="nav-btn" data-langside>
            <span class="nav-icon">📖</span>
            ${state.lang === "en" ? "English" : "हिन्दी"}
          </button>

        </nav>

        <div class="side-label">
          Quick Links
        </div>

        <nav class="side-nav">

          <button class="nav-btn" id="aiTeacherBtn">
            <span class="nav-icon">🤖</span>
            AI Teacher
          </button>

          <button class="nav-btn" id="progressBtn">
            <span class="nav-icon">📈</span>
            My Progress
          </button>

          <button class="nav-btn" id="practiceTestsBtn">
            <span class="nav-icon">📝</span>
            Practice Tests
          </button>

          <button class="nav-btn" id="downloadsBtn">
            <span class="nav-icon">⬇️</span>
            Downloads
          </button>

          <button class="nav-btn" id="helpBtn">
            <span class="nav-icon">🎧</span>
            Help & Support
          </button>

        </nav>

        <div class="promo">
          <b>
            🏆 Keep Learning,<br>
            Keep Growing!
          </b>

          <p>
            Practice daily and become an expert.
          </p>

          <div class="stars">
            ★★★★★
          </div>
        </div>

      </aside>

      <main class="main">

        <div class="topbar">

          <div>

            <div class="welcome">
              ${
                state.lang === "en"
                  ? "Welcome back! 👋"
                  : "वापसी पर स्वागत है! 👋"
              }
            </div>

            <div class="page-title">
              ${title}
            </div>

            <p class="page-sub">
              ${subtitle}
            </p>

          </div>

          <div class="actions">

            <button class="lang-btn hi" id="hiBtn">
              हिन्दी 🌐
            </button>

            <button class="lang-btn" id="enBtn">
              English 🌐
            </button>

            <button class="dark-btn" id="darkBtn">
              ${state.dark ? "☀️" : "🌙"}
            </button>

          </div>

        </div>

        <section class="hero">

          <div class="hero-icon">
            ${
              state.page === "home"
                ? "💻"
                : state.page === "excel"
                ? "X"
                : "P"
            }
          </div>

          <div>

            <h2>
              ${title}
            </h2>

            <p>
              ${
                state.page === "home"
                  ? "Learn step-by-step, practice every tool, and complete practical projects."
                  : subtitle
              }
            </p>

          </div>

        </section>

        <section
          class="lesson-panel"
          style="margin-top:20px"
        >

          <div class="lesson-head">

            <h3 class="lesson-title">
              ${
                state.page === "home"
                  ? "Choose your learning course"
                  : title + " Learning"
              }
            </h3>

            <span>
              📚
            </span>

          </div>

          <div class="cards">

            <div class="info-card blue">

              <h4>
                📘 MS Word
              </h4>

              <p>
                Complete tab-by-tab learning with explanations,
                examples and practical steps.
              </p>

              <button
                class="lang-btn"
                data-side="MS Word"
              >
                Open MS Word
              </button>

            </div>

            <div class="info-card green">

              <h4>
                📊 MS Excel
              </h4>

              <p>
                Excel lessons can be added here.
                The navigation is working correctly.
              </p>

              <button
                class="lang-btn"
                data-side="MS Excel"
              >
                Open Excel
              </button>

            </div>

            <div class="info-card yellow">

              <h4>
                📽️ MS PowerPoint
              </h4>

              <p>
                PowerPoint lessons can be added here.
                The navigation is working correctly.
              </p>

              <button
                class="lang-btn"
                data-side="MS PowerPoint"
              >
                Open PowerPoint
              </button>

            </div>

          </div>

        </section>

      </main>

    </div>
  `;

  bindLanding();
}

function bindLanding() {

  document
    .querySelectorAll("[data-side]")
    .forEach(b => {

      b.onclick = () => {

        const t = b.dataset.side;

        if (t === "MS Word") {

          state.page = "word";
          state.tab = "Home";
          state.toolIndex = 0;
          state.expanded = true;

          render();
          return;
        }

        if (t === "Home") {

          state.page = "home";
          render();
          return;
        }

        if (t === "MS Excel") {

          state.page = "excel";
          render();
          return;
        }

        if (t === "MS PowerPoint") {

          state.page = "powerpoint";
          render();
          return;
        }
      };

    });

  document.getElementById("hiBtn").onclick = () => {
    state.lang = "hi";
    render();
  };

  document.getElementById("enBtn").onclick = () => {
    state.lang = "en";
    render();
  };

  document.getElementById("darkBtn").onclick = () => {
    state.dark = !state.dark;
    render();
  };

  const ai = document.getElementById("aiTeacherBtn");

  if (ai) {
    ai.onclick = showAITeacher;
  }

  const msg = () => {

    alert(
      state.lang === "en"
        ? "This section is ready. Add your future lessons here."
        : "यह section तैयार है। यहाँ future lessons add किए जा सकते हैं।"
    );

  };

  [
    "progressBtn",
    "practiceTestsBtn",
    "downloadsBtn",
    "helpBtn"
  ].forEach(id => {

    const e = document.getElementById(id);

    if (e) {
      e.onclick = msg;
    }

  });
}

function showAITeacher() {

  const q = prompt(
    state.lang === "en"
      ? "AI Teacher — What do you want to learn?"
      : "AI Teacher — आप क्या सीखना चाहते हैं?"
  );

  if (q === null) {
    return;
  }

  alert(
    state.lang === "en"
      ? `AI Teacher:

You asked: ${q}

For now, use the MS Word learning tabs and expandable “How to use this option?” instructions. A full AI chat can be connected later.`
      : `AI Teacher:

आपने पूछा: ${q}

अभी MS Word learning tabs और “How to use this option?” instructions का उपयोग करें। Full AI chat बाद में connect किया जा सकता है।`
  );
}

function bind() {

  const sideLang =
    document.querySelector("[data-langside]");

  if (sideLang) {

    sideLang.onclick = () => {

      state.lang =
        state.lang === "en"
          ? "hi"
          : "en";

      render();

    };

  }

  document
    .querySelectorAll("[data-side]")
    .forEach(b => {

      b.onclick = () => {

        const target = b.dataset.side;

        if (target === "MS Word") {

          state.page = "word";
          state.tab = "Home";
          state.toolIndex = 0;
          state.expanded = true;

          render();
          return;
        }

        if (target === "Home") {

          state.page = "home";
          render();
          return;
        }

        if (target === "MS Excel") {

          state.page = "excel";
          render();
          return;
        }

        if (target === "MS PowerPoint") {

          state.page = "powerpoint";
          render();
          return;
        }

      };

    });

  const ai =
    document.getElementById("aiTeacherBtn");

  if (ai) {
    ai.onclick = showAITeacher;
  }

  document
    .querySelectorAll("[data-tab]")
    .forEach(b => {

      b.onclick = () => {

        state.page = "word";
        state.tab = b.dataset.tab;
        state.toolIndex = 0;
        state.expanded = true;

        render();

      };

    });

  document
    .querySelectorAll("[data-tool]")
    .forEach(b => {

      b.onclick = () => {

        state.toolIndex =
          Number(b.dataset.tool);

        state.expanded = true;

        render();

      };

    });

  const instructionToggle =
    document.getElementById("instructionToggle");

  if (instructionToggle) {

    instructionToggle.onclick = () => {

      state.expanded =
        !state.expanded;

      render();

    };

  }

  document.getElementById("hiBtn").onclick = () => {

    state.lang = "hi";
    render();

  };

  document.getElementById("enBtn").onclick = () => {

    state.lang = "en";
    render();

  };

  document.getElementById("darkBtn").onclick = () => {

    state.dark = !state.dark;

    document.documentElement.classList.toggle(
      "dark",
      state.dark
    );

    render();

  };

  document.getElementById("minus").onclick = () => {

    state.zoom =
      Math.max(
        50,
        state.zoom - 10
      );

    applyZoom();

  };

  document.getElementById("plus").onclick = () => {

    state.zoom =
      Math.min(
        200,
        state.zoom + 10
      );

    applyZoom();

  };

  document.getElementById("prev").onclick = () => {

    state.toolIndex =
      (
        state.toolIndex -
        1 +
        currentTools().length
      ) %
      currentTools().length;

    render();

  };

  document.getElementById("next").onclick = () => {

    state.toolIndex =
      (
        state.toolIndex +
        1
      ) %
      currentTools().length;

    render();

  };

  document.getElementById("practiceBtn").onclick = () => {

    alert(
      state.lang === "en"
        ? "Practice task opened. Use the instructions above to complete it in MS Word."
        : "Practice task: ऊपर दिए गए instructions के अनुसार MS Word में इसे पूरा करें।"
    );

  };

  const closeModal =
    document.getElementById("closeModal");

  if (closeModal) {

    closeModal.onclick = () => {

      document
        .getElementById("modal")
        .classList.remove("open");

    };

  }

  const modal =
    document.getElementById("modal");

  if (modal) {

    modal.onclick = e => {

      if (e.target.id === "modal") {

        e.currentTarget
          .classList
          .remove("open");

      }

    };

  }
}

function applyZoom() {

  const zoomValue =
    document.querySelector(".zoom-value");

  if (zoomValue) {
    zoomValue.textContent =
      state.zoom + "%";
  }

  document
    .querySelectorAll(".step-image")
    .forEach(img => {

      img.style.transform =
        `scale(${state.zoom / 100})`;

    });

}

/* Start the website */
render();
