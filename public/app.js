// ============================================================
// JOINING HANDS - AI COMPUTER LEARNING & PRACTICAL LAB
// MS WORD LEARNING MODULE
// ============================================================


// ============================================================
// CURRICULUM
// ============================================================

const curriculum = {
  "MS Word": [
    {
      id: 1,
      title: "Project 1",
      topic: "MS Word Practical Project",
      description: "Complete the project by following the example.",
      image: "Project 1.png"
    },
    {
      id: 2,
      title: "Project 2",
      topic: "MS Word Practical Project",
      description: "Complete the project by following the example.",
      image: "Project 2.png"
    },
    {
      id: 3,
      title: "Project 3",
      topic: "MS Word Practical Project",
      description: "Complete the project by following the example.",
      image: "Project 3.png"
    },
    {
      id: 4,
      title: "Project 4",
      topic: "MS Word Practical Project",
      description: "Complete the project by following the example.",
      image: "Project 4.png"
    },
    {
      id: 5,
      title: "Project 5",
      topic: "MS Word Practical Project",
      description: "Complete the project by following the example.",
      image: "Project 5.png"
    },
    {
      id: 6,
      title: "Project 6",
      topic: "MS Word Practical Project",
      description: "Complete the project by following the example.",
      image: "Project 6.png"
    },
    {
      id: 7,
      title: "Project 7",
      topic: "Visitor's Information Sheet",
      description: "Prepare a visitor's information sheet in MS Word.",
      image: "Project 7.png"
    },
    {
      id: 8,
      title: "Project 8",
      topic: "Sales Chart",
      description: "Create a sales chart using tables and charts.",
      image: "Project 8.png"
    },
    {
      id: 9,
      title: "Project 9",
      topic: "MS Word Practical Project",
      description: "Complete the project by following the example.",
      image: "Project 9.png"
    },
    {
      id: 10,
      title: "Project 10",
      topic: "MS Word Practical Project",
      description: "Complete the project by following the example.",
      image: "Project 10.png"
    },
    {
      id: 11,
      title: "Project 11",
      topic: "MS Word Practical Project",
      description: "Complete the project by following the example.",
      image: "Project 11.png"
    },
    {
      id: 12,
      title: "Project 12",
      topic: "MS Word Practical Project",
      description: "Complete the project by following the example.",
      image: "Project 12.png"
    },
    {
      id: 13,
      title: "Project 13",
      topic: "Education",
      description: "Create an educational information page using MS Word.",
      image: "Project 13.png"
    },
    {
      id: 14,
      title: "Project 14",
      topic: "Kid Helper",
      description: "Create an attractive information page using text, shapes and images.",
      image: "Project 14.png"
    }
  ],

  "MS Excel": [
    {
      id: 1,
      title: "Project 1",
      topic: "Basic Excel",
      description: "Learn rows, columns, cells and basic data entry."
    },
    {
      id: 2,
      title: "Project 2",
      topic: "Basic Formulas",
      description: "Practice SUM, AVERAGE, MIN and MAX."
    },
    {
      id: 3,
      title: "Project 3",
      topic: "Formatting",
      description: "Format an Excel worksheet professionally."
    }
  ],

  "MS PowerPoint": [
    {
      id: 1,
      title: "Project 1",
      topic: "Create a Presentation",
      description: "Create your first PowerPoint presentation."
    },
    {
      id: 2,
      title: "Project 2",
      topic: "Design and Formatting",
      description: "Practice themes, pictures, shapes and text."
    }
  ],

  "English": [
    {
      id: 1,
      title: "Lesson 1",
      topic: "Basic English",
      description: "Practice basic English words and sentences."
    },
    {
      id: 2,
      title: "Lesson 2",
      topic: "Daily Conversation",
      description: "Practice common conversations used in daily life."
    }
  ]
};


// ============================================================
// MS WORD LEARNING DATA
// ============================================================

