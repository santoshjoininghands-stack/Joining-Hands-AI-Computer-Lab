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


const tabImageFiles = {
  home: "Home.png",
  insert: "Insert.png",
  layout: "Page Layout.png",
  references: "References.png",
  mailings: "Mailing.png",
  review: "Review.png",
  view: "View.png",
  design: "Design.png"
};


const tools = {

  home: [
    { name:"Clipboard", icon:"📋" }, { name:"Cut", icon:"✂️" }, { name:"Copy", icon:"📄" },
    { name:"Paste", icon:"📋" }, { name:"Format Painter", icon:"🖌️" }, { name:"Font", icon:"🔤" },
    { name:"Font Size", icon:"🔠" }, { name:"Bold", icon:"B" }, { name:"Italic", icon:"I" },
    { name:"Underline", icon:"U" }, { name:"Text Effects", icon:"✨" }, { name:"Text Highlight", icon:"🖍️" },
    { name:"Font Color", icon:"🎨" }, { name:"Paragraph", icon:"¶" }, { name:"Bullets", icon:"•" },
    { name:"Numbering", icon:"1." }, { name:"Alignment", icon:"☰" }, { name:"Line & Paragraph Spacing", icon:"↕️" },
    { name:"Indent", icon:"↔️" }, { name:"Borders & Shading", icon:"▣" }, { name:"Styles", icon:"🖌️" },
    { name:"Editing", icon:"✏️" }, { name:"Find", icon:"🔎" }, { name:"Replace", icon:"🔁" }, { name:"Select", icon:"☑️" }
  ],

  insert: [
    { name:"Cover Page", icon:"📄" }, { name:"Blank Page", icon:"📄" }, { name:"Page Break", icon:"↵" },
    { name:"Table", icon:"▦" }, { name:"Pictures", icon:"🏞️" }, { name:"Shapes", icon:"◆" },
    { name:"Icons", icon:"⭐" }, { name:"3D Models", icon:"🧊" }, { name:"SmartArt", icon:"🔷" },
    { name:"Chart", icon:"📊" }, { name:"Screenshot", icon:"📷" }, { name:"Get Add-ins", icon:"🧩" },
    { name:"Link", icon:"🔗" }, { name:"Bookmark", icon:"🔖" }, { name:"Cross-reference", icon:"🔀" },
    { name:"Comment", icon:"💬" }, { name:"Header", icon:"⬆️" }, { name:"Footer", icon:"⬇️" },
    { name:"Page Number", icon:"🔢" }, { name:"Text Box", icon:"▭" }, { name:"WordArt", icon:"🔤" },
    { name:"Drop Cap", icon:"A" }, { name:"Date & Time", icon:"📅" }, { name:"Object", icon:"📦" },
    { name:"Equation", icon:"∑" }, { name:"Symbol", icon:"Ω" }
  ],

  layout: [
    { name:"Margins", icon:"📏" }, { name:"Orientation", icon:"↔️" }, { name:"Size", icon:"📐" },
    { name:"Columns", icon:"▥" }, { name:"Breaks", icon:"↩️" }, { name:"Line Numbers", icon:"🔢" },
    { name:"Hyphenation", icon:"➖" }, { name:"Indent Left", icon:"⬅️" }, { name:"Indent Right", icon:"➡️" },
    { name:"Spacing Before", icon:"⬆️" }, { name:"Spacing After", icon:"⬇️" }, { name:"Position", icon:"📍" },
    { name:"Wrap Text", icon:"🔄" }, { name:"Bring Forward", icon:"⬆️" }, { name:"Send Backward", icon:"⬇️" },
    { name:"Selection Pane", icon:"👁️" }, { name:"Align", icon:"📐" }, { name:"Group", icon:"🔗" }, { name:"Rotate", icon:"🔄" }
  ],

  references: [
    { name:"Table of Contents", icon:"📑" }, { name:"Add Text to TOC", icon:"➕" }, { name:"Update Table", icon:"🔄" },
    { name:"Insert Footnote", icon:"¹" }, { name:"Insert Endnote", icon:"²" }, { name:"Next Footnote", icon:"➡️" },
    { name:"Show Notes", icon:"📝" }, { name:"Insert Citation", icon:"📚" }, { name:"Manage Sources", icon:"🗂️" },
    { name:"Citation Style", icon:"🎓" }, { name:"Bibliography", icon:"📖" }, { name:"Insert Caption", icon:"🏷️" },
    { name:"Cross-reference", icon:"🔀" }, { name:"Mark Entry", icon:"📌" }, { name:"Insert Index", icon:"📇" },
    { name:"Update Index", icon:"🔄" }, { name:"Table of Authorities", icon:"⚖️" }
  ],

  mailings: [
    { name:"Envelopes", icon:"✉️" }, { name:"Labels", icon:"🏷️" }, { name:"Start Mail Merge", icon:"📨" },
    { name:"Select Recipients", icon:"👥" }, { name:"Edit Recipient List", icon:"📝" }, { name:"Address Block", icon:"📮" },
    { name:"Greeting Line", icon:"👋" }, { name:"Insert Merge Field", icon:"🔖" }, { name:"Rules", icon:"⚙️" },
    { name:"Match Fields", icon:"🔗" }, { name:"Update Labels", icon:"🔄" }, { name:"Preview Results", icon:"👁️" },
    { name:"Find Recipient", icon:"🔎" }, { name:"Check for Errors", icon:"⚠️" }, { name:"Finish & Merge", icon:"✅" }
  ],

  review: [
    { name:"Spelling & Grammar", icon:"✓" }, { name:"Editor", icon:"📝" }, { name:"Thesaurus", icon:"📖" },
    { name:"Word Count", icon:"🔢" }, { name:"Read Aloud", icon:"🔊" }, { name:"New Comment", icon:"💬" },
    { name:"Delete Comment", icon:"🗑️" }, { name:"Previous Comment", icon:"⬅️" }, { name:"Next Comment", icon:"➡️" },
    { name:"Track Changes", icon:"🔄" }, { name:"Show Markup", icon:"👁️" }, { name:"Accept Changes", icon:"✅" },
    { name:"Reject Changes", icon:"❌" }, { name:"Previous Change", icon:"⬅️" }, { name:"Next Change", icon:"➡️" },
    { name:"Compare", icon:"⚖️" }, { name:"Combine", icon:"🔗" }, { name:"Restrict Editing", icon:"🔒" }, { name:"Language", icon:"🌐" }
  ],

  view: [
    { name:"Read Mode", icon:"📖" }, { name:"Print Layout", icon:"🖨️" }, { name:"Web Layout", icon:"🌐" },
    { name:"Outline", icon:"☷" }, { name:"Draft", icon:"📄" }, { name:"Ruler", icon:"📏" }, { name:"Gridlines", icon:"▦" },
    { name:"Navigation Pane", icon:"🧭" }, { name:"Zoom", icon:"🔍" }, { name:"100% Zoom", icon:"💯" },
    { name:"One Page", icon:"📄" }, { name:"Multiple Pages", icon:"📚" }, { name:"Page Width", icon:"↔️" },
    { name:"New Window", icon:"🪟" }, { name:"Arrange All", icon:"▦" }, { name:"Split", icon:"↕️" },
    { name:"View Side by Side", icon:"↔️" }, { name:"Synchronous Scrolling", icon:"🔄" }
  ],

  design: [
    { name:"Themes", icon:"🎨" }, { name:"Theme Colors", icon:"🌈" }, { name:"Theme Fonts", icon:"🔤" },
    { name:"Theme Effects", icon:"✨" }, { name:"Paragraph Spacing", icon:"↕️" }, { name:"Set as Default", icon:"⭐" },
    { name:"Watermark", icon:"💧" }, { name:"Page Color", icon:"🖌️" }, { name:"Page Borders", icon:"▣" }
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

  language: "hi",

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
   LANGUAGE + EASY EXPLANATIONS
   ========================================================= */

const uiText = {
  hi: {
    welcome: "वापसी पर स्वागत है! 👋",
    title: "Computer Learning",
    subtitle: "हर tool को step-by-step सीखें, practice करें और practical projects पूरा करें। 🎓",
    hindi: "हिन्दी 🌐",
    english: "English 🌐",
    msWord: "MS Word",
    wordSubtitle: "MS Word के सभी महत्वपूर्ण tabs को examples के साथ step-by-step सीखें।",
    toolsIn: "Tools in",
    tab: "Tab",
    interface: "Microsoft Word interface",
    fullscreen: "पूरी स्क्रीन में देखें",
    notAvailable: "image उपलब्ध नहीं है",
    what: "यह क्या करता है?",
    when: "इसे कब उपयोग करना चाहिए?",
    example: "Real-life example",
    how: "इस option को कैसे उपयोग करें?",
    practice: "Practice Task",
    practiceText: "Microsoft Word में इसे खुद करके देखें। एक ही काम को 2–3 बार दोहराएँ ताकि आप इसे बिना मदद के कर सकें।",
    chooseOption: "बाएँ panel से कोई option चुनें।",
    welcomeChoose: "MS Word चुनें और learning शुरू करें।",
    viewFull: "Full Screen",
    back: "Back"
  },
  en: {
    welcome: "Welcome back! 👋",
    title: "Computer Learning",
    subtitle: "Learn every tool step-by-step, practice it, and complete practical projects. 🎓",
    hindi: "हिन्दी 🌐",
    english: "English 🌐",
    msWord: "MS Word",
    wordSubtitle: "Learn every important MS Word tab step-by-step with clear examples.",
    toolsIn: "Tools in",
    tab: "Tab",
    interface: "Microsoft Word interface",
    fullscreen: "View Full Screen",
    notAvailable: "image is not available",
    what: "What does it do?",
    when: "When should you use it?",
    example: "Real-life example",
    how: "How to use this option?",
    practice: "Practice Task",
    practiceText: "Open Microsoft Word and practice this option yourself. Repeat it 2–3 times so you can use it without help.",
    chooseOption: "Choose an option from the left panel.",
    welcomeChoose: "Choose MS Word to start learning.",
    viewFull: "Full Screen",
    back: "Back"
  }
};

/*
  These are written as simple, classroom-friendly Hindi rather than
  literal word-for-word translations. Microsoft Word command names
  remain in English because that is what students see on the screen.
*/
const hindiLessonDetails = {
  "Clipboard": [
    "Clipboard वह temporary जगह है जहाँ Cut या Copy किया हुआ text, picture, table या formatting रखी जाती है। बाद में इसी content को दूसरी जगह Paste किया जा सकता है।",
    "जब आपको किसी content को दूसरी जगह ले जाना, उसकी copy बनाना या उसे दोबारा इस्तेमाल करना हो, तब Clipboard उपयोगी है।"
  ],
  "Cut": [
    "Cut चुने हुए content को उसकी original जगह से हटाकर Clipboard में रखता है। इससे content को दूसरी जगह move किया जा सकता है।",
    "जब आपको text, picture या table को एक जगह से हटाकर दूसरी जगह ले जाना हो, तब Cut करें।"
  ],
  "Copy": [
    "Copy चुने हुए content की duplicate copy बनाता है, लेकिन original content अपनी जगह पर बना रहता है।",
    "जब वही information document में एक से अधिक जगह चाहिए, तब Copy उपयोग करें।"
  ],
  "Paste": [
    "Paste Clipboard में रखे हुए content को cursor की वर्तमान जगह पर डालता है।",
    "जब आपने कुछ Copy या Cut किया हो और उसे दूसरी जगह रखना हो, तब Paste करें।"
  ],
  "Format Painter": [
    "Format Painter किसी text की formatting—जैसे font, size, color और paragraph style—को copy करके दूसरे text पर लगा देता है।",
    "जब दो अलग-अलग हिस्सों की formatting बिल्कुल एक जैसी करनी हो, तब Format Painter उपयोग करें।"
  ],
  "Font": [
    "Font चुने हुए text का अक्षर-रूप बदलता है, जैसे Arial, Calibri या Times New Roman।",
    "जब document को किसी खास font में लिखना हो या text को अधिक readable बनाना हो, तब Font बदलें।"
  ],
  "Font Size": [
    "Font Size चुने हुए text के अक्षरों का आकार बदलता है। Heading को बड़ा और normal text को छोटा रखने के लिए इसका उपयोग किया जाता है।",
    "जब heading, body text, caption या किसी important word का size बदलना हो, तब Font Size उपयोग करें।"
  ],
  "Bold": [
    "Bold text को ज्यादा गहरा और मोटा दिखाता है, जिससे वह आसपास के text से तुरंत अलग दिखाई देता है।",
    "Headings, important words या किसी key point को highlight करने के लिए Bold उपयोग करें।"
  ],
  "Italic": [
    "Italic text को थोड़ा तिरछा दिखाता है। इससे किसी word या phrase पर हल्का emphasis दिया जा सकता है।",
    "Book titles, special terms, notes या किसी शब्द पर emphasis देने के लिए Italic उपयोग करें।"
  ],
  "Underline": [
    "Underline चुने हुए text के नीचे line लगाता है।",
    "जब किसी word, heading या information को underline करके अलग दिखाना आवश्यक हो, तब इसका उपयोग करें।"
  ],
  "Text Effects": [
    "Text Effects text पर outline, shadow, glow या reflection जैसे decorative effects लगाता है।",
    "Posters, certificates, creative headings या titles को आकर्षक बनाने के लिए इसका उपयोग करें।"
  ],
  "Text Highlight": [
    "Text Highlight text के पीछे रंगीन background लगाता है, जैसे marker से किसी sentence को highlight करना।",
    "Important information, instructions या exam notes में key points को जल्दी पहचानने के लिए उपयोग करें।"
  ],
  "Font Color": [
    "Font Color चुने हुए text का रंग बदलता है।",
    "Important information को अलग दिखाने या document की color scheme के अनुसार text format करने के लिए उपयोग करें।"
  ],
  "Paragraph": [
    "Paragraph group में alignment, bullets, numbering, indentation, line spacing और paragraph borders जैसी formatting controls मिलती हैं।",
    "जब पूरे paragraph की position, spacing या structure बदलना हो, तब Paragraph options उपयोग करें।"
  ],
  "Bullets": [
    "Bullets items की ऐसी list बनाते हैं जिसमें हर item के आगे bullet symbol होता है।",
    "जब list के items का कोई fixed order नहीं है—जैसे सामान की list या requirements—तब Bullets उपयोग करें।"
  ],
  "Numbering": [
    "Numbering items को 1, 2, 3... जैसी क्रमबद्ध list में बदलता है।",
    "Steps, instructions, procedure या किसी क्रम वाली list के लिए Numbering उपयोग करें।"
  ],
  "Alignment": [
    "Alignment paragraph को Left, Center, Right या Justify position में रखता है।",
    "जब text की horizontal position बदलनी हो, जैसे heading को center करना या report को justify करना हो, तब उपयोग करें।"
  ],
  "Line & Paragraph Spacing": [
    "यह lines के बीच और paragraphs के बीच की खाली जगह को नियंत्रित करता है।",
    "जब document बहुत crowded या बहुत खुला दिखाई दे, या किसी formatting requirement के अनुसार spacing चाहिए, तब उपयोग करें।"
  ],
  "Indent": [
    "Indent paragraph को left या right margin से थोड़ा अंदर ले जाता है।",
    "Quotes, lists या structured text को main paragraph से अलग दिखाने के लिए उपयोग करें।"
  ],
  "Borders & Shading": [
    "Borders और Shading paragraph या selected content के चारों ओर border या पीछे background color लगाते हैं।",
    "Notes, headings, important instructions या sections को अलग दिखाने के लिए उपयोग करें।"
  ],
  "Styles": [
    "Styles पहले से तैयार formatting का एक consistent set है। Heading 1, Heading 2 और Title जैसे styles document को व्यवस्थित रखते हैं।",
    "Long report या notes में headings को एक जैसा रखने और automatic Table of Contents बनाने के लिए Styles बहुत उपयोगी हैं।"
  ],
  "Editing": [
    "Editing group में Find, Replace और Select जैसे commands मिलते हैं, जिनसे document को जल्दी edit किया जा सकता है।",
    "Long document में किसी word को ढूँढना, बदलना या पूरा content select करना हो, तब इसका उपयोग करें।"
  ],
  "Find": [
    "Find document में किसी word या phrase को जल्दी खोजता है और उसके matches दिखाता है।",
    "जब 10–20 page के document में कोई specific word या name जल्दी ढूँढना हो, तब Find उपयोग करें।"
  ],
  "Replace": [
    "Replace किसी पुराने word या phrase को खोजकर उसकी जगह नया word या phrase डालता है।",
    "जब एक ही spelling या term document में कई जगह बदलनी हो, तब Replace उपयोग करें।"
  ],
  "Select": [
    "Select command document के text या objects को जल्दी चुनने में मदद करता है।",
    "जब पूरे document, समान formatting वाले text या किसी specific part को एक साथ select करना हो, तब उपयोग करें।"
  ],
  "Cover Page": [
    "Cover Page document के लिए ready-made title page designs देता है।",
    "Project report, assignment या formal report की शुरुआत में professional cover page बनाने के लिए उपयोग करें।"
  ],
  "Blank Page": [
    "Blank Page cursor की जगह पर एक पूरी खाली page जोड़ता है।",
    "जब document के बीच या अंत में नया section शुरू करने के लिए पूरा खाली page चाहिए, तब उपयोग करें।"
  ],
  "Page Break": [
    "Page Break current page को वहीं समाप्त करके अगला content नई page से शुरू करता है।",
    "जब नया chapter, question या section नई page से शुरू करना हो, तब Page Break उपयोग करें।"
  ],
  "Table": [
    "Table rows और columns में information को व्यवस्थित करता है।",
    "Marks, fees, attendance, timetable या comparison data को साफ तरीके से दिखाने के लिए Table उपयोग करें।"
  ],
  "Pictures": [
    "Pictures computer या device से image को document में insert करता है।",
    "Logo, student photo, certificate image, screenshot या किसी diagram को document में जोड़ने के लिए उपयोग करें।"
  ],
  "Shapes": [
    "Shapes document में arrows, rectangles, circles, lines और दूसरे drawing objects जोड़ता है।",
    "Flowchart, diagram, labels या किसी important area को visually explain करने के लिए उपयोग करें।"
  ],
  "Icons": [
    "Icons छोटे ready-made symbols और graphics होते हैं जिन्हें document में insert किया जा सकता है।",
    "Training notes, posters या presentations में concepts को visual बनाने के लिए उपयोग करें।"
  ],
  "3D Models": [
    "3D Models document में three-dimensional objects insert करने की सुविधा देता है।",
    "Science, engineering या educational material में किसी object को 3D रूप में दिखाने के लिए उपयोग करें।"
  ],
  "SmartArt": [
    "SmartArt information को process, hierarchy, cycle या relationship जैसे visual diagrams में बदलता है।",
    "Organization chart, process steps या किसी concept की structure समझाने के लिए उपयोग करें।"
  ],
  "Chart": [
    "Chart numerical data को bar, column, line, pie आदि graphical form में दिखाता है।",
    "Marks, monthly expenses, attendance या sales data का comparison visually दिखाने के लिए उपयोग करें।"
  ],
  "Screenshot": [
    "Screenshot computer screen या खुले window का snapshot document में डालता है।",
    "Software training notes में किसी button या screen का visual example देने के लिए उपयोग करें।"
  ],
  "Get Add-ins": [
    "Get Add-ins Microsoft Word में अतिरिक्त features और supported add-ins खोजने और जोड़ने देता है।",
    "जब Word में कोई अतिरिक्त supported feature चाहिए जो default tools में नहीं है, तब उपयोग करें।"
  ],
  "Link": [
    "Link किसी text या object को website, file, email address या document location से जोड़ता है।",
    "Report में website source या किसी दूसरे section तक one-click access देने के लिए उपयोग करें।"
  ],
  "Bookmark": [
    "Bookmark document में किसी खास location को नाम देकर याद रखता है।",
    "Long document में किसी important section पर बाद में जल्दी वापस जाने के लिए उपयोग करें।"
  ],
  "Cross-reference": [
    "Cross-reference document के किसी heading, figure, table या दूसरे numbered item का reference insert करता है।",
    "Report में 'देखें Figure 2' या किसी दूसरे section का reference automatically जोड़ने के लिए उपयोग करें।"
  ],
  "Comment": [
    "Comment main text बदले बिना किसी हिस्से पर review note या feedback जोड़ता है।",
    "Teacher को student के assignment पर suggestion देना हो या team member से question पूछना हो, तब उपयोग करें।"
  ],
  "Header": [
    "Header page के ऊपर वाले margin में बार-बार दिखाई देने वाला content रखता है।",
    "हर page के ऊपर 'Joining Hands', document title या logo दिखाने के लिए Header उपयोग करें।"
  ],
  "Footer": [
    "Footer page के नीचे वाले margin में बार-बार दिखाई देने वाला content रखता है।",
    "हर page के नीचे page number, document name, date या contact information दिखाने के लिए Footer उपयोग करें।"
  ],
  "Page Number": [
    "Page Number pages पर automatic numbering लगाता है। Number बदलने पर Word बाकी pages की numbering भी automatically संभालता है।",
    "Assignments, reports, books और लंबे documents में pages को क्रम से पहचानने के लिए उपयोग करें।"
  ],
  "Text Box": [
    "Text Box एक movable box के अंदर text रखने देता है।",
    "Side note, label, callout या poster-style layout बनाने के लिए उपयोग करें।"
  ],
  "WordArt": [
    "WordArt decorative और stylized text बनाता है।",
    "Poster, certificate या creative title में बड़े आकर्षक heading के लिए उपयोग करें।"
  ],
  "Drop Cap": [
    "Drop Cap paragraph के पहले अक्षर को बड़ा और decorative बनाता है।",
    "Magazine-style article या creative document की शुरुआत को आकर्षक बनाने के लिए उपयोग करें।"
  ],
  "Date & Time": [
    "Date & Time document में चुने हुए format में current date या time insert करता है।",
    "Letters, forms, reports या official documents में तारीख डालने के लिए उपयोग करें।"
  ],
  "Object": [
    "Object किसी supported file या दूसरे application का object Word document में insert या embed करता है।",
    "Word report में Excel worksheet या दूसरे supported file/object को शामिल करना हो, तब उपयोग करें।"
  ],
  "Equation": [
    "Equation mathematical formulas और equations को साफ और professional तरीके से लिखने के tools देता है।",
    "Maths, science, engineering या academic notes में formulas लिखने के लिए उपयोग करें।"
  ],
  "Symbol": [
    "Symbol ऐसे special characters insert करता है जो keyboard पर सीधे उपलब्ध नहीं होते।",
    "₹, ©, ±, Ω, Greek letters या mathematical symbols डालने के लिए उपयोग करें।"
  ],
  "Margins": [
    "Margins page के चारों ओर खाली जगह की चौड़ाई नियंत्रित करता है।",
    "School/college assignment, official form या printing requirement के अनुसार page margins सेट करने के लिए उपयोग करें।"
  ],
  "Orientation": [
    "Orientation page को Portrait या Landscape में बदलता है।",
    "Wide table या chart के लिए Landscape और सामान्य document के लिए Portrait उपयोग करें।"
  ],
  "Size": [
    "Size paper का आकार चुनता है, जैसे A4 या Letter।",
    "Printing से पहले document को उस paper size के अनुसार सेट करने के लिए उपयोग करें जिस पर print लेना है।"
  ],
  "Columns": [
    "Columns text को दो या अधिक vertical columns में बाँटता है।",
    "Newsletter, newspaper-style article या brochure layout बनाने के लिए उपयोग करें।"
  ],
  "Breaks": [
    "Breaks page, section और column को अलग करने के लिए अलग-अलग breaks देता है।",
    "जब document के अलग हिस्सों में अलग layout, header/footer या page orientation चाहिए, तब Section Break विशेष रूप से उपयोगी है।"
  ],
  "Line Numbers": [
    "Line Numbers document के text के साथ line numbers दिखाता है।",
    "Legal, technical, academic या review documents में किसी specific line का reference देने के लिए उपयोग करें।"
  ],
  "Hyphenation": [
    "Hyphenation line के अंत में लंबे शब्दों को जरूरत के अनुसार hyphen के साथ तोड़ने की सुविधा नियंत्रित करता है।",
    "Justified text या narrow columns में text flow बेहतर करने के लिए उपयोग करें।"
  ],
  "Indent Left": [
    "Indent Left paragraph को left margin से अंदर की ओर ले जाता है।",
    "Quote या किसी section को बाकी text से थोड़ा अंदर दिखाने के लिए उपयोग करें।"
  ],
  "Indent Right": [
    "Indent Right paragraph की right side को margin से अंदर करता है।",
    "Short note, quotation या special block का width कम करने के लिए उपयोग करें।"
  ],
  "Spacing Before": [
    "Spacing Before paragraph शुरू होने से पहले extra space देता है।",
    "Heading और उसके ऊपर वाले paragraph के बीच साफ दूरी रखने के लिए उपयोग करें।"
  ],
  "Spacing After": [
    "Spacing After paragraph खत्म होने के बाद extra space देता है।",
    "हर paragraph के बीच consistent gap रखने के लिए उपयोग करें, बजाय बार-बार Enter दबाने के।"
  ],
  "Position": [
    "Position selected picture या object को page पर predefined जगह पर रखता है।",
    "Logo या image को page के top-right, center या किसी fixed location पर रखने के लिए उपयोग करें।"
  ],
  "Wrap Text": [
    "Wrap Text तय करता है कि picture या object के आसपास text कैसे flow करेगा।",
    "Image को text के side में रखने, text के पीछे रखने या text के ऊपर रखने के लिए उपयोग करें।"
  ],
  "Bring Forward": [
    "Bring Forward overlapping objects में selected object को आगे लाता है।",
    "जब कोई picture या shape दूसरे object के पीछे छिप जाए, तब उसे आगे लाने के लिए उपयोग करें।"
  ],
  "Send Backward": [
    "Send Backward selected object को दूसरे overlapping objects के पीछे भेजता है।",
    "जब background shape या image को text/object के पीछे रखना हो, तब उपयोग करें।"
  ],
  "Selection Pane": [
    "Selection Pane document में मौजूद objects की list दिखाता है और उन्हें select, hide या reorder करने में मदद करता है।",
    "जब page पर बहुत सारी pictures और shapes हों और किसी एक object को select करना मुश्किल हो, तब उपयोग करें।"
  ],
  "Align": [
    "Align कई selected objects को एक सीधी line या समान position में व्यवस्थित करता है।",
    "कई shapes, pictures या text boxes को perfectly line up करने के लिए उपयोग करें।"
  ],
  "Group": [
    "Group कई selected objects को एक single group में जोड़ता है ताकि वे साथ move या resize हो सकें।",
    "Logo और उसके text box को साथ move करना हो, तब Group उपयोग करें।"
  ],
  "Rotate": [
    "Rotate picture, shape या object को घुमाने की सुविधा देता है।",
    "Arrow, diagram या picture का angle बदलने के लिए उपयोग करें।"
  ],
  "Table of Contents": [
    "Table of Contents document की headings से automatic contents list बनाता है और page numbers दिखा सकता है।",
    "Long project report, book या training notes में readers को chapters जल्दी ढूँढने के लिए उपयोग करें।"
  ],
  "Add Text to TOC": [
    "Add Text to TOC चुने हुए heading को Table of Contents में शामिल करने के लिए उसकी outline level सेट करता है।",
    "जब कोई heading automatic TOC में नहीं आ रही हो, तब उसे सही level देने के लिए उपयोग करें।"
  ],
  "Update Table": [
    "Update Table Table of Contents के headings और page numbers को नए document changes के अनुसार update करता है।",
    "जब आपने headings या pages बदले हों और TOC पुराना दिखाई दे, तब उपयोग करें।"
  ],
  "Insert Footnote": [
    "Footnote page के नीचे किसी statement के बारे में additional information या source देता है।",
    "Research report में किसी fact का source या छोटा explanation उसी page पर देना हो, तब उपयोग करें।"
  ],
  "Insert Endnote": [
    "Endnote additional notes या references को document के अंत में रखता है।",
    "Research या academic document में detailed references को अंत में collect करने के लिए उपयोग करें।"
  ],
  "Next Footnote": [
    "Next Footnote document में अगले footnote पर जल्दी ले जाता है।",
    "जब document में बहुत सारे footnotes हों और उन्हें एक-एक करके review करना हो, तब उपयोग करें।"
  ],
  "Show Notes": [
    "Show Notes footnotes या endnotes के note area को खोलकर उनका content देखने देता है।",
    "जब notes को review या edit करना हो, तब उपयोग करें।"
  ],
  "Insert Citation": [
    "Insert Citation किसी source का citation document में जोड़ता है।",
    "Research project में website, book या article से ली गई information का source record करने के लिए उपयोग करें।"
  ],
  "Manage Sources": [
    "Manage Sources saved citations और references की list को add, edit और manage करने देता है।",
    "एक research project में कई books, websites और articles के sources संभालने के लिए उपयोग करें।"
  ],
  "Citation Style": [
    "Citation Style citations और bibliography का format चुनता है, जैसे APA या MLA।",
    "College research assignment में teacher या institution द्वारा दिए गए citation style को follow करने के लिए उपयोग करें।"
  ],
  "Bibliography": [
    "Bibliography document में उपयोग किए गए sources की formatted list बनाता है।",
    "Research report या project के अंत में books, websites और articles की source list देने के लिए उपयोग करें।"
  ],
  "Insert Caption": [
    "Caption picture, table या figure के नीचे या ऊपर उसका नाम और number जोड़ता है।",
    "Report में 'Figure 1: Student Attendance Chart' जैसे labels बनाने के लिए उपयोग करें।"
  ],
  "Mark Entry": [
    "Mark Entry किसी selected text को Index में शामिल करने के लिए mark करता है।",
    "Book या long reference document में important terms का index बनाते समय उपयोग करें।"
  ],
  "Insert Index": [
    "Index document के marked terms की alphabetical list और उनके page numbers बनाता है।",
    "Large book, manual या reference guide में किसी term को जल्दी ढूँढने के लिए उपयोग करें।"
  ],
  "Update Index": [
    "Update Index marked entries और page numbers को document में हुए changes के अनुसार update करता है।",
    "जब index बनने के बाद document की pages या terms बदलें, तब उपयोग करें।"
  ],
  "Table of Authorities": [
    "Table of Authorities legal document में cited cases, statutes या authorities की सूची बनाने के लिए उपयोग होता है।",
    "Legal documents में references को व्यवस्थित और जल्दी खोजने के लिए उपयोग करें।"
  ],
  "Envelopes": [
    "Envelopes mailing के लिए envelope पर address और return address print करने में मदद करता है।",
    "Official letter भेजते समय सही recipient address वाले envelope को print करने के लिए उपयोग करें।"
  ],
  "Labels": [
    "Labels अलग-अलग mailing या identification labels बनाने और print करने देता है।",
    "Address stickers, file labels या product labels बनाने के लिए उपयोग करें।"
  ],
  "Start Mail Merge": [
    "Mail Merge एक ही document को अलग-अलग recipients की information के साथ automatically तैयार करता है।",
    "100 students को अलग-अलग नाम के scholarship letters भेजने के लिए Mail Merge बहुत उपयोगी है।"
  ],
  "Select Recipients": [
    "Select Recipients Mail Merge के लिए names, addresses या दूसरी recipient information का data source चुनता है।",
    "Excel sheet में रखे students या customers की list को Word letter से जोड़ने के लिए उपयोग करें।"
  ],
  "Edit Recipient List": [
    "Edit Recipient List चुने गए recipients को filter, sort, select या remove करने देता है।",
    "जब mail merge केवल कुछ students या selected customers को भेजना हो, तब उपयोग करें।"
  ],
  "Address Block": [
    "Address Block recipient का नाम और address predefined format में insert करता है।",
    "Mail Merge letter में हर व्यक्ति का पूरा postal address automatically डालने के लिए उपयोग करें।"
  ],
  "Greeting Line": [
    "Greeting Line हर recipient के लिए personalized greeting बनाता है, जैसे Dear Rahul।",
    "Bulk letters में हर person को उसके नाम से संबोधित करने के लिए उपयोग करें।"
  ],
  "Insert Merge Field": [
    "Insert Merge Field Excel या दूसरे data source की specific information, जैसे Name या Phone, document में डालता है।",
    "हर student के letter में अलग name, course या amount automatically दिखाने के लिए उपयोग करें।"
  ],
  "Rules": [
    "Rules Mail Merge में conditions के आधार पर अलग content दिखाने की सुविधा देता है।",
    "उदाहरण के लिए अलग category वाले recipients को अलग message देना हो, तब उपयोग करें।"
  ],
  "Match Fields": [
    "Match Fields Word को बताता है कि data source के कौन से columns Name, Address या City जैसे fields से match करते हैं।",
    "जब Excel sheet के column names Word के default field names से अलग हों, तब उपयोग करें।"
  ],
  "Update Labels": [
    "Update Labels पहले label में बनाए गए Mail Merge layout को बाकी labels पर copy करता है।",
    "एक sheet पर कई address labels print करते समय same design सभी labels पर लगाने के लिए उपयोग करें।"
  ],
  "Preview Results": [
    "Preview Results final merge से पहले वास्तविक recipient data के साथ document कैसा दिखेगा, यह दिखाता है।",
    "Mail Merge भेजने से पहले names, addresses और formatting की गलती check करने के लिए उपयोग करें।"
  ],
  "Find Recipient": [
    "Find Recipient Mail Merge list में किसी specific recipient को खोजने देता है।",
    "बहुत बड़ी recipient list में किसी एक student या customer का letter जल्दी check करने के लिए उपयोग करें।"
  ],
  "Check for Errors": [
    "Check for Errors Mail Merge में missing fields या data-related problems पहचानने में मदद करता है।",
    "Letters print या send करने से पहले merge की mistakes check करने के लिए उपयोग करें।"
  ],
  "Finish & Merge": [
    "Finish & Merge तैयार Mail Merge को individual documents, print या email जैसे final output में बदलने देता है।",
    "जब सभी letters check हो जाएँ और अब उन्हें print या send करना हो, तब उपयोग करें।"
  ],
  "Spelling & Grammar": [
    "Spelling & Grammar document में spelling और grammar से जुड़ी संभावित गलतियाँ पहचानने में मदद करता है।",
    "Final report या letter submit करने से पहले language mistakes check करने के लिए उपयोग करें।"
  ],
  "Editor": [
    "Editor writing में spelling, grammar, clarity और कुछ style suggestions देता है।",
    "Professional email, report या application को final करने से पहले writing सुधारने के लिए उपयोग करें।"
  ],
  "Thesaurus": [
    "Thesaurus किसी word के synonyms और related words दिखाता है।",
    "एक ही word बार-बार इस्तेमाल हो रहा हो या बेहतर शब्द चुनना हो, तब उपयोग करें।"
  ],
  "Word Count": [
    "Word Count document में words, characters और अन्य basic statistics की संख्या दिखाता है।",
    "जब assignment में 500 words या किसी specific word limit की requirement हो, तब उपयोग करें।"
  ],
  "Read Aloud": [
    "Read Aloud document के text को आवाज़ में पढ़कर सुनाता है।",
    "Typing errors सुनकर पकड़ने या लंबे text को सुनकर review करने के लिए उपयोग करें।"
  ],
  "New Comment": [
    "New Comment selected text के साथ review note जोड़ता है।",
    "Teacher या colleague को किसी sentence पर feedback देना हो, तब उपयोग करें।"
  ],
  "Delete Comment": [
    "Delete Comment selected comment को document से हटाता है।",
    "जब comment का काम पूरा हो जाए या वह अब आवश्यक न हो, तब उपयोग करें।"
  ],
  "Previous Comment": [
    "Previous Comment आपको पिछले comment पर ले जाता है।",
    "कई comments वाले document को review करते समय पीछे वाले comment पर जाने के लिए उपयोग करें।"
  ],
  "Next Comment": [
    "Next Comment आपको अगले comment पर ले जाता है।",
    "Document के comments को क्रम से review करने के लिए उपयोग करें।"
  ],
  "Track Changes": [
    "Track Changes document में किए गए edits को record करता है ताकि बाद में देखा जा सके कि क्या बदला।",
    "Teacher द्वारा student assignment review करने या team document में edits track करने के लिए उपयोग करें।"
  ],
  "Show Markup": [
    "Show Markup तय करता है कि tracked changes और comments में से कौन-सी review information दिखाई जाए।",
    "Review करते समय केवल जरूरी changes या comments दिखाने के लिए उपयोग करें।"
  ],
  "Accept Changes": [
    "Accept Changes tracked edit को document का permanent हिस्सा बना देता है।",
    "Review के बाद जब कोई suggested change सही लगे और उसे final document में रखना हो, तब उपयोग करें।"
  ],
  "Reject Changes": [
    "Reject Changes tracked edit को हटाकर original content वापस रखता है।",
    "जब reviewer का suggested change सही न हो, तब उसे reject करने के लिए उपयोग करें।"
  ],
  "Previous Change": [
    "Previous Change आपको document के पिछले tracked change पर ले जाता है।",
    "बहुत सारे edits को एक-एक करके review करते समय उपयोग करें।"
  ],
  "Next Change": [
    "Next Change आपको अगले tracked change पर ले जाता है।",
    "Review के दौरान changes को क्रम से check करने के लिए उपयोग करें।"
  ],
  "Compare": [
    "Compare दो versions of a document के differences दिखाता है।",
    "Original और edited report के बीच क्या बदला है, यह पता करने के लिए उपयोग करें।"
  ],
  "Combine": [
    "Combine अलग-अलग reviewers के document changes को एक combined review document में जोड़ता है।",
    "जब कई लोगों ने एक ही document की अलग copies edit की हों, तब उपयोग करें।"
  ],
  "Restrict Editing": [
    "Restrict Editing document में editing या formatting पर restrictions लगाने में मदद करता है।",
    "जब किसी document को केवल पढ़ने देना हो या limited editing की अनुमति देनी हो, तब उपयोग करें।"
  ],
  "Language": [
    "Language proofing language और कुछ language-related settings चुनने में मदद करता है।",
    "Hindi, English या किसी दूसरी supported language में spelling/grammar checking करना हो, तब उपयोग करें।"
  ],
  "Read Mode": [
    "Read Mode document को पढ़ने के लिए साफ और कम-distraction layout में दिखाता है।",
    "जब आपको editing के बजाय केवल document पढ़ना हो, तब उपयोग करें।"
  ],
  "Print Layout": [
    "Print Layout document को लगभग उसी page layout में दिखाता है जैसा print होने पर दिखाई देगा।",
    "Printing से पहले page breaks, margins, images और headers/footers check करने के लिए उपयोग करें।"
  ],
  "Web Layout": [
    "Web Layout document को web page जैसी continuous layout में दिखाता है।",
    "जब document को screen/web-style reading के रूप में देखना हो, तब उपयोग करें।"
  ],
  "Outline": [
    "Outline headings के levels के आधार पर document की structure दिखाता है।",
    "Long report में chapters और sections को जल्दी organize या rearrange करने के लिए उपयोग करें।"
  ],
  "Draft": [
    "Draft view document को simple editing-focused layout में दिखाता है।",
    "जब आपको content edit करना हो और page design पर ध्यान न देना हो, तब उपयोग करें।"
  ],
  "Ruler": [
    "Ruler page के top और left side पर measurement और indentation controls दिखाता है।",
    "Margins, tabs और paragraph indents को accurately set करने के लिए उपयोग करें।"
  ],
  "Gridlines": [
    "Gridlines page पर alignment के लिए हल्की guide lines दिखाती हैं।",
    "Shapes, pictures और text boxes को सही position में align करने के लिए उपयोग करें।"
  ],
  "Navigation Pane": [
    "Navigation Pane headings, pages और search results के जरिए document में जल्दी move करने देता है।",
    "20–50 page की report में किसी chapter या word पर तुरंत जाने के लिए उपयोग करें।"
  ],
  "Zoom": [
    "Zoom document को screen पर बड़ा या छोटा करके दिखाता है; इससे document का actual print size नहीं बदलता।",
    "छोटा text पढ़ने या पूरी page layout देखने के लिए Zoom बदलें।"
  ],
  "100% Zoom": [
    "100% Zoom document को सामान्य 100 percent viewing level पर लाता है।",
    "जब आपने बहुत zoom in/out कर लिया हो और standard view पर वापस आना हो, तब उपयोग करें।"
  ],
  "One Page": [
    "One Page पूरी page को एक साथ screen पर fit करके दिखाता है।",
    "पूरे page का overall layout एक नज़र में check करने के लिए उपयोग करें।"
  ],
  "Multiple Pages": [
    "Multiple Pages एक साथ एक से अधिक pages दिखाता है।",
    "Long document की page-to-page layout और spacing compare करने के लिए उपयोग करें।"
  ],
  "Page Width": [
    "Page Width page को window की available width के अनुसार fit करता है।",
    "जब text छोटा दिखाई दे और आपको page की width के अनुसार comfortable reading चाहिए, तब उपयोग करें।"
  ],
  "New Window": [
    "New Window उसी document की दूसरी window खोलता है।",
    "एक ही document के अलग हिस्सों को अलग windows में देखकर compare करने के लिए उपयोग करें।"
  ],
  "Arrange All": [
    "Arrange All खुली हुई Word windows को screen पर व्यवस्थित करता है।",
    "एक से अधिक documents खुले हों और उन्हें एक साथ देखना हो, तब उपयोग करें।"
  ],
  "Split": [
    "Split एक ही document window को दो panes में बाँट देता है।",
    "ऊपर वाले section को देखते हुए नीचे वाले section में काम करने के लिए उपयोग करें।"
  ],
  "View Side by Side": [
    "View Side by Side दो documents को साथ-साथ दिखाता है।",
    "दो versions या दो reports को line-by-line compare करने के लिए उपयोग करें।"
  ],
  "Synchronous Scrolling": [
    "Synchronous Scrolling side-by-side खुले documents को एक साथ scroll करता है।",
    "दो similar documents compare करते समय दोनों को एक ही position पर आगे बढ़ाने के लिए उपयोग करें।"
  ],
  "Themes": [
    "Themes document के overall colors, fonts और visual style का coordinated set लागू करता है।",
    "Professional report या project के पूरे document को consistent look देने के लिए उपयोग करें।"
  ],
  "Theme Colors": [
    "Theme Colors document के coordinated color palette को बदलता है।",
    "Company, institute या project की preferred color scheme लागू करने के लिए उपयोग करें।"
  ],
  "Theme Fonts": [
    "Theme Fonts heading और body text के coordinated fonts चुनता है।",
    "पूरे document में headings और normal text की font style consistent रखने के लिए उपयोग करें।"
  ],
  "Theme Effects": [
    "Theme Effects shapes और visual objects के coordinated visual effects बदलता है।",
    "पूरे document के visual elements को एक consistent design देने के लिए उपयोग करें।"
  ],
  "Paragraph Spacing": [
    "Paragraph Spacing document के paragraphs के बीच predefined spacing sets लागू करता है।",
    "Long report को readable बनाने और headings/paragraphs के बीच consistent distance रखने के लिए उपयोग करें।"
  ],
  "Set as Default": [
    "Set as Default चुनी हुई document formatting को future documents के default settings के रूप में रखने देता है।",
    "अगर आप हर नए Word document में एक ही font, spacing या style चाहते हैं, तब उपयोग करें।"
  ],
  "Watermark": [
    "Watermark page के background में हल्का text या image दिखाता है।",
    "Draft, Confidential या institute name जैसे background labels लगाने के लिए उपयोग करें।"
  ],
  "Page Color": [
    "Page Color document page का background color बदलता है।",
    "Creative notes या special digital documents में page background बदलने के लिए उपयोग करें।"
  ],
  "Page Borders": [
    "Page Borders पूरे page के किनारे decorative या simple border लगाता है।",
    "Certificate, invitation, project cover या formal document को border देने के लिए उपयोग करें।"
  ]
};

const realExamples = {
  "Clipboard": "उदाहरण: किसी student की attendance table को Copy करके उसी format में दूसरी जगह Paste करना।",
  "Cut": "उदाहरण: गलती से Chapter 3 का paragraph नीचे चला गया है—Cut करके उसे सही जगह Paste करें।",
  "Copy": "उदाहरण: एक ही institute address को letter के तीन हिस्सों में इस्तेमाल करना।",
  "Paste": "उदाहरण: किसी website से copied text को Word report में डालना।",
  "Format Painter": "उदाहरण: एक heading blue, 16 pt और bold है; उसी look को दूसरी heading पर तुरंत लगाना।",
  "Bold": "उदाहरण: 'Important Notice' को bold करके students का ध्यान खींचना।",
  "Text Highlight": "उदाहरण: exam notes में important definitions को yellow highlight करना।",
  "Table": "उदाहरण: Student Name | Course | Fee | Attendance की table बनाना।",
  "Pictures": "उदाहरण: Joining Hands का logo report के cover page पर लगाना।",
  "Shapes": "उदाहरण: Flowchart में arrows और boxes बनाकर admission process समझाना।",
  "SmartArt": "उदाहरण: 'Application → Interview → Selection → Training' को process diagram में दिखाना।",
  "Chart": "उदाहरण: पाँच students के marks का comparison column chart में दिखाना।",
  "Header": "उदाहरण: हर page के ऊपर 'Joining Hands – AI Computer Learning & Practical Lab' दिखाना।",
  "Footer": "उदाहरण: हर page के नीचे 'Joining Hands | Page 1' जैसी information रखना।",
  "Page Number": "उदाहरण: 25-page scholarship report में pages को automatically 1, 2, 3... number करना।",
  "Link": "उदाहरण: 'Visit Joining Hands Website' text पर click करके website खोलना।",
  "Bookmark": "उदाहरण: 40-page report में 'Scholarship Criteria' section को bookmark करना।",
  "Cross-reference": "उदाहरण: report में 'See Figure 3' का reference automatically जोड़ना।",
  "Cover Page": "उदाहरण: project के पहले page पर title, student name, course और date वाला professional cover बनाना।",
  "Page Break": "उदाहरण: हर नया chapter नई page से शुरू करना।",
  "Margins": "उदाहरण: college assignment के लिए teacher ने 1-inch margins मांगे हैं।",
  "Orientation": "उदाहरण: बहुत चौड़ी marks table को Landscape page में fit करना।",
  "Columns": "उदाहरण: institute newsletter को दो-column newspaper style में बनाना।",
  "Table of Contents": "उदाहरण: 30-page training manual में Chapter 1, Chapter 2 और Chapter 3 की automatic contents list बनाना।",
  "Insert Citation": "उदाहरण: research report में किसी book से लिया गया fact cite करना।",
  "Bibliography": "उदाहरण: project के अंत में इस्तेमाल की गई books और websites की list बनाना।",
  "Start Mail Merge": "उदाहरण: Excel में 200 students की list से हर student के नाम वाला अलग scholarship letter बनाना।",
  "Preview Results": "उदाहरण: letters print करने से पहले check करना कि Rahul का letter Rahul को ही दिखा रहा है।",
  "Finish & Merge": "उदाहरण: सभी scholarship letters check होने के बाद उन्हें print करना।",
  "Spelling & Grammar": "उदाहरण: final application submit करने से पहले spelling mistakes check करना।",
  "Word Count": "उदाहरण: teacher ने 500-word essay मांगा है, तो Word Count से limit check करना।",
  "Track Changes": "उदाहरण: teacher student की assignment में किए गए corrections को track करके वापस भेजता है।",
  "Compare": "उदाहरण: original report और corrected report में क्या बदला, यह देखना।",
  "Watermark": "उदाहरण: अभी final नहीं हुई report पर हल्का 'DRAFT' watermark लगाना।",
  "Page Borders": "उदाहरण: certificate के चारों ओर professional border लगाना।",
  "Navigation Pane": "उदाहरण: 50-page report में heading 'Scholarship Process' पर तुरंत जाना।",
  "Split": "उदाहरण: document के ऊपर introduction देखते हुए नीचे conclusion edit करना।",
  "View Side by Side": "उदाहरण: दो versions of a report को साथ रखकर differences check करना।"
};

function localizedToolName(name) {
  const names = {
    "Clipboard":"Clipboard","Cut":"Cut","Copy":"Copy","Paste":"Paste","Format Painter":"Format Painter",
    "Font":"Font","Font Size":"Font Size","Bold":"Bold","Italic":"Italic","Underline":"Underline",
    "Text Effects":"Text Effects","Text Highlight":"Text Highlight","Font Color":"Font Color",
    "Paragraph":"Paragraph","Bullets":"Bullets","Numbering":"Numbering","Alignment":"Alignment",
    "Line & Paragraph Spacing":"Line & Paragraph Spacing","Indent":"Indent","Borders & Shading":"Borders & Shading",
    "Styles":"Styles","Editing":"Editing","Find":"Find","Replace":"Replace","Select":"Select",
    "Cover Page":"Cover Page","Blank Page":"Blank Page","Page Break":"Page Break","Table":"Table",
    "Pictures":"Pictures","Shapes":"Shapes","Icons":"Icons","3D Models":"3D Models","SmartArt":"SmartArt",
    "Chart":"Chart","Screenshot":"Screenshot","Get Add-ins":"Get Add-ins","Link":"Link","Bookmark":"Bookmark",
    "Cross-reference":"Cross-reference","Comment":"Comment","Header":"Header","Footer":"Footer",
    "Page Number":"Page Number","Text Box":"Text Box","WordArt":"WordArt","Drop Cap":"Drop Cap",
    "Date & Time":"Date & Time","Object":"Object","Equation":"Equation","Symbol":"Symbol",
    "Margins":"Margins","Orientation":"Orientation","Size":"Size","Columns":"Columns","Breaks":"Breaks",
    "Line Numbers":"Line Numbers","Hyphenation":"Hyphenation","Indent Left":"Indent Left",
    "Indent Right":"Indent Right","Spacing Before":"Spacing Before","Spacing After":"Spacing After",
    "Position":"Position","Wrap Text":"Wrap Text","Bring Forward":"Bring Forward","Send Backward":"Send Backward",
    "Selection Pane":"Selection Pane","Align":"Align","Group":"Group","Rotate":"Rotate",
    "Table of Contents":"Table of Contents","Add Text to TOC":"Add Text to TOC","Update Table":"Update Table",
    "Insert Footnote":"Insert Footnote","Insert Endnote":"Insert Endnote","Next Footnote":"Next Footnote",
    "Show Notes":"Show Notes","Insert Citation":"Insert Citation","Manage Sources":"Manage Sources",
    "Citation Style":"Citation Style","Bibliography":"Bibliography","Insert Caption":"Insert Caption",
    "Mark Entry":"Mark Entry","Insert Index":"Insert Index","Update Index":"Update Index",
    "Table of Authorities":"Table of Authorities","Envelopes":"Envelopes","Labels":"Labels",
    "Start Mail Merge":"Start Mail Merge","Select Recipients":"Select Recipients",
    "Edit Recipient List":"Edit Recipient List","Address Block":"Address Block","Greeting Line":"Greeting Line",
    "Insert Merge Field":"Insert Merge Field","Rules":"Rules","Match Fields":"Match Fields",
    "Update Labels":"Update Labels","Preview Results":"Preview Results","Find Recipient":"Find Recipient",
    "Check for Errors":"Check for Errors","Finish & Merge":"Finish & Merge",
    "Spelling & Grammar":"Spelling & Grammar","Editor":"Editor","Thesaurus":"Thesaurus",
    "Word Count":"Word Count","Read Aloud":"Read Aloud","New Comment":"New Comment",
    "Delete Comment":"Delete Comment","Previous Comment":"Previous Comment","Next Comment":"Next Comment",
    "Track Changes":"Track Changes","Show Markup":"Show Markup","Accept Changes":"Accept Changes",
    "Reject Changes":"Reject Changes","Previous Change":"Previous Change","Next Change":"Next Change",
    "Compare":"Compare","Combine":"Combine","Restrict Editing":"Restrict Editing","Language":"Language",
    "Read Mode":"Read Mode","Print Layout":"Print Layout","Web Layout":"Web Layout","Outline":"Outline",
    "Draft":"Draft","Ruler":"Ruler","Gridlines":"Gridlines","Navigation Pane":"Navigation Pane",
    "Zoom":"Zoom","100% Zoom":"100% Zoom","One Page":"One Page","Multiple Pages":"Multiple Pages",
    "Page Width":"Page Width","New Window":"New Window","Arrange All":"Arrange All","Split":"Split",
    "View Side by Side":"View Side by Side","Synchronous Scrolling":"Synchronous Scrolling",
    "Themes":"Themes","Theme Colors":"Theme Colors","Theme Fonts":"Theme Fonts","Theme Effects":"Theme Effects",
    "Paragraph Spacing":"Paragraph Spacing","Set as Default":"Set as Default","Watermark":"Watermark",
    "Page Color":"Page Color","Page Borders":"Page Borders"
  };
  return state.language === "hi" ? (names[name] || name) : name;
}

/* Translate common Word instructions into clear Hindi while keeping
   actual Microsoft Word command names in English. */
function stepToHindi(step) {
  let x = String(step);

  const exact = {
    "Select content.":"Content चुनें।",
    "Select the content.":"Content चुनें।",
    "Select text.":"Text चुनें।",
    "Select the text.":"Text चुनें।",
    "Place the cursor.":"जहाँ काम करना है वहाँ cursor रखें।",
    "Check the result.":"परिणाम को जाँचें।",
    "Check the text.":"Text को जाँचें।",
    "Check the page.":"Page का layout जाँचें।",
    "Save the document after major edits.":"बड़े बदलावों के बाद document को Save करें।",
    "Press Enter to continue the sequence.":"अगली item के लिए Enter दबाएँ।",
    "Press Enter if you typed a value.":"Value लिखने के बाद Enter दबाएँ।"
  };

  if (exact[x]) return exact[x];

  const replacements = [
    [/^Open Microsoft Word and select /i, "Microsoft Word खोलें और "],
    [/^Go to /i, "इस menu में जाएँ: "],
    [/^Choose /i, "चुनें: "],
    [/^Select /i, "चुनें: "],
    [/^Select the /i, "यह चुनें: "],
    [/^Place the cursor /i, "Cursor रखें "],
    [/^Type /i, "Type करें: "],
    [/^Enter /i, "Enter करें: "],
    [/^Click /i, "Click करें: "],
    [/^Use /i, "उपयोग करें: "],
    [/^Check /i, "जाँचें: "],
    [/^Review /i, "Review करें: "],
    [/^Repeat /i, "इसे दोहराएँ: "],
    [/^Save /i, "Save करें: "],
    [/^Press /i, "दबाएँ: "],
    [/^If /i, "यदि "],
    [/^For /i, "के लिए "]
  ];

  for (const [repl, value] of replacements) {
    if (repl.test(x)) {
      x = x.replace(repl, value);
      break;
    }
  }

  x = x
    .replace(/\band\b/gi, "और")
    .replace(/\bor\b/gi, "या")
    .replace(/\bthen\b/gi, "फिर")
    .replace(/\bthe\b/gi, "")
    .replace(/\bwhen\b/gi, "जब")
    .replace(/\bif needed\b/gi, "यदि आवश्यकता हो")
    .replace(/\bif required\b/gi, "यदि आवश्यकता हो")
    .replace(/\bif necessary\b/gi, "यदि आवश्यकता हो")
    .replace(/\bthe selected\b/gi, "चुने हुए")
    .replace(/\bselected\b/gi, "चुना हुआ")
    .replace(/\bcontent\b/gi, "content")
    .replace(/\bdocument\b/gi, "document")
    .replace(/\btext\b/gi, "text")
    .replace(/\bpage\b/gi, "page")
    .replace(/\boption\b/gi, "option")
    .replace(/\bformatting\b/gi, "formatting")
    .replace(/\bresult\b/gi, "result")
    .replace(/\s+/g, " ")
    .trim();

  return x;
}

function getLocalizedLesson(content) {
  if (state.language === "en") {
    return content;
  }

  const detail = hindiLessonDetails[content.title];

  const what = detail
    ? detail[0]
    : `यह ${content.title} option Microsoft Word में document पर एक विशेष काम करने में मदद करता है।`;

  const when = detail
    ? detail[1]
    : `जब आपको ${content.title} से जुड़ा काम करना हो, तब इस option का उपयोग करें।`;

  const example =
    realExamples[content.title] ||
    `उदाहरण: Microsoft Word में ${content.title} option खोलकर एक छोटा practice document तैयार करें और परिणाम जाँचें।`;

  return {
    ...content,
    title: content.title,
    what,
    when,
    example,
    steps: content.steps.map(stepToHindi)
  };
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

const lessonDetails = {
  "Clipboard": ["Stores content you cut or copy so it can be pasted elsewhere.", "Use it when moving, duplicating, or reusing text, pictures, tables, or formatting.", ["Select content.", "Go to Home → Clipboard.", "Choose Copy or Cut.", "Place the cursor at the destination.", "Choose Paste and check the result."]],
  "Cut": ["Removes selected content and puts it on the Clipboard.", "Use it when you want to move content to another location.", ["Select the content.", "Choose Home → Cut.", "Click the destination.", "Choose Home → Paste.", "Check that the content is in the correct place."]],
  "Copy": ["Creates a duplicate of selected content without removing the original.", "Use it when the same information is needed in more than one place.", ["Select the content.", "Choose Home → Copy.", "Place the cursor where the copy should go.", "Choose Paste.", "Check both copies."]],
  "Paste": ["Places Clipboard content at the cursor position.", "Use it after copying or cutting content.", ["Copy or cut content first.", "Place the cursor at the destination.", "Choose Home → Paste.", "Choose a Paste option if formatting needs to change.", "Check the inserted content."]],
  "Format Painter": ["Copies formatting such as font, color, size, and paragraph formatting.", "Use it when you want another part of the document to look the same.", ["Select correctly formatted text.", "Choose Home → Format Painter.", "Select the text or object that should receive the formatting.", "Release the selection.", "Check the formatting."]],
  "Font": ["Changes the typeface used by selected text.", "Use it when a document needs a particular font or improved readability.", ["Select the text.", "Go to Home → Font.", "Choose the font family.", "Check the selected text.", "Repeat for other text if required."]],
  "Font Size": ["Changes the size of selected text.", "Use it for headings, body text, captions, and emphasis.", ["Select the text.", "Home → Font Size.", "Choose a size or type a number.", "Press Enter if you typed a value.", "Check the text size."]],
  "Bold": ["Makes text heavier and darker.", "Use it for headings and important words.", ["Select text.", "Home → Bold.", "Or press Ctrl+B.", "Check the selected text.", "Click Bold again to remove it."]],
  "Italic": ["Slants selected text.", "Use it for emphasis, terms, titles, or notes.", ["Select text.", "Home → Italic.", "Or press Ctrl+I.", "Check the text.", "Click Italic again to remove it."]],
  "Underline": ["Places a line under selected text.", "Use it when an underline is specifically required.", ["Select text.", "Home → Underline.", "Choose an underline style if needed.", "Check the text.", "Use Underline again to remove it."]],
  "Text Effects": ["Adds effects such as outline, shadow, glow, or reflection.", "Use it for decorative headings and titles.", ["Select text.", "Home → Text Effects.", "Choose an effect.", "Adjust the effect if options are available.", "Check the result."]],
  "Text Highlight": ["Places a colored highlight behind text.", "Use it to mark important information.", ["Select text.", "Home → Text Highlight Color.", "Choose a color.", "Check the highlighted text.", "Use No Color to remove it."]],
  "Font Color": ["Changes the color of selected text.", "Use it to emphasize information or follow a document color scheme.", ["Select text.", "Home → Font Color.", "Choose a color.", "Check contrast and readability.", "Use the same process to change it again."]],
  "Paragraph": ["Controls paragraph formatting including alignment, lists, spacing, indentation, and borders.", "Use it whenever paragraphs need to be organized or formatted.", ["Select one or more paragraphs.", "Home → Paragraph group.", "Choose the required command.", "Check spacing, alignment, or list formatting.", "Adjust until the paragraph looks correct."]],
  "Bullets": ["Creates an unordered list with bullet symbols.", "Use it when the order of items is not important.", ["Select the lines.", "Home → Bullets.", "Choose a bullet style.", "Use Increase/Decrease Indent if needed.", "Press Enter for the next bullet and Enter twice to finish."]],
  "Numbering": ["Creates an ordered numbered list.", "Use it for steps, procedures, rankings, or sequential points.", ["Select the lines.", "Home → Numbering.", "Choose a number style.", "Type or edit each item.", "Press Enter to continue the sequence."]],
  "Alignment": ["Aligns paragraphs left, center, right, or justified.", "Use it to control the horizontal position of text.", ["Place the cursor in the paragraph or select paragraphs.", "Home → Paragraph → Alignment.", "Choose Left, Center, Right, or Justify.", "Check the page.", "Apply the same alignment to other paragraphs if needed."]],
  "Line & Paragraph Spacing": ["Controls space between lines and paragraphs.", "Use it to improve readability or meet formatting requirements.", ["Select paragraphs.", "Home → Line and Paragraph Spacing.", "Choose a line-spacing value.", "Use paragraph spacing options if required.", "Check the vertical spacing."]],
  "Indent": ["Moves paragraph text inward from the margin.", "Use it for quotations, lists, or structured text.", ["Select the paragraph.", "Home → Increase or Decrease Indent.", "Click until the required position is reached.", "Check the left/right position.", "Adjust again if needed."]],
  "Borders & Shading": ["Adds borders or background shading to paragraphs or selected content.", "Use it to highlight notes, headings, or sections.", ["Select the paragraph or content.", "Home → Borders/Shading.", "Choose a border or shading color.", "Apply it.", "Check the result and remove it if unnecessary."]],
  "Styles": ["Applies consistent predefined formatting to text.", "Use Heading styles to create structured documents and automatic tables of contents.", ["Select or place the cursor in the text.", "Home → Styles.", "Choose Normal, Heading 1, Heading 2, Title, etc.", "Repeat for other headings.", "Use the same style for headings of the same level."]],
  "Editing": ["Contains commands for finding, replacing, and selecting document content.", "Use it to edit long documents efficiently.", ["Open Home → Editing.", "Choose Find, Replace, or Select.", "Perform the required action.", "Review the result.", "Save the document after major edits."]],
  "Find": ["Searches the document for specific text.", "Use it to locate a word or phrase quickly.", ["Home → Find.", "Type the word or phrase.", "Review the highlighted results.", "Use Next/Previous result to move through matches.", "Close the search when finished."]],
  "Replace": ["Finds text and substitutes it with other text.", "Use it for repeated corrections or terminology changes.", ["Home → Replace.", "Enter the text in Find what.", "Enter the new text in Replace with.", "Use Find Next/Replace to review.", "Use Replace All only after checking the search term."]],
  "Select": ["Selects document text or objects for editing or formatting.", "Use it when you need to apply a command to a specific area.", ["Home → Select.", "Choose the required selection command.", "Confirm the correct content is selected.", "Apply formatting or another command.", "Click elsewhere to clear the selection."]],

  "Cover Page": ["Adds a professionally designed cover page.", "Use it for reports, projects, assignments, and formal documents.", ["Insert → Cover Page.", "Choose a design.", "Click the sample title.", "Replace title, author, date, and other fields.", "Review the complete cover page."]],
  "Blank Page": ["Inserts a completely blank page at the cursor.", "Use it when a new empty page is required.", ["Place the cursor where the page should be inserted.", "Insert → Blank Page.", "Word creates the new page.", "Add the required content.", "Check page order."]],
  "Page Break": ["Starts following content on a new page.", "Use it for clean page separation.", ["Place the cursor before the content that should move.", "Insert → Page Break.", "Check that the following content begins on a new page.", "Continue typing.", "Use Ctrl+Enter as a shortcut when appropriate."]],
  "Table": ["Creates rows and columns for structured information.", "Use it for marksheets, schedules, forms, comparisons, and data.", ["Insert → Table.", "Select the required number of rows and columns.", "Enter data.", "Use Table Design/Layout tools to format it.", "Adjust row/column sizes and check alignment."]],
  "Pictures": ["Inserts pictures into the document.", "Use it for photos, screenshots, diagrams, and illustrations.", ["Insert → Pictures.", "Choose the source.", "Select the picture.", "Insert it.", "Use picture layout/wrap options to position it."]],
  "Shapes": ["Adds shapes such as rectangles, circles, arrows, and flowchart symbols.", "Use them for diagrams, labels, callouts, and visual explanations.", ["Insert → Shapes.", "Choose a shape.", "Drag on the page to draw it.", "Type text if required.", "Use Shape Format to change fill, outline, and position."]],
  "Icons": ["Adds built-in scalable icons.", "Use them for simple visual symbols and attractive documents.", ["Insert → Icons.", "Search or browse.", "Select an icon.", "Choose Insert.", "Resize or recolor the icon if needed."]],
  "3D Models": ["Inserts a three-dimensional model.", "Use it when a 3D object helps explain a topic.", ["Insert → 3D Models.", "Choose an available source/model.", "Insert the model.", "Resize it.", "Use the 3D controls to rotate the view."]],
  "SmartArt": ["Creates diagrams for lists, processes, hierarchies, cycles, and relationships.", "Use it when information is easier to understand visually.", ["Insert → SmartArt.", "Choose a category.", "Choose a layout.", "Enter text in the Text Pane.", "Use SmartArt Design/Format to customize it."]],
  "Chart": ["Creates charts such as column, line, pie, and bar charts.", "Use charts to present numerical data visually.", ["Insert → Chart.", "Choose a chart type.", "Enter or replace the sample data.", "Close the data sheet.", "Use Chart Design/Format to adjust the chart."]],
  "Screenshot": ["Inserts a screenshot or screen clipping.", "Use it for tutorials, instructions, and documentation.", ["Insert → Screenshot.", "Choose an available window or Screen Clipping.", "Select the required area.", "Word inserts the image.", "Resize or wrap the screenshot as needed."]],
  "Get Add-ins": ["Provides access to additional Word add-ins where available.", "Use it when an approved add-in provides a required feature.", ["Insert → Get Add-ins.", "Search for the required add-in.", "Review its information and permissions.", "Choose Add if appropriate.", "Follow the add-in's instructions."]],
  "Link": ["Creates a clickable link to a webpage, file, email address, or document location.", "Use it to connect readers to another resource.", ["Select the text or object.", "Insert → Link.", "Enter or choose the destination.", "Set display text if required.", "Choose OK and test the link."]],
  "Bookmark": ["Marks a location in a document for quick navigation or reference.", "Use it in long documents.", ["Place the cursor or select the required text.", "Insert → Bookmark.", "Enter a bookmark name without spaces.", "Choose Add.", "Use Insert → Bookmark later to navigate to it."]],
  "Cross-reference": ["Creates a reference to a heading, figure, table, or numbered item.", "Use it when one part of a document must point to another.", ["Place the cursor.", "Insert → Cross-reference.", "Choose the reference type.", "Select the item.", "Choose Insert and check the reference."]],
  "Comment": ["Adds a review note without changing the main text.", "Use it for feedback, questions, and collaboration.", ["Select text.", "Insert → Comment.", "Type the comment.", "Post it.", "Review or resolve the comment later from the comments area."]],
  "Header": ["Adds repeated content to the top margin of pages.", "Use it for institute names, document titles, logos, dates, or repeated information.", ["Insert → Header.", "Choose a built-in style or Edit Header.", "Type the required text or insert a logo.", "Use Header & Footer tools for options such as Different First Page.", "Choose Close Header and Footer."]],
  "Footer": ["Adds repeated content to the bottom margin of pages.", "Use it for page information, document names, dates, or contact details.", ["Insert → Footer.", "Choose a style or Edit Footer.", "Type the required information.", "Insert a page number if required.", "Choose Close Header and Footer."]],
  "Page Number": ["Adds automatic page numbers to document pages.", "Use it for reports, assignments, books, and long documents.", ["Insert → Page Number.", "Choose Top of Page, Bottom of Page, or another position.", "Choose a number style.", "Format page numbers if needed.", "Close Header and Footer."]],
  "Text Box": ["Places text inside a movable box.", "Use it for side notes, labels, callouts, and special layouts.", ["Insert → Text Box.", "Choose a built-in box or draw one.", "Type the text.", "Resize and position the box.", "Use Shape Format to change its appearance."]],
  "WordArt": ["Creates decorative stylized text.", "Use it for posters, certificates, creative headings, and titles.", ["Insert → WordArt.", "Choose a style.", "Type the text.", "Resize and position it.", "Use Shape Format/Text Format controls to customize it."]],
  "Drop Cap": ["Makes the first letter of a paragraph larger and decorative.", "Use it for magazine-style or decorative documents.", ["Place the cursor in the paragraph.", "Insert → Drop Cap.", "Choose Dropped or In Margin.", "Adjust options if required.", "Check the paragraph layout."]],
  "Date & Time": ["Inserts a formatted date or time.", "Use it in letters, forms, reports, and official documents.", ["Place the cursor.", "Insert → Date & Time.", "Choose the language and format.", "Choose Update automatically if required.", "Choose OK."]],
  "Object": ["Embeds or inserts another supported file/object into Word.", "Use it when a spreadsheet or other object should be included in the document.", ["Insert → Object.", "Choose Create New or Create from File.", "Select the object/file.", "Choose display/link options if needed.", "Choose OK and check the inserted object."]],
  "Equation": ["Provides tools for typing mathematical equations.", "Use it for mathematics, science, engineering, and formulas.", ["Insert → Equation.", "Choose a built-in equation or Insert New Equation.", "Use the equation tools to enter symbols and structures.", "Complete the formula.", "Check the equation formatting."]],
  "Symbol": ["Inserts special characters and symbols.", "Use it for currency signs, Greek letters, mathematical symbols, and special characters.", ["Place the cursor.", "Insert → Symbol.", "Choose a visible symbol or More Symbols.", "Select the required character.", "Choose Insert."]],

  "Margins": ["Controls blank space around page edges.", "Use it when a document needs specific print or submission margins.", ["Layout → Margins.", "Choose Normal, Narrow, Moderate, Wide, or Custom Margins.", "For custom margins enter Top, Bottom, Left, and Right.", "Choose OK.", "Check the page layout."]],
  "Orientation": ["Changes pages between Portrait and Landscape.", "Use Landscape for wide tables and Portrait for most documents.", ["Layout → Orientation.", "Choose Portrait or Landscape.", "Check the page.", "If needed, apply the setting to a section.", "Save after confirming the layout."]],
  "Size": ["Changes paper size such as A4 or Letter.", "Use it to match the paper used for printing or submission.", ["Layout → Size.", "Choose the required paper size.", "For other sizes choose More Paper Sizes.", "Check margins and content.", "Preview before printing."]],
  "Columns": ["Divides text into newspaper-style columns.", "Use it for newsletters, brochures, and magazine layouts.", ["Select the relevant text if only part should use columns.", "Layout → Columns.", "Choose one, two, three, or more columns.", "Use More Columns for detailed settings.", "Check the flow of text."]],
  "Breaks": ["Controls page, section, column, and related breaks.", "Use it when different parts of a document need separate layouts.", ["Place the cursor.", "Layout → Breaks.", "Choose Page, Column, or a Section Break.", "Check the new section/page.", "Apply section-specific formatting if needed."]],
  "Line Numbers": ["Adds line numbers beside document text.", "Use it for legal, academic, technical, or review documents.", ["Layout → Line Numbers.", "Choose Continuous, Restart Each Page, or another option.", "Check the line numbers.", "Use Line Number Options for detailed settings.", "Turn it off when no longer required."]],
  "Hyphenation": ["Controls automatic splitting of words at line endings.", "Use it to improve text flow, especially in justified layouts.", ["Layout → Hyphenation.", "Choose Automatic, Manual, or None.", "Review hyphenated words.", "Undo or change the setting if needed.", "Check page appearance."]],
  "Indent Left": ["Changes the left indentation of selected paragraphs.", "Use it to move text inward from the left margin.", ["Select paragraphs.", "Layout → Indent Left.", "Enter the required measurement.", "Check the paragraph position.", "Reset the value when required."]],
  "Indent Right": ["Changes the right indentation of selected paragraphs.", "Use it to keep text away from the right margin.", ["Select paragraphs.", "Layout → Indent Right.", "Enter the required measurement.", "Check the paragraph width.", "Adjust again if needed."]],
  "Spacing Before": ["Adds space before selected paragraphs.", "Use it to separate headings and paragraphs cleanly.", ["Select paragraphs.", "Layout → Spacing Before.", "Enter or choose a value.", "Check the vertical space.", "Apply consistently to similar paragraphs."]],
  "Spacing After": ["Adds space after selected paragraphs.", "Use it to control paragraph separation without pressing Enter repeatedly.", ["Select paragraphs.", "Layout → Spacing After.", "Enter or choose a value.", "Check the document.", "Keep spacing consistent."]],
  "Position": ["Places a selected floating object at a predefined page position.", "Use it for pictures and shapes that need predictable placement.", ["Select the object.", "Layout → Position.", "Choose a position.", "Check the surrounding text.", "Use Wrap Text if more control is needed."]],
  "Wrap Text": ["Controls how text flows around a picture, shape, or other object.", "Use it when an object should sit beside or behind text.", ["Select the object.", "Layout → Wrap Text.", "Choose Square, Tight, Through, Top and Bottom, Behind Text, or In Front of Text.", "Check the text flow.", "Choose another option if necessary."]],
  "Bring Forward": ["Moves an object in front of another overlapping object.", "Use it when an object is hidden behind another.", ["Select the object.", "Layout → Bring Forward.", "Choose Bring Forward or Bring to Front.", "Check the stacking order.", "Repeat if several objects overlap."]],
  "Send Backward": ["Moves an object behind another overlapping object.", "Use it for layered shapes and pictures.", ["Select the object.", "Layout → Send Backward.", "Choose Send Backward or Send to Back.", "Check the stacking order.", "Adjust again if required."]],
  "Selection Pane": ["Lists document objects so they can be selected, hidden, shown, and reordered.", "Use it when a page contains many overlapping objects.", ["Select an object.", "Layout → Selection Pane.", "Find the required object in the list.", "Use the eye controls to hide/show objects.", "Reorder objects if needed."]],
  "Align": ["Lines up multiple objects relative to each other or the page.", "Use it to create neat diagrams and layouts.", ["Select two or more objects.", "Layout → Align.", "Choose an alignment such as Left, Center, Middle, or Right.", "Use Align to Page or Align Selected Objects when available.", "Check the result."]],
  "Group": ["Combines multiple objects so they move and format together.", "Use it for diagrams made from several shapes.", ["Select multiple objects.", "Layout → Group.", "Choose Group.", "Move or resize the group.", "Use Ungroup when individual editing is needed."]],
  "Rotate": ["Turns a selected object.", "Use it for arrows, shapes, pictures, and diagrams.", ["Select the object.", "Layout → Rotate.", "Choose Rotate Right/Left or Flip.", "Use More Rotation Options for an exact angle.", "Check the orientation."]],

  "Table of Contents": ["Creates a list of headings with page numbers.", "Use it for reports, projects, books, and long documents.", ["Apply Heading 1/2/3 styles to headings.", "Place the cursor where the TOC should appear.", "References → Table of Contents.", "Choose an automatic style.", "Update it after major edits."]],
  "Add Text to TOC": ["Marks text with a TOC level so it can appear in the table of contents.", "Use it when a heading is not using a built-in Heading style.", ["Select the heading.", "References → Add Text.", "Choose Level 1, 2, or another level.", "Repeat for other headings.", "Insert or update the Table of Contents."]],
  "Update Table": ["Refreshes an existing table of contents.", "Use it after headings, wording, or page numbers change.", ["Click inside the table of contents.", "References → Update Table.", "Choose Update page numbers only or Update entire table.", "Choose OK.", "Review the updated entries."]],
  "Insert Footnote": ["Adds a note at the bottom of the current page.", "Use it for source notes, explanations, or references.", ["Place the cursor after the relevant text.", "References → Insert Footnote.", "Type the note.", "Continue editing the main document.", "Review the footnote number and text."]],
  "Insert Endnote": ["Adds a note collected at the end of the document or section.", "Use it when notes should be grouped instead of appearing at the bottom of every page.", ["Place the cursor.", "References → Insert Endnote.", "Type the note.", "Continue the document.", "Check the endnote location."]],
  "Next Footnote": ["Moves to the next footnote or endnote.", "Use it when reviewing many notes.", ["Open References.", "Choose Next Footnote.", "Review the selected note.", "Repeat to move through notes.", "Edit the note if required."]],
  "Show Notes": ["Opens the notes area for footnotes or endnotes.", "Use it when reviewing or editing notes.", ["References → Show Notes.", "Choose the note type if prompted.", "Read or edit the note.", "Return to the document.", "Close the notes area when finished."]],
  "Insert Citation": ["Adds a source citation using Word's source manager.", "Use it when citing books, websites, articles, or other sources.", ["Place the cursor after the statement.", "References → Insert Citation.", "Choose an existing source or Add New Source.", "Enter source details.", "Insert the citation and review it."]],
  "Manage Sources": ["Stores and manages sources used for citations.", "Use it to edit, reuse, or organize references.", ["References → Manage Sources.", "Select a source.", "Choose Edit, Delete, or copy between lists as appropriate.", "Save changes.", "Return to the document."]],
  "Citation Style": ["Sets the citation style used by Word.", "Use it when an assignment or publication requires a specific style.", ["References → Style.", "Choose the required style such as APA or MLA when available.", "Review existing citations.", "Update citations if required.", "Insert or update the bibliography."]],
  "Bibliography": ["Creates a references list from stored sources.", "Use it at the end of academic or research documents.", ["Add and insert citations first.", "Place the cursor where the bibliography should appear.", "References → Bibliography.", "Choose a built-in format.", "Update it after adding more sources."]],
  "Insert Caption": ["Adds a numbered caption to figures, tables, or other objects.", "Use it to label figures and tables for professional documents.", ["Select the object.", "References → Insert Caption.", "Choose the label such as Figure or Table.", "Type/edit the caption.", "Use cross-reference if the caption must be referenced elsewhere."]],
  "Cross-reference": ["Creates a reference to a heading, figure, table, or numbered item.", "Use it to connect related sections of a long document.", ["Place the cursor.", "References → Cross-reference.", "Choose the reference type.", "Select the item.", "Choose Insert and check the reference."]],
  "Mark Entry": ["Marks a word or phrase for inclusion in an index.", "Use it when preparing books, manuals, or long reference documents.", ["Select the term.", "References → Mark Entry.", "Edit the index entry if required.", "Choose Mark or Mark All.", "Continue marking other terms."]],
  "Insert Index": ["Creates an alphabetical index from marked entries.", "Use it for long manuals, books, and reference documents.", ["Mark index entries first.", "Place the cursor where the index should appear.", "References → Insert Index.", "Choose a format.", "Choose OK."]],
  "Update Index": ["Refreshes an existing index after document changes.", "Use it after adding, deleting, or moving indexed content.", ["Click inside the index.", "References → Update Index.", "Review the new page numbers and entries.", "Repeat after later edits.", "Check the final index."]],
  "Table of Authorities": ["Creates a list of cited legal authorities in supported Word documents.", "Use it for legal documents where authorities have been marked.", ["Mark the relevant legal citations.", "References → Table of Authorities.", "Choose the required category/options.", "Insert the table.", "Update it after further edits."]],

  "Envelopes": ["Creates address information for printing on envelopes.", "Use it for postal letters and official correspondence.", ["Mailings → Envelopes.", "Enter delivery and return addresses.", "Choose envelope options if needed.", "Choose Add to Document or Print.", "Check the print layout."]],
  "Labels": ["Creates printable labels using Word's label layouts.", "Use it for mailing, name, or other repetitive labels.", ["Mailings → Labels.", "Enter the label text/address.", "Choose label options.", "Choose New Document to preview.", "Print after checking the layout."]],
  "Start Mail Merge": ["Starts a personalized document process for many recipients.", "Use it for letters, certificates, invitations, labels, or email messages.", ["Mailings → Start Mail Merge.", "Choose the document type.", "Select the appropriate layout.", "Connect the recipient list.", "Continue with merge fields and preview."]],
  "Select Recipients": ["Connects the mail merge to a recipient data source.", "Use it when names, addresses, or other fields come from a list.", ["Mailings → Select Recipients.", "Choose an existing list, Outlook contacts, or create a new list.", "Select the data file/list.", "Confirm the recipient fields.", "Continue to the merge fields."]],
  "Edit Recipient List": ["Lets you select, sort, and filter mail merge recipients.", "Use it to control exactly who is included.", ["Mailings → Edit Recipient List.", "Use checkboxes to include/exclude recipients.", "Sort or filter if needed.", "Review the selected recipients.", "Choose OK."]],
  "Address Block": ["Inserts a formatted address using recipient fields.", "Use it for personalized letters and envelopes.", ["Start a mail merge and select recipients.", "Mailings → Address Block.", "Choose the address format.", "Use Match Fields if fields are not recognized.", "Preview the result."]],
  "Greeting Line": ["Inserts a personalized greeting.", "Use it in letters and other personalized communications.", ["Mailings → Greeting Line.", "Choose the greeting format.", "Set how names should appear.", "Preview recipients.", "Choose OK."]],
  "Insert Merge Field": ["Inserts a specific field from the recipient data.", "Use it when you need a field not included in the standard Address Block.", ["Place the cursor.", "Mailings → Insert Merge Field.", "Choose the field.", "Repeat for other fields.", "Use Preview Results to check it."]],
  "Rules": ["Adds conditional logic to a mail merge.", "Use it when different recipients should receive different text or values.", ["Mailings → Rules.", "Choose a rule.", "Set the condition.", "Enter the text/value for each result.", "Preview different recipients."]],
  "Match Fields": ["Maps your data columns to Word's standard merge fields.", "Use it when Word cannot automatically match your spreadsheet columns.", ["Mailings → Match Fields.", "Review Word's fields.", "Choose the matching data column for each field.", "Confirm the mapping.", "Preview the merge."]],
  "Update Labels": ["Copies the first label's merge setup to the other labels.", "Use it when creating sheets of personalized labels.", ["Set up the first label.", "Insert the required merge fields.", "Mailings → Update Labels.", "Preview several recipients.", "Finish and merge when correct."]],
  "Preview Results": ["Shows the personalized output using real recipient data.", "Use it to check names, addresses, and formatting before the final merge.", ["Complete the recipient and merge-field setup.", "Mailings → Preview Results.", "Move through recipients.", "Check every important field.", "Fix the document before finishing."]],
  "Find Recipient": ["Searches the recipient list for a particular person.", "Use it when checking one person's merged output.", ["Mailings → Find Recipient.", "Enter a name or search value.", "Choose the matching recipient.", "Review the preview.", "Return to the full list when finished."]],
  "Check for Errors": ["Checks a mail merge for possible errors before final output.", "Use it before printing or sending a large batch.", ["Complete the merge setup.", "Mailings → Check for Errors.", "Choose the checking option.", "Review reported problems.", "Correct them and check again."]],
  "Finish & Merge": ["Creates final personalized documents, prints them, or sends them using supported options.", "Use it only after checking the preview.", ["Preview several recipients.", "Mailings → Finish & Merge.", "Choose Edit Individual Documents, Print Documents, or the available option.", "Select the recipient range.", "Review or print the final result."]],

  "Spelling & Grammar": ["Checks spelling and grammar suggestions.", "Use it before submitting, printing, or sharing a document.", ["Review → Spelling & Grammar/Editor.", "Read the suggestion.", "Choose an appropriate action such as Change or Ignore.", "Continue through the document.", "Review the final text manually too."]],
  "Editor": ["Provides writing suggestions including spelling and grammar and other available categories.", "Use it for a broader writing review.", ["Review → Editor.", "Open each category.", "Review suggestions one by one.", "Apply only appropriate changes.", "Re-read the final document."]],
  "Thesaurus": ["Suggests alternative words with similar meanings.", "Use it to reduce repetition or find a more suitable word.", ["Select or place the cursor on a word.", "Review → Thesaurus.", "Review suggested alternatives.", "Choose a suitable word.", "Check the sentence meaning after replacing it."]],
  "Word Count": ["Shows statistics such as words, characters, paragraphs, and pages.", "Use it when a document has a length requirement.", ["Review → Word Count.", "Read the statistics.", "Use Include textboxes/footnotes/endnotes if relevant.", "Close the dialog.", "Check again after major edits."]],
  "Read Aloud": ["Reads document text aloud using the available speech feature.", "Use it to hear wording and identify missing or awkward text.", ["Review → Read Aloud.", "Use Play/Pause.", "Change reading speed or voice if available.", "Listen through the relevant section.", "Stop when finished."]],
  "New Comment": ["Adds a comment for review or collaboration.", "Use it to ask questions or give feedback.", ["Select the relevant text.", "Review → New Comment.", "Type the feedback.", "Post the comment.", "Use the comment pane to review it later."]],
  "Delete Comment": ["Removes a selected comment.", "Use it after a comment has been resolved or is no longer needed.", ["Select the comment.", "Review → Delete.", "Choose Delete Comment or the available option.", "Check that the comment is removed.", "Repeat for other comments."]],
  "Previous Comment": ["Moves to the previous comment.", "Use it while reviewing comments sequentially.", ["Open the Review tab.", "Choose Previous Comment.", "Read the selected comment.", "Edit, reply, or resolve it as needed.", "Continue reviewing."]],
  "Next Comment": ["Moves to the next comment.", "Use it while reviewing comments sequentially.", ["Open Review.", "Choose Next Comment.", "Read the comment.", "Respond or resolve it if required.", "Continue to the next comment."]],
  "Track Changes": ["Records edits so reviewers can see insertions, deletions, and formatting changes.", "Use it during collaborative editing and formal review.", ["Review → Track Changes.", "Turn tracking on.", "Edit the document.", "Review the markup.", "Accept or reject changes after review."]],
  "Show Markup": ["Controls which tracked changes and comments are displayed.", "Use it to switch between a detailed review view and a cleaner view.", ["Review → Show Markup.", "Choose comments, insertions/deletions, formatting, or reviewers.", "Check the document display.", "Change the settings as required.", "Remember that hiding markup does not necessarily remove it."]],
  "Accept Changes": ["Makes a selected tracked change permanent.", "Use it after reviewing an edit that should remain.", ["Select a tracked change.", "Review → Accept.", "Choose Accept This Change or an available accept option.", "Move to the next change.", "Review the final document."]],
  "Reject Changes": ["Removes a selected tracked change and keeps the previous content.", "Use it when a suggested edit should not be kept.", ["Select a tracked change.", "Review → Reject.", "Choose Reject This Change or an available option.", "Move to the next change.", "Review the final document."]],
  "Previous Change": ["Moves to the previous tracked change.", "Use it to review edits in sequence.", ["Review → Previous Change.", "Read the highlighted change.", "Accept or reject it if appropriate.", "Move to another change.", "Repeat until review is complete."]],
  "Next Change": ["Moves to the next tracked change.", "Use it to review edits in sequence.", ["Review → Next Change.", "Read the highlighted change.", "Accept or reject it if appropriate.", "Continue through the document.", "Finish the review when all changes are checked."]],
  "Compare": ["Compares two document versions and shows their differences.", "Use it when checking what changed between two copies.", ["Review → Compare.", "Choose Original and Revised documents.", "Set comparison options if required.", "Choose OK.", "Review the generated comparison."]],
  "Combine": ["Combines revisions from multiple document copies when supported.", "Use it when several reviewers have returned edited copies.", ["Review → Compare/Combine.", "Choose the original and revised documents.", "Set reviewer/options if required.", "Choose OK.", "Review the combined changes carefully."]],
  "Restrict Editing": ["Limits the types of editing allowed in a document.", "Use it for forms, templates, and controlled documents.", ["Review → Restrict Editing.", "Choose the editing restrictions.", "Set formatting restrictions if needed.", "Start enforcement.", "Set and remember the protection method."]],
  "Language": ["Sets the proofing language for text.", "Use it when spelling and grammar should be checked in another language.", ["Select the relevant text.", "Review → Language.", "Choose Set Proofing Language.", "Select the language.", "Confirm and run the proofing check."]],

  "Read Mode": ["Shows a reading-focused view.", "Use it when reading rather than editing.", ["View → Read Mode.", "Use page/navigation controls.", "Read through the document.", "Exit Read Mode when editing is required."]],
  "Print Layout": ["Shows pages approximately as they will appear when printed.", "Use it for normal editing and print-layout checking.", ["View → Print Layout.", "Check page breaks and margins.", "Scroll through pages.", "Correct layout issues.", "Use Print Preview before printing."]],
  "Web Layout": ["Shows the document in a webpage-like continuous layout.", "Use it when checking content intended for online viewing.", ["View → Web Layout.", "Review text and objects.", "Check how wide content flows.", "Return to Print Layout for print formatting."]],
  "Outline": ["Shows document structure using heading levels.", "Use it to organize and rearrange long documents.", ["View → Outline.", "Assign heading levels.", "Expand/collapse sections.", "Move sections if required.", "Close Outline view when finished."]],
  "Draft": ["Provides a simplified text-focused editing view.", "Use it for fast editing of long documents.", ["View → Draft.", "Edit the text.", "Review formatting as needed.", "Return to Print Layout when checking pages."]],
  "Ruler": ["Shows rulers for measuring margins, tabs, and indents.", "Use it for precise paragraph and tab positioning.", ["View → Ruler.", "Check the horizontal/vertical ruler.", "Drag indent or tab markers as required.", "Check paragraph alignment.", "Turn the ruler off when not needed."]],
  "Gridlines": ["Shows a non-printing grid to help align objects.", "Use it when positioning shapes and pictures.", ["View → Gridlines.", "Turn gridlines on.", "Move objects into alignment.", "Check the layout.", "Turn gridlines off before final viewing if desired."]],
  "Navigation Pane": ["Provides search and heading navigation.", "Use it to find text or jump between headings quickly.", ["View → Navigation Pane.", "Search for a word or phrase.", "Click a result.", "Use Headings to jump between sections.", "Close the pane when finished."]],
  "Zoom": ["Changes document magnification.", "Use it to make text easier to see or fit more content on screen.", ["View → Zoom.", "Choose a percentage or setting.", "Check readability.", "Adjust again when needed.", "Return to a comfortable level."]],
  "100% Zoom": ["Sets the document view to 100% magnification.", "Use it for a standard viewing scale.", ["View → 100%.", "Check the document at standard size.", "Adjust if the screen is too small or large."]],
  "One Page": ["Fits one complete page in the window.", "Use it to inspect overall page layout.", ["View → One Page.", "Check the whole page.", "Inspect margins, images, and page breaks.", "Return to another zoom level for detailed editing."]],
  "Multiple Pages": ["Shows multiple pages together.", "Use it to review page flow and overall document layout.", ["View → Multiple Pages.", "Choose the multiple-page arrangement if available.", "Inspect page order and spacing.", "Zoom in when detailed editing is required."]],
  "Page Width": ["Fits the page width to the application window.", "Use it when you want readable text while seeing the page width.", ["View → Page Width.", "Review the full width.", "Scroll vertically to read.", "Change zoom if necessary."]],
  "New Window": ["Opens another window for the same document.", "Use it when you need to view different parts of one document at the same time.", ["Open the document.", "View → New Window.", "Arrange the windows.", "Scroll each window to the required location.", "Edit as needed."]],
  "Arrange All": ["Arranges open document windows so they can be viewed together.", "Use it when working with several open documents.", ["Open multiple documents.", "View → Arrange All.", "Compare or move between windows.", "Close extra windows when finished."]],
  "Split": ["Splits one document window into two scrolling areas.", "Use it to compare distant parts of the same document.", ["View → Split.", "Place the split line.", "Scroll one area independently.", "Compare the two sections.", "Remove the split when finished."]],
  "View Side by Side": ["Displays two documents next to each other.", "Use it for manual comparison or copying information.", ["Open both documents.", "View → View Side by Side.", "Compare the documents.", "Scroll as needed.", "Close the comparison view when finished."]],
  "Synchronous Scrolling": ["Scrolls two side-by-side documents together.", "Use it when comparing corresponding sections.", ["Turn on View Side by Side.", "Enable Synchronous Scrolling.", "Scroll one document.", "Check the matching section in the other document.", "Turn it off when finished."]],

  "Themes": ["Applies a coordinated set of document colors, fonts, and effects.", "Use it to change the overall document design consistently.", ["Design → Themes.", "Preview the available themes.", "Choose a theme.", "Review headings, body text, and objects.", "Undo or choose another theme if necessary."]],
  "Theme Colors": ["Changes the coordinated color palette used by the document theme.", "Use it when the document needs a different color scheme.", ["Design → Colors.", "Preview color sets.", "Choose a palette.", "Check headings and objects.", "Choose another palette if required."]],
  "Theme Fonts": ["Changes the heading and body fonts used by the theme.", "Use it to change typography consistently.", ["Design → Fonts.", "Preview font sets.", "Choose a set.", "Check headings and body text.", "Use a different set if readability is poor."]],
  "Theme Effects": ["Changes visual effects used by theme-based graphics.", "Use it when changing the overall visual style.", ["Design → Effects.", "Preview the effect sets.", "Choose one.", "Check shapes and graphics.", "Adjust if required."]],
  "Paragraph Spacing": ["Applies preset paragraph spacing across the document.", "Use it to improve readability quickly.", ["Design → Paragraph Spacing.", "Preview presets.", "Choose a spacing set.", "Review headings and body paragraphs.", "Adjust individual paragraphs if necessary."]],
  "Set as Default": ["Saves design settings as defaults for future documents when supported.", "Use it when the same design should be reused regularly.", ["Choose the desired theme/design settings.", "Design → Set as Default.", "Confirm the choice.", "Create/open a new document to check the default.", "Change it later if required."]],
  "Watermark": ["Places faint text or an image behind document content.", "Use it for Draft, Confidential, Sample, or other background labels.", ["Design → Watermark.", "Choose a preset or Custom Watermark.", "Set text/image options.", "Apply it.", "Check the pages and remove/change it if needed."]],
  "Page Color": ["Changes the page background color.", "Use it for designed documents; check printing requirements before using strong colors.", ["Design → Page Color.", "Choose a color.", "Check text contrast.", "Review several pages.", "Return to No Color if a normal white page is required."]],
  "Page Borders": ["Adds a border around the page.", "Use it for certificates, invitations, forms, and decorative documents.", ["Design → Page Borders.", "Choose border style.", "Set color and width.", "Choose the pages/section to which it applies.", "Choose OK and review the result."]]
};

function makeGenericSteps(tabName, title) {
  return [
    `Open Microsoft Word and select the ${tabName} tab.`,
    `Locate ${title} in the ${tabName} tab.`,
    `Click ${title} and read the available choices.`,
    `Select the option that matches your requirement.`,
    `Check the result in the document.`,
    `If the result is not correct, use Undo (Ctrl+Z) and try again.`
  ];
}

function getLessonContent() {

  const tab = getCurrentTab();
  const tool = getCurrentTool();

  if (!tool) {
    return {
      title: tab.name,
      what: `The ${tab.name} tab contains Microsoft Word commands for creating, formatting, reviewing, and viewing documents.`,
      when: `Use the ${tab.name} tab when you need one of its document-management tools.`,
      example: `Select an option from the left panel to see its purpose and step-by-step method.`,
      steps: makeGenericSteps(tab.name, tab.name)
    };
  }

  const title = tool.title || tool.name;
  const detail = lessonDetails[title];

  if (detail) {
    return {
      title,
      what: detail[0],
      when: detail[1],
      example: detail[2][detail[2].length - 1],
      steps: detail[2]
    };
  }

  return {
    title,
    what: `The ${title} option provides a Microsoft Word command for working with your document.`,
    when: `Use ${title} when your document requires this type of task.`,
    example: `${tab.name} → ${title} → choose the required option and check the result.`,
    steps: makeGenericSteps(tab.name, title)
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

      ${renderTabImage()}

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
          ${uiText[state.language].welcome}
        </div>

        <h1 class="main-title">
          ${uiText[state.language].title}
        </h1>

        <p class="subtitle">
          ${uiText[state.language].subtitle}
        </p>

      </div>


      <div class="controls">

        <button
          class="lang-btn ${state.language === "hi" ? "active" : ""}"
          type="button"
          data-language="hi"
        >
          हिन्दी 🌐
        </button>

        <button
          class="lang-btn ${state.language === "en" ? "active" : ""}"
          type="button"
          data-language="en"
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
            ${uiText[state.language].wordSubtitle}
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
        ${uiText[state.language].toolsIn} ${escapeHTML(tab.name)} ${uiText[state.language].tab}

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
                  ${escapeHTML(localizedToolName(tool.name))}
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
   WORD TAB IMAGE
   ========================================================= */

function renderTabImage() {

  const currentTab = getCurrentTab();

  const imageFile =
    tabImageFiles[currentTab.id] || `${currentTab.name}.png`;

  const tabImage =
    `/${encodeURIComponent(imageFile).replace(/%2F/g, "/")}`;

  return `

    <section class="tab-image-card word-tab-image-card">

      <div class="tab-image-header">

        <div>
          <strong>
            ${escapeHTML(currentTab.name)} ${uiText[state.language].tab}
          </strong>

          <span>
            ${uiText[state.language].interface}
          </span>
        </div>

        <button
          type="button"
          class="tab-image-zoom"
          data-tab-image="${escapeHTML(tabImage)}"
          data-tab-title="${escapeHTML(currentTab.name + " Tab")}"
        >
          🔍 ${uiText[state.language].fullscreen}
        </button>

      </div>

      <div class="tab-image-wrapper">

        <img
          src="${escapeHTML(tabImage)}"
          alt="${escapeHTML(currentTab.name + " Tab")}"
          class="tab-image"
          data-tab-image="${escapeHTML(tabImage)}"
          data-tab-title="${escapeHTML(currentTab.name + " Tab")}"
          onerror="this.parentElement.classList.add('image-not-found');"
        >

        <div class="image-not-found-message">
          🖼️ ${escapeHTML(imageFile)} is not available
        </div>

      </div>

    </section>

  `;

}


/* =========================================================
   LESSON
   ========================================================= */

function renderLesson() {

  const rawContent =
    getLessonContent();

  const content =
    getLocalizedLesson(rawContent);

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

            ${uiText[state.language].what}

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

            ${uiText[state.language].when}

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

            ${uiText[state.language].example}

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
            ${uiText[state.language].how}

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

  const steps = Array.isArray(content.steps)
    ? content.steps
    : [];

  return `

    <div class="steps-only">

      ${steps.map((step, index) => `

        <div class="step-text-only">

          <div class="step-number">
            ${index + 1}
          </div>

          <div class="step-content">
            ${escapeHTML(step)}
          </div>

        </div>

      `).join("")}


      <div class="example-box">

        <strong>
          💡 ${uiText[state.language].practice}:
        </strong>

        <br><br>

        ${uiText[state.language].practiceText}

        <br><br>

        <strong>${escapeHTML(content.title)}</strong>

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

  /* LANGUAGE */

  document
    .querySelectorAll("[data-language]")
    .forEach(button => {

      button.addEventListener("click", () => {

        state.language = button.dataset.language === "en"
          ? "en"
          : "hi";

        render();

      });

    });


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


  /* WORD TAB IMAGES */

  document
    .querySelectorAll("[data-tab-image]")
    .forEach(element => {

      element.addEventListener("click", () => {

        openImageViewer(
          element.dataset.tabImage,
          element.dataset.tabTitle || "Word Tab"
        );

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

.word-tab-image-card {
  margin: 18px 0 20px;
  width: 100%;
}

.info-card p {
  font-size: 15px;
  line-height: 1.75;
}

.info-card h3 {
  font-size: 17px;
  line-height: 1.35;
}

.example-box {
  margin-top: 22px;
  padding: 18px 20px;
  border-radius: 14px;
  background: #fff8e8;
  border: 1px solid #f1ddb0;
  color: #4b3a17;
  line-height: 1.65;
  font-size: 15px;
}

.steps-only {
  padding: 6px 0 0;
}

.step-text-only {
  display: grid;
  grid-template-columns: 42px 1fr;
  gap: 14px;
  align-items: start;
  margin-bottom: 22px;
}

.step-text-only .step-number {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #7144df;
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 900;
  font-size: 17px;
}

.step-content {
  padding-top: 5px;
  font-size: 16px;
  line-height: 1.7;
  color: #17233f;
}

.tab-image-card {
  margin: 0 0 22px;
  padding: 16px;
  border: 1px solid #e5ddff;
  border-radius: 20px;
  background: #fbfaff;
}

.tab-image-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  margin-bottom: 14px;
}

.tab-image-header > div {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.tab-image-header strong {
  font-size: 19px;
  color: #5034c8;
}

.tab-image-header span {
  font-size: 13px;
  color: #667085;
}

.tab-image-zoom {
  border: 0;
  border-radius: 10px;
  padding: 10px 14px;
  background: #eee9ff;
  color: #5335ce;
  font-weight: 700;
  cursor: pointer;
}

.tab-image-wrapper {
  position: relative;
  min-height: 260px;
  border-radius: 14px;
  overflow: hidden;
  background: #fff;
  border: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tab-image {
  display: block;
  width: 100%;
  max-height: 430px;
  object-fit: contain;
  cursor: zoom-in;
}

.image-not-found-message {
  display: none;
  color: #777;
  font-size: 16px;
  text-align: center;
  padding: 30px;
}

.tab-image-wrapper.image-not-found .tab-image {
  display: none;
}

.tab-image-wrapper.image-not-found .image-not-found-message {
  display: block;
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
