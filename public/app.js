/* ============================================================
   JOINING HANDS
   AI COMPUTER LEARNING & PRACTICAL LAB
   COMPLETE APP.JS
   ============================================================ */


/* ============================================================
   GLOBAL SETTINGS
   ============================================================ */

let currentLanguage = "en";
let currentWordTab = "Home";
let currentToolIndex = 0;


/* ============================================================
   PROJECT DATA
   ============================================================ */

const projects = [];

for (let i = 1; i <= 14; i++) {
  projects.push({
    id: i,
    title: "Project " + i,
    topic: "MS Word Practical Project",
    description: "Complete the project by following the example.",
    image: "Project " + i + ".png"
  });
}


/* ============================================================
   MS WORD TABS
   ============================================================ */

const wordTabs = {

  Home: {
    image: "Home.png",
    icon: "🏠",
    tools: [

      {
        name: "Paste",
        icon: "📋",
        en: {
          what: "Inserts copied or cut content into the document.",
          when: "Use Paste when you want to place copied text, pictures, tables or other content somewhere else in the document.",
          steps: [
            "Select the text, picture or object you want to copy.",
            "Press Ctrl + C, or right-click and choose Copy.",
            "Place the cursor where you want the copied content.",
            "Go to the Home tab.",
            "Click Paste in the Clipboard group.",
            "The copied content will appear at the cursor position."
          ]
        },
        hi: {
          what: "कॉपी या कट किए गए content को document में insert करता है।",
          when: "जब आपको copied text, picture, table या अन्य content को document में किसी दूसरी जगह लगाना हो तब Paste का उपयोग करें।",
          steps: [
            "जिस text, picture या object को copy करना है उसे select करें।",
            "Ctrl + C दबाएं या right-click करके Copy चुनें।",
            "जहाँ content लगाना है वहाँ cursor रखें।",
            "Home tab खोलें।",
            "Clipboard group में Paste पर click करें।",
            "Copied content cursor की जगह दिखाई देगा।"
          ]
        }
      },

      {
        name: "Cut",
        icon: "✂️",
        en: {
          what: "Removes selected content from its current location and temporarily stores it on the Clipboard.",
          when: "Use Cut when you want to move text, pictures or other content from one place to another.",
          steps: [
            "Select the content you want to move.",
            "Go to Home → Clipboard.",
            "Click Cut.",
            "Place the cursor at the new location.",
            "Click Paste.",
            "The content will be moved to the new location."
          ]
        },
        hi: {
          what: "Selected content को उसकी current जगह से हटाकर Clipboard में रखता है।",
          when: "जब किसी text, picture या object को एक जगह से दूसरी जगह move करना हो तब Cut का उपयोग करें।",
          steps: [
            "जिस content को move करना है उसे select करें।",
            "Home → Clipboard में जाएँ।",
            "Cut पर click करें।",
            "नई जगह cursor रखें।",
            "Paste पर click करें।",
            "Content नई जगह move हो जाएगा।"
          ]
        }
      },

      {
        name: "Copy",
        icon: "📄",
        en: {
          what: "Creates a duplicate copy of selected content without removing the original.",
          when: "Use Copy when you want the same text, picture or object in more than one place.",
          steps: [
            "Select the required content.",
            "Press Ctrl + C or click Copy.",
            "Place the cursor at the required location.",
            "Click Paste.",
            "The original content remains unchanged."
          ]
        },
        hi: {
          what: "Selected content की duplicate copy बनाता है और original content को नहीं हटाता।",
          when: "जब एक ही text, picture या object को कई जगह इस्तेमाल करना हो तब Copy करें।",
          steps: [
            "Required content को select करें।",
            "Ctrl + C दबाएँ या Copy पर click करें।",
            "जहाँ copy चाहिए वहाँ cursor रखें।",
            "Paste पर click करें।",
            "Original content अपनी जगह पर रहेगा।"
          ]
        }
      },

      {
        name: "Format Painter",
        icon: "🖌️",
        en: {
          what: "Copies formatting from one piece of text and applies it to another.",
          when: "Use Format Painter when you want another text area to have exactly the same formatting.",
          steps: [
            "Select the text that already has the formatting you want.",
            "Go to Home → Clipboard.",
            "Click Format Painter.",
            "Move the mouse to the text where you want the formatting.",
            "Select the target text.",
            "The formatting will be applied."
          ]
        },
        hi: {
          what: "एक text की formatting को दूसरे text पर apply करता है।",
          when: "जब दूसरे text को बिल्कुल same formatting देनी हो तब Format Painter उपयोग करें।",
          steps: [
            "जिस text की formatting copy करनी है उसे select करें।",
            "Home → Clipboard में जाएँ।",
            "Format Painter पर click करें।",
            "जिस text पर formatting लगानी है वहाँ जाएँ।",
            "Target text select करें।",
            "Formatting apply हो जाएगी।"
          ]
        }
      },

      {
        name: "Font Name",
        icon: "A",
        en: {
          what: "Changes the typeface or font used by the selected text.",
          when: "Use Font Name when you want to change the appearance or style of your text.",
          steps: [
            "Select the text.",
            "Go to Home → Font.",
            "Click the Font Name box.",
            "Choose a font such as Arial, Calibri or Times New Roman.",
            "The selected text changes to the chosen font."
          ]
        },
        hi: {
          what: "Selected text का font बदलता है।",
          when: "जब text की writing style या appearance बदलनी हो तब Font Name का उपयोग करें।",
          steps: [
            "Text select करें।",
            "Home → Font में जाएँ।",
            "Font Name box पर click करें।",
            "Arial, Calibri या Times New Roman जैसे font चुनें।",
            "Selected text का font बदल जाएगा।"
          ]
        }
      },

      {
        name: "Font Size",
        icon: "🔠",
        en: {
          what: "Changes the size of selected text.",
          when: "Use Font Size when text needs to be made larger or smaller.",
          steps: [
            "Select the text.",
            "Go to Home → Font.",
            "Click the Font Size box.",
            "Type or select a size such as 11, 14, 16 or 20.",
            "Press Enter."
          ]
        },
        hi: {
          what: "Selected text का size बदलता है।",
          when: "जब text को बड़ा या छोटा करना हो तब Font Size का उपयोग करें।",
          steps: [
            "Text select करें।",
            "Home → Font में जाएँ।",
            "Font Size box पर click करें।",
            "11, 14, 16 या 20 जैसा size चुनें।",
            "Enter दबाएँ।"
          ]
        }
      },

      {
        name: "Increase Font Size",
        icon: "🔼",
        en: {
          what: "Increases the size of selected text.",
          when: "Use it when you want to make text larger quickly.",
          steps: [
            "Select the text.",
            "Go to Home → Font.",
            "Click Increase Font Size.",
            "Click again if you want the text to become even larger."
          ]
        },
        hi: {
          what: "Selected text का size बड़ा करता है।",
          when: "जब text को जल्दी से बड़ा करना हो तब इसका उपयोग करें।",
          steps: [
            "Text select करें।",
            "Home → Font में जाएँ।",
            "Increase Font Size पर click करें।",
            "और बड़ा करना हो तो फिर से click करें।"
          ]
        }
      },

      {
        name: "Decrease Font Size",
        icon: "🔽",
        en: {
          what: "Decreases the size of selected text.",
          when: "Use it when text needs to be made smaller.",
          steps: [
            "Select the text.",
            "Go to Home → Font.",
            "Click Decrease Font Size.",
            "Repeat if a smaller size is required."
          ]
        },
        hi: {
          what: "Selected text का size छोटा करता है।",
          when: "जब text को छोटा करना हो तब इसका उपयोग करें।",
          steps: [
            "Text select करें।",
            "Home → Font में जाएँ।",
            "Decrease Font Size पर click करें।",
            "जरूरत के अनुसार दोबारा click करें।"
          ]
        }
      },

      {
        name: "Bold",
        icon: "B",
        en: {
          what: "Makes selected text darker and thicker.",
          when: "Use Bold to highlight important words, headings or information.",
          steps: [
            "Select the text.",
            "Go to Home → Font.",
            "Click Bold.",
            "The selected text becomes darker and thicker.",
            "Shortcut: Ctrl + B."
          ]
        },
        hi: {
          what: "Selected text को मोटा और dark करता है।",
          when: "Important words, headings या information को highlight करने के लिए Bold का उपयोग करें।",
          steps: [
            "Text select करें।",
            "Home → Font में जाएँ।",
            "Bold पर click करें।",
            "Selected text मोटा हो जाएगा।",
            "Shortcut: Ctrl + B."
          ]
        }
      },

      {
        name: "Italic",
        icon: "I",
        en: {
          what: "Makes selected text slanted.",
          when: "Use Italic to emphasize words or create a different text style.",
          steps: [
            "Select the text.",
            "Go to Home → Font.",
            "Click Italic.",
            "The selected text becomes slanted.",
            "Shortcut: Ctrl + I."
          ]
        },
        hi: {
          what: "Selected text को तिरछा करता है।",
          when: "किसी word को emphasize करने या अलग text style देने के लिए Italic उपयोग करें।",
          steps: [
            "Text select करें।",
            "Home → Font में जाएँ।",
            "Italic पर click करें।",
            "Text तिरछा हो जाएगा।",
            "Shortcut: Ctrl + I."
          ]
        }
      },

      {
        name: "Underline",
        icon: "U",
        en: {
          what: "Adds a line underneath the selected text.",
          when: "Use Underline when you want to emphasize important text.",
          steps: [
            "Select the text.",
            "Go to Home → Font.",
            "Click Underline.",
            "A line will appear under the selected text.",
            "Shortcut: Ctrl + U."
          ]
        },
        hi: {
          what: "Selected text के नीचे line लगाता है।",
          when: "Important text को emphasize करने के लिए Underline का उपयोग करें।",
          steps: [
            "Text select करें।",
            "Home → Font में जाएँ।",
            "Underline पर click करें।",
            "Text के नीचे line आ जाएगी।",
            "Shortcut: Ctrl + U."
          ]
        }
      },

      {
        name: "Strikethrough",
        icon: "S̶",
        en: {
          what: "Draws a line through the middle of selected text.",
          when: "Use it to show deleted, cancelled or no-longer-valid text.",
          steps: [
            "Select the text.",
            "Go to Home → Font.",
            "Click Strikethrough.",
            "A line appears through the text."
          ]
        },
        hi: {
          what: "Text के बीच में line लगाता है।",
          when: "Deleted, cancelled या no-longer-valid information दिखाने के लिए उपयोग करें।",
          steps: [
            "Text select करें।",
            "Home → Font में जाएँ।",
            "Strikethrough पर click करें।",
            "Text के बीच line दिखाई देगी।"
          ]
        }
      },

      {
        name: "Subscript",
        icon: "X₂",
        en: {
          what: "Makes selected characters smaller and lower than the normal text line.",
          when: "Use Subscript for chemical formulas such as H₂O.",
          steps: [
            "Select the character or number.",
            "Go to Home → Font.",
            "Click Subscript.",
            "The selected character moves lower and becomes smaller."
          ]
        },
        hi: {
          what: "Selected character को छोटा करके text line के नीचे लिखता है।",
          when: "H₂O जैसे chemical formulas लिखने के लिए उपयोग करें।",
          steps: [
            "Character या number select करें।",
            "Home → Font में जाएँ।",
            "Subscript पर click करें।",
            "Character छोटा होकर नीचे चला जाएगा।"
          ]
        }
      },

      {
        name: "Superscript",
        icon: "X²",
        en: {
          what: "Makes selected characters smaller and higher than the normal text line.",
          when: "Use Superscript for powers such as X² or mathematical expressions.",
          steps: [
            "Select the character or number.",
            "Go to Home → Font.",
            "Click Superscript.",
            "The selected character moves upward and becomes smaller."
          ]
        },
        hi: {
          what: "Selected character को छोटा करके text line के ऊपर लिखता है।",
          when: "X² जैसे mathematical expressions के लिए उपयोग करें।",
          steps: [
            "Character या number select करें।",
            "Home → Font में जाएँ।",
            "Superscript पर click करें।",
            "Character छोटा होकर ऊपर चला जाएगा।"
          ]
        }
      },

      {
        name: "Text Highlight Color",
        icon: "🖍️",
        en: {
          what: "Adds a colored highlight behind selected text.",
          when: "Use it to quickly draw attention to important information.",
          steps: [
            "Select the text.",
            "Go to Home → Font.",
            "Click Text Highlight Color.",
            "Choose a color.",
            "The selected text gets a colored background."
          ]
        },
        hi: {
          what: "Selected text के पीछे highlight color लगाता है।",
          when: "Important information को जल्दी highlight करने के लिए उपयोग करें।",
          steps: [
            "Text select करें।",
            "Home → Font में जाएँ।",
            "Text Highlight Color पर click करें।",
            "Color चुनें।",
            "Text के पीछे color लग जाएगा।"
          ]
        }
      },

      {
        name: "Font Color",
        icon: "A",
        en: {
          what: "Changes the color of selected text.",
          when: "Use it when you want headings or important words to have a different color.",
          steps: [
            "Select the text.",
            "Go to Home → Font.",
            "Click Font Color.",
            "Choose a color.",
            "The text changes to that color."
          ]
        },
        hi: {
          what: "Selected text का color बदलता है।",
          when: "Heading या important words को अलग color देने के लिए उपयोग करें।",
          steps: [
            "Text select करें।",
            "Home → Font में जाएँ।",
            "Font Color पर click करें।",
            "Color चुनें।",
            "Text का color बदल जाएगा।"
          ]
        }
      },

      {
        name: "Bullets",
        icon: "•",
        en: {
          what: "Creates a bulleted list.",
          when: "Use bullets when the order of information is not important.",
          steps: [
            "Select the lines you want in the list.",
            "Go to Home → Paragraph.",
            "Click Bullets.",
            "Choose a bullet style.",
            "Each line becomes a bullet point."
          ]
        },
        hi: {
          what: "Bullets वाली list बनाता है।",
          when: "जब information का order important नहीं हो तब bullets उपयोग करें।",
          steps: [
            "List वाली lines select करें।",
            "Home → Paragraph में जाएँ।",
            "Bullets पर click करें।",
            "Bullet style चुनें।",
            "हर line bullet point बन जाएगी।"
          ]
        }
      },

      {
        name: "Numbering",
        icon: "1.",
        en: {
          what: "Creates a numbered list.",
          when: "Use numbering when information must follow a particular order or sequence.",
          steps: [
            "Select the list items.",
            "Go to Home → Paragraph.",
            "Click Numbering.",
            "Choose a numbering style.",
            "The items will be numbered automatically."
          ]
        },
        hi: {
          what: "Number वाली list बनाता है।",
          when: "जब information किसी particular order या sequence में हो तब numbering उपयोग करें।",
          steps: [
            "List items select करें।",
            "Home → Paragraph में जाएँ।",
            "Numbering पर click करें।",
            "Numbering style चुनें।",
            "Items automatically numbered हो जाएँगे।"
          ]
        }
      },

      {
        name: "Multilevel List",
        icon: "☷",
        en: {
          what: "Creates a list with multiple levels such as main points and sub-points.",
          when: "Use it for outlines, chapters, topics and subtopics.",
          steps: [
            "Place the cursor in the list.",
            "Go to Home → Paragraph.",
            "Click Multilevel List.",
            "Choose a list style.",
            "Use Increase Indent for sub-levels."
          ]
        },
        hi: {
          what: "Multiple levels वाली list बनाता है।",
          when: "Topics, subtopics, chapters और outlines बनाने के लिए उपयोग करें।",
          steps: [
            "List में cursor रखें।",
            "Home → Paragraph में जाएँ।",
            "Multilevel List पर click करें।",
            "List style चुनें।",
            "Sub-level बनाने के लिए Increase Indent उपयोग करें।"
          ]
        }
      },

      {
        name: "Align Left",
        icon: "≡",
        en: {
          what: "Aligns text with the left margin.",
          when: "Use it for normal paragraphs and left-aligned documents.",
          steps: [
            "Select the paragraph.",
            "Go to Home → Paragraph.",
            "Click Align Left.",
            "Shortcut: Ctrl + L."
          ]
        },
        hi: {
          what: "Text को left margin के साथ align करता है।",
          when: "Normal paragraphs के लिए इसका उपयोग किया जाता है।",
          steps: [
            "Paragraph select करें।",
            "Home → Paragraph में जाएँ।",
            "Align Left पर click करें।",
            "Shortcut: Ctrl + L."
          ]
        }
      },

      {
        name: "Center",
        icon: "≡",
        en: {
          what: "Places text in the center of the page.",
          when: "Use it for titles, headings and certificates.",
          steps: [
            "Select the text.",
            "Go to Home → Paragraph.",
            "Click Center.",
            "Shortcut: Ctrl + E."
          ]
        },
        hi: {
          what: "Text को page के center में रखता है।",
          when: "Titles, headings और certificates के लिए उपयोग करें।",
          steps: [
            "Text select करें।",
            "Home → Paragraph में जाएँ।",
            "Center पर click करें।",
            "Shortcut: Ctrl + E."
          ]
        }
      },

      {
        name: "Align Right",
        icon: "≡",
        en: {
          what: "Aligns text with the right margin.",
          when: "Use it when information needs to appear on the right side.",
          steps: [
            "Select the paragraph.",
            "Go to Home → Paragraph.",
            "Click Align Right.",
            "Shortcut: Ctrl + R."
          ]
        },
        hi: {
          what: "Text को right margin के साथ align करता है।",
          when: "जब information को right side पर रखना हो तब उपयोग करें।",
          steps: [
            "Paragraph select करें।",
            "Home → Paragraph में जाएँ।",
            "Align Right पर click करें।",
            "Shortcut: Ctrl + R."
          ]
        }
      },

      {
        name: "Justify",
        icon: "☰",
        en: {
          what: "Aligns text evenly with both the left and right margins.",
          when: "Use Justify for professional documents, reports and long paragraphs.",
          steps: [
            "Select the paragraph.",
            "Go to Home → Paragraph.",
            "Click Justify.",
            "Shortcut: Ctrl + J."
          ]
        },
        hi: {
          what: "Text को left और right दोनों margins के साथ align करता है।",
          when: "Professional documents, reports और long paragraphs में उपयोग करें।",
          steps: [
            "Paragraph select करें।",
            "Home → Paragraph में जाएँ।",
            "Justify पर click करें।",
            "Shortcut: Ctrl + J."
          ]
        }
      },

      {
        name: "Line & Paragraph Spacing",
        icon: "↕️",
        en: {
          what: "Controls the amount of space between lines and paragraphs.",
          when: "Use it to make a document easier to read and properly spaced.",
          steps: [
            "Select the paragraph.",
            "Go to Home → Paragraph.",
            "Click Line and Paragraph Spacing.",
            "Choose 1.0, 1.15, 1.5, 2.0 or another option.",
            "The spacing changes immediately."
          ]
        },
        hi: {
          what: "Lines और paragraphs के बीच की दूरी control करता है।",
          when: "Document को readable और properly spaced बनाने के लिए उपयोग करें।",
          steps: [
            "Paragraph select करें।",
            "Home → Paragraph में जाएँ।",
            "Line and Paragraph Spacing पर click करें।",
            "1.0, 1.15, 1.5 या 2.0 चुनें।",
            "Spacing बदल जाएगी।"
          ]
        }
      },

      {
        name: "Styles",
        icon: "🎨",
        en: {
          what: "Applies predefined formatting to text quickly.",
          when: "Use Styles to create professional and consistent headings and titles.",
          steps: [
            "Select the text or place the cursor in the paragraph.",
            "Go to Home → Styles.",
            "Choose Normal, Heading 1, Heading 2, Title or another style.",
            "Word applies the predefined formatting.",
            "Use Heading styles to organize long documents."
          ]
        },
        hi: {
          what: "Predefined formatting को जल्दी से text पर apply करता है।",
          when: "Professional और consistent headings बनाने के लिए Styles उपयोग करें।",
          steps: [
            "Text select करें या paragraph में cursor रखें।",
            "Home → Styles में जाएँ।",
            "Normal, Heading 1, Heading 2 या Title चुनें।",
            "Word predefined formatting apply करेगा।",
            "Long documents में Heading styles उपयोग करें।"
          ]
        }
      }

    ]
  },


  Insert: {
    image: "Insert.png",
    icon: "➕",
    tools: [

      {
        name: "Cover Page",
        icon: "📄",
        en: {
          what: "Adds a ready-made cover page to the beginning of a document.",
          when: "Use it when creating reports, assignments, projects or professional documents.",
          steps: [
            "Open the document.",
            "Go to Insert.",
            "Click Cover Page.",
            "Choose a design.",
            "Replace the sample title, name, date and other information."
          ]
        },
        hi: {
          what: "Document की शुरुआत में ready-made cover page जोड़ता है।",
          when: "Reports, assignments, projects और professional documents के लिए उपयोग करें।",
          steps: [
            "Document खोलें।",
            "Insert tab खोलें।",
            "Cover Page पर click करें।",
            "एक design चुनें।",
            "Sample title, name, date आदि को अपनी information से बदलें।"
          ]
        }
      },

      {
        name: "Blank Page",
        icon: "📃",
        en: {
          what: "Adds a completely blank page to the document.",
          when: "Use it when you need a new page for separate content.",
          steps: [
            "Place the cursor where the new page should be added.",
            "Go to Insert.",
            "Click Blank Page.",
            "A new blank page will be inserted."
          ]
        },
        hi: {
          what: "Document में एक नया खाली page जोड़ता है।",
          when: "जब अलग content के लिए नया page चाहिए तब उपयोग करें।",
          steps: [
            "जहाँ नया page चाहिए वहाँ cursor रखें।",
            "Insert tab खोलें।",
            "Blank Page पर click करें।",
            "नया blank page insert हो जाएगा।"
          ]
        }
      },

      {
        name: "Page Break",
        icon: "↵",
        en: {
          what: "Moves the following content to a new page.",
          when: "Use it when you want the next section to start on a new page.",
          steps: [
            "Place the cursor before the content that should move to the next page.",
            "Go to Insert.",
            "Click Page Break.",
            "The following content starts on the next page.",
            "Shortcut: Ctrl + Enter."
          ]
        },
        hi: {
          what: "अगले content को नए page पर भेजता है।",
          when: "जब नई section को नए page से शुरू करना हो तब उपयोग करें।",
          steps: [
            "जिस content को अगले page पर भेजना है उसके पहले cursor रखें।",
            "Insert tab खोलें।",
            "Page Break पर click करें।",
            "Following content अगले page से शुरू होगा।",
            "Shortcut: Ctrl + Enter."
          ]
        }
      },

      {
        name: "Table",
        icon: "▦",
        en: {
          what: "Creates a table using rows and columns.",
          when: "Use a table when information needs to be arranged in rows and columns, such as student marks, attendance, price lists or schedules.",
          steps: [
            "Place the cursor where the table should appear.",
            "Go to Insert.",
            "Click Table.",
            "Move over the grid to choose the required number of rows and columns.",
            "Click the selected grid.",
            "Enter your information into the cells.",
            "Use the Table Design and Layout tabs to format the table."
          ]
        },
        hi: {
          what: "Rows और columns की मदद से table बनाता है।",
          when: "Student marks, attendance, price list या schedule जैसी information को rows और columns में arrange करने के लिए table उपयोग करें।",
          steps: [
            "जहाँ table चाहिए वहाँ cursor रखें।",
            "Insert tab खोलें।",
            "Table पर click करें।",
            "Grid में required rows और columns चुनें।",
            "Selected grid पर click करें।",
            "Cells में information लिखें।",
            "Table Design और Layout से table को format करें।"
          ]
        }
      },

      {
        name: "Pictures",
        icon: "🖼️",
        en: {
          what: "Inserts a picture from your computer or available image locations.",
          when: "Use it when you need photos, diagrams, logos or illustrations in a document.",
          steps: [
            "Place the cursor where the picture should appear.",
            "Go to Insert.",
            "Click Pictures.",
            "Choose This Device or another available source.",
            "Select the image.",
            "Click Insert.",
            "Resize or reposition the image as required."
          ]
        },
        hi: {
          what: "Computer या available location से picture document में insert करता है।",
          when: "Photos, diagrams, logos या illustrations जोड़ने के लिए उपयोग करें।",
          steps: [
            "जहाँ picture चाहिए वहाँ cursor रखें।",
            "Insert tab खोलें।",
            "Pictures पर click करें।",
            "This Device या available source चुनें।",
            "Image select करें।",
            "Insert पर click करें।",
            "Image का size और position जरूरत के अनुसार बदलें।"
          ]
        }
      },

      {
        name: "Shapes",
        icon: "🔷",
        en: {
          what: "Adds shapes such as rectangles, circles, arrows and flowchart symbols.",
          when: "Use Shapes for diagrams, labels, process charts and attractive designs.",
          steps: [
            "Go to Insert.",
            "Click Shapes.",
            "Choose a shape.",
            "Click and drag on the document to draw it.",
            "Use Shape Format to change fill, outline, size and effects."
          ]
        },
        hi: {
          what: "Rectangle, circle, arrow और flowchart symbols जैसी shapes जोड़ता है।",
          when: "Diagrams, labels, process charts और attractive designs के लिए उपयोग करें।",
          steps: [
            "Insert tab खोलें।",
            "Shapes पर click करें।",
            "एक shape चुनें।",
            "Document में click और drag करके shape बनाएँ।",
            "Shape Format से fill, outline, size और effects बदलें।"
          ]
        }
      },

      {
        name: "Icons",
        icon: "⭐",
        en: {
          what: "Inserts simple graphical icons into a document.",
          when: "Use icons to visually represent ideas, categories or instructions.",
          steps: [
            "Go to Insert.",
            "Click Icons.",
            "Search for an icon.",
            "Select the required icon.",
            "Click Insert.",
            "Resize or format the icon."
          ]
        },
        hi: {
          what: "Document में simple graphical icons insert करता है।",
          when: "Ideas, categories या instructions को visually दिखाने के लिए उपयोग करें।",
          steps: [
            "Insert tab खोलें।",
            "Icons पर click करें।",
            "Icon search करें।",
            "Required icon select करें।",
            "Insert पर click करें।",
            "Icon का size या formatting बदलें।"
          ]
        }
      },

      {
        name: "3D Models",
        icon: "🧊",
        en: {
          what: "Adds a three-dimensional model to the document.",
          when: "Use it for educational diagrams, product demonstrations or 3D illustrations.",
          steps: [
            "Go to Insert.",
            "Click 3D Models.",
            "Choose an available model source.",
            "Select a model.",
            "Click Insert.",
            "Use the 3D controls to rotate or change the view."
          ]
        },
        hi: {
          what: "Document में 3D model जोड़ता है।",
          when: "Educational diagrams, products या 3D illustrations के लिए उपयोग करें।",
          steps: [
            "Insert tab खोलें।",
            "3D Models पर click करें।",
            "Available model source चुनें।",
            "Model select करें।",
            "Insert पर click करें।",
            "3D controls से model को rotate या view बदलें।"
          ]
        }
      },

      {
        name: "SmartArt",
        icon: "🧩",
        en: {
          what: "Creates visual diagrams for processes, hierarchies, lists and relationships.",
          when: "Use SmartArt when information is easier to understand as a diagram.",
          steps: [
            "Go to Insert.",
            "Click SmartArt.",
            "Choose a category such as Process, Hierarchy or Cycle.",
            "Choose a layout.",
            "Click OK.",
            "Enter your information in the SmartArt text boxes."
          ]
        },
        hi: {
          what: "Process, hierarchy, list और relationships के लिए visual diagram बनाता है।",
          when: "जब information diagram के रूप में ज्यादा आसानी से समझ आए तब SmartArt उपयोग करें।",
          steps: [
            "Insert tab खोलें।",
            "SmartArt पर click करें।",
            "Process, Hierarchy या Cycle जैसी category चुनें।",
            "Layout चुनें।",
            "OK पर click करें।",
            "SmartArt text boxes में information लिखें।"
          ]
        }
      },

      {
        name: "Chart",
        icon: "📊",
        en: {
          what: "Creates a chart to represent numerical information visually.",
          when: "Use charts for sales, marks, attendance, comparisons and statistics.",
          steps: [
            "Go to Insert.",
            "Click Chart.",
            "Choose a chart type such as Column, Pie or Line.",
            "Click OK.",
            "Enter or replace the data in the spreadsheet window.",
            "Close the data window.",
            "Format the chart if required."
          ]
        },
        hi: {
          what: "Numerical information को visual chart में दिखाता है।",
          when: "Sales, marks, attendance, comparison और statistics के लिए उपयोग करें।",
          steps: [
            "Insert tab खोलें।",
            "Chart पर click करें।",
            "Column, Pie या Line जैसा chart चुनें।",
            "OK पर click करें।",
            "Spreadsheet window में data enter या replace करें।",
            "Data window बंद करें।",
            "जरूरत के अनुसार chart format करें।"
          ]
        }
      },

      {
        name: "Screenshot",
        icon: "📸",
        en: {
          what: "Captures a screenshot of an available window and inserts it into the document.",
          when: "Use it for tutorials, instructions, demonstrations and software documentation.",
          steps: [
            "Open the window you want to capture.",
            "Return to Word.",
            "Go to Insert.",
            "Click Screenshot.",
            "Choose the available window or Screen Clipping.",
            "The screenshot is inserted into the document."
          ]
        },
        hi: {
          what: "Available window का screenshot लेकर document में insert करता है।",
          when: "Tutorials, instructions, demonstrations और software documentation में उपयोग करें।",
          steps: [
            "जिस window का screenshot चाहिए उसे खोलें।",
            "Word में वापस जाएँ।",
            "Insert tab खोलें।",
            "Screenshot पर click करें।",
            "Available window या Screen Clipping चुनें।",
            "Screenshot document में insert हो जाएगा।"
          ]
        }
      },

      {
        name: "Link",
        icon: "🔗",
        en: {
          what: "Creates a clickable hyperlink to a webpage, file, email address or another location.",
          when: "Use links when you want readers to quickly open another resource.",
          steps: [
            "Select the text you want to make clickable.",
            "Go to Insert.",
            "Click Link.",
            "Enter or select the destination.",
            "Click OK.",
            "Click the link to test it."
          ]
        },
        hi: {
          what: "Clickable hyperlink बनाता है जो webpage, file, email या दूसरी location खोल सकता है।",
          when: "जब reader को किसी दूसरे resource तक जल्दी पहुँचाना हो तब Link उपयोग करें।",
          steps: [
            "जिस text को clickable बनाना है उसे select करें।",
            "Insert tab खोलें।",
            "Link पर click करें।",
            "Destination enter या select करें।",
            "OK पर click करें।",
            "Link पर click करके test करें।"
          ]
        }
      },

      {
        name: "Bookmark",
        icon: "🔖",
        en: {
          what: "Marks a specific location in a document so it can be reached quickly.",
          when: "Use bookmarks in long documents when you need quick navigation.",
          steps: [
            "Place the cursor at the required location.",
            "Go to Insert → Bookmark.",
            "Enter a bookmark name.",
            "Click Add.",
            "Use Insert → Link or Bookmark to navigate to it later."
          ]
        },
        hi: {
          what: "Document की किसी specific location को mark करता है ताकि बाद में जल्दी वहाँ पहुँचा जा सके।",
          when: "Long documents में quick navigation के लिए उपयोग करें।",
          steps: [
            "Required location पर cursor रखें।",
            "Insert → Bookmark में जाएँ।",
            "Bookmark name लिखें।",
            "Add पर click करें।",
            "बाद में Link या Bookmark से उस जगह जाएँ।"
          ]
        }
      },

      {
        name: "Comment",
        icon: "💬",
        en: {
          what: "Adds a note or comment to selected content.",
          when: "Use comments when reviewing a document or giving feedback.",
          steps: [
            "Select the relevant text.",
            "Go to Insert.",
            "Click Comment.",
            "Type your comment.",
            "Click Post or submit the comment."
          ]
        },
        hi: {
          what: "Selected content के साथ note या comment जोड़ता है।",
          when: "Document review या feedback देने के लिए comments उपयोग करें।",
          steps: [
            "Relevant text select करें।",
            "Insert tab खोलें।",
            "Comment पर click करें।",
            "अपना comment लिखें।",
            "Post या submit करें।"
          ]
        }
      },

      {
        name: "Header",
        icon: "⬆️",
        en: {
          what: "Adds content to the top area of pages.",
          when: "Use headers for document titles, organization names, dates or repeated information.",
          steps: [
            "Go to Insert.",
            "Click Header.",
            "Choose a design.",
            "Type the required information.",
            "Click Close Header and Footer."
          ]
        },
        hi: {
          what: "Pages के ऊपर वाले area में content जोड़ता है।",
          when: "Document title, organization name, date या repeated information के लिए उपयोग करें।",
          steps: [
            "Insert tab खोलें।",
            "Header पर click करें।",
            "Design चुनें।",
            "Required information लिखें।",
            "Close Header and Footer पर click करें।"
          ]
        }
      },

      {
        name: "Footer",
        icon: "⬇️",
        en: {
          what: "Adds content to the bottom area of pages.",
          when: "Use footers for page numbers, document names or other repeated information.",
          steps: [
            "Go to Insert.",
            "Click Footer.",
            "Choose a design.",
            "Enter the required information.",
            "Close Header and Footer."
          ]
        },
        hi: {
          what: "Pages के नीचे वाले area में content जोड़ता है।",
          when: "Page numbers, document name या repeated information के लिए उपयोग करें।",
          steps: [
            "Insert tab खोलें।",
            "Footer पर click करें।",
            "Design चुनें।",
            "Required information लिखें।",
            "Close Header and Footer करें।"
          ]
        }
      },

      {
        name: "Page Number",
        icon: "🔢",
        en: {
          what: "Adds page numbers to the document.",
          when: "Use page numbers in reports, assignments, books and long documents.",
          steps: [
            "Go to Insert.",
            "Click Page Number.",
            "Choose Top of Page, Bottom of Page or another location.",
            "Choose a numbering style.",
            "Page numbers are added automatically."
          ]
        },
        hi: {
          what: "Document में page numbers जोड़ता है।",
          when: "Reports, assignments, books और long documents में उपयोग करें।",
          steps: [
            "Insert tab खोलें।",
            "Page Number पर click करें।",
            "Top of Page या Bottom of Page चुनें।",
            "Numbering style चुनें।",
            "Page numbers automatically add हो जाएँगे।"
          ]
        }
      },

      {
        name: "Text Box",
        icon: "▣",
        en: {
          what: "Creates a movable box containing text.",
          when: "Use text boxes for labels, side notes, posters and special information.",
          steps: [
            "Go to Insert.",
            "Click Text Box.",
            "Choose a built-in design or Draw Text Box.",
            "Click and drag to create the box.",
            "Type your text.",
            "Use Shape Format to change its appearance."
          ]
        },
        hi: {
          what: "Movable text box बनाता है।",
          when: "Labels, side notes, posters और special information के लिए उपयोग करें।",
          steps: [
            "Insert tab खोलें।",
            "Text Box पर click करें।",
            "Built-in design या Draw Text Box चुनें।",
            "Click और drag करके box बनाएँ।",
            "Text लिखें।",
            "Shape Format से appearance बदलें।"
          ]
        }
      },

      {
        name: "WordArt",
        icon: "🔤",
        en: {
          what: "Creates decorative and artistic text.",
          when: "Use WordArt for posters, titles, banners and attractive headings.",
          steps: [
            "Go to Insert.",
            "Click WordArt.",
            "Choose a style.",
            "Type your text.",
            "Use Shape Format to customize it."
          ]
        },
        hi: {
          what: "Decorative और artistic text बनाता है।",
          when: "Posters, titles, banners और attractive headings के लिए उपयोग करें।",
          steps: [
            "Insert tab खोलें।",
            "WordArt पर click करें।",
            "Style चुनें।",
            "Text लिखें।",
            "Shape Format से customize करें।"
          ]
        }
      },

      {
        name: "Date & Time",
        icon: "🕐",
        en: {
          what: "Inserts the current date and/or time into the document.",
          when: "Use it for letters, reports, forms and official documents.",
          steps: [
            "Place the cursor where the date or time should appear.",
            "Go to Insert.",
            "Click Date & Time.",
            "Choose the required format.",
            "Click OK."
          ]
        },
        hi: {
          what: "Document में current date और/or time insert करता है।",
          when: "Letters, reports, forms और official documents में उपयोग करें।",
          steps: [
            "जहाँ date/time चाहिए वहाँ cursor रखें।",
            "Insert tab खोलें।",
            "Date & Time पर click करें।",
            "Required format चुनें।",
            "OK पर click करें।"
          ]
        }
      },

      {
        name: "Equation",
        icon: "∑",
        en: {
          what: "Inserts mathematical equations and formulas.",
          when: "Use it for mathematics, science and technical documents.",
          steps: [
            "Place the cursor where the equation should appear.",
            "Go to Insert.",
            "Click Equation.",
            "Choose a built-in equation or create your own.",
            "Enter the required mathematical symbols and values."
          ]
        },
        hi: {
          what: "Mathematical equations और formulas insert करता है।",
          when: "Mathematics, science और technical documents में उपयोग करें।",
          steps: [
            "जहाँ equation चाहिए वहाँ cursor रखें।",
            "Insert tab खोलें।",
            "Equation पर click करें।",
            "Built-in equation चुनें या अपनी equation बनाएँ।",
            "Required symbols और values enter करें।"
          ]
        }
      },

      {
        name: "Symbol",
        icon: "Ω",
        en: {
          what: "Inserts special characters and symbols.",
          when: "Use it for symbols such as ©, ®, €, ±, Ω and mathematical characters.",
          steps: [
            "Place the cursor where the symbol should appear.",
            "Go to Insert.",
            "Click Symbol.",
            "Choose a symbol.",
            "Click Insert."
          ]
        },
        hi: {
          what: "Special characters और symbols insert करता है।",
          when: "©, ®, €, ±, Ω जैसे symbols जोड़ने के लिए उपयोग करें।",
          steps: [
            "जहाँ symbol चाहिए वहाँ cursor रखें।",
            "Insert tab खोलें।",
            "Symbol पर click करें।",
            "Symbol चुनें।",
            "Insert पर click करें।"
          ]
        }
      }

    ]
  },


  "Page Layout": {
    image: "Page Layout(1).png",
    icon: "📐",
    tools: [

      {
        name: "Themes",
        icon: "🎨",
        en: {
          what: "Changes the overall visual theme of the document.",
          when: "Use Themes when you want the document to have a consistent professional design.",
          steps: [
            "Go to Page Layout.",
            "Find the Themes group.",
            "Click Themes.",
            "Choose a theme.",
            "The document's overall colors, fonts and effects change."
          ]
        },
        hi: {
          what: "पूरे document की visual theme बदलता है।",
          when: "जब पूरे document को consistent और professional design देना हो तब Themes उपयोग करें।",
          steps: [
            "Page Layout tab खोलें।",
            "Themes group खोजें।",
            "Themes पर click करें।",
            "एक theme चुनें।",
            "Document के colors, fonts और effects बदल जाएँगे।"
          ]
        }
      },

      {
        name: "Margins",
        icon: "↔️",
        en: {
          what: "Controls the empty space around the edges of a page.",
          when: "Use Margins when you need to change the printable space or document layout.",
          steps: [
            "Go to Page Layout.",
            "Click Margins.",
            "Choose Normal, Narrow, Moderate, Wide or another option.",
            "For custom margins choose Custom Margins.",
            "Enter the required values and click OK."
          ]
        },
        hi: {
          what: "Page के चारों तरफ की खाली जगह यानी margins को control करता है।",
          when: "Document की printable space या layout बदलने के लिए उपयोग करें।",
          steps: [
            "Page Layout tab खोलें।",
            "Margins पर click करें।",
            "Normal, Narrow, Moderate या Wide चुनें।",
            "Custom setting के लिए Custom Margins चुनें।",
            "Values enter करके OK करें।"
          ]
        }
      },

      {
        name: "Orientation",
        icon: "↔",
        en: {
          what: "Changes the page orientation between Portrait and Landscape.",
          when: "Use Landscape for wide tables, charts or designs.",
          steps: [
            "Go to Page Layout.",
            "Click Orientation.",
            "Choose Portrait or Landscape.",
            "The page orientation changes."
          ]
        },
        hi: {
          what: "Page को Portrait या Landscape orientation में बदलता है।",
          when: "Wide tables, charts या designs के लिए Landscape उपयोग करें।",
          steps: [
            "Page Layout खोलें।",
            "Orientation पर click करें।",
            "Portrait या Landscape चुनें।",
            "Page orientation बदल जाएगी।"
          ]
        }
      },

      {
        name: "Size",
        icon: "📄",
        en: {
          what: "Changes the physical page size.",
          when: "Use it to select A4, Letter, Legal or another paper size.",
          steps: [
            "Go to Page Layout.",
            "Click Size.",
            "Choose A4, Letter, Legal or another size.",
            "The document page size changes."
          ]
        },
        hi: {
          what: "Page का paper size बदलता है।",
          when: "A4, Letter, Legal आदि paper size चुनने के लिए उपयोग करें।",
          steps: [
            "Page Layout खोलें।",
            "Size पर click करें।",
            "A4, Letter या Legal चुनें।",
            "Page size बदल जाएगा।"
          ]
        }
      },

      {
        name: "Columns",
        icon: "▤",
        en: {
          what: "Divides text into multiple vertical columns.",
          when: "Use Columns for newspapers, newsletters, brochures and magazine-style layouts.",
          steps: [
            "Select the text if you only want part of the document in columns.",
            "Go to Page Layout.",
            "Click Columns.",
            "Choose Two, Three or another option.",
            "The selected text is divided into columns."
          ]
        },
        hi: {
          what: "Text को कई vertical columns में divide करता है।",
          when: "Newspaper, newsletter, brochure और magazine-style documents में उपयोग करें।",
          steps: [
            "अगर केवल कुछ text को columns में करना है तो उसे select करें।",
            "Page Layout खोलें।",
            "Columns पर click करें।",
            "Two, Three या अन्य option चुनें।",
            "Text columns में divide हो जाएगा।"
          ]
        }
      },

      {
        name: "Breaks",
        icon: "↪️",
        en: {
          what: "Creates page, section or column breaks.",
          when: "Use Breaks when different parts of a document need different layouts.",
          steps: [
            "Place the cursor where the break should occur.",
            "Go to Page Layout.",
            "Click Breaks.",
            "Choose Page Break, Section Break or Column Break.",
            "Word applies the selected break."
          ]
        },
        hi: {
          what: "Page, section या column break बनाने के लिए उपयोग होता है।",
          when: "जब document के अलग sections की अलग layout चाहिए तब उपयोग करें।",
          steps: [
            "जहाँ break चाहिए वहाँ cursor रखें।",
            "Page Layout खोलें।",
            "Breaks पर click करें।",
            "Page Break, Section Break या Column Break चुनें।",
            "Selected break apply हो जाएगा।"
          ]
        }
      },

      {
        name: "Watermark",
        icon: "💧",
        en: {
          what: "Places faint text or an image behind the document content.",
          when: "Use Watermark for labels such as DRAFT, CONFIDENTIAL, SAMPLE or organization branding.",
          steps: [
            "Open the document.",
            "Go to the Design tab in newer versions of Word.",
            "Click Watermark.",
            "Choose a built-in watermark such as DRAFT or CONFIDENTIAL.",
            "For your own watermark choose Custom Watermark.",
            "Select Text watermark or Picture watermark.",
            "Enter the text or choose the image.",
            "Click Apply or OK."
          ]
        },
        hi: {
          what: "Document के content के पीछे हल्का text या image लगाता है।",
          when: "DRAFT, CONFIDENTIAL, SAMPLE या organization branding दिखाने के लिए Watermark उपयोग करें।",
          steps: [
            "Document खोलें।",
            "Newer Word versions में Design tab खोलें।",
            "Watermark पर click करें।",
            "DRAFT या CONFIDENTIAL जैसा built-in watermark चुनें।",
            "अपने watermark के लिए Custom Watermark चुनें।",
            "Text watermark या Picture watermark चुनें।",
            "Text लिखें या image चुनें।",
            "Apply या OK करें।"
          ]
        }
      },

      {
        name: "Page Color",
        icon: "🟨",
        en: {
          what: "Changes the background color of the document page.",
          when: "Use it for posters, certificates, invitations and creative documents.",
          steps: [
            "Go to Design or Page Layout depending on your Word version.",
            "Click Page Color.",
            "Choose a color.",
            "The page background changes."
          ]
        },
        hi: {
          what: "Document page का background color बदलता है।",
          when: "Posters, certificates, invitations और creative documents में उपयोग करें।",
          steps: [
            "Word version के अनुसार Design या Page Layout खोलें।",
            "Page Color पर click करें।",
            "Color चुनें।",
            "Page का background बदल जाएगा।"
          ]
        }
      },

      {
        name: "Page Borders",
        icon: "▣",
        en: {
          what: "Adds a border around the page.",
          when: "Use it for certificates, assignments, invitations and decorative documents.",
          steps: [
            "Go to Design or Page Layout.",
            "Click Page Borders.",
            "Choose a border setting.",
            "Choose line style, color and width.",
            "Click OK."
          ]
        },
        hi: {
          what: "Page के चारों तरफ border लगाता है।",
          when: "Certificates, assignments, invitations और decorative documents के लिए उपयोग करें।",
          steps: [
            "Design या Page Layout खोलें।",
            "Page Borders पर click करें।",
            "Border setting चुनें।",
            "Line style, color और width चुनें।",
            "OK पर click करें।"
          ]
        }
      },

      {
        name: "Indent",
        icon: "↔️",
        en: {
          what: "Moves a paragraph inward from the left or right margin.",
          when: "Use indentation to structure paragraphs and create professional layouts.",
          steps: [
            "Select the paragraph.",
            "Go to Page Layout.",
            "Find the Paragraph group.",
            "Set Left or Right indentation.",
            "The paragraph moves inward."
          ]
        },
        hi: {
          what: "Paragraph को left या right margin से अंदर move करता है।",
          when: "Paragraph structure और professional layout बनाने के लिए उपयोग करें।",
          steps: [
            "Paragraph select करें।",
            "Page Layout खोलें।",
            "Paragraph group खोजें।",
            "Left या Right indent value set करें।",
            "Paragraph अंदर move हो जाएगा।"
          ]
        }
      },

      {
        name: "Spacing",
        icon: "↕️",
        en: {
          what: "Controls the space before and after paragraphs.",
          when: "Use paragraph spacing to make documents easier to read.",
          steps: [
            "Select the paragraph.",
            "Go to Page Layout.",
            "Find Paragraph → Spacing.",
            "Set Before or After values.",
            "Check the result and adjust if necessary."
          ]
        },
        hi: {
          what: "Paragraph के पहले और बाद की spacing control करता है।",
          when: "Document को readable और well-organized बनाने के लिए उपयोग करें।",
          steps: [
            "Paragraph select करें।",
            "Page Layout खोलें।",
            "Paragraph → Spacing खोजें।",
            "Before या After value set करें।",
            "Result check करके जरूरत के अनुसार adjust करें।"
          ]
        }
      },

      {
        name: "Arrange",
        icon: "🔄",
        en: {
          what: "Controls the position, wrapping, order and alignment of objects.",
          when: "Use Arrange when working with pictures, shapes, text boxes and other objects.",
          steps: [
            "Select the object.",
            "Go to Page Layout or Shape/Picture Format.",
            "Use Position to choose placement.",
            "Use Wrap Text to control how text flows around it.",
            "Use Bring Forward or Send Backward to change object order.",
            "Use Align or Rotate when required."
          ]
        },
        hi: {
          what: "Objects की position, wrapping, order और alignment control करता है।",
          when: "Pictures, shapes और text boxes के साथ काम करते समय उपयोग करें।",
          steps: [
            "Object select करें।",
            "Page Layout या Shape/Picture Format खोलें।",
            "Position से placement चुनें।",
            "Wrap Text से text flow control करें।",
            "Bring Forward या Send Backward से object order बदलें।",
            "जरूरत के अनुसार Align या Rotate करें।"
          ]
        }
      }

    ]
  },


  References: {
    image: "References.png",
    icon: "📚",
    tools: [

      {
        name: "Table of Contents",
        icon: "📑",
        en: {
          what: "Creates an automatic list of headings in the document.",
          when: "Use it in long reports, assignments, books and projects.",
          steps: [
            "Apply Heading 1, Heading 2 and other heading styles to your headings.",
            "Place the cursor where the table of contents should appear.",
            "Go to References.",
            "Click Table of Contents.",
            "Choose an automatic style.",
            "Word creates the table automatically.",
            "Use Update Table when headings or page numbers change."
          ]
        },
        hi: {
          what: "Document की headings की automatic list बनाता है।",
          when: "Long reports, assignments, books और projects में उपयोग करें।",
          steps: [
            "Headings पर Heading 1, Heading 2 जैसी styles apply करें।",
            "जहाँ Table of Contents चाहिए वहाँ cursor रखें।",
            "References tab खोलें।",
            "Table of Contents पर click करें।",
            "Automatic style चुनें।",
            "Word automatic table बनाएगा।",
            "Headings बदलने पर Update Table करें।"
          ]
        }
      },

      {
        name: "Footnote",
        icon: "¹",
        en: {
          what: "Adds a note at the bottom of the page.",
          when: "Use footnotes to explain terms or provide references without interrupting the main text.",
          steps: [
            "Place the cursor after the word or sentence.",
            "Go to References.",
            "Click Insert Footnote.",
            "Word adds a number and moves the cursor to the bottom.",
            "Type the note."
          ]
        },
        hi: {
          what: "Page के नीचे एक note जोड़ता है।",
          when: "Main text को disturb किए बिना explanation या reference देने के लिए उपयोग करें।",
          steps: [
            "Word या sentence के बाद cursor रखें।",
            "References tab खोलें।",
            "Insert Footnote पर click करें।",
            "Word number add करके नीचे cursor ले जाएगा।",
            "Footnote लिखें।"
          ]
        }
      },

      {
        name: "Citation",
        icon: "📖",
        en: {
          what: "Adds a reference to a source used in your document.",
          when: "Use citations in research papers, reports and academic assignments.",
          steps: [
            "Go to References.",
            "Choose the citation style.",
            "Click Insert Citation.",
            "Choose Add New Source.",
            "Enter the source details.",
            "Click OK.",
            "Word inserts the citation."
          ]
        },
        hi: {
          what: "Document में इस्तेमाल किए गए source का reference जोड़ता है।",
          when: "Research papers, reports और academic assignments में उपयोग करें।",
          steps: [
            "References tab खोलें।",
            "Citation style चुनें।",
            "Insert Citation पर click करें।",
            "Add New Source चुनें।",
            "Source की details भरें।",
            "OK करें।",
            "Word citation insert करेगा।"
          ]
        }
      },

      {
        name: "Bibliography",
        icon: "📚",
        en: {
          what: "Creates a list of sources used in the document.",
          when: "Use it at the end of research papers, reports and academic projects.",
          steps: [
            "Add your sources using Insert Citation.",
            "Place the cursor at the end of the document.",
            "Go to References.",
            "Click Bibliography.",
            "Choose a bibliography style.",
            "Word creates the source list."
          ]
        },
        hi: {
          what: "Document में इस्तेमाल किए गए sources की list बनाता है।",
          when: "Research papers, reports और academic projects के अंत में उपयोग करें।",
          steps: [
            "Insert Citation से sources add करें।",
            "Document के end में cursor रखें।",
            "References खोलें।",
            "Bibliography पर click करें।",
            "Style चुनें।",
            "Word source list बना देगा।"
          ]
        }
      },

      {
        name: "Caption",
        icon: "🏷️",
        en: {
          what: "Adds a label or description to a picture, table or figure.",
          when: "Use captions to identify figures and tables in reports.",
          steps: [
            "Select the picture or table.",
            "Go to References.",
            "Click Insert Caption.",
            "Choose Figure, Table or another label.",
            "Enter the caption.",
            "Click OK."
          ]
        },
        hi: {
          what: "Picture, table या figure के साथ label या description जोड़ता है।",
          when: "Reports में figures और tables को identify करने के लिए उपयोग करें।",
          steps: [
            "Picture या table select करें।",
            "References खोलें।",
            "Insert Caption पर click करें।",
            "Figure, Table या दूसरा label चुनें।",
            "Caption लिखें।",
            "OK करें।"
          ]
        }
      },

      {
        name: "Table of Figures",
        icon: "🖼️",
        en: {
          what: "Creates a list of figures or tables that have captions.",
          when: "Use it in long reports containing many figures or tables.",
          steps: [
            "Add captions to your figures or tables.",
            "Place the cursor where the list should appear.",
            "Go to References.",
            "Click Insert Table of Figures.",
            "Choose the caption label.",
            "Click OK."
          ]
        },
        hi: {
          what: "Captions वाली figures या tables की list बनाता है।",
          when: "Long reports में कई figures या tables होने पर उपयोग करें।",
          steps: [
            "Figures या tables में captions add करें।",
            "जहाँ list चाहिए वहाँ cursor रखें।",
            "References खोलें।",
            "Insert Table of Figures पर click करें।",
            "Caption label चुनें।",
            "OK करें।"
          ]
        }
      },

      {
        name: "Index",
        icon: "🔤",
        en: {
          what: "Creates an alphabetical list of important terms and their page numbers.",
          when: "Use an index in books, manuals and large reference documents.",
          steps: [
            "Select an important word.",
            "Go to References.",
            "Click Mark Entry.",
            "Confirm the index entry.",
            "Repeat for important terms.",
            "Place the cursor where the index should appear.",
            "Click Insert Index."
          ]
        },
        hi: {
          what: "Important terms और उनके page numbers की alphabetical list बनाता है।",
          when: "Books, manuals और large reference documents में उपयोग करें।",
          steps: [
            "Important word select करें।",
            "References खोलें।",
            "Mark Entry पर click करें।",
            "Index entry confirm करें।",
            "Important terms के लिए repeat करें।",
            "जहाँ index चाहिए वहाँ cursor रखें।",
            "Insert Index पर click करें।"
          ]
        }
      }

    ]
  },


  Mailings: {
    image: "Mailing.png",
    icon: "✉️",
    tools: [

      {
        name: "Envelopes",
        icon: "✉️",
        en: {
          what: "Creates and prints addresses directly on envelopes.",
          when: "Use it when preparing letters for mailing.",
          steps: [
            "Go to Mailings.",
            "Click Envelopes.",
            "Enter the delivery address.",
            "Enter the return address if required.",
            "Choose envelope options.",
            "Click Add to Document or Print."
          ]
        },
        hi: {
          what: "Envelope पर address तैयार और print करने में मदद करता है।",
          when: "Letters को mail करने के लिए envelopes तैयार करते समय उपयोग करें।",
          steps: [
            "Mailings tab खोलें।",
            "Envelopes पर click करें।",
            "Delivery address लिखें।",
            "जरूरत हो तो return address लिखें।",
            "Envelope options चुनें।",
            "Add to Document या Print करें।"
          ]
        }
      },

      {
        name: "Labels",
        icon: "🏷️",
        en: {
          what: "Creates printable labels.",
          when: "Use labels for addresses, folders, files, products or packages.",
          steps: [
            "Go to Mailings.",
            "Click Labels.",
            "Enter the label information.",
            "Choose the label product and layout.",
            "Click New Document or Print."
          ]
        },
        hi: {
          what: "Printable labels बनाता है।",
          when: "Addresses, folders, files, products या packages के लिए उपयोग करें।",
          steps: [
            "Mailings खोलें।",
            "Labels पर click करें।",
            "Label information लिखें।",
            "Label product और layout चुनें।",
            "New Document या Print करें।"
          ]
        }
      },

      {
        name: "Start Mail Merge",
        icon: "📨",
        en: {
          what: "Starts the process of creating personalized documents for many recipients.",
          when: "Use Mail Merge for letters, certificates, invitations, labels or emails sent to many people.",
          steps: [
            "Go to Mailings.",
            "Click Start Mail Merge.",
            "Choose Letters, E-mail Messages, Labels or another type.",
            "Select your recipient list.",
            "Insert personalized fields.",
            "Preview the results.",
            "Finish and merge."
          ]
        },
        hi: {
          what: "कई recipients के लिए personalized documents बनाने की process शुरू करता है।",
          when: "Letters, certificates, invitations, labels या bulk emails के लिए उपयोग करें।",
          steps: [
            "Mailings tab खोलें।",
            "Start Mail Merge पर click करें।",
            "Letters, E-mail Messages, Labels आदि चुनें।",
            "Recipient list select करें।",
            "Personalized fields insert करें।",
            "Preview Results देखें।",
            "Finish & Merge करें।"
          ]
        }
      },

      {
        name: "Select Recipients",
        icon: "👥",
        en: {
          what: "Chooses the list of people who will receive the mail merge document.",
          when: "Use it when one document must be personalized for many recipients.",
          steps: [
            "Start a Mail Merge.",
            "Go to Mailings.",
            "Click Select Recipients.",
            "Choose an existing list or type a new list.",
            "Select the required data source."
          ]
        },
        hi: {
          what: "Mail Merge document पाने वाले recipients की list select करता है।",
          when: "जब एक document को कई लोगों के लिए personalize करना हो तब उपयोग करें।",
          steps: [
            "Mail Merge शुरू करें।",
            "Mailings tab खोलें।",
            "Select Recipients पर click करें।",
            "Existing list या new list चुनें।",
            "Required data source select करें।"
          ]
        }
      },

      {
        name: "Edit Recipient List",
        icon: "📝",
        en: {
          what: "Allows you to review, filter, sort or modify recipients.",
          when: "Use it when some recipients should be removed or filtered.",
          steps: [
            "Open a Mail Merge.",
            "Go to Mailings.",
            "Click Edit Recipient List.",
            "Review the records.",
            "Sort, filter or uncheck recipients.",
            "Click OK."
          ]
        },
        hi: {
          what: "Recipients की list को review, filter, sort या modify करने देता है।",
          when: "जब कुछ recipients को हटाना या filter करना हो तब उपयोग करें।",
          steps: [
            "Mail Merge खोलें।",
            "Mailings में जाएँ।",
            "Edit Recipient List पर click करें।",
            "Records review करें।",
            "Sort, filter या recipients uncheck करें।",
            "OK करें।"
          ]
        }
      },

      {
        name: "Highlight Merge Fields",
        icon: "✨",
        en: {
          what: "Highlights fields that will receive personalized information.",
          when: "Use it to easily identify merge fields while editing a mail merge document.",
          steps: [
            "Open the Mail Merge document.",
            "Go to Mailings.",
            "Click Highlight Merge Fields.",
            "Merge fields become visually highlighted."
          ]
        },
        hi: {
          what: "Personalized information पाने वाले merge fields को highlight करता है।",
          when: "Mail Merge edit करते समय fields पहचानने के लिए उपयोग करें।",
          steps: [
            "Mail Merge document खोलें।",
            "Mailings tab खोलें।",
            "Highlight Merge Fields पर click करें।",
            "Merge fields highlight दिखाई देंगे।"
          ]
        }
      },

      {
        name: "Address Block",
        icon: "🏠",
        en: {
          what: "Inserts recipient address information as a formatted block.",
          when: "Use it when creating letters or envelopes for multiple recipients.",
          steps: [
            "Place the cursor where the address should appear.",
            "Go to Mailings.",
            "Click Address Block.",
            "Choose the address format.",
            "Preview the result.",
            "Click OK."
          ]
        },
        hi: {
          what: "Recipient address को formatted block के रूप में insert करता है।",
          when: "Multiple recipients के letters या envelopes बनाने के लिए उपयोग करें।",
          steps: [
            "जहाँ address चाहिए वहाँ cursor रखें।",
            "Mailings खोलें।",
            "Address Block पर click करें।",
            "Address format चुनें।",
            "Preview देखें।",
            "OK करें।"
          ]
        }
      },

      {
        name: "Greeting Line",
        icon: "👋",
        en: {
          what: "Adds a personalized greeting such as Dear Sir or Dear Customer.",
          when: "Use it for personalized letters and messages.",
          steps: [
            "Place the cursor where the greeting should appear.",
            "Go to Mailings.",
            "Click Greeting Line.",
            "Choose the greeting format.",
            "Preview it.",
            "Click OK."
          ]
        },
        hi: {
          what: "Dear Sir, Dear Customer आदि personalized greeting जोड़ता है।",
          when: "Personalized letters और messages में उपयोग करें।",
          steps: [
            "जहाँ greeting चाहिए वहाँ cursor रखें।",
            "Mailings खोलें।",
            "Greeting Line पर click करें।",
            "Greeting format चुनें।",
            "Preview देखें।",
            "OK करें।"
          ]
        }
      },

      {
        name: "Insert Merge Field",
        icon: "🔗",
        en: {
          what: "Inserts a specific field from the recipient data.",
          when: "Use it when you want to place names, addresses, marks or other data exactly where required.",
          steps: [
            "Place the cursor at the required location.",
            "Go to Mailings.",
            "Click Insert Merge Field.",
            "Choose the required field such as Name or City.",
            "The field appears in the document."
          ]
        },
        hi: {
          what: "Recipient data से specific field insert करता है।",
          when: "Name, address, marks या अन्य data को exact location पर लगाना हो तब उपयोग करें।",
          steps: [
            "Required location पर cursor रखें।",
            "Mailings खोलें।",
            "Insert Merge Field पर click करें।",
            "Name या City जैसा field चुनें।",
            "Field document में दिखाई देगा।"
          ]
        }
      },

      {
        name: "Rules",
        icon: "⚙️",
        en: {
          what: "Adds conditions and logic to a Mail Merge.",
          when: "Use Rules when different recipients should receive different content.",
          steps: [
            "Create a Mail Merge.",
            "Place the cursor where conditional text is needed.",
            "Go to Mailings.",
            "Click Rules.",
            "Choose a rule such as If...Then...Else.",
            "Set the condition and values.",
            "Confirm the rule."
          ]
        },
        hi: {
          what: "Mail Merge में conditions और logic जोड़ता है।",
          when: "जब अलग recipients को अलग content देना हो तब Rules उपयोग करें।",
          steps: [
            "Mail Merge तैयार करें।",
            "जहाँ conditional text चाहिए वहाँ cursor रखें।",
            "Mailings खोलें।",
            "Rules पर click करें।",
            "If...Then...Else जैसी rule चुनें।",
            "Condition और values set करें।",
            "Rule confirm करें।"
          ]
        }
      },

      {
        name: "Match Fields",
        icon: "🔄",
        en: {
          what: "Matches Word fields with the fields in your recipient data source.",
          when: "Use it when your Excel or other data source uses different field names.",
          steps: [
            "Open the Mail Merge.",
            "Go to Mailings.",
            "Click Match Fields.",
            "Match Word fields with the correct data fields.",
            "Click OK."
          ]
        },
        hi: {
          what: "Word fields को recipient data source के fields से match करता है।",
          when: "जब Excel या दूसरे data source में field names अलग हों तब उपयोग करें।",
          steps: [
            "Mail Merge खोलें।",
            "Mailings tab खोलें।",
            "Match Fields पर click करें।",
            "Word fields को correct data fields से match करें।",
            "OK करें।"
          ]
        }
      },

      {
        name: "Update Labels",
        icon: "🔄",
        en: {
          what: "Copies the first label's layout and fields to the remaining labels.",
          when: "Use it when creating multiple labels using Mail Merge.",
          steps: [
            "Create a label Mail Merge.",
            "Design the first label.",
            "Go to Mailings.",
            "Click Update Labels.",
            "Word copies the layout to the remaining labels."
          ]
        },
        hi: {
          what: "पहले label की layout और fields को बाकी labels में copy करता है।",
          when: "Multiple labels बनाने के लिए Mail Merge उपयोग करते समय इसका उपयोग करें।",
          steps: [
            "Label Mail Merge बनाएं।",
            "First label design करें।",
            "Mailings खोलें।",
            "Update Labels पर click करें।",
            "Word layout को बाकी labels में copy करेगा।"
          ]
        }
      },

      {
        name: "Preview Results",
        icon: "👁️",
        en: {
          what: "Shows what the merged documents will look like with real recipient data.",
          when: "Always use Preview Results before finishing a Mail Merge.",
          steps: [
            "Complete the merge fields.",
            "Go to Mailings.",
            "Click Preview Results.",
            "Use the navigation arrows to check recipients.",
            "Correct any errors before finishing."
          ]
        },
        hi: {
          what: "Real recipient data के साथ final merged document का preview दिखाता है।",
          when: "Mail Merge finish करने से पहले हमेशा Preview Results देखें।",
          steps: [
            "Merge fields complete करें।",
            "Mailings खोलें।",
            "Preview Results पर click करें।",
            "Navigation arrows से recipients check करें।",
            "Finish करने से पहले errors correct करें।"
          ]
        }
      },

      {
        name: "Find Recipient",
        icon: "🔎",
        en: {
          what: "Finds a particular recipient in the Mail Merge list.",
          when: "Use it when you need to check one specific recipient.",
          steps: [
            "Open the Mail Merge.",
            "Go to Mailings.",
            "Click Find Recipient.",
            "Search for the required name or value.",
            "Check the displayed record."
          ]
        },
        hi: {
          what: "Mail Merge list में specific recipient खोजता है।",
          when: "किसी एक recipient को check करना हो तब उपयोग करें।",
          steps: [
            "Mail Merge खोलें।",
            "Mailings tab खोलें।",
            "Find Recipient पर click करें।",
            "Name या value search करें।",
            "Record check करें।"
          ]
        }
      },

      {
        name: "Check for Errors",
        icon: "⚠️",
        en: {
          what: "Checks the Mail Merge for possible problems before finishing.",
          when: "Use it before printing or sending the merged documents.",
          steps: [
            "Complete your Mail Merge.",
            "Go to Mailings.",
            "Click Check for Errors.",
            "Choose the checking option.",
            "Review any errors and correct them."
          ]
        },
        hi: {
          what: "Mail Merge finish करने से पहले possible errors check करता है।",
          when: "Printing या sending से पहले उपयोग करें।",
          steps: [
            "Mail Merge complete करें।",
            "Mailings खोलें।",
            "Check for Errors पर click करें।",
            "Checking option चुनें।",
            "Errors review करके correct करें।"
          ]
        }
      },

      {
        name: "Finish & Merge",
        icon: "✅",
        en: {
          what: "Completes the Mail Merge and lets you print, edit or send the results.",
          when: "Use it after checking the preview and errors.",
          steps: [
            "Preview the results.",
            "Check for errors.",
            "Go to Mailings.",
            "Click Finish & Merge.",
            "Choose Edit Individual Documents, Print Documents or another option.",
            "Complete the final action."
          ]
        },
        hi: {
          what: "Mail Merge को complete करके final documents print, edit या send करने देता है।",
          when: "Preview और errors check करने के बाद उपयोग करें।",
          steps: [
            "Results preview करें।",
            "Errors check करें।",
            "Mailings खोलें।",
            "Finish & Merge पर click करें।",
            "Edit Individual Documents, Print Documents आदि चुनें।",
            "Final action complete करें।"
          ]
        }
      }

    ]
  },


  Review: {
    image: "Review.png",
    icon: "📝",
    tools: [

      {
        name: "Spelling & Grammar",
        icon: "ABC",
        en: {
          what: "Checks the document for spelling and grammar mistakes.",
          when: "Use it before submitting, printing or sharing a document.",
          steps: [
            "Open the Review tab.",
            "Click Spelling & Grammar.",
            "Word checks the document.",
            "Review each suggestion.",
            "Choose Change, Ignore or another option."
          ]
        },
        hi: {
          what: "Document में spelling और grammar mistakes check करता है।",
          when: "Document submit, print या share करने से पहले उपयोग करें।",
          steps: [
            "Review tab खोलें।",
            "Spelling & Grammar पर click करें।",
            "Word document check करेगा।",
            "हर suggestion review करें।",
            "Change, Ignore या अन्य option चुनें।"
          ]
        }
      },

      {
        name: "Thesaurus",
        icon: "📖",
        en: {
          what: "Shows synonyms and related words for selected text.",
          when: "Use it when you want better or alternative words.",
          steps: [
            "Select a word.",
            "Go to Review.",
            "Click Thesaurus.",
            "Review the suggested words.",
            "Choose the appropriate synonym."
          ]
        },
        hi: {
          what: "Selected word के synonyms और related words दिखाता है।",
          when: "Better या alternative words खोजने के लिए उपयोग करें।",
          steps: [
            "एक word select करें।",
            "Review tab खोलें।",
            "Thesaurus पर click करें।",
            "Suggested words देखें।",
            "Suitable synonym चुनें।"
          ]
        }
      },

      {
        name: "Word Count",
        icon: "123",
        en: {
          what: "Shows the number of words, characters, paragraphs and pages.",
          when: "Use it when a document must meet a specific word or page limit.",
          steps: [
            "Go to Review.",
            "Click Word Count.",
            "Check words, characters, paragraphs and pages.",
            "Close the information window."
          ]
        },
        hi: {
          what: "Words, characters, paragraphs और pages की संख्या दिखाता है।",
          when: "जब assignment या document की word/page limit हो तब उपयोग करें।",
          steps: [
            "Review tab खोलें।",
            "Word Count पर click करें।",
            "Words, characters, paragraphs और pages देखें।",
            "Information window बंद करें।"
          ]
        }
      },

      {
        name: "Read Aloud",
        icon: "🔊",
        en: {
          what: "Reads the document aloud using text-to-speech.",
          when: "Use it to listen for mistakes or improve reading and accessibility.",
          steps: [
            "Open the Review tab.",
            "Click Read Aloud.",
            "Word starts reading the document.",
            "Use the controls to pause, play or change reading speed."
          ]
        },
        hi: {
          what: "Document को आवाज में पढ़कर सुनाता है।",
          when: "Mistakes सुनकर check करने या accessibility के लिए उपयोग करें।",
          steps: [
            "Review tab खोलें।",
            "Read Aloud पर click करें।",
            "Word document पढ़ना शुरू करेगा।",
            "Pause, play या speed controls का उपयोग करें।"
          ]
        }
      },

      {
        name: "Check Accessibility",
        icon: "♿",
        en: {
          what: "Checks whether the document can be easily used by people with disabilities.",
          when: "Use it before sharing an important document with a wide audience.",
          steps: [
            "Go to Review.",
            "Click Check Accessibility.",
            "Review the Accessibility Checker results.",
            "Fix the suggested problems.",
            "Run the checker again if required."
          ]
        },
        hi: {
          what: "Check करता है कि document disabilities वाले users के लिए accessible है या नहीं।",
          when: "Important document share करने से पहले उपयोग करें।",
          steps: [
            "Review tab खोलें।",
            "Check Accessibility पर click करें।",
            "Accessibility Checker results देखें।",
            "Suggested problems fix करें।",
            "जरूरत हो तो checker फिर चलाएँ।"
          ]
        }
      },

      {
        name: "Translate",
        icon: "🌐",
        en: {
          what: "Translates selected text or the document into another language.",
          when: "Use it when working with multilingual documents.",
          steps: [
            "Select the text.",
            "Go to Review.",
            "Click Translate.",
            "Choose Translate Selection or Translate Document.",
            "Choose the target language.",
            "Review the translation."
          ]
        },
        hi: {
          what: "Selected text या पूरे document को दूसरी language में translate करता है।",
          when: "Multilingual documents के लिए उपयोग करें।",
          steps: [
            "Text select करें।",
            "Review tab खोलें।",
            "Translate पर click करें।",
            "Translate Selection या Translate Document चुनें।",
            "Target language चुनें।",
            "Translation review करें।"
          ]
        }
      },

      {
        name: "Language",
        icon: "A文",
        en: {
          what: "Sets the proofing or language settings for selected text.",
          when: "Use it when writing in different languages or checking spelling in a specific language.",
          steps: [
            "Select the text.",
            "Go to Review.",
            "Click Language.",
            "Choose Set Proofing Language.",
            "Select the required language.",
            "Click OK."
          ]
        },
        hi: {
          what: "Selected text की proofing language set करता है।",
          when: "Different languages में लिखते समय उपयोग करें।",
          steps: [
            "Text select करें।",
            "Review tab खोलें।",
            "Language पर click करें।",
            "Set Proofing Language चुनें।",
            "Required language चुनें।",
            "OK करें।"
          ]
        }
      },

      {
        name: "New Comment",
        icon: "💬",
        en: {
          what: "Adds a new comment to the document.",
          when: "Use comments to give feedback or ask questions during document review.",
          steps: [
            "Select the relevant text.",
            "Go to Review.",
            "Click New Comment.",
            "Type the comment.",
            "Post the comment."
          ]
        },
        hi: {
          what: "Document में नया comment जोड़ता है।",
          when: "Document review में feedback या questions देने के लिए उपयोग करें।",
          steps: [
            "Relevant text select करें।",
            "Review खोलें।",
            "New Comment पर click करें।",
            "Comment लिखें।",
            "Comment post करें।"
          ]
        }
      },

      {
        name: "Delete Comment",
        icon: "🗑️",
        en: {
          what: "Removes a comment from the document.",
          when: "Use it after a comment has been resolved or is no longer required.",
          steps: [
            "Select the comment.",
            "Go to Review.",
            "Click Delete.",
            "Choose Delete Comment if required."
          ]
        },
        hi: {
          what: "Document से comment हटाता है।",
          when: "Comment resolve हो जाने या required न होने पर उपयोग करें।",
          steps: [
            "Comment select करें।",
            "Review खोलें।",
            "Delete पर click करें।",
            "Delete Comment चुनें।"
          ]
        }
      },

      {
        name: "Track Changes",
        icon: "🔎",
        en: {
          what: "Records changes made to the document.",
          when: "Use it when multiple people are editing or reviewing a document.",
          steps: [
            "Go to Review.",
            "Click Track Changes.",
            "Make edits in the document.",
            "Word records insertions, deletions and formatting changes.",
            "Use Accept or Reject to manage the changes."
          ]
        },
        hi: {
          what: "Document में किए गए changes को record करता है।",
          when: "जब कई लोग document edit या review कर रहे हों तब उपयोग करें।",
          steps: [
            "Review tab खोलें।",
            "Track Changes पर click करें।",
            "Document में edits करें।",
            "Word changes record करेगा।",
            "Accept या Reject से changes manage करें।"
          ]
        }
      },

      {
        name: "Accept",
        icon: "✅",
        en: {
          what: "Accepts a tracked change and makes it part of the document.",
          when: "Use it when you agree with a suggested change.",
          steps: [
            "Select a tracked change.",
            "Go to Review.",
            "Click Accept.",
            "Choose Accept This Change or another option."
          ]
        },
        hi: {
          what: "Tracked change को accept करके document का permanent part बनाता है।",
          when: "जब आप suggested change से agree करते हों तब उपयोग करें।",
          steps: [
            "Tracked change select करें।",
            "Review खोलें।",
            "Accept पर click करें।",
            "Accept This Change या अन्य option चुनें।"
          ]
        }
      },

      {
        name: "Reject",
        icon: "❌",
        en: {
          what: "Rejects a tracked change.",
          when: "Use it when you do not want a suggested change.",
          steps: [
            "Select the tracked change.",
            "Go to Review.",
            "Click Reject.",
            "Choose Reject This Change or another option."
          ]
        },
        hi: {
          what: "Tracked change को reject करता है।",
          when: "जब suggested change नहीं रखना हो तब उपयोग करें।",
          steps: [
            "Tracked change select करें।",
            "Review खोलें।",
            "Reject पर click करें।",
            "Reject This Change या अन्य option चुनें।"
          ]
        }
      },

      {
        name: "Compare",
        icon: "⚖️",
        en: {
          what: "Compares two versions of a document and shows their differences.",
          when: "Use it when you need to identify changes between two documents.",
          steps: [
            "Go to Review.",
            "Click Compare.",
            "Choose Compare.",
            "Select the original document.",
            "Select the revised document.",
            "Click OK."
          ]
        },
        hi: {
          what: "दो document versions की तुलना करके differences दिखाता है।",
          when: "दो documents के बीच changes पहचानने के लिए उपयोग करें।",
          steps: [
            "Review tab खोलें।",
            "Compare पर click करें।",
            "Compare चुनें।",
            "Original document select करें।",
            "Revised document select करें।",
            "OK करें।"
          ]
        }
      },

      {
        name: "Protect Document",
        icon: "🔒",
        en: {
          what: "Restricts editing or protects parts of a document.",
          when: "Use it when a document should not be freely edited by everyone.",
          steps: [
            "Go to Review.",
            "Click Protect.",
            "Choose the protection option.",
            "Set restrictions or a password if required.",
            "Confirm the protection."
          ]
        },
        hi: {
          what: "Document को editing से protect या restrict करता है।",
          when: "जब हर व्यक्ति को document freely edit नहीं करना हो तब उपयोग करें।",
          steps: [
            "Review tab खोलें।",
            "Protect पर click करें।",
            "Protection option चुनें।",
            "जरूरत हो तो restrictions या password set करें।",
            "Protection confirm करें।"
          ]
        }
      }

    ]
  },


  View: {
    image: "View.png",
    icon: "👁️",
    tools: [

      {
        name: "Read Mode",
        icon: "📖",
        en: {
          what: "Displays the document in a reading-friendly view.",
          when: "Use it when you want to focus on reading instead of editing.",
          steps: [
            "Go to View.",
            "Click Read Mode.",
            "The document changes to a reading layout.",
            "Use the navigation controls to move through pages."
          ]
        },
        hi: {
          what: "Document को reading-friendly view में दिखाता है।",
          when: "जब editing के बजाय document पढ़ना हो तब उपयोग करें।",
          steps: [
            "View tab खोलें।",
            "Read Mode पर click करें।",
            "Document reading layout में बदल जाएगा।",
            "Navigation controls से pages पढ़ें।"
          ]
        }
      },

      {
        name: "Print Layout",
        icon: "🖨️",
        en: {
          what: "Shows the document as it will appear when printed.",
          when: "Use it when checking page layout before printing.",
          steps: [
            "Go to View.",
            "Click Print Layout.",
            "Review margins, page breaks, headers, footers and objects.",
            "Make changes if required."
          ]
        },
        hi: {
          what: "Document को वैसे दिखाता है जैसे वह print होने पर दिखाई देगा।",
          when: "Printing से पहले page layout check करने के लिए उपयोग करें।",
          steps: [
            "View tab खोलें।",
            "Print Layout पर click करें।",
            "Margins, page breaks, headers, footers और objects check करें।",
            "जरूरत हो तो changes करें।"
          ]
        }
      },

      {
        name: "Web Layout",
        icon: "🌐",
        en: {
          what: "Displays the document in a web-page style layout.",
          when: "Use it when designing or previewing content intended for web use.",
          steps: [
            "Go to View.",
            "Click Web Layout.",
            "The document changes to a web-style view."
          ]
        },
        hi: {
          what: "Document को web-page style layout में दिखाता है।",
          when: "Web content design या preview करने के लिए उपयोग करें।",
          steps: [
            "View tab खोलें।",
            "Web Layout पर click करें।",
            "Document web-style view में बदल जाएगा।"
          ]
        }
      },

      {
        name: "Outline",
        icon: "☷",
        en: {
          what: "Shows the document structure using headings and levels.",
          when: "Use Outline view to organize long documents.",
          steps: [
            "Apply heading styles to the document.",
            "Go to View.",
            "Click Outline.",
            "Use heading levels to organize sections.",
            "Move sections if required."
          ]
        },
        hi: {
          what: "Headings और levels की मदद से document structure दिखाता है।",
          when: "Long documents organize करने के लिए उपयोग करें।",
          steps: [
            "Document में heading styles apply करें।",
            "View tab खोलें।",
            "Outline पर click करें।",
            "Heading levels से sections organize करें।",
            "जरूरत हो तो sections move करें।"
          ]
        }
      },

      {
        name: "Focus",
        icon: "🎯",
        en: {
          what: "Provides a distraction-free workspace.",
          when: "Use Focus when you want to concentrate on writing or reading.",
          steps: [
            "Go to View.",
            "Click Focus.",
            "Word hides unnecessary interface elements.",
            "Work without distractions.",
            "Exit Focus when finished."
          ]
        },
        hi: {
          what: "Distraction-free workspace देता है।",
          when: "Writing या reading पर पूरा ध्यान लगाने के लिए उपयोग करें।",
          steps: [
            "View tab खोलें।",
            "Focus पर click करें।",
            "Unnecessary interface elements hide हो जाएँगे।",
            "Distraction के बिना काम करें।",
            "काम पूरा होने पर Focus से बाहर आएँ।"
          ]
        }
      },

      {
        name: "Ruler",
        icon: "📏",
        en: {
          what: "Shows the ruler used to set margins, indents and tab stops.",
          when: "Use it when precise positioning or indentation is required.",
          steps: [
            "Go to View.",
            "Find the Show group.",
            "Turn on Ruler.",
            "Use the ruler markers to adjust indentation or tab stops."
          ]
        },
        hi: {
          what: "Margins, indents और tab stops set करने वाली ruler दिखाता है।",
          when: "Precise positioning या indentation के लिए उपयोग करें।",
          steps: [
            "View tab खोलें।",
            "Show group खोजें।",
            "Ruler को enable करें।",
            "Ruler markers से indentation या tab stops adjust करें।"
          ]
        }
      },

      {
        name: "Gridlines",
        icon: "▦",
        en: {
          what: "Displays a grid that helps align objects.",
          when: "Use gridlines when arranging shapes, pictures and other objects.",
          steps: [
            "Go to View.",
            "Find the Show group.",
            "Turn on Gridlines.",
            "Use the grid to align objects."
          ]
        },
        hi: {
          what: "Objects align करने में मदद करने वाली grid दिखाता है।",
          when: "Shapes, pictures और objects arrange करते समय उपयोग करें।",
          steps: [
            "View tab खोलें।",
            "Show group खोजें।",
            "Gridlines enable करें।",
            "Grid की मदद से objects align करें।"
          ]
        }
      },

      {
        name: "Navigation Pane",
        icon: "🧭",
        en: {
          what: "Provides a panel for searching and navigating through headings and pages.",
          when: "Use it for quickly finding information in long documents.",
          steps: [
            "Go to View.",
            "Turn on Navigation Pane.",
            "Search for text or choose a heading.",
            "Click a result to jump to that location."
          ]
        },
        hi: {
          what: "Long document में search और navigation के लिए panel देता है।",
          when: "Long documents में information जल्दी खोजने के लिए उपयोग करें।",
          steps: [
            "View tab खोलें।",
            "Navigation Pane enable करें।",
            "Text search करें या heading चुनें।",
            "Result पर click करके उस location पर जाएँ।"
          ]
        }
      },

      {
        name: "Zoom",
        icon: "🔍",
        en: {
          what: "Changes how large or small the document appears on screen.",
          when: "Use Zoom when text or page elements are too small or too large to view comfortably.",
          steps: [
            "Go to View.",
            "Click Zoom.",
            "Choose a zoom percentage.",
            "Click OK.",
            "You can also use the zoom slider at the bottom of Word."
          ]
        },
        hi: {
          what: "Screen पर document को बड़ा या छोटा दिखाता है।",
          when: "जब text या page बहुत छोटा या बड़ा दिखाई दे तब Zoom उपयोग करें।",
          steps: [
            "View tab खोलें।",
            "Zoom पर click करें।",
            "Zoom percentage चुनें।",
            "OK करें।",
            "नीचे दिए zoom slider से भी zoom कर सकते हैं।"
          ]
        }
      },

      {
        name: "One Page",
        icon: "📄",
        en: {
          what: "Fits one complete page on the screen.",
          when: "Use it when you want to see the overall layout of one page.",
          steps: [
            "Go to View.",
            "Open the Zoom group.",
            "Click One Page.",
            "The full page fits on the screen."
          ]
        },
        hi: {
          what: "एक पूरा page screen पर fit करके दिखाता है।",
          when: "एक page का overall layout देखने के लिए उपयोग करें।",
          steps: [
            "View tab खोलें।",
            "Zoom group में जाएँ।",
            "One Page पर click करें।",
            "पूरा page screen पर fit हो जाएगा।"
          ]
        }
      },

      {
        name: "Multiple Pages",
        icon: "📑",
        en: {
          what: "Displays multiple pages together.",
          when: "Use it when reviewing the overall layout of several pages.",
          steps: [
            "Go to View.",
            "Click Multiple Pages.",
            "Choose the required zoom level if needed.",
            "Several pages appear together."
          ]
        },
        hi: {
          what: "एक साथ कई pages दिखाता है।",
          when: "कई pages का overall layout review करने के लिए उपयोग करें।",
          steps: [
            "View tab खोलें।",
            "Multiple Pages पर click करें।",
            "जरूरत के अनुसार zoom level चुनें।",
            "कई pages एक साथ दिखाई देंगे।"
          ]
        }
      },

      {
        name: "New Window",
        icon: "🪟",
        en: {
          what: "Opens another window for the same document.",
          when: "Use it when you want to view or work with different parts of the same document.",
          steps: [
            "Go to View.",
            "Click New Window.",
            "A second window of the document opens.",
            "Use the windows as required."
          ]
        },
        hi: {
          what: "उसी document की दूसरी window खोलता है।",
          when: "Document के अलग parts को एक साथ देखने या काम करने के लिए उपयोग करें।",
          steps: [
            "View tab खोलें।",
            "New Window पर click करें।",
            "Document की दूसरी window खुलेगी।",
            "दोनों windows का जरूरत के अनुसार उपयोग करें।"
          ]
        }
      },

      {
        name: "Arrange All",
        icon: "▦",
        en: {
          what: "Arranges multiple open document windows on the screen.",
          when: "Use it when working with multiple documents at the same time.",
          steps: [
            "Open multiple Word documents.",
            "Go to View.",
            "Click Arrange All.",
            "Word arranges the open windows on the screen."
          ]
        },
        hi: {
          what: "कई open document windows को screen पर arrange करता है।",
          when: "एक साथ कई documents पर काम करते समय उपयोग करें।",
          steps: [
            "Multiple Word documents खोलें।",
            "View tab खोलें।",
            "Arrange All पर click करें।",
            "Word windows को screen पर arrange करेगा।"
          ]
        }
      },

      {
        name: "Split",
        icon: "↕️",
        en: {
          what: "Splits the document window into two sections.",
          when: "Use it when comparing or viewing two different parts of the same document.",
          steps: [
            "Go to View.",
            "Click Split.",
            "Choose the location of the split.",
            "Scroll each section independently."
          ]
        },
        hi: {
          what: "Document window को दो sections में divide करता है।",
          when: "एक ही document के दो अलग parts compare या view करने के लिए उपयोग करें।",
          steps: [
            "View tab खोलें।",
            "Split पर click करें।",
            "Split location चुनें।",
            "दोनों sections को अलग-अलग scroll करें।"
          ]
        }
      },

      {
        name: "Macros",
        icon: "⚙️",
        en: {
          what: "Allows repetitive actions to be recorded and run automatically.",
          when: "Use Macros when the same series of actions must be performed repeatedly.",
          steps: [
            "Go to View.",
            "Click Macros.",
            "Choose View Macros or Record Macro.",
            "Give the macro a name.",
            "Perform the actions to record.",
            "Stop recording.",
            "Run the macro when required."
          ]
        },
        hi: {
          what: "Repeated actions को record करके automatically run करने देता है।",
          when: "जब वही actions बार-बार करने हों तब Macros उपयोग करें।",
          steps: [
            "View tab खोलें।",
            "Macros पर click करें।",
            "View Macros या Record Macro चुनें।",
            "Macro का name दें।",
            "Record करने वाले actions करें।",
            "Recording stop करें।",
            "जरूरत पड़ने पर macro run करें।"
          ]
        }
      }

    ]
  },


  Design: {
    image: "Page Layout(1).png",
    icon: "🎨",
    tools: [

      {
        name: "Document Formatting",
        icon: "🎨",
        en: {
          what: "Provides document-wide formatting options such as themes, colors, fonts and effects.",
          when: "Use Design when you want to change the overall appearance of the document.",
          steps: [
            "Open the Design tab.",
            "Choose a Theme.",
            "Adjust Colors if required.",
            "Choose Fonts.",
            "Apply Effects.",
            "Review the entire document."
          ]
        },
        hi: {
          what: "पूरे document की formatting जैसे themes, colors, fonts और effects control करता है।",
          when: "पूरे document का overall appearance बदलने के लिए Design tab उपयोग करें।",
          steps: [
            "Design tab खोलें।",
            "Theme चुनें।",
            "जरूरत हो तो Colors बदलें।",
            "Fonts चुनें।",
            "Effects apply करें।",
            "पूरे document का result check करें।"
          ]
        }
      },

      {
        name: "Watermark",
        icon: "💧",
        en: {
          what: "Places a faint text or picture behind document content.",
          when: "Use it for DRAFT, CONFIDENTIAL, SAMPLE or branding.",
          steps: [
            "Open Design.",
            "Click Watermark.",
            "Choose a built-in watermark.",
            "For a custom watermark select Custom Watermark.",
            "Choose Text or Picture watermark.",
            "Enter text or select a picture.",
            "Click Apply or OK."
          ]
        },
        hi: {
          what: "Document content के पीछे हल्का text या picture लगाता है।",
          when: "DRAFT, CONFIDENTIAL, SAMPLE या branding के लिए उपयोग करें।",
          steps: [
            "Design tab खोलें।",
            "Watermark पर click करें।",
            "Built-in watermark चुनें।",
            "Custom के लिए Custom Watermark चुनें।",
            "Text या Picture watermark चुनें।",
            "Text लिखें या picture चुनें।",
            "Apply या OK करें।"
          ]
        }
      },

      {
        name: "Page Color",
        icon: "🟨",
        en: {
          what: "Changes the background color of pages.",
          when: "Use it for creative documents, certificates and invitations.",
          steps: [
            "Go to Design.",
            "Click Page Color.",
            "Choose the required color.",
            "The page background changes."
          ]
        },
        hi: {
          what: "Page का background color बदलता है।",
          when: "Creative documents, certificates और invitations के लिए उपयोग करें।",
          steps: [
            "Design tab खोलें।",
            "Page Color पर click करें।",
            "Required color चुनें।",
            "Page background बदल जाएगा।"
          ]
        }
      },

      {
        name: "Page Borders",
        icon: "▣",
        en: {
          what: "Adds decorative or simple borders around the page.",
          when: "Use it for certificates, assignments and decorative documents.",
          steps: [
            "Go to Design.",
            "Click Page Borders.",
            "Choose Box, Shadow, 3-D or Custom.",
            "Choose style, color and width.",
            "Click OK."
          ]
        },
        hi: {
          what: "Page के चारों तरफ decorative या simple border लगाता है।",
          when: "Certificates, assignments और decorative documents में उपयोग करें।",
          steps: [
            "Design tab खोलें।",
            "Page Borders पर click करें।",
            "Box, Shadow, 3-D या Custom चुनें।",
            "Style, color और width चुनें।",
            "OK करें।"
          ]
        }
      }

    ]
  }

};