const wordLearning = {

  Home: {
    image: "Home.png",

    tools: [

      {
        name: "Paste",
        icon: "📋",

        en: {
          what: "Inserts copied or cut content into the document.",
          when: "Use Paste when you want to place copied or cut text, pictures or other content somewhere else in your document.",
          steps: [
            "Copy or cut the content you want to use.",
            "Place the cursor where you want the content.",
            "Go to the Home tab.",
            "Click Paste.",
            "The copied or cut content will appear at the cursor position."
          ],
          practice: "Copy a sentence and paste it into another paragraph."
        },

        hi: {
          what: "Copied या cut किए गए content को document में insert करता है।",
          when: "जब copied या cut किए गए text, picture या दूसरे content को दूसरी जगह लगाना हो तब Paste का use करें।",
          steps: [
            "जिस content को use करना है उसे Copy या Cut करें।",
            "जहाँ content लगाना है वहाँ cursor रखें।",
            "Home tab पर जाएँ।",
            "Paste पर click करें।",
            "Content cursor की position पर दिखाई देगा।"
          ],
          practice: "एक sentence को Copy करके दूसरे paragraph में Paste करें।"
        }
      },


      {
        name: "Cut",
        icon: "✂️",

        en: {
          what: "Removes selected content and places it on the Clipboard.",
          when: "Use Cut when you want to move text, pictures or other content from one location to another.",
          steps: [
            "Select the content you want to move.",
            "Go to the Home tab.",
            "Click Cut.",
            "Place the cursor at the new location.",
            "Click Paste."
          ],
          practice: "Move one sentence from one paragraph to another."
        },

        hi: {
          what: "Selected content को हटाकर Clipboard में रखता है।",
          when: "जब किसी text, picture या content को एक जगह से दूसरी जगह move करना हो तब Cut का use करें।",
          steps: [
            "जिस content को move करना है उसे select करें।",
            "Home tab पर जाएँ।",
            "Cut पर click करें।",
            "नई location पर cursor रखें।",
            "Paste पर click करें।"
          ],
          practice: "एक sentence को एक paragraph से दूसरे paragraph में move करें।"
        }
      },


      {
        name: "Copy",
        icon: "📄",

        en: {
          what: "Creates a copy of selected content without removing the original.",
          when: "Use Copy when you want to use the same content in another location.",
          steps: [
            "Select the text or object.",
            "Go to the Home tab.",
            "Click Copy.",
            "Place the cursor where you want the copy.",
            "Click Paste."
          ],
          practice: "Copy a heading and paste it somewhere else."
        },

        hi: {
          what: "Selected content की copy बनाता है और original content को वहीं रखता है।",
          when: "जब same content को दूसरी location पर भी use करना हो तब Copy का use करें।",
          steps: [
            "Text या object को select करें।",
            "Home tab पर जाएँ।",
            "Copy पर click करें।",
            "जहाँ copy चाहिए वहाँ cursor रखें।",
            "Paste पर click करें।"
          ],
          practice: "एक heading को Copy करके दूसरी जगह Paste करें।"
        }
      },


      {
        name: "Format Painter",
        icon: "🖌️",

        en: {
          what: "Copies formatting from one piece of content and applies it to another.",
          when: "Use Format Painter when you want two pieces of text to have the same formatting.",
          steps: [
            "Select the text that already has the formatting you want.",
            "Go to the Home tab.",
            "Click Format Painter.",
            "Select the text where you want to apply the formatting.",
            "The formatting will be copied."
          ],
          practice: "Make one heading bold, blue and large, then use Format Painter on another heading."
        },

        hi: {
          what: "एक text की formatting को दूसरे text पर apply करता है।",
          when: "जब दो अलग-अलग text की formatting same करनी हो तब Format Painter का use करें।",
          steps: [
            "जिस text की formatting copy करनी है उसे select करें।",
            "Home tab पर जाएँ।",
            "Format Painter पर click करें।",
            "जिस text पर formatting लगानी है उसे select करें।",
            "Formatting automatically apply हो जाएगी।"
          ],
          practice: "एक heading को bold, blue और बड़ा बनाकर दूसरी heading पर Format Painter लगाएँ।"
        }
      },


      // ========================================================
      // FONT
      // ========================================================

      {
        name: "Font Name",
        icon: "Aa",

        en: {
          what: "Changes the typeface or font of selected text.",
          when: "Use Font Name when you want to change the appearance or style of text.",
          steps: [
            "Select the text.",
            "Go to the Home tab.",
            "Find the Font Name box.",
            "Click the font name or its drop-down arrow.",
            "Choose a font such as Arial, Calibri or Times New Roman.",
            "The selected text will change to the chosen font."
          ],
          practice: "Type a sentence and change it to Times New Roman."
        },

        hi: {
          what: "Selected text का font बदलता है।",
          when: "जब text का style या appearance बदलना हो तब Font Name का use करें।",
          steps: [
            "Text को select करें।",
            "Home tab पर जाएँ।",
            "Font Name box खोजें।",
            "Font name या उसके arrow पर click करें।",
            "Arial, Calibri या Times New Roman जैसा font चुनें।",
            "Selected text का font बदल जाएगा।"
          ],
          practice: "एक sentence type करें और उसका font Times New Roman करें।"
        }
      },


      {
        name: "Font Size",
        icon: "11",

        en: {
          what: "Changes the size of selected text.",
          when: "Use Font Size when text needs to be larger or smaller.",
          steps: [
            "Select the text.",
            "Go to the Home tab.",
            "Click the Font Size box.",
            "Type a size such as 12, 14, 16 or 20.",
            "Press Enter."
          ],
          practice: "Make a heading 20 pt and normal text 12 pt."
        },

        hi: {
          what: "Selected text का size बदलता है।",
          when: "जब text को बड़ा या छोटा करना हो तब Font Size का use करें।",
          steps: [
            "Text select करें।",
            "Home tab पर जाएँ।",
            "Font Size box पर click करें।",
            "12, 14, 16 या 20 जैसा size लिखें।",
            "Enter दबाएँ।"
          ],
          practice: "Heading को 20 pt और normal text को 12 pt करें।"
        }
      },


      {
        name: "Increase Font Size",
        icon: "A↑",

        en: {
          what: "Increases the size of selected text.",
          when: "Use it when you want to quickly make text larger.",
          steps: [
            "Select the text.",
            "Go to Home.",
            "Click Increase Font Size.",
            "Repeat the click if you need the text to become larger."
          ],
          practice: "Select a heading and increase its size two times."
        },

        hi: {
          what: "Selected text का size बढ़ाता है।",
          when: "जब text को जल्दी से बड़ा करना हो तब इसका use करें।",
          steps: [
            "Text select करें।",
            "Home tab पर जाएँ।",
            "Increase Font Size पर click करें।",
            "Text को और बड़ा करने के लिए फिर click करें।"
          ],
          practice: "एक heading select करके उसका size दो बार बढ़ाएँ।"
        }
      },


      {
        name: "Decrease Font Size",
        icon: "A↓",

        en: {
          what: "Decreases the size of selected text.",
          when: "Use it when selected text is too large.",
          steps: [
            "Select the text.",
            "Go to Home.",
            "Click Decrease Font Size.",
            "Repeat if a smaller size is needed."
          ],
          practice: "Select large text and reduce its size two times."
        },

        hi: {
          what: "Selected text का size छोटा करता है।",
          when: "जब text बहुत बड़ा हो और उसे छोटा करना हो तब इसका use करें।",
          steps: [
            "Text select करें।",
            "Home tab पर जाएँ।",
            "Decrease Font Size पर click करें।",
            "और छोटा करना हो तो फिर click करें।"
          ],
          practice: "बड़े text को select करके उसका size दो बार कम करें।"
        }
      },


      {
        name: "Bold",
        icon: "B",

        en: {
          what: "Makes text darker and thicker.",
          when: "Use Bold to highlight important words, headings or information.",
          steps: [
            "Select the text.",
            "Go to the Home tab.",
            "Click Bold.",
            "The selected text becomes bold."
          ],
          practice: "Make the main heading bold."
        },

        hi: {
          what: "Text को मोटा और dark करता है।",
          when: "Important words, headings या information को highlight करने के लिए Bold का use करें।",
          steps: [
            "Text select करें।",
            "Home tab पर जाएँ।",
            "Bold पर click करें।",
            "Selected text bold हो जाएगा।"
          ],
          practice: "Main heading को Bold करें।"
        }
      },


      {
        name: "Italic",
        icon: "I",

        en: {
          what: "Makes text slanted.",
          when: "Use Italic to emphasize words or create a different text style.",
          steps: [
            "Select the text.",
            "Go to the Home tab.",
            "Click Italic.",
            "The selected text becomes slanted."
          ],
          practice: "Italicize one important word in a paragraph."
        },

        hi: {
          what: "Text को तिरछा करता है।",
          when: "किसी word को emphasize करने या अलग style देने के लिए Italic का use करें।",
          steps: [
            "Text select करें।",
            "Home tab पर जाएँ।",
            "Italic पर click करें।",
            "Selected text तिरछा हो जाएगा।"
          ],
          practice: "एक paragraph में किसी important word को Italic करें।"
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
            "Go to the Home tab.",
            "Click Underline.",
            "The selected text will have a line underneath it."
          ],
          practice: "Underline the title of your document."
        },

        hi: {
          what: "Selected text के नीचे line लगाता है।",
          when: "Important text को emphasize करने के लिए Underline का use करें।",
          steps: [
            "Text select करें।",
            "Home tab पर जाएँ।",
            "Underline पर click करें।",
            "Selected text के नीचे line आ जाएगी।"
          ],
          practice: "अपने document के title को Underline करें।"
        }
      },


      {
        name: "Strikethrough",
        icon: "abc̶",

        en: {
          what: "Places a line through the middle of text.",
          when: "Use Strikethrough when information is deleted, cancelled or no longer valid but you still want to show it.",
          steps: [
            "Select the text.",
            "Go to the Home tab.",
            "Click Strikethrough.",
            "A line will appear through the selected text."
          ],
          practice: "Type an old price and apply Strikethrough."
        },

        hi: {
          what: "Text के बीच में एक line लगाता है।",
          when: "जब किसी information को cancelled या deleted दिखाना हो लेकिन उसे document में रखना हो तब इसका use करें।",
          steps: [
            "Text select करें।",
            "Home tab पर जाएँ।",
            "Strikethrough पर click करें।",
            "Text के बीच में line दिखाई देगी।"
          ],
          practice: "एक पुरानी price लिखकर उस पर Strikethrough लगाएँ।"
        }
      },


      {
        name: "Subscript",
        icon: "X₂",

        en: {
          what: "Places selected text slightly below the normal text line and makes it smaller.",
          when: "Use Subscript for chemical formulas and mathematical notation such as H₂O.",
          steps: [
            "Select the character you want to make subscript.",
            "Go to Home.",
            "Click Subscript.",
            "The selected character will move slightly downward."
          ],
          practice: "Type H2O and make the 2 a subscript."
        },

        hi: {
          what: "Selected text को छोटा करके normal line से थोड़ा नीचे लिखता है।",
          when: "Chemical formulas जैसे H₂O लिखने के लिए Subscript का use करें।",
          steps: [
            "जिस character को subscript बनाना है उसे select करें।",
            "Home tab पर जाएँ।",
            "Subscript पर click करें।",
            "Selected character नीचे की तरफ छोटा दिखाई देगा।"
          ],
          practice: "H2O type करें और 2 को Subscript करें।"
        }
      },


      {
        name: "Superscript",
        icon: "X²",

        en: {
          what: "Places selected text slightly above the normal text line and makes it smaller.",
          when: "Use Superscript for powers and mathematical expressions such as X².",
          steps: [
            "Select the character.",
            "Go to Home.",
            "Click Superscript.",
            "The selected character will move slightly upward."
          ],
          practice: "Type X2 and make the 2 a superscript."
        },

        hi: {
          what: "Selected text को छोटा करके normal line से थोड़ा ऊपर लिखता है।",
          when: "Mathematical powers जैसे X² लिखने के लिए Superscript का use करें।",
          steps: [
            "Character select करें।",
            "Home tab पर जाएँ।",
            "Superscript पर click करें।",
            "Selected character ऊपर की तरफ छोटा दिखाई देगा।"
          ],
          practice: "X2 type करें और 2 को Superscript करें।"
        }
      },


      {
        name: "Change Case",
        icon: "Aa",

        en: {
          what: "Changes selected text between uppercase, lowercase and other capitalization styles.",
          when: "Use Change Case when you need to quickly change the capitalization of existing text.",
          steps: [
            "Select the text.",
            "Go to the Home tab.",
            "Click Change Case.",
            "Choose UPPERCASE, lowercase, Sentence case or another option.",
            "The selected text changes immediately."
          ],
          practice: "Type a sentence in lowercase and convert it to UPPERCASE."
        },

        hi: {
          what: "Selected text के uppercase, lowercase और दूसरे case को बदलता है।",
          when: "जब पहले से लिखे हुए text का capitalization बदलना हो तब Change Case का use करें।",
          steps: [
            "Text select करें।",
            "Home tab पर जाएँ।",
            "Change Case पर click करें।",
            "UPPERCASE, lowercase या Sentence case चुनें।",
            "Selected text का case बदल जाएगा।"
          ],
          practice: "एक sentence lowercase में type करके उसे UPPERCASE में बदलें।"
        }
      },


      {
        name: "Clear All Formatting",
        icon: "🧹",

        en: {
          what: "Removes applied formatting and returns selected text to normal formatting.",
          when: "Use it when text has unwanted formatting and you want to start with clean formatting.",
          steps: [
            "Select the formatted text.",
            "Go to the Home tab.",
            "Click Clear All Formatting.",
            "The selected text will return to normal formatting."
          ],
          practice: "Apply several formatting styles to text and then remove them using Clear All Formatting."
        },

        hi: {
          what: "Applied formatting को हटाकर selected text को normal formatting में लाता है।",
          when: "जब text की formatting खराब या unwanted हो जाए और उसे normal करना हो तब इसका use करें।",
          steps: [
            "Formatted text select करें।",
            "Home tab पर जाएँ।",
            "Clear All Formatting पर click करें।",
            "Text की formatting normal हो जाएगी।"
          ],
          practice: "Text पर कई formatting लगाएँ और फिर Clear All Formatting से हटा दें।"
        }
      },


      {
        name: "Text Highlight Color",
        icon: "🖍️",

        en: {
          what: "Adds a colored highlight behind selected text.",
          when: "Use it to mark important information so it is easy to notice.",
          steps: [
            "Select the text.",
            "Go to Home.",
            "Click Text Highlight Color.",
            "Choose a highlight color.",
            "The selected text will be highlighted."
          ],
          practice: "Highlight three important words in yellow."
        },

        hi: {
          what: "Selected text के पीछे highlight color लगाता है।",
          when: "Important information को आसानी से पहचानने के लिए इसका use करें।",
          steps: [
            "Text select करें।",
            "Home tab पर जाएँ।",
            "Text Highlight Color पर click करें।",
            "एक highlight color चुनें।",
            "Selected text highlight हो जाएगा।"
          ],
          practice: "तीन important words को yellow highlight करें।"
        }
      },


      {
        name: "Font Color",
        icon: "A",

        en: {
          what: "Changes the color of selected text.",
          when: "Use Font Color to emphasize headings, keywords or other important text.",
          steps: [
            "Select the text.",
            "Go to Home.",
            "Click the Font Color arrow.",
            "Choose a color.",
            "The selected text changes to that color."
          ],
          practice: "Make the main heading blue."
        },

        hi: {
          what: "Selected text का color बदलता है।",
          when: "Heading, keyword या important text को अलग दिखाने के लिए इसका use करें।",
          steps: [
            "Text select करें।",
            "Home tab पर जाएँ।",
            "Font Color के arrow पर click करें।",
            "एक color चुनें।",
            "Selected text का color बदल जाएगा।"
          ],
          practice: "Main heading को blue color दें।"
        }
      },


      {
        name: "Text Effects",
        icon: "A✦",

        en: {
          what: "Applies visual effects such as outline, shadow, glow and other text effects.",
          when: "Use Text Effects when you want decorative or visually attractive text.",
          steps: [
            "Select the text.",
            "Go to Home.",
            "Open Text Effects.",
            "Choose an effect such as Shadow, Glow or Outline.",
            "The effect is applied to the selected text."
          ],
          practice: "Apply a shadow effect to a heading."
        },

        hi: {
          what: "Text पर Shadow, Glow, Outline जैसे visual effects लगाता है।",
          when: "Decorative या attractive text बनाने के लिए इसका use करें।",
          steps: [
            "Text select करें।",
            "Home tab पर जाएँ।",
            "Text Effects खोलें।",
            "Shadow, Glow या Outline जैसा effect चुनें।",
            "Selected text पर effect apply हो जाएगा।"
          ],
          practice: "एक heading पर Shadow effect लगाएँ।"
        }
      },


      // ========================================================
      // PARAGRAPH
      // ========================================================

      {
        name: "Bullets",
        icon: "•",

        en: {
          what: "Creates a list using bullet symbols.",
          when: "Use Bullets when list items do not need a specific numerical order.",
          steps: [
            "Place the cursor in the paragraph or select multiple lines.",
            "Go to Home.",
            "Click Bullets.",
            "Choose a bullet style.",
            "Type each item and press Enter for the next bullet."
          ],
          practice: "Create a bulleted list of five fruits."
        },

        hi: {
          what: "Bullet symbols वाली list बनाता है।",
          when: "जब list items का कोई specific numerical order नहीं हो तब Bullets का use करें।",
          steps: [
            "Paragraph में cursor रखें या कई lines select करें।",
            "Home tab पर जाएँ।",
            "Bullets पर click करें।",
            "Bullet style चुनें।",
            "हर item लिखकर अगली bullet के लिए Enter दबाएँ।"
          ],
          practice: "पाँच fruits की bulleted list बनाएँ।"
        }
      },


      {
        name: "Numbering",
        icon: "1.",

        en: {
          what: "Creates a numbered list.",
          when: "Use Numbering when list items should follow a sequence or order.",
          steps: [
            "Place the cursor in the list.",
            "Go to Home.",
            "Click Numbering.",
            "Choose a numbering style.",
            "Type an item and press Enter for the next number."
          ],
          practice: "Create a numbered list of five steps for making tea."
        },

        hi: {
          what: "Number वाली list बनाता है।",
          when: "जब list items को sequence या order में दिखाना हो तब Numbering का use करें।",
          steps: [
            "List में cursor रखें।",
            "Home tab पर जाएँ।",
            "Numbering पर click करें।",
            "Numbering style चुनें।",
            "Item लिखकर अगली number के लिए Enter दबाएँ।"
          ],
          practice: "चाय बनाने के पाँच steps की numbered list बनाएँ।"
        }
      },


      {
        name: "Multilevel List",
        icon: "≡",

        en: {
          what: "Creates a list with multiple levels such as main points and sub-points.",
          when: "Use it for outlines, chapters, topics and subtopics.",
          steps: [
            "Create or select your list.",
            "Go to Home.",
            "Click Multilevel List.",
            "Choose a list style.",
            "Use Tab to move an item to a lower level.",
            "Use Shift + Tab to move it back to a higher level."
          ],
          practice: "Create a list with three main topics and two subtopics under each."
        },

        hi: {
          what: "Multiple levels वाली list बनाता है जिसमें main points और sub-points होते हैं।",
          when: "Chapter, topic, subtopic या outline बनाने के लिए इसका use करें।",
          steps: [
            "List बनाएं या select करें।",
            "Home tab पर जाएँ।",
            "Multilevel List पर click करें।",
            "एक list style चुनें।",
            "Item को lower level में ले जाने के लिए Tab दबाएँ।",
            "ऊपर वाले level में लाने के लिए Shift + Tab दबाएँ।"
          ],
          practice: "तीन main topics बनाकर हर topic के नीचे दो subtopics बनाएँ।"
        }
      },


      {
        name: "Increase Indent",
        icon: "→",

        en: {
          what: "Moves a paragraph farther away from the left margin.",
          when: "Use it when you want to create a sub-point or move text inward.",
          steps: [
            "Place the cursor in the paragraph or select paragraphs.",
            "Go to Home.",
            "Click Increase Indent.",
            "The paragraph moves inward."
          ],
          practice: "Move a paragraph one level inward."
        },

        hi: {
          what: "Paragraph को left margin से अंदर की तरफ ले जाता है।",
          when: "Sub-point बनाने या paragraph को अंदर shift करने के लिए इसका use करें।",
          steps: [
            "Paragraph में cursor रखें या paragraph select करें।",
            "Home tab पर जाएँ।",
            "Increase Indent पर click करें।",
            "Paragraph अंदर shift हो जाएगा।"
          ],
          practice: "एक paragraph को एक level अंदर shift करें।"
        }
      },


      {
        name: "Decrease Indent",
        icon: "←",

        en: {
          what: "Moves a paragraph closer to the left margin.",
          when: "Use it when text has been indented too far or needs to return to the previous level.",
          steps: [
            "Place the cursor in the paragraph.",
            "Go to Home.",
            "Click Decrease Indent.",
            "The paragraph moves toward the left margin."
          ],
          practice: "Decrease the indent of an indented paragraph."
        },

        hi: {
          what: "Paragraph को वापस left margin की तरफ लाता है।",
          when: "जब paragraph ज्यादा अंदर चला गया हो या previous level पर लाना हो तब इसका use करें।",
          steps: [
            "Paragraph में cursor रखें।",
            "Home tab पर जाएँ।",
            "Decrease Indent पर click करें।",
            "Paragraph left margin की तरफ आ जाएगा।"
          ],
          practice: "Indented paragraph का indent कम करें।"
        }
      },


      {
        name: "Sort",
        icon: "A-Z",

        en: {
          what: "Arranges selected text or list items into a chosen order.",
          when: "Use Sort when you need to arrange names, words or numbers alphabetically or numerically.",
          steps: [
            "Select the list or paragraphs.",
            "Go to Home.",
            "Click Sort.",
            "Choose the sorting options.",
            "Choose Ascending or Descending.",
            "Click OK."
          ],
          practice: "Create five names and sort them from A to Z."
        },

        hi: {
          what: "Selected text या list items को selected order में arrange करता है।",
          when: "Names, words या numbers को alphabetical या numerical order में लगाने के लिए इसका use करें।",
          steps: [
            "List या paragraphs select करें।",
            "Home tab पर जाएँ।",
            "Sort पर click करें।",
            "Sorting options चुनें।",
            "Ascending या Descending चुनें।",
            "OK पर click करें।"
          ],
          practice: "पाँच names लिखकर उन्हें A से Z में sort करें।"
        }
      },


      {
        name: "Show/Hide ¶",
        icon: "¶",

        en: {
          what: "Shows or hides non-printing formatting marks such as spaces, paragraph marks and tabs.",
          when: "Use it when you need to understand or troubleshoot document spacing and formatting.",
          steps: [
            "Go to Home.",
            "Find the Show/Hide ¶ button in the Paragraph group.",
            "Click it.",
            "Formatting marks will appear.",
            "Click it again to hide them."
          ],
          practice: "Turn Show/Hide on and identify paragraph marks and spaces."
        },

        hi: {
          what: "Spaces, paragraph marks और tabs जैसे non-printing formatting marks को दिखाता या छिपाता है।",
          when: "Document की spacing या formatting को समझने या ठीक करने के लिए इसका use करें।",
          steps: [
            "Home tab पर जाएँ।",
            "Paragraph group में Show/Hide ¶ खोजें।",
            "उस पर click करें।",
            "Formatting marks दिखाई देंगे।",
            "फिर click करने पर वे hide हो जाएँगे।"
          ],
          practice: "Show/Hide on करके paragraph marks और spaces पहचानें।"
        }
      },


      {
        name: "Align Left",
        icon: "≡",

        en: {
          what: "Aligns the paragraph with the left margin.",
          when: "Use it for normal paragraphs and text that should start from the left side.",
          steps: [
            "Place the cursor in the paragraph or select paragraphs.",
            "Go to Home.",
            "Click Align Left."
          ],
          practice: "Align a paragraph to the left."
        },

        hi: {
          what: "Paragraph को left margin के साथ align करता है।",
          when: "Normal paragraphs और left side से शुरू होने वाले text के लिए इसका use करें।",
          steps: [
            "Paragraph में cursor रखें या paragraphs select करें।",
            "Home tab पर जाएँ।",
            "Align Left पर click करें।"
          ],
          practice: "एक paragraph को left align करें।"
        }
      },


      {
        name: "Center",
        icon: "≡",

        en: {
          what: "Centers the paragraph between the left and right margins.",
          when: "Use Center for titles, headings or text that should appear in the middle.",
          steps: [
            "Select the paragraph or place the cursor in it.",
            "Go to Home.",
            "Click Center."
          ],
          practice: "Center the title of your document."
        },

        hi: {
          what: "Paragraph को left और right margins के बीच center में रखता है।",
          when: "Title, heading या बीच में दिखने वाले text के लिए इसका use करें।",
          steps: [
            "Paragraph select करें या उसमें cursor रखें।",
            "Home tab पर जाएँ।",
            "Center पर click करें।"
          ],
          practice: "Document के title को Center करें।"
        }
      },


      {
        name: "Align Right",
        icon: "≡",

        en: {
          what: "Aligns the paragraph with the right margin.",
          when: "Use it when text needs to be positioned on the right side.",
          steps: [
            "Select the paragraph.",
            "Go to Home.",
            "Click Align Right."
          ],
          practice: "Align a date or short line to the right."
        },

        hi: {
          what: "Paragraph को right margin के साथ align करता है।",
          when: "जब text को right side पर रखना हो तब इसका use करें।",
          steps: [
            "Paragraph select करें।",
            "Home tab पर जाएँ।",
            "Align Right पर click करें।"
          ],
          practice: "किसी date या short line को right align करें।"
        }
      },


      {
        name: "Justify",
        icon: "≡",

        en: {
          what: "Aligns text evenly with both the left and right margins.",
          when: "Use Justify for professional-looking paragraphs, reports and formal documents.",
          steps: [
            "Select the paragraph or paragraphs.",
            "Go to Home.",
            "Click Justify.",
            "The text will be distributed evenly between the margins."
          ],
          practice: "Justify a paragraph containing at least five lines."
        },

        hi: {
          what: "Text को left और right दोनों margins के साथ evenly align करता है।",
          when: "Professional reports और formal documents के paragraphs के लिए इसका use करें।",
          steps: [
            "Paragraph या paragraphs select करें।",
            "Home tab पर जाएँ।",
            "Justify पर click करें।",
            "Text दोनों margins के बीच evenly arrange हो जाएगा।"
          ],
          practice: "कम से कम पाँच lines वाले paragraph को Justify करें।"
        }
      },


      {
        name: "Line & Paragraph Spacing",
        icon: "↕",

        en: {
          what: "Controls the amount of space between lines and paragraphs.",
          when: "Use it when a document looks too crowded or has too much empty space.",
          steps: [
            "Select the paragraph or paragraphs.",
            "Go to Home.",
            "Open Line and Paragraph Spacing.",
            "Choose 1.0, 1.15, 1.5, 2.0 or another option.",
            "The spacing will change."
          ],
          practice: "Apply 1.5 line spacing to a paragraph."
        },

        hi: {
          what: "Lines और paragraphs के बीच की दूरी को control करता है।",
          when: "जब document बहुत crowded हो या बहुत ज्यादा खाली space हो तब इसका use करें।",
          steps: [
            "Paragraph select करें।",
            "Home tab पर जाएँ।",
            "Line and Paragraph Spacing खोलें।",
            "1.0, 1.15, 1.5 या 2.0 चुनें।",
            "Spacing बदल जाएगी।"
          ],
          practice: "एक paragraph पर 1.5 line spacing लगाएँ।"
        }
      },


      {
        name: "Shading",
        icon: "🎨",

        en: {
          what: "Adds a background color behind a paragraph or selected text.",
          when: "Use Shading to visually highlight headings, notices or important sections.",
          steps: [
            "Select the text or place the cursor in the paragraph.",
            "Go to Home.",
            "Open the Shading option.",
            "Choose a background color.",
            "The selected area will receive the background color."
          ],
          practice: "Add a light background color to a heading."
        },

        hi: {
          what: "Paragraph या selected text के पीछे background color लगाता है।",
          when: "Heading, notice या important section को highlight करने के लिए Shading का use करें।",
          steps: [
            "Text select करें या paragraph में cursor रखें।",
            "Home tab पर जाएँ।",
            "Shading option खोलें।",
            "एक background color चुनें।",
            "Selected area पर background color लग जाएगा।"
          ],
          practice: "एक heading पर light background color लगाएँ।"
        }
      },


      {
        name: "Borders",
        icon: "▣",

        en: {
          what: "Adds borders around selected text, paragraphs or other areas.",
          when: "Use Borders to separate or highlight information.",
          steps: [
            "Select the paragraph or text.",
            "Go to Home.",
            "Open Borders.",
            "Choose the required border such as Outside Borders.",
            "The border will be applied."
          ],
          practice: "Put an outside border around a short notice."
        },

        hi: {
          what: "Selected text या paragraph के चारों ओर border लगाता है।",
          when: "Information को अलग या highlight करने के लिए Borders का use करें।",
          steps: [
            "Text या paragraph select करें।",
            "Home tab पर जाएँ।",
            "Borders खोलें।",
            "Outside Borders जैसा option चुनें।",
            "Border apply हो जाएगा।"
          ],
          practice: "एक short notice के चारों ओर Outside Border लगाएँ।"
        }
      },


      // ========================================================
      // STYLES
      // ========================================================

      {
        name: "Normal",
        icon: "N",

        en: {
          what: "Applies the standard Normal style to text or paragraphs.",
          when: "Use Normal for ordinary body text.",
          steps: [
            "Select the text or place the cursor in the paragraph.",
            "Go to Home.",
            "Open the Styles gallery.",
            "Click Normal."
          ],
          practice: "Apply Normal style to a paragraph."
        },

        hi: {
          what: "Text या paragraph पर standard Normal style apply करता है।",
          when: "Ordinary body text के लिए Normal style का use करें।",
          steps: [
            "Text select करें या paragraph में cursor रखें।",
            "Home tab पर जाएँ।",
            "Styles gallery खोलें।",
            "Normal पर click करें।"
          ],
          practice: "एक paragraph पर Normal style लगाएँ।"
        }
      },


      {
        name: "No Spacing",
        icon: "NS",

        en: {
          what: "Applies a style with reduced or no extra paragraph spacing.",
          when: "Use it when you want paragraphs to appear more compact.",
          steps: [
            "Select the paragraph.",
            "Go to Home.",
            "Open Styles.",
            "Click No Spacing."
          ],
          practice: "Apply No Spacing to two paragraphs."
        },

        hi: {
          what: "Paragraph के बीच की extra spacing को कम या हटाने वाला style apply करता है।",
          when: "जब paragraphs को compact दिखाना हो तब इसका use करें।",
          steps: [
            "Paragraph select करें।",
            "Home tab पर जाएँ।",
            "Styles खोलें।",
            "No Spacing पर click करें।"
          ],
          practice: "दो paragraphs पर No Spacing apply करें।"
        }
      },


      {
        name: "Heading 1",
        icon: "H1",

        en: {
          what: "Applies a main heading style.",
          when: "Use Heading 1 for major sections or main headings.",
          steps: [
            "Select the heading text.",
            "Go to Home.",
            "Open Styles.",
            "Click Heading 1."
          ],
          practice: "Create three main sections using Heading 1."
        },

        hi: {
          what: "Main heading के लिए heading style apply करता है।",
          when: "Major sections या main headings के लिए Heading 1 का use करें।",
          steps: [
            "Heading text select करें।",
            "Home tab पर जाएँ।",
            "Styles खोलें।",
            "Heading 1 पर click करें।"
          ],
          practice: "तीन main sections को Heading 1 दें।"
        }
      },


      {
        name: "Heading 2",
        icon: "H2",

        en: {
          what: "Applies a sub-heading style below Heading 1.",
          when: "Use Heading 2 for subtopics under a main heading.",
          steps: [
            "Select the sub-heading.",
            "Go to Home.",
            "Open Styles.",
            "Click Heading 2."
          ],
          practice: "Add two Heading 2 subtopics under a Heading 1."
        },

        hi: {
          what: "Heading 1 के नीचे sub-heading का style apply करता है।",
          when: "Main heading के नीचे subtopics के लिए Heading 2 का use करें।",
          steps: [
            "Sub-heading select करें।",
            "Home tab पर जाएँ।",
            "Styles खोलें।",
            "Heading 2 पर click करें।"
          ],
          practice: "एक Heading 1 के नीचे दो Heading 2 subtopics बनाएँ।"
        }
      },


      {
        name: "Title",
        icon: "T",

        en: {
          what: "Applies a prominent title style to the main title of a document.",
          when: "Use Title for the main title on the first page.",
          steps: [
            "Select or type the document title.",
            "Go to Home.",
            "Open Styles.",
            "Click Title."
          ],
          practice: "Create a document title using the Title style."
        },

        hi: {
          what: "Document के main title के लिए prominent title style apply करता है।",
          when: "First page के main title के लिए Title style का use करें।",
          steps: [
            "Document title type या select करें।",
            "Home tab पर जाएँ।",
            "Styles खोलें।",
            "Title पर click करें।"
          ],
          practice: "Title style का use करके document का main title बनाएँ।"
        }
      }

    ]
  },


  // ============================================================
  // INSERT TAB
  // ============================================================

  Insert: {
    image: "Insert.png",

    tools: [

      {
        name: "Cover Page",
        icon: "📄",

        en: {
          what: "Inserts a ready-made cover page design at the beginning of a document.",
          when: "Use it when creating reports, projects, assignments or professional documents that need a designed first page.",
          steps: [
            "Open the Insert tab.",
            "Click Cover Page.",
            "Choose a cover page design.",
            "The cover page will be inserted at the beginning.",
            "Replace the sample title, name, date and other information with your own details."
          ],
          practice: "Create a project report and add a cover page."
        },

        hi: {
          what: "Document की शुरुआत में ready-made cover page design जोड़ता है।",
          when: "Report, project, assignment या professional document के लिए इसका use करें।",
          steps: [
            "Insert tab खोलें।",
            "Cover Page पर click करें।",
            "कोई cover page design चुनें।",
            "Cover page document की शुरुआत में जुड़ जाएगा।",
            "Sample title, name और date को अपनी information से बदलें।"
          ],
          practice: "एक project report बनाकर उसमें Cover Page लगाएँ।"
        }
      },


      {
        name: "Blank Page",
        icon: "📃",

        en: {
          what: "Adds a completely blank page to the document.",
          when: "Use it when you need a new empty page at a specific location.",
          steps: [
            "Place the cursor where you want the new page.",
            "Open Insert.",
            "Click Blank Page.",
            "A new blank page will be inserted."
          ],
          practice: "Insert a blank page between two pages."
        },

        hi: {
          what: "Document में एक नई खाली page जोड़ता है।",
          when: "जब किसी specific location पर नई खाली page चाहिए तब इसका use करें।",
          steps: [
            "जहाँ नई page चाहिए वहाँ cursor रखें।",
            "Insert tab खोलें।",
            "Blank Page पर click करें।",
            "नई blank page insert हो जाएगी।"
          ],
          practice: "दो pages के बीच एक blank page insert करें।"
        }
      },


      {
        name: "Page Break",
        icon: "↵",

        en: {
          what: "Moves the following content to the next page.",
          when: "Use Page Break when you want a new section or content to start on a fresh page.",
          steps: [
            "Place the cursor where the new page should begin.",
            "Open Insert.",
            "Click Page Break.",
            "The content after the cursor moves to the next page."
          ],
          practice: "Create a report with each major section starting on a new page."
        },

        hi: {
          what: "Cursor के बाद आने वाले content को अगली page पर भेजता है।",
          when: "जब नया section या content नई page से शुरू करना हो तब Page Break का use करें।",
          steps: [
            "जहाँ से नई page शुरू करनी है वहाँ cursor रखें।",
            "Insert tab खोलें।",
            "Page Break पर click करें।",
            "Cursor के बाद का content अगली page पर चला जाएगा।"
          ],
          practice: "एक report बनाएं जिसमें हर major section नई page से शुरू हो।"
        }
      },


      {
        name: "Table",
        icon: "▦",

        en: {
          what: "Creates a table using rows and columns.",
          when: "Use a table when information needs to be arranged in rows and columns, such as student marks, attendance, price lists or schedules.",
          steps: [
            "Place the cursor where you want the table.",
            "Open the Insert tab.",
            "Click Table.",
            "Move your mouse over the grid to choose the number of rows and columns.",
            "Click to insert the table.",
            "Enter information into each cell."
          ],
          practice: "Create a 5-column student marks table."
        },

        hi: {
          what: "Rows और columns का उपयोग करके table बनाता है।",
          when: "Student marks, attendance, price list या schedule जैसी information को rows और columns में arrange करने के लिए Table का use करें।",
          steps: [
            "जहाँ table चाहिए वहाँ cursor रखें।",
            "Insert tab खोलें।",
            "Table पर click करें।",
            "Grid में rows और columns की संख्या चुनें।",
            "Click करके table insert करें।",
            "हर cell में information भरें।"
          ],
          practice: "5-column student marks table बनाएँ।"
        }
      },


      {
        name: "Pictures",
        icon: "🖼️",

        en: {
          what: "Inserts a picture from your computer or available picture source.",
          when: "Use Pictures when you need photographs, logos, illustrations or other images in a document.",
          steps: [
            "Place the cursor where the picture should appear.",
            "Open Insert.",
            "Click Pictures.",
            "Choose the picture source.",
            "Select the image file.",
            "Click Insert."
          ],
          practice: "Insert a picture into a school project."
        },

        hi: {
          what: "Computer या available source से picture document में insert करता है।",
          when: "Photo, logo, illustration या image document में जोड़ने के लिए Pictures का use करें।",
          steps: [
            "जहाँ picture चाहिए वहाँ cursor रखें।",
            "Insert tab खोलें।",
            "Pictures पर click करें।",
            "Picture source चुनें।",
            "Image file select करें।",
            "Insert पर click करें।"
          ],
          practice: "एक school project में picture insert करें।"
        }
      },


      {
        name: "Shapes",
        icon: "◯",

        en: {
          what: "Inserts shapes such as rectangles, circles, arrows and lines.",
          when: "Use Shapes for diagrams, flowcharts, labels, arrows and visual designs.",
          steps: [
            "Open Insert.",
            "Click Shapes.",
            "Choose a shape.",
            "Click and drag on the page to draw it.",
            "Use Shape Format options to change its color, outline or effects."
          ],
          practice: "Create a simple flowchart using shapes."
        },

        hi: {
          what: "Rectangle, circle, arrow और line जैसी shapes insert करता है।",
          when: "Diagram, flowchart, labels और visual designs बनाने के लिए Shapes का use करें।",
          steps: [
            "Insert tab खोलें।",
            "Shapes पर click करें।",
            "एक shape चुनें।",
            "Page पर click करके drag करें।",
            "Shape Format से color, outline और effects बदलें।"
          ],
          practice: "Shapes की मदद से एक simple flowchart बनाएँ।"
        }
      },


      {
        name: "Icons",
        icon: "⭐",

        en: {
          what: "Inserts simple icons into the document.",
          when: "Use Icons when you need clean visual symbols for instructions, presentations, notices or designs.",
          steps: [
            "Open Insert.",
            "Click Icons.",
            "Search or browse for an icon.",
            "Select the icon.",
            "Click Insert.",
            "Resize or format the icon as needed."
          ],
          practice: "Insert icons for phone, email and location."
        },

        hi: {
          what: "Document में simple icons insert करता है।",
          when: "Instructions, notices, designs या visual information के लिए Icons का use करें।",
          steps: [
            "Insert tab खोलें।",
            "Icons पर click करें।",
            "Icon search या browse करें।",
            "Icon select करें।",
            "Insert पर click करें।",
            "Icon का size और formatting बदलें।"
          ],
          practice: "Phone, email और location के icons insert करें।"
        }
      },


      {
        name: "3D Models",
        icon: "🧊",

        en: {
          what: "Inserts a three-dimensional model into the document.",
          when: "Use it when a 3D object helps explain a concept or makes a document more visual.",
          steps: [
            "Open Insert.",
            "Click 3D Models.",
            "Choose an available 3D model source.",
            "Select a model.",
            "Click Insert.",
            "Use the controls to rotate or resize the model."
          ],
          practice: "Insert a 3D model of an object and rotate it."
        },

        hi: {
          what: "Document में three-dimensional model insert करता है।",
          when: "जब किसी concept को 3D object से समझाना हो तब इसका use करें।",
          steps: [
            "Insert tab खोलें।",
            "3D Models पर click करें।",
            "Available source चुनें।",
            "एक model select करें।",
            "Insert पर click करें।",
            "Model को rotate या resize करें।"
          ],
          practice: "एक 3D model insert करके उसे rotate करें।"
        }
      },


      {
        name: "SmartArt",
        icon: "🔷",

        en: {
          what: "Creates visual diagrams for processes, lists, hierarchies and relationships.",
          when: "Use SmartArt when information is easier to understand as a diagram instead of plain text.",
          steps: [
            "Open Insert.",
            "Click SmartArt.",
            "Choose a category such as Process, Hierarchy or Cycle.",
            "Select a SmartArt layout.",
            "Click OK.",
            "Enter your information in the SmartArt text pane."
          ],
          practice: "Create a three-step process using SmartArt."
        },

        hi: {
          what: "Process, list, hierarchy और relationship की visual diagram बनाता है।",
          when: "जब information plain text की बजाय diagram में ज्यादा आसानी से समझ आए तब SmartArt का use करें।",
          steps: [
            "Insert tab खोलें।",
            "SmartArt पर click करें।",
            "Process, Hierarchy या Cycle जैसी category चुनें।",
            "एक layout चुनें।",
            "OK पर click करें।",
            "SmartArt text pane में information लिखें।"
          ],
          practice: "SmartArt से तीन steps का process बनाएँ।"
        }
      },


      {
        name: "Chart",
        icon: "📊",

        en: {
          what: "Creates a graphical chart from data.",
          when: "Use charts to visually compare numbers, trends or categories.",
          steps: [
            "Open Insert.",
            "Click Chart.",
            "Choose a chart type such as Column, Pie or Line.",
            "Click OK.",
            "Enter or replace the sample data in the spreadsheet.",
            "Close the spreadsheet when finished."
          ],
          practice: "Create a chart showing monthly sales."
        },

        hi: {
          what: "Data को graphical chart में बदलता है।",
          when: "Numbers, trends या categories को visually compare करने के लिए Chart का use करें।",
          steps: [
            "Insert tab खोलें।",
            "Chart पर click करें।",
            "Column, Pie या Line जैसा chart type चुनें।",
            "OK पर click करें।",
            "Spreadsheet में sample data को अपनी data से बदलें।",
            "काम पूरा होने पर spreadsheet बंद करें।"
          ],
          practice: "Monthly sales का chart बनाएँ।"
        }
      },


      {
        name: "Screenshot",
        icon: "📸",

        en: {
          what: "Inserts a screenshot or screen clipping into the document.",
          when: "Use it when you need to show a screen, software window or part of your computer screen.",
          steps: [
            "Open the window you want to capture.",
            "Go to Insert in Word.",
            "Click Screenshot.",
            "Choose an available window or Screen Clipping.",
            "Select the required area if using Screen Clipping.",
            "The screenshot will be inserted."
          ],
          practice: "Insert a screenshot of another application."
        },

        hi: {
          what: "Computer screen या किसी window का screenshot document में insert करता है।",
          when: "Software window या screen का कोई हिस्सा document में दिखाने के लिए इसका use करें।",
          steps: [
            "जिस window का screenshot लेना है उसे खोलें।",
            "Word में Insert tab खोलें।",
            "Screenshot पर click करें।",
            "Window या Screen Clipping चुनें।",
            "Screen Clipping में required area select करें।",
            "Screenshot document में insert हो जाएगा।"
          ],
          practice: "किसी दूसरे application का screenshot Word में insert करें।"
        }
      },


      {
        name: "Get Add-ins",
        icon: "➕",

        en: {
          what: "Opens the add-ins area where additional Word tools can be obtained.",
          when: "Use it when you need an additional feature that is not available as a standard Word command.",
          steps: [
            "Open Insert.",
            "Click Get Add-ins.",
            "Search for the required add-in.",
            "Review its details and permissions.",
            "Choose Add if you want to install it."
          ],
          practice: "Explore the available add-ins without installing one."
        },

        hi: {
          what: "Additional Word tools और features पाने के लिए add-ins area खोलता है।",
          when: "जब Word में उपलब्ध standard commands के अलावा कोई extra feature चाहिए तब इसका use करें।",
          steps: [
            "Insert tab खोलें।",
            "Get Add-ins पर click करें।",
            "Required add-in search करें।",
            "उसकी details और permissions देखें।",
            "जरूरत हो तो Add चुनें।"
          ],
          practice: "Available add-ins को explore करें, बिना कोई install किए।"
        }
      },


      {
        name: "My Add-ins",
        icon: "🧩",

        en: {
          what: "Shows add-ins that are already available for your Word account.",
          when: "Use it when you want to open or manage an installed add-in.",
          steps: [
            "Open Insert.",
            "Click My Add-ins.",
            "Review the available add-ins.",
            "Select an add-in to use it."
          ],
          practice: "Open My Add-ins and review the available list."
        },

        hi: {
          what: "आपके Word account में available installed add-ins दिखाता है।",
          when: "Installed add-in को open या manage करने के लिए इसका use करें।",
          steps: [
            "Insert tab खोलें।",
            "My Add-ins पर click करें।",
            "Available add-ins की list देखें।",
            "किसी add-in को select करके use करें।"
          ],
          practice: "My Add-ins खोलकर available list देखें।"
        }
      },


      {
        name: "Wikipedia",
        icon: "W",

        en: {
          what: "Provides access to Wikipedia information through the available Word add-in.",
          when: "Use it when researching information that needs to be brought into your document.",
          steps: [
            "Open Insert.",
            "Open the Wikipedia/add-in option if available.",
            "Search for a topic.",
            "Review the information.",
            "Insert or copy appropriate information into your document while following source and copyright rules."
          ],
          practice: "Search for a simple topic and review the available information."
        },

        hi: {
          what: "Available Word add-in के माध्यम से Wikipedia information तक access देता है।",
          when: "जब किसी topic की information research करके document में लानी हो तब इसका use करें।",
          steps: [
            "Insert tab खोलें।",
            "Wikipedia/add-in option खोलें।",
            "Topic search करें।",
            "Information को review करें।",
            "Appropriate information को document में insert या copy करें और source/copyright rules का ध्यान रखें।"
          ],
          practice: "एक simple topic search करके information देखें।"
        }
      },


      {
        name: "Online Videos",
        icon: "▶️",

        en: {
          what: "Allows an online video to be added to a document.",
          when: "Use it when a video helps explain the subject of the document.",
          steps: [
            "Open Insert.",
            "Click Online Videos.",
            "Search for or enter the video source if supported.",
            "Select the video.",
            "Insert it into the document."
          ],
          practice: "Insert an educational online video if your Word version supports it."
        },

        hi: {
          what: "Document में online video जोड़ने की सुविधा देता है।",
          when: "जब video document के subject को समझाने में मदद करता हो तब इसका use करें।",
          steps: [
            "Insert tab खोलें।",
            "Online Videos पर click करें।",
            "Supported source में video search या link दें।",
            "Video select करें।",
            "Document में insert करें।"
          ],
          practice: "अगर आपका Word version support करता है तो एक educational video insert करें।"
        }
      },


      {
        name: "Link",
        icon: "🔗",

        en: {
          what: "Creates a clickable hyperlink to a webpage, file, email address or another location.",
          when: "Use Link when you want readers to open related information quickly.",
          steps: [
            "Select the text that should become clickable.",
            "Open Insert.",
            "Click Link.",
            "Enter or select the destination.",
            "Click OK or Insert."
          ],
          practice: "Create a hyperlink to a website."
        },

        hi: {
          what: "Webpage, file, email address या दूसरी location के लिए clickable hyperlink बनाता है।",
          when: "Related information को जल्दी open कराने के लिए Link का use करें।",
          steps: [
            "जिस text को clickable बनाना है उसे select करें।",
            "Insert tab खोलें।",
            "Link पर click करें।",
            "Destination enter या select करें।",
            "OK या Insert पर click करें।"
          ],
          practice: "एक website का hyperlink बनाएँ।"
        }
      },


      {
        name: "Bookmark",
        icon: "🔖",

        en: {
          what: "Marks a specific location in a document so you can return to it quickly.",
          when: "Use Bookmark in long documents when you need quick navigation to important locations.",
          steps: [
            "Place the cursor at the location you want to mark.",
            "Open Insert.",
            "Click Bookmark.",
            "Enter a bookmark name.",
            "Click Add.",
            "Use the Bookmark dialog later to jump to the saved location."
          ],
          practice: "Bookmark the introduction of a long document."
        },

        hi: {
          what: "Document की किसी specific location को mark करता है ताकि बाद में जल्दी वहाँ जा सकें।",
          when: "Long document में important locations पर जल्दी जाने के लिए Bookmark का use करें।",
          steps: [
            "जिस location को mark करना है वहाँ cursor रखें।",
            "Insert tab खोलें।",
            "Bookmark पर click करें।",
            "Bookmark का नाम लिखें।",
            "Add पर click करें।",
            "बाद में Bookmark dialog से उस location पर जाएँ।"
          ],
          practice: "एक long document के Introduction को bookmark करें।"
        }
      },


      {
        name: "Cross-reference",
        icon: "↔",

        en: {
          what: "Creates a reference to another part of the same document.",
          when: "Use it when you need to refer readers to a heading, figure, table or other numbered item.",
          steps: [
            "Place the cursor where the reference should appear.",
            "Open Insert.",
            "Click Cross-reference.",
            "Choose the reference type.",
            "Select the item you want to reference.",
            "Click Insert."
          ],
          practice: "Create a cross-reference to a heading."
        },

        hi: {
          what: "Same document के किसी दूसरे section, heading, figure या table का reference बनाता है।",
          when: "Reader को document के दूसरे part पर भेजने के लिए इसका use करें।",
          steps: [
            "जहाँ reference चाहिए वहाँ cursor रखें।",
            "Insert tab खोलें।",
            "Cross-reference पर click करें।",
            "Reference type चुनें।",
            "जिस item का reference देना है उसे select करें।",
            "Insert पर click करें।"
          ],
          practice: "किसी heading का cross-reference बनाएँ।"
        }
      },


      {
        name: "Comment",
        icon: "💬",

        en: {
          what: "Adds a comment or note to a document.",
          when: "Use comments for feedback, questions, reminders or review notes.",
          steps: [
            "Select the text you want to comment on.",
            "Open Insert.",
            "Click Comment.",
            "Type your comment.",
            "Submit or post the comment."
          ],
          practice: "Add a comment asking someone to check a paragraph."
        },

        hi: {
          what: "Document में comment या note जोड़ता है।",
          when: "Feedback, question, reminder या review note के लिए Comment का use करें।",
          steps: [
            "जिस text पर comment करना है उसे select करें।",
            "Insert tab खोलें।",
            "Comment पर click करें।",
            "अपना comment लिखें।",
            "Comment को submit या post करें।"
          ],
          practice: "किसी paragraph को check करने के लिए comment लिखें।"
        }
      },


      {
        name: "Header",
        icon: "H",

        en: {
          what: "Adds content to the top area of pages.",
          when: "Use Headers for document titles, company names, section names or other repeated information.",
          steps: [
            "Open Insert.",
            "Click Header.",
            "Choose a header style.",
            "Type your header information.",
            "Click Close Header and Footer."
          ],
          practice: "Add your organization name to the header."
        },

        hi: {
          what: "हर page के ऊपर वाले area में content जोड़ता है।",
          when: "Document title, company name या repeated information के लिए Header का use करें।",
          steps: [
            "Insert tab खोलें।",
            "Header पर click करें।",
            "Header style चुनें।",
            "अपनी information लिखें।",
            "Close Header and Footer पर click करें।"
          ],
          practice: "Header में organization का नाम जोड़ें।"
        }
      },


      {
        name: "Footer",
        icon: "F",

        en: {
          what: "Adds content to the bottom area of pages.",
          when: "Use Footers for page information, document names, copyright text or other repeated information.",
          steps: [
            "Open Insert.",
            "Click Footer.",
            "Choose a footer style.",
            "Enter the required information.",
            "Click Close Header and Footer."
          ],
          practice: "Add a document name to the footer."
        },

        hi: {
          what: "हर page के नीचे वाले area में content जोड़ता है।",
          when: "Page information, document name या repeated information के लिए Footer का use करें।",
          steps: [
            "Insert tab खोलें।",
            "Footer पर click करें।",
            "Footer style चुनें।",
            "Required information लिखें।",
            "Close Header and Footer पर click करें।"
          ],
          practice: "Footer में document का नाम जोड़ें।"
        }
      },


      {
        name: "Page Number",
        icon: "#",

        en: {
          what: "Adds page numbers to document pages.",
          when: "Use it for reports, books, assignments and other multi-page documents.",
          steps: [
            "Open Insert.",
            "Click Page Number.",
            "Choose where the number should appear.",
            "Select a number style.",
            "Word adds page numbers to the document."
          ],
          practice: "Add page numbers at the bottom of every page."
        },

        hi: {
          what: "Document के pages पर page numbers जोड़ता है।",
          when: "Reports, books, assignments और multi-page documents में इसका use करें।",
          steps: [
            "Insert tab खोलें।",
            "Page Number पर click करें।",
            "Number की location चुनें।",
            "Number style चुनें।",
            "Word pages पर numbers add कर देगा।"
          ],
          practice: "हर page के नीचे page number लगाएँ।"
        }
      },


      {
        name: "Text Box",
        icon: "▣",

        en: {
          what: "Creates a movable box that can contain text.",
          when: "Use Text Box when text needs to be placed separately from the normal paragraph flow.",
          steps: [
            "Open Insert.",
            "Click Text Box.",
            "Choose a built-in text box or draw one.",
            "Type your text.",
            "Move or resize the box as needed."
          ],
          practice: "Create a notice using a text box."
        },

        hi: {
          what: "एक movable box बनाता है जिसमें text लिखा जा सकता है।",
          when: "जब text को normal paragraph से अलग position पर रखना हो तब Text Box का use करें।",
          steps: [
            "Insert tab खोलें।",
            "Text Box पर click करें।",
            "Built-in box चुनें या खुद draw करें।",
            "Text लिखें।",
            "Box को move या resize करें।"
          ],
          practice: "Text Box का use करके एक notice बनाएँ।"
        }
      },


      {
        name: "Quick Parts",
        icon: "⚡",

        en: {
          what: "Stores and inserts reusable pieces of content such as text, fields or document properties.",
          when: "Use it when the same content needs to be inserted repeatedly.",
          steps: [
            "Create and select the content you want to reuse.",
            "Open Insert.",
            "Click Quick Parts.",
            "Choose Save Selection to Quick Part Gallery if creating a new reusable item.",
            "Give it a name and save it.",
            "Later, use Quick Parts to insert it."
          ],
          practice: "Save a frequently used office address as a Quick Part."
        },

        hi: {
          what: "Reusable text, fields या document properties को save और insert करने में मदद करता है।",
          when: "जब same content बार-बार insert करना हो तब Quick Parts का use करें।",
          steps: [
            "जिस content को reuse करना है उसे select करें।",
            "Insert tab खोलें।",
            "Quick Parts पर click करें।",
            "Save Selection to Quick Part Gallery चुनें।",
            "नाम देकर save करें।",
            "बाद में Quick Parts से उसे insert करें।"
          ],
          practice: "Frequently used office address को Quick Part के रूप में save करें।"
        }
      },


      {
        name: "WordArt",
        icon: "A",

        en: {
          what: "Creates decorative and stylized text.",
          when: "Use WordArt for posters, titles, invitations and attractive headings.",
          steps: [
            "Open Insert.",
            "Click WordArt.",
            "Choose a style.",
            "Type your text.",
            "Use Shape Format options to customize it."
          ],
          practice: "Create an attractive title using WordArt."
        },

        hi: {
          what: "Decorative और stylish text बनाता है।",
          when: "Poster, invitation, title या attractive heading के लिए WordArt का use करें।",
          steps: [
            "Insert tab खोलें।",
            "WordArt पर click करें।",
            "एक style चुनें।",
            "अपना text लिखें।",
            "Shape Format से उसे customize करें।"
          ],
          practice: "WordArt का use करके attractive title बनाएँ।"
        }
      },


      {
        name: "Drop Cap",
        icon: "D",

        en: {
          what: "Makes the first letter of a paragraph large and decorative.",
          when: "Use Drop Cap for magazine-style articles, stories and decorative documents.",
          steps: [
            "Place the cursor in the paragraph.",
            "Open Insert.",
            "Click Drop Cap.",
            "Choose Dropped or In Margin.",
            "The first letter becomes larger."
          ],
          practice: "Apply a Drop Cap to the first paragraph of an article."
        },

        hi: {
          what: "Paragraph के पहले letter को बड़ा और decorative बनाता है।",
          when: "Magazine-style article, story या decorative document के लिए इसका use करें।",
          steps: [
            "Paragraph में cursor रखें।",
            "Insert tab खोलें।",
            "Drop Cap पर click करें।",
            "Dropped या In Margin चुनें।",
            "पहला letter बड़ा हो जाएगा।"
          ],
          practice: "Article के first paragraph पर Drop Cap लगाएँ।"
        }
      },


      {
        name: "Signature Line",
        icon: "✍️",

        en: {
          what: "Adds a signature line for a person to sign a document.",
          when: "Use it for forms, official documents, approvals and agreements.",
          steps: [
            "Place the cursor where the signature should appear.",
            "Open Insert.",
            "Click Signature Line.",
            "Enter the signer details if required.",
            "Click OK.",
            "The signature line is inserted."
          ],
          practice: "Add a signature line for a manager."
        },

        hi: {
          what: "Document में signature करने के लिए signature line जोड़ता है।",
          when: "Forms, official documents, approvals और agreements में इसका use करें।",
          steps: [
            "जहाँ signature चाहिए वहाँ cursor रखें।",
            "Insert tab खोलें।",
            "Signature Line पर click करें।",
            "Signer की details भरें।",
            "OK पर click करें।",
            "Signature line insert हो जाएगी।"
          ],
          practice: "Manager के लिए signature line बनाएँ।"
        }
      },


      {
        name: "Date & Time",
        icon: "📅",

        en: {
          what: "Inserts the current date and/or time into the document.",
          when: "Use it for letters, forms, reports and documents that need a date or time.",
          steps: [
            "Place the cursor where the date or time should appear.",
            "Open Insert.",
            "Click Date & Time.",
            "Choose the required format.",
            "Click OK."
          ],
          practice: "Insert today's date into a formal letter."
        },

        hi: {
          what: "Document में current date और/या time insert करता है।",
          when: "Letter, form, report या किसी document में date/time चाहिए तब इसका use करें।",
          steps: [
            "जहाँ date/time चाहिए वहाँ cursor रखें।",
            "Insert tab खोलें।",
            "Date & Time पर click करें।",
            "Required format चुनें।",
            "OK पर click करें।"
          ],
          practice: "एक formal letter में आज की date insert करें।"
        }
      },


      {
        name: "Object",
        icon: "▣",

        en: {
          what: "Embeds or inserts another file or object into the document.",
          when: "Use it when you need to include content from another file, such as an Excel worksheet or another document.",
          steps: [
            "Place the cursor where the object should appear.",
            "Open Insert.",
            "Click Object.",
            "Choose Create from File or another appropriate option.",
            "Browse and select the file.",
            "Click OK."
          ],
          practice: "Insert an Excel worksheet as an object."
        },

        hi: {
          what: "किसी दूसरे file या object को document में embed या insert करता है।",
          when: "Excel worksheet या दूसरे document जैसी file को current document में जोड़ने के लिए इसका use करें।",
          steps: [
            "जहाँ object चाहिए वहाँ cursor रखें।",
            "Insert tab खोलें।",
            "Object पर click करें।",
            "Create from File या appropriate option चुनें।",
            "File browse करके select करें।",
            "OK पर click करें।"
          ],
          practice: "एक Excel worksheet को object के रूप में insert करें।"
        }
      },


      {
        name: "Equation",
        icon: "π",

        en: {
          what: "Inserts mathematical equations and formulas.",
          when: "Use Equation for mathematics, science, engineering and other technical documents.",
          steps: [
            "Place the cursor where the equation should appear.",
            "Open Insert.",
            "Click Equation.",
            "Choose a built-in equation or create your own.",
            "Use the Equation tools to enter symbols and structures."
          ],
          practice: "Insert a simple equation such as x² + y² = z²."
        },

        hi: {
          what: "Mathematical equations और formulas insert करने के लिए use होता है।",
          when: "Maths, science, engineering और technical documents के लिए Equation का use करें।",
          steps: [
            "जहाँ equation चाहिए वहाँ cursor रखें।",
            "Insert tab खोलें।",
            "Equation पर click करें।",
            "Built-in equation चुनें या अपनी equation बनाएं।",
            "Equation tools से symbols और structures enter करें।"
          ],
          practice: "x² + y² = z² जैसी simple equation insert करें।"
        }
      },


      {
        name: "Symbol",
        icon: "Ω",

        en: {
          what: "Inserts special characters and symbols that may not be available directly on the keyboard.",
          when: "Use it for symbols such as ©, ®, €, ±, Ω and other special characters.",
          steps: [
            "Place the cursor where the symbol should appear.",
            "Open Insert.",
            "Click Symbol.",
            "Choose a symbol from the list.",
            "Click Insert."
          ],
          practice: "Insert ©, ₹, ± and Ω into a document."
        },

        hi: {
          what: "ऐसे special characters और symbols insert करता है जो keyboard पर सीधे उपलब्ध नहीं होते।",
          when: "©, ®, €, ₹, ±, Ω जैसे symbols के लिए इसका use करें।",
          steps: [
            "जहाँ symbol चाहिए वहाँ cursor रखें।",
            "Insert tab खोलें।",
            "Symbol पर click करें।",
            "List से symbol चुनें।",
            "Insert पर click करें।"
          ],
          practice: "Document में ©, ₹, ± और Ω symbols insert करें।"
        }
      }

    ]
  },


  // ============================================================
  // PAGE LAYOUT TAB
  // ============================================================

  "Page Layout": {
    image: "Page Layout(1).png",

    tools: [

      {
        name: "Themes",
        icon: "🎨",

        en: {
          what: "Applies a coordinated design theme to the document.",
          when: "Use Themes when you want the document to have a consistent professional design.",
          steps: [
            "Open Page Layout.",
            "Click Themes.",
            "Browse the available themes.",
            "Click a theme to apply it.",
            "The document's overall fonts, colors and effects may change."
          ],
          practice: "Try two different themes and compare the document."
        },

        hi: {
          what: "पूरे document पर coordinated design theme apply करता है।",
          when: "Professional और consistent design बनाने के लिए Themes का use करें।",
          steps: [
            "Page Layout tab खोलें।",
            "Themes पर click करें।",
            "Available themes देखें।",
            "किसी theme पर click करें।",
            "Document के fonts, colors और effects बदल सकते हैं।"
          ],
          practice: "दो अलग themes apply करके compare करें।"
        }
      },


      {
        name: "Colors",
        icon: "🎨",

        en: {
          what: "Changes the theme color set used throughout the document.",
          when: "Use Colors when you want to change the overall color combination.",
          steps: [
            "Open Page Layout.",
            "Click Colors.",
            "Choose a color set.",
            "The theme colors will update throughout the document."
          ],
          practice: "Try a different theme color set."
        },

        hi: {
          what: "पूरे document में इस्तेमाल होने वाले theme colors बदलता है।",
          when: "Document की overall color combination बदलने के लिए इसका use करें।",
          steps: [
            "Page Layout tab खोलें।",
            "Colors पर click करें।",
            "एक color set चुनें।",
            "Document के theme colors update हो जाएँगे।"
          ],
          practice: "एक अलग theme color set try करें।"
        }
      },


      {
        name: "Fonts",
        icon: "Aa",

        en: {
          what: "Changes the theme font combination used in the document.",
          when: "Use it when you want headings and body text to use a coordinated font combination.",
          steps: [
            "Open Page Layout.",
            "Click Fonts.",
            "Choose a font combination.",
            "The document's theme fonts will update."
          ],
          practice: "Try another theme font combination."
        },

        hi: {
          what: "Document में इस्तेमाल होने वाले theme fonts की combination बदलता है।",
          when: "Heading और body text के fonts को coordinated तरीके से बदलने के लिए इसका use करें।",
          steps: [
            "Page Layout tab खोलें।",
            "Fonts पर click करें।",
            "एक font combination चुनें।",
            "Document के theme fonts बदल जाएँगे।"
          ],
          practice: "एक अलग theme font combination try करें।"
        }
      },


      {
        name: "Effects",
        icon: "✨",

        en: {
          what: "Changes the visual effect set used by the document theme.",
          when: "Use it when you want shapes and graphical objects to have a different coordinated visual style.",
          steps: [
            "Open Page Layout.",
            "Click Effects.",
            "Choose an effect set.",
            "The visual effects of supported objects will change."
          ],
          practice: "Apply a different effect set to a document containing shapes."
        },

        hi: {
          what: "Document theme में इस्तेमाल होने वाले visual effects बदलता है।",
          when: "Shapes और graphical objects का coordinated visual style बदलने के लिए इसका use करें।",
          steps: [
            "Page Layout tab खोलें।",
            "Effects पर click करें।",
            "एक effect set चुनें।",
            "Supported objects के visual effects बदल जाएँगे।"
          ],
          practice: "Shapes वाले document पर अलग effect set लगाएँ।"
        }
      },


      {
        name: "Margins",
        icon: "▣",

        en: {
          what: "Controls the blank space around the edges of a page.",
          when: "Use Margins when you need more or less writing space or a specific document format.",
          steps: [
            "Open Page Layout.",
            "Click Margins.",
            "Choose Normal, Narrow, Wide or another preset.",
            "The page margins change."
          ],
          practice: "Try Normal and Narrow margins and compare them."
        },

        hi: {
          what: "Page के चारों तरफ की खाली जगह यानी margins को control करता है।",
          when: "Writing space या specific document format बदलने के लिए Margins का use करें।",
          steps: [
            "Page Layout tab खोलें।",
            "Margins पर click करें।",
            "Normal, Narrow, Wide या कोई preset चुनें।",
            "Page margins बदल जाएँगे।"
          ],
          practice: "Normal और Narrow margins apply करके compare करें।"
        }
      },


      {
        name: "Orientation",
        icon: "↔",

        en: {
          what: "Changes the page direction between Portrait and Landscape.",
          when: "Use Portrait for normal documents and Landscape when the page needs more horizontal space.",
          steps: [
            "Open Page Layout.",
            "Click Orientation.",
            "Choose Portrait or Landscape.",
            "The page orientation changes."
          ],
          practice: "Change one document from Portrait to Landscape."
        },

        hi: {
          what: "Page की direction Portrait या Landscape में बदलता है।",
          when: "Normal document के लिए Portrait और ज्यादा horizontal space के लिए Landscape use करें।",
          steps: [
            "Page Layout tab खोलें।",
            "Orientation पर click करें।",
            "Portrait या Landscape चुनें।",
            "Page orientation बदल जाएगी।"
          ],
          practice: "एक document को Portrait से Landscape में बदलें।"
        }
      },


      {
        name: "Size",
        icon: "A4",

        en: {
          what: "Changes the paper size used for the document.",
          when: "Use it when printing on a specific paper size such as A4, Letter or Legal.",
          steps: [
            "Open Page Layout.",
            "Click Size.",
            "Choose the required paper size.",
            "The document page size changes."
          ],
          practice: "Set the document to A4 size."
        },

        hi: {
          what: "Document का paper size बदलता है।",
          when: "A4, Letter या Legal जैसे specific paper size पर document बनाना हो तब इसका use करें।",
          steps: [
            "Page Layout tab खोलें।",
            "Size पर click करें।",
            "Required paper size चुनें।",
            "Document का page size बदल जाएगा।"
          ],
          practice: "Document को A4 size पर set करें।"
        }
      },


      {
        name: "Columns",
        icon: "▥",

        en: {
          what: "Divides text into multiple vertical columns.",
          when: "Use Columns for newsletters, newspapers, brochures and magazine-style documents.",
          steps: [
            "Select the text or place the cursor in the section.",
            "Open Page Layout.",
            "Click Columns.",
            "Choose One, Two, Three or another option.",
            "The text will flow into columns."
          ],
          practice: "Create a two-column newsletter."
        },

        hi: {
          what: "Text को multiple vertical columns में divide करता है।",
          when: "Newsletter, newspaper, brochure या magazine-style document के लिए इसका use करें।",
          steps: [
            "Text select करें या section में cursor रखें।",
            "Page Layout tab खोलें।",
            "Columns पर click करें।",
            "One, Two, Three आदि चुनें।",
            "Text columns में flow होगा।"
          ],
          practice: "एक two-column newsletter बनाएँ।"
        }
      },


      {
        name: "Breaks",
        icon: "↵",

        en: {
          what: "Adds page, section or column breaks to control document layout.",
          when: "Use Breaks when different sections need different layouts, headers, footers, columns or page settings.",
          steps: [
            "Place the cursor where the break should occur.",
            "Open Page Layout.",
            "Click Breaks.",
            "Choose a Page Break or an appropriate Section Break.",
            "Word creates the selected break."
          ],
          practice: "Create two sections with different page layouts."
        },

        hi: {
          what: "Page, section या column breaks जोड़कर document layout control करता है।",
          when: "जब अलग sections में अलग layout, header, footer, columns या page settings चाहिए हों तब Breaks का use करें।",
          steps: [
            "जहाँ break चाहिए वहाँ cursor रखें।",
            "Page Layout tab खोलें।",
            "Breaks पर click करें।",
            "Page Break या appropriate Section Break चुनें।",
            "Selected break create हो जाएगा।"
          ],
          practice: "दो अलग sections बनाकर उनके layouts अलग करें।"
        }
      },


      {
        name: "Line Numbers",
        icon: "123",

        en: {
          what: "Adds numbers beside lines of text.",
          when: "Use Line Numbers for legal documents, scripts, technical documents or documents that need line references.",
          steps: [
            "Open Page Layout.",
            "Click Line Numbers.",
            "Choose Continuous, Restart Each Page, Restart Each Section or another option.",
            "Line numbers will appear."
          ],
          practice: "Add continuous line numbers to a document."
        },

        hi: {
          what: "Document की lines के साथ line numbers दिखाता है।",
          when: "Legal, script, technical या line reference वाले documents में इसका use करें।",
          steps: [
            "Page Layout tab खोलें।",
            "Line Numbers पर click करें।",
            "Continuous या Restart Each Page जैसे option चुनें।",
            "Lines के साथ numbers दिखाई देंगे।"
          ],
          practice: "Document में continuous line numbers लगाएँ।"
        }
      },


      {
        name: "Hyphenation",
        icon: "÷",

        en: {
          what: "Controls how long words are divided between lines using hyphens.",
          when: "Use it when justified text has awkward spaces and you want better line breaking.",
          steps: [
            "Open Page Layout.",
            "Click Hyphenation.",
            "Choose None, Automatic or Manual.",
            "Word adjusts word breaks according to the selected setting."
          ],
          practice: "Try Automatic Hyphenation on a justified paragraph."
        },

        hi: {
          what: "Long words को line के बीच hyphen के साथ break करने की setting control करता है।",
          when: "Justified text में ज्यादा खाली spaces होने पर बेहतर line breaking के लिए इसका use करें।",
          steps: [
            "Page Layout tab खोलें।",
            "Hyphenation पर click करें।",
            "None, Automatic या Manual चुनें।",
            "Word selected setting के अनुसार words break करेगा।"
          ],
          practice: "Justified paragraph पर Automatic Hyphenation try करें।"
        }
      },


      {
        name: "Watermark",
        icon: "💧",

        en: {
          what: "Places faint text or an image behind the main document content.",
          when: "Use Watermark for labels such as Draft, Confidential, Sample or for branding.",
          steps: [
            "Open the Page Layout tab.",
            "Click Watermark.",
            "Choose a built-in watermark such as Draft or Confidential.",
            "For a custom watermark, choose Custom Watermark.",
            "Choose Text watermark or Picture watermark.",
            "Enter the text or select the picture.",
            "Choose the desired layout and settings.",
            "Click Apply or OK."
          ],
          practice: "Add a 'DRAFT' watermark to a document."
        },

        hi: {
          what: "Main document content के पीछे हल्का text या image लगाता है।",
          when: "Draft, Confidential, Sample या branding दिखाने के लिए Watermark का use करें।",
          steps: [
            "Page Layout tab खोलें।",
            "Watermark पर click करें।",
            "Draft या Confidential जैसा built-in watermark चुनें।",
            "Custom watermark के लिए Custom Watermark चुनें।",
            "Text watermark या Picture watermark चुनें।",
            "Text लिखें या picture select करें।",
            "Layout और settings चुनें।",
            "Apply या OK पर click करें।"
          ],
          practice: "Document पर 'DRAFT' watermark लगाएँ।"
        }
      },


      {
        name: "Page Color",
        icon: "🟦",

        en: {
          what: "Changes the background color of the document page.",
          when: "Use it for certificates, invitations, posters or documents where a colored page background is appropriate.",
          steps: [
            "Open Page Layout.",
            "Click Page Color.",
            "Choose a color.",
            "The page background changes to the selected color."
          ],
          practice: "Apply a light background color to a document."
        },

        hi: {
          what: "Document page का background color बदलता है।",
          when: "Certificate, invitation, poster या decorative document में इसका use करें।",
          steps: [
            "Page Layout tab खोलें।",
            "Page Color पर click करें।",
            "एक color चुनें।",
            "Page background का color बदल जाएगा।"
          ],
          practice: "Document पर light background color लगाएँ।"
        }
      },


      {
        name: "Page Borders",
        icon: "▣",

        en: {
          what: "Adds a border around the page.",
          when: "Use Page Borders for certificates, invitations, decorative documents and formal pages.",
          steps: [
            "Open Page Layout.",
            "Click Page Borders.",
            "Choose the border setting.",
            "Select line style, color and width if required.",
            "Choose whether it applies to the whole document or a section.",
            "Click OK."
          ],
          practice: "Add a decorative border to a certificate."
        },

        hi: {
          what: "पूरे page के चारों तरफ border लगाता है।",
          when: "Certificate, invitation, decorative या formal page के लिए Page Borders का use करें।",
          steps: [
            "Page Layout tab खोलें।",
            "Page Borders पर click करें।",
            "Border setting चुनें।",
            "Line style, color और width चुनें।",
            "Choose करें कि पूरे document या section पर apply करना है।",
            "OK पर click करें।"
          ],
          practice: "Certificate पर decorative page border लगाएँ।"
        }
      },


      {
        name: "Indent",
        icon: "↔",

        en: {
          what: "Controls how far a paragraph is moved from the left and right margins.",
          when: "Use Indent when you need a paragraph to start farther inside the page.",
          steps: [
            "Select the paragraph.",
            "Open Page Layout.",
            "Find the Indent settings.",
            "Increase Left or Right indent as required.",
            "The paragraph position changes."
          ],
          practice: "Give a paragraph a 1 cm left indent."
        },

        hi: {
          what: "Paragraph को left और right margins से कितनी दूरी पर रखना है यह control करता है।",
          when: "Paragraph को page के अंदर shift करने के लिए Indent का use करें।",
          steps: [
            "Paragraph select करें।",
            "Page Layout tab खोलें।",
            "Indent settings खोजें।",
            "Left या Right indent बढ़ाएँ।",
            "Paragraph की position बदल जाएगी।"
          ],
          practice: "एक paragraph को 1 cm left indent दें।"
        }
      },


      {
        name: "Spacing",
        icon: "↕",

        en: {
          what: "Controls the amount of space before and after a paragraph.",
          when: "Use Spacing when you want better separation between paragraphs.",
          steps: [
            "Select the paragraph or paragraphs.",
            "Open Page Layout.",
            "Find the Spacing Before and After settings.",
            "Enter the required values.",
            "The paragraph spacing changes."
          ],
          practice: "Add 10 pt spacing after a paragraph."
        },

        hi: {
          what: "Paragraph के पहले और बाद की spacing control करता है।",
          when: "Paragraphs के बीच बेहतर separation के लिए Spacing का use करें।",
          steps: [
            "Paragraph select करें।",
            "Page Layout tab खोलें।",
            "Spacing Before और After settings खोजें।",
            "Required values enter करें।",
            "Paragraph spacing बदल जाएगी।"
          ],
          practice: "Paragraph के बाद 10 pt spacing लगाएँ।"
        }
      },


      {
        name: "Position",
        icon: "▣",

        en: {
          what: "Controls the position of a selected object on the page.",
          when: "Use Position when you need to place an image or object in a specific location.",
          steps: [
            "Select the object.",
            "Open Page Layout.",
            "Click Position.",
            "Choose a preset position.",
            "The object moves to the selected location."
          ],
          practice: "Place an image at the top-right of the page."
        },

        hi: {
          what: "Selected object की page पर position control करता है।",
          when: "Image या object को specific location पर रखने के लिए Position का use करें।",
          steps: [
            "Object select करें।",
            "Page Layout tab खोलें।",
            "Position पर click करें।",
            "एक preset position चुनें।",
            "Object selected location पर चला जाएगा।"
          ],
          practice: "एक image को page के top-right में रखें।"
        }
      },


      {
        name: "Wrap Text",
        icon: "↪",

        en: {
          what: "Controls how text flows around an object such as an image or shape.",
          when: "Use Wrap Text when you want text to appear beside, around or behind an object.",
          steps: [
            "Select the image or object.",
            "Open Page Layout.",
            "Click Wrap Text.",
            "Choose Square, Tight, Behind Text, In Front of Text or another option.",
            "The text will flow according to the selected setting."
          ],
          practice: "Insert an image and apply Square text wrapping."
        },

        hi: {
          what: "Image या shape जैसे object के आसपास text कैसे flow करेगा यह control करता है।",
          when: "Text को image के side, around, behind या in front दिखाने के लिए Wrap Text का use करें।",
          steps: [
            "Image या object select करें।",
            "Page Layout tab खोलें।",
            "Wrap Text पर click करें।",
            "Square, Tight, Behind Text या In Front of Text चुनें।",
            "Text selected setting के अनुसार flow करेगा।"
          ],
          practice: "एक image insert करके Square wrapping लगाएँ।"
        }
      },


      {
        name: "Bring Forward",
        icon: "⬆",

        en: {
          what: "Moves a selected object in front of another overlapping object.",
          when: "Use it when an object is hidden behind another object.",
          steps: [
            "Select the object.",
            "Open Page Layout.",
            "Click Bring Forward.",
            "Choose Bring Forward or Bring to Front as required."
          ],
          practice: "Place two shapes on top of each other and bring one forward."
        },

        hi: {
          what: "Selected object को दूसरे overlapping object के सामने लाता है।",
          when: "जब कोई object दूसरे object के पीछे छिप गया हो तब इसका use करें।",
          steps: [
            "Object select करें।",
            "Page Layout tab खोलें।",
            "Bring Forward पर click करें।",
            "Bring Forward या Bring to Front चुनें।"
          ],
          practice: "दो overlapping shapes बनाकर एक को सामने लाएँ।"
        }
      },


      {
        name: "Send Backward",
        icon: "⬇",

        en: {
          what: "Moves a selected object behind another overlapping object.",
          when: "Use it when an object needs to appear behind another object.",
          steps: [
            "Select the object.",
            "Open Page Layout.",
            "Click Send Backward.",
            "Choose Send Backward or Send to Back."
          ],
          practice: "Send one shape behind another."
        },

        hi: {
          what: "Selected object को दूसरे object के पीछे भेजता है।",
          when: "जब object को पीछे रखना हो तब Send Backward का use करें।",
          steps: [
            "Object select करें।",
            "Page Layout tab खोलें।",
            "Send Backward पर click करें।",
            "Send Backward या Send to Back चुनें।"
          ],
          practice: "एक shape को दूसरी shape के पीछे भेजें।"
        }
      },


      {
        name: "Selection Pane",
        icon: "☰",

        en: {
          what: "Shows a list of objects in the document and helps manage their visibility and selection.",
          when: "Use it when a page contains many overlapping shapes or images.",
          steps: [
            "Open Page Layout.",
            "Click Selection Pane.",
            "A list of objects appears.",
            "Select an object from the list.",
            "Use the visibility controls or rename objects if needed."
          ],
          practice: "Create three shapes and manage them using Selection Pane."
        },

        hi: {
          what: "Document में मौजूद objects की list दिखाता है और उनकी visibility तथा selection manage करने देता है।",
          when: "जब page पर कई overlapping shapes या images हों तब इसका use करें।",
          steps: [
            "Page Layout tab खोलें।",
            "Selection Pane पर click करें।",
            "Objects की list दिखाई देगी।",
            "List से object select करें।",
            "Visibility controls से object दिखाएँ/छिपाएँ या manage करें।"
          ],
          practice: "तीन shapes बनाकर Selection Pane से उन्हें manage करें।"
        }
      },


      {
        name: "Align",
        icon: "↔",

        en: {
          what: "Aligns selected objects relative to each other or the page.",
          when: "Use Align when multiple objects need to line up neatly.",
          steps: [
            "Select two or more objects.",
            "Open Page Layout.",
            "Click Align.",
            "Choose Left, Center, Right, Top, Middle or Bottom.",
            "The objects will align."
          ],
          practice: "Create three shapes and align their left edges."
        },

        hi: {
          what: "Selected objects को एक-दूसरे या page के अनुसार align करता है।",
          when: "Multiple objects को neatly line up करने के लिए Align का use करें।",
          steps: [
            "दो या अधिक objects select करें।",
            "Page Layout tab खोलें।",
            "Align पर click करें।",
            "Left, Center, Right, Top, Middle या Bottom चुनें।",
            "Objects align हो जाएँगे।"
          ],
          practice: "तीन shapes बनाकर उनके left edges align करें।"
        }
      },


      {
        name: "Group",
        icon: "🔗",

        en: {
          what: "Combines multiple selected objects so they can be moved and formatted together.",
          when: "Use Group when several shapes or images should behave like one object.",
          steps: [
            "Select multiple objects.",
            "Open Page Layout.",
            "Click Group.",
            "Choose Group.",
            "The objects now behave as one grouped object."
          ],
          practice: "Group three shapes and move them together."
        },

        hi: {
          what: "Multiple selected objects को एक group में combine करता है।",
          when: "जब कई shapes या images को एक object की तरह move या format करना हो तब Group का use करें।",
          steps: [
            "Multiple objects select करें।",
            "Page Layout tab खोलें।",
            "Group पर click करें।",
            "Group चुनें।",
            "अब objects एक grouped object की तरह काम करेंगे।"
          ],
          practice: "तीन shapes को group करके एक साथ move करें।"
        }
      },


      {
        name: "Rotate",
        icon: "⟳",

        en: {
          what: "Rotates or flips a selected object.",
          when: "Use Rotate when an image, shape or object needs a different direction.",
          steps: [
            "Select the object.",
            "Open Page Layout.",
            "Click Rotate.",
            "Choose Rotate Right 90°, Rotate Left 90°, Flip Horizontal or another option."
          ],
          practice: "Rotate a shape by 90 degrees."
        },

        hi: {
          what: "Selected object को rotate या flip करता है।",
          when: "Image, shape या object की direction बदलने के लिए Rotate का use करें।",
          steps: [
            "Object select करें।",
            "Page Layout tab खोलें।",
            "Rotate पर click करें।",
            "Rotate Right 90°, Rotate Left 90° या Flip option चुनें।"
          ],
          practice: "एक shape को 90 degrees rotate करें।"
        }
      }

    ]
  },
  // ============================================================
  // MAILINGS TAB
  // ============================================================

  Mailings: {
    image: "Mailings.png",

    tools: [

      {
        name: "Envelopes",
        icon: "✉️",

        en: {
          what: "Creates and prints an envelope with recipient and return address information.",
          when: "Use Envelopes when you need to prepare a professional envelope for a letter or document.",
          steps: [
            "Open the Mailings tab.",
            "Click Envelopes.",
            "Enter the Delivery Address.",
            "Enter the Return Address if required.",
            "Check the envelope options if you need to change size or printing settings.",
            "Click Add to Document or Print.",
            "Review the envelope before printing."
          ],
          practice: "Create an envelope with a recipient address and return address."
        },

        hi: {
          what: "Recipient और return address के साथ envelope बनाने और print करने में मदद करता है।",
          when: "Letter या document भेजने के लिए professional envelope तैयार करने में इसका use करें।",
          steps: [
            "Mailings tab खोलें।",
            "Envelopes पर click करें।",
            "Delivery Address लिखें।",
            "जरूरत हो तो Return Address लिखें।",
            "Envelope Options में size और printing settings बदलें।",
            "Add to Document या Print पर click करें।",
            "Print करने से पहले envelope check करें।"
          ],
          practice: "Recipient और return address के साथ एक envelope बनाएँ।"
        }
      },


      {
        name: "Labels",
        icon: "🏷️",

        en: {
          what: "Creates printable labels for addresses, products, folders and other items.",
          when: "Use Labels when you need multiple small pieces of information printed in a label format.",
          steps: [
            "Open Mailings.",
            "Click Labels.",
            "Enter the address or label text.",
            "Click Options if you need to choose a label manufacturer or product number.",
            "Choose the required label type.",
            "Click New Document or Print.",
            "Review the labels before printing."
          ],
          practice: "Create address labels for five people."
        },

        hi: {
          what: "Address, product, folder और दूसरी चीजों के लिए printable labels बनाता है।",
          when: "जब information को छोटे label format में print करना हो तब Labels का use करें।",
          steps: [
            "Mailings tab खोलें।",
            "Labels पर click करें।",
            "Address या label text लिखें।",
            "जरूरत हो तो Options पर click करके label type चुनें।",
            "Required label type select करें।",
            "New Document या Print पर click करें।",
            "Print से पहले labels check करें।"
          ],
          practice: "पाँच लोगों के लिए address labels बनाएँ।"
        }
      },


      {
        name: "Start Mail Merge",
        icon: "📨",

        en: {
          what: "Starts the Mail Merge process for creating personalized documents for multiple recipients.",
          when: "Use Mail Merge when the same letter, invitation, certificate or other document needs to be created for many people with different names or details.",
          steps: [
            "Open the Mailings tab.",
            "Click Start Mail Merge.",
            "Choose the document type, such as Letters, E-mail Messages, Envelopes or Labels.",
            "Choose the recipients using an existing list or create a new list.",
            "Insert personalized fields such as Name or Address.",
            "Preview the results.",
            "Finish and merge the documents."
          ],
          practice: "Create a personalized invitation for five people."
        },

        hi: {
          what: "Multiple recipients के लिए personalized documents बनाने की Mail Merge process शुरू करता है।",
          when: "जब same letter, invitation या certificate कई लोगों के लिए बनाना हो लेकिन Name और Address अलग-अलग हों तब Mail Merge का use करें।",
          steps: [
            "Mailings tab खोलें।",
            "Start Mail Merge पर click करें।",
            "Letters, E-mail Messages, Envelopes या Labels जैसा document type चुनें।",
            "Existing recipient list चुनें या नई list बनाएं।",
            "Name या Address जैसे personalized fields insert करें।",
            "Preview Results से result check करें।",
            "Finish & Merge करके documents तैयार करें।"
          ],
          practice: "पाँच लोगों के लिए personalized invitation बनाएँ।"
        }
      },


      {
        name: "Select Recipients",
        icon: "👥",

        en: {
          what: "Chooses the list of people who will receive the mail-merged document.",
          when: "Use it after starting Mail Merge when you need to connect Word to recipient information.",
          steps: [
            "Start Mail Merge first.",
            "Open Mailings.",
            "Click Select Recipients.",
            "Choose Use an Existing List, Select from Outlook Contacts or Type a New List.",
            "Select or create the recipient data.",
            "Continue with the Mail Merge."
          ],
          practice: "Create a recipient list containing Name, Address and Phone."
        },

        hi: {
          what: "Mail Merge document पाने वाले लोगों की list select करता है।",
          when: "Mail Merge शुरू करने के बाद recipient information को Word से connect करने के लिए इसका use करें।",
          steps: [
            "पहले Start Mail Merge करें।",
            "Mailings tab खोलें।",
            "Select Recipients पर click करें।",
            "Use an Existing List, Outlook Contacts या Type a New List चुनें।",
            "Recipient data select या create करें।",
            "Mail Merge आगे continue करें।"
          ],
          practice: "Name, Address और Phone वाली recipient list बनाएँ।"
        }
      },


      {
        name: "Edit Recipient List",
        icon: "📝",

        en: {
          what: "Allows you to view, filter, sort and edit the recipients selected for Mail Merge.",
          when: "Use it when you need to remove a recipient, change details or select only certain people.",
          steps: [
            "Start Mail Merge and select your recipients.",
            "Open Mailings.",
            "Click Edit Recipient List.",
            "Review the recipient records.",
            "Use checkboxes to include or exclude people.",
            "Use sorting or filtering if needed.",
            "Click OK."
          ],
          practice: "Exclude one person from a Mail Merge."
        },

        hi: {
          what: "Mail Merge में selected recipients की list को view, filter, sort और edit करने देता है।",
          when: "किसी recipient को remove करने, details बदलने या कुछ लोगों को ही select करने के लिए इसका use करें।",
          steps: [
            "Mail Merge शुरू करके recipients select करें।",
            "Mailings tab खोलें।",
            "Edit Recipient List पर click करें।",
            "Recipient records check करें।",
            "Checkbox से लोगों को include या exclude करें।",
            "जरूरत हो तो sort या filter करें।",
            "OK पर click करें।"
          ],
          practice: "Mail Merge में से एक person को exclude करें।"
        }
      },


      {
        name: "Address Block",
        icon: "🏠",

        en: {
          what: "Inserts a formatted address field into a Mail Merge document.",
          when: "Use Address Block when creating personalized letters, envelopes or labels.",
          steps: [
            "Start Mail Merge and connect a recipient list.",
            "Place the cursor where the address should appear.",
            "Open Mailings.",
            "Click Address Block.",
            "Choose the address format.",
            "Preview the result.",
            "Click OK."
          ],
          practice: "Insert a recipient's complete address into a letter."
        },

        hi: {
          what: "Mail Merge document में formatted address field insert करता है।",
          when: "Personalized letter, envelope या label बनाते समय Address Block का use करें।",
          steps: [
            "Mail Merge शुरू करके recipient list connect करें।",
            "जहाँ address चाहिए वहाँ cursor रखें।",
            "Mailings tab खोलें।",
            "Address Block पर click करें।",
            "Address format चुनें।",
            "Preview करके result check करें।",
            "OK पर click करें।"
          ],
          practice: "Letter में recipient का complete address insert करें।"
        }
      },


      {
        name: "Greeting Line",
        icon: "👋",

        en: {
          what: "Adds a personalized greeting such as Dear Mr. Sharma or Dear Customer.",
          when: "Use it when each recipient should receive a personalized greeting.",
          steps: [
            "Start Mail Merge and select recipients.",
            "Place the cursor where the greeting should appear.",
            "Open Mailings.",
            "Click Greeting Line.",
            "Choose the greeting format.",
            "Preview the result.",
            "Click OK."
          ],
          practice: "Create a letter that starts with a personalized greeting."
        },

        hi: {
          what: "Personalized greeting जैसे Dear Mr. Sharma या Dear Customer insert करता है।",
          when: "जब हर recipient को personalized greeting दिखानी हो तब इसका use करें।",
          steps: [
            "Mail Merge शुरू करके recipients select करें।",
            "जहाँ greeting चाहिए वहाँ cursor रखें।",
            "Mailings tab खोलें।",
            "Greeting Line पर click करें।",
            "Greeting format चुनें।",
            "Preview Result से check करें।",
            "OK पर click करें।"
          ],
          practice: "Personalized greeting से शुरू होने वाला letter बनाएँ।"
        }
      },


      {
        name: "Insert Merge Field",
        icon: "🔗",

        en: {
          what: "Inserts a specific field from the recipient data into the document.",
          when: "Use it when you need exact information such as First Name, Last Name, City, Phone or Email.",
          steps: [
            "Connect a recipient list.",
            "Place the cursor where the information should appear.",
            "Open Mailings.",
            "Click Insert Merge Field.",
            "Choose the required field.",
            "The field appears in the document.",
            "Use Preview Results to see actual recipient information."
          ],
          practice: "Insert First Name and City into a personalized letter."
        },

        hi: {
          what: "Recipient data से specific field को document में insert करता है।",
          when: "First Name, Last Name, City, Phone या Email जैसी exact information दिखाने के लिए इसका use करें।",
          steps: [
            "Recipient list connect करें।",
            "जहाँ information चाहिए वहाँ cursor रखें।",
            "Mailings tab खोलें।",
            "Insert Merge Field पर click करें।",
            "Required field चुनें।",
            "Field document में दिखाई देगा।",
            "Preview Results से actual information देखें।"
          ],
          practice: "Personalized letter में First Name और City fields insert करें।"
        }
      },


      {
        name: "Rules",
        icon: "⚙️",

        en: {
          what: "Adds conditions and logic to a Mail Merge document.",
          when: "Use Rules when different recipients need different text based on their data.",
          steps: [
            "Start Mail Merge and connect the recipient list.",
            "Place the cursor where conditional text should appear.",
            "Open Mailings.",
            "Click Rules.",
            "Choose a rule such as If...Then...Else.",
            "Set the condition and the text to display.",
            "Preview the results."
          ],
          practice: "Show different greetings for male and female recipients using a rule."
        },

        hi: {
          what: "Mail Merge document में conditions और logic add करता है।",
          when: "जब recipient की data के आधार पर अलग-अलग text दिखाना हो तब Rules का use करें।",
          steps: [
            "Mail Merge शुरू करके recipient list connect करें।",
            "जहाँ conditional text चाहिए वहाँ cursor रखें।",
            "Mailings tab खोलें।",
            "Rules पर click करें।",
            "If...Then...Else जैसी rule चुनें।",
            "Condition और दिखने वाला text set करें।",
            "Preview Results से check करें।"
          ],
          practice: "Rule का use करके अलग recipients के लिए अलग greeting दिखाएँ।"
        }
      },


      {
        name: "Match Fields",
        icon: "🔄",

        en: {
          what: "Matches your recipient-list column names with Word's Mail Merge fields.",
          when: "Use it when your data source uses different column names from the fields expected by Word.",
          steps: [
            "Start Mail Merge and insert Address Block or Greeting Line.",
            "Open Mailings.",
            "Click Match Fields.",
            "Match Word fields with the corresponding columns in your data.",
            "Click OK.",
            "Preview the results."
          ],
          practice: "Match your data column 'Mobile' with the appropriate Word field."
        },

        hi: {
          what: "आपकी recipient list के column names को Word के Mail Merge fields से match करता है।",
          when: "जब data source में Word से अलग column names हों तब Match Fields का use करें।",
          steps: [
            "Mail Merge शुरू करें और Address Block या Greeting Line insert करें।",
            "Mailings tab खोलें।",
            "Match Fields पर click करें।",
            "Word fields को अपनी data columns के साथ match करें।",
            "OK पर click करें।",
            "Preview Results से result check करें।"
          ],
          practice: "अपनी data की 'Mobile' column को appropriate field से match करें।"
        }
      },


      {
        name: "Preview Results",
        icon: "👁️",

        en: {
          what: "Shows the Mail Merge document using actual recipient data instead of field names.",
          when: "Use it before finishing the merge to check whether names, addresses and other fields appear correctly.",
          steps: [
            "Complete the recipient setup and insert merge fields.",
            "Open Mailings.",
            "Click Preview Results.",
            "Use the previous and next recipient buttons to check records.",
            "Correct any mistakes before finishing the merge."
          ],
          practice: "Preview at least three recipients before completing a merge."
        },

        hi: {
          what: "Mail Merge fields की जगह actual recipient information दिखाता है।",
          when: "Final merge से पहले Name, Address और दूसरे fields सही हैं या नहीं check करने के लिए इसका use करें।",
          steps: [
            "Recipient setup पूरा करें और merge fields insert करें।",
            "Mailings tab खोलें।",
            "Preview Results पर click करें।",
            "Previous और Next buttons से अलग recipients देखें।",
            "गलती हो तो merge complete करने से पहले सुधारें।"
          ],
          practice: "Final merge से पहले कम से कम तीन recipients का preview देखें।"
        }
      },


      {
        name: "Finish & Merge",
        icon: "✅",

        en: {
          what: "Completes the Mail Merge and creates, prints or sends the personalized documents.",
          when: "Use it after checking the preview and confirming that all recipient information is correct.",
          steps: [
            "Review the merged document using Preview Results.",
            "Open Mailings.",
            "Click Finish & Merge.",
            "Choose Edit Individual Documents, Print Documents or another available option.",
            "Select the records if prompted.",
            "Complete the merge."
          ],
          practice: "Create individual letters for all recipients."
        },

        hi: {
          what: "Mail Merge process को complete करके personalized documents create, print या send करता है।",
          when: "Preview check करने और recipient information सही होने के बाद इसका use करें।",
          steps: [
            "Preview Results से document check करें।",
            "Mailings tab खोलें।",
            "Finish & Merge पर click करें।",
            "Edit Individual Documents, Print Documents या available option चुनें।",
            "जरूरत हो तो records select करें।",
            "Merge complete करें।"
          ],
          practice: "सभी recipients के लिए individual letters बनाएं।"
        }
      }

    ]
  },


  // ============================================================
  // REFERENCES TAB
  // ============================================================

  References: {
    image: "References.png",

    tools: [

      {
        name: "Table of Contents",
        icon: "📑",

        en: {
          what: "Creates a table listing headings and their page numbers.",
          when: "Use it for reports, projects, books and long documents with multiple sections.",
          steps: [
            "Apply Heading 1, Heading 2 and other heading styles to your document headings.",
            "Place the cursor where you want the Table of Contents.",
            "Open References.",
            "Click Table of Contents.",
            "Choose an automatic style.",
            "Word creates the table from your heading styles.",
            "After editing the document, right-click the table and choose Update Field to refresh it."
          ],
          practice: "Create a three-section report and insert an automatic Table of Contents."
        },

        hi: {
          what: "Headings और उनके page numbers की list वाली Table of Contents बनाता है।",
          when: "Report, project, book और long document में इसका use करें।",
          steps: [
            "Document की headings पर Heading 1, Heading 2 आदि styles apply करें।",
            "जहाँ Table of Contents चाहिए वहाँ cursor रखें।",
            "References tab खोलें।",
            "Table of Contents पर click करें।",
            "Automatic style चुनें।",
            "Word headings के आधार पर Table of Contents बना देगा।",
            "Document में changes के बाद table पर right-click करके Update Field करें।"
          ],
          practice: "तीन sections वाली report बनाकर automatic Table of Contents insert करें।"
        }
      },


      {
        name: "Add Text",
        icon: "T+",

        en: {
          what: "Sets the outline level of selected text so Word can include it in a Table of Contents.",
          when: "Use it when a heading has not been formatted with a standard Heading style but should appear in the Table of Contents.",
          steps: [
            "Select the heading or text.",
            "Open References.",
            "Click Add Text.",
            "Choose the required level.",
            "Update the Table of Contents to include the text."
          ],
          practice: "Add a custom heading to the Table of Contents."
        },

        hi: {
          what: "Selected text का outline level set करता है ताकि वह Table of Contents में include हो सके।",
          when: "जब heading standard Heading style में न हो लेकिन Table of Contents में दिखानी हो तब इसका use करें।",
          steps: [
            "Heading या text select करें।",
            "References tab खोलें।",
            "Add Text पर click करें।",
            "Required level चुनें।",
            "Table of Contents को update करें।"
          ],
          practice: "एक custom heading को Table of Contents में add करें।"
        }
      },


      {
        name: "Update Table",
        icon: "🔄",

        en: {
          what: "Updates an existing Table of Contents after document changes.",
          when: "Use it after adding, deleting or moving headings or changing page numbers.",
          steps: [
            "Click inside the Table of Contents.",
            "Click Update Table.",
            "Choose Update page numbers only or Update entire table.",
            "Click OK."
          ],
          practice: "Add a new heading and update the Table of Contents."
        },

        hi: {
          what: "Existing Table of Contents को document changes के बाद update करता है।",
          when: "Heading add/delete करने या page numbers बदलने के बाद इसका use करें।",
          steps: [
            "Table of Contents के अंदर click करें।",
            "Update Table पर click करें।",
            "Update page numbers only या Update entire table चुनें।",
            "OK पर click करें।"
          ],
          practice: "नई heading add करके Table of Contents update करें।"
        }
      },


      {
        name: "Insert Footnote",
        icon: "¹",

        en: {
          what: "Adds a numbered note at the bottom of the page.",
          when: "Use Footnotes for explanations, definitions or source information related to specific text.",
          steps: [
            "Place the cursor after the word or sentence that needs a note.",
            "Open References.",
            "Click Insert Footnote.",
            "Word adds a superscript number and moves the cursor to the bottom of the page.",
            "Type the footnote text."
          ],
          practice: "Add a footnote explaining a difficult term."
        },

        hi: {
          what: "Page के नीचे numbered note जोड़ता है।",
          when: "Explanation, definition या source information देने के लिए Footnote का use करें।",
          steps: [
            "जिस word या sentence पर note चाहिए उसके बाद cursor रखें।",
            "References tab खोलें।",
            "Insert Footnote पर click करें।",
            "Word superscript number लगाएगा और page के नीचे cursor ले जाएगा।",
            "Footnote text लिखें।"
          ],
          practice: "किसी difficult term की explanation के लिए footnote जोड़ें।"
        }
      },


      {
        name: "Insert Endnote",
        icon: "²",

        en: {
          what: "Adds a numbered note at the end of a document or section.",
          when: "Use Endnotes when notes should be collected at the end rather than displayed at the bottom of each page.",
          steps: [
            "Place the cursor where the note reference is needed.",
            "Open References.",
            "Click Insert Endnote.",
            "Word adds a reference number and moves you to the endnote area.",
            "Type the note."
          ],
          practice: "Add an endnote containing a source reference."
        },

        hi: {
          what: "Document या section के अंत में numbered note जोड़ता है।",
          when: "जब notes हर page के नीचे की बजाय document के end में चाहिए हों तब Endnote का use करें।",
          steps: [
            "जहाँ note reference चाहिए वहाँ cursor रखें।",
            "References tab खोलें।",
            "Insert Endnote पर click करें।",
            "Word reference number add करके endnote area में ले जाएगा।",
            "Note लिखें।"
          ],
          practice: "Source reference वाला एक endnote जोड़ें।"
        }
      },


      {
        name: "Next Footnote",
        icon: "→",

        en: {
          what: "Moves to the next footnote or endnote in the document.",
          when: "Use it when reviewing or checking multiple notes in a long document.",
          steps: [
            "Open References.",
            "Click Next Footnote.",
            "Word moves to the next available note.",
            "Continue clicking to move through the notes."
          ],
          practice: "Create three footnotes and navigate through them."
        },

        hi: {
          what: "Document में next footnote या endnote पर ले जाता है।",
          when: "Long document में multiple notes check करने के लिए इसका use करें।",
          steps: [
            "References tab खोलें।",
            "Next Footnote पर click करें।",
            "Word next available note पर चला जाएगा।",
            "आगे जाने के लिए फिर click करें।"
          ],
          practice: "तीन footnotes बनाकर उनके बीच navigate करें।"
        }
      },


      {
        name: "Show Notes",
        icon: "📝",

        en: {
          what: "Displays the footnote or endnote area for viewing and editing notes.",
          when: "Use it when you need to inspect or edit notes.",
          steps: [
            "Open References.",
            "Click Show Notes.",
            "Choose the note type if Word asks.",
            "The notes area opens for editing."
          ],
          practice: "Open the notes area and edit a footnote."
        },

        hi: {
          what: "Footnote या Endnote area को दिखाता है ताकि notes को देखा और edit किया जा सके।",
          when: "Notes को inspect या edit करने के लिए इसका use करें।",
          steps: [
            "References tab खोलें।",
            "Show Notes पर click करें।",
            "अगर Word पूछे तो note type चुनें।",
            "Notes area editing के लिए खुल जाएगा।"
          ],
          practice: "Notes area खोलकर एक footnote edit करें।"
        }
      },


      {
        name: "Insert Citation",
        icon: "📚",

        en: {
          what: "Adds a citation to a source in the document.",
          when: "Use it when writing research papers, assignments or reports that require source references.",
          steps: [
            "Place the cursor where the citation should appear.",
            "Open References.",
            "Choose the required citation style if necessary.",
            "Click Insert Citation.",
            "Choose an existing source or add a new source.",
            "Enter the source details and insert the citation."
          ],
          practice: "Add a citation for a book or website source."
        },

        hi: {
          what: "Document में source का citation insert करता है।",
          when: "Research paper, assignment या report में source reference देने के लिए इसका use करें।",
          steps: [
            "जहाँ citation चाहिए वहाँ cursor रखें।",
            "References tab खोलें।",
            "जरूरत हो तो citation style चुनें।",
            "Insert Citation पर click करें।",
            "Existing source चुनें या नया source add करें।",
            "Source details भरकर citation insert करें।"
          ],
          practice: "किसी book या website का citation add करें।"
        }
      },


      {
        name: "Manage Sources",
        icon: "📚",

        en: {
          what: "Manages the sources used for citations and bibliographies.",
          when: "Use it when you need to edit, remove, review or reuse source information.",
          steps: [
            "Open References.",
            "Click Manage Sources.",
            "Review the source list.",
            "Select a source.",
            "Edit, delete or copy the source as needed."
          ],
          practice: "Add two sources and edit one of them."
        },

        hi: {
          what: "Citations और bibliography में use होने वाले sources को manage करता है।",
          when: "Source information को edit, remove, review या reuse करने के लिए इसका use करें।",
          steps: [
            "References tab खोलें।",
            "Manage Sources पर click करें।",
            "Source list देखें।",
            "एक source select करें।",
            "जरूरत के अनुसार edit, delete या copy करें।"
          ],
          practice: "दो sources add करके एक source edit करें।"
        }
      },


      {
        name: "Bibliography",
        icon: "📖",

        en: {
          what: "Creates a formatted list of sources used in the document.",
          when: "Use it at the end of research papers, assignments, reports or academic documents.",
          steps: [
            "Add your sources and citations first.",
            "Place the cursor where the bibliography should appear.",
            "Open References.",
            "Click Bibliography.",
            "Choose a bibliography style.",
            "Word inserts the source list."
          ],
          practice: "Create a report with at least three sources and insert a bibliography."
        },

        hi: {
          what: "Document में use किए गए sources की formatted list बनाता है।",
          when: "Research paper, assignment, report या academic document के end में इसका use करें।",
          steps: [
            "पहले sources और citations add करें।",
            "जहाँ bibliography चाहिए वहाँ cursor रखें।",
            "References tab खोलें।",
            "Bibliography पर click करें।",
            "Bibliography style चुनें।",
            "Word source list insert कर देगा।"
          ],
          practice: "तीन sources वाली report बनाकर bibliography insert करें।"
        }
      },


      {
        name: "Insert Caption",
        icon: "🏷️",

        en: {
          what: "Adds a numbered caption to a figure, table or other object.",
          when: "Use captions in reports and academic documents so figures and tables can be identified clearly.",
          steps: [
            "Select the picture, table or other object.",
            "Open References.",
            "Click Insert Caption.",
            "Choose the label such as Figure or Table.",
            "Enter or edit the caption text.",
            "Click OK."
          ],
          practice: "Add a Figure caption under an image."
        },

        hi: {
          what: "Figure, table या object के लिए numbered caption जोड़ता है।",
          when: "Report और academic document में figures और tables को clearly identify करने के लिए इसका use करें।",
          steps: [
            "Picture, table या object select करें।",
            "References tab खोलें।",
            "Insert Caption पर click करें।",
            "Figure या Table जैसा label चुनें।",
            "Caption text लिखें या edit करें।",
            "OK पर click करें।"
          ],
          practice: "एक image के नीचे Figure caption लगाएँ।"
        }
      },


      {
        name: "Table of Figures",
        icon: "🖼️",

        en: {
          what: "Creates a list of figures, tables or other captioned objects with page numbers.",
          when: "Use it in long reports or academic documents containing many figures or tables.",
          steps: [
            "Add captions to your figures or tables.",
            "Place the cursor where the list should appear.",
            "Open References.",
            "Click Insert Table of Figures.",
            "Choose the caption label.",
            "Click OK."
          ],
          practice: "Create three figure captions and generate a Table of Figures."
        },

        hi: {
          what: "Caption किए गए figures, tables या objects की page numbers के साथ list बनाता है।",
          when: "Long reports और academic documents में इसका use करें।",
          steps: [
            "Figures या tables पर captions लगाएँ।",
            "जहाँ list चाहिए वहाँ cursor रखें।",
            "References tab खोलें।",
            "Insert Table of Figures पर click करें।",
            "Caption label चुनें।",
            "OK पर click करें।"
          ],
          practice: "तीन figure captions बनाकर Table of Figures generate करें।"
        }
      },


      {
        name: "Mark Entry",
        icon: "🔖",

        en: {
          what: "Marks text for inclusion in an index.",
          when: "Use it when creating an index for a long book, manual or reference document.",
          steps: [
            "Select the word or phrase you want in the index.",
            "Open References.",
            "Click Mark Entry.",
            "Set the index entry options.",
            "Click Mark.",
            "Continue marking other important terms."
          ],
          practice: "Mark five important terms for an index."
        },

        hi: {
          what: "Selected text को index में include करने के लिए mark करता है।",
          when: "Long book, manual या reference document का index बनाने के लिए इसका use करें।",
          steps: [
            "जिस word या phrase को index में रखना है उसे select करें।",
            "References tab खोलें।",
            "Mark Entry पर click करें।",
            "Index entry options set करें।",
            "Mark पर click करें।",
            "दूसरे important terms को भी mark करें।"
          ],
          practice: "Index के लिए पाँच important terms mark करें।"
        }
      },


      {
        name: "Insert Index",
        icon: "📇",

        en: {
          what: "Creates an alphabetical index from marked entries.",
          when: "Use it at the end of a long reference document or book.",
          steps: [
            "Mark the entries that should appear in the index.",
            "Place the cursor where the index should appear.",
            "Open References.",
            "Click Insert Index.",
            "Choose the index format.",
            "Click OK."
          ],
          practice: "Mark several terms and create an index."
        },

        hi: {
          what: "Marked entries के आधार पर alphabetical index बनाता है।",
          when: "Long reference document या book के end में इसका use करें।",
          steps: [
            "Index में आने वाले entries को mark करें।",
            "जहाँ index चाहिए वहाँ cursor रखें।",
            "References tab खोलें।",
            "Insert Index पर click करें।",
            "Index format चुनें।",
            "OK पर click करें।"
          ],
          practice: "कुछ terms mark करके index बनाएँ।"
        }
      },


      {
        name: "Update Index",
        icon: "🔄",

        en: {
          what: "Updates an existing index after marked entries or page numbers change.",
          when: "Use it after editing the document or adding new marked entries.",
          steps: [
            "Click inside the existing index.",
            "Open References.",
            "Click Update Index.",
            "Word refreshes the index and page numbers."
          ],
          practice: "Add a new marked term and update the index."
        },

        hi: {
          what: "Document में changes के बाद existing index को update करता है।",
          when: "New marked entries add करने या page numbers बदलने के बाद इसका use करें।",
          steps: [
            "Existing index के अंदर click करें।",
            "References tab खोलें।",
            "Update Index पर click करें।",
            "Word index और page numbers refresh कर देगा।"
          ],
          practice: "एक नया marked term add करके index update करें।"
        }
      },


      {
        name: "Mark Citation",
        icon: "⚖️",

        en: {
          what: "Marks a legal citation for inclusion in a Table of Authorities.",
          when: "Use it for legal documents containing cases, statutes and other legal authorities.",
          steps: [
            "Select the legal citation.",
            "Open References.",
            "Click Mark Citation.",
            "Choose the citation category.",
            "Edit the short citation if needed.",
            "Click Mark."
          ],
          practice: "Mark a sample legal case citation."
        },

        hi: {
          what: "Legal citation को Table of Authorities में include करने के लिए mark करता है।",
          when: "Legal documents में cases, statutes और legal authorities के लिए इसका use करें।",
          steps: [
            "Legal citation select करें।",
            "References tab खोलें।",
            "Mark Citation पर click करें।",
            "Citation category चुनें।",
            "जरूरत हो तो short citation edit करें।",
            "Mark पर click करें।"
          ],
          practice: "एक sample legal case citation mark करें।"
        }
      },


      {
        name: "Table of Authorities",
        icon: "⚖️",

        en: {
          what: "Creates a list of legal citations and their page numbers.",
          when: "Use it in legal documents to organize cases, statutes and other authorities.",
          steps: [
            "Mark the legal citations first.",
            "Place the cursor where the Table of Authorities should appear.",
            "Open References.",
            "Click Insert Table of Authorities.",
            "Choose the category and formatting.",
            "Click OK."
          ],
          practice: "Create a small legal document and generate a Table of Authorities."
        },

        hi: {
          what: "Legal citations और उनके page numbers की list बनाता है।",
          when: "Legal document में cases, statutes और authorities को organize करने के लिए इसका use करें।",
          steps: [
            "पहले legal citations को mark करें।",
            "जहाँ Table of Authorities चाहिए वहाँ cursor रखें।",
            "References tab खोलें।",
            "Insert Table of Authorities पर click करें।",
            "Category और formatting चुनें।",
            "OK पर click करें।"
          ],
          practice: "एक छोटा legal document बनाकर Table of Authorities generate करें।"
        }
      }

    ]
  },
    // ============================================================
  // REVIEW TAB
  // ============================================================

  Review: {
    image: "Review.png",

    tools: [

      // --------------------------------------------------------
      // PROOFING
      // --------------------------------------------------------

      {
        name: "Spelling & Grammar",
        icon: "ABC",

        en: {
          what: "Checks the document for spelling and grammar mistakes.",
          when: "Use it before submitting, printing or sharing a document to find common writing errors.",
          steps: [
            "Open the Review tab.",
            "Click Spelling & Grammar.",
            "Word checks the document and shows possible mistakes.",
            "Review the suggested correction.",
            "Choose Change, Ignore or another available option.",
            "Continue until Word finishes checking the document."
          ],
          practice: "Type a paragraph containing a few spelling mistakes and run Spelling & Grammar."
        },

        hi: {
          what: "Document में spelling और grammar की mistakes check करता है।",
          when: "Document submit, print या share करने से पहले common writing mistakes check करने के लिए इसका use करें।",
          steps: [
            "Review tab खोलें।",
            "Spelling & Grammar पर click करें।",
            "Word document को check करके possible mistakes दिखाएगा।",
            "Suggested correction को देखें।",
            "Change, Ignore या available option चुनें।",
            "जब तक Word checking complete न करे तब तक continue करें।"
          ],
          practice: "कुछ spelling mistakes वाला paragraph लिखकर Spelling & Grammar चलाएँ।"
        }
      },


      {
        name: "Thesaurus",
        icon: "📖",

        en: {
          what: "Finds synonyms and related words for a selected word.",
          when: "Use it when you want to improve vocabulary, avoid repetition or find a more suitable word.",
          steps: [
            "Select a word in the document.",
            "Open the Review tab.",
            "Click Thesaurus.",
            "Word shows synonyms and related words.",
            "Choose a suitable word.",
            "Replace the original word if required."
          ],
          practice: "Select the word 'important' and find alternative words using Thesaurus."
        },

        hi: {
          what: "Selected word के synonyms और related words दिखाता है।",
          when: "Vocabulary improve करने, repeated words avoid करने या better word चुनने के लिए इसका use करें।",
          steps: [
            "Document में कोई word select करें।",
            "Review tab खोलें।",
            "Thesaurus पर click करें।",
            "Word synonyms और related words दिखाएगा।",
            "Suitable word चुनें।",
            "जरूरत हो तो original word को replace करें।"
          ],
          practice: "'Important' word select करके Thesaurus से alternative words खोजें।"
        }
      },


      {
        name: "Word Count",
        icon: "123",

        en: {
          what: "Shows the number of words, characters, paragraphs and pages in a document.",
          when: "Use it when an assignment, article or report has a required word or character limit.",
          steps: [
            "Open the Review tab.",
            "Click Word Count.",
            "A Word Count window appears.",
            "Review Pages, Words, Characters, Paragraphs and Lines.",
            "Click Close when finished."
          ],
          practice: "Write a short paragraph and check its word and character count."
        },

        hi: {
          what: "Document में words, characters, paragraphs और pages की संख्या दिखाता है।",
          when: "जब assignment, article या report की word या character limit हो तब इसका use करें।",
          steps: [
            "Review tab खोलें।",
            "Word Count पर click करें।",
            "Word Count window दिखाई देगी।",
            "Pages, Words, Characters, Paragraphs और Lines की संख्या देखें।",
            "काम पूरा होने पर Close करें।"
          ],
          practice: "एक छोटा paragraph लिखकर उसका word और character count check करें।"
        }
      },


      {
        name: "Read Aloud",
        icon: "🔊",

        en: {
          what: "Reads the document text aloud using computer speech.",
          when: "Use it to listen for writing mistakes, check sentence flow or make reading easier.",
          steps: [
            "Open the Review tab.",
            "Click Read Aloud.",
            "Word starts reading the document.",
            "Use the playback controls to pause, play or move through the text.",
            "Use the voice or speed settings if available.",
            "Stop the reading when finished."
          ],
          practice: "Write a paragraph and use Read Aloud to listen to it."
        },

        hi: {
          what: "Document के text को computer voice की मदद से पढ़कर सुनाता है।",
          when: "Writing mistakes, sentence flow check करने या document को सुनकर समझने के लिए इसका use करें।",
          steps: [
            "Review tab खोलें।",
            "Read Aloud पर click करें।",
            "Word document को पढ़ना शुरू करेगा।",
            "Pause, Play और navigation controls का use करें।",
            "अगर available हो तो voice या speed बदलें।",
            "काम पूरा होने पर reading stop करें।"
          ],
          practice: "एक paragraph लिखकर Read Aloud से उसे सुनें।"
        }
      },


      {
        name: "Check Accessibility",
        icon: "♿",

        en: {
          what: "Checks the document for accessibility problems that may make it difficult for people with disabilities to use.",
          when: "Use it before sharing a document with others, especially when the document needs to be accessible to a wide audience.",
          steps: [
            "Open the Review tab.",
            "Click Check Accessibility.",
            "Word opens the Accessibility pane.",
            "Review the errors and warnings.",
            "Select an issue to see how to fix it.",
            "Make the suggested changes.",
            "Run the check again if necessary."
          ],
          practice: "Create a document with an image and check it for accessibility issues."
        },

        hi: {
          what: "Document में accessibility problems check करता है जो कुछ users के लिए document को difficult बना सकती हैं।",
          when: "Document share करने से पहले, खासकर जब document को सभी users के लिए accessible बनाना हो, इसका use करें।",
          steps: [
            "Review tab खोलें।",
            "Check Accessibility पर click करें।",
            "Word Accessibility pane खोलेगा।",
            "Errors और warnings देखें।",
            "किसी issue पर click करके उसका solution देखें।",
            "Suggested changes करें।",
            "जरूरत हो तो check फिर से चलाएँ।"
          ],
          practice: "Image वाला document बनाकर Accessibility check चलाएँ।"
        }
      },


      // --------------------------------------------------------
      // LANGUAGE
      // --------------------------------------------------------

      {
        name: "Translate",
        icon: "文A",

        en: {
          what: "Translates selected text or document content into another language.",
          when: "Use it when you need to understand or convert text into another language.",
          steps: [
            "Select the text you want to translate.",
            "Open the Review tab.",
            "Click Translate.",
            "Choose Translate Selection or the available translation option.",
            "Select the target language.",
            "Review the translated text.",
            "Insert or replace the text if required."
          ],
          practice: "Translate a short English sentence into Hindi."
        },

        hi: {
          what: "Selected text या document content को दूसरी language में translate करता है।",
          when: "किसी text को समझने या दूसरी language में convert करने के लिए इसका use करें।",
          steps: [
            "जिस text को translate करना है उसे select करें।",
            "Review tab खोलें।",
            "Translate पर click करें।",
            "Translate Selection या available option चुनें।",
            "Target language select करें।",
            "Translated text को check करें।",
            "जरूरत हो तो text insert या replace करें।"
          ],
          practice: "एक छोटी English sentence को Hindi में translate करें।"
        }
      },


      {
        name: "Language",
        icon: "A",

        en: {
          what: "Sets the language used for proofing and spelling/grammar checking.",
          when: "Use it when the document contains text in a different language or Word is checking the wrong language.",
          steps: [
            "Select the text whose language you want to change.",
            "Open Review.",
            "Click Language.",
            "Choose Set Proofing Language.",
            "Select the required language.",
            "Click OK.",
            "Run Spelling & Grammar again if required."
          ],
          practice: "Set a selected Hindi paragraph to Hindi proofing language."
        },

        hi: {
          what: "Spelling और grammar checking के लिए document की proofing language set करता है।",
          when: "जब document में दूसरी language का text हो या Word गलत language में spelling check कर रहा हो तब इसका use करें।",
          steps: [
            "जिस text की language बदलनी है उसे select करें।",
            "Review tab खोलें।",
            "Language पर click करें।",
            "Set Proofing Language चुनें।",
            "Required language select करें।",
            "OK पर click करें।",
            "जरूरत हो तो Spelling & Grammar फिर से चलाएँ।"
          ],
          practice: "एक Hindi paragraph select करके Hindi proofing language set करें।"
        }
      },


      // --------------------------------------------------------
      // COMMENTS
      // --------------------------------------------------------

      {
        name: "New Comment",
        icon: "💬",

        en: {
          what: "Adds a comment to selected text or a location in the document.",
          when: "Use comments when reviewing someone's work or leaving a suggestion without changing the original text.",
          steps: [
            "Select the text you want to comment on.",
            "Open the Review tab.",
            "Click New Comment.",
            "Type your comment in the comment area.",
            "Click outside the comment when finished.",
            "The comment remains attached to the selected content."
          ],
          practice: "Select a sentence and add a comment suggesting an improvement."
        },

        hi: {
          what: "Selected text या document के किसी location पर comment add करता है।",
          when: "किसी के work की review करते समय suggestion देने के लिए इसका use करें बिना original text बदले।",
          steps: [
            "जिस text पर comment करना है उसे select करें।",
            "Review tab खोलें।",
            "New Comment पर click करें।",
            "Comment area में अपना comment लिखें।",
            "काम पूरा होने पर बाहर click करें।",
            "Comment selected content से attached रहेगा।"
          ],
          practice: "एक sentence select करके improvement का suggestion comment में लिखें।"
        }
      },


      {
        name: "Delete Comment",
        icon: "🗑️",

        en: {
          what: "Removes a comment from the document.",
          when: "Use it when a comment is no longer needed or has already been addressed.",
          steps: [
            "Select or open the comment you want to remove.",
            "Open the Review tab.",
            "Click Delete.",
            "The selected comment is removed."
          ],
          practice: "Create a comment and then delete it."
        },

        hi: {
          what: "Document से comment को remove करता है।",
          when: "जब comment की जरूरत न हो या उसका issue solve हो चुका हो तब इसका use करें।",
          steps: [
            "जिस comment को हटाना है उसे select या open करें।",
            "Review tab खोलें।",
            "Delete पर click करें।",
            "Selected comment remove हो जाएगा।"
          ],
          practice: "एक comment create करके उसे delete करें।"
        }
      },


      {
        name: "Previous",
        icon: "←",

        en: {
          what: "Moves to the previous comment in the document.",
          when: "Use it when reviewing comments one by one in a document.",
          steps: [
            "Open the Review tab.",
            "Make sure comments are available in the document.",
            "Click Previous.",
            "Word moves to the previous comment."
          ],
          practice: "Create three comments and move backward through them."
        },

        hi: {
          what: "Document में previous comment पर ले जाता है।",
          when: "Comments को एक-एक करके review करने के लिए इसका use करें।",
          steps: [
            "Review tab खोलें।",
            "Document में comments available रखें।",
            "Previous पर click करें।",
            "Word previous comment पर चला जाएगा।"
          ],
          practice: "तीन comments बनाकर Previous button से पीछे की तरफ जाएँ।"
        }
      },


      {
        name: "Next",
        icon: "→",

        en: {
          what: "Moves to the next comment in the document.",
          when: "Use it when reviewing multiple comments from beginning to end.",
          steps: [
            "Open the Review tab.",
            "Make sure comments are available.",
            "Click Next.",
            "Word moves to the next comment."
          ],
          practice: "Create three comments and navigate through them using Next."
        },

        hi: {
          what: "Document में next comment पर ले जाता है।",
          when: "Multiple comments को beginning से end तक review करने के लिए इसका use करें।",
          steps: [
            "Review tab खोलें।",
            "Document में comments available रखें।",
            "Next पर click करें।",
            "Word next comment पर चला जाएगा।"
          ],
          practice: "तीन comments बनाकर Next button से उनके बीच navigate करें।"
        }
      },


      {
        name: "Show Comments",
        icon: "💬",

        en: {
          what: "Shows or hides the comments area in the document.",
          when: "Use it when you want to view comments while reviewing a document or hide them for a cleaner view.",
          steps: [
            "Open the Review tab.",
            "Click Show Comments.",
            "Review the visible comments.",
            "Click the option again if you need to hide the comments."
          ],
          practice: "Add two comments and practice showing and hiding them."
        },

        hi: {
          what: "Document में comments को show या hide करता है।",
          when: "Document review करते समय comments देखने या clean view के लिए उन्हें hide करने के लिए इसका use करें।",
          steps: [
            "Review tab खोलें।",
            "Show Comments पर click करें।",
            "Visible comments को review करें।",
            "Comments hide करने के लिए option फिर से use करें।"
          ],
          practice: "दो comments add करके उन्हें show और hide करके देखें।"
        }
      },


      // --------------------------------------------------------
      // TRACKING
      // --------------------------------------------------------

      {
        name: "All Markup",
        icon: "📝",

        en: {
          what: "Displays tracked changes and comments in the document.",
          when: "Use it when you want to see the complete review information, including changes and comments.",
          steps: [
            "Open the Review tab.",
            "Find the Tracking group.",
            "Open the Display for Review menu.",
            "Choose All Markup.",
            "Word displays tracked changes and comments."
          ],
          practice: "Turn on All Markup after making a change to a document."
        },

        hi: {
          what: "Document में tracked changes और comments को दिखाता है।",
          when: "Review की पूरी information, changes और comments देखने के लिए इसका use करें।",
          steps: [
            "Review tab खोलें।",
            "Tracking group में जाएँ।",
            "Display for Review menu खोलें।",
            "All Markup चुनें।",
            "Word tracked changes और comments दिखाएगा।"
          ],
          practice: "Document में एक change करने के बाद All Markup देखें।"
        }
      },


      {
        name: "Show Markup",
        icon: "👁️",

        en: {
          what: "Controls which types of revisions, comments and formatting changes are displayed.",
          when: "Use it when you want to show or hide specific types of review information.",
          steps: [
            "Open the Review tab.",
            "Click Show Markup.",
            "Choose the type of markup you want to display.",
            "Turn Comments, Insertions and Deletions or Formatting on or off as needed.",
            "Review the document."
          ],
          practice: "Hide formatting changes while keeping comments visible."
        },

        hi: {
          what: "यह control करता है कि कौन से revisions, comments और formatting changes दिखाई दें।",
          when: "जब आपको कुछ specific review information show या hide करनी हो तब इसका use करें।",
          steps: [
            "Review tab खोलें।",
            "Show Markup पर click करें।",
            "जिस markup को दिखाना है उसे चुनें।",
            "Comments, Insertions and Deletions या Formatting को जरूरत के अनुसार on/off करें।",
            "Document को review करें।"
          ],
          practice: "Formatting changes hide करें लेकिन comments visible रखें।"
        }
      },


      {
        name: "Reviewing Pane",
        icon: "📋",

        en: {
          what: "Shows a pane containing tracked changes and comments in one place.",
          when: "Use it when a document has many revisions and you want to review them systematically.",
          steps: [
            "Open the Review tab.",
            "Click Reviewing Pane.",
            "Choose a vertical or horizontal view if available.",
            "Review the list of changes and comments.",
            "Select an item to move to that location in the document."
          ],
          practice: "Make several changes and use Reviewing Pane to review them."
        },

        hi: {
          what: "Tracked changes और comments को एक जगह pane में दिखाता है।",
          when: "जब document में बहुत सारे revisions हों और उन्हें systematically review करना हो तब इसका use करें।",
          steps: [
            "Review tab खोलें।",
            "Reviewing Pane पर click करें।",
            "अगर option मिले तो Vertical या Horizontal view चुनें।",
            "Changes और comments की list review करें।",
            "किसी item पर click करके document के उस location पर जाएँ।"
          ],
          practice: "कई changes करके Reviewing Pane से उन्हें review करें।"
        }
      },


      // --------------------------------------------------------
      // CHANGES
      // --------------------------------------------------------

      {
        name: "Accept",
        icon: "✓",

        en: {
          what: "Accepts a tracked change and makes it part of the document.",
          when: "Use it after reviewing a change when you agree that the change should remain.",
          steps: [
            "Make sure Track Changes has recorded a change.",
            "Select or move to the change.",
            "Open the Review tab.",
            "Click Accept.",
            "Choose Accept This Change or another available option."
          ],
          practice: "Make a text change and accept it."
        },

        hi: {
          what: "Tracked change को accept करके उसे document का permanent part बना देता है।",
          when: "Change review करने के बाद अगर आप उससे agree करते हैं तब इसका use करें।",
          steps: [
            "Ensure करें कि Track Changes ने कोई change record किया है।",
            "Change select करें या उस पर जाएँ।",
            "Review tab खोलें।",
            "Accept पर click करें।",
            "Accept This Change या available option चुनें।"
          ],
          practice: "एक text change करके उसे Accept करें।"
        }
      },


      {
        name: "Reject",
        icon: "✕",

        en: {
          what: "Rejects a tracked change and restores the original content.",
          when: "Use it when you do not want a tracked change to become part of the final document.",
          steps: [
            "Select or move to the tracked change.",
            "Open Review.",
            "Click Reject.",
            "Choose Reject This Change or another available option.",
            "Word removes the proposed change."
          ],
          practice: "Make a tracked change and reject it."
        },

        hi: {
          what: "Tracked change को reject करके original content वापस रखता है।",
          when: "जब आप proposed change को final document में नहीं रखना चाहते तब इसका use करें।",
          steps: [
            "Tracked change select करें या उस पर जाएँ।",
            "Review tab खोलें।",
            "Reject पर click करें।",
            "Reject This Change या available option चुनें।",
            "Word proposed change को remove कर देगा।"
          ],
          practice: "एक tracked change करके उसे Reject करें।"
        }
      },


      {
        name: "Compare",
        icon: "⇄",

        en: {
          what: "Compares two versions of a document and shows the differences.",
          when: "Use it when you have an original document and a revised document and need to identify what changed.",
          steps: [
            "Open the Review tab.",
            "Click Compare.",
            "Choose Compare.",
            "Select the Original document.",
            "Select the Revised document.",
            "Choose comparison options if required.",
            "Click OK.",
            "Word creates a comparison showing the differences."
          ],
          practice: "Create two versions of a document and compare them."
        },

        hi: {
          what: "Document के दो versions को compare करके उनके differences दिखाता है।",
          when: "जब आपके पास original और revised document हों और changes identify करने हों तब इसका use करें।",
          steps: [
            "Review tab खोलें।",
            "Compare पर click करें।",
            "Compare option चुनें।",
            "Original document select करें।",
            "Revised document select करें।",
            "जरूरत हो तो comparison options चुनें।",
            "OK पर click करें।",
            "Word differences दिखाते हुए comparison document बनाएगा।"
          ],
          practice: "Document के दो versions बनाकर उन्हें Compare करें।"
        }
      },


      {
        name: "Protect",
        icon: "🔒",

        en: {
          what: "Helps protect the document from unwanted editing or changes.",
          when: "Use it when you need to control who can edit a document or restrict certain types of editing.",
          steps: [
            "Open the Review tab.",
            "Click Protect.",
            "Choose the required protection option.",
            "Set the editing restrictions if required.",
            "Set a password if the option is available and needed.",
            "Confirm the protection settings.",
            "Save the document."
          ],
          practice: "Protect a practice document from unwanted editing."
        },

        hi: {
          what: "Document को unwanted editing या changes से protect करने में मदद करता है।",
          when: "जब आपको control करना हो कि कौन document edit कर सकता है या किस प्रकार की editing allowed है तब इसका use करें।",
          steps: [
            "Review tab खोलें।",
            "Protect पर click करें।",
            "Required protection option चुनें।",
            "जरूरत हो तो editing restrictions set करें।",
            "Option available हो तो password set करें।",
            "Protection settings confirm करें।",
            "Document save करें।"
          ],
          practice: "एक practice document को unwanted editing से protect करें।"
        }
      },


      {
        name: "Hide Ink",
        icon: "✍️",

        en: {
          what: "Hides ink annotations or handwritten ink marks in the document.",
          when: "Use it when you want to temporarily hide handwritten ink without removing the ink itself.",
          steps: [
            "Open a document containing ink annotations.",
            "Open the Review tab.",
            "Find the Ink group.",
            "Click Hide Ink.",
            "The ink marks are hidden from view.",
            "Use the option again when you want to show the ink."
          ],
          practice: "Add an ink annotation and practice hiding and showing it."
        },

        hi: {
          what: "Document में handwritten ink annotations या ink marks को hide करता है।",
          when: "Ink को delete किए बिना temporarily hide करने के लिए इसका use करें।",
          steps: [
            "Ink annotations वाला document खोलें।",
            "Review tab खोलें।",
            "Ink group में जाएँ।",
            "Hide Ink पर click करें।",
            "Ink marks hidden हो जाएँगे।",
            "Ink वापस दिखाने के लिए option फिर से use करें।"
          ],
          practice: "एक ink annotation add करके उसे hide और show करके देखें।"
        }
      }

    ]
  },


  // ============================================================
  // VIEW TAB
  // ============================================================

  View: {
    image: "View.png",

    tools: [

      // --------------------------------------------------------
      // VIEWS
      // --------------------------------------------------------

      {
        name: "Read Mode",
        icon: "📖",

        en: {
          what: "Displays the document in a reading-friendly view.",
          when: "Use it when you mainly want to read the document rather than edit it.",
          steps: [
            "Open the View tab.",
            "Click Read Mode.",
            "Word changes the document into a reading-focused layout.",
            "Use the navigation controls to move through pages.",
            "Return to Print Layout or another view when you need to edit."
          ],
          practice: "Open a multi-page document in Read Mode."
        },

        hi: {
          what: "Document को reading-friendly view में दिखाता है।",
          when: "जब document को mainly पढ़ना हो और edit नहीं करना हो तब इसका use करें।",
          steps: [
            "View tab खोलें।",
            "Read Mode पर click करें।",
            "Word document को reading-focused layout में दिखाएगा।",
            "Pages के बीच जाने के लिए navigation controls use करें।",
            "Edit करने के लिए Print Layout या दूसरे view पर वापस जाएँ।"
          ],
          practice: "Multi-page document को Read Mode में खोलें।"
        }
      },


      {
        name: "Print Layout",
        icon: "🖨️",

        en: {
          what: "Shows the document approximately as it will appear when printed.",
          when: "Use it while formatting documents that will be printed or converted to PDF.",
          steps: [
            "Open View.",
            "Click Print Layout.",
            "Review page margins, page breaks, headers, footers and objects.",
            "Make formatting changes as required."
          ],
          practice: "Open a document and check its page layout before printing."
        },

        hi: {
          what: "Document को लगभग उसी तरह दिखाता है जैसे वह print होने पर दिखाई देगा।",
          when: "Printed document या PDF तैयार करते समय इसका use करें।",
          steps: [
            "View tab खोलें।",
            "Print Layout पर click करें।",
            "Margins, page breaks, headers, footers और objects check करें।",
            "जरूरत के अनुसार formatting करें।"
          ],
          practice: "Print करने से पहले document का page layout check करें।"
        }
      },


      {
        name: "Web Layout",
        icon: "🌐",

        en: {
          what: "Displays the document in a layout similar to a web page.",
          when: "Use it when you want to see how document content flows in a web-style layout.",
          steps: [
            "Open View.",
            "Click Web Layout.",
            "Word changes the document to a web-style view.",
            "Review the content and layout."
          ],
          practice: "Open a document containing text and images in Web Layout."
        },

        hi: {
          what: "Document को web page जैसी layout में दिखाता है।",
          when: "Document content को web-style layout में देखने के लिए इसका use करें।",
          steps: [
            "View tab खोलें।",
            "Web Layout पर click करें।",
            "Word document को web-style view में बदल देगा।",
            "Content और layout को review करें।"
          ],
          practice: "Text और images वाला document Web Layout में देखें।"
        }
      },


      {
        name: "Outline",
        icon: "☷",

        en: {
          what: "Shows the document structure based on heading levels.",
          when: "Use it to organize, review and rearrange the structure of a long document.",
          steps: [
            "Open View.",
            "Click Outline.",
            "Word displays headings according to their levels.",
            "Use the outline controls to expand or collapse sections.",
            "Move or reorganize sections when required.",
            "Return to another view when finished."
          ],
          practice: "Create headings and subheadings, then view them in Outline mode."
        },

        hi: {
          what: "Heading levels के आधार पर document की structure दिखाता है।",
          when: "Long document की structure organize, review और rearrange करने के लिए इसका use करें।",
          steps: [
            "View tab खोलें।",
            "Outline पर click करें।",
            "Word headings को उनके levels के अनुसार दिखाएगा।",
            "Sections को expand या collapse करें।",
            "जरूरत हो तो sections को reorganize करें।",
            "काम पूरा होने पर दूसरे view पर वापस जाएँ।"
          ],
          practice: "Headings और subheadings बनाकर Outline mode में देखें।"
        }
      },


      {
        name: "Draft",
        icon: "📄",

        en: {
          what: "Displays the document in a simplified editing view.",
          when: "Use it when you want to focus mainly on text editing rather than page layout.",
          steps: [
            "Open View.",
            "Click Draft.",
            "Word changes to a simplified document view.",
            "Edit and review the text.",
            "Return to Print Layout when page appearance needs to be checked."
          ],
          practice: "Edit a paragraph using Draft view."
        },

        hi: {
          what: "Document को simplified editing view में दिखाता है।",
          when: "Page layout की बजाय mainly text editing पर focus करने के लिए इसका use करें।",
          steps: [
            "View tab खोलें।",
            "Draft पर click करें।",
            "Word simplified document view दिखाएगा।",
            "Text को edit और review करें।",
            "Page appearance check करने के लिए Print Layout पर वापस जाएँ।"
          ],
          practice: "Draft view में एक paragraph edit करें।"
        }
      },


      // --------------------------------------------------------
      // IMMERSIVE
      // --------------------------------------------------------

      {
        name: "Focus",
        icon: "🎯",

        en: {
          what: "Provides a distraction-reduced environment for working on the document.",
          when: "Use it when you want to concentrate on writing or editing with fewer interface distractions.",
          steps: [
            "Open View.",
            "Click Focus.",
            "Word enters a distraction-reduced workspace.",
            "Work on the document.",
            "Exit Focus mode when finished."
          ],
          practice: "Write a short paragraph using Focus mode."
        },

        hi: {
          what: "Document पर काम करते समय distractions कम करके focused workspace देता है।",
          when: "Writing या editing के समय interface distractions कम करने के लिए इसका use करें।",
          steps: [
            "View tab खोलें।",
            "Focus पर click करें।",
            "Word distraction-reduced workspace में चला जाएगा।",
            "Document पर काम करें।",
            "काम पूरा होने पर Focus mode से बाहर आएँ।"
          ],
          practice: "Focus mode में एक छोटा paragraph लिखें।"
        }
      },


      {
        name: "Immersive Reader",
        icon: "📚",

        en: {
          what: "Provides reading tools designed to make text easier to read and understand.",
          when: "Use it when you want a more comfortable reading experience or need reading assistance.",
          steps: [
            "Open View.",
            "Click Immersive Reader.",
            "Review the available reading options.",
            "Adjust text spacing, column width, page color or other available settings.",
            "Use Read Aloud if available.",
            "Exit Immersive Reader when finished."
          ],
          practice: "Open a document in Immersive Reader and change its reading settings."
        },

        hi: {
          what: "Text को पढ़ना और समझना आसान बनाने के लिए reading tools provide करता है।",
          when: "Comfortable reading या reading assistance के लिए इसका use करें।",
          steps: [
            "View tab खोलें।",
            "Immersive Reader पर click करें।",
            "Available reading options देखें।",
            "Text spacing, column width, page color आदि settings adjust करें।",
            "Available हो तो Read Aloud use करें।",
            "काम पूरा होने पर Immersive Reader से बाहर आएँ।"
          ],
          practice: "Document को Immersive Reader में खोलकर reading settings बदलें।"
        }
      },


      // --------------------------------------------------------
      // PAGE MOVEMENT
      // --------------------------------------------------------

      {
        name: "Vertical",
        icon: "↕️",

        en: {
          what: "Displays pages one below another for vertical scrolling.",
          when: "Use it when you want the traditional continuous scrolling experience.",
          steps: [
            "Open View.",
            "Find Page Movement.",
            "Click Vertical.",
            "Scroll up and down to move through the document."
          ],
          practice: "Open a multi-page document and scroll vertically."
        },

        hi: {
          what: "Pages को एक के नीचे एक दिखाता है ताकि document को vertically scroll किया जा सके।",
          when: "Traditional continuous scrolling के लिए इसका use करें।",
          steps: [
            "View tab खोलें।",
            "Page Movement group में जाएँ।",
            "Vertical पर click करें।",
            "Document में ऊपर-नीचे scroll करें।"
          ],
          practice: "Multi-page document को Vertical movement में देखें।"
        }
      },


      {
        name: "Side to Side",
        icon: "↔️",

        en: {
          what: "Moves through document pages horizontally like turning pages of a book.",
          when: "Use it when you prefer reading pages from left to right.",
          steps: [
            "Open View.",
            "Find Page Movement.",
            "Click Side to Side.",
            "Move horizontally through the pages."
          ],
          practice: "View a multi-page document using Side to Side movement."
        },

        hi: {
          what: "Document pages को horizontally दिखाता है, जैसे book के pages turn करना।",
          when: "Left-to-right page reading पसंद होने पर इसका use करें।",
          steps: [
            "View tab खोलें।",
            "Page Movement group में जाएँ।",
            "Side to Side पर click करें।",
            "Pages को horizontally move करके देखें।"
          ],
          practice: "Multi-page document को Side to Side movement में देखें।"
        }
      },


      // --------------------------------------------------------
      // SHOW
      // --------------------------------------------------------

      {
        name: "Ruler",
        icon: "📏",

        en: {
          what: "Shows or hides the ruler used for measuring and positioning content.",
          when: "Use it when setting margins, indents, tabs or object positions.",
          steps: [
            "Open View.",
            "Find the Show group.",
            "Turn Ruler on.",
            "Use the horizontal and vertical rulers to adjust positioning.",
            "Turn it off when you no longer need it."
          ],
          practice: "Show the ruler and adjust a paragraph indent."
        },

        hi: {
          what: "Content की measurement और positioning के लिए ruler show या hide करता है।",
          when: "Margins, indents, tabs या object position set करने के लिए इसका use करें।",
          steps: [
            "View tab खोलें।",
            "Show group में जाएँ।",
            "Ruler को on करें।",
            "Horizontal और vertical ruler से positioning adjust करें।",
            "जरूरत न होने पर इसे off कर दें।"
          ],
          practice: "Ruler show करके paragraph का indent adjust करें।"
        }
      },


      {
        name: "Gridlines",
        icon: "▦",

        en: {
          what: "Shows a grid on the document to help align objects.",
          when: "Use it when positioning pictures, shapes, text boxes or other objects accurately.",
          steps: [
            "Open View.",
            "Click Gridlines.",
            "A grid appears in the document area.",
            "Use the grid as a visual guide while positioning objects.",
            "Turn Gridlines off when finished."
          ],
          practice: "Insert two shapes and use Gridlines to align them."
        },

        hi: {
          what: "Objects को align करने में मदद करने के लिए document area में grid दिखाता है।",
          when: "Pictures, shapes, text boxes या objects को accurately position करने के लिए इसका use करें।",
          steps: [
            "View tab खोलें।",
            "Gridlines पर click करें।",
            "Document area में grid दिखाई देगा।",
            "Objects position करते समय grid को guide की तरह use करें।",
            "काम पूरा होने पर Gridlines off करें।"
          ],
          practice: "दो shapes insert करके Gridlines की मदद से उन्हें align करें।"
        }
      },


      {
        name: "Navigation Pane",
        icon: "☰",

        en: {
          what: "Opens a navigation pane for searching and moving through headings and pages.",
          when: "Use it to quickly find text, headings or specific parts of a long document.",
          steps: [
            "Open View.",
            "Click Navigation Pane.",
            "The navigation pane appears.",
            "Use the search box to find text.",
            "Use the headings or pages section to navigate through the document.",
            "Click a result to jump to that location."
          ],
          practice: "Create several headings and use Navigation Pane to move between them."
        },

        hi: {
          what: "Document में search करने और headings/pages के बीच जल्दी navigate करने के लिए Navigation Pane खोलता है।",
          when: "Long document में text, heading या specific section जल्दी खोजने के लिए इसका use करें।",
          steps: [
            "View tab खोलें।",
            "Navigation Pane पर click करें।",
            "Navigation pane दिखाई देगा।",
            "Search box में text खोजें।",
            "Headings या Pages section से navigate करें।",
            "Result पर click करके उस location पर जाएँ।"
          ],
          practice: "कई headings बनाकर Navigation Pane से उनके बीच जाएँ।"
        }
      },


      // --------------------------------------------------------
      // ZOOM
      // --------------------------------------------------------

      {
        name: "Zoom",
        icon: "🔍",

        en: {
          what: "Changes the magnification level of the document on screen.",
          when: "Use it when text or objects appear too small or too large on the screen.",
          steps: [
            "Open View.",
            "Click Zoom.",
            "Choose a zoom percentage or enter the required value.",
            "Click OK.",
            "Review the document at the selected zoom level."
          ],
          practice: "Set the document zoom to 150% and then return it to 100%."
        },

        hi: {
          what: "Screen पर document का magnification level बदलता है।",
          when: "जब text या objects screen पर बहुत छोटे या बड़े दिखाई दें तब इसका use करें।",
          steps: [
            "View tab खोलें।",
            "Zoom पर click करें।",
            "Required zoom percentage चुनें या value enter करें।",
            "OK पर click करें।",
            "Selected zoom level पर document देखें।"
          ],
          practice: "Document को 150% zoom पर रखें और फिर 100% पर वापस करें।"
        }
      },


      {
        name: "100%",
        icon: "100%",

        en: {
          what: "Sets the document zoom to 100 percent.",
          when: "Use it when you want to return to the standard zoom level.",
          steps: [
            "Open View.",
            "Click 100%.",
            "Word changes the document display to 100% zoom."
          ],
          practice: "Change the zoom to another value and then return to 100%."
        },

        hi: {
          what: "Document का zoom level 100 percent पर set करता है।",
          when: "Standard zoom level पर वापस आने के लिए इसका use करें।",
          steps: [
            "View tab खोलें।",
            "100% पर click करें।",
            "Word document को 100% zoom पर दिखाएगा।"
          ],
          practice: "Zoom बदलकर फिर 100% पर वापस आएँ।"
        }
      },


      {
        name: "One Page",
        icon: "▯",

        en: {
          what: "Adjusts the zoom so one complete page fits in the window.",
          when: "Use it when you want to see the complete page at once.",
          steps: [
            "Open View.",
            "Click One Page.",
            "Word adjusts the zoom automatically.",
            "The complete page becomes visible in the window."
          ],
          practice: "Use One Page to view an entire page at once."
        },

        hi: {
          what: "Zoom को automatically adjust करके एक पूरा page screen में fit करता है।",
          when: "जब पूरा page एक साथ देखना हो तब इसका use करें।",
          steps: [
            "View tab खोलें।",
            "One Page पर click करें।",
            "Word zoom automatically adjust करेगा।",
            "पूरा page window में दिखाई देगा।"
          ],
          practice: "One Page option से पूरा page एक साथ देखें।"
        }
      },


      {
        name: "Multiple Pages",
        icon: "▯▯",

        en: {
          what: "Displays multiple pages at the same time.",
          when: "Use it when you want to compare or visually review several pages together.",
          steps: [
            "Open View.",
            "Click Multiple Pages.",
            "Word adjusts the zoom.",
            "Several pages appear together."
          ],
          practice: "View two or more pages together using Multiple Pages."
        },

        hi: {
          what: "एक साथ कई pages दिखाता है।",
          when: "कई pages को एक साथ compare या visually review करने के लिए इसका use करें।",
          steps: [
            "View tab खोलें।",
            "Multiple Pages पर click करें।",
            "Word zoom automatically adjust करेगा।",
            "कई pages एक साथ दिखाई देंगे।"
          ],
          practice: "Multiple Pages से दो या अधिक pages एक साथ देखें।"
        }
      },


      {
        name: "Page Width",
        icon: "↔",

        en: {
          what: "Adjusts the zoom so the width of the page fits the available window.",
          when: "Use it when you want the document page to use the available screen width.",
          steps: [
            "Open View.",
            "Click Page Width.",
            "Word adjusts the zoom to fit the page width.",
            "Review the document."
          ],
          practice: "Use Page Width and compare it with One Page."
        },

        hi: {
          what: "Page की width को available window के अनुसार fit करने के लिए zoom adjust करता है।",
          when: "जब page को screen की available width में comfortably देखना हो तब इसका use करें।",
          steps: [
            "View tab खोलें।",
            "Page Width पर click करें।",
            "Word page width के अनुसार zoom adjust करेगा।",
            "Document को review करें।"
          ],
          practice: "Page Width और One Page के view की तुलना करें।"
        }
      },


      // --------------------------------------------------------
      // WINDOW
      // --------------------------------------------------------

      {
        name: "New Window",
        icon: "▣",

        en: {
          what: "Opens another window for the same document.",
          when: "Use it when you want to view or work with different parts of the same document at the same time.",
          steps: [
            "Open the View tab.",
            "Click New Window.",
            "Word opens another window for the current document.",
            "Use the windows to view different sections."
          ],
          practice: "Open two windows of the same document."
        },

        hi: {
          what: "Same document की एक दूसरी window खोलता है।",
          when: "एक ही document के अलग-अलग parts को एक साथ देखने या work करने के लिए इसका use करें।",
          steps: [
            "View tab खोलें।",
            "New Window पर click करें।",
            "Word current document की दूसरी window खोलेगा।",
            "दोनों windows में अलग sections देखें।"
          ],
          practice: "एक ही document की दो windows खोलें।"
        }
      },


      {
        name: "Arrange All",
        icon: "▦",

        en: {
          what: "Arranges multiple open document windows on the screen.",
          when: "Use it when several Word documents are open and you want to see them together.",
          steps: [
            "Open multiple Word documents.",
            "Open View.",
            "Click Arrange All.",
            "Word arranges the open document windows on the screen.",
            "Select the required window to continue working."
          ],
          practice: "Open three documents and arrange them all."
        },

        hi: {
          what: "Multiple open Word document windows को screen पर arrange करता है।",
          when: "जब कई Word documents open हों और उन्हें एक साथ देखना हो तब इसका use करें।",
          steps: [
            "कई Word documents open करें।",
            "View tab खोलें।",
            "Arrange All पर click करें।",
            "Word open windows को screen पर arrange करेगा।",
            "Required window select करके काम करें।"
          ],
          practice: "तीन documents खोलकर Arrange All करें।"
        }
      },


      {
        name: "Split",
        icon: "↕",

        en: {
          what: "Splits the current document window into two panes.",
          when: "Use it when you need to view or compare two different parts of the same document.",
          steps: [
            "Open the document.",
            "Open View.",
            "Click Split.",
            "A split line appears in the document.",
            "Move the split to the desired position.",
            "Use the two panes to view different parts of the document.",
            "Remove the split when finished."
          ],
          practice: "Split a long document and view two different sections at once."
        },

        hi: {
          what: "Current document window को दो panes में divide करता है।",
          when: "Same document के दो अलग parts को एक साथ देखने या compare करने के लिए इसका use करें।",
          steps: [
            "Document खोलें।",
            "View tab खोलें।",
            "Split पर click करें।",
            "Document में split line दिखाई देगी।",
            "Split को required position पर रखें।",
            "दोनों panes में अलग sections देखें।",
            "काम पूरा होने पर split remove करें।"
          ],
          practice: "Long document को split करके दो अलग sections एक साथ देखें।"
        }
      },


      {
        name: "View Side by Side",
        icon: "▯▯",

        en: {
          what: "Displays two open documents side by side for comparison.",
          when: "Use it when comparing two documents visually.",
          steps: [
            "Open the two documents you want to compare.",
            "Open the View tab.",
            "Click View Side by Side.",
            "Choose the other document if Word asks.",
            "The documents appear next to each other."
          ],
          practice: "Open two versions of a document and view them side by side."
        },

        hi: {
          what: "दो open documents को side by side दिखाता है ताकि उन्हें compare किया जा सके।",
          when: "दो documents को visually compare करने के लिए इसका use करें।",
          steps: [
            "Compare करने वाले दोनों documents open करें।",
            "View tab खोलें।",
            "View Side by Side पर click करें।",
            "अगर Word पूछे तो दूसरा document चुनें।",
            "दोनों documents side by side दिखाई देंगे।"
          ],
          practice: "Document के दो versions को side by side देखें।"
        }
      },


      {
        name: "Synchronous Scrolling",
        icon: "↕️",

        en: {
          what: "Makes two side-by-side documents scroll together.",
          when: "Use it when comparing two documents line by line or section by section.",
          steps: [
            "Open two documents.",
            "Use View Side by Side first.",
            "Open View.",
            "Click Synchronous Scrolling.",
            "Scroll one document.",
            "The other document moves at the same time."
          ],
          practice: "Compare two documents by scrolling them together."
        },

        hi: {
          what: "Side-by-side खुले दो documents को एक साथ scroll करता है।",
          when: "दो documents को line-by-line या section-by-section compare करने के लिए इसका use करें।",
          steps: [
            "दो documents open करें।",
            "पहले View Side by Side करें।",
            "View tab खोलें।",
            "Synchronous Scrolling पर click करें।",
            "एक document scroll करें।",
            "दूसरा document भी उसी समय scroll होगा।"
          ],
          practice: "दो documents को synchronized scrolling के साथ compare करें।"
        }
      },


      {
        name: "Reset Window Position",
        icon: "↺",

        en: {
          what: "Restores the position of side-by-side document windows.",
          when: "Use it when the windows have been moved or resized and you want to restore their comparison position.",
          steps: [
            "Open documents side by side.",
            "Open View.",
            "Click Reset Window Position.",
            "Word restores the window arrangement."
          ],
          practice: "Move a comparison window and then reset its position."
        },

        hi: {
          what: "Side-by-side document windows की position को restore करता है।",
          when: "जब comparison windows move या resize हो गई हों और original arrangement वापस चाहिए तब इसका use करें।",
          steps: [
            "Documents को side by side open करें।",
            "View tab खोलें।",
            "Reset Window Position पर click करें।",
            "Word windows की arrangement restore कर देगा।"
          ],
          practice: "Comparison window move करके Reset Window Position करें।"
        }
      },


      {
        name: "Switch Windows",
        icon: "▣",

        en: {
          what: "Switches between currently open Word document windows.",
          when: "Use it when several Word documents are open and you want to quickly move to another document.",
          steps: [
            "Open the View tab.",
            "Click Switch Windows.",
            "A list of open Word documents appears.",
            "Click the document you want to open."
          ],
          practice: "Open three Word documents and switch between them."
        },

        hi: {
          what: "Currently open Word document windows के बीच switch करता है।",
          when: "जब कई Word documents open हों और जल्दी से दूसरे document पर जाना हो तब इसका use करें।",
          steps: [
            "View tab खोलें।",
            "Switch Windows पर click करें।",
            "Open Word documents की list दिखाई देगी।",
            "जिस document पर जाना है उस पर click करें।"
          ],
          practice: "तीन Word documents open करके उनके बीच Switch Windows से जाएँ।"
        }
      },


      // --------------------------------------------------------
      // MACROS
      // --------------------------------------------------------

      {
        name: "Macros",
        icon: "⚙️",

        en: {
          what: "Allows you to view, run and manage macros that automate repetitive tasks.",
          when: "Use Macros when you repeatedly perform the same sequence of actions and want to automate the work.",
          steps: [
            "Open the View tab.",
            "Click Macros.",
            "Choose View Macros or the available macro option.",
            "Select a macro from the list.",
            "Click Run to execute it.",
            "Use the macro management options when you need to edit or manage macros."
          ],
          practice: "Open the Macros window and inspect the available macro options."
        },

        hi: {
          what: "Macros को view, run और manage करने देता है जो repetitive tasks को automate करते हैं।",
          when: "जब एक ही sequence of actions बार-बार करना हो और उसे automate करना हो तब Macros का use करें।",
          steps: [
            "View tab खोलें।",
            "Macros पर click करें।",
            "View Macros या available macro option चुनें।",
            "List में से macro select करें।",
            "Run पर click करके macro चलाएँ।",
            "जरूरत के अनुसार macros को manage या edit करें।"
          ],
          practice: "Macros window खोलकर available macro options को देखें।"
        }
      }

    ]
  },
    // ============================================================
  // INSERT TAB
  // ============================================================

  Insert: {
    image: "Insert.png",

    tools: [

      // --------------------------------------------------------
      // PAGES
      // --------------------------------------------------------

      {
        name: "Cover Page",
        icon: "📄",

        en: {
          what: "Adds a ready-made cover page to the beginning of a document.",
          when: "Use it for projects, reports, assignments and other formal documents that need a professional first page.",
          steps: [
            "Open the Insert tab.",
            "Click Cover Page.",
            "Choose a design from the gallery.",
            "Word inserts the cover page at the beginning of the document.",
            "Click the placeholder fields.",
            "Enter your title, name, date and other required information.",
            "Save the document."
          ],
          practice: "Create a project report and add a professional Cover Page."
        },

        hi: {
          what: "Document के beginning में ready-made cover page add करता है।",
          when: "Project, report, assignment और formal documents के लिए इसका use करें।",
          steps: [
            "Insert tab खोलें।",
            "Cover Page पर click करें।",
            "Gallery में से कोई design चुनें।",
            "Word document के beginning में cover page insert करेगा।",
            "Placeholder fields पर click करें।",
            "Title, Name, Date और दूसरी required information भरें।",
            "Document save करें।"
          ],
          practice: "एक project report बनाकर professional Cover Page लगाएँ।"
        }
      },


      {
        name: "Blank Page",
        icon: "📃",

        en: {
          what: "Inserts a completely blank page at the current location.",
          when: "Use it when you need an empty page between sections or before adding new content.",
          steps: [
            "Place the cursor where the new page should appear.",
            "Open Insert.",
            "Click Blank Page.",
            "Word inserts a new blank page.",
            "Add your required content to the new page."
          ],
          practice: "Insert a blank page between two sections of a project."
        },

        hi: {
          what: "Current location पर एक पूरी blank page insert करता है।",
          when: "Sections के बीच या नया content शुरू करने के लिए इसका use करें।",
          steps: [
            "जहाँ नई page चाहिए वहाँ cursor रखें।",
            "Insert tab खोलें।",
            "Blank Page पर click करें।",
            "Word एक नई blank page insert करेगा।",
            "नई page पर required content लिखें।"
          ],
          practice: "Project की दो sections के बीच एक blank page insert करें।"
        }
      },


      {
        name: "Page Break",
        icon: "↵",

        en: {
          what: "Moves the content after the cursor to the beginning of the next page.",
          when: "Use it when you want a new page to start without repeatedly pressing Enter.",
          steps: [
            "Place the cursor where the new page should begin.",
            "Open Insert.",
            "Click Page Break.",
            "Everything after the cursor moves to the next page.",
            "Continue typing on the new page."
          ],
          practice: "Create a two-page document using Page Break."
        },

        hi: {
          what: "Cursor के बाद के content को next page की शुरुआत में भेजता है।",
          when: "नई page शुरू करने के लिए बार-बार Enter दबाने की बजाय इसका use करें।",
          steps: [
            "जहाँ नई page शुरू करनी है वहाँ cursor रखें।",
            "Insert tab खोलें।",
            "Page Break पर click करें।",
            "Cursor के बाद का content next page पर चला जाएगा।",
            "नई page पर typing continue करें।"
          ],
          practice: "Page Break का use करके two-page document बनाएँ।"
        }
      },


      // --------------------------------------------------------
      // TABLES
      // --------------------------------------------------------

      {
        name: "Table",
        icon: "▦",

        en: {
          what: "Creates a table using rows and columns.",
          when: "Use a table when information needs to be arranged in rows and columns, such as student marks, attendance, price lists or schedules.",
          steps: [
            "Place the cursor where you want the table.",
            "Open the Insert tab.",
            "Click Table.",
            "Move the pointer over the grid to select the required number of columns and rows.",
            "Click to insert the table.",
            "Enter information into the cells.",
            "Use the Table Design and Layout options to format the table."
          ],
          practice: "Create a table with 5 students, their subjects and marks."
        },

        hi: {
          what: "Rows और columns की मदद से table बनाता है।",
          when: "Student marks, attendance, price list या schedule जैसी information को rows और columns में arrange करने के लिए इसका use करें।",
          steps: [
            "जहाँ table चाहिए वहाँ cursor रखें।",
            "Insert tab खोलें।",
            "Table पर click करें।",
            "Grid में required rows और columns select करें।",
            "Click करके table insert करें।",
            "Cells में information भरें।",
            "Table Design और Layout options से table को format करें।"
          ],
          practice: "5 students के subjects और marks की table बनाएँ।"
        }
      },


      {
        name: "Draw Table",
        icon: "✏️",

        en: {
          what: "Allows you to manually draw the rows and columns of a table.",
          when: "Use it when you need a custom table layout with different cell sizes.",
          steps: [
            "Open Insert.",
            "Click Table.",
            "Choose Draw Table.",
            "Drag the mouse to draw the outer border.",
            "Draw vertical lines for columns.",
            "Draw horizontal lines for rows.",
            "Enter your information into the cells."
          ],
          practice: "Draw a custom table containing different-sized sections."
        },

        hi: {
          what: "Table की rows और columns को manually draw करने देता है।",
          when: "जब अलग-अलग cell sizes वाली custom table चाहिए तब इसका use करें।",
          steps: [
            "Insert tab खोलें।",
            "Table पर click करें।",
            "Draw Table चुनें।",
            "Mouse से outer border draw करें।",
            "Vertical lines से columns बनाएँ।",
            "Horizontal lines से rows बनाएँ।",
            "Cells में information भरें।"
          ],
          practice: "Different-sized sections वाली custom table draw करें।"
        }
      },


      // --------------------------------------------------------
      // ILLUSTRATIONS
      // --------------------------------------------------------

      {
        name: "Pictures",
        icon: "🖼️",

        en: {
          what: "Inserts a picture from your computer or available picture sources.",
          when: "Use it when you need to add photographs, screenshots, diagrams or other images to a document.",
          steps: [
            "Place the cursor where you want the picture.",
            "Open Insert.",
            "Click Pictures.",
            "Choose the location or source of the picture.",
            "Select the image.",
            "Click Insert.",
            "Resize or reposition the picture using the picture controls."
          ],
          practice: "Insert a photograph into a project report and resize it."
        },

        hi: {
          what: "Computer या available picture source से image document में insert करता है।",
          when: "Photo, screenshot, diagram या दूसरी images add करने के लिए इसका use करें।",
          steps: [
            "जहाँ picture चाहिए वहाँ cursor रखें।",
            "Insert tab खोलें।",
            "Pictures पर click करें।",
            "Picture का source/location चुनें।",
            "Image select करें।",
            "Insert पर click करें।",
            "Picture को resize या reposition करें।"
          ],
          practice: "Project report में एक photograph insert करके उसका size बदलें।"
        }
      },


      {
        name: "Shapes",
        icon: "🔷",

        en: {
          what: "Inserts shapes such as rectangles, circles, arrows, lines and flowchart shapes.",
          when: "Use shapes for diagrams, flowcharts, labels, callouts and visual explanations.",
          steps: [
            "Open Insert.",
            "Click Shapes.",
            "Choose the required shape.",
            "Click and drag on the page to draw it.",
            "Resize the shape if required.",
            "Use Shape Format options to change fill, outline and effects.",
            "Type inside the shape if needed."
          ],
          practice: "Create a simple three-step process using arrows and rectangles."
        },

        hi: {
          what: "Rectangle, circle, arrow, line और flowchart shapes जैसी shapes insert करता है।",
          when: "Diagram, flowchart, labels, callouts और visual explanation बनाने के लिए इसका use करें।",
          steps: [
            "Insert tab खोलें।",
            "Shapes पर click करें।",
            "Required shape चुनें।",
            "Page पर click और drag करके shape draw करें।",
            "जरूरत हो तो shape resize करें।",
            "Shape Format से fill, outline और effects बदलें।",
            "जरूरत हो तो shape के अंदर text लिखें।"
          ],
          practice: "Arrows और rectangles से तीन-step process का diagram बनाएँ।"
        }
      },


      {
        name: "Icons",
        icon: "⭐",

        en: {
          what: "Adds ready-made icons that can be used as visual symbols in a document.",
          when: "Use icons to make instructions, presentations, reports and educational documents more visual.",
          steps: [
            "Open Insert.",
            "Click Icons.",
            "Search or browse the available icons.",
            "Select one or more icons.",
            "Click Insert.",
            "Resize and position the icon.",
            "Use graphics formatting options to customize it."
          ],
          practice: "Add icons for computer, email and telephone to an information sheet."
        },

        hi: {
          what: "Document में ready-made icons को visual symbols की तरह add करता है।",
          when: "Instructions, reports और educational documents को ज्यादा visual बनाने के लिए इसका use करें।",
          steps: [
            "Insert tab खोलें।",
            "Icons पर click करें।",
            "Available icons search या browse करें।",
            "एक या अधिक icons select करें।",
            "Insert पर click करें।",
            "Icon का size और position adjust करें।",
            "Graphics formatting options से customize करें।"
          ],
          practice: "Information sheet में computer, email और telephone के icons add करें।"
        }
      },


      {
        name: "3D Models",
        icon: "🧊",

        en: {
          what: "Inserts three-dimensional models into a document.",
          when: "Use 3D models when a topic is easier to understand through a three-dimensional visual.",
          steps: [
            "Open Insert.",
            "Click 3D Models.",
            "Choose an available source.",
            "Search or browse for a model.",
            "Select the model.",
            "Click Insert.",
            "Use the controls to rotate or resize the model."
          ],
          practice: "Insert a 3D model of an object and change its view."
        },

        hi: {
          what: "Document में three-dimensional models insert करता है।",
          when: "जब किसी topic को 3D visual से समझना आसान हो तब इसका use करें।",
          steps: [
            "Insert tab खोलें।",
            "3D Models पर click करें।",
            "Available source चुनें।",
            "Model search या browse करें।",
            "Required model select करें।",
            "Insert पर click करें।",
            "Model को rotate या resize करें।"
          ],
          practice: "किसी object का 3D model insert करके उसका view बदलें।"
        }
      },


      {
        name: "SmartArt",
        icon: "🔗",

        en: {
          what: "Creates professional diagrams for processes, relationships, lists, hierarchies and other information.",
          when: "Use SmartArt when information is easier to understand as a visual diagram.",
          steps: [
            "Open Insert.",
            "Click SmartArt.",
            "Choose a category such as List, Process, Cycle, Hierarchy or Relationship.",
            "Select a SmartArt layout.",
            "Click OK.",
            "Enter your text in the SmartArt text pane or directly in the shapes.",
            "Use SmartArt Design options to add, remove or rearrange items."
          ],
          practice: "Create a SmartArt diagram showing the steps of a computer learning process."
        },

        hi: {
          what: "Process, relationship, list, hierarchy और दूसरी information के professional diagrams बनाता है।",
          when: "जब information को visual diagram के रूप में समझाना आसान हो तब SmartArt का use करें।",
          steps: [
            "Insert tab खोलें।",
            "SmartArt पर click करें।",
            "List, Process, Cycle, Hierarchy या Relationship जैसी category चुनें।",
            "SmartArt layout select करें।",
            "OK पर click करें।",
            "Text Pane या shapes के अंदर text लिखें।",
            "SmartArt Design से items add, remove या rearrange करें।"
          ],
          practice: "Computer learning process के steps दिखाने वाला SmartArt बनाएँ।"
        }
      },


      {
        name: "Chart",
        icon: "📊",

        en: {
          what: "Inserts a chart to represent numerical data visually.",
          when: "Use charts when data is easier to understand through a visual comparison or trend.",
          steps: [
            "Open Insert.",
            "Click Chart.",
            "Choose a chart type such as Column, Bar, Line or Pie.",
            "Click OK.",
            "An Excel data sheet opens.",
            "Replace the sample data with your own data.",
            "Close or return to Word after entering the data.",
            "Format the chart if required."
          ],
          practice: "Create a column chart showing marks of five students."
        },

        hi: {
          what: "Numerical data को visual form में दिखाने के लिए chart insert करता है।",
          when: "जब data को comparison या trend के रूप में समझाना हो तब chart का use करें।",
          steps: [
            "Insert tab खोलें।",
            "Chart पर click करें।",
            "Column, Bar, Line या Pie जैसे chart type चुनें।",
            "OK पर click करें।",
            "Excel data sheet खुलेगी।",
            "Sample data की जगह अपनी data भरें।",
            "Data भरने के बाद Excel area से वापस Word में आएँ।",
            "जरूरत हो तो chart format करें।"
          ],
          practice: "5 students के marks दिखाने वाला column chart बनाएँ।"
        }
      },


      {
        name: "Screenshot",
        icon: "📸",

        en: {
          what: "Inserts a screenshot of an available open window or allows a screen clipping.",
          when: "Use it when you need to quickly add a screen image to instructions, reports or tutorials.",
          steps: [
            "Open the window you want to capture.",
            "Open Insert in Word.",
            "Click Screenshot.",
            "Choose an available window or select Screen Clipping if available.",
            "Capture the required area.",
            "The screenshot is inserted into the document."
          ],
          practice: "Capture a screenshot of a software window and insert it into a tutorial."
        },

        hi: {
          what: "Available open window का screenshot या screen clipping document में insert करता है।",
          when: "Tutorial, report या instructions में screen image add करने के लिए इसका use करें।",
          steps: [
            "जिस window का screenshot लेना है उसे open रखें।",
            "Word में Insert tab खोलें।",
            "Screenshot पर click करें।",
            "Available window चुनें या Screen Clipping option use करें।",
            "Required area capture करें।",
            "Screenshot document में insert हो जाएगा।"
          ],
          practice: "किसी software window का screenshot लेकर tutorial में insert करें।"
        }
      },


      // --------------------------------------------------------
      // LINKS
      // --------------------------------------------------------

      {
        name: "Link",
        icon: "🔗",

        en: {
          what: "Creates a clickable hyperlink to a webpage, file, email address or another location.",
          when: "Use it when you want readers to quickly open another webpage, file or location.",
          steps: [
            "Select the text that should become clickable.",
            "Open Insert.",
            "Click Link.",
            "Enter or select the destination.",
            "Check the displayed text and address.",
            "Click OK.",
            "Ctrl + Click the link to open it."
          ],
          practice: "Create a clickable link to a website."
        },

        hi: {
          what: "Clickable hyperlink बनाता है जो webpage, file, email address या दूसरी location खोल सकता है।",
          when: "Reader को किसी website, file या location पर जल्दी भेजने के लिए इसका use करें।",
          steps: [
            "जिस text को clickable बनाना है उसे select करें।",
            "Insert tab खोलें।",
            "Link पर click करें।",
            "Destination enter या select करें।",
            "Text और address check करें।",
            "OK पर click करें।",
            "Link खोलने के लिए Ctrl + Click करें।"
          ],
          practice: "किसी website का clickable link बनाएँ।"
        }
      },


      {
        name: "Bookmark",
        icon: "🔖",

        en: {
          what: "Marks a specific location or piece of text so you can quickly return to it later.",
          when: "Use bookmarks in long documents when you frequently need to jump to a particular section.",
          steps: [
            "Select the text or place the cursor at the location.",
            "Open Insert.",
            "Click Bookmark.",
            "Enter a bookmark name without spaces.",
            "Click Add.",
            "Use the Bookmark option later to return to that location."
          ],
          practice: "Bookmark an important section of a long document."
        },

        hi: {
          what: "Document की किसी specific location या text को mark करता है ताकि बाद में जल्दी वहाँ वापस जा सकें।",
          when: "Long document में किसी particular section पर बार-बार जाना हो तब Bookmark का use करें।",
          steps: [
            "Text select करें या required location पर cursor रखें।",
            "Insert tab खोलें।",
            "Bookmark पर click करें।",
            "बिना spaces के bookmark name लिखें।",
            "Add पर click करें।",
            "बाद में Bookmark option से उस location पर वापस जाएँ।"
          ],
          practice: "Long document की एक important section को bookmark करें।"
        }
      },


      {
        name: "Cross-reference",
        icon: "↗️",

        en: {
          what: "Creates a reference to another heading, figure, table, bookmark or numbered item in the same document.",
          when: "Use it when you want readers to jump to another part of the document.",
          steps: [
            "Place the cursor where the reference should appear.",
            "Open Insert.",
            "Click Cross-reference.",
            "Choose the reference type.",
            "Select the item you want to reference.",
            "Choose what information should be inserted.",
            "Click Insert."
          ],
          practice: "Create a sentence that refers to a figure elsewhere in the document."
        },

        hi: {
          what: "Same document में किसी heading, figure, table, bookmark या numbered item का reference बनाता है।",
          when: "Reader को document के किसी दूसरे part पर भेजने के लिए इसका use करें।",
          steps: [
            "जहाँ reference चाहिए वहाँ cursor रखें।",
            "Insert tab खोलें।",
            "Cross-reference पर click करें।",
            "Reference type चुनें।",
            "जिस item को reference करना है उसे select करें।",
            "Insert की जाने वाली information चुनें।",
            "Insert पर click करें।"
          ],
          practice: "Document में किसी दूसरी figure को refer करने वाला sentence बनाएँ।"
        }
      },


      // --------------------------------------------------------
      // COMMENTS
      // --------------------------------------------------------

      {
        name: "Comment",
        icon: "💬",

        en: {
          what: "Adds a comment to selected text or a specific location.",
          when: "Use comments to leave notes, suggestions or questions while reviewing a document.",
          steps: [
            "Select the text you want to comment on.",
            "Open Insert.",
            "Click Comment.",
            "Type your message.",
            "Post or save the comment.",
            "The comment appears beside the document."
          ],
          practice: "Add a comment asking another student to improve a sentence."
        },

        hi: {
          what: "Selected text या document location पर comment add करता है।",
          when: "Document review करते समय note, suggestion या question देने के लिए comments का use करें।",
          steps: [
            "जिस text पर comment करना है उसे select करें।",
            "Insert tab खोलें।",
            "Comment पर click करें।",
            "अपना message लिखें।",
            "Comment post या save करें।",
            "Comment document के side में दिखाई देगा।"
          ],
          practice: "किसी sentence को improve करने के लिए दूसरे student के लिए comment लिखें।"
        }
      },


      // --------------------------------------------------------
      // HEADER & FOOTER
      // --------------------------------------------------------

      {
        name: "Header",
        icon: "⬆️",

        en: {
          what: "Adds content to the top area of pages.",
          when: "Use headers for document titles, company names, chapter names or other information that should appear on multiple pages.",
          steps: [
            "Open Insert.",
            "Click Header.",
            "Choose a built-in header design or select Edit Header.",
            "Type the required information.",
            "Use Header & Footer options to customize it.",
            "Click Close Header and Footer."
          ],
          practice: "Add your project name to the header of every page."
        },

        hi: {
          what: "Pages के top area में content add करता है।",
          when: "Document title, company name, chapter name या ऐसी information के लिए इसका use करें जो कई pages पर दिखाई दे।",
          steps: [
            "Insert tab खोलें।",
            "Header पर click करें।",
            "Built-in design चुनें या Edit Header चुनें।",
            "Required information type करें।",
            "Header & Footer options से customize करें।",
            "Close Header and Footer पर click करें।"
          ],
          practice: "हर page के header में project name add करें।"
        }
      },


      {
        name: "Footer",
        icon: "⬇️",

        en: {
          what: "Adds content to the bottom area of pages.",
          when: "Use footers for page information, document names, dates, copyright information or other repeated content.",
          steps: [
            "Open Insert.",
            "Click Footer.",
            "Choose a built-in footer design or select Edit Footer.",
            "Enter the required information.",
            "Format the footer if required.",
            "Click Close Header and Footer."
          ],
          practice: "Add your name and project title to the footer."
        },

        hi: {
          what: "Pages के bottom area में content add करता है।",
          when: "Page information, document name, date, copyright या repeated information के लिए इसका use करें।",
          steps: [
            "Insert tab खोलें।",
            "Footer पर click करें।",
            "Built-in footer design चुनें या Edit Footer चुनें।",
            "Required information लिखें।",
            "जरूरत हो तो footer format करें।",
            "Close Header and Footer पर click करें।"
          ],
          practice: "Footer में अपना name और project title add करें।"
        }
      },


      {
        name: "Page Number",
        icon: "#",

        en: {
          what: "Adds page numbers to the document.",
          when: "Use page numbers in reports, assignments, books and other multi-page documents.",
          steps: [
            "Open Insert.",
            "Click Page Number.",
            "Choose Top of Page, Bottom of Page or another location.",
            "Select a page-number style.",
            "Word inserts page numbers automatically.",
            "Use Format Page Numbers if you need to change numbering settings."
          ],
          practice: "Add page numbers at the bottom-right of every page."
        },

        hi: {
          what: "Document के pages पर page numbers automatically add करता है।",
          when: "Reports, assignments, books और multi-page documents में इसका use करें।",
          steps: [
            "Insert tab खोलें।",
            "Page Number पर click करें।",
            "Top of Page, Bottom of Page या required location चुनें।",
            "Page number style select करें।",
            "Word automatically page numbers add करेगा।",
            "Numbering settings बदलने के लिए Format Page Numbers use करें।"
          ],
          practice: "हर page के bottom-right में page number लगाएँ।"
        }
      },


      // --------------------------------------------------------
      // TEXT
      // --------------------------------------------------------

      {
        name: "Text Box",
        icon: "▣",

        en: {
          what: "Creates a movable box containing text.",
          when: "Use text boxes for side notes, labels, callouts, special information or page layouts.",
          steps: [
            "Open Insert.",
            "Click Text Box.",
            "Choose a built-in text box or Draw Text Box.",
            "If drawing, click and drag to create the box.",
            "Type your text.",
            "Resize or move the text box.",
            "Use Shape Format to change its appearance."
          ],
          practice: "Create a text box containing an important note."
        },

        hi: {
          what: "Movable text box बनाता है जिसमें text लिखा जा सकता है।",
          when: "Side notes, labels, callouts या special information के लिए इसका use करें।",
          steps: [
            "Insert tab खोलें।",
            "Text Box पर click करें।",
            "Built-in text box चुनें या Draw Text Box करें।",
            "Draw करने के लिए click और drag करें।",
            "Text लिखें।",
            "Text box को resize या move करें।",
            "Shape Format से appearance बदलें।"
          ],
          practice: "Important note दिखाने वाला text box बनाएँ।"
        }
      },


      {
        name: "WordArt",
        icon: "A",

        en: {
          what: "Adds decorative and stylized text to a document.",
          when: "Use WordArt for titles, posters, invitations and other designs where normal text needs a visual effect.",
          steps: [
            "Open Insert.",
            "Click WordArt.",
            "Choose a WordArt style.",
            "Type your text.",
            "Select the WordArt to access formatting options.",
            "Change its fill, outline, size or effects if required."
          ],
          practice: "Create a decorative title using WordArt."
        },

        hi: {
          what: "Decorative और stylized text create करता है।",
          when: "Title, poster, invitation या design में attractive text के लिए इसका use करें।",
          steps: [
            "Insert tab खोलें।",
            "WordArt पर click करें।",
            "WordArt style चुनें।",
            "अपना text लिखें।",
            "WordArt select करके formatting options खोलें।",
            "Fill, outline, size और effects बदलें।"
          ],
          practice: "WordArt का use करके decorative title बनाएँ।"
        }
      },


      {
        name: "Drop Cap",
        icon: "D",

        en: {
          what: "Makes the first letter of a paragraph larger and drops it into multiple lines.",
          when: "Use it for magazines, newsletters, stories and decorative documents.",
          steps: [
            "Place the cursor inside the paragraph.",
            "Open Insert.",
            "Click Drop Cap.",
            "Choose Dropped or In Margin.",
            "Word enlarges the first letter.",
            "Use Drop Cap Options if you need to change its size or position."
          ],
          practice: "Apply a Drop Cap to the first paragraph of a story."
        },

        hi: {
          what: "Paragraph के first letter को बड़ा करके कई lines तक नीचे दिखाता है।",
          when: "Magazine, newsletter, story या decorative document में इसका use करें।",
          steps: [
            "Paragraph के अंदर cursor रखें।",
            "Insert tab खोलें।",
            "Drop Cap पर click करें।",
            "Dropped या In Margin चुनें।",
            "Word first letter को बड़ा कर देगा।",
            "Size और position बदलने के लिए Drop Cap Options use करें।"
          ],
          practice: "Story के first paragraph पर Drop Cap लगाएँ।"
        }
      },


      {
        name: "Signature Line",
        icon: "✍️",

        en: {
          what: "Adds a signature line where a person can sign a document.",
          when: "Use it in forms, official letters, agreements and documents requiring a signature.",
          steps: [
            "Place the cursor where the signature should appear.",
            "Open Insert.",
            "Click Signature Line.",
            "Enter the signer's name and other information if required.",
            "Click OK.",
            "The signature line appears in the document."
          ],
          practice: "Add a signature line to an official letter."
        },

        hi: {
          what: "Document में signature करने के लिए signature line add करता है।",
          when: "Official letters, forms, agreements और signature वाले documents में इसका use करें।",
          steps: [
            "जहाँ signature चाहिए वहाँ cursor रखें।",
            "Insert tab खोलें।",
            "Signature Line पर click करें।",
            "Signer का name और required information भरें।",
            "OK पर click करें।",
            "Document में signature line दिखाई देगी।"
          ],
          practice: "Official letter में signature line add करें।"
        }
      },


      {
        name: "Date & Time",
        icon: "📅",

        en: {
          what: "Inserts the current date and/or time into the document.",
          when: "Use it for letters, forms, reports and documents where the date needs to be displayed.",
          steps: [
            "Place the cursor where the date or time should appear.",
            "Open Insert.",
            "Click Date & Time.",
            "Choose the required date or time format.",
            "Select the update option if required.",
            "Click OK."
          ],
          practice: "Insert today's date in a formal letter."
        },

        hi: {
          what: "Document में current date और/or time insert करता है।",
          when: "Letters, forms और reports में date दिखाने के लिए इसका use करें।",
          steps: [
            "जहाँ date या time चाहिए वहाँ cursor रखें।",
            "Insert tab खोलें।",
            "Date & Time पर click करें।",
            "Required format चुनें।",
            "जरूरत हो तो automatic update option चुनें।",
            "OK पर click करें।"
          ],
          practice: "Formal letter में today's date insert करें।"
        }
      },


      {
        name: "Object",
        icon: "📦",

        en: {
          what: "Embeds or inserts content from another application or file into the Word document.",
          when: "Use it when you need to include content such as an Excel worksheet or another file inside the Word document.",
          steps: [
            "Place the cursor where the object should appear.",
            "Open Insert.",
            "Click Object.",
            "Choose Create New or Create from File.",
            "Select the required application or file.",
            "Choose the available linking or display options if required.",
            "Click OK."
          ],
          practice: "Insert an Excel worksheet into a Word document."
        },

        hi: {
          what: "दूसरे application या file का content Word document में embed या insert करता है।",
          when: "Excel worksheet या किसी दूसरी file को Word document के अंदर include करने के लिए इसका use करें।",
          steps: [
            "जहाँ object चाहिए वहाँ cursor रखें।",
            "Insert tab खोलें।",
            "Object पर click करें।",
            "Create New या Create from File चुनें।",
            "Required application या file select करें।",
            "जरूरत हो तो linking/display options चुनें।",
            "OK पर click करें।"
          ],
          practice: "Word document में एक Excel worksheet insert करें।"
        }
      },


      // --------------------------------------------------------
      // EQUATIONS & SYMBOLS
      // --------------------------------------------------------

      {
        name: "Equation",
        icon: "∑",

        en: {
          what: "Inserts mathematical equations and formulas using a special equation editor.",
          when: "Use it for mathematics, science, engineering and technical documents.",
          steps: [
            "Place the cursor where the equation should appear.",
            "Open Insert.",
            "Click Equation.",
            "Choose a built-in equation or select Insert New Equation.",
            "Use the Equation tools to add fractions, powers, symbols and other structures.",
            "Enter the required formula."
          ],
          practice: "Insert the quadratic formula into a document."
        },

        hi: {
          what: "Special equation editor की मदद से mathematical equations और formulas insert करता है।",
          when: "Mathematics, science, engineering और technical documents में इसका use करें।",
          steps: [
            "जहाँ equation चाहिए वहाँ cursor रखें।",
            "Insert tab खोलें।",
            "Equation पर click करें।",
            "Built-in equation चुनें या Insert New Equation करें।",
            "Equation tools से fractions, powers और symbols add करें।",
            "Required formula लिखें।"
          ],
          practice: "Document में quadratic formula insert करें।"
        }
      },


      {
        name: "Symbol",
        icon: "Ω",

        en: {
          what: "Inserts special characters and symbols that may not be available directly on the keyboard.",
          when: "Use it for mathematical symbols, currency symbols, special characters and technical notation.",
          steps: [
            "Place the cursor where the symbol should appear.",
            "Open Insert.",
            "Click Symbol.",
            "Choose a symbol from the list.",
            "Click Insert.",
            "Close the symbol window if necessary."
          ],
          practice: "Insert the copyright, degree and rupee symbols."
        },

        hi: {
          what: "Special characters और symbols insert करता है जो keyboard पर directly available नहीं होते।",
          when: "Mathematical symbols, currency symbols, special characters और technical notation के लिए इसका use करें।",
          steps: [
            "जहाँ symbol चाहिए वहाँ cursor रखें।",
            "Insert tab खोलें।",
            "Symbol पर click करें।",
            "List में से required symbol चुनें।",
            "Insert पर click करें।",
            "जरूरत हो तो symbol window close करें।"
          ],
          practice: "Copyright, degree और rupee symbols insert करें।"
        }
      }

    ]
  },
    // ============================================================
  // LAYOUT / PAGE LAYOUT TAB
  // ============================================================

  Layout: {
    image: "Layout.png",

    tools: [

      // --------------------------------------------------------
      // PAGE SETUP
      // --------------------------------------------------------

      {
        name: "Margins",
        icon: "📐",

        en: {
          what: "Controls the amount of empty space around the edges of a page.",
          when: "Use Margins when you need to adjust the space around the document content for printing, reports, assignments or professional documents.",
          steps: [
            "Open the Layout tab.",
            "Click Margins.",
            "Choose a preset such as Normal, Narrow, Moderate or Wide.",
            "If you need a custom margin, click Custom Margins.",
            "Enter the Top, Bottom, Left and Right values.",
            "Click OK.",
            "Check the document to make sure the content fits correctly."
          ],
          practice: "Set the document margins to 1 inch on all four sides."
        },

        hi: {
          what: "Page के चारों तरफ content और page edge के बीच की खाली जगह को control करता है।",
          when: "Printing, reports, assignments या professional documents में page की space adjust करने के लिए Margins का use करें।",
          steps: [
            "Layout tab खोलें।",
            "Margins पर click करें।",
            "Normal, Narrow, Moderate या Wide जैसा preset चुनें।",
            "Custom margin चाहिए तो Custom Margins पर click करें।",
            "Top, Bottom, Left और Right values enter करें।",
            "OK पर click करें।",
            "Document check करें कि content सही तरीके से fit हो रहा है।"
          ],
          practice: "चारों तरफ 1 inch margin वाला document बनाएँ।"
        }
      },


      {
        name: "Orientation",
        icon: "↕️",

        en: {
          what: "Changes the page direction between Portrait and Landscape.",
          when: "Use Portrait for normal documents and Landscape when the page needs more horizontal space, such as wide tables or charts.",
          steps: [
            "Open Layout.",
            "Click Orientation.",
            "Choose Portrait or Landscape.",
            "Word changes the page direction.",
            "Check the document layout after changing it."
          ],
          practice: "Change a document from Portrait to Landscape and then back to Portrait."
        },

        hi: {
          what: "Page की direction को Portrait या Landscape में बदलता है।",
          when: "Normal documents के लिए Portrait और wide tables/charts के लिए Landscape use करें।",
          steps: [
            "Layout tab खोलें।",
            "Orientation पर click करें।",
            "Portrait या Landscape चुनें।",
            "Word page direction बदल देगा।",
            "Orientation बदलने के बाद document layout check करें।"
          ],
          practice: "Document को Portrait से Landscape और फिर वापस Portrait करें।"
        }
      },


      {
        name: "Size",
        icon: "📄",

        en: {
          what: "Changes the paper size used by the document.",
          when: "Use it when your document needs to be printed on a specific paper size such as A4, Letter or Legal.",
          steps: [
            "Open Layout.",
            "Click Size.",
            "Choose the required paper size.",
            "For example, choose A4 for many standard documents.",
            "Check the document because changing paper size can affect page breaks and layout."
          ],
          practice: "Set the document paper size to A4."
        },

        hi: {
          what: "Document के लिए paper size बदलता है।",
          when: "A4, Letter या Legal जैसे specific paper size पर document print करना हो तब इसका use करें।",
          steps: [
            "Layout tab खोलें।",
            "Size पर click करें।",
            "Required paper size चुनें।",
            "उदाहरण के लिए standard document के लिए A4 चुनें।",
            "Paper size बदलने के बाद page breaks और layout check करें।"
          ],
          practice: "Document का paper size A4 set करें।"
        }
      },


      {
        name: "Columns",
        icon: "▥",

        en: {
          what: "Divides text into multiple vertical columns on a page.",
          when: "Use Columns for newsletters, newspapers, brochures and documents where text should flow from one column to another.",
          steps: [
            "Select the text if you want columns for only part of the document.",
            "Open Layout.",
            "Click Columns.",
            "Choose One, Two, Three, Left or Right.",
            "For more control, click More Columns.",
            "Set the number and spacing of columns.",
            "Click OK."
          ],
          practice: "Create a two-column newsletter."
        },

        hi: {
          what: "Page के text को multiple vertical columns में divide करता है।",
          when: "Newsletter, newspaper, brochure या newspaper-style document के लिए Columns का use करें।",
          steps: [
            "अगर केवल कुछ text पर columns चाहिए तो उसे select करें।",
            "Layout tab खोलें।",
            "Columns पर click करें।",
            "One, Two, Three, Left या Right चुनें।",
            "More Columns से ज्यादा settings मिलती हैं।",
            "Columns की संख्या और spacing set करें।",
            "OK पर click करें।"
          ],
          practice: "दो-column वाला newsletter बनाएँ।"
        }
      },


      {
        name: "Breaks",
        icon: "↵",

        en: {
          what: "Inserts page, section or column breaks to control how content is divided.",
          when: "Use Breaks when different parts of a document need different page layouts, headers, footers, columns or page numbering.",
          steps: [
            "Place the cursor where the break should occur.",
            "Open Layout.",
            "Click Breaks.",
            "Choose the required type under Page Breaks or Section Breaks.",
            "Continue editing the document.",
            "Check the layout after inserting the break."
          ],
          practice: "Create two sections and give each section a different layout."
        },

        hi: {
          what: "Page, section या column breaks insert करके document के content को control करता है।",
          when: "जब document के अलग sections में अलग layout, header, footer, columns या page numbering चाहिए तब Breaks का use करें।",
          steps: [
            "जहाँ break चाहिए वहाँ cursor रखें।",
            "Layout tab खोलें।",
            "Breaks पर click करें।",
            "Page Breaks या Section Breaks में से required type चुनें।",
            "Document editing continue करें।",
            "Break लगाने के बाद layout check करें।"
          ],
          practice: "दो sections बनाएँ और दोनों में अलग layout रखें।"
        }
      },


      {
        name: "Line Numbers",
        icon: "123",

        en: {
          what: "Adds numbers beside lines of text.",
          when: "Use line numbers for legal documents, scripts, technical documents or documents that need precise text references.",
          steps: [
            "Open Layout.",
            "Click Line Numbers.",
            "Choose Continuous, Restart Each Page, Restart Each Section or another available option.",
            "Word adds numbers beside the document lines.",
            "Use the same menu to remove line numbers when no longer needed."
          ],
          practice: "Add continuous line numbers to a sample document."
        },

        hi: {
          what: "Document की text lines के side में line numbers add करता है।",
          when: "Legal documents, scripts, technical documents या precise text reference वाले documents में इसका use करें।",
          steps: [
            "Layout tab खोलें।",
            "Line Numbers पर click करें।",
            "Continuous, Restart Each Page या Restart Each Section जैसा option चुनें।",
            "Word lines के side में numbers add करेगा।",
            "Remove के लिए इसी menu का use करें।"
          ],
          practice: "एक sample document में continuous line numbers लगाएँ।"
        }
      },


      {
        name: "Hyphenation",
        icon: "➖",

        en: {
          what: "Controls how words are divided at the end of lines using hyphens.",
          when: "Use Hyphenation when you want to improve text spacing and reduce large gaps in justified text.",
          steps: [
            "Open Layout.",
            "Click Hyphenation.",
            "Choose None, Automatic or Manual.",
            "If you choose Automatic, Word automatically places suitable hyphens.",
            "If you choose Manual, Word allows you to review possible hyphenation points."
          ],
          practice: "Apply Automatic Hyphenation to a paragraph with justified alignment."
        },

        hi: {
          what: "Line के end पर words को hyphen की मदद से divide करने को control करता है।",
          when: "Justified text में बड़े gaps कम करने और spacing improve करने के लिए Hyphenation का use करें।",
          steps: [
            "Layout tab खोलें।",
            "Hyphenation पर click करें।",
            "None, Automatic या Manual चुनें।",
            "Automatic में Word suitable जगह पर hyphen लगाता है।",
            "Manual में Word possible hyphenation points review करने देता है।"
          ],
          practice: "Justified paragraph पर Automatic Hyphenation apply करें।"
        }
      },


      // --------------------------------------------------------
      // PARAGRAPH
      // --------------------------------------------------------

      {
        name: "Indent Left",
        icon: "⬅️",

        en: {
          what: "Moves the selected paragraph farther away from the left margin.",
          when: "Use it when you want a paragraph to start farther inside the page.",
          steps: [
            "Select the paragraph.",
            "Open Layout.",
            "Find the Paragraph group.",
            "Increase the Left indent value.",
            "The paragraph moves inward from the left margin."
          ],
          practice: "Set the left indent of a paragraph to 1 inch."
        },

        hi: {
          what: "Selected paragraph को left margin से अंदर की तरफ move करता है।",
          when: "जब paragraph को left side से थोड़ा अंदर start करना हो तब इसका use करें।",
          steps: [
            "Paragraph select करें।",
            "Layout tab खोलें।",
            "Paragraph group में जाएँ।",
            "Left indent value बढ़ाएँ।",
            "Paragraph left margin से अंदर चला जाएगा।"
          ],
          practice: "एक paragraph का left indent 1 inch करें।"
        }
      },


      {
        name: "Indent Right",
        icon: "➡️",

        en: {
          what: "Moves the selected paragraph farther away from the right margin.",
          when: "Use it when you want to reduce the available width of a paragraph from the right side.",
          steps: [
            "Select the paragraph.",
            "Open Layout.",
            "Find the Paragraph group.",
            "Increase the Right indent value.",
            "The paragraph moves inward from the right side."
          ],
          practice: "Set the right indent of a paragraph to 1 inch."
        },

        hi: {
          what: "Selected paragraph को right margin से अंदर की तरफ move करता है।",
          when: "Paragraph की right side की available width कम करनी हो तब इसका use करें।",
          steps: [
            "Paragraph select करें।",
            "Layout tab खोलें।",
            "Paragraph group में जाएँ।",
            "Right indent value बढ़ाएँ।",
            "Paragraph right side से अंदर आ जाएगा।"
          ],
          practice: "एक paragraph का right indent 1 inch करें।"
        }
      },


      {
        name: "Spacing Before",
        icon: "↕️",

        en: {
          what: "Controls the amount of space before a paragraph.",
          when: "Use it to create visual separation between headings, paragraphs or sections.",
          steps: [
            "Select the paragraph or paragraphs.",
            "Open Layout.",
            "Find the Paragraph group.",
            "Change the Before spacing value.",
            "Check the space above the paragraph."
          ],
          practice: "Add 12 pt spacing before a heading."
        },

        hi: {
          what: "Paragraph के ऊपर की space को control करता है।",
          when: "Heading, paragraphs या sections के बीच visual separation बनाने के लिए इसका use करें।",
          steps: [
            "Paragraph select करें।",
            "Layout tab खोलें।",
            "Paragraph group में जाएँ।",
            "Before spacing value बदलें।",
            "Paragraph के ऊपर की space check करें।"
          ],
          practice: "Heading से पहले 12 pt spacing लगाएँ।"
        }
      },


      {
        name: "Spacing After",
        icon: "↕️",

        en: {
          what: "Controls the amount of space after a paragraph.",
          when: "Use it to separate paragraphs without pressing Enter repeatedly.",
          steps: [
            "Select the paragraph or paragraphs.",
            "Open Layout.",
            "Find the Paragraph group.",
            "Change the After spacing value.",
            "Check the space below the paragraph."
          ],
          practice: "Set 10 pt spacing after each paragraph."
        },

        hi: {
          what: "Paragraph के नीचे की space को control करता है।",
          when: "Paragraphs के बीच gap बनाने के लिए बार-बार Enter दबाने की बजाय इसका use करें।",
          steps: [
            "Paragraph select करें।",
            "Layout tab खोलें।",
            "Paragraph group में जाएँ।",
            "After spacing value बदलें।",
            "Paragraph के नीचे की space check करें।"
          ],
          practice: "हर paragraph के बाद 10 pt spacing set करें।"
        }
      },


      // --------------------------------------------------------
      // PAGE BACKGROUND
      // --------------------------------------------------------

      {
        name: "Watermark",
        icon: "💧",

        en: {
          what: "Places faint text or an image behind the main document content.",
          when: "Use a watermark for labels such as DRAFT, CONFIDENTIAL, SAMPLE or for adding a light background image/logo.",
          steps: [
            "Open the Design tab in newer versions of Word, or the Page Layout/Page Background area depending on your Word version.",
            "Click Watermark.",
            "Choose a built-in watermark such as DRAFT or CONFIDENTIAL.",
            "For a custom watermark, click Custom Watermark.",
            "Choose Text Watermark or Picture Watermark.",
            "For Text Watermark, enter your text and choose font, size, color and layout.",
            "For Picture Watermark, select the image you want to use.",
            "Click Apply or OK.",
            "Check the pages to confirm that the watermark appears correctly."
          ],
          practice: "Add a diagonal 'DRAFT' watermark to a project document."
        },

        hi: {
          what: "Main document content के पीछे हल्का text या image दिखाई देता है।",
          when: "DRAFT, CONFIDENTIAL, SAMPLE जैसे labels या light background logo/image लगाने के लिए Watermark का use करें।",
          steps: [
            "Newer Word versions में Design tab खोलें; कुछ versions में यह Page Layout/Page Background area में मिल सकता है।",
            "Watermark पर click करें।",
            "DRAFT या CONFIDENTIAL जैसा built-in watermark चुनें।",
            "Custom watermark के लिए Custom Watermark चुनें।",
            "Text Watermark या Picture Watermark चुनें।",
            "Text Watermark में text, font, size, color और layout set करें।",
            "Picture Watermark में अपनी image select करें।",
            "Apply या OK पर click करें।",
            "Pages check करें कि watermark सही दिखाई दे रहा है।"
          ],
          practice: "Project document में diagonal 'DRAFT' watermark लगाएँ।"
        }
      },


      {
        name: "Page Color",
        icon: "🎨",

        en: {
          what: "Changes the background color of document pages.",
          when: "Use it when creating posters, invitations, decorative documents or documents that need a colored page background.",
          steps: [
            "Open the Design tab in newer Word versions, or the Page Background area in older versions.",
            "Click Page Color.",
            "Choose a color from the palette.",
            "For a custom color, use More Colors if available.",
            "Review the document background.",
            "Choose No Color to return to the normal page background."
          ],
          practice: "Change the page background to a light color and then return it to No Color."
        },

        hi: {
          what: "Document page का background color बदलता है।",
          when: "Poster, invitation या decorative document में colored page background के लिए इसका use करें।",
          steps: [
            "Newer Word में Design tab खोलें या older versions में Page Background area खोलें।",
            "Page Color पर click करें।",
            "Color palette से color चुनें।",
            "Custom color के लिए More Colors use करें अगर available हो।",
            "Document background check करें।",
            "Normal background वापस लाने के लिए No Color चुनें।"
          ],
          practice: "Page का background light color करें और फिर No Color पर वापस करें।"
        }
      },


      {
        name: "Page Borders",
        icon: "▣",

        en: {
          what: "Adds a border around the page.",
          when: "Use page borders for certificates, invitations, covers, decorative documents and formal designs.",
          steps: [
            "Open the Design tab in newer Word versions, or the Page Background area in older versions.",
            "Click Page Borders.",
            "Choose Box, Shadow, 3-D or Custom.",
            "Choose the line style, color and width.",
            "You can also choose an Art border if available.",
            "Choose where the border should apply.",
            "Click OK.",
            "Check the page border."
          ],
          practice: "Create a certificate with a decorative page border."
        },

        hi: {
          what: "Document के page के चारों तरफ border लगाता है।",
          when: "Certificate, invitation, cover page या decorative document के लिए इसका use करें।",
          steps: [
            "Newer Word में Design tab खोलें या older versions में Page Background area खोलें।",
            "Page Borders पर click करें।",
            "Box, Shadow, 3-D या Custom चुनें।",
            "Line style, color और width चुनें।",
            "अगर available हो तो Art border भी चुन सकते हैं।",
            "Choose where the border should apply option set करें।",
            "OK पर click करें।",
            "Page border check करें।"
          ],
          practice: "Decorative page border वाला certificate बनाएँ।"
        }
      },


      // --------------------------------------------------------
      // ARRANGE
      // --------------------------------------------------------

      {
        name: "Position",
        icon: "↔️",

        en: {
          what: "Places a selected picture or object at a predefined position on the page.",
          when: "Use Position when you want an image or object to quickly move to a standard location.",
          steps: [
            "Select the picture or object.",
            "Open the Layout or Picture Format tab.",
            "Click Position.",
            "Choose a predefined position.",
            "The object moves to the selected location.",
            "Adjust it further if necessary."
          ],
          practice: "Place a picture in the top-right position of the page."
        },

        hi: {
          what: "Selected picture या object को page पर predefined position पर रखता है।",
          when: "Image या object को जल्दी से standard location पर रखने के लिए इसका use करें।",
          steps: [
            "Picture या object select करें।",
            "Layout या Picture Format tab खोलें।",
            "Position पर click करें।",
            "Predefined position चुनें।",
            "Object selected location पर चला जाएगा।",
            "जरूरत हो तो position further adjust करें।"
          ],
          practice: "Picture को page के top-right position पर रखें।"
        }
      },


      {
        name: "Wrap Text",
        icon: "📝",

        en: {
          what: "Controls how text flows around a picture or other object.",
          when: "Use it when you want text to appear beside, around or behind an image.",
          steps: [
            "Select the picture or object.",
            "Open the Layout or Picture Format tab.",
            "Click Wrap Text.",
            "Choose an option such as In Line with Text, Square, Tight, Through, Top and Bottom, Behind Text or In Front of Text.",
            "Review how the text flows around the object.",
            "Choose another option if the layout is not suitable."
          ],
          practice: "Insert an image and apply Square text wrapping."
        },

        hi: {
          what: "Picture या object के around text किस तरह flow करेगा इसे control करता है।",
          when: "Image के side, around, behind या in front text दिखाने के लिए इसका use करें।",
          steps: [
            "Picture या object select करें।",
            "Layout या Picture Format tab खोलें।",
            "Wrap Text पर click करें।",
            "In Line with Text, Square, Tight, Through, Top and Bottom, Behind Text या In Front of Text चुनें।",
            "Text का flow check करें।",
            "Layout सही न हो तो दूसरा wrapping option चुनें।"
          ],
          practice: "एक image insert करके Square text wrapping apply करें।"
        }
      },


      {
        name: "Bring Forward",
        icon: "⬆️",

        en: {
          what: "Moves a selected object in front of other overlapping objects.",
          when: "Use it when one shape or picture is hidden behind another object.",
          steps: [
            "Select the object.",
            "Open the Layout or Shape/Picture Format tab.",
            "Click Bring Forward.",
            "Choose Bring Forward or Bring to Front.",
            "The object moves above another object."
          ],
          practice: "Overlap two shapes and bring one shape to the front."
        },

        hi: {
          what: "Selected object को दूसरे overlapping objects के सामने लाता है।",
          when: "जब कोई shape या picture दूसरे object के पीछे छिप जाए तब इसका use करें।",
          steps: [
            "Object select करें।",
            "Layout या Shape/Picture Format tab खोलें।",
            "Bring Forward पर click करें।",
            "Bring Forward या Bring to Front चुनें।",
            "Object दूसरे object के ऊपर आ जाएगा।"
          ],
          practice: "दो shapes overlap करके एक shape को front में लाएँ।"
        }
      },


      {
        name: "Send Backward",
        icon: "⬇️",

        en: {
          what: "Moves a selected object behind another overlapping object.",
          when: "Use it when you want an object to appear behind another shape, picture or text.",
          steps: [
            "Select the object.",
            "Open the Layout or Shape/Picture Format tab.",
            "Click Send Backward.",
            "Choose Send Backward or Send to Back.",
            "The object moves behind other objects."
          ],
          practice: "Place a shape behind a picture."
        },

        hi: {
          what: "Selected object को दूसरे overlapping object के पीछे भेजता है।",
          when: "जब किसी shape, picture या text के पीछे object रखना हो तब इसका use करें।",
          steps: [
            "Object select करें।",
            "Layout या Shape/Picture Format tab खोलें।",
            "Send Backward पर click करें।",
            "Send Backward या Send to Back चुनें।",
            "Object दूसरे objects के पीछे चला जाएगा।"
          ],
          practice: "एक shape को picture के पीछे रखें।"
        }
      },


      {
        name: "Selection Pane",
        icon: "☷",

        en: {
          what: "Displays a list of objects in the document so you can select, hide, show or rename them.",
          when: "Use it when a page contains many overlapping pictures, shapes or other objects.",
          steps: [
            "Open the Layout or Shape/Picture Format tab.",
            "Click Selection Pane.",
            "A pane containing the objects appears.",
            "Select an object from the list.",
            "Use the eye icon to hide or show objects if available.",
            "Rename objects if needed.",
            "Use the pane to select difficult-to-reach objects."
          ],
          practice: "Insert several overlapping shapes and use Selection Pane to manage them."
        },

        hi: {
          what: "Document के objects की list दिखाता है जिससे उन्हें select, hide, show या rename किया जा सकता है।",
          when: "जब page में बहुत सारे overlapping pictures या shapes हों तब इसका use करें।",
          steps: [
            "Layout या Shape/Picture Format tab खोलें।",
            "Selection Pane पर click करें।",
            "Objects की list वाला pane खुलेगा।",
            "List में से object select करें।",
            "Available हो तो eye icon से object hide/show करें।",
            "जरूरत हो तो objects rename करें।",
            "Difficult-to-select objects के लिए Selection Pane use करें।"
          ],
          practice: "कई overlapping shapes insert करके Selection Pane से उन्हें manage करें।"
        }
      },


      {
        name: "Align",
        icon: "↔️",

        en: {
          what: "Aligns selected objects relative to each other or the page.",
          when: "Use Align when you need pictures, shapes or text boxes to line up neatly.",
          steps: [
            "Select two or more objects.",
            "Open the Layout or Shape/Picture Format tab.",
            "Click Align.",
            "Choose Align Left, Center, Right, Top, Middle or Bottom.",
            "If required, choose Align to Page or Align Selected Objects.",
            "Check the object positions."
          ],
          practice: "Align three shapes to the center of the page."
        },

        hi: {
          what: "Selected objects को एक-दूसरे या page के relative align करता है।",
          when: "Pictures, shapes या text boxes को neatly line up करने के लिए इसका use करें।",
          steps: [
            "दो या अधिक objects select करें।",
            "Layout या Shape/Picture Format tab खोलें।",
            "Align पर click करें।",
            "Align Left, Center, Right, Top, Middle या Bottom चुनें।",
            "जरूरत हो तो Align to Page या Align Selected Objects चुनें।",
            "Objects की position check करें।"
          ],
          practice: "तीन shapes को page के center में align करें।"
        }
      },


      {
        name: "Group",
        icon: "🔗",

        en: {
          what: "Combines multiple objects so they can be moved, resized and formatted as one object.",
          when: "Use Group when several shapes or pictures form one design and should be handled together.",
          steps: [
            "Select two or more objects.",
            "Open the Layout or Shape/Picture Format tab.",
            "Click Group.",
            "Choose Group.",
            "The objects now behave like one object.",
            "Move or resize the group as needed."
          ],
          practice: "Create a small diagram and group all its shapes together."
        },

        hi: {
          what: "Multiple objects को एक group में combine करता है ताकि उन्हें एक object की तरह move, resize और format किया जा सके।",
          when: "जब कई shapes या pictures मिलकर एक design बनाते हों तब Group का use करें।",
          steps: [
            "दो या अधिक objects select करें।",
            "Layout या Shape/Picture Format tab खोलें।",
            "Group पर click करें।",
            "Group चुनें।",
            "अब objects एक object की तरह behave करेंगे।",
            "Group को move या resize करें।"
          ],
          practice: "एक छोटा diagram बनाकर उसकी सभी shapes को group करें।"
        }
      },


      {
        name: "Rotate",
        icon: "🔄",

        en: {
          what: "Rotates or flips a selected picture, shape or object.",
          when: "Use Rotate when an object needs a different direction or orientation.",
          steps: [
            "Select the object.",
            "Open the Layout or Shape/Picture Format tab.",
            "Click Rotate.",
            "Choose Rotate Right 90°, Rotate Left 90°, Flip Vertical or Flip Horizontal.",
            "Use More Rotation Options if available for a custom angle."
          ],
          practice: "Rotate a shape 90 degrees and then flip it horizontally."
        },

        hi: {
          what: "Selected picture, shape या object को rotate या flip करता है।",
          when: "जब object की direction या orientation बदलनी हो तब इसका use करें।",
          steps: [
            "Object select करें।",
            "Layout या Shape/Picture Format tab खोलें।",
            "Rotate पर click करें।",
            "Rotate Right 90°, Rotate Left 90°, Flip Vertical या Flip Horizontal चुनें।",
            "Custom angle के लिए More Rotation Options use करें अगर available हो।"
          ],
          practice: "एक shape को 90 degrees rotate करके horizontally flip करें।"
        }
      }

    ]
  },
