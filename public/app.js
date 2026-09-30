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
    (id === "excel" && state.page === "excel") ||
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
      : state.page === "excel"
        ? renderExcelContent()
        : `
          <section class="word-chooser">
            <div class="chooser-card">
              <div class="chooser-icon">🏠</div>
              <h2>Welcome to Joining Hands</h2>
              <p>Choose <strong>MS Word</strong> or <strong>MS Excel</strong> from the left menu to continue.</p>
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


  /* EXCEL */

  if (state.page === "excel") {
    attachExcelEvents();
  }

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

        if (nav === "excel") {

          state.page = "excel";
          excelState.section = "basic-learning";
          excelState.lesson = null;
          excelState.language =
            state.language === "en" ? "en" : "hi";

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
   JOINING HANDS — MS EXCEL LEARNING MODULE
   =========================================================
   This module is independent of the locked MS Word and
   AI Teacher sections.
   ========================================================= */

const excelState = {
  section: "basic-learning",
  lesson: null,
  language: "hi",
  videoBase: "/excel-videos/"
};

const excelBasicLearning = [
  {
    id: "what-is-excel",
    title: "What is MS Excel?",
    icon: "📊",
    en: {
      what: "Microsoft Excel is a spreadsheet program used to enter, organize, calculate, analyze and present data. It is widely used for marksheets, attendance, expenses, salary sheets, inventory, MIS reports and many other office tasks.",
      use: "Use Excel whenever you have information arranged in rows and columns and need calculations, sorting, filtering, reporting or analysis.",
      steps: [
        "Open Microsoft Excel and create a Blank Workbook.",
        "Enter headings in the first row, such as Name, Marks, Fees or Attendance.",
        "Enter the related information below each heading.",
        "Use formulas, formatting, sorting or filtering as required.",
        "Save the workbook with a meaningful file name."
      ],
      example: "A school can maintain a student marksheet with Student Name, English, Maths, Science, Total and Average in one Excel sheet.",
      practice: "Create a small table with five students and three subjects."
    },
    hi: {
      what: "Microsoft Excel एक spreadsheet program है जिसका उपयोग data को rows और columns में enter, organize, calculate, analyze और present करने के लिए किया जाता है। इसका उपयोग marksheet, attendance, expenses, salary, inventory और MIS reports में बहुत होता है।",
      use: "जब आपको data को rows और columns में रखना हो और calculation, sorting, filtering या report बनानी हो, तब Excel उपयोग करें।",
      steps: [
        "Microsoft Excel खोलें और Blank Workbook चुनें।",
        "पहली row में headings लिखें, जैसे Name, Marks, Fees या Attendance।",
        "हर heading के नीचे संबंधित information भरें।",
        "जरूरत के अनुसार formula, formatting, sorting या filtering का उपयोग करें।",
        "Workbook को meaningful file name से save करें।"
      ],
      example: "एक school Excel में Student Name, English, Maths, Science, Total और Average की marksheet बना सकता है।",
      practice: "पाँच students और तीन subjects की एक छोटी table बनाइए।"
    }
  },
  {
    id: "workbook-worksheet",
    title: "Workbook & Worksheet",
    icon: "📒",
    en: {
      what: "A Workbook is the complete Excel file. A Worksheet is an individual sheet inside that workbook. One workbook can contain multiple worksheets.",
      use: "Use separate worksheets when you want to keep related information organized, for example Students, Fees, Attendance and Reports inside one workbook.",
      steps: [
        "Open Excel and create a Blank Workbook.",
        "Look at the sheet tabs at the bottom. Sheet1 is a worksheet.",
        "Click the + button to add another worksheet.",
        "Double-click a sheet tab or use Rename to give it a meaningful name.",
        "Click different sheet tabs to move between worksheets."
      ],
      example: "A scholarship MIS workbook can have separate sheets named Students, Fees, Attendance and Final Report.",
      practice: "Create one workbook and make four sheets: Students, Fees, Attendance and Report."
    },
    hi: {
      what: "Workbook पूरी Excel file होती है। Worksheet उस file के अंदर मौजूद एक individual sheet होती है। एक workbook में कई worksheets हो सकती हैं।",
      use: "जब अलग-अलग लेकिन related data को व्यवस्थित रखना हो, तब अलग worksheets बनाएं। जैसे Students, Fees, Attendance और Reports।",
      steps: [
        "Excel खोलकर Blank Workbook बनाएं।",
        "नीचे दिखाई देने वाले sheet tabs देखें। Sheet1 एक worksheet है।",
        "+ button पर click करके नई worksheet जोड़ें।",
        "Sheet tab पर double-click करके उसका नाम बदलें।",
        "अलग-अलग sheet tabs पर click करके worksheets के बीच जाएं।"
      ],
      example: "Scholarship MIS workbook में Students, Fees, Attendance और Final Report की अलग-अलग sheets रखी जा सकती हैं।",
      practice: "एक workbook बनाकर Students, Fees, Attendance और Report नाम की चार sheets बनाएं।"
    }
  },
  {
    id: "rows-columns",
    title: "Rows & Columns",
    icon: "▦",
    en: {
      what: "Rows run horizontally and are identified by numbers. Columns run vertically and are identified by letters. Their intersection creates a cell, such as A1.",
      use: "Understanding rows and columns is essential for entering data, selecting ranges and writing formulas.",
      steps: [
        "Open a worksheet.",
        "Look at the numbers on the left: these are row numbers.",
        "Look at the letters at the top: these are column letters.",
        "Click cell A1, then B1, then A2 to see how the cell address changes.",
        "Select a complete row by clicking its number or a complete column by clicking its letter."
      ],
      example: "In a marksheet, one row can represent one student while columns represent subjects such as English, Maths and Science.",
      practice: "Enter five student names in column A and their marks in columns B, C and D."
    },
    hi: {
      what: "Rows horizontal होती हैं और numbers से पहचानी जाती हैं। Columns vertical होते हैं और letters से पहचाने जाते हैं। Row और Column के intersection को cell कहते हैं, जैसे A1।",
      use: "Data entry, range selection और formulas समझने के लिए rows और columns की basic understanding जरूरी है।",
      steps: [
        "एक worksheet खोलें।",
        "बाईं तरफ के numbers देखें — ये row numbers हैं।",
        "ऊपर के letters देखें — ये column letters हैं।",
        "A1, फिर B1 और फिर A2 पर click करके cell address का बदलाव देखें।",
        "Row number पर click करके पूरी row और column letter पर click करके पूरा column select करें।"
      ],
      example: "Marksheet में एक row एक student को represent कर सकती है और columns English, Maths और Science को।",
      practice: "Column A में पाँच student names और B, C, D में उनके marks भरें।"
    }
  },
  {
    id: "add-delete-rows-columns",
    title: "Add / Delete Rows & Columns",
    icon: "➕",
    en: {
      what: "Excel lets you insert new rows or columns and remove rows or columns that you no longer need.",
      use: "Use this when your data structure changes, such as adding a new subject column or inserting a new student between existing records.",
      steps: [
        "Select the row number or column letter where you want the new row or column.",
        "Right-click the selection.",
        "Choose Insert to add a row or column.",
        "To remove one, select the row or column and choose Delete.",
        "Check the surrounding data after inserting or deleting to make sure the layout is correct."
      ],
      example: "If a marksheet needs a new Computer subject between Maths and Science, insert a new column at the required position.",
      practice: "Create a three-column table, then insert one new column and one new row. Delete them again."
    },
    hi: {
      what: "Excel में आप नई rows या columns जोड़ सकते हैं और जरूरत न होने पर उन्हें delete भी कर सकते हैं।",
      use: "जब data की structure बदलती है, जैसे नया subject जोड़ना या existing records के बीच नया student जोड़ना, तब इसका उपयोग करें।",
      steps: [
        "जिस row या column के पास नया row/column चाहिए उसे select करें।",
        "Selection पर right-click करें।",
        "नई row या column के लिए Insert चुनें।",
        "हटाने के लिए row/column select करके Delete चुनें।",
        "Insert या Delete के बाद आसपास के data को check करें।"
      ],
      example: "अगर marksheet में Maths और Science के बीच Computer subject जोड़ना है, तो उस position पर नया column insert करें।",
      practice: "तीन columns की table बनाएं, एक नया column और एक नई row insert करें, फिर दोनों को delete करके देखें।"
    }
  },
  {
    id: "editing-data",
    title: "Editing Data",
    icon: "✏️",
    en: {
      what: "Editing data means changing information that is already entered in a cell. You can replace, correct or modify cell contents.",
      use: "Use it when a name, number, date or other information has been entered incorrectly or needs updating.",
      steps: [
        "Click the cell containing the information.",
        "Type the new value and press Enter to replace the old value.",
        "Or double-click the cell to edit part of the existing text.",
        "You can also select the cell and edit its content in the Formula Bar.",
        "Use Ctrl+Z if you make a mistake and need to undo the change."
      ],
      example: "If a student's name was entered as 'Rhaul' instead of 'Rahul', edit the cell and correct the spelling.",
      practice: "Enter five names, deliberately make one spelling mistake, then correct it using two different editing methods."
    },
    hi: {
      what: "Editing data का मतलब है cell में पहले से मौजूद information को बदलना, सही करना या update करना।",
      use: "जब name, number, date या कोई दूसरी information गलत हो या update करनी हो, तब इसका उपयोग करें।",
      steps: [
        "जिस cell में information है उस पर click करें।",
        "नई value type करके Enter दबाएं — पुरानी value replace हो जाएगी।",
        "या cell पर double-click करके existing text के किसी हिस्से को edit करें।",
        "आप Formula Bar से भी cell की content edit कर सकते हैं।",
        "गलती होने पर Ctrl+Z से change undo करें।"
      ],
      example: "अगर student का नाम 'Rhaul' लिखा गया है और सही नाम 'Rahul' है, तो cell को edit करके spelling ठीक करें।",
      practice: "पाँच names लिखें, एक में जानबूझकर spelling mistake करें और दो अलग methods से उसे correct करें।"
    }
  },
  {
    id: "flash-fill",
    title: "Flash Fill",
    icon: "⚡",
    en: {
      what: "Flash Fill automatically recognizes a pattern in your data and fills the remaining cells based on that pattern.",
      use: "Use it for quick text transformations such as separating a full name, extracting a first name, creating an ID pattern or changing the format of repeated text.",
      steps: [
        "Enter the original data in a column.",
        "In the next column, type the desired result for the first row.",
        "Start typing the desired result for the second row. Excel may preview the pattern.",
        "Press Enter if the preview is correct, or use Data > Flash Fill / Ctrl+E.",
        "Check the filled values before using them in an important report."
      ],
      example: "If A2 contains 'Rahul Kumar' and you want only 'Rahul' in B2, type Rahul. Excel can recognize the pattern and fill first names for the remaining rows.",
      practice: "Create a list of five full names and use Flash Fill to create a separate First Name column."
    },
    hi: {
      what: "Flash Fill आपके data में pattern पहचानकर बाकी cells को उसी pattern के अनुसार automatically fill करता है।",
      use: "Full name से first name निकालने, text का format बदलने, ID pattern बनाने या repeated text transformation जैसे कामों में इसका उपयोग करें।",
      steps: [
        "एक column में original data भरें।",
        "अगले column में पहली row का desired result लिखें।",
        "दूसरी row में desired result लिखना शुरू करें। Excel pattern का preview दिखा सकता है।",
        "Preview सही हो तो Enter दबाएं या Data > Flash Fill / Ctrl+E का उपयोग करें।",
        "Important report में उपयोग करने से पहले filled values को check करें।"
      ],
      example: "अगर A2 में 'Rahul Kumar' है और B2 में केवल 'Rahul' चाहिए, तो Rahul लिखें। Excel बाकी rows के first names का pattern पहचान सकता है।",
      practice: "पाँच full names की list बनाकर Flash Fill से अलग First Name column तैयार करें।"
    }
  },
  {
    id: "basic-formatting",
    title: "Basic Formatting",
    icon: "🎨",
    en: {
      what: "Formatting changes how data looks without changing the underlying value. It includes font, size, bold, color, alignment, borders, fill color and number formats.",
      use: "Use formatting to make spreadsheets easier to read, understand and present professionally.",
      steps: [
        "Select the cells you want to format.",
        "Use the Home tab to change font, size, Bold, Italic or font color.",
        "Use Fill Color and Borders to highlight and organize information.",
        "Use alignment and Wrap Text when content needs better positioning.",
        "Use number formats such as Number, Currency, Percentage or Date where appropriate."
      ],
      example: "In a fee report, make the heading bold, use borders for the table, format fees as currency and use a fill color for important headings.",
      practice: "Create a five-row student table and format the heading, borders, marks and fee column professionally."
    },
    hi: {
      what: "Formatting का मतलब data की value बदले बिना उसके appearance को बदलना है। इसमें font, size, bold, color, alignment, borders, fill color और number formats शामिल हैं।",
      use: "Spreadsheet को readable, understandable और professional बनाने के लिए formatting का उपयोग करें।",
      steps: [
        "जिन cells को format करना है उन्हें select करें।",
        "Home tab से font, size, Bold, Italic या font color बदलें।",
        "Fill Color और Borders से information को highlight और organize करें।",
        "जरूरत के अनुसार alignment और Wrap Text का उपयोग करें।",
        "Number, Currency, Percentage या Date जैसे number formats चुनें।"
      ],
      example: "Fee report में heading को bold करें, table में borders लगाएं, fees को currency format में रखें और important headings को highlight करें।",
      practice: "पाँच students की table बनाकर heading, borders, marks और fee column को professional तरीके से format करें।"
    }
  }
];

const excelBasicFormulas = [
  ["SUM","➕","Add numbers","=SUM(B2:B6)"],
  ["MIN","⬇️","Find the smallest value","=MIN(B2:B6)"],
  ["MAX","⬆️","Find the largest value","=MAX(B2:B6)"],
  ["AVERAGE","📊","Calculate the average","=AVERAGE(B2:B6)"],
  ["COUNT","🔢","Count cells containing numbers","=COUNT(B2:B6)"],
  ["COUNTA","🔢","Count non-empty cells","=COUNTA(A2:A6)"],
  ["COUNTBLANK","◻️","Count empty cells","=COUNTBLANK(A2:A6)"],
  ["IF","🔀","Return one result when a condition is true and another when false","=IF(B2>=40,\"Pass\",\"Fail\")"],
  ["LARGE","🏆","Find the nth largest value","=LARGE(B2:B10,2)"],
  ["SMALL","🏅","Find the nth smallest value","=SMALL(B2:B10,2)"],
  ["ROUND","🔵","Round a number to specified decimal places","=ROUND(B2,2)"],
  ["ROUNDUP","⬆️","Round a number upward","=ROUNDUP(B2,2)"],
  ["ROUNDDOWN","⬇️","Round a number downward","=ROUNDDOWN(B2,2)"],
  ["DAY","📅","Extract the day from a date","=DAY(A2)"],
  ["MONTH","📅","Extract the month from a date","=MONTH(A2)"],
  ["YEAR","📅","Extract the year from a date","=YEAR(A2)"],
  ["DATE","📅","Create a date from year, month and day","=DATE(2026,9,29)"],
  ["TODAY","📅","Show today's date","=TODAY()"],
  ["NOW","🕒","Show current date and time","=NOW()"],
  ["LOWER","🔤","Convert text to lowercase","=LOWER(A2)"],
  ["UPPER","🔠","Convert text to uppercase","=UPPER(A2)"],
  ["PROPER","🔤","Capitalize the first letter of each word","=PROPER(A2)"],
  ["TRIM","🧹","Remove extra spaces from text","=TRIM(A2)"],
  ["LEFT","⬅️","Extract characters from the left","=LEFT(A2,5)"],
  ["RIGHT","➡️","Extract characters from the right","=RIGHT(A2,4)"],
  ["MID","↔️","Extract characters from the middle","=MID(A2,3,5)"],
  ["LEN","📏","Count the number of characters","=LEN(A2)"]
];

const excelAdvancedFormulas = [
  ["XLOOKUP","🔎","Find a value in a range and return a related value","=XLOOKUP(A2,D2:D10,E2:E10,\"Not found\")","Lookup & Reference"],
  ["VLOOKUP","🔎","Look vertically through the first column and return a related value","=VLOOKUP(A2,D2:F10,3,FALSE)","Lookup & Reference"],
  ["HLOOKUP","🔎","Look horizontally across the first row and return a related value","=HLOOKUP(B1,B1:F3,3,FALSE)","Lookup & Reference"],
  ["INDEX","📍","Return a value from a specific position in a range","=INDEX(B2:D10,3,2)","Lookup & Reference"],
  ["MATCH","🔍","Find the position of a value in a range","=MATCH(A2,D2:D10,0)","Lookup & Reference"],
  ["XMATCH","🔍","Find the relative position of a value with flexible matching","=XMATCH(A2,D2:D10,0)","Lookup & Reference"],
  ["INDEX + MATCH","🔗","Look up a value using a flexible row/column combination","=INDEX(E2:E10,MATCH(A2,D2:D10,0))","Lookup & Reference"],
  ["FILTER","🧪","Return only rows that meet a condition","=FILTER(A2:C10,C2:C10=\"Delhi\")","Lookup & Reference"],
  ["SORT","↕️","Sort a range using a formula","=SORT(A2:C10,2,1)","Lookup & Reference"],
  ["UNIQUE","✨","Return unique values from a range","=UNIQUE(A2:A20)","Lookup & Reference"],
  ["IF","🔀","Make a logical decision","=IF(B2>=50,\"Pass\",\"Fail\")","Logical"],
  ["IFS","🧠","Test multiple conditions in order","=IFS(B2>=80,\"A\",B2>=60,\"B\",B2>=40,\"C\",TRUE,\"F\")","Logical"],
  ["AND","🔗","Check whether all conditions are true","=AND(B2>=40,C2>=40)","Logical"],
  ["OR","🔀","Check whether at least one condition is true","=OR(B2>=40,C2>=40)","Logical"],
  ["IFERROR","🛡️","Return a custom result when a formula produces an error","=IFERROR(A2/B2,\"Check data\")","Logical"],
  ["SUMIFS","➕","Add values meeting multiple conditions","=SUMIFS(E2:E100,B2:B100,\"Delhi\",C2:C100,\"Paid\")","Conditional / Calculation"],
  ["COUNTIFS","🔢","Count cells meeting multiple conditions","=COUNTIFS(B2:B100,\"Delhi\",C2:C100,\"Paid\")","Conditional / Calculation"],
  ["AVERAGEIFS","📊","Average values meeting multiple conditions","=AVERAGEIFS(E2:E100,B2:B100,\"Delhi\")","Conditional / Calculation"],
  ["MAXIFS","⬆️","Find the largest value meeting conditions","=MAXIFS(E2:E100,B2:B100,\"Delhi\")","Conditional / Calculation"],
  ["MINIFS","⬇️","Find the smallest value meeting conditions","=MINIFS(E2:E100,B2:B100,\"Delhi\")","Conditional / Calculation"],
  ["TEXT","🔤","Display a number or date in a chosen text format","=TEXT(A2,\"dd-mmm-yyyy\")","Text"],
  ["TEXTJOIN","🔗","Join text from multiple cells with a delimiter","=TEXTJOIN(\" \",TRUE,A2:C2)","Text"],
  ["LEFT","⬅️","Extract characters from the left","=LEFT(A2,5)","Text"],
  ["RIGHT","➡️","Extract characters from the right","=RIGHT(A2,4)","Text"],
  ["MID","↔️","Extract characters from the middle","=MID(A2,3,5)","Text"],
  ["EXACT","✅","Check whether two text values are exactly the same","=EXACT(A2,B2)","Text"],
  ["TODAY","📅","Return today's date","=TODAY()","Date & Time"],
  ["NOW","🕒","Return current date and time","=NOW()","Date & Time"],
  ["DATE","📅","Create a date from year, month and day","=DATE(2026,9,29)","Date & Time"],
  ["DATEDIF","📅","Calculate the difference between two dates","=DATEDIF(A2,B2,\"Y\")","Date & Time"],
  ["WORKDAY","💼","Calculate a date a number of working days away","=WORKDAY(A2,10)","Date & Time"],
  ["PMT","💰","Calculate a periodic loan payment","=PMT(8%/12,60,-500000)","Financial / Useful Office"]
];

const excelAdvancedFeatures = [
  ["Conditional Formatting","🎨","Automatically format cells when a rule is met.","Useful for highlighting low marks, overdue fees, high sales or duplicate-looking patterns.","Home → Conditional Formatting → choose a rule → set the condition → choose the format → Apply."],
  ["Data Validation","✅","Control what users can enter into a cell.","Useful for restricting entries to dates, numbers, a list or a defined range.","Data → Data Validation → choose Allow → set the rule → OK."],
  ["Drop-down Lists","🔽","Give users a selectable list of allowed values.","Useful for Course, Gender, Status, Region, Payment Status and similar MIS fields.","Create the allowed list → select target cells → Data → Data Validation → List → select Source → OK."],
  ["Pivot Tables","📊","Summarize and analyze large datasets without changing the original data.","Useful for MIS summaries such as students by course, fees by month or sales by region.","Select the dataset → Insert → PivotTable → choose location → drag fields into Rows, Columns, Values and Filters."],
  ["Pivot Charts","📈","Create a chart linked to a PivotTable summary.","Useful when a report needs both a summarized table and a visual chart.","Select the PivotTable → Insert → PivotChart → choose chart type → customize the chart."],
  ["Slicers","🎛️","Provide clickable visual filters for tables or PivotTables.","Useful when users need to filter a report quickly by Course, Region, Status or Month.","Select a table/PivotTable → Insert → Slicer → select fields → use the slicer buttons to filter."],
  ["Remove Duplicates","🧹","Remove repeated records from selected columns.","Useful for cleaning student, customer, employee or inventory lists.","Select the dataset → Data → Remove Duplicates → choose columns → OK → review the result."],
  ["Text to Columns","✂️","Split data from one column into multiple columns.","Useful for separating Full Name, comma-separated data, codes or imported text.","Select the column → Data → Text to Columns → choose Delimited or Fixed Width → follow the wizard → Finish."],
  ["Protect Sheet","🔒","Prevent unwanted changes to a worksheet.","Useful when a report is ready and users should only edit permitted cells.","Review → Protect Sheet → set permissions/password if needed → confirm."],
  ["Protect Workbook","🔐","Protect workbook structure so sheets cannot be freely added, deleted, moved or renamed.","Useful for controlled office templates and MIS workbooks.","Review → Protect Workbook → choose Structure → set password if needed → confirm."],
  ["Group / Ungroup","🗂️","Group rows or columns so sections can be collapsed and expanded.","Useful for monthly reports, department-wise data and long worksheets.","Select rows or columns → Data → Group. To reverse it, select the grouped area → Data → Ungroup."],
  ["Advanced Filter","🔎","Filter data using a more controlled criteria range and optionally copy filtered results elsewhere.","Useful for complex MIS reporting and extracting records that meet multiple criteria.","Prepare the criteria range → select the dataset → Data → Advanced → choose filter/copy option → set criteria range → OK."]
];

const excelVideoName = (title) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") + ".mp4";

function excelT(value) {
  return escapeHTML(value);
}

function renderExcelContent() {
  return `
    <section class="excel-shell">
      <div class="excel-header">
        <div>
          <div class="excel-kicker">JOINING HANDS • PRACTICAL LAB</div>
          <h1>📊 MS Excel</h1>
          <p>Learn Excel from beginner level to real office & MIS work.</p>
        </div>
        <button class="excel-ai-button" type="button" data-excel-ai="1">🤖 Ask AI Teacher</button>
      </div>

      <div class="excel-section-tabs">
        ${excelSectionButton("basic-learning","🟢","Basic Learning Tool")}
        ${excelSectionButton("basic-formulas","🔵","Basic Formulas")}
        ${excelSectionButton("advanced-formulas","🟣","Advanced Formulas")}
        ${excelSectionButton("advanced-features","🟠","Advanced Features")}
      </div>

      ${
        excelState.section === "basic-learning"
          ? renderExcelBasicLearning()
          : excelState.section === "basic-formulas"
            ? renderExcelFormulaList(false)
            : excelState.section === "advanced-formulas"
              ? renderExcelFormulaList(true)
              : renderExcelAdvancedFeatures()
      }
    </section>
  `;
}

function excelSectionButton(id, icon, label) {
  return `
    <button
      type="button"
      class="excel-section-tab ${excelState.section === id ? "active" : ""}"
      data-excel-section="${id}"
    >
      <span>${icon}</span>
      <span>${excelT(label)}</span>
    </button>
  `;
}

function renderExcelBasicLearning() {
  const current = excelState.lesson
    ? excelBasicLearning.find(x => x.id === excelState.lesson)
    : null;

  if (current) {
    return renderExcelLearningLesson(current);
  }

  return `
    <div class="excel-intro-card">
      <span class="excel-big-icon">📘</span>
      <div>
        <h2>Basic Learning Tool</h2>
        <p>First understand how Excel works. Formulas come after these basics.</p>
      </div>
    </div>

    <div class="excel-card-grid">
      ${excelBasicLearning.map((item, index) => `
        <button type="button" class="excel-topic-card" data-excel-basic="${item.id}">
          <span class="excel-topic-number">${index + 1}</span>
          <span class="excel-topic-icon">${item.icon}</span>
          <strong>${excelT(item.title)}</strong>
          <span>Learn step-by-step →</span>
        </button>
      `).join("")}
    </div>
  `;
}

function renderExcelLearningLesson(item) {
  const data = item[excelState.language] || item.en;
  const video = excelVideoName(item.title);

  return `
    <div class="excel-back-row">
      <button type="button" class="excel-back" data-excel-back="basic-learning">← Back to Basic Learning</button>
    </div>

    <article class="excel-lesson-card">
      <div class="excel-lesson-title">
        <span>${item.icon}</span>
        <div>
          <div class="excel-kicker">BASIC LEARNING TOOL</div>
          <h2>${excelT(item.title)}</h2>
        </div>
      </div>

      <div class="excel-language-row">
        <button type="button" class="${excelState.language === "en" ? "active" : ""}" data-excel-language="en">English</button>
        <button type="button" class="${excelState.language === "hi" ? "active" : ""}" data-excel-language="hi">हिन्दी</button>
      </div>

      <div class="excel-video-card">
        <div class="excel-video-label">🎥 Video Tutorial</div>
        <video controls preload="metadata">
          <source src="${excelState.videoBase}${video}" type="video/mp4">
          Your browser does not have a video for this lesson yet.
        </video>
        <p>Upload your video as <code>public/excel-videos/${video}</code>.</p>
      </div>

      ${excelExplanationBlock("What is it?", data.what)}
      ${excelExplanationBlock("What does it do?", data.use)}
      ${excelStepsBlock("How to use it — Step by step", data.steps)}
      ${excelExplanationBlock("Real-life example", data.example)}

      <div class="excel-practice-prompt">
        <h3>🧪 Practice Task</h3>
        <p>${excelT(data.practice)}</p>
      </div>
    </article>
  `;
}

function excelExplanationBlock(title, text) {
  return `
    <section class="excel-explain-block">
      <h3>${excelT(title)}</h3>
      <p>${excelT(text)}</p>
    </section>
  `;
}

function excelStepsBlock(title, steps) {
  return `
    <section class="excel-explain-block">
      <h3>${excelT(title)}</h3>
      <ol class="excel-steps">
        ${steps.map(step => `<li>${excelT(step)}</li>`).join("")}
      </ol>
    </section>
  `;
}

function renderExcelFormulaList(isAdvanced) {
  const list = isAdvanced ? excelAdvancedFormulas : excelBasicFormulas;
  const current = excelState.lesson
    ? list.find(x => x[0] === excelState.lesson)
    : null;

  if (current) {
    return renderExcelFormulaLesson(current, isAdvanced);
  }

  const grouped = isAdvanced
    ? groupAdvancedExcelFormulas(list)
    : { "Basic Formulas": list };

  return `
    <div class="excel-intro-card">
      <span class="excel-big-icon">${isAdvanced ? "🧠" : "🧮"}</span>
      <div>
        <h2>${isAdvanced ? "Advanced Formulas" : "Basic Formulas"}</h2>
        <p>${isAdvanced ? "Powerful formulas for real office and MIS work." : "Start with the formulas used most often by beginners."}</p>
      </div>
    </div>

    ${Object.entries(grouped).map(([group, items]) => `
      <div class="excel-formula-group">
        <h3>${excelT(group)}</h3>
        <div class="excel-formula-grid">
          ${items.map((item, index) => `
            <button type="button" class="excel-formula-card" data-excel-formula="${excelT(item[0])}">
              <span class="excel-formula-icon">${item[1]}</span>
              <span class="excel-formula-name">${excelT(item[0])}</span>
              <span class="excel-formula-desc">${excelT(item[2])}</span>
              <code>${excelT(item[3])}</code>
              <span class="excel-open-label">Open lesson →</span>
            </button>
          `).join("")}
        </div>
      </div>
    `).join("")}
  `;
}

function groupAdvancedExcelFormulas(list) {
  const groups = {};
  list.forEach(item => {
    const group = item[4] || "Advanced Formulas";
    if (!groups[group]) groups[group] = [];
    groups[group].push(item);
  });
  return groups;
}

function renderExcelFormulaLesson(item, isAdvanced) {
  const name = item[0];
  const icon = item[1];
  const purpose = item[2];
  const syntax = item[3];
  const video = excelVideoName(name);
  const data = excelFormulaDetails(name, purpose, syntax, isAdvanced);

  return `
    <div class="excel-back-row">
      <button type="button" class="excel-back" data-excel-back="${isAdvanced ? "advanced-formulas" : "basic-formulas"}">← Back to ${isAdvanced ? "Advanced Formulas" : "Basic Formulas"}</button>
    </div>

    <article class="excel-lesson-card">
      <div class="excel-lesson-title">
        <span>${icon}</span>
        <div>
          <div class="excel-kicker">${isAdvanced ? "ADVANCED FORMULA" : "BASIC FORMULA"}</div>
          <h2>${excelT(name)}</h2>
          <p>${excelT(purpose)}</p>
        </div>
      </div>

      <div class="excel-language-row">
        <button type="button" class="${excelState.language === "en" ? "active" : ""}" data-excel-language="en">English</button>
        <button type="button" class="${excelState.language === "hi" ? "active" : ""}" data-excel-language="hi">हिन्दी</button>
      </div>

      <div class="excel-video-card">
        <div class="excel-video-label">🎥 ${excelT(name)} Video Tutorial</div>
        <video controls preload="metadata">
          <source src="${excelState.videoBase}${video}" type="video/mp4">
          Your browser does not have a video for this formula yet.
        </video>
        <p>Upload your video as <code>public/excel-videos/${video}</code>.</p>
      </div>

      ${excelExplanationBlock(data.labels.what, data.what)}
      ${excelExplanationBlock(data.labels.do, data.does)}
      ${excelExplanationBlock(data.labels.when, data.when)}
      <section class="excel-explain-block">
        <h3>${excelT(data.labels.syntax)}</h3>
        <pre class="excel-code">${excelT(syntax)}</pre>
      </section>
      ${excelStepsBlock(data.labels.steps, data.steps)}
      ${excelExplanationBlock(data.labels.example, data.example)}

      ${renderExcelPractice(name)}
    </article>
  `;
}

function excelFormulaDetails(name, purpose, syntax, isAdvanced) {
  const hi = excelState.language === "hi";
  const labels = hi
    ? {
        what: "यह क्या है?",
        do: "यह क्या करता है?",
        when: "कब उपयोग करें?",
        syntax: "Syntax",
        steps: "कैसे उपयोग करें — Step by step",
        example: "Real-life example"
      }
    : {
        what: "What is it?",
        do: "What does it do?",
        when: "When should you use it?",
        syntax: "Syntax",
        steps: "How to use it — Step by step",
        example: "Real-life example"
      };

  const examples = {
    SUM: ["SUM numbers को जोड़कर total देता है।", "Marks, fees, expenses या sales का total निकालने में उपयोग करें.", "एक marksheet में B2:D2 के marks को जोड़कर Total column में result निकालें."],
    MIN: ["MIN range में सबसे छोटी numeric value देता है।", "Lowest marks, lowest price या minimum expense खोजने में उपयोग करें.", "Students के marks में सबसे कम score पता करें."],
    MAX: ["MAX range में सबसे बड़ी numeric value देता है।", "Highest marks, highest sale या maximum value खोजने में उपयोग करें.", "Class में highest marks निकालें."],
    AVERAGE: ["AVERAGE numbers का arithmetic average निकालता है।", "Average marks, average sales या average expense जानने में उपयोग करें.", "Five students के Maths marks का average निकालें."],
    COUNT: ["COUNT केवल numeric cells की संख्या गिनता है।", "कितने cells में numbers मौजूद हैं यह जानने के लिए उपयोग करें.", "एक marks column में कितने students के marks entered हैं पता करें."],
    COUNTA: ["COUNTA खाली न होने वाले cells गिनता है।", "Names, IDs या mixed data वाली filled cells count करने में उपयोग करें.", "Student Name column में कितने records filled हैं गिनें."],
    COUNTBLANK: ["COUNTBLANK खाली cells की संख्या बताता है।", "Missing information या incomplete forms खोजने में उपयोग करें.", "Student records में कितने phone numbers missing हैं पता करें."],
    IF: ["IF condition को check करके अलग result देता है।", "Pass/Fail, Paid/Pending, Eligible/Not Eligible जैसे decisions में उपयोग करें.", "अगर marks 40 या अधिक हैं तो Pass, नहीं तो Fail."],
    LARGE: ["LARGE nth largest value निकालता है।", "Top 1, Top 2, Top 3 scores जैसी ranking में उपयोग करें.", "Class के second-highest marks निकालें."],
    SMALL: ["SMALL nth smallest value निकालता है।", "Lowest values या bottom rankings निकालने में उपयोग करें.", "Class के second-lowest marks निकालें."],
    ROUND: ["ROUND number को specified decimal places तक round करता है।", "Reports में clean decimal values दिखाने के लिए उपयोग करें.", "Average 78.456 को 78.46 दिखाएं."],
    ROUNDUP: ["ROUNDUP number को ऊपर की तरफ round करता है।", "जब calculation में हमेशा upward rounding चाहिए.", "2.341 को two decimals पर 2.35 करना."],
    ROUNDDOWN: ["ROUNDDOWN number को नीचे की तरफ round करता है।", "जब value को specified decimals तक नीचे रखना हो.", "2.349 को two decimals पर 2.34 करना."],
    DAY: ["DAY date से day number निकालता है।", "Date-based reports में day अलग निकालने के लिए.", "15-Sep-2026 से 15 निकालना."],
    MONTH: ["MONTH date से month number निकालता है।", "Monthly reports और grouping में.", "15-Sep-2026 से 9 निकालना."],
    YEAR: ["YEAR date से year निकालता है।", "Year-wise reports और records में.", "15-Sep-2026 से 2026 निकालना."],
    DATE: ["DATE year, month और day से valid Excel date बनाता है।", "जब date components अलग-अलग cells में हों.", "Year, Month और Day columns से admission date बनाना."],
    TODAY: ["TODAY current date automatically देता है।", "Daily reports, age/date calculations या due-date sheets में.", "Report में today's date automatically दिखाना."],
    NOW: ["NOW current date और time देता है।", "Timestamp या current date-time display के लिए.", "Report में last-open/current time दिखाना."],
    LOWER: ["LOWER text को lowercase में बदलता है।", "Data standardization में.", "RAHUL KUMAR को rahul kumar बनाना."],
    UPPER: ["UPPER text को uppercase में बदलता है।", "IDs, codes और headings को standardize करने में.", "delhi को DELHI बनाना."],
    PROPER: ["PROPER हर word का first letter capital करता है।", "Names और titles को proper case में लाने के लिए.", "rahul kumar को Rahul Kumar बनाना."],
    TRIM: ["TRIM extra spaces हटाता है।", "Imported या copied data साफ करने में.", "Name के बीच accidental extra spaces हटाना."],
    LEFT: ["LEFT text के left side से characters निकालता है।", "Codes या names के शुरुआती characters निकालने में.", "Student ID के पहले 3 characters निकालना."],
    RIGHT: ["RIGHT text के right side से characters निकालता है।", "Codes या phone/ID endings निकालने में.", "ID के आखिरी 4 digits निकालना."],
    MID: ["MID text के बीच से specified characters निकालता है।", "Structured IDs या codes से middle part निकालने में.", "Admission code से बीच का year segment निकालना."],
    LEN: ["LEN text में total characters गिनता है।", "Data validation या text length checking में.", "Phone/ID field की length check करना."]
  };

  const item = examples[name];
  if (item) {
    return {
      labels,
      what: hi ? item[0] : purpose,
      does: hi ? item[0] : purpose,
      when: hi ? item[1] : `Use ${name} when you need to ${purpose.toLowerCase()}.`,
      steps: hi
        ? [
            "Practice table में required data enter करें।",
            `जिस cell में result चाहिए वहां ${syntax} जैसी formula लिखें।`,
            "Enter दबाएं और result देखें।",
            "जरूरत हो तो source values बदलकर result दोबारा देखें।"
          ]
        : [
            "Enter the required data in the practice table.",
            `Select the result cell and enter a formula such as ${syntax}.`,
            "Press Enter and check the result.",
            "Change a source value and confirm that the result updates."
          ],
      example: hi ? item[2] : `Example: ${item[2]}`
    };
  }

  return {
    labels,
    what: hi ? `${name} एक Excel function है जो ${purpose.toLowerCase()}।` : `${name} is an Excel function used to ${purpose.toLowerCase()}.`,
    does: hi ? purpose : purpose,
    when: hi ? "जब इस तरह की calculation या data task बार-बार करना हो, तब इसका उपयोग करें।" : `Use it when this calculation or data task needs to be performed reliably and repeatedly.`,
    steps: hi
      ? ["Practice data तैयार करें।", `Result cell में ${syntax} जैसी formula लिखें।`, "Enter दबाएं और result देखें।", "Source data बदलकर formula का behavior observe करें।"]
      : ["Prepare the practice data.", `Enter a formula such as ${syntax} in the result cell.`, "Press Enter and review the result.", "Change the source data and observe the updated result."],
    example: hi ? "Real office/MIS data पर formula लगाकर result verify करें।" : "Apply the formula to a small office/MIS dataset and verify the result."
  };
}

function renderExcelPractice(name) {
  const config = excelPracticeConfig(name);
  const hi = excelState.language === "hi";

  return `
    <section class="excel-practice">
      <div class="excel-practice-heading">
        <div>
          <div class="excel-kicker">PRACTICE LAB</div>
          <h3>🧪 ${hi ? "अब खुद practice करें" : "Now practice it yourself"}</h3>
          <p>${hi ? "नीचे cells में values/formula बदलकर real-time result देखें।" : "Edit cells and formulas below to see the result in real time."}</p>
        </div>
        <button type="button" class="excel-reset" data-excel-reset="1">↻ Reset</button>
      </div>

      <div class="excel-task">
        <strong>${hi ? "Practice Task:" : "Practice Task:"}</strong>
        ${excelT(config.task)}
      </div>

      <div class="excel-grid-wrap">
        <table class="excel-grid" data-excel-grid>
          <tbody>
            ${config.rows.map((row, r) => `
              <tr>
                <th class="excel-row-head">${r + 1}</th>
                ${row.map((cell, c) => `
                  <td>
                    <input
                      class="excel-cell"
                      data-excel-cell="${r},${c}"
                      value="${excelT(cell)}"
                      aria-label="Excel cell ${String.fromCharCode(65+c)}${r+1}"
                    >
                  </td>
                `).join("")}
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>

      <div class="excel-practice-help">
        <span>💡 ${hi ? "Formula cell में = से शुरू करें। उदाहरण: =SUM(B2:D2)" : "Start a formula with =. Example: =SUM(B2:D2)"}</span>
        <span class="excel-practice-result" data-excel-result>Ready</span>
      </div>
    </section>
  `;
}

function excelPracticeConfig(name) {
  const common = {
    task: `Use ${name} in the highlighted result cells.`,
    rows: [
      ["Student","English","Maths","Science","Result"],
      ["Rahul","78","85","72",""],
      ["Priya","88","91","79",""],
      ["Amit","65","72","70",""],
      ["Neha","92","76","88",""]
    ]
  };

  const configs = {
    SUM: {
      task: "In E2, enter =SUM(B2:D2), then copy it down for the other students.",
      rows: common.rows
    },
    AVERAGE: {
      task: "In E2, enter =AVERAGE(B2:D2), then copy it down.",
      rows: common.rows
    },
    MIN: {
      task: "In E2, enter =MIN(B2:D2) to find Rahul's lowest subject mark.",
      rows: common.rows
    },
    MAX: {
      task: "In E2, enter =MAX(B2:D2) to find Rahul's highest subject mark.",
      rows: common.rows
    },
    COUNT: {
      task: "In E2, enter =COUNT(B2:D2) to count Rahul's numeric marks.",
      rows: common.rows
    },
    COUNTA: {
      task: "In E2, enter =COUNTA(A2:A5) to count the student names.",
      rows: common.rows
    },
    COUNTBLANK: {
      task: "Delete one or two marks, then use =COUNTBLANK(B2:D5) to count missing marks.",
      rows: common.rows
    },
    IF: {
      task: "In E2, enter =IF(B2>=40,\"Pass\",\"Fail\") and copy it down.",
      rows: [
        ["Student","English","Maths","Science","Result"],
        ["Rahul","78","85","72",""],
        ["Priya","88","91","79",""],
        ["Amit","35","72","70",""],
        ["Neha","92","36","88",""]
      ]
    },
    LARGE: {
      task: "In E2, enter =LARGE(B2:B5,2) to find the second-highest English mark.",
      rows: common.rows
    },
    SMALL: {
      task: "In E2, enter =SMALL(B2:B5,2) to find the second-lowest English mark.",
      rows: common.rows
    },
    LOWER: {
      task: "Replace a name with uppercase text and use =LOWER(A2).",
      rows: [["Name","Result"],["RAHUL KUMAR",""] ,["PRIYA SHARMA",""],["AMIT SINGH",""],["NEHA GUPTA",""]]
    },
    UPPER: {
      task: "Use =UPPER(A2) to convert the name to uppercase.",
      rows: [["Name","Result"],["rahul kumar",""],["priya sharma",""],["amit singh",""],["neha gupta",""]]
    },
    PROPER: {
      task: "Use =PROPER(A2) to convert names to proper case.",
      rows: [["Name","Result"],["rahul kumar",""],["PRIYA SHARMA",""],["amit singh",""],["neha gupta",""]]
    },
    TRIM: {
      task: "Enter extra spaces in A2 and use =TRIM(A2) to clean them.",
      rows: [["Name","Clean Name"],["  Rahul   Kumar  ",""],[" Priya Sharma ",""],["  Amit  Singh",""],["Neha   Gupta",""]]
    },
    LEFT: {
      task: "Use =LEFT(A2,3) to extract the first three characters.",
      rows: [["Student ID","Result"],["DEL-001",""],["MUM-002",""],["BLR-003",""],["JAI-004",""]]
    },
    RIGHT: {
      task: "Use =RIGHT(A2,3) to extract the last three characters.",
      rows: [["Student ID","Result"],["DEL-001",""],["MUM-002",""],["BLR-003",""],["JAI-004",""]]
    },
    MID: {
      task: "Use =MID(A2,5,3) to extract the three digits after DEL-/MUM-/BLR-.",
      rows: [["Student ID","Result"],["DEL-001",""],["MUM-002",""],["BLR-003",""],["JAI-004",""]]
    },
    LEN: {
      task: "Use =LEN(A2) to count characters in each name.",
      rows: [["Name","Characters"],["Rahul Kumar",""],["Priya Sharma",""],["Amit Singh",""],["Neha Gupta",""]]
    }
  };

  return configs[name] || common;
}

function renderExcelAdvancedFeatures() {
  const current = excelState.lesson
    ? excelAdvancedFeatures.find(x => x[0] === excelState.lesson)
    : null;

  if (current) {
    return renderExcelFeatureLesson(current);
  }

  return `
    <div class="excel-intro-card">
      <span class="excel-big-icon">🛠️</span>
      <div>
        <h2>Advanced Features</h2>
        <p>Practical Excel tools for reporting, data cleaning, analysis and protection.</p>
      </div>
    </div>

    <div class="excel-feature-grid">
      ${excelAdvancedFeatures.map((item, index) => `
        <button type="button" class="excel-feature-card" data-excel-feature="${excelT(item[0])}">
          <span class="excel-feature-icon">${item[1]}</span>
          <span class="excel-feature-number">${index + 1}</span>
          <strong>${excelT(item[0])}</strong>
          <span>${excelT(item[2])}</span>
          <em>Open lesson →</em>
        </button>
      `).join("")}
    </div>
  `;
}

function renderExcelFeatureLesson(item) {
  const hi = excelState.language === "hi";

  const labels = hi
    ? {
        what: "यह क्या है?",
        use: "कब उपयोग करें?",
        steps: "कैसे उपयोग करें — Step by step",
        example: "Real-life example"
      }
    : {
        what: "What is it?",
        use: "When should you use it?",
        steps: "How to use it — Step by step",
        example: "Real-life example"
      };

  const steps = item[4].split(" → ").map(x => x.trim());

  return `
    <div class="excel-back-row">
      <button type="button" class="excel-back" data-excel-back="advanced-features">← Back to Advanced Features</button>
    </div>

    <article class="excel-lesson-card">
      <div class="excel-lesson-title">
        <span>${item[1]}</span>
        <div>
          <div class="excel-kicker">ADVANCED FEATURE</div>
          <h2>${excelT(item[0])}</h2>
        </div>
      </div>

      <div class="excel-language-row">
        <button type="button" class="${excelState.language === "en" ? "active" : ""}" data-excel-language="en">English</button>
        <button type="button" class="${excelState.language === "hi" ? "active" : ""}" data-excel-language="hi">हिन्दी</button>
      </div>

      <div class="excel-video-card">
        <div class="excel-video-label">🎥 ${excelT(item[0])} Video Tutorial</div>
        <video controls preload="metadata">
          <source src="${excelState.videoBase}${excelVideoName(item[0])}" type="video/mp4">
          Your browser does not have a video for this feature yet.
        </video>
        <p>Upload your video as <code>public/excel-videos/${excelVideoName(item[0])}</code>.</p>
      </div>

      ${excelExplanationBlock(labels.what, item[2])}
      ${excelExplanationBlock(labels.use, item[3])}
      ${excelStepsBlock(labels.steps, hi ? steps.map(x => `Excel में जाएं और संबंधित option खोलें: ${x}`) : steps)}
      ${excelExplanationBlock(labels.example, `Example: Use ${item[0]} in a student/MIS report to keep the data organized and easy to analyze.`)}
    </article>
  `;
}

/* ---------------------------------------------------------
   EXCEL EVENT HANDLERS
   --------------------------------------------------------- */

function attachExcelEvents() {
  document.querySelectorAll("[data-excel-section]").forEach(button => button.addEventListener("click", () => {
    excelState.section = button.dataset.excelSection; excelState.lesson = null; render();
  }));
  document.querySelectorAll("[data-excel-basic]").forEach(button => button.addEventListener("click", () => {
    excelState.lesson = button.dataset.excelBasic; excelState.language = state.language === "en" ? "en" : "hi"; render();
  }));
  document.querySelectorAll("[data-excel-formula]").forEach(button => button.addEventListener("click", () => {
    excelState.lesson = button.dataset.excelFormula; excelState.language = state.language === "en" ? "en" : "hi"; render();
  }));
  document.querySelectorAll("[data-excel-feature]").forEach(button => button.addEventListener("click", () => {
    excelState.lesson = button.dataset.excelFeature; excelState.language = state.language === "en" ? "en" : "hi"; render();
  }));
  document.querySelectorAll("[data-excel-back]").forEach(button => button.addEventListener("click", () => {
    excelState.section = button.dataset.excelBack; excelState.lesson = null; render();
  }));
  document.querySelectorAll("[data-excel-language]").forEach(button => button.addEventListener("click", () => {
    excelState.language = button.dataset.excelLanguage; render();
  }));
  document.querySelectorAll("[data-excel-reset]").forEach(button => button.addEventListener("click", () => render()));
  document.querySelectorAll("[data-excel-ai]").forEach(button => button.addEventListener("click", () => {
    if (typeof window.openAITeacher === "function") window.openAITeacher("MS Excel", excelState.lesson || excelState.section);
    else alert("AI Teacher is loading. Please try again.");
  }));

  const cells = [...document.querySelectorAll("[data-excel-cell]")];
  const gridCells = [...document.querySelectorAll(".excel-grid-cell")];
  let selected = cells[0] || null;
  let dragStart = null;
  let dragging = false;
  let rangeFormulaMode = false;
  const nameBox = document.querySelector("[data-excel-name-box]");
  const formulaBar = document.querySelector("[data-excel-formula-bar]");

  const refToPos = ref => {
    const m = String(ref || "").toUpperCase().match(/^([A-Z]+)(\d+)$/);
    if (!m) return null;
    let col = 0;
    for (const ch of m[1]) col = col * 26 + ch.charCodeAt(0) - 64;
    return { row: Number(m[2]), col };
  };

  function posToRef(row, col) {
    let c = col, letters = "";
    while (c > 0) { const n = (c - 1) % 26; letters = String.fromCharCode(65 + n) + letters; c = Math.floor((c - 1) / 26); }
    return letters + row;
  }

  function clearGridSelection() {
    cells.forEach(x => x.classList.remove("excel-selected-cell", "excel-range-cell"));
    gridCells.forEach(x => x.classList.remove("excel-range-bg"));
  }

  function showFillHandle(input) {
    document.querySelectorAll(".excel-fill-handle").forEach(h => h.classList.remove("visible"));
    const handle = document.querySelector(`[data-excel-fill="${input?.dataset.excelCell || ""}"]`);
    if (handle) handle.classList.add("visible");
  }

  function selectCell(input, syncFormula = true) {
    if (!input) return;
    clearGridSelection();
    input.classList.add("excel-selected-cell");
    selected = input;
    if (nameBox) nameBox.textContent = input.dataset.excelCell;
    if (formulaBar && syncFormula) formulaBar.value = input.value;
    showFillHandle(input);
  }

  function paintRange(a, b) {
    const p1 = refToPos(a.dataset.excelCell), p2 = refToPos(b.dataset.excelCell);
    if (!p1 || !p2) return;
    const minRow = Math.min(p1.row, p2.row), maxRow = Math.max(p1.row, p2.row);
    const minCol = Math.min(p1.col, p2.col), maxCol = Math.max(p1.col, p2.col);
    clearGridSelection();
    cells.forEach(input => {
      const p = refToPos(input.dataset.excelCell);
      if (!p) return;
      if (p.row >= minRow && p.row <= maxRow && p.col >= minCol && p.col <= maxCol) {
        input.classList.add("excel-range-cell");
      }
    });
    const startRef = posToRef(minRow, minCol), endRef = posToRef(maxRow, maxCol);
    const start = document.querySelector(`[data-excel-cell="${startRef}"]`);
    if (start) start.classList.add("excel-selected-cell");
    if (nameBox) nameBox.textContent = startRef === endRef ? startRef : `${a.dataset.excelCell}:${b.dataset.excelCell}`;
  }

  function cellFromEvent(ev) {
    const el = document.elementFromPoint(ev.clientX, ev.clientY);
    const td = el?.closest?.(".excel-grid-cell");
    return td?.querySelector?.("[data-excel-cell]") || null;
  }

  function isFormulaReferenceMode() {
    if (!formulaBar) return false;
    if (document.activeElement === formulaBar) {
      const v = formulaBar.value.trim();
      return v.startsWith("=") && /\([^)]*$/.test(v);
    }
    return false;
  }

  function addRangeToFormula(start, end) {
    if (!formulaBar || !start || !end) return;
    let value = formulaBar.value;
    const ref = start.dataset.excelCell === end.dataset.excelCell
      ? start.dataset.excelCell
      : `${start.dataset.excelCell}:${end.dataset.excelCell}`;

    // Excel-style: =SUM( + drag B2:B5 -> =SUM(B2:B5)
    const openPos = value.lastIndexOf("(");
    const closePos = value.lastIndexOf(")");
    if (openPos > closePos) {
      const before = value.slice(0, openPos + 1);
      const inside = value.slice(openPos + 1).trim();
      const separator = inside && !inside.endsWith(",") ? "," : "";
      value = before + inside + separator + ref;
    } else {
      value += ref;
    }
    formulaBar.value = value;
    if (selected) selected.value = value;
    formulaBar.focus();
    formulaBar.setSelectionRange(value.length, value.length);
    excelCalculatePractice();
  }

  // Direct cell editing / normal single-cell selection.
  cells.forEach(input => {
    input.addEventListener("focus", () => {
      if (!dragging && !rangeFormulaMode) selectCell(input, true);
    });
    input.addEventListener("click", () => {
      if (!dragging && !rangeFormulaMode) selectCell(input, true);
    });
    input.addEventListener("input", () => {
      if (formulaBar && selected === input && document.activeElement !== formulaBar) formulaBar.value = input.value;
      excelCalculatePractice();
    });
    input.addEventListener("keydown", e => {
      if (e.key === "Enter") {
        e.preventDefault();
        const n = cells[cells.indexOf(input) + 1];
        if (n) { selectCell(n, true); n.focus(); }
      }
    });
  });

  // Real Excel-like mouse selection. Drag across cells to select a range.
  gridCells.forEach(td => {
    td.addEventListener("mousedown", e => {
      if (e.button !== 0 || e.target.closest("[data-excel-fill]")) return;
      const input = td.querySelector("[data-excel-cell]");
      if (!input) return;
      e.preventDefault();
      dragStart = input;
      dragging = true;
      rangeFormulaMode = isFormulaReferenceMode();
      if (rangeFormulaMode) {
        // Keep the formula bar focused while the user selects the reference.
        paintRange(input, input);
      } else {
        selectCell(input, true);
      }

      const onMove = ev => {
        if (!dragging) return;
        const target = cellFromEvent(ev);
        if (!target) return;
        if (rangeFormulaMode) paintRange(dragStart, target);
        else {
          paintRange(dragStart, target);
          selected = target;
        }
      };

      const onUp = ev => {
        if (!dragging) return;
        const target = cellFromEvent(ev) || dragStart;
        dragging = false;
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onUp);

        if (rangeFormulaMode) {
          addRangeToFormula(dragStart, target);
          rangeFormulaMode = false;
          paintRange(dragStart, target);
        } else {
          selectCell(target, true);
          target.focus();
        }
        dragStart = null;
      };

      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onUp);
    });
  });

  if (formulaBar) {
    formulaBar.addEventListener("input", () => {
      if (selected) selected.value = formulaBar.value;
      excelCalculatePractice();
    });
  }

  document.querySelector("[data-excel-enter]")?.addEventListener("click", () => {
    if (selected && formulaBar) {
      selected.value = formulaBar.value;
      excelCalculatePractice();
      selected.focus();
    }
  });

  // Excel-style fill handle: drag the small square at the bottom-right of the selected cell.
  document.querySelectorAll("[data-excel-fill]").forEach(handle => {
    handle.addEventListener("mousedown", e => {
      e.preventDefault();
      e.stopPropagation();
      const source = document.querySelector(`[data-excel-cell="${handle.dataset.excelFill}"]`);
      if (!source) return;
      let active = true;
      const onMove = ev => {
        if (!active) return;
        const target = cellFromEvent(ev);
        if (target && target !== source) {
          target.value = adjustExcelFormula(source.value, source.dataset.excelCell, target.dataset.excelCell);
          target.classList.add("excel-fill-preview");
        }
      };
      const onUp = () => {
        active = false;
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onUp);
        document.querySelectorAll(".excel-fill-preview").forEach(x => x.classList.remove("excel-fill-preview"));
        excelCalculatePractice();
      };
      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onUp);
    });
  });

  if (cells[0]) selectCell(cells[0]);
  excelCalculatePractice();
}

