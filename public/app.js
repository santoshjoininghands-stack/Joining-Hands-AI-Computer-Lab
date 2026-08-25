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
            "The selected text becomes italic."
          ],
          practice: "Make one important word italic."
        },

        hi: {
          what: "Text को तिरछा करता है।",
          when: "किसी word को emphasize करने या अलग style देने के लिए Italic का use करें।",
          steps: [
            "Text select करें।",
            "Home tab पर जाएँ।",
            "Italic पर click करें।",
            "Selected text italic हो जाएगा।"
          ],
          practice: "एक important word को Italic करें।"
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
          when: "Important text को highlight करने के लिए Underline का use करें।",
          steps: [
            "Text select करें।",
            "Home tab पर जाएँ।",
            "Underline पर click करें।",
            "Text के नीचे line लग जाएगी।"
          ],
          practice: "Document के title को Underline करें।"
        }
      }

    ]
  },


  // ==========================================================
  // INSERT TAB
  // ==========================================================

  Insert: {

    image: "Insert.png",

    tools: [

      {
        name: "Table",
        icon: "📊",

        en: {
          what: "Creates a table using rows and columns.",
          when: "Use a table when information needs to be arranged in rows and columns, such as student marks, attendance, price lists or schedules.",
          steps: [
            "Open your Word document.",
            "Place the cursor where you want the table.",
            "Go to the Insert tab.",
            "Click Table.",
            "Move your mouse over the table grid.",
            "Select the required number of rows and columns.",
            "Click to insert the table.",
            "Enter your information into the cells.",
            "Use the Table Design and Layout options to format the table."
          ],
          practice: "Create a 5-column × 6-row student marks table."
        },

        hi: {
          what: "Rows और columns की मदद से table create करता है।",
          when: "जब information को rows और columns में arrange करना हो, जैसे student marks, attendance, price list या schedule।",
          steps: [
            "MS Word document open करें।",
            "जहाँ table चाहिए वहाँ cursor रखें।",
            "Insert tab पर जाएँ।",
            "Table पर click करें।",
            "Table grid पर mouse ले जाएँ।",
            "Required rows और columns select करें।",
            "Click करके table insert करें।",
            "Cells में अपनी information enter करें।",
            "Table Design और Layout options से table को format करें।"
          ],
          practice: "5 columns और 6 rows का student marks table बनाएँ।"
        }
      },


      {
        name: "Pictures",
        icon: "🖼️",

        en: {
          what: "Inserts an image into the document.",
          when: "Use Pictures when you want to add photos, illustrations, screenshots or other images.",
          steps: [
            "Place the cursor where you want the picture.",
            "Go to the Insert tab.",
            "Click Pictures.",
            "Choose This Device or the available picture source.",
            "Select the image.",
            "Click Insert.",
            "Resize the picture using its corner handles.",
            "Use Picture Format options to change its appearance."
          ],
          practice: "Insert a picture of your choice and resize it."
        },

        hi: {
          what: "Document में image या picture insert करता है।",
          when: "जब document में photo, illustration, screenshot या दूसरी image add करनी हो।",
          steps: [
            "जहाँ picture चाहिए वहाँ cursor रखें।",
            "Insert tab पर जाएँ।",
            "Pictures पर click करें।",
            "This Device या available picture source select करें।",
            "Image select करें।",
            "Insert पर click करें।",
            "Corner handles से picture का size बदलें।",
            "Picture Format options से picture को format करें।"
          ],
          practice: "अपनी पसंद की एक picture insert करके उसका size बदलें।"
        }
      },


      {
        name: "Shapes",
        icon: "🔷",

        en: {
          what: "Inserts shapes such as rectangles, circles, arrows and lines.",
          when: "Use Shapes to create diagrams, flowcharts, labels, arrows or visual designs.",
          steps: [
            "Go to the Insert tab.",
            "Click Shapes.",
            "Choose a shape.",
            "Click and drag on the document to draw it.",
            "Use Shape Format to change its fill, outline and effects.",
            "Move or resize the shape as required."
          ],
          practice: "Create a simple flowchart using three shapes and arrows."
        },

        hi: {
          what: "Rectangle, circle, arrow और line जैसे shapes insert करता है।",
          when: "Diagram, flowchart, labels, arrows या visual design बनाने के लिए Shapes का use करें।",
          steps: [
            "Insert tab पर जाएँ।",
            "Shapes पर click करें।",
            "कोई shape select करें।",
            "Document में click करके drag करें।",
            "Shape Format से fill, outline और effects बदलें।",
            "Shape को move या resize करें।"
          ],
          practice: "तीन shapes और arrows का use करके एक simple flowchart बनाएँ।"
        }
      },


      {
        name: "SmartArt",
        icon: "⭐",

        en: {
          what: "Creates diagrams for visually presenting information.",
          when: "Use SmartArt for processes, lists, hierarchies, cycles and organizational structures.",
          steps: [
            "Go to the Insert tab.",
            "Click SmartArt.",
            "Choose a category such as Process, List or Hierarchy.",
            "Select a SmartArt design.",
            "Click OK.",
            "Enter your information in the text pane.",
            "Use SmartArt Design options to change the layout and colors."
          ],
          practice: "Create a three-step process using SmartArt."
        },

        hi: {
          what: "Information को diagram के रूप में visually दिखाता है।",
          when: "Process, list, hierarchy, cycle या organization structure दिखाने के लिए SmartArt का use करें।",
          steps: [
            "Insert tab पर जाएँ।",
            "SmartArt पर click करें।",
            "Process, List या Hierarchy जैसी category select करें।",
            "SmartArt design select करें।",
            "OK पर click करें।",
            "Text pane में अपनी information लिखें।",
            "SmartArt Design से layout और colors बदलें।"
          ],
          practice: "SmartArt का use करके three-step process बनाएँ।"
        }
      },


      {
        name: "Chart",
        icon: "📈",

        en: {
          what: "Represents data using graphs and charts.",
          when: "Use a chart when numerical information needs to be shown visually.",
          steps: [
            "Go to the Insert tab.",
            "Click Chart.",
            "Choose a chart type such as Column, Line or Pie.",
            "Click OK.",
            "An Excel data sheet will appear.",
            "Replace the sample data with your own data.",
            "Close the data sheet.",
            "The chart will update automatically."
          ],
          practice: "Create a column chart showing the marks of five students."
        },

        hi: {
          what: "Data को graph या chart के रूप में दिखाता है।",
          when: "जब numerical information को visually दिखाना हो तब Chart का use करें।",
          steps: [
            "Insert tab पर जाएँ।",
            "Chart पर click करें।",
            "Column, Line या Pie जैसा chart type select करें।",
            "OK पर click करें।",
            "Excel data sheet दिखाई देगी।",
            "Sample data को अपनी data से replace करें।",
            "Data sheet close करें।",
            "Chart automatically update हो जाएगा।"
          ],
          practice: "Five students के marks दिखाने वाला column chart बनाएँ।"
        }
      },


      {
        name: "Link",
        icon: "🔗",

        en: {
          what: "Creates a hyperlink to a webpage, file or another location.",
          when: "Use a link when you want users to quickly open a website, file or another location.",
          steps: [
            "Select the text you want to turn into a link.",
            "Go to the Insert tab.",
            "Click Link.",
            "Enter or paste the web address.",
            "Click OK."
          ],
          practice: "Create a hyperlink from the word 'Google' to the Google website."
        },

        hi: {
          what: "Webpage, file या दूसरी location का hyperlink बनाता है।",
          when: "जब user को किसी website, file या location को quickly open करवाना हो।",
          steps: [
            "जिस text को link बनाना है उसे select करें।",
            "Insert tab पर जाएँ।",
            "Link पर click करें।",
            "Web address enter या paste करें।",
            "OK पर click करें।"
          ],
          practice: "'Google' word को Google website से hyperlink करें।"
        }
      },


      {
        name: "Comment",
        icon: "💬",

        en: {
          what: "Adds a note or comment to selected content.",
          when: "Use comments when reviewing a document or giving feedback to another person.",
          steps: [
            "Select the text you want to comment on.",
            "Go to the Insert tab.",
            "Click Comment.",
            "Type your comment.",
            "Submit or save the comment."
          ],
          practice: "Select a sentence and add a comment asking for correction."
        },

        hi: {
          what: "Selected content पर note या comment add करता है।",
          when: "Document review करने या किसी दूसरे person को feedback देने के लिए comments का use करें।",
          steps: [
            "जिस text पर comment करना है उसे select करें।",
            "Insert tab पर जाएँ।",
            "Comment पर click करें।",
            "अपना comment लिखें।",
            "Comment submit या save करें।"
          ],
          practice: "एक sentence select करके correction के लिए comment add करें।"
        }
      },


      {
        name: "Header",
        icon: "⬆️",

        en: {
          what: "Adds information at the top of pages.",
          when: "Use a header for document titles, company names, course names or other information that should appear at the top of pages.",
          steps: [
            "Go to the Insert tab.",
            "Click Header.",
            "Choose a built-in header design or choose Edit Header.",
            "Type your required information.",
            "Click Close Header and Footer."
          ],
          practice: "Add 'Joining Hands Computer Lab' as a header."
        },

        hi: {
          what: "Page के ऊपर information add करता है।",
          when: "Document title, company name, course name या दूसरी information को page के top पर दिखाने के लिए Header का use करें।",
          steps: [
            "Insert tab पर जाएँ।",
            "Header पर click करें।",
            "Ready-made header select करें या Edit Header चुनें।",
            "अपनी information type करें।",
            "Close Header and Footer पर click करें।"
          ],
          practice: "'Joining Hands Computer Lab' को header में add करें।"
        }
      },


      {
        name: "Footer",
        icon: "⬇️",

        en: {
          what: "Adds information at the bottom of pages.",
          when: "Use a footer for page information, document names, dates or other repeating information.",
          steps: [
            "Go to the Insert tab.",
            "Click Footer.",
            "Choose a footer design.",
            "Enter your required information.",
            "Click Close Header and Footer."
          ],
          practice: "Add your name to the footer."
        },

        hi: {
          what: "Page के नीचे information add करता है।",
          when: "Page information, document name, date या repeating information के लिए Footer का use करें।",
          steps: [
            "Insert tab पर जाएँ।",
            "Footer पर click करें।",
            "Footer design select करें।",
            "अपनी information enter करें।",
            "Close Header and Footer पर click करें।"
          ],
          practice: "Footer में अपना नाम add करें।"
        }
      },


      {
        name: "Page Number",
        icon: "🔢",

        en: {
          what: "Adds page numbers to the document.",
          when: "Use page numbers when your document has multiple pages and you want readers to navigate easily.",
          steps: [
            "Go to the Insert tab.",
            "Click Page Number.",
            "Choose Top of Page, Bottom of Page or another location.",
            "Select a page number style.",
            "Word will add page numbers automatically."
          ],
          practice: "Add page numbers at the bottom of every page."
        },

        hi: {
          what: "Document में page numbers add करता है।",
          when: "जब document में कई pages हों और readers को pages आसानी से identify करने हों।",
          steps: [
            "Insert tab पर जाएँ।",
            "Page Number पर click करें।",
            "Top of Page, Bottom of Page या दूसरी location select करें।",
            "Page number style select करें।",
            "Word automatically page numbers add कर देगा।"
          ],
          practice: "हर page के bottom में page number add करें।"
        }
      },


      {
        name: "Text Box",
        icon: "▣",

        en: {
          what: "Creates a separate box for entering and positioning text.",
          when: "Use a text box when you want text to appear separately from the normal document flow.",
          steps: [
            "Go to the Insert tab.",
            "Click Text Box.",
            "Choose a built-in text box or draw one.",
            "Type your text.",
            "Move and resize the text box as needed.",
            "Use Shape Format to change its appearance."
          ],
          practice: "Create a text box containing your contact information."
        },

        hi: {
          what: "Text लिखने के लिए एक अलग box बनाता है।",
          when: "जब text को normal document flow से अलग position में दिखाना हो।",
          steps: [
            "Insert tab पर जाएँ।",
            "Text Box पर click करें।",
            "Ready-made text box चुनें या खुद draw करें।",
            "अपना text लिखें।",
            "Text box को move और resize करें।",
            "Shape Format से उसका appearance बदलें।"
          ],
          practice: "अपने contact information का text box बनाएँ।"
        }
      },


      {
        name: "WordArt",
        icon: "🔤",

        en: {
          what: "Creates decorative and artistic text.",
          when: "Use WordArt for attractive titles, posters, banners or headings.",
          steps: [
            "Go to the Insert tab.",
            "Click WordArt.",
            "Choose a WordArt style.",
            "Type your text.",
            "Use Shape Format to customize it."
          ],
          practice: "Create an attractive 'WELCOME' heading using WordArt."
        },

        hi: {
          what: "Decorative और artistic text बनाता है।",
          when: "Attractive title, poster, banner या heading बनाने के लिए WordArt का use करें।",
          steps: [
            "Insert tab पर जाएँ।",
            "WordArt पर click करें।",
            "WordArt style select करें।",
            "अपना text लिखें।",
            "Shape Format से उसे customize करें।"
          ],
          practice: "WordArt का use करके attractive 'WELCOME' heading बनाएँ।"
        }
      },


      {
        name: "Drop Cap",
        icon: "🔠",

        en: {
          what: "Makes the first letter of a paragraph larger.",
          when: "Use Drop Cap for magazines, newsletters and decorative paragraphs.",
          steps: [
            "Place the cursor inside the paragraph.",
            "Go to the Insert tab.",
            "Click Drop Cap.",
            "Choose Dropped or In Margin.",
            "The first letter becomes larger."
          ],
          practice: "Create a paragraph and apply a Drop Cap to its first letter."
        },

        hi: {
          what: "Paragraph के first letter को बड़ा करता है।",
          when: "Magazine, newsletter और decorative paragraph में Drop Cap का use किया जाता है।",
          steps: [
            "Paragraph के अंदर cursor रखें।",
            "Insert tab पर जाएँ।",
            "Drop Cap पर click करें।",
            "Dropped या In Margin select करें।",
            "First letter बड़ा हो जाएगा।"
          ],
          practice: "एक paragraph बनाकर उसके first letter पर Drop Cap लगाएँ।"
        }
      },


      {
        name: "Date & Time",
        icon: "📅",

        en: {
          what: "Inserts the current date and time.",
          when: "Use it when a document needs the current date or time.",
          steps: [
            "Place the cursor where you want the date or time.",
            "Go to the Insert tab.",
            "Click Date & Time.",
            "Choose a date or time format.",
            "Click OK."
          ],
          practice: "Insert today's date into a document."
        },

        hi: {
          what: "Current date और time insert करता है।",
          when: "जब document में current date या time add करना हो।",
          steps: [
            "जहाँ date या time चाहिए वहाँ cursor रखें।",
            "Insert tab पर जाएँ।",
            "Date & Time पर click करें।",
            "Date या time format select करें।",
            "OK पर click करें।"
          ],
          practice: "Document में आज की date insert करें।"
        }
      },


      {
        name: "Symbol",
        icon: "Ω",

        en: {
          what: "Inserts special characters and symbols.",
          when: "Use Symbols when you need characters that are not easily available on the keyboard.",
          steps: [
            "Place the cursor where you want the symbol.",
            "Go to the Insert tab.",
            "Click Symbol.",
            "Choose a symbol from the list.",
            "Click Insert."
          ],
          practice: "Insert ©, ® and ₹ symbols into a document."
        },

        hi: {
          what: "Special characters और symbols insert करता है।",
          when: "जब keyboard से easily available न होने वाले special characters चाहिए हों।",
          steps: [
            "जहाँ symbol चाहिए वहाँ cursor रखें।",
            "Insert tab पर जाएँ।",
            "Symbol पर click करें।",
            "List से symbol select करें।",
            "Insert पर click करें।"
          ],
          practice: "Document में ©, ® और ₹ symbols insert करें।"
        }
      },


      {
        name: "Equation",
        icon: "∑",

        en: {
          what: "Inserts mathematical equations and formulas.",
          when: "Use Equation when creating mathematical, scientific or technical documents.",
          steps: [
            "Place the cursor where the equation should appear.",
            "Go to the Insert tab.",
            "Click Equation.",
            "Choose a built-in equation or create your own.",
            "Enter the required mathematical symbols and values."
          ],
          practice: "Insert the equation x² + y² = z²."
        },

        hi: {
          what: "Mathematical equations और formulas insert करता है।",
          when: "Mathematical, scientific या technical document बनाते समय Equation का use करें।",
          steps: [
            "जहाँ equation चाहिए वहाँ cursor रखें।",
            "Insert tab पर जाएँ।",
            "Equation पर click करें।",
            "Built-in equation select करें या अपनी equation बनाएँ।",
            "Required mathematical symbols और values enter करें।"
          ],
          practice: "x² + y² = z² equation insert करें।"
        }
      }

    ]
  },


  // ==========================================================
  // PAGE LAYOUT TAB
  // ==========================================================

  "Page Layout": {

    image: "Page Layout(1).png",

    tools: [

      {
        name: "Margins",
        icon: "📐",

        en: {
          what: "Controls the space between the document content and the edges of the page.",
          when: "Use Margins when you need to change the amount of white space around the page.",
          steps: [
            "Go to the Page Layout tab.",
            "Click Margins.",
            "Choose a preset such as Normal, Narrow or Wide.",
            "For custom margins, click Custom Margins.",
            "Enter the Top, Bottom, Left and Right values.",
            "Click OK."
          ],
          practice: "Set the document margins to 1 inch on all sides."
        },

        hi: {
          what: "Page के edges और document content के बीच का space control करता है।",
          when: "जब page के चारों तरफ का white space बदलना हो तब Margins का use करें।",
          steps: [
            "Page Layout tab पर जाएँ।",
            "Margins पर click करें।",
            "Normal, Narrow या Wide जैसे preset select करें।",
            "Custom setting के लिए Custom Margins चुनें।",
            "Top, Bottom, Left और Right values enter करें।",
            "OK पर click करें।"
          ],
          practice: "Document के चारों तरफ 1 inch margin set करें।"
        }
      },


      {
        name: "Orientation",
        icon: "↔️",

        en: {
          what: "Changes the page orientation between Portrait and Landscape.",
          when: "Use Landscape for wide content such as large tables or charts. Use Portrait for normal documents.",
          steps: [
            "Go to the Page Layout tab.",
            "Click Orientation.",
            "Choose Portrait or Landscape.",
            "The page orientation changes immediately."
          ],
          practice: "Change the document to Landscape and create a wide table."
        },

        hi: {
          what: "Page को Portrait या Landscape orientation में बदलता है।",
          when: "Wide table या chart के लिए Landscape और normal document के लिए Portrait use करें।",
          steps: [
            "Page Layout tab पर जाएँ।",
            "Orientation पर click करें।",
            "Portrait या Landscape select करें।",
            "Page orientation तुरंत change हो जाएगी।"
          ],
          practice: "Document को Landscape करके एक wide table बनाएँ।"
        }
      },


      {
        name: "Size",
        icon: "📄",

        en: {
          what: "Changes the paper size of the document.",
          when: "Use Size when you need a specific paper size such as A4, Letter or Legal.",
          steps: [
            "Go to the Page Layout tab.",
            "Click Size.",
            "Select the required paper size.",
            "The document page size changes."
          ],
          practice: "Set the document size to A4."
        },

        hi: {
          what: "Document का paper size change करता है।",
          when: "जब A4, Letter या Legal जैसे specific paper size की जरूरत हो।",
          steps: [
            "Page Layout tab पर जाएँ।",
            "Size पर click करें।",
            "Required paper size select करें।",
            "Document का page size change हो जाएगा।"
          ],
          practice: "Document का size A4 set करें।"
        }
      },


      {
        name: "Columns",
        icon: "📰",

        en: {
          what: "Divides text into two or more columns.",
          when: "Use Columns for newspapers, newsletters, brochures and magazine-style layouts.",
          steps: [
            "Select the text you want to place into columns, or leave the cursor in the document.",
            "Go to the Page Layout tab.",
            "Click Columns.",
            "Choose Two, Three or another option.",
            "The text will be arranged into columns."
          ],
          practice: "Create a two-column newsletter."
        },

        hi: {
          what: "Text को two or more columns में divide करता है।",
          when: "Newspaper, newsletter, brochure या magazine-style document बनाने के लिए Columns का use करें।",
          steps: [
            "जिस text को columns में रखना है उसे select करें, या document में cursor रखें।",
            "Page Layout tab पर जाएँ।",
            "Columns पर click करें।",
            "Two, Three या कोई दूसरी option select करें।",
            "Text columns में arrange हो जाएगा।"
          ],
          practice: "Two-column newsletter बनाएँ।"
        }
      },


      {
        name: "Breaks",
        icon: "↪️",

        en: {
          what: "Adds page, section or column breaks.",
          when: "Use Breaks when you need to start content on a new page or create different sections with different formatting.",
          steps: [
            "Place the cursor where you want the break.",
            "Go to the Page Layout tab.",
            "Click Breaks.",
            "Choose Page Break, Column Break or a Section Break.",
            "Word will create the selected break."
          ],
          practice: "Create a new section for the second part of a document."
        },

        hi: {
          what: "Page, section या column break add करता है।",
          when: "जब content को new page से start करना हो या अलग formatting वाला section बनाना हो।",
          steps: [
            "जहाँ break चाहिए वहाँ cursor रखें।",
            "Page Layout tab पर जाएँ।",
            "Breaks पर click करें।",
            "Page Break, Column Break या Section Break select करें।",
            "Word selected break create कर देगा।"
          ],
          practice: "Document के second part के लिए नया section बनाएँ।"
        }
      },


      {
        name: "Watermark",
        icon: "💧",

        en: {
          what: "Adds faded text or an image behind the document content.",
          when: "Use a watermark for labels such as CONFIDENTIAL, DRAFT or SAMPLE.",
          steps: [
            "Open your Word document.",
            "Go to the Design tab.",
            "Click Watermark.",
            "Choose a ready-made watermark, or click Custom Watermark.",
            "Choose Text watermark if you want your own text.",
            "Enter your text, such as CONFIDENTIAL.",
            "Choose the font, size and color.",
            "Choose Diagonal or Horizontal.",
            "Click Apply or OK.",
            "Check the pages to see the watermark."
          ],
          practice: "Add a diagonal 'DRAFT' watermark to your document."
        },

        hi: {
          what: "Document के पीछे हल्का text या image दिखाता है।",
          when: "CONFIDENTIAL, DRAFT या SAMPLE जैसे labels दिखाने के लिए Watermark का use करें।",
          steps: [
            "MS Word document open करें।",
            "Design tab पर जाएँ।",
            "Watermark पर click करें।",
            "Ready-made watermark select करें या Custom Watermark चुनें।",
            "अपना text लगाने के लिए Text watermark select करें।",
            "जैसे CONFIDENTIAL text enter करें।",
            "Font, size और color select करें।",
            "Diagonal या Horizontal select करें।",
            "Apply या OK पर click करें।",
            "Pages पर watermark check करें।"
          ],
          practice: "Document में diagonal 'DRAFT' watermark लगाएँ।"
        }
      },


      {
        name: "Page Color",
        icon: "🎨",

        en: {
          what: "Changes the background color of the page.",
          when: "Use Page Color when you want to create a colored document background.",
          steps: [
            "Go to the Design tab.",
            "Click Page Color.",
            "Choose a color.",
            "The page background changes."
          ],
          practice: "Apply a light background color to a document."
        },

        hi: {
          what: "Page का background color बदलता है।",
          when: "जब document के page का background colored बनाना हो।",
          steps: [
            "Design tab पर जाएँ।",
            "Page Color पर click करें।",
            "कोई color select करें।",
            "Page का background बदल जाएगा।"
          ],
          practice: "Document पर एक light background color apply करें।"
        }
      },


      {
        name: "Page Borders",
        icon: "▣",

        en: {
          what: "Adds a border around the page.",
          when: "Use Page Borders for certificates, invitations, projects and decorative documents.",
          steps: [
            "Go to the Design tab.",
            "Click Page Borders.",
            "Choose a border setting such as Box or Shadow.",
            "Choose the border style, color and width.",
            "Choose which pages should have the border.",
            "Click OK."
          ],
          practice: "Create a decorative border for a certificate."
        },

        hi: {
          what: "Page के चारों तरफ border लगाता है।",
          when: "Certificate, invitation, project या decorative document के लिए Page Borders का use करें।",
          steps: [
            "Design tab पर जाएँ।",
            "Page Borders पर click करें।",
            "Box या Shadow जैसी border setting select करें।",
            "Border style, color और width select करें।",
            "Choose करें कि किन pages पर border चाहिए।",
            "OK पर click करें।"
          ],
          practice: "Certificate के लिए एक decorative page border बनाएँ।"
        }
      },


      {
        name: "Paragraph Indent",
        icon: "↔️",

        en: {
          what: "Moves a paragraph inward from the left or right side.",
          when: "Use Indent when you want to control the position of a paragraph.",
          steps: [
            "Select the paragraph.",
            "Go to the Page Layout tab.",
            "Find the Indent options.",
            "Increase Left or Right indent.",
            "The paragraph moves inward."
          ],
          practice: "Indent a paragraph by 1 inch from the left."
        },

        hi: {
          what: "Paragraph को left या right side से अंदर shift करता है।",
          when: "Paragraph की position control करने के लिए Indent का use करें।",
          steps: [
            "Paragraph select करें।",
            "Page Layout tab पर जाएँ।",
            "Indent options देखें।",
            "Left या Right indent बढ़ाएँ।",
            "Paragraph अंदर shift हो जाएगा।"
          ],
          practice: "Paragraph को left side से 1 inch indent करें।"
        }
      },


      {
        name: "Paragraph Spacing",
        icon: "↕️",

        en: {
          what: "Controls the amount of space before and after paragraphs.",
          when: "Use paragraph spacing to make a document easier to read and properly organized.",
          steps: [
            "Select the paragraph or paragraphs.",
            "Go to the Page Layout tab.",
            "Find the Spacing options.",
            "Change Before or After spacing.",
            "The paragraph spacing will update."
          ],
          practice: "Add 10 pt spacing after each paragraph."
        },

        hi: {
          what: "Paragraph के पहले और बाद का space control करता है।",
          when: "Document को readable और properly organized बनाने के लिए paragraph spacing का use करें।",
          steps: [
            "Paragraph या paragraphs select करें।",
            "Page Layout tab पर जाएँ।",
            "Spacing options देखें।",
            "Before या After spacing change करें।",
            "Paragraph spacing update हो जाएगी।"
          ],
          practice: "हर paragraph के बाद 10 pt spacing लगाएँ।"
        }
      },


      {
        name: "Wrap Text",
        icon: "📝",

        en: {
          what: "Controls how text flows around an image or object.",
          when: "Use Wrap Text when you want text to appear beside, around or behind an image.",
          steps: [
            "Select the picture or object.",
            "Go to the picture or shape formatting options.",
            "Click Wrap Text.",
            "Choose an option such as Square, Tight, Behind Text or In Front of Text.",
            "Check how the text flows around the object."
          ],
          practice: "Insert a picture and set its wrapping to Square."
        },

        hi: {
          what: "Image या object के आसपास text कैसे दिखाई देगा, यह control करता है।",
          when: "जब image के side, around या behind text दिखाना हो।",
          steps: [
            "Picture या object select करें।",
            "Picture या Shape formatting options पर जाएँ।",
            "Wrap Text पर click करें।",
            "Square, Tight, Behind Text या In Front of Text जैसी option select करें।",
            "Check करें कि text object के आसपास कैसे दिखाई दे रहा है।"
          ],
          practice: "एक picture insert करके उसका Wrap Text 'Square' करें।"
        }
      },


      {
        name: "Align Objects",
        icon: "📏",

        en: {
          what: "Aligns objects with each other or with the page.",
          when: "Use Align when multiple objects need to be positioned neatly.",
          steps: [
            "Select the object or multiple objects.",
            "Open the object formatting options.",
            "Click Align.",
            "Choose Left, Center, Right, Top, Middle or Bottom.",
            "The objects will align accordingly."
          ],
          practice: "Create three shapes and align them to the center."
        },

        hi: {
          what: "Objects को एक-दूसरे या page के साथ properly align करता है।",
          when: "जब multiple objects को neat और organized position में रखना हो।",
          steps: [
            "Object या multiple objects select करें।",
            "Object formatting options खोलें।",
            "Align पर click करें।",
            "Left, Center, Right, Top, Middle या Bottom select करें।",
            "Objects selected alignment के अनुसार arrange हो जाएँगे।"
          ],
          practice: "Three shapes बनाकर उन्हें center में align करें।"
        }
      }

    ]
  }

};