/* ============================================================
   TAB ICONS
   ============================================================ */

function tabIcon(tab) {

  return wordTabs[tab]?.icon || "📘";

}


/* ============================================================
   HOME PAGE
   ============================================================ */

function showHome() {

  const app = document.getElementById("app");

  if (!app) return;

  app.innerHTML = `

    <div class="learning-header">

      <div>

        <h1>
          Welcome back! 👋
        </h1>

        <h1>
          <span style="
            background:linear-gradient(90deg,#2563eb,#7c3aed,#db2777);
            -webkit-background-clip:text;
            background-clip:text;
            color:transparent;
          ">
            Computer Learning
          </span>
        </h1>

        <p>
          Learn step-by-step, practice every tool,
          and complete practical projects. 🎓
        </p>

      </div>

      <div style="
        display:flex;
        gap:8px;
        align-items:center;
        flex-wrap:wrap;
      ">

        <button
          class="language-switch"
          onclick="changeLearningLanguage('hi')">
          🇮🇳 हिन्दी
        </button>

        <button
          class="language-switch"
          onclick="changeLearningLanguage('en')">
          🌐 English
        </button>

      </div>

    </div>


    <div class="course-grid">

      <div class="course-card">

        <div class="course-icon">💻</div>

        <h2>MS Word</h2>

        <p>
          Learn every important MS Word tab
          step-by-step with examples.
        </p>

        <p>
          <strong>14 Projects</strong>
        </p>

        <button
          class="primary-button"
          onclick="openWord()">
          Start Course →
        </button>

      </div>


      <div class="course-card">

        <div class="course-icon">📊</div>

        <h2>MS Excel</h2>

        <p>
          Learn spreadsheets, formulas,
          formatting and practical work.
        </p>

        <p>
          <strong>3 Projects</strong>
        </p>

        <button
          class="primary-button"
          onclick="showExcelMessage()">
          Start Course →
        </button>

      </div>


      <div class="course-card">

        <div class="course-icon">📽️</div>

        <h2>MS PowerPoint</h2>

        <p>
          Create presentations using text,
          pictures, shapes and designs.
        </p>

        <button
          class="primary-button"
          onclick="showPowerPointMessage()">
          Start Course →
        </button>

      </div>

    </div>

  `;

}