function adjustExcelFormula(formula, fromRef, toRef) {
  if (!String(formula).startsWith("=")) return formula;
  const a = String(fromRef).match(/^([A-Z]+)(\d+)$/); const b = String(toRef).match(/^([A-Z]+)(\d+)$/);
  if (!a || !b) return formula;
  const rowDelta = Number(b[2]) - Number(a[2]);
  const colDelta = b[1].charCodeAt(0) - a[1].charCodeAt(0);
  return formula.replace(/(\$?)([A-Z]{1,3})(\$?)(\d+)/g, (_, cAbs, col, rAbs, row) => {
    const nc = cAbs ? col : String.fromCharCode(col.charCodeAt(0)+colDelta);
    const nr = rAbs ? row : String(Number(row)+rowDelta);
    return `${cAbs}${nc}${rAbs}${nr}`;
  });
}

function excelCalculatePractice() {
  const inputs = [...document.querySelectorAll("[data-excel-cell]")];
  if (!inputs.length) return;
  const cells = Object.fromEntries(inputs.map(i => [i.dataset.excelCell.toUpperCase(), i.value]));
  const valueOf = ref => cells[String(ref).toUpperCase()] ?? "";
  const range = (a,b) => {
    const x=a.match(/^([A-Z]+)(\d+)$/i), y=b.match(/^([A-Z]+)(\d+)$/i); if(!x||!y)return[];
    const c1=x[1].charCodeAt(0)-65,c2=y[1].charCodeAt(0)-65,r1=+x[2],r2=+y[2],out=[];
    for(let r=Math.min(r1,r2);r<=Math.max(r1,r2);r++)for(let c=Math.min(c1,c2);c<=Math.max(c1,c2);c++)out.push(valueOf(String.fromCharCode(65+c)+r)); return out;
  };
  const args = s => { const out=[]; let cur="",q=null,d=0; for(const ch of s){if(q){cur+=ch;if(ch===q)q=null}else if(ch==='"'){q=ch;cur+=ch}else if(ch==='('){d++;cur+=ch}else if(ch===')'){d--;cur+=ch}else if(ch===','&&d===0){out.push(cur.trim());cur=""}else cur+=ch}if(cur.trim()||s.endsWith(','))out.push(cur.trim());return out; };
  const unq=v=>String(v??"").replace(/^['"]|['"]$/g,"");
  const vals=a=>{const m=a.match(/^([A-Z]+\d+):([A-Z]+\d+)$/i);return m?range(m[1],m[2]):[valueOf(a)];};
  const nums=a=>vals(a).map(Number).filter(Number.isFinite);
  function evalF(formula){
    let f=String(formula).trim(); if(!f.startsWith("="))return f; f=f.slice(1).trim();
    const m=f.match(/^([A-Z][A-Z0-9._]*)\((.*)\)$/i); if(!m)return "#NAME?"; const fn=m[1].toUpperCase(),a=args(m[2]);
    try{
      if(fn==="SUM")return nums(a[0]).reduce((x,y)=>x+y,0);
      if(fn==="MIN")return Math.min(...nums(a[0])); if(fn==="MAX")return Math.max(...nums(a[0]));
      if(fn==="AVERAGE"){const n=nums(a[0]);return n.length?n.reduce((x,y)=>x+y,0)/n.length:"#DIV/0!";}
      if(fn==="COUNT")return nums(a[0]).length; if(fn==="COUNTA")return vals(a[0]).filter(x=>String(x).trim()!=="").length; if(fn==="COUNTBLANK")return vals(a[0]).filter(x=>String(x).trim()==="").length;
      if(fn==="LARGE"){let n=nums(a[0]).sort((x,y)=>y-x);return n[+a[1]-1]??"#NUM!";} if(fn==="SMALL"){let n=nums(a[0]).sort((x,y)=>x-y);return n[+a[1]-1]??"#NUM!";}
      if(["ROUND","ROUNDUP","ROUNDDOWN"].includes(fn)){const n=Number(valueOf(a[0])||a[0]),p=Number(a[1]),q=10**p;return fn==="ROUND"?Math.round(n*q)/q:fn==="ROUNDUP"?Math.ceil(n*q)/q:Math.floor(n*q)/q;}
      if(fn==="LEFT")return String(valueOf(a[0])||unq(a[0])).slice(0,Number(a[1]||1)); if(fn==="RIGHT")return String(valueOf(a[0])||unq(a[0])).slice(-Number(a[1]||1)); if(fn==="MID")return String(valueOf(a[0])||unq(a[0])).substr(Number(a[1])-1,Number(a[2])); if(fn==="LEN")return String(valueOf(a[0])||unq(a[0])).length;
      if(fn==="LOWER")return String(valueOf(a[0])||unq(a[0])).toLowerCase(); if(fn==="UPPER")return String(valueOf(a[0])||unq(a[0])).toUpperCase(); if(fn==="PROPER")return String(valueOf(a[0])||unq(a[0])).toLowerCase().replace(/\b\w/g,c=>c.toUpperCase()); if(fn==="TRIM")return String(valueOf(a[0])||unq(a[0])).trim().replace(/\s+/g," ");
      if(fn==="DAY"||fn==="MONTH"||fn==="YEAR"){const d=new Date(valueOf(a[0])||unq(a[0]));if(isNaN(d))return"#VALUE!";return fn==="DAY"?d.getDate():fn==="MONTH"?d.getMonth()+1:d.getFullYear();}
      if(fn==="DATE")return new Date(+a[0],+a[1]-1,+a[2]).toLocaleDateString("en-IN"); if(fn==="TODAY")return new Date().toLocaleDateString("en-IN"); if(fn==="NOW")return new Date().toLocaleString("en-IN");
      if(fn==="IF"){const c=a[0].replace(/([A-Z]+\d+)/gi,(_,r)=>JSON.stringify(valueOf(r)));const o=c.match(/^\s*(.+?)\s*(>=|<=|<>|=|>|<)\s*(.+?)\s*$/);if(!o)return"#VALUE!";let l=unq(o[1]),r=unq(o[3]);const ln=Number(l),rn=Number(r);if(Number.isFinite(ln)&&Number.isFinite(rn)){l=ln;r=rn}let t=o[2]===">"?l>r:o[2]==="<"?l<r:o[2]===">="?l>=r:o[2]==="<="?l<=r:o[2]==="="?l===r:l!==r;return t?unq(a[1]):unq(a[2]);}
      if(fn==="AND"||fn==="OR"){const results=a.map(x=>{const m=x.match(/([A-Z]+\d+)\s*(>=|<=|<>|=|>|<)\s*([^ ]+)/i);if(!m)return Boolean(valueOf(x));let l=valueOf(m[1]),r=unq(m[3]);const ln=Number(l),rn=Number(r);if(Number.isFinite(ln)&&Number.isFinite(rn)){l=ln;r=rn}return m[2]===">"?l>r:m[2]==="<"?l<r:m[2]===">="?l>=r:m[2]==="<="?l<=r:m[2]==="="?l===r:l!==r;});return fn==="AND"?results.every(Boolean):results.some(Boolean);}
      if(fn==="IFERROR"){const x=evalF(a[0]);return String(x).startsWith("#")?unq(a[1]):x;}
      if(fn==="EXACT")return String(valueOf(a[0])||unq(a[0]))===String(valueOf(a[1])||unq(a[1]));
      if(fn==="TEXTJOIN")return a.slice(2).map(x=>valueOf(x)||unq(x)).join(unq(a[0]));
      if(fn==="TEXT")return String(valueOf(a[0])||unq(a[0]));
      if(fn==="PMT"){const rate=Number(valueOf(a[0])||a[0]),n=Number(valueOf(a[1])||a[1]),pv=Number(valueOf(a[2])||a[2]);return rate===0?-(pv/n):-(pv*rate*(1+rate)**n/((1+rate)**n-1));}
      if(fn==="MATCH"||fn==="XMATCH"){const needle=valueOf(a[0])||unq(a[0]), arr=vals(a[1]);const idx=arr.findIndex(x=>String(x)===String(needle));return idx<0?"#N/A":idx+1;}
      if(fn==="INDEX"){const arr=vals(a[0]),idx=Number(a[1])-1;return arr[idx]??"#REF!";}
      if(fn==="XLOOKUP"||fn==="VLOOKUP"){const needle=valueOf(a[0])||unq(a[0]);if(fn==="XLOOKUP"){const lookup=vals(a[1]),ret=vals(a[2]),i=lookup.findIndex(x=>String(x)===String(needle));return i>=0?ret[i]:(a[3]?unq(a[3]):"#N/A");}const rg=a[1].match(/^([A-Z]+\d+):([A-Z]+\d+)$/i);if(!rg)return"#REF!";const rows=[];const s1=rg[1].match(/^([A-Z]+)(\d+)$/i),s2=rg[2].match(/^([A-Z]+)(\d+)$/i);for(let r=+s1[2];r<=+s2[2];r++)rows.push(range(`${s1[1]}${r}`,`${s2[1]}${r}`));const row=rows.find(x=>String(x[0])===String(needle));return row?row[Number(a[2])-1]:"#N/A";}
      return "#SUPPORTED?";
    }catch(e){return"#ERROR!";}
  }
  inputs.forEach(i=>{if(i.value.trim().startsWith("=")){const result=evalF(i.value);i.dataset.calculatedResult=String(result);i.title=String(result);i.classList.toggle("formula-valid",!String(result).startsWith("#"));}});
  const box=document.querySelector("[data-excel-result]"); const formula=inputs.find(i=>i.value.trim().startsWith("=")); if(box)box.textContent=formula?`Result: ${formula.dataset.calculatedResult||"—"}`:"Ready";
}

(function injectExcelV3Styles(){
  if(document.getElementById("joiningHandsExcelV3Styles"))return;
  const style=document.createElement("style");style.id="joiningHandsExcelV3Styles";style.textContent=`
    .excel-formula-layout{display:grid;grid-template-columns:310px minmax(0,1fr);gap:18px;align-items:start}
    .excel-formula-sidebar{background:#fff;border:1px solid #dfe6ec;border-radius:20px;padding:14px;position:sticky;top:15px;max-height:calc(100vh - 30px);overflow:auto}
    .excel-sidebar-title{font-size:18px;font-weight:900;color:#162b4d}.excel-sidebar-subtitle{font-size:12px;color:#78838e;margin:5px 4px 14px}.excel-sidebar-group{margin-bottom:12px}.excel-sidebar-group-title{font-size:11px;font-weight:900;color:#178344;letter-spacing:.8px;padding:8px 7px}.excel-sidebar-item{width:100%;border:1px solid transparent;background:#fff;border-radius:12px;padding:10px 9px;display:flex;gap:10px;text-align:left;cursor:pointer;align-items:flex-start}.excel-sidebar-item:hover{background:#f5f9ff}.excel-sidebar-item.active{background:#eaf2ff;border-color:#1677ff;box-shadow:0 3px 12px rgba(22,119,255,.1)}.excel-sidebar-icon{font-size:18px;min-width:24px}.excel-sidebar-item strong{display:block;font-size:14px}.excel-sidebar-item small{display:block;color:#74808c;font-size:11px;margin-top:2px;line-height:1.35}.excel-formula-main{min-width:0}.excel-empty-selection{min-height:250px}.excel-formula-bar-wrap{display:grid;grid-template-columns:70px 42px 1fr 45px;gap:6px;margin:12px 0;border:1px solid #cfd8e0;background:#f6f8fa;padding:6px;border-radius:8px}.excel-name-box,.excel-fx{background:#fff;border:1px solid #d7dee5;padding:8px;font-weight:800;text-align:center}.excel-formula-bar{border:1px solid #d7dee5;padding:8px 10px;font:inherit}.excel-enter-btn{border:0;background:#1677ff;color:#fff;border-radius:6px;font-weight:900}.excel-grid-wrap-v3{box-shadow:0 3px 12px rgba(0,0,0,.05)}.excel-grid-v3{min-width:850px}.excel-corner,.excel-col-head{background:#e9edf1;color:#56616d;font-weight:800;text-align:center}.excel-col-head{height:30px}.excel-grid-cell{position:relative;padding:0;min-width:110px}.excel-cell{min-width:110px}.excel-cell.excel-selected-cell{outline:2px solid #1677ff!important;outline-offset:-2px;background:#eef6ff}.excel-fill-handle{display:none;position:absolute;width:7px;height:7px;background:#1677ff;right:-3px;bottom:-3px;z-index:5;cursor:crosshair}.excel-fill-handle.visible{display:block}.excel-fill-preview{background:#eaf2ff!important}.excel-practice-v3 .excel-grid-wrap{max-height:480px}
    @media(max-width:900px){.excel-formula-layout{grid-template-columns:1fr}.excel-formula-sidebar{position:static;max-height:330px}.excel-formula-sidebar .excel-sidebar-group{display:grid;grid-template-columns:repeat(2,1fr);gap:5px}}
    @media(max-width:600px){.excel-formula-sidebar .excel-sidebar-group{grid-template-columns:1fr}.excel-formula-bar-wrap{grid-template-columns:58px 35px 1fr 40px}.excel-grid-v3{min-width:720px}}
  `;document.head.appendChild(style);
})();

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

/* =========================================================
   JOINING HANDS — AI TEACHER FIX
   APPEND THIS ENTIRE BLOCK TO THE VERY END OF public/app.js

   IMPORTANT:
   - Do not remove or change the existing MS Word code.
   - This block only replaces the AI Teacher behaviour.
   - It keeps the AI Teacher as an overlay/popup.
   ========================================================= */

(function () {

  "use strict";

  /* ---------------------------------------------------------
     AI STATE
     --------------------------------------------------------- */

  window.jhAIState = window.jhAIState || {
    open: false,
    loading: false,
    messages: [],
    course: "General Computer Learning",
    project: "",
    language: "en"
  };


  /* ---------------------------------------------------------
     SAFE TEXT
     --------------------------------------------------------- */

  function aiEscape(value) {

    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  }


  function aiCurrentLanguage() {

    if (typeof state !== "undefined" &&
        state.language === "hi") {

      return "hi";

    }

    return "en";

  }


  function aiCurrentContext() {

    let course = "General Computer Learning";
    let project = "";

    if (typeof state !== "undefined") {

      if (state.course === "word" ||
          state.course === "MS Word") {

        course = "MS Word";

      }

      else if (state.course === "excel" ||
               state.course === "MS Excel") {

        course = "MS Excel";

      }

      else if (state.course === "powerpoint" ||
               state.course === "MS PowerPoint") {

        course = "MS PowerPoint";

      }

      else if (state.course) {

        course = String(state.course);

      }

      project =
        state.aiContext ||
        state.projectId ||
        state.tab ||
        state.wordTab ||
        "";

    }

    return {
      course,
      project
    };

  }


  /* ---------------------------------------------------------
     OPEN AI TEACHER
     --------------------------------------------------------- */

  window.openAITeacher = function (
    course,
    project
  ) {

    const context =
      aiCurrentContext();

    jhAIState.open = true;
    jhAIState.course =
      course || context.course;
    jhAIState.project =
      project || context.project;
    jhAIState.language =
      aiCurrentLanguage();

    const old =
      document.getElementById(
        "jhAITeacherFixed"
      );

    if (old) {

      old.remove();

    }

    document.body.insertAdjacentHTML(
      "beforeend",

      `
      <div
        id="jhAITeacherFixed"
        class="jh-ai-fixed-overlay"
      >

        <div class="jh-ai-fixed-panel">

          <div class="jh-ai-fixed-header">

            <div class="jh-ai-fixed-title">

              <div class="jh-ai-fixed-avatar">
                🤖
              </div>

              <div>

                <h2>
                  AI Teacher
                </h2>

                <p>
                  ${aiEscape(jhAIState.course)}
                  ${
                    jhAIState.project
                      ? ` • ${aiEscape(jhAIState.project)}`
                      : ""
                  }
                </p>

              </div>

            </div>


            <div class="jh-ai-fixed-actions">

              <button
                type="button"
                class="jh-ai-clear"
                onclick="window.jhAIClear()"
              >
                Clear
              </button>

              <button
                type="button"
                class="jh-ai-fixed-close"
                onclick="window.jhAIClose()"
                aria-label="Close AI Teacher"
              >
                ×
              </button>

            </div>

          </div>


          <div
            id="jhAIFixedMessages"
            class="jh-ai-fixed-messages"
          ></div>


          <form
            id="jhAIFixedForm"
            class="jh-ai-fixed-form"
          >

            <textarea
              id="jhAIFixedQuestion"
              rows="3"
              placeholder="${
                jhAIState.language === "hi"
                  ? "अपना सवाल यहाँ लिखें..."
                  : "Type your question here..."
              }"
            ></textarea>


            <button
              id="jhAIFixedSend"
              type="submit"
            >
              ${
                jhAIState.language === "hi"
                  ? "AI Teacher से पूछें →"
                  : "Ask AI Teacher →"
              }
            </button>

          </form>


          <div class="jh-ai-fixed-footer">

            ${
              jhAIState.language === "hi"
                ? "आप MS Word, Excel, PowerPoint या basic computer learning के बारे में सवाल पूछ सकते हैं।"
                : "Ask about MS Word, Excel, PowerPoint or basic computer learning."
            }

          </div>

        </div>

      </div>
      `

    );


    window.jhAIRenderMessages();

    const form =
      document.getElementById(
        "jhAIFixedForm"
      );

    const input =
      document.getElementById(
        "jhAIFixedQuestion"
      );

    if (form) {

      form.addEventListener(
        "submit",
        window.jhAISubmit
      );

    }

    if (input) {

      input.focus();

      input.addEventListener(
        "keydown",
        function (event) {

          if (
            event.key === "Enter" &&
            !event.shiftKey
          ) {

            event.preventDefault();

            form?.requestSubmit();

          }

        }
      );

    }

  };


  /* ---------------------------------------------------------
     CLOSE
     --------------------------------------------------------- */

  window.jhAIClose = function () {

    const panel =
      document.getElementById(
        "jhAITeacherFixed"
      );

    if (panel) {

      panel.remove();

    }

    jhAIState.open = false;

  };


  /* ---------------------------------------------------------
     CLEAR CHAT
     --------------------------------------------------------- */

  window.jhAIClear = function () {

    jhAIState.messages = [];

    window.jhAIRenderMessages();

  };


  /* ---------------------------------------------------------
     RENDER CHAT
     --------------------------------------------------------- */

  window.jhAIRenderMessages = function () {

    const box =
      document.getElementById(
        "jhAIFixedMessages"
      );

    if (!box) {

      return;

    }


    if (!jhAIState.messages.length) {

      box.innerHTML = `

        <div class="jh-ai-fixed-welcome">

          <div class="jh-ai-fixed-welcome-icon">
            🎓
          </div>

          <h3>
            ${
              jhAIState.language === "hi"
                ? "AI Teacher से पूछें"
                : "Ask your AI Teacher"
            }
          </h3>

          <p>
            ${
              jhAIState.language === "hi"
                ? "MS Word, Excel या computer learning से जुड़ा कोई भी सवाल पूछें। मैं आसान भाषा में step-by-step समझाऊँगा।"
                : "Ask anything about MS Word, Excel or computer learning. I will explain it in simple, step-by-step language."
            }
          </p>

        </div>

      `;

      return;

    }


    box.innerHTML =
      jhAIState.messages
        .map(function (message) {

          const isUser =
            message.role === "user";

          const isError =
            message.role === "error";

          return `

            <div class="
              jh-ai-fixed-message
              ${isUser ? "user" : "assistant"}
              ${isError ? "error" : ""}
            ">

              <div class="jh-ai-fixed-message-label">

                ${
                  isUser
                    ? "👤 You"
                    : "🤖 AI Teacher"
                }

              </div>

              <div class="jh-ai-fixed-message-body">

                ${aiEscape(message.content)
                  .replace(/\n/g, "<br>")}

              </div>

            </div>

          `;

        })
        .join("");

    box.scrollTop =
      box.scrollHeight;

  };


  /* ---------------------------------------------------------
     SEND QUESTION
     --------------------------------------------------------- */

  window.jhAISubmit = async function (event) {

    event.preventDefault();

    if (jhAIState.loading) {

      return;

    }


    const input =
      document.getElementById(
        "jhAIFixedQuestion"
      );

    const sendButton =
      document.getElementById(
        "jhAIFixedSend"
      );

    if (!input) {

      return;

    }


    const question =
      input.value.trim();

    if (!question) {

      input.focus();

      return;

    }


    jhAIState.messages.push({

      role: "user",

      content: question

    });

    input.value = "";

    jhAIState.loading = true;


    if (sendButton) {

      sendButton.disabled = true;

      sendButton.textContent =
        jhAIState.language === "hi"
          ? "⏳ जवाब तैयार हो रहा है..."
          : "⏳ AI Teacher is thinking...";

    }


    window.jhAIRenderMessages();


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
                  jhAIState.course,

                project:
                  jhAIState.project,

                language:
                  jhAIState.language,

                history:
                  jhAIState.messages
                    .slice(-12)

                    .map(function (item) {

                      return {

                        role:
                          item.role === "user"
                            ? "user"
                            : "assistant",

                        content:
                          item.content

                      };

                    })

              })

          }
        );


      let data = {};

      try {

        data =
          await response.json();

      }

      catch (jsonError) {

        data = {};

      }


      if (!response.ok) {

        throw new Error(

          data.error ||
          `AI Teacher request failed (${response.status}).`

        );

      }


      const answer =
        String(
          data.answer ||
          ""
        ).trim();


      if (!answer) {

        throw new Error(
          "The AI Teacher returned an empty answer."
        );

      }


      jhAIState.messages.push({

        role: "assistant",

        content: answer

      });

    }

    catch (error) {

      console.error(
        "Joining Hands AI Teacher error:",
        error
      );


      jhAIState.messages.push({

        role: "error",

        content:
          error?.message ||
          (
            jhAIState.language === "hi"
              ? "AI Teacher अभी उपलब्ध नहीं है।"
              : "AI Teacher is currently unavailable."
          )

      });

    }

    finally {

      jhAIState.loading = false;

      window.jhAIRenderMessages();


      if (sendButton) {

        sendButton.disabled = false;

        sendButton.textContent =
          jhAIState.language === "hi"
            ? "AI Teacher से पूछें →"
            : "Ask AI Teacher →";

      }

    }

  };


  /* ---------------------------------------------------------
     CONTEXT HELPERS
     --------------------------------------------------------- */

  window.askAIWithContext = function (
    question,
    course,
    project
  ) {

    window.openAITeacher(
      course,
      project
    );

    setTimeout(
      function () {

        const input =
          document.getElementById(
            "jhAIFixedQuestion"
          );

        if (input) {

          input.value =
            question || "";

          input.focus();

        }

      },
      50
    );

  };


  window.askAboutCurrentTool =
    function () {

      let toolName = "";

      try {

        if (
          typeof wordTools !== "undefined" &&
          typeof state !== "undefined"
        ) {

          const tab =
            state.tab ||
            state.wordTab ||
            "Home";

          const tools =
            wordTools[tab] || [];

          const index =
            Number(
              state.toolIndex ??
              state.selectedTool ??
              0
            );

          toolName =
            tools[index]?.name ||
            "";

        }

      }

      catch (error) {

        console.warn(
          "Could not read current Word tool.",
          error
        );

      }


      const question =
        toolName

          ? `Please explain the MS Word "${toolName}" option in simple language. Tell me what it does, when I should use it, give a real-life example, and then give step-by-step instructions.`

          : "Please help me learn the current MS Word topic step by step.";

      window.askAIWithContext(
        question,
        "MS Word",
        (
          typeof state !== "undefined"
            ? state.tab || state.wordTab || "MS Word"
            : "MS Word"
        )
      );

    };


  window.askAboutProject =
    function (id) {

      try {

        if (
          typeof wordProjects !== "undefined"
        ) {

          const project =
            wordProjects.find(
              function (item) {

                return item.id === id;

              }
            );

          if (project) {

            window.askAIWithContext(

              `Please teach me how to complete "${project.title}". Give simple step-by-step instructions, explain the purpose of each important step, and tell me what the finished result should look like.`,

              "MS Word",

              project.title

            );

            return;

          }

        }

      }

      catch (error) {

        console.warn(
          "Could not read Word project.",
          error
        );

      }


      window.openAITeacher(
        "MS Word",
        "Practical Work"
      );

    };


  /* ---------------------------------------------------------
     KEEP THE FINALIZED WORD INTERFACE UNCHANGED
     --------------------------------------------------------- */

  window.jhAIRefreshContext = function () {

    const context =
      aiCurrentContext();

    jhAIState.course =
      context.course;

    jhAIState.project =
      context.project;

  };


})();