// ============================================================
// LANGUAGE
// ============================================================

let learningLanguage = "en";


// ============================================================
// HOME PAGE
// ============================================================

function showHome() {

  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="hero">

      <h1>Learn & Practice</h1>

      <p>
        Welcome to Joining Hands AI Computer Learning & Practical Lab.
        Choose a course and start learning through practical projects.
      </p>

    </div>

    <h2>Courses</h2>

    <div class="grid">

      ${Object.keys(curriculum).map(course => `

        <div class="course-card">

          <h3>${course}</h3>

          <p>
            ${curriculum[course].length}
            practical lessons/projects
          </p>

          <button onclick="showCourse('${course}')">
            Start Learning
          </button>

        </div>

      `).join("")}

    </div>
  `;
}


// ============================================================
// COURSE PAGE
// ============================================================

function showCourse(course) {

  const app = document.getElementById("app");

  app.innerHTML = `

    <button class="back" onclick="showHome()">
      ← Back to Courses
    </button>

    <div class="hero course-hero">

      <h1>${course}</h1>

      <p>
        Select a lesson/project to start learning.
      </p>

    </div>


    ${
      course === "MS Word"
        ? `
          <div class="learning-choice">

            <h2>MS Word Learning</h2>

            <p>
              Learn MS Word step-by-step before starting your practical projects.
            </p>

            <button onclick="showWordLearning()">
              📚 Learning
            </button>

            <button onclick="showWordProjects()">
              💻 Practical Projects
            </button>

          </div>
        `
        : ""
    }


    <div class="lesson-grid compact-grid">

      ${curriculum[course].map(item => `

        <div class="lesson-card compact-card">

          ${
            item.image
              ? `
                <div class="project-image">

                  <img
                    src="${item.image}"
                    alt="${item.title}"
                    onerror="this.style.display='none'"
                  >

                </div>
              `
              : ""
          }

          <h3>${item.title}</h3>

          <p class="project-topic">
            ${item.topic}
          </p>

          <p class="project-description">
            ${item.description}
          </p>

          <button onclick="showLesson('${course}', ${item.id})">
            Open Project
          </button>

        </div>

      `).join("")}

    </div>
  `;
}


// ============================================================
// WORD LEARNING HOME
// ============================================================

function showWordLearning() {

  const app = document.getElementById("app");

  app.innerHTML = `

    <button
      class="back"
      onclick="showCourse('MS Word')"
    >
      ← Back to MS Word
    </button>


    <div class="learning-header">

      <h1>📚 MS Word Learning</h1>

      <p>
        Learn each MS Word tab and understand how to use its tools.
      </p>


      <div class="language-switch">

        <button
          class="${learningLanguage === "en" ? "active-language" : ""}"
          onclick="changeLearningLanguage('en')"
        >
          English
        </button>

        <button
          class="${learningLanguage === "hi" ? "active-language" : ""}"
          onclick="changeLearningLanguage('hi')"
        >
          हिन्दी + English
        </button>

      </div>

    </div>


    <div class="word-tab-buttons">

      ${Object.keys(wordLearning).map(tab => `

        <button
          onclick="showWordTab('${tab}')"
        >
          ${tab}
        </button>

      `).join("")}

    </div>


    <div id="wordTabContent"></div>

  `;


  showWordTab("Home");
}


// ============================================================
// CHANGE LANGUAGE
// ============================================================

function changeLearningLanguage(language) {

  learningLanguage = language;

  showWordLearning();

}


// ============================================================
// SHOW WORD TAB
// ============================================================

function showWordTab(tabName) {

  const tab = wordLearning[tabName];

  if (!tab) return;

  const content = document.getElementById("wordTabContent");

  if (!content) return;


  const language = learningLanguage;


  content.innerHTML = `

    <div class="word-learning-section">

      <h2>${tabName} Tab</h2>


      ${
        tab.image
          ? `
            <div class="word-tab-image">

              <img
                src="${tab.image}"
                alt="${tabName} Tab"
                onclick="openImage('${tab.image}')"
              >

              <p>
                Click the image to view it larger.
              </p>

            </div>
          `
          : ""
      }


      <div class="tool-learning-grid">

        ${tab.tools.map((tool, index) => {

          const data =
            language === "en"
              ? tool.en
              : tool.hi;

          return `

            <div class="tool-learning-card">

              <div class="tool-title">

                <span class="tool-icon">
                  ${tool.icon}
                </span>

                <h3>
                  ${tool.name}
                </h3>

              </div>


              <div class="tool-explanation">

                <h4>
                  What does it do?
                </h4>

                <p>
                  ${data.what}
                </p>


                <h4>
                  When should you use it?
                </h4>

                <p>
                  ${data.when}
                </p>


                <button
                  class="steps-toggle"
                  onclick="toggleSteps(${index}, '${tabName}')"
                >
                  ▶ How to use this option?
                  <span>
                    Click here to see step-by-step instructions
                  </span>
                </button>


                <div
                  id="steps-${tabName}-${index}"
                  class="tool-steps hidden"
                >

                  <h4>
                    How to use this option
                  </h4>

                  <ol>

                    ${data.steps.map(step => `
                      <li>${step}</li>
                    `).join("")}

                  </ol>


                  <div class="practice-task">

                    <strong>
                      🧪 Practice this option
                    </strong>

                    <p>
                      ${data.practice}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          `;

        }).join("")}

      </div>

    </div>

  `;
}


// ============================================================
// EXPAND / COLLAPSE STEPS
// ============================================================

function toggleSteps(index, tabName) {

  const element =
    document.getElementById(
      `steps-${tabName}-${index}`
    );

  if (!element) return;


  element.classList.toggle("hidden");


  const button =
    element.previousElementSibling;


  if (element.classList.contains("hidden")) {

    button.innerHTML =
      `▶ How to use this option?
       <span>Click here to see step-by-step instructions</span>`;

  } else {

    button.innerHTML =
      `▼ How to use this option
       <span>Click here to hide the steps</span>`;

  }

}


// ============================================================
// WORD PROJECTS
// ============================================================

function showWordProjects() {

  showCourseProjectsOnly("MS Word");

}


function showCourseProjectsOnly(course) {

  const app = document.getElementById("app");

  app.innerHTML = `

    <button
      class="back"
      onclick="showCourse('${course}')"
    >
      ← Back to ${course}
    </button>

    <div class="hero course-hero">

      <h1>${course} Practical Projects</h1>

      <p>
        Select a project to start practicing.
      </p>

    </div>


    <div class="lesson-grid compact-grid">

      ${curriculum[course].map(item => `

        <div class="lesson-card compact-card">

          ${
            item.image
              ? `
                <div class="project-image">

                  <img
                    src="${item.image}"
                    alt="${item.title}"
                    onerror="this.style.display='none'"
                  >

                </div>
              `
              : ""
          }

          <h3>${item.title}</h3>

          <p class="project-topic">
            ${item.topic}
          </p>

          <p class="project-description">
            ${item.description}
          </p>

          <button onclick="showLesson('${course}', ${item.id})">
            Open Project
          </button>

        </div>

      `).join("")}

    </div>
  `;
}


// ============================================================
// PROJECT PAGE
// ============================================================

function showLesson(course, id) {

  const lesson =
    curriculum[course].find(
      item => item.id === id
    );


  if (!lesson) {

    alert("Project not found.");

    return;

  }


  const app =
    document.getElementById("app");


  app.innerHTML = `

    <button
      class="back"
      onclick="showCourse('${course}')"
    >
      ← Back to ${course}
    </button>


    <div class="lesson-content">


      <div class="lesson-header">

        <h1>
          ${lesson.title}
        </h1>

        <h2>
          ${lesson.topic}
        </h2>

        <p>
          ${lesson.description}
        </p>

      </div>


      ${
        lesson.image
          ? `

            <div class="example-section">

              <h2>
                📘 Example Project
              </h2>

              <div class="example-image-container">

                <img
                  src="${lesson.image}"
                  alt="${lesson.title}"
                  class="example-image"
                  onclick="openImage('${lesson.image}')"
                >

              </div>

              <p class="image-note">
                Click the image to view it larger.
              </p>

            </div>

          `
          : ""
      }


      <div class="practice-instructions">

        <h2>
          📝 How to Practice
        </h2>

        <div class="step">
          <strong>Step 1:</strong>
          Open Microsoft Word on your computer.
        </div>

        <div class="step">
          <strong>Step 2:</strong>
          Look carefully at the example shown above.
        </div>

        <div class="step">
          <strong>Step 3:</strong>
          Create your own copy of the project in MS Word.
        </div>

        <div class="step">
          <strong>Step 4:</strong>
          Try to make your project as similar to the example as possible.
        </div>

        <div class="step">
          <strong>Step 5:</strong>
          Save your completed project on your computer.
        </div>

      </div>


      <div class="practice-box">

        <h3>
          🎯 Ready to Practice?
        </h3>

        <p>
          Create your own copy of this project in Microsoft Word.
        </p>

        <button onclick="startPractice()">
          💻 Start Practice
        </button>

        <button
          class="help-button"
          onclick="showHelp('${course}', '${lesson.id}')"
        >
          🤖 Ask AI Teacher
        </button>

      </div>


    </div>

  `;
}


// ============================================================
// START PRACTICE
// ============================================================

function startPractice() {

  const message =
    "Practice Time!\n\n" +

    "1. Open Microsoft Word on your computer.\n" +

    "2. Create a new blank document.\n" +

    "3. Look at the example project.\n" +

    "4. Create your own copy of the project.\n" +

    "5. Save your work when finished.";


  alert(message);

}


// ============================================================
// OPEN WORD
// ============================================================

function openWord() {

  window.location.href = "ms-word:";


  setTimeout(function () {

    alert(
      "Microsoft Word could not be opened automatically.\n\n" +

      "Please open Microsoft Word from your computer " +

      "and create a new blank document."
    );

  }, 1500);

}


// ============================================================
// AI HELP MODAL
// ============================================================

function showHelp(course, project) {

  const old =
    document.getElementById("helpModal");


  if (old) {
    old.remove();
  }


  document.body.insertAdjacentHTML(

    "beforeend",

    `

    <div
      id="helpModal"
      class="help-modal"
    >

      <div class="help-modal-content">

        <button
          class="close-help"
          onclick="closeHelp()"
        >
          ×
        </button>


        <h2>
          🤖 Ask Your AI Teacher
        </h2>

        <p>
          Type your question below.
        </p>


        <textarea
          id="studentQuestion"
          placeholder="Example: How do I insert a table in MS Word?"
        ></textarea>


        <button
          id="askButton"
          class="ask-button"
          onclick="askQuestion('${course}', '${project}')"
        >
          Ask Question
        </button>


        <div id="helpAnswer"></div>

      </div>

    </div>

    `
  );

}


// ============================================================
// CLOSE HELP
// ============================================================

function closeHelp() {

  const modal =
    document.getElementById("helpModal");


  if (modal) {
    modal.remove();
  }

}


// ============================================================
// ASK AI TEACHER
// ============================================================

async function askQuestion(course, project) {

  const questionElement =
    document.getElementById("studentQuestion");


  const answer =
    document.getElementById("helpAnswer");


  const button =
    document.getElementById("askButton");


  if (
    !questionElement ||
    !answer ||
    !button
  ) {

    return;

  }


  const question =
    questionElement.value.trim();


  if (!question) {

    answer.innerHTML = `

      <div class="help-answer">

        <p>
          Please type your question first.
        </p>

      </div>

    `;

    return;

  }


  button.disabled = true;

  button.innerText =
    "⏳ AI Teacher is thinking...";


  answer.innerHTML = `

    <div class="help-answer">

      <h3>
        🤔 AI Teacher
      </h3>

      <p>
        Please wait while I prepare the answer...
      </p>

    </div>

  `;


  try {

    const response =
      await fetch("/api/ask", {

        method: "POST",

        headers: {
          "Content-Type":
            "application/json"
        },

        body: JSON.stringify({

          question: question,

          course: course,

          project: project

        })

      });


    const data =
      await response.json();


    if (!response.ok) {

      throw new Error(
        data.error ||
        "AI Teacher could not answer."
      );

    }


    answer.innerHTML = `

      <div class="help-answer">

        <h3>
          💡 AI Teacher
        </h3>

        <div class="ai-response"></div>

      </div>

    `;


    const responseBox =
      answer.querySelector(
        ".ai-response"
      );


    responseBox.textContent =
      data.answer ||
      "No answer received.";


  }

  catch (error) {

    console.error(
      "AI Teacher Error:",
      error
    );


    answer.innerHTML = `

      <div class="help-answer">

        <h3>
          ❌ AI Teacher Error
        </h3>

        <p>
          ${escapeHTML(error.message)}
        </p>

        <p>
          Please try again.
        </p>

      </div>

    `;

  }


  button.disabled = false;

  button.innerText =
    "Ask Question";

}


// ============================================================
// IMAGE VIEWER
// ============================================================

function openImage(imageSrc) {

  const old =
    document.getElementById("imageModal");


  if (old) {
    old.remove();
  }


  document.body.insertAdjacentHTML(

    "beforeend",

    `

    <div
      id="imageModal"
      class="image-modal"
      onclick="closeImage()"
    >

      <div class="image-modal-content">

        <img
          src="${imageSrc}"
          alt="Image"
        >

        <p>
          Click anywhere to close
        </p>

      </div>

    </div>

    `
  );

}


// ============================================================
// CLOSE IMAGE
// ============================================================

function closeImage() {

  const modal =
    document.getElementById("imageModal");


  if (modal) {
    modal.remove();
  }

}


// ============================================================
// SECURITY
// ============================================================

function escapeHTML(text) {

  const div =
    document.createElement("div");


  div.textContent =
    text;


  return div.innerHTML;

}


// ============================================================
// START WEBSITE
// ============================================================

document.addEventListener(
  "DOMContentLoaded",
  showHome
);