// ============================================================
// END OF MS WORD LEARNING DATA + WEBSITE FUNCTIONS
// ============================================================

// Close the Layout section and the complete wordLearning object
  }
};


// ============================================================
// WEBSITE STATE
// ============================================================

let currentLanguage = "en";
let currentScreen = "home";
let currentTab = null;
let currentTool = null;


// ============================================================
// MAIN APP
// ============================================================

const app = document.getElementById("app");


// ============================================================
// BASIC HELPERS
// ============================================================

function escapeHTML(value) {
  if (value === undefined || value === null) return "";

  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


function getToolText(tool) {
  return tool[currentLanguage] || tool.en || tool.hi || {};
}


function getLanguageName() {
  return currentLanguage === "en"
    ? "English"
    : "Hindi + English";
}


// ============================================================
// LANGUAGE BUTTON
// ============================================================

function languageButton() {
  return `
    <button
      class="language-switch"
      onclick="toggleLanguage()"
      type="button"
    >
      🌐 ${getLanguageName()}
    </button>
  `;
}


function toggleLanguage() {
  currentLanguage =
    currentLanguage === "en"
      ? "hi"
      : "en";

  renderCurrentScreen();
}


// ============================================================
// HOME SCREEN
// ============================================================

function renderHome() {

  currentScreen = "home";
  currentTab = null;
  currentTool = null;

  let html = `

    <div class="learning-header">

      <div>
        <h1>JOINING HANDS</h1>

        <p>
          AI Computer Learning & Practical Lab
        </p>
      </div>

      ${languageButton()}

    </div>


    <div class="welcome-card">

      <h2>Computer Learning</h2>

      <p>
        Learn step-by-step, practice every tool,
        and complete practical projects.
      </p>

    </div>


    <div class="course-grid">
  `;


  Object.keys(curriculum).forEach(courseName => {

    const projects =
      curriculum[courseName] || [];

    html += `

      <div class="course-card">

        <div class="course-icon">
          💻
        </div>

        <h2>
          ${escapeHTML(courseName)}
        </h2>

        <p>
          ${projects.length}
          ${courseName === "English" ? "lessons" : "projects"}
        </p>

        <button
          class="primary-button"
          type="button"
          onclick='openCourse(${JSON.stringify(courseName)})'
        >
          Start Course
        </button>

      </div>

    `;
  });


  html += `
    </div>
  `;


  app.innerHTML = html;
}


// ============================================================
// OPEN COURSE
// ============================================================

function openCourse(courseName) {

  currentScreen = "course";

  if (courseName === "MS Word") {

    renderWordCourse();
    return;
  }


  const items =
    curriculum[courseName] || [];


  let html = `

    <div class="page-top">

      <button
        class="back-button"
        type="button"
        onclick="renderHome()"
      >
        ← Back
      </button>

      ${languageButton()}

    </div>


    <div class="course-title">

      <h1>
        ${escapeHTML(courseName)}
      </h1>

      <p>
        Select a lesson to begin.
      </p>

    </div>


    <div class="project-grid">
  `;


  items.forEach(item => {

    html += `

      <div class="project-card">

        <h3>
          ${escapeHTML(item.title)}
        </h3>

        <p>
          ${escapeHTML(item.topic)}
        </p>

        <p class="small-text">
          ${escapeHTML(item.description)}
        </p>

        <button
          class="primary-button"
          type="button"
          onclick='openProject(${JSON.stringify(courseName)}, ${JSON.stringify(item.id)})'
        >
          Open
        </button>

      </div>

    `;
  });


  html += `
    </div>
  `;


  app.innerHTML = html;
}


// ============================================================
// MS WORD COURSE
// ============================================================

function renderWordCourse() {

  currentScreen = "word-course";

  const tabs =
    Object.keys(wordLearning);


  let html = `

    <div class="page-top">

      <button
        class="back-button"
        type="button"
        onclick="renderHome()"
      >
        ← Back
      </button>

      ${languageButton()}

    </div>


    <div class="course-title">

      <h1>
        MS Word
      </h1>

      <p>
        Learn every important MS Word tab
        step-by-step.
      </p>

    </div>


    <div class="word-learning-card">

      <h2>
        📚 Learning
      </h2>

      <p>
        Select a tab to learn its tools.
      </p>

      <div class="word-tab-grid">
  `;


  tabs.forEach(tabName => {

    const tab =
      wordLearning[tabName];


    html += `

      <button
        class="word-tab-card"
        type="button"
        onclick='openWordTab(${JSON.stringify(tabName)})'
      >

        ${
          tab.image
            ? `
              <img
                src="${escapeHTML(tab.image)}"
                alt="${escapeHTML(tabName)}"
                onerror="this.style.display='none'"
              >
            `
            : ""
        }

        <span>
          ${escapeHTML(tabName)}
        </span>

      </button>

    `;
  });


  html += `

      </div>

    </div>


    <div class="word-project-section">

      <h2>
        🛠️ Practical Projects
      </h2>

      <p>
        Practice what you learn by completing
        these projects.
      </p>

      <div class="project-grid">
  `;


  const projects =
    curriculum["MS Word"] || [];


  projects.forEach(project => {

    html += `

      <div class="project-card">

        <h3>
          ${escapeHTML(project.title)}
        </h3>

        <p>
          ${escapeHTML(project.topic)}
        </p>

        <p class="small-text">
          ${escapeHTML(project.description)}
        </p>

        ${
          project.image
            ? `
              <img
                class="project-preview"
                src="${escapeHTML(project.image)}"
                alt="${escapeHTML(project.title)}"
                onerror="this.style.display='none'"
              >
            `
            : ""
        }

        <button
          class="primary-button"
          type="button"
          onclick='openProject("MS Word", ${JSON.stringify(project.id)})'
        >
          Open Project
        </button>

      </div>

    `;
  });


  html += `

      </div>

    </div>
  `;


  app.innerHTML = html;
}


// ============================================================
// OPEN WORD TAB
// ============================================================

function openWordTab(tabName) {

  currentScreen = "word-tab";
  currentTab = tabName;

  const tab =
    wordLearning[tabName];


  if (!tab) {

    renderWordCourse();
    return;
  }


  let html = `

    <div class="page-top">

      <button
        class="back-button"
        type="button"
        onclick="renderWordCourse()"
      >
        ← Back to MS Word
      </button>

      ${languageButton()}

    </div>


    <div class="tab-learning-header">

      ${
        tab.image
          ? `
            <img
              src="${escapeHTML(tab.image)}"
              alt="${escapeHTML(tabName)}"
              class="tab-image"
              onerror="this.style.display='none'"
            >
          `
          : ""
      }

      <div>

        <h1>
          ${escapeHTML(tabName)} Tab
        </h1>

        <p>
          Learn the tools step-by-step.
        </p>

      </div>

    </div>


    <div class="tools-list">
  `;


  (tab.tools || []).forEach((tool, index) => {

    const text =
      getToolText(tool);


    html += `

      <div class="tool-learning-card">

        <button
          class="tool-title-button"
          type="button"
          onclick="toggleTool(${index})"
        >

          <span class="tool-icon">
            ${tool.icon || "▣"}
          </span>

          <span>
            ${escapeHTML(tool.name)}
          </span>

          <span class="tool-arrow">
            ▼
          </span>

        </button>


        <div
          id="tool-content-${index}"
          class="tool-content"
          style="display:none;"
        >

          <div class="explanation-block">

            <h3>
              What does it do?
            </h3>

            <p>
              ${escapeHTML(text.what || "")}
            </p>

          </div>


          <div class="explanation-block">

            <h3>
              When should you use it?
            </h3>

            <p>
              ${escapeHTML(text.when || "")}
            </p>

          </div>


          <button
            class="how-to-button"
            type="button"
            onclick="toggleSteps(${index})"
          >
            📖 How to use this option
          </button>


          <div
            id="steps-${index}"
            class="steps-container"
            style="display:none;"
          >

            <h3>
              Step-by-step
            </h3>

            <ol>
  `;


    (text.steps || []).forEach(step => {

      html += `
        <li>
          ${escapeHTML(step)}
        </li>
      `;

    });


    html += `

            </ol>

          </div>


          ${
            text.practice
              ? `
                <div class="practice-box">

                  <strong>
                    🎯 Practice Task
                  </strong>

                  <p>
                    ${escapeHTML(text.practice)}
                  </p>

                </div>
              `
              : ""
          }

        </div>

      </div>

    `;

  });


  html += `

    </div>
  `;


  app.innerHTML = html;
}


// ============================================================
// EXPAND / COLLAPSE TOOL
// ============================================================

function toggleTool(index) {

  const element =
    document.getElementById(
      `tool-content-${index}`
    );


  if (!element) return;


  if (element.style.display === "none") {

    element.style.display = "block";

  } else {

    element.style.display = "none";

  }
}


// ============================================================
// EXPAND / COLLAPSE STEPS
// ============================================================

function toggleSteps(index) {

  const element =
    document.getElementById(
      `steps-${index}`
    );


  if (!element) return;


  if (element.style.display === "none") {

    element.style.display = "block";

  } else {

    element.style.display = "none";

  }
}


// ============================================================
// OPEN PRACTICAL PROJECT
// ============================================================

function openProject(courseName, projectId) {

  currentScreen = "project";

  const projects =
    curriculum[courseName] || [];


  const project =
    projects.find(
      item => item.id === Number(projectId)
    );


  if (!project) {

    openCourse(courseName);
    return;
  }


  let html = `

    <div class="page-top">

      <button
        class="back-button"
        type="button"
        onclick='openCourse(${JSON.stringify(courseName)})'
      >
        ← Back
      </button>

      ${languageButton()}

    </div>


    <div class="project-detail">

      <h1>
        ${escapeHTML(project.title)}
      </h1>

      <h2>
        ${escapeHTML(project.topic)}
      </h2>

      <p>
        ${escapeHTML(project.description)}
      </p>

  `;


  if (project.image) {

    html += `

      <div class="project-image-container">

        <img
          src="${escapeHTML(project.image)}"
          alt="${escapeHTML(project.title)}"
          class="project-main-image"
          onerror="this.style.display='none'"
        >

      </div>

    `;
  }


  html += `

      <div class="project-instructions">

        <h2>
          How to complete this project
        </h2>

        <ol>

          <li>
            Open Microsoft Word.
          </li>

          <li>
            Study the example shown above.
          </li>

          <li>
            Recreate the document step-by-step.
          </li>

          <li>
            Use the Learning section to understand
            any Word tool you do not know.
          </li>

          <li>
            Compare your final document with the example.
          </li>

        </ol>

      </div>


      <div class="project-actions">

        <button
          class="primary-button"
          type="button"
          onclick="openWordCourseLearning()"
        >
          📚 Learn MS Word Tools
        </button>

      </div>

    </div>
  `;


  app.innerHTML = html;
}


// ============================================================
// PROJECT → WORD LEARNING
// ============================================================

function openWordCourseLearning() {

  renderWordCourse();
}


// ============================================================
// RENDER CURRENT SCREEN
// ============================================================

function renderCurrentScreen() {

  if (currentScreen === "home") {

    renderHome();
    return;
  }


  if (currentScreen === "word-course") {

    renderWordCourse();
    return;
  }


  if (currentScreen === "word-tab") {

    if (currentTab) {

      openWordTab(currentTab);

    } else {

      renderWordCourse();

    }

    return;
  }


  renderHome();
}


// ============================================================
// BASIC BACKUP NAVIGATION
// ============================================================

window.goHome = function () {

  renderHome();

};


// ============================================================
// MAKE FUNCTIONS AVAILABLE TO HTML
// ============================================================

window.toggleLanguage = toggleLanguage;
window.openCourse = openCourse;
window.openWordTab = openWordTab;
window.toggleTool = toggleTool;
window.toggleSteps = toggleSteps;
window.openProject = openProject;
window.openWordCourseLearning = openWordCourseLearning;
window.renderHome = renderHome;
window.renderWordCourse = renderWordCourse;
window.renderCurrentScreen = renderCurrentScreen;


// ============================================================
// START WEBSITE
// ============================================================

document.addEventListener(
  "DOMContentLoaded",
  function () {

    renderHome();

  }
);
