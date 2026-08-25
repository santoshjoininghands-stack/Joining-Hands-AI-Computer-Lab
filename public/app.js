/* Joining Hands Computer Learning Lab — complete standalone app */

const projects = [
  ['Application Form','Prepare a neat and properly formatted application form.','Entering and formatting text, alignment, tables and borders'],
  ['Admissions Advertisement','Prepare an attractive admissions advertisement.','Text formatting, WordArt, pictures, shapes and page layout'],
  ['Sales Advertisement','Create a professional sales advertisement.','Fonts, colours, pictures, shapes, borders and layout'],
  ['Book Cover Page','Prepare a professional book cover page.','Page design, text, images, shapes and object positioning'],
  ['Sales Advertisement','Create another professional sales advertisement.','Text formatting, layout and visual presentation'],
  ['Marketing Planning Cycle','Prepare a marketing planning cycle diagram.','Shapes, arrows, alignment and diagram design'],
  ["Visitor's Information Sheet",'Prepare a visitor information sheet.','Tables, data entry, cell alignment and borders'],
  ['Sales Chart','Prepare a sales chart using MS Word.','Tables, charts, chart titles and data formatting'],
  ['Global Climate Change','Prepare an information page about climate change.','Headings, paragraphs, images and page layout'],
  ['Globalization','Prepare an informative document about globalization.','Headings, paragraph formatting, images and alignment'],
  ['Comparative Analysis of Admission','Prepare a comparative admission analysis.','Tables, data comparison, headings and cell formatting'],
  ['Water Pollution','Prepare an information page about water pollution.','Headings, images, shapes and page design'],
  ['Education','Create an educational information page.','Text formatting, images, shapes and object positioning'],
  ['Kid Helper','Create an attractive information page for children.','Text, images, shapes, alignment and page design']
].map(([topic, description, skills], index) => ({
  id: index + 1, title: `Project ${index + 1}`, topic, description, skills,
  duration: '75 Minutes', image: `Project ${index + 1}.png`,
  objective: `Create a polished ${topic.toLowerCase()} by following the reference image.`,
  miniPractice: `Create a small practice version of this ${topic.toLowerCase()} using the skills listed above.`,
  steps: [
    'Open Microsoft Word and create a blank document.',
    'Study the reference image carefully before starting.',
    'Add the required heading, text and information.',
    'Use suitable formatting, alignment, spacing and visual elements.',
    'Check that your work is neat and similar to the example.',
    'Save the completed document with a clear file name.'
  ],
  task: `Create your own ${topic.toLowerCase()} by following the reference image.`
}));

const courses = {
  'MS Word': projects,
  'MS Excel': [
    { id: 1, title: 'Project 1', topic: 'Basic Excel', description: 'Learn rows, columns, cells and basic data entry.' },
    { id: 2, title: 'Project 2', topic: 'Basic Formulas', description: 'Practice SUM, AVERAGE, MIN and MAX.' },
    { id: 3, title: 'Project 3', topic: 'Formatting', description: 'Format an Excel worksheet professionally.' }
  ],
  'MS PowerPoint': [
    { id: 1, title: 'Project 1', topic: 'Create a Presentation', description: 'Create your first PowerPoint presentation.' },
    { id: 2, title: 'Project 2', topic: 'Design and Formatting', description: 'Practice themes, pictures, shapes and text.' }
  ],
  English: [
    { id: 1, title: 'Lesson 1', topic: 'Basic English', description: 'Practice basic English words and sentences.' },
    { id: 2, title: 'Lesson 2', topic: 'Daily Conversation', description: 'Practice common daily conversations.' }
  ]
};