/* ============================================================
   LANGUAGE SWITCH
   ============================================================ */

function changeLearningLanguage(language) {

  currentLanguage = language;

  if (currentWordTab) {

    if (
      document.querySelector(".word-learning-card")
    ) {

      showWordTab(currentWordTab);

    } else {

      showHome();

    }

  } else {

    showHome();

  }

}


/* ============================================================
   OPEN MS WORD
   ============================================================ */

function openWord() {

  currentWordTab = "Home";

  showWordLearning();

}


/* ============================================================
   MS WORD LEARNING PAGE
   ============================================================ */

function showWordLearning() {

  const app = document.getElementById("app");

  if (!app) return;

  const tabs = Object.keys(wordTabs);

  app.innerHTML = `

    <div class="page-top">

      <button
        class="back-button"
        onclick="showHome()">
        ← Back to Home
      </button>

      <div style="
        display:flex;
        gap:8px;
        align-items:center;
      ">

        <button
          class="language-switch"
          onclick="changeLearningLanguage('hi')">
          🇮🇳 हिन्दी
        </button>

        <button
          class="language-switch"
          onclick="changeLearningLanguage('en')">
          🌐 English
        </button>

      </div>

    </div>


    <div class="word-learning-card">

      <div class="learning-header"
           style="margin-bottom:20px;">

        <div>

          <h1>
            💻 MS Word Learning
          </h1>

          <p>
            Learn every important MS Word tab
            step-by-step.
          </p>

        </div>

      </div>


      <div class="word-tab-grid">

        ${tabs.map(tab => `

          <button
            class="word-tab-card"
            onclick="showWordTab('${tab}')">

            <span>
              ${tabIcon(tab)}
            </span>

            <span>
              ${tab}
            </span>

          </button>

        `).join("")}

      </div>

    </div>


    <div id="wordTabContent"></div>


    <div class="word-project-section">

      <h2>
        🎯 Practical Projects
      </h2>

      <p>
        Complete all 14 MS Word projects
        after learning the tools.
      </p>

      <div class="project-grid">

        ${projects.map(project => `

          <div class="project-card">

            <h3>
              ${project.title}
            </h3>

            <p>
              <strong>${project.topic}</strong>
            </p>

            <p class="small-text">
              ${project.description}
            </p>

            <img
              src="${project.image}"
              class="project-preview"
              alt="${project.title}"
              onclick="openImage('${project.image}')">

            <button
              class="primary-button"
              onclick="showProject(${project.id})">
              Open Project →
            </button>

          </div>

        `).join("")}

      </div>

    </div>

  `;

  showWordTab(currentWordTab);

}