/* =========================================================
   FINAL AI TEACHER UI FIX — 24 SEP 2026
   This block fixes the unstyled/duplicate AI Teacher panel.
   It does NOT change the MS Word learning/practical content.
   ========================================================= */
(function () {
  "use strict";

  const style = document.createElement("style");
  style.id = "jh-final-ai-teacher-style";
  style.textContent = `
    body.jh-ai-open { overflow: hidden; }

    /* Remove legacy AI panels if an older version created them. */
    #jhAITeacher,
    #aiTeacherOverlay,
    #aiTeacherModal {
      display: none !important;
    }

    #jhAITeacherFixed.jh-ai-fixed-overlay {
      position: fixed !important;
      inset: 0 !important;
      width: 100vw !important;
      height: 100vh !important;
      z-index: 2147483000 !important;
      display: flex !important;
      align-items: center !important;
      justify-content: flex-end !important;
      padding: 24px !important;
      box-sizing: border-box !important;
      background: rgba(15, 23, 42, .55) !important;
      backdrop-filter: blur(3px) !important;
    }

    .jh-ai-fixed-panel {
      width: min(520px, 100%) !important;
      height: min(760px, calc(100vh - 48px)) !important;
      display: flex !important;
      flex-direction: column !important;
      overflow: hidden !important;
      box-sizing: border-box !important;
      background: #fff !important;
      border-radius: 22px !important;
      border: 1px solid #e6e8f0 !important;
      box-shadow: 0 25px 80px rgba(16, 24, 40, .28) !important;
      color: #17233f !important;
      font-family: Arial, sans-serif !important;
    }

    .jh-ai-fixed-header {
      flex: 0 0 auto !important;
      min-height: 78px !important;
      padding: 16px 18px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;
      gap: 12px !important;
      background: linear-gradient(135deg, #3026a6, #6541dc) !important;
      color: #fff !important;
    }

    .jh-ai-fixed-title {
      display: flex !important;
      align-items: center !important;
      gap: 12px !important;
      min-width: 0 !important;
    }

    .jh-ai-fixed-avatar {
      width: 46px !important;
      height: 46px !important;
      flex: 0 0 46px !important;
      display: grid !important;
      place-items: center !important;
      border-radius: 14px !important;
      background: rgba(255,255,255,.18) !important;
      font-size: 25px !important;
    }

    .jh-ai-fixed-title h2 {
      margin: 0 !important;
      font-size: 21px !important;
      line-height: 1.2 !important;
      color: #fff !important;
    }

    .jh-ai-fixed-title p {
      margin: 4px 0 0 !important;
      font-size: 12px !important;
      color: rgba(255,255,255,.86) !important;
      white-space: nowrap !important;
      overflow: hidden !important;
      text-overflow: ellipsis !important;
      max-width: 300px !important;
    }

    .jh-ai-fixed-actions {
      display: flex !important;
      align-items: center !important;
      gap: 8px !important;
    }

    .jh-ai-clear,
    .jh-ai-fixed-close {
      border: 0 !important;
      cursor: pointer !important;
      font-weight: 700 !important;
    }

    .jh-ai-clear {
      padding: 8px 11px !important;
      border-radius: 9px !important;
      background: rgba(255,255,255,.14) !important;
      color: #fff !important;
    }

    .jh-ai-fixed-close {
      width: 38px !important;
      height: 38px !important;
      border-radius: 50% !important;
      background: rgba(255,255,255,.16) !important;
      color: #fff !important;
      font-size: 25px !important;
      line-height: 1 !important;
    }

    .jh-ai-fixed-messages {
      flex: 1 1 auto !important;
      min-height: 0 !important;
      overflow-y: auto !important;
      padding: 18px !important;
      background: #f7f8fc !important;
      box-sizing: border-box !important;
    }

    .jh-ai-fixed-welcome {
      min-height: 100% !important;
      display: flex !important;
      flex-direction: column !important;
      align-items: center !important;
      justify-content: center !important;
      text-align: center !important;
      padding: 25px !important;
      box-sizing: border-box !important;
      color: #667085 !important;
    }

    .jh-ai-fixed-welcome-icon {
      width: 70px !important;
      height: 70px !important;
      display: grid !important;
      place-items: center !important;
      border-radius: 22px !important;
      background: #ece9ff !important;
      font-size: 34px !important;
      margin-bottom: 15px !important;
    }

    .jh-ai-fixed-welcome h3 {
      margin: 0 0 8px !important;
      color: #33278f !important;
      font-size: 22px !important;
    }

    .jh-ai-fixed-welcome p {
      max-width: 390px !important;
      margin: 0 !important;
      line-height: 1.6 !important;
      font-size: 14px !important;
    }

    .jh-ai-fixed-message {
      max-width: 88% !important;
      margin: 0 0 13px !important;
      padding: 11px 13px !important;
      border-radius: 14px !important;
      background: #fff !important;
      border: 1px solid #e5e7eb !important;
      box-shadow: 0 3px 12px rgba(20,20,60,.05) !important;
    }

    .jh-ai-fixed-message.user {
      margin-left: auto !important;
      background: #eeeaff !important;
      border-color: #dcd5ff !important;
    }

    .jh-ai-fixed-message.error {
      background: #fff1f2 !important;
      border-color: #fecdd3 !important;
    }

    .jh-ai-fixed-message-label {
      margin-bottom: 5px !important;
      font-size: 11px !important;
      font-weight: 800 !important;
      color: #5b3bd1 !important;
    }

    .jh-ai-fixed-message-body {
      font-size: 14px !important;
      line-height: 1.65 !important;
      color: #25304a !important;
      overflow-wrap: anywhere !important;
    }

    .jh-ai-fixed-form {
      flex: 0 0 auto !important;
      display: flex !important;
      gap: 10px !important;
      padding: 13px !important;
      background: #fff !important;
      border-top: 1px solid #e6e8f0 !important;
    }

    .jh-ai-fixed-form textarea {
      flex: 1 1 auto !important;
      min-width: 0 !important;
      resize: none !important;
      min-height: 54px !important;
      max-height: 130px !important;
      padding: 12px 13px !important;
      border: 1px solid #d8dce8 !important;
      border-radius: 12px !important;
      outline: none !important;
      font: inherit !important;
      line-height: 1.45 !important;
      color: #17233f !important;
      background: #fff !important;
      box-sizing: border-box !important;
    }

    .jh-ai-fixed-form textarea:focus {
      border-color: #6344dc !important;
      box-shadow: 0 0 0 3px rgba(99,68,220,.12) !important;
    }

    .jh-ai-fixed-form button {
      flex: 0 0 auto !important;
      align-self: stretch !important;
      min-width: 145px !important;
      border: 0 !important;
      border-radius: 12px !important;
      padding: 0 16px !important;
      cursor: pointer !important;
      background: linear-gradient(135deg, #4b32c3, #7547e8) !important;
      color: #fff !important;
      font-weight: 800 !important;
    }

    .jh-ai-fixed-form button:disabled {
      opacity: .65 !important;
      cursor: wait !important;
    }

    .jh-ai-fixed-footer {
      flex: 0 0 auto !important;
      padding: 8px 14px 11px !important;
      text-align: center !important;
      background: #fff !important;
      color: #7b8499 !important;
      font-size: 11px !important;
      line-height: 1.4 !important;
    }

    @media (max-width: 700px) {
      #jhAITeacherFixed.jh-ai-fixed-overlay {
        padding: 0 !important;
        align-items: stretch !important;
      }
      .jh-ai-fixed-panel {
        width: 100% !important;
        height: 100% !important;
        max-height: none !important;
        border-radius: 0 !important;
      }
      .jh-ai-fixed-form {
        flex-direction: column !important;
      }
      .jh-ai-fixed-form button {
        min-height: 46px !important;
      }
    }
  `;
  document.head.appendChild(style);

  function removeLegacyPanels() {
    ["jhAITeacher", "aiTeacherOverlay", "aiTeacherModal"].forEach(function(id) {
      const el = document.getElementById(id);
      if (el) el.remove();
    });
  }

  const originalOpen = window.openAITeacher;
  const originalClose = window.jhAIClose;

  window.openAITeacher = function(course, project) {
    removeLegacyPanels();
    document.body.classList.add("jh-ai-open");
    if (typeof originalOpen === "function") {
      originalOpen(course, project);
    }
    removeLegacyPanels();
    const fixed = document.getElementById("jhAITeacherFixed");
    if (fixed) fixed.style.display = "flex";
  };

  window.jhAIClose = function() {
    if (typeof originalClose === "function") originalClose();
    const fixed = document.getElementById("jhAITeacherFixed");
    if (fixed) fixed.remove();
    removeLegacyPanels();
    document.body.classList.remove("jh-ai-open");
    if (window.jhAIState) window.jhAIState.open = false;
  };

  window.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && window.jhAIState && window.jhAIState.open) {
      window.jhAIClose();
    }
  });
})();