const wordTabs = {
  Home: {
    image: 'Home.png', icon: '🏠',
    en: { intro: 'The Home Tab is used most often for typing, editing, formatting and arranging text.', groups: ['Clipboard', 'Font', 'Paragraph', 'Styles', 'Editing'], sections: [
      ['1️⃣ Clipboard', 'Copy, cut and move content in the document.', [['📋 Paste', 'Inserts copied or cut content at the selected location.', 'Ctrl + V'], ['✂️ Cut', 'Removes selected content and places it on the Clipboard.', 'Ctrl + X'], ['📄 Copy', 'Makes a copy without removing the original.', 'Ctrl + C'], ['🖌️ Format Painter', 'Copies formatting from one place and applies it to another.']]],
      ['2️⃣ Font', 'Changes the appearance of selected text.', [['🔤 Font Name', 'Changes the text typeface, for example Arial or Calibri.'], ['🔢 Font Size', 'Changes the size of the text.'], ['🔼 / 🔽 Grow or Shrink Font', 'Makes selected text larger or smaller.'], ['🔠 Change Case', 'Changes text to uppercase, lowercase and other cases.'], ['🧹 Clear Formatting', 'Removes applied formatting and returns text to normal.'], ['Bold, Italic, Underline', 'Makes text thick, slanted or underlined.', 'Ctrl + B / I / U']]],
      ['3️⃣ Paragraph', 'Formats paragraphs and lists.', [['• Bullets / 1. Numbering', 'Creates bulleted or numbered lists.'], ['↔ Alignment', 'Aligns text left, centre, right or justified.', 'Ctrl + L / E / R / J'], ['↕ Line & Paragraph Spacing', 'Controls space between lines and paragraphs.'], ['🎨 Shading & Borders', 'Adds a background colour or border to a paragraph.']]],
      ['4️⃣ Styles & Editing', 'Applies ready-made styles and helps find or change text.', [['✨ Styles', 'Uses Normal, Heading, Title and other ready-made formats.'], ['🔎 Find / Replace / Select', 'Finds text, replaces it or selects content.', 'Ctrl + F']]]
    ]},
    hi: { intro: 'Home Tab का उपयोग सबसे ज़्यादा text type, edit, format और arrange करने के लिए किया जाता है।', groups: ['Clipboard', 'Font', 'Paragraph', 'Styles', 'Editing'], sections: [
      ['1️⃣ Clipboard', 'Document के content को copy, cut और move करने के लिए।', [['📋 Paste', 'Copy या cut किया हुआ content selected location पर insert करता है।', 'Ctrl + V'], ['✂️ Cut', 'Selected content को हटाकर Clipboard में रखता है।', 'Ctrl + X'], ['📄 Copy', 'Original को हटाए बिना selected content की copy बनाता है।', 'Ctrl + C'], ['🖌️ Format Painter', 'एक जगह की formatting को copy करके दूसरी जगह apply करता है।']]],
      ['2️⃣ Font', 'Selected text की appearance बदलने के लिए।', [['🔤 Font Name', 'Text का font बदलता है; जैसे Arial या Calibri।'], ['🔢 Font Size', 'Text का size बदलता है।'], ['🔼 / 🔽 Grow or Shrink Font', 'Selected text को बड़ा या छोटा करता है।'], ['🔠 Change Case', 'Text को UPPERCASE, lowercase आदि में बदलता है।'], ['🧹 Clear Formatting', 'Applied formatting हटाकर text को normal करता है।'], ['Bold, Italic, Underline', 'Text को मोटा, तिरछा या नीचे line वाला बनाता है।', 'Ctrl + B / I / U']]],
      ['3️⃣ Paragraph', 'Paragraph और list format करने के लिए।', [['• Bullets / 1. Numbering', 'Bullet या number वाली list बनाने के लिए।'], ['↔ Alignment', 'Text को left, centre, right या justify करता है।', 'Ctrl + L / E / R / J'], ['↕ Line & Paragraph Spacing', 'Lines और paragraphs के बीच की दूरी control करता है।'], ['🎨 Shading & Borders', 'Paragraph के पीछे colour या border लगाता है।']]],
      ['4️⃣ Styles & Editing', 'Ready-made styles लगाने और text find/change करने के लिए।', [['✨ Styles', 'Normal, Heading, Title जैसी ready-made formatting लगाता है।'], ['🔎 Find / Replace / Select', 'Text को find, replace या select करता है।', 'Ctrl + F']]]
    ]}
  },
  Insert: {
    image: 'Insert.png', icon: '➕',
    en: { intro: 'The Insert Tab adds tables, pictures, shapes, links, headers, page numbers and symbols.', groups: ['Pages', 'Tables', 'Illustrations', 'Links', 'Header & Footer', 'Text', 'Symbols'], sections: [
      ['1️⃣ Pages & Tables', 'Adds pages and structured tables.', [['📄 Cover Page / Blank Page', 'Adds a ready-made cover or a new blank page.'], ['📑 Page Break', 'Starts following content on a new page.', 'Ctrl + Enter'], ['📊 Table', 'Creates a table using rows and columns.']]],
      ['2️⃣ Illustrations', 'Adds visual content to the document.', [['🖼️ Pictures', 'Inserts pictures from your device.'], ['🔷 Shapes / Icons / 3D Models', 'Adds ready-made visual objects.'], ['🔶 SmartArt', 'Creates diagrams to show information visually.'], ['📈 Chart', 'Shows data using a graph or chart.'], ['📸 Screenshot', 'Captures and inserts a screenshot.']]],
      ['3️⃣ Links, Header & Footer', 'Connects and labels the document.', [['🔗 Link', 'Creates a hyperlink to a webpage, file or place in the document.', 'Ctrl + K'], ['🔖 Bookmark / Cross-reference', 'Marks or refers to another place in a document.'], ['Header / Footer / Page Number', 'Adds repeated information at the top or bottom of pages.']]],
      ['4️⃣ Text & Symbols', 'Adds special text objects and characters.', [['🔲 Text Box / WordArt', 'Adds a separate text area or decorative text.'], ['📅 Date & Time / Object', 'Inserts the date, time or another file object.'], ['∑ Equation / Ω Symbol', 'Inserts mathematical equations and special characters.']]]
    ]},
    hi: { intro: 'Insert Tab से document में table, picture, shape, link, header, page number और symbol जोड़ते हैं।', groups: ['Pages', 'Tables', 'Illustrations', 'Links', 'Header & Footer', 'Text', 'Symbols'], sections: [
      ['1️⃣ Pages & Tables', 'Page और table जोड़ने के लिए।', [['📄 Cover Page / Blank Page', 'Ready-made cover या नया blank page जोड़ता है।'], ['📑 Page Break', 'इसके बाद का content next page से शुरू करता है।', 'Ctrl + Enter'], ['📊 Table', 'Rows और columns की सहायता से table बनाता है।']]],
      ['2️⃣ Illustrations', 'Document में visual content जोड़ने के लिए।', [['🖼️ Pictures', 'Device से picture insert करता है।'], ['🔷 Shapes / Icons / 3D Models', 'Ready-made visual objects जोड़ता है।'], ['🔶 SmartArt', 'Information दिखाने के लिए diagram बनाता है।'], ['📈 Chart', 'Data को graph या chart में दिखाता है।'], ['📸 Screenshot', 'Screenshot लेकर document में insert करता है।']]],
      ['3️⃣ Links, Header & Footer', 'Document को connect और label करने के लिए।', [['🔗 Link', 'Webpage, file या document की location का hyperlink बनाता है।', 'Ctrl + K'], ['🔖 Bookmark / Cross-reference', 'Document की किसी जगह को mark या refer करता है।'], ['Header / Footer / Page Number', 'हर page के ऊपर/नीचे information या number जोड़ता है।']]],
      ['4️⃣ Text & Symbols', 'Special text objects और characters जोड़ने के लिए।', [['🔲 Text Box / WordArt', 'अलग text box या decorative text बनाता है।'], ['📅 Date & Time / Object', 'Date, time या दूसरी file का object insert करता है।'], ['∑ Equation / Ω Symbol', 'Math equation और special character insert करता है।']]]
    ]}
  },
  'Page Layout': {
    image: 'Page Layout(1).png', icon: '📄',
    en: { intro: 'The Page Layout Tab controls page design, margins, paper size, background and object arrangement.', groups: ['Themes', 'Page Setup', 'Page Background', 'Paragraph', 'Arrange'], sections: [
      ['1️⃣ Themes', 'Changes the overall document look.', [['🎨 Themes / Colors / Fonts', 'Applies matching colours and fonts across the document.'], ['✨ Effects', 'Changes visual effects used by the theme.']]],
      ['2️⃣ Page Setup', 'Sets paper and page options.', [['📐 Margins', 'Sets space between content and page edges.'], ['📄 Orientation', 'Changes the page to Portrait or Landscape.'], ['📏 Size', 'Chooses paper size such as A4, Letter or Legal.'], ['📰 Columns / Breaks', 'Divides text into columns or starts a new section.'], ['🔢 Line Numbers / Hyphenation', 'Adds line numbers or splits long words correctly.']]],
      ['3️⃣ Page Background, Paragraph & Arrange', 'Controls the page appearance and placed objects.', [['💧 Watermark / Page Color / Page Borders', 'Adds a faded mark, background colour or border.'], ['↔ Indent / Spacing', 'Sets paragraph indentation and space before or after it.'], ['📌 Position / Wrap Text / Align', 'Positions pictures and shapes neatly on the page.']]]
    ]},
    hi: { intro: 'Page Layout Tab से page design, margins, paper size, background और objects की setting की जाती है।', groups: ['Themes', 'Page Setup', 'Page Background', 'Paragraph', 'Arrange'], sections: [
      ['1️⃣ Themes', 'पूरे document का look बदलने के लिए।', [['🎨 Themes / Colors / Fonts', 'पूरे document में matching colour और font apply करता है।'], ['✨ Effects', 'Theme के visual effects बदलता है।']]],
      ['2️⃣ Page Setup', 'Paper और page की settings के लिए।', [['📐 Margins', 'Content और page edge के बीच space set करता है।'], ['📄 Orientation', 'Page को Portrait या Landscape करता है।'], ['📏 Size', 'A4, Letter या Legal जैसे paper size choose करता है।'], ['📰 Columns / Breaks', 'Text को columns में divide या new section शुरू करता है।'], ['🔢 Line Numbers / Hyphenation', 'Line numbers जोड़ता या long word को सही तरह break करता है।']]],
      ['3️⃣ Page Background, Paragraph & Arrange', 'Page और objects को control करने के लिए।', [['💧 Watermark / Page Color / Page Borders', 'हल्का watermark, background colour या page border लगाता है।'], ['↔ Indent / Spacing', 'Paragraph की indent और before/after space set करता है।'], ['📌 Position / Wrap Text / Align', 'Picture और shape को page पर सही जगह रखता है।']]]
    ]}
  },
  References: {
    image: 'References.png', icon: '📚',
    en: { intro: 'The References Tab helps create academic documents with a table of contents, citations, captions and an index.', groups: ['Table of Contents', 'Footnotes', 'Citations & Bibliography', 'Captions', 'Index'], sections: [
      ['1️⃣ Table of Contents & Footnotes', 'Builds navigation and notes.', [['📑 Table of Contents', 'Creates an automatic list of headings and page numbers.'], ['🔄 Add Text / Update Table', 'Adds headings or refreshes the table of contents.'], ['¹ Insert Footnote / Endnote', 'Adds explanatory or source notes at a page bottom or document end.']]],
      ['2️⃣ Citations & Bibliography', 'Credits books, websites and other sources.', [['📖 Insert Citation', 'Adds a source citation at the cursor.'], ['🗂️ Manage Sources / Style', 'Stores sources and chooses APA, MLA or another citation style.'], ['📚 Bibliography', 'Creates a list of sources used in the document.']]],
      ['3️⃣ Captions, Index & Authorities', 'Labels and lists important items.', [['🏷️ Insert Caption / Cross-reference', 'Labels figures or tables and links to them.'], ['🔎 Mark Entry / Insert Index', 'Builds an alphabetical index of important topics.'], ['⚖️ Table of Authorities', 'Lists legal citations in a legal document.']]]
    ]},
    hi: { intro: 'References Tab से Table of Contents, citation, caption और index वाला academic document बनाया जाता है।', groups: ['Table of Contents', 'Footnotes', 'Citations & Bibliography', 'Captions', 'Index'], sections: [
      ['1️⃣ Table of Contents & Footnotes', 'Navigation और notes बनाने के लिए।', [['📑 Table of Contents', 'Headings और page numbers की automatic list बनाता है।'], ['🔄 Add Text / Update Table', 'Heading add या table को refresh करता है।'], ['¹ Insert Footnote / Endnote', 'Page के नीचे या document के अंत में note/source जोड़ता है।']]],
      ['2️⃣ Citations & Bibliography', 'Book, website और source को credit देने के लिए।', [['📖 Insert Citation', 'Cursor वाली जगह पर source citation जोड़ता है।'], ['🗂️ Manage Sources / Style', 'Sources save करता और APA, MLA जैसी style चुनता है।'], ['📚 Bibliography', 'Document में use किए गए sources की list बनाता है।']]],
      ['3️⃣ Captions, Index & Authorities', 'Important items को label और list करने के लिए।', [['🏷️ Insert Caption / Cross-reference', 'Figure/table को label और link करता है।'], ['🔎 Mark Entry / Insert Index', 'Topics का alphabetical index बनाता है।'], ['⚖️ Table of Authorities', 'Legal document में legal citations की list बनाता है।']]]
    ]}
  },
  Mailings: {
    image: 'Mailing.png', icon: '✉️',
    en: { intro: 'The Mailings Tab creates letters, labels, envelopes and many personalised copies through Mail Merge.', groups: ['Create', 'Start Mail Merge', 'Write & Insert Fields', 'Preview Results', 'Finish'], sections: [
      ['1️⃣ Create & Start Mail Merge', 'Prepares the kind of mailing you need.', [['✉️ Envelopes / Labels', 'Creates addressed envelopes or labels.'], ['📨 Start Mail Merge', 'Starts a letter, email, envelope, label or directory merge.'], ['👥 Select Recipients', 'Uses a new list, existing list or Outlook contacts.']]],
      ['2️⃣ Write & Insert Fields', 'Personalises every copy.', [['🧾 Address Block / Greeting Line', 'Adds a recipient address or personalised greeting.'], ['🔖 Insert Merge Field', 'Inserts fields such as Name, Address or Phone.'], ['🔄 Rules / Match Fields', 'Controls conditions and connects source columns correctly.']]],
      ['3️⃣ Preview & Finish', 'Checks and produces the final copies.', [['👀 Preview Results', 'Shows how each recipient copy will look.'], ['🔍 Find Recipient / Check Errors', 'Finds a record and checks for merge errors.'], ['✅ Finish & Merge', 'Prints, edits or sends the personalised documents.']]]
    ]},
    hi: { intro: 'Mailings Tab से letter, label, envelope और Mail Merge से कई personalised copies बनाई जाती हैं।', groups: ['Create', 'Start Mail Merge', 'Write & Insert Fields', 'Preview Results', 'Finish'], sections: [
      ['1️⃣ Create & Start Mail Merge', 'Mailing का type तैयार करने के लिए।', [['✉️ Envelopes / Labels', 'Address वाले envelope या label बनाता है।'], ['📨 Start Mail Merge', 'Letter, email, envelope, label या directory merge शुरू करता है।'], ['👥 Select Recipients', 'New list, existing list या Outlook contacts use करता है।']]],
      ['2️⃣ Write & Insert Fields', 'हर copy को personal बनाने के लिए।', [['🧾 Address Block / Greeting Line', 'Recipient का address या personalised greeting जोड़ता है।'], ['🔖 Insert Merge Field', 'Name, Address, Phone जैसे fields insert करता है।'], ['🔄 Rules / Match Fields', 'Conditions set और source columns match करता है।']]],
      ['3️⃣ Preview & Finish', 'Final copies check और produce करने के लिए।', [['👀 Preview Results', 'हर recipient की copy कैसी दिखेगी, दिखाता है।'], ['🔍 Find Recipient / Check Errors', 'Record खोजता और merge errors check करता है।'], ['✅ Finish & Merge', 'Personalised document print, edit या send करता है।']]]
    ]}
  },
  Review: {
    image: 'Review.png', icon: '✅',
    en: { intro: 'The Review Tab checks spelling, adds comments, tracks changes and protects a document.', groups: ['Proofing', 'Language', 'Comments', 'Tracking', 'Changes', 'Protect'], sections: [
      ['1️⃣ Proofing & Language', 'Checks writing quality and language.', [['✍️ Spelling & Grammar', 'Finds spelling and grammar problems.', 'F7'], ['📚 Thesaurus / Word Count', 'Finds similar words or counts words and pages.'], ['🌐 Translate / Language', 'Translates text or sets proofing language.']]],
      ['2️⃣ Comments & Tracking', 'Lets people review a document together.', [['💬 New Comment', 'Adds a note to selected content.', 'Ctrl + Alt + M'], ['🖊️ Track Changes', 'Records edits made in the document.', 'Ctrl + Shift + E'], ['👀 Display for Review / Reviewing Pane', 'Shows which changes and comments are visible.']]],
      ['3️⃣ Changes & Protection', 'Accepts edits and limits document editing.', [['✅ Accept / ❌ Reject', 'Accepts or rejects the current tracked change.'], ['➡ Previous / Next', 'Moves between tracked changes.'], ['🔒 Restrict Editing', 'Limits how others can edit or format the document.']]]
    ]},
    hi: { intro: 'Review Tab से spelling check, comments, changes track और document protect किया जाता है।', groups: ['Proofing', 'Language', 'Comments', 'Tracking', 'Changes', 'Protect'], sections: [
      ['1️⃣ Proofing & Language', 'Writing और language check करने के लिए।', [['✍️ Spelling & Grammar', 'Spelling और grammar की गलती ढूँढता है।', 'F7'], ['📚 Thesaurus / Word Count', 'Similar word ढूँढता या words/pages count करता है।'], ['🌐 Translate / Language', 'Text translate या proofing language set करता है।']]],
      ['2️⃣ Comments & Tracking', 'Document को मिलकर review करने के लिए।', [['💬 New Comment', 'Selected content पर note जोड़ता है।', 'Ctrl + Alt + M'], ['🖊️ Track Changes', 'Document में होने वाले edits record करता है।', 'Ctrl + Shift + E'], ['👀 Display for Review / Reviewing Pane', 'Visible changes और comments दिखाता है।']]],
      ['3️⃣ Changes & Protection', 'Edits accept/reject और editing limit करने के लिए।', [['✅ Accept / ❌ Reject', 'Current tracked change को accept या reject करता है।'], ['➡ Previous / Next', 'Tracked changes के बीच move करता है।'], ['🔒 Restrict Editing', 'दूसरों की editing या formatting limit करता है।']]]
    ]}
  },
  View: {
    image: 'View.png', icon: '👁️',
    en: { intro: 'The View Tab changes how a document is displayed and helps you work with long documents.', groups: ['Views', 'Show', 'Zoom', 'Window', 'Macros'], sections: [
      ['1️⃣ Views & Show', 'Changes document view and visible guides.', [['📄 Read Mode / Print Layout / Web Layout', 'Changes how the document is displayed on screen.'], ['📐 Outline / Draft', 'Shows heading structure or a simple text draft view.'], ['☑ Ruler / Gridlines / Navigation Pane', 'Shows measurement guides, grids or a heading/search panel.']]],
      ['2️⃣ Zoom', 'Makes the document easier to see.', [['🔍 Zoom / 100%', 'Changes magnification or returns to normal size.'], ['📄 One Page / Multiple Pages / Page Width', 'Fits one page, several pages or the page width on screen.']]],
      ['3️⃣ Window & Macros', 'Works with open document windows and automation.', [['🪟 New Window / Arrange All', 'Opens another view or arranges document windows.'], ['↔ Split / View Side by Side', 'Shows two parts or two documents together.'], ['⚙️ Macros', 'Runs, records or manages repeated automated tasks.']]]
    ]},
    hi: { intro: 'View Tab से document का display बदलते हैं और बड़े document के साथ आसानी से काम करते हैं।', groups: ['Views', 'Show', 'Zoom', 'Window', 'Macros'], sections: [
      ['1️⃣ Views & Show', 'Document view और guides बदलने के लिए।', [['📄 Read Mode / Print Layout / Web Layout', 'Screen पर document दिखने का तरीका बदलता है।'], ['📐 Outline / Draft', 'Heading structure या simple text draft view दिखाता है।'], ['☑ Ruler / Gridlines / Navigation Pane', 'Measurement guide, grid या heading/search panel दिखाता है।']]],
      ['2️⃣ Zoom', 'Document को आसानी से देखने के लिए।', [['🔍 Zoom / 100%', 'Magnification बदलता या normal size पर लाता है।'], ['📄 One Page / Multiple Pages / Page Width', 'Screen पर एक page, कई page या page width fit करता है।']]],
      ['3️⃣ Window & Macros', 'Open window और automation manage करने के लिए।', [['🪟 New Window / Arrange All', 'दूसरा view खोलता या windows arrange करता है।'], ['↔ Split / View Side by Side', 'एक document के दो parts या दो documents साथ दिखाता है।'], ['⚙️ Macros', 'Repeated automatic tasks को run, record या manage करता है।']]]
    ]}
  }
};