/* ============================================================
   SHOW WORD TAB
   ============================================================ */

function showWordTab(tab) {

  currentWordTab = tab;

  const container =
    document.getElementById("wordTabContent");

  if (!container) {

    showWordLearning();

    return;

  }

  const data = wordTabs[tab];

  if (!data) return;

  const lang =
    currentLanguage === "hi"
      ? "hi"
      : "en";


  container.innerHTML = `

    <div class="tab-learning-header">

      <div>

        <div style="
          font-size:34px;
          margin-bottom:5px;
        ">
          ${data.icon}
        </div>

        <h1>
          ${tab} Tab
        </h1>

        <p>
          ${lang === "en"
            ? "Learn the tools of the " + tab + " tab step-by-step."
            : tab + " Tab के सभी tools को step-by-step सीखें।"
          }
        </p>

      </div>

    </div>


    <div style="
      display:flex;
      justify-content:flex-end;
      gap:8px;
      margin-bottom:12px;
      flex-wrap:wrap;
    ">

      <button
        class="primary-button"
        onclick="openImage('${data.image}')">

        🔍 Zoom Image

      </button>

    </div>


    <img
      src="${data.image}"
      class="tab-image"
      alt="${tab} Tab"
      onclick="openImage('${data.image}')">


    <div class="tools-list">

      ${data.tools.map((tool, index) => {

        const content =
          tool[lang];

        return `

          <div
            class="tool-learning-card"
            id="tool-${index}">

            <button
              class="tool-title-button"
              onclick="focusTool(${index})">

              <span class="tool-icon">
                ${tool.icon}
              </span>

              <span>
                ${tool.name}
              </span>

              <span class="tool-arrow">
                ›
              </span>

            </button>


            <div
              class="tool-content"
              id="tool-content-${index}">

              <div class="explanation-block">

                <h3>
                  ${lang === "en"
                    ? "What does it do?"
                    : "यह क्या करता है?"
                  }
                </h3>

                <p>
                  ${content.what}
                </p>

              </div>


              <div class="explanation-block">

                <h3>
                  ${lang === "en"
                    ? "When should you use it?"
                    : "इसे कब उपयोग करना चाहिए?"
                  }
                </h3>

                <p>
                  ${content.when}
                </p>

              </div>


              <button
                class="how-to-button"
                onclick="toggleSteps(${index})">

                ▶
                ${lang === "en"
                  ? "How to use this option?"
                  : "इस option को कैसे उपयोग करें?"
                }

              </button>


              <div
                class="steps-container hidden"
                id="steps-${index}">

                <h3>
                  🪜
                  ${lang === "en"
                    ? "Step-by-step instructions"
                    : "Step-by-step instructions"
                  }
                </h3>

                <ol>

                  ${content.steps.map(step => `

                    <li>
                      ${step}
                    </li>

                  `).join("")}

                </ol>


                <div class="practice-box">

                  <strong>
                    ⭐
                    ${lang === "en"
                      ? "Practice Task"
                      : "अभ्यास करें"
                    }
                  </strong>

                  <p>
                    ${getPracticeText(
                      tool.name,
                      lang
                    )}
                  </p>

                </div>

              </div>

            </div>

          </div>

        `;

      }).join("")}

    </div>

  `;

}