let currentLanguage = 'en';
let currentWordTab = 'Home';
const app = document.getElementById('app');
const esc = value => String(value).replace(/[&<>"']/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[char]));

function showHome() {
  app.innerHTML = `<section class="hero"><h1>Joining Hands Learning Lab</h1><p>Learn computer skills step by step, then build confidence with practical projects.</p></section><h2>Courses</h2><div class="grid">${Object.entries(courses).map(([course, lessons]) => `<article class="card"><h3>${esc(course)}</h3><p>${course === 'MS Word' ? 'Learn tabs and complete 14 practical projects.' : `${lessons.length} lessons/projects available.`}</p><button onclick="showCourse('${esc(course)}')">Start Learning</button></article>`).join('')}</div>`;
}

function showCourse(course) {
  if (course === 'MS Word') { showWordLanding(); return; }
  app.innerHTML = `<div class="page-top"><button class="back" onclick="showHome()">← Back to Courses</button></div><section class="hero"><h1>${esc(course)}</h1><p>Select a lesson to begin.</p></section>${lessonGrid(course)}`;
}

function showWordLanding() {
  app.innerHTML = `<div class="page-top"><button class="back" onclick="showHome()">← Back to Courses</button></div><section class="hero"><h1>MS Word</h1><p>First learn the tabs and tools, then practise with 14 guided projects.</p></section><div class="word-options"><article class="word-option-card"><div class="option-icon">📚</div><h2>Learning</h2><p>Learn the Home, Insert, Page Layout, References, Mailings, Review and View tabs.</p><button onclick="showWordLearning()">Start Learning</button></article><article class="word-option-card"><div class="option-icon">💻</div><h2>Practical Projects</h2><p>Open any of the 14 MS Word projects and follow the reference image.</p><button onclick="showWordProjects()">Start Projects</button></article></div>`;
}

function lessonGrid(course) { return `<div class="lesson-grid">${courses[course].map(item => `<article class="lesson-card">${item.image ? `<div class="project-image"><img src="${esc(item.image)}" alt="${esc(item.title)}" onerror="this.parentElement.style.display='none'"></div>` : ''}<h3>${esc(item.title)}</h3><p><strong>${esc(item.topic)}</strong></p><p>${esc(item.description)}</p>${item.duration ? `<p>⏱️ ${esc(item.duration)}</p>` : ''}<button onclick="showLesson('${esc(course)}',${item.id})">Open ${item.image ? 'Project' : 'Lesson'}</button></article>`).join('')}</div>`; }

function showWordProjects() { app.innerHTML = `<div class="page-top"><button class="back" onclick="showWordLanding()">← Back to MS Word</button></div><section class="hero"><h1>💻 MS Word Practical Projects</h1><p>Complete all 14 projects using the examples and step-by-step instructions.</p></section>${lessonGrid('MS Word')}`; }

function showLesson(course, id) {
  const item = courses[course].find(entry => entry.id === id); if (!item) return;
  const steps = item.steps || ['Open the relevant Microsoft Office application.', 'Study the lesson carefully.', 'Create your own version.', 'Check and save your work.'];
  app.innerHTML = `<div class="page-top"><button class="back" onclick="${course === 'MS Word' ? 'showWordProjects()' : `showCourse('${esc(course)}')`}">← Back to ${esc(course)}</button></div><article class="lesson-content"><header class="lesson-header"><h1>${esc(item.title)}</h1><h2>${esc(item.topic)}</h2><p>${esc(item.description)}</p>${item.duration ? `<p><strong>⏱️ Duration:</strong> ${esc(item.duration)}</p>` : ''}${item.objective ? `<p><strong>🎯 Objective:</strong> ${esc(item.objective)}</p>` : ''}</header>${item.image ? `<section class="example-section"><h2>📘 Example Project</h2><div class="example-image-container"><img class="example-image" src="${esc(item.image)}" alt="${esc(item.title)}" onclick="openImage('${esc(item.image)}')"></div><p class="image-note">🔍 Click the image to view it larger.</p></section>` : ''}${item.skills ? `<section><h2>Skills you will practise</h2><p>${esc(item.skills)}</p></section>` : ''}<section><h2>📝 Step-by-Step Instructions</h2><ol class="steps">${steps.map(step => `<li>${esc(step)}</li>`).join('')}</ol></section><section class="practice-box"><h2>🎯 Practice Task</h2><p>${esc(item.task || 'Create and save your own version of this work.')}</p><button onclick="startPractice()">💻 Start Practice</button><button class="help-button" onclick="showHelp('${esc(course)}',${id})">🤖 Ask AI Teacher</button></section></article>`;
}

function showWordLearning() { currentWordTab = currentWordTab || 'Home'; renderWordLearning(); }
function renderWordLearning() {
  const tab = wordTabs[currentWordTab]; const copy = tab[currentLanguage];
  app.innerHTML = `<div class="page-top"><button class="back" onclick="showWordLanding()">← Back to MS Word</button><div class="language-toggle"><button class="${currentLanguage === 'en' ? 'active' : ''}" onclick="setLanguage('en')">English</button><button class="${currentLanguage === 'hi' ? 'active' : ''}" onclick="setLanguage('hi')">Hindi + English</button></div></div><section class="hero"><h1>📚 MS Word Learning</h1><p>Choose a tab, view its ribbon image and learn each important tool.</p></section><nav class="tab-menu">${Object.entries(wordTabs).map(([name, item]) => `<button class="${name === currentWordTab ? 'active' : ''}" onclick="setWordTab('${name}')">${item.icon} ${name}</button>`).join('')}</nav><section class="learning-title"><h1>MS Word – ${esc(currentWordTab)} Tab</h1><p>${esc(copy.intro)}</p><p><strong>${currentLanguage === 'en' ? 'Main Groups:' : 'मुख्य Groups:'}</strong> ${copy.groups.join(' • ')}</p></section><section class="learning-image-box"><img src="${esc(tab.image)}" alt="MS Word ${esc(currentWordTab)} Tab" class="word-tab-image" onclick="openImage('${esc(tab.image)}')" onerror="this.style.display='none'"><p class="image-note">🔍 ${currentLanguage === 'en' ? 'Click the image to view it larger.' : 'Image को बड़ा देखने के लिए click करें।'}</p></section>${copy.sections.map(([heading, description, tools]) => `<section class="note-section"><h2>${heading}</h2><p>${description}</p><div class="tool-grid">${tools.map(([title, note, shortcut]) => `<article class="mini-tool"><h3>${title}</h3><p>${note}</p>${shortcut ? `<span class="shortcut">${shortcut}</span>` : ''}</article>`).join('')}</div></section>`).join('')}<section class="practice-box"><h2>${currentLanguage === 'en' ? 'Practice idea' : 'Practice करें'}</h2><p>${currentLanguage === 'en' ? `Open MS Word and try two tools from the ${currentWordTab} Tab in a new blank document.` : `MS Word खोलें और नए blank document में ${currentWordTab} Tab के दो tools का use करें।`}</p><button onclick="showWordProjects()">${currentLanguage === 'en' ? 'Start 14 Projects' : '14 Projects शुरू करें'}</button></section>`;
}
function setLanguage(language) { currentLanguage = language; renderWordLearning(); }
function setWordTab(tab) { currentWordTab = tab; renderWordLearning(); }

function startPractice() { alert('Practice Time!\n\n1. Open Microsoft Word.\n2. Create a new blank document.\n3. Keep the example open for reference.\n4. Create your own version.\n5. Save your completed work.'); }
function openImage(src) { document.body.insertAdjacentHTML('beforeend', `<div class="modal" id="imageModal" onclick="if(event.target===this) closeModal('imageModal')"><div class="modal-card"><button class="close" aria-label="Close" onclick="closeModal('imageModal')">×</button><img src="${esc(src)}" alt="Preview" style="display:block;max-width:100%;max-height:80vh;margin:auto;object-fit:contain"></div></div>`); }
function closeModal(id) { document.getElementById(id)?.remove(); }
function showHelp(course, id) { const item = courses[course].find(entry => entry.id === Number(id)); document.body.insertAdjacentHTML('beforeend', `<div class="modal" id="helpModal" onclick="if(event.target===this) closeModal('helpModal')"><div class="modal-card"><button class="close" aria-label="Close" onclick="closeModal('helpModal')">×</button><h2>🤖 Ask Your AI Teacher</h2><p>You are working on <strong>${esc(item?.title || 'this lesson')}</strong>. Ask about the project or an MS Word tool.</p><textarea id="studentQuestion" placeholder="Example: How do I insert a table in MS Word?"></textarea><button onclick="askQuestion('${esc(course)}',${id})">Ask Question</button><div id="helpAnswer"></div></div></div>`); }
function askQuestion(course, id) { const question = document.getElementById('studentQuestion').value.trim(); const answer = document.getElementById('helpAnswer'); const item = courses[course].find(entry => entry.id === Number(id)); if (!question) { answer.innerHTML = '<div class="answer">Please type your question first.</div>'; return; } const lower = question.toLowerCase(); let reply = `For ${item?.topic || 'this lesson'}, first study the example, then work one step at a time. ${item?.skills ? `Useful skills: ${item.skills}.` : ''}`; if (lower.includes('table')) reply = 'To insert a table: open Insert Tab → Table → select the required rows and columns. Then type your data and use Table Design for borders.'; else if (lower.includes('image') || lower.includes('picture')) reply = 'To insert a picture: open Insert Tab → Pictures → This Device, choose the image, then use Picture Format to resize and position it.'; else if (lower.includes('save')) reply = 'Press Ctrl + S, choose a folder, give the file a clear name, and select Word Document (*.docx).'; else if (lower.includes('align')) reply = 'Select the text, then use Home Tab → Paragraph. Use Ctrl + L for left, Ctrl + E for centre, Ctrl + R for right, and Ctrl + J for justify.'; answer.innerHTML = `<div class="answer"><strong>Answer:</strong> ${esc(reply)}</div>`; }

showHome();