/* ============================================================
   PRACTICE TEXT
   ============================================================ */

function getPracticeText(tool, lang) {

  const practice = {

    "Paste": [
      "Copy one paragraph and paste it at another location.",
      "एक paragraph को copy करके document की दूसरी जगह paste करें।"
    ],

    "Table": [
      "Create a 4-column table for student name, subject, marks and grade.",
      "Student name, subject, marks और grade के लिए 4-column table बनाएँ।"
    ],

    "Pictures": [
      "Insert a picture and resize it to fit properly on the page.",
      "एक picture insert करके उसका size page के अनुसार set करें।"
    ],

    "Shapes": [
      "Create a simple flowchart using three shapes and arrows.",
      "तीन shapes और arrows की मदद से एक simple flowchart बनाएँ।"
    ],

    "Chart": [
      "Create a simple marks or sales chart.",
      "एक simple marks या sales chart बनाएँ।"
    ],

    "Watermark": [
      "Add a DRAFT watermark to a practice document.",
      "Practice document में DRAFT watermark लगाएँ।"
    ],

    "Page Color": [
      "Change the page background to a suitable light color.",
      "Page का background suitable light color में बदलें।"
    ],

    "Page Borders": [
      "Add a professional border to a certificate.",
      "Certificate में professional page border लगाएँ।"
    ],

    "Margins": [
      "Try Normal and Narrow margins and compare the result.",
      "Normal और Narrow margins लगाकर दोनों का result compare करें।"
    ]

  };

  if (practice[tool]) {

    return practice[tool][
      lang === "hi" ? 1 : 0
    ];

  }

  return lang === "en"
    ? "Practice this option in a new Word document."
    : "एक नए Word document में इस option का अभ्यास करें।";

}


/* ============================================================
   FOCUS TOOL
   ============================================================ */

function focusTool(index) {

  const element =
    document.getElementById(
      "tool-content-" + index
    );

  if (!element) return;

  const card =
    document.getElementById(
      "tool-" + index
    );

  if (card) {

    card.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

  }

}


/* ============================================================
   SHOW / HIDE STEPS
   ============================================================ */

function toggleSteps(index) {

  const box =
    document.getElementById(
      "steps-" + index
    );

  if (!box) return;

  box.classList.toggle("hidden");

}


/* ============================================================
   PROJECT PAGE
   ============================================================ */

function showProject(id) {

  const project =
    projects.find(p => p.id === id);

  if (!project) return;

  const app =
    document.getElementById("app");

  if (!app) return;


  app.innerHTML = `

    <div class="page-top">

      <button
        class="back-button"
        onclick="showWordLearning()">

        ← Back to MS Word

      </button>

      <button
        class="primary-button"
        onclick="openImage('${project.image}')">

        🔍 Zoom Project Image

      </button>

    </div>


    <div class="card">

      <h1>
        ${project.title}
      </h1>

      <h2>
        ${project.topic}
      </h2>

      <p>
        ${project.description}
      </p>


      <img
        src="${project.image}"
        class="project-image"
        alt="${project.title}"
        onclick="openImage('${project.image}')">


      <div class="task">

        <h2>
          🎯 Practical Task
        </h2>

        <p>
          Open Microsoft Word and recreate
          the project shown in the image.
        </p>

        <p>
          Practice the formatting, text,
          pictures, tables, shapes and layout
          used in the example.
        </p>

      </div>


      <div class="tip">

        <strong>
          💡 Tip:
        </strong>

        First learn the required MS Word
        tools from the Learning section,
        then complete this project.

      </div>

    </div>

  `;

}


/* ============================================================
   EXCEL PLACEHOLDER
   ============================================================ */

function showExcelMessage() {

  const app =
    document.getElementById("app");

  app.innerHTML = `

    <div class="card">

      <button
        class="back-button"
        onclick="showHome()">
        ← Back to Home
      </button>

      <h1>
        📊 MS Excel
      </h1>

      <p>
        Excel learning module will be added here.
      </p>

      <div class="tip">

        <strong>
          Coming Soon
        </strong>

        <p>
          Excel practical lessons are being prepared.
        </p>

      </div>

    </div>

  `;

}


/* ============================================================
   POWERPOINT PLACEHOLDER
   ============================================================ */

function showPowerPointMessage() {

  const app =
    document.getElementById("app");

  app.innerHTML = `

    <div class="card">

      <button
        class="back-button"
        onclick="showHome()">
        ← Back to Home
      </button>

      <h1>
        📽️ MS PowerPoint
      </h1>

      <p>
        PowerPoint learning module will be added here.
      </p>

      <div class="tip">

        <strong>
          Coming Soon
        </strong>

        <p>
          PowerPoint practical lessons are being prepared.
        </p>

      </div>

    </div>

  `;

}


/* ============================================================
   IMAGE ZOOM VIEWER
   ============================================================ */

function openImage(imageSrc) {

  const old =
    document.getElementById(
      "imageModal"
    );

  if (old) old.remove();


  document.body.insertAdjacentHTML(
    "beforeend",

    `

    <div
      id="imageModal"
      class="jh-image-modal"
      onclick="closeImage()">

      <div
        class="jh-image-viewer"
        onclick="event.stopPropagation()">


        <div class="jh-image-toolbar">

          <strong>
            🔍 Image Zoom
          </strong>


          <button
            onclick="changeImageZoom(-0.15)">
            −
          </button>


          <span id="imageZoomLabel">
            100%
          </span>


          <button
            onclick="changeImageZoom(0.15)">
            +
          </button>


          <button
            onclick="resetImageZoom()">
            100%
          </button>


          <button
            class="close-image"
            onclick="closeImage()">
            ✕
          </button>

        </div>


        <div class="jh-image-stage">

          <img
            id="zoomableImage"
            src="${imageSrc}"
            alt="Learning image">

        </div>

      </div>

    </div>

    `

  );

}


/* ============================================================
   IMAGE ZOOM
   ============================================================ */

function changeImageZoom(amount) {

  const img =
    document.getElementById(
      "zoomableImage"
    );

  const label =
    document.getElementById(
      "imageZoomLabel"
    );

  if (!img || !label) return;


  let zoom =
    parseFloat(
      img.dataset.zoom || "1"
    );


  zoom += amount;


  zoom =
    Math.min(
      3,
      Math.max(
        0.5,
        zoom
      )
    );


  img.dataset.zoom =
    zoom;


  img.style.transform =
    "scale(" + zoom + ")";


  label.textContent =
    Math.round(
      zoom * 100
    ) + "%";

}


/* ============================================================
   RESET IMAGE ZOOM
   ============================================================ */

function resetImageZoom() {

  const img =
    document.getElementById(
      "zoomableImage"
    );

  const label =
    document.getElementById(
      "imageZoomLabel"
    );

  if (!img || !label) return;


  img.dataset.zoom =
    "1";

  img.style.transform =
    "scale(1)";

  label.textContent =
    "100%";

}


/* ============================================================
   CLOSE IMAGE
   ============================================================ */

function closeImage() {

  const modal =
    document.getElementById(
      "imageModal"
    );

  if (modal) {

    modal.remove();

  }

}


/* ============================================================
   IMAGE VIEWER CSS
   ============================================================ */

const imageViewerStyle =
document.createElement("style");

imageViewerStyle.textContent = `

.jh-image-modal {

  position: fixed;

  inset: 0;

  z-index: 99999;

  background:
    rgba(15, 23, 42, 0.88);

  display: flex;

  align-items: center;

  justify-content: center;

  padding: 20px;

}


.jh-image-viewer {

  width: min(
    1200px,
    96vw
  );

  height: min(
    90vh,
    900px
  );

  background: #ffffff;

  border-radius: 18px;

  overflow: hidden;

  box-shadow:
    0 25px 80px
    rgba(0,0,0,0.35);

  display: flex;

  flex-direction: column;

}


.jh-image-toolbar {

  min-height: 58px;

  display: flex;

  align-items: center;

  gap: 9px;

  padding:
    10px 14px;

  background:
    linear-gradient(
      90deg,
      #2563eb,
      #7c3aed
    );

  color: white;

}


.jh-image-toolbar strong {

  margin-right: auto;

}


.jh-image-toolbar button {

  border: 0;

  border-radius: 8px;

  background: rgba(
    255,
    255,
    255,
    0.18
  );

  color: white;

  min-width: 38px;

  height: 34px;

  font-size: 15px;

  font-weight: 700;

  cursor: pointer;

}


.jh-image-toolbar button:hover {

  background:
    rgba(
      255,
      255,
      255,
      0.30
    );

}


.jh-image-stage {

  flex: 1;

  overflow: auto;

  display: flex;

  align-items: center;

  justify-content: center;

  background:
    #f1f5f9;

  padding: 25px;

}


.jh-image-stage img {

  max-width: 100%;

  max-height: 100%;

  object-fit: contain;

  transform-origin:
    center center;

  transition:
    transform 0.15s ease;

  cursor: zoom-in;

}


.close-image {

  background:
    rgba(
      220,
      38,
      38,
      0.85
    ) !important;

}


@media(max-width:600px) {

  .jh-image-modal {

    padding: 8px;

  }

  .jh-image-viewer {

    width: 100vw;

    height: 94vh;

    border-radius: 12px;

  }

  .jh-image-toolbar {

    gap: 5px;

  }

}

`;

document.head.appendChild(
  imageViewerStyle
);


/* ============================================================
   KEYBOARD SHORTCUTS
   ============================================================ */

document.addEventListener(
  "keydown",
  function(event) {

    const modal =
      document.getElementById(
        "imageModal"
      );

    if (!modal) return;


    if (
      event.key === "Escape"
    ) {

      closeImage();

    }


    if (
      event.key === "+"
      ||
      event.key === "="
    ) {

      changeImageZoom(0.15);

    }


    if (
      event.key === "-"
    ) {

      changeImageZoom(-0.15);

    }

  }
);


/* ============================================================
   START WEBSITE
   ============================================================ */

document.addEventListener(
  "DOMContentLoaded",
  function() {

    showHome();

  }
);
