const state={
  lang:"en", dark:false, zoom:100, tab:"Home", toolIndex:0, expanded:true
};

const icons={Home:"🏠",Insert:"📄",Design:"🎨",Layout:"📐",References:"📚",Mailings:"✉️",Review:"📝",View:"👁️"};
const tabData={
Home:[
["📋","Paste","Inserts copied or cut content into the document.","Use Paste when you want to place copied text, pictures or other content somewhere else in the document.","Select the content → Copy/Cut → place the cursor → Home → Paste → choose the required paste option.",["Select the content you want to copy or cut.","Go to the Home tab.","Click Paste in the Clipboard group.","The content is inserted at the cursor position."]],
["✂️","Cut","Removes selected content and places it on the Clipboard.","Use Cut when you want to move text, pictures or other content to another location.","Select the content → Home → Cut → place the cursor at the new location → Paste.",["Select the content.","Go to Home → Cut.","Click the new location.","Use Paste to insert the content."]],
["📄","Copy","Creates a duplicate of selected content without removing the original.","Use Copy when the same content is needed in more than one place.","Select content → Home → Copy → place the cursor → Paste.",["Select the text, image or object.","Choose Home → Copy.","Click where the copy should go.","Choose Paste."]],
["🖌️","Format Painter","Copies formatting from one item and applies it to another.","Use it when two pieces of text should have the same font, size, color, spacing or style.","Select correctly formatted text → Home → Format Painter → select the target text.",["Select the text whose formatting you want to copy.","Click Format Painter in the Clipboard group.","Select or drag over the target text.","The target receives the same formatting. Double-click Format Painter to reuse it several times."]],
["A","Font","Changes the typeface used by selected text.","Use it to choose a readable or required font such as Arial, Calibri or Times New Roman.","Select text → Home → Font Name box → choose a font.",["Select the text.","Open the Font Name list.","Choose the required font.","The selected text changes immediately."]],
["A²","Font Size","Changes the size of selected text.","Use it to make headings larger or body text smaller/larger.","Select text → Home → Font Size → type/select a size.",["Select the text.","Open Font Size.","Choose a size or type a number.","Press Enter if you typed the size."]],
["B","Bold","Makes text darker and thicker.","Use Bold to highlight important words, headings or key information.","Select text → Home → Bold, or use Ctrl+B.",["Select the text.","Go to Home → Font group.","Click Bold.","Click Bold again to remove it."]],
["I","Italic","Makes text slanted.","Use Italic to emphasize words, titles, terms or special notes.","Select text → Home → Italic, or Ctrl+I.",["Select the text.","Click Italic in the Font group.","The selected text becomes slanted.","Click again to turn it off."]],
["U","Underline","Adds a line underneath selected text.","Use Underline when you want to emphasize important text.","Select text → Home → Underline, or Ctrl+U.",["Select the text.","Click Underline.","The underline is applied.","Use the drop-down arrow beside Underline for other underline styles."]],
["🖍️","Text Highlight","Adds a highlight color behind text.","Use it to mark important words or sentences for study or review.","Select text → Home → Text Highlight Color → choose a color.",["Select the text.","Click Text Highlight Color.","Choose a color.","The background behind the text is highlighted."]],
["🎨","Font Color","Changes the color of selected text.","Use it for headings, emphasis or visual organization.","Select text → Home → Font Color → choose a color.",["Select the text.","Click the Font Color arrow.","Choose a color.","The selected text changes color."]],
["•","Bullets","Creates a bulleted list.","Use bullets when the order of items is not important.","Select lines → Home → Bullets → choose a bullet style.",["Place the cursor in the list or select existing lines.","Click Bullets.","Choose a bullet style if required.","Press Enter for the next bullet; press Enter twice to finish."]],
["1.","Numbering","Creates a numbered list.","Use numbering when items need a sequence or order.","Select lines → Home → Numbering → choose a numbering style.",["Select the list items or place the cursor at the start.","Click Numbering.","Choose a numbering style.","Press Enter to continue the sequence."]],
["↔","Increase Indent","Moves a paragraph farther from the left margin.","Use it for sub-points or to show hierarchy.","Place the cursor in the paragraph → Home → Increase Indent.",["Click inside the paragraph.","Click Increase Indent.","The paragraph moves inward.","Click again for a deeper level if needed."]],
["↔","Decrease Indent","Moves an indented paragraph back toward the left margin.","Use it to reduce indentation or return a sub-point to a higher level.","Click inside the paragraph → Home → Decrease Indent.",["Click inside the indented paragraph.","Click Decrease Indent.","The paragraph moves toward the left margin.","Repeat if necessary."]],
["≡","Align Left","Aligns text with the left margin.","Use it for normal paragraphs and many documents.","Select text → Home → Align Left or Ctrl+L.",["Select the paragraph(s).","Click Align Left.","The left edges line up.","Use Ctrl+L as a shortcut."]],
["≡","Center","Centers text between the margins.","Use it for titles, headings and short centered content.","Select text → Home → Center or Ctrl+E.",["Select the text.","Click Center.","The text moves to the middle.","Use Ctrl+E as a shortcut."]],
["≡","Align Right","Aligns text with the right margin.","Use it for dates, signatures or special layouts.","Select text → Home → Align Right or Ctrl+R.",["Select the paragraph.","Click Align Right.","The right edges line up.","Use Ctrl+R as a shortcut."]],
["☰","Justify","Aligns text evenly to both left and right margins.","Use it for formal reports, assignments and long paragraphs.","Select paragraphs → Home → Justify or Ctrl+J.",["Select the paragraphs.","Click Justify.","Word adjusts spacing so both margins look aligned.","Use Ctrl+J as a shortcut."]],
["¶","Show/Hide ¶","Shows non-printing formatting marks such as spaces and paragraph marks.","Use it when checking spacing, blank paragraphs, tabs and formatting problems.","Home → Show/Hide ¶.",["Go to Home → Paragraph group.","Click Show/Hide ¶.","Formatting marks become visible.","Click again to hide them."]],
["Aa","Change Case","Changes selected text between UPPERCASE, lowercase, Title Case and other cases.","Use it when text was typed with the wrong capitalization.","Select text → Home → Change Case → choose the required case.",["Select the text.","Click Change Case.","Choose UPPERCASE, lowercase, Capitalize Each Word, etc.","The selected text changes case."]],
["✕","Clear All Formatting","Removes direct formatting from selected text.","Use it when text has unwanted font, color, size or style formatting.","Select text → Home → Clear All Formatting.",["Select the formatted text.","Click Clear All Formatting.","Direct formatting is removed.","The text returns to the document's normal formatting."]]
],
Insert:[
["📄","Cover Page","Adds a ready-made cover page.","Use it for reports, assignments and projects that need a professional first page.","Insert → Cover Page → choose a design → replace the sample information.",["Open the document.","Click Insert.","Choose Cover Page.","Select a design and replace the title, author and other sample fields."]],
["📃","Blank Page","Adds a new blank page at the cursor position.","Use it when you need a completely empty page for a new section.","Insert → Blank Page.",["Place the cursor where the new page should begin.","Click Insert.","Click Blank Page.","A new page is inserted."]],
["↵","Page Break","Starts the following content on a new page.","Use it instead of pressing Enter many times to move content to another page.","Insert → Page Break, or Ctrl+Enter.",["Place the cursor before the content that should start on the next page.","Click Insert → Page Break.","The following content moves to a new page.","Use Ctrl+Enter for the shortcut."]],
["▦","Table","Creates a table using rows and columns.","Use it for marks, attendance, price lists, schedules or structured data.","Insert → Table → choose the grid size or Insert Table → set rows/columns.",["Place the cursor where the table should go.","Click Insert → Table.","Select the required number of columns and rows.","Click a cell and type your data."]],
["🖼️","Pictures","Inserts an image from your computer or supported location.","Use it for diagrams, photos, screenshots, logos and project illustrations.","Insert → Pictures → choose the source → select image → Insert.",["Click Insert → Pictures.","Choose the location/source.","Select the image.","Click Insert and then use Picture Format to resize or position it."]],
["🔷","Shapes","Adds lines, arrows, rectangles, circles and other shapes.","Use shapes for diagrams, flowcharts, labels and visual explanations.","Insert → Shapes → choose a shape → drag on the page.",["Click Insert → Shapes.","Choose a shape.","Click and drag on the document.","Use Shape Format to change fill, outline and effects."]],
["⭐","Icons","Inserts ready-made icons.","Use icons to make instructions, presentations and documents more visual.","Insert → Icons → search/select an icon → Insert.",["Click Insert → Icons.","Search or browse the icon library.","Select an icon.","Click Insert and format it as needed."]],
["🧊","3D Models","Adds a three-dimensional model.","Use it when a 3D object helps explain a concept.","Insert → 3D Models → choose a source/model → Insert.",["Click Insert → 3D Models.","Choose the available source.","Select the model.","Insert it and use the rotation controls to view it."]],
["✨","SmartArt","Creates visual diagrams such as processes, cycles and hierarchies.","Use it to explain relationships or steps visually.","Insert → SmartArt → choose a category/layout → enter text.",["Click Insert → SmartArt.","Choose a category such as Process or Hierarchy.","Select a layout.","Enter text in the SmartArt text pane."]],
["📊","Chart","Creates a chart from data.","Use charts to show comparisons, trends and numerical information.","Insert → Chart → choose chart type → enter data in the spreadsheet window.",["Click Insert → Chart.","Choose Column, Bar, Pie, Line, etc.","Click OK.","Replace the sample data with your own values."]],
["📷","Screenshot","Inserts a screenshot or screen clipping.","Use it to document software steps, errors or examples.","Insert → Screenshot → choose a window or Screen Clipping.",["Open the window you want to capture.","Go to Insert → Screenshot.","Choose the available window, or Screen Clipping.","Insert and crop/resize the screenshot."]],
["🔗","Link","Creates a clickable hyperlink.","Use it to connect text or objects to websites, files or places in a document.","Select text → Insert → Link → enter address → OK.",["Select the text/object.","Click Insert → Link.","Enter or paste the address.","Click OK and test the link."]],
["🔖","Bookmark","Marks a location in a document.","Use it to quickly return to a specific section or create internal links.","Insert → Bookmark → name the bookmark → Add.",["Place the cursor or select the target location.","Click Insert → Bookmark.","Enter a bookmark name without spaces.","Click Add."]],
["💬","Comment","Adds a note without changing the main document text.","Use comments for feedback, questions and review.","Select text → Insert → Comment.",["Select the relevant text.","Click Insert → Comment.","Type the note.","Post/save the comment."]],
["🔝","Header","Adds content to the top area of pages.","Use it for document titles, organization names, course names or running information.","Insert → Header → choose a style → type content → Close Header and Footer.",["Click Insert → Header.","Choose a design.","Type the header information.","Click Close Header and Footer."]],
["🔻","Footer","Adds content to the bottom area of pages.","Use it for page information, document names or copyright text.","Insert → Footer → choose a style → type content.",["Click Insert → Footer.","Choose a style.","Type the footer information.","Close Header and Footer."]],
["#","Page Number","Adds automatic page numbers.","Use it for reports, assignments and long documents.","Insert → Page Number → choose top/bottom/position → style.",["Click Insert → Page Number.","Choose Top of Page, Bottom of Page, etc.","Select a numbering style.","Word adds automatic page numbers."]],
["T","Text Box","Adds a movable box containing text.","Use it for callouts, labels, side notes or special layouts.","Insert → Text Box → choose a preset or Draw Text Box → type.",["Click Insert → Text Box.","Choose a preset or draw a box.","Type the text.","Use Shape Format to move, resize and style it."]],
["🅰️","WordArt","Creates decorative stylized text.","Use it for titles, posters and visual headings.","Insert → WordArt → choose a style → type your text.",["Click Insert → WordArt.","Choose a style.","Type the required text.","Use Shape Format to change effects and position."]],
["📅","Date & Time","Inserts the current date/time.","Use it for letters, forms, records and documents that need a date stamp.","Insert → Date & Time → choose a format → OK.",["Place the cursor.","Click Insert → Date & Time.","Choose the language and format.","Click OK."]],
["Σ","Equation","Inserts mathematical equations and symbols.","Use it for mathematics, science and technical documents.","Insert → Equation → choose a structure or type an equation.",["Click Insert → Equation.","Choose a built-in equation or create one.","Use the Equation tab tools for fractions, powers and symbols.","Click outside the equation when finished."]],
["Ω","Symbol","Inserts special characters not available directly on the keyboard.","Use it for ©, ®, ±, currency symbols and other special characters.","Insert → Symbol → More Symbols → choose a symbol → Insert.",["Place the cursor.","Click Insert → Symbol.","Choose a symbol/font.","Click Insert and close the dialog."]]
],
Layout:[
["🎨","Themes","Applies a coordinated design to the document.","Use it when you want a consistent professional look across headings, colors and fonts.","Layout/Design → Themes → choose a theme.",["Open the Design tab in current Word versions (some versions show related layout controls separately).","Click Themes.","Preview the available themes.","Click the theme you want."]],
["📏","Margins","Sets the blank space around the page.","Use it to meet assignment/report formatting requirements or create more writing space.","Layout → Margins → choose a preset or Custom Margins.",["Click Layout.","Click Margins.","Choose Normal, Narrow, Wide, etc.","Use Custom Margins when exact measurements are required."]],
["↕️","Orientation","Changes the page between Portrait and Landscape.","Use Landscape for wide tables, charts and large diagrams.","Layout → Orientation → Portrait or Landscape.",["Click Layout.","Click Orientation.","Choose Portrait or Landscape.","The page orientation changes."]],
["📄","Size","Changes the paper size.","Use it to match printing requirements such as A4, Letter or Legal.","Layout → Size → choose the required paper size.",["Click Layout.","Click Size.","Choose A4, Letter, Legal or another option.","For a custom size, open Page Setup."]],
["▥","Columns","Splits text into multiple columns.","Use it for newsletters, brochures and newspaper-style layouts.","Layout → Columns → choose number of columns.",["Select the text if only part of the document should use columns.","Click Layout → Columns.","Choose One, Two, Three or More Columns.","Continue typing; Word flows text between columns."]],
["↪","Breaks","Inserts page, section or column breaks.","Use it when different parts of a document need different layouts or page flow.","Layout → Breaks → choose Page, Column or Section Break.",["Place the cursor where the break should occur.","Click Layout → Breaks.","Choose the appropriate break.","Check the new section/page and adjust formatting if required."]],
["🔢","Line Numbers","Adds numbers beside lines of text.","Use it for legal, technical or reviewed documents where lines need to be referenced.","Layout → Line Numbers → choose a numbering option.",["Click Layout.","Click Line Numbers.","Choose Continuous, Restart Each Page, etc.","Use None to remove line numbering."]],
["≋","Hyphenation","Controls how long words are split at line endings.","Use it to improve text flow in narrow columns or justified documents.","Layout → Hyphenation → Automatic/Manual.",["Click Layout → Hyphenation.","Choose Automatic for Word to manage hyphenation.","Use Manual to review individual breaks.","Select None to turn it off."]],
["💧","Watermark","Places faint text or an image behind document content.","Use it for Draft, Confidential, Sample, Approved or organization branding.","Design → Watermark → choose a preset, or Custom Watermark.",["Open Design → Watermark.","Choose a preset such as Draft or Confidential.","For your own text/image, choose Custom Watermark.","Set the text/image options and click Apply/OK."]],
["🎨","Page Color","Changes the background color of the page.","Use it for digital documents, posters or visual worksheets.","Design → Page Color → choose a color.",["Open Design → Page Color.","Choose a color.","For custom colors, open More Colors.","Remember that page color may affect printing."]],
["▣","Page Borders","Adds a border around the page.","Use it for certificates, invitations, assignments or decorative pages.","Design → Page Borders → choose setting, style and color → OK.",["Open Design → Page Borders.","Choose Box, Shadow, 3-D or Custom.","Select line style, color and width.","Choose where it applies and click OK."]],
["↔","Indent","Moves paragraph content left or right.","Use it to create structured paragraphs and lists.","Layout → Paragraph → Left/Right values.",["Select the paragraph(s).","Use the Left and Right indent boxes.","Enter the required measurement.","Check the paragraph position and adjust if needed."]],
["↕","Spacing","Controls space before and after paragraphs.","Use it to improve readability and separate sections.","Layout → Paragraph → Before/After values.",["Select the paragraph(s).","Set Before spacing.","Set After spacing.","Use consistent values for a clean document."]],
["↔","Position","Sets the position of a floating object.","Use it to place pictures/shapes at a predictable location on the page.","Select object → Picture/Shape Format → Position.",["Select the picture or shape.","Open its Format tab.","Choose Position.","Select a preset or More Layout Options for precise control."]],
["🧩","Wrap Text","Controls how text flows around an object.","Use it whenever a picture or shape needs to sit beside text.","Select object → Format → Wrap Text → choose an option.",["Select the object.","Click Wrap Text.","Choose Square, Tight, Behind Text, In Front of Text, etc.","Move the object and check how text flows around it."]],
["⬆️","Bring Forward","Moves an object in front of another object.","Use it when one shape/image is hidden behind another.","Select object → Format → Bring Forward.",["Select the object.","Open Arrange options.","Choose Bring Forward or Bring to Front.","The object moves higher in the stacking order."]],
["⬇️","Send Backward","Moves an object behind another object.","Use it when an image or shape should sit behind other elements.","Select object → Format → Send Backward.",["Select the object.","Open Arrange options.","Choose Send Backward or Send to Back.","The object moves lower in the stacking order."]],
["↔️","Align","Lines up multiple objects.","Use it to make diagrams and layouts neat.","Select multiple objects → Format → Align → choose alignment.",["Select two or more objects.","Open Align.","Choose Left, Center, Right, Top, Middle or Bottom.","Use Align to Page/Selected Objects as appropriate."]],
["🔄","Rotate","Rotates or flips an object.","Use it to change the direction of pictures, shapes and diagrams.","Select object → Format → Rotate → choose option.",["Select the object.","Click Rotate.","Choose Rotate Right/Left or Flip.","Use More Rotation Options for an exact angle."]]
],
References:[
["📑","Table of Contents","Creates an automatic contents list from heading styles.","Use it for reports, projects, books and long assignments.","Apply Heading styles → References → Table of Contents → choose a style.",["Apply Heading 1/2/3 to your headings.","Place the cursor where the contents page should appear.","Click References → Table of Contents.","Choose an automatic style."]],
["¹","Footnote","Adds a note at the bottom of the current page.","Use it for explanations, source notes or extra information.","References → Insert Footnote.",["Place the cursor after the relevant word/sentence.","Click References → Insert Footnote.","Type the note at the bottom of the page.","Word manages numbering automatically."]],
["📚","Citations & Bibliography","Records sources and creates a bibliography/reference list.","Use it when writing research reports or academic documents.","References → Insert Citation → Add New Source → later Bibliography.",["Open References.","Choose Insert Citation → Add New Source.","Enter the source details.","Insert citations where needed and create a Bibliography at the end."]],
["🏷️","Caption","Adds a numbered label to a figure, table or equation.","Use it so figures/tables can be referenced and listed automatically.","Select object → References → Insert Caption → choose label → OK.",["Select the figure/table.","Click Insert Caption.","Choose Figure, Table or Equation.","Enter the caption and click OK."]],
["🔎","Cross-reference","Creates a link to another heading, figure, table or numbered item.","Use it when a document refers to another section that may move later.","References → Cross-reference → choose reference type/item → Insert.",["Place the cursor where the reference should appear.","Click Cross-reference.","Choose the reference type.","Select the target item and click Insert."]],
["🔤","Index","Creates an alphabetical index of important terms.","Use it for books, manuals and long reference documents.","Mark important terms → References → Insert Index.",["Select an important term.","Click Mark Entry.","Repeat for other terms.","Place the cursor where the index should appear and click Insert Index."]],
["⚖️","Table of Authorities","Creates a list of legal citations.","Use it mainly for legal documents that contain cited cases or authorities.","Mark citations → References → Table of Authorities.",["Select a legal citation.","Use Mark Citation.","Repeat for relevant citations.","Insert the Table of Authorities."]]
],
Mailings:[
["✉️","Envelopes","Creates and prints an envelope.","Use it when preparing physical mail with recipient and sender information.","Mailings → Envelopes → enter addresses → choose options → Print.",["Open Mailings → Envelopes.","Enter delivery and return addresses.","Choose envelope options if needed.","Click Add to Document or Print."]],
["🏷️","Labels","Creates printable address/product labels.","Use it for mailing labels, name labels and product labels.","Mailings → Labels → enter text → Options → choose label → Print.",["Click Labels.","Enter the label information.","Choose the label vendor/product number.","Click New Document to preview or Print."]],
["📨","Start Mail Merge","Starts a personalized document for many recipients.","Use it for letters, certificates, invitations or emails with different names/addresses.","Mailings → Start Mail Merge → choose Letters, Email Messages, Labels, etc.",["Click Start Mail Merge.","Choose the document type.","Connect it to a recipient list.","Insert merge fields and preview the results."]],
["👥","Select Recipients","Connects a mail merge to a list of recipients.","Use it when names/addresses are stored in Excel, CSV or another list.","Mailings → Select Recipients → Use Existing List.",["Click Select Recipients.","Choose Use Existing List.","Select the Excel/CSV file.","Choose the correct sheet/table."]],
["✏️","Edit Recipient List","Filters, sorts or edits recipients.","Use it to include only the required people in a mail merge.","Mailings → Edit Recipient List.",["Click Edit Recipient List.","Select/deselect recipients.","Use Sort or Filter for specific groups.","Click OK when the list is ready."]],
["▣","Address Block","Inserts a formatted recipient address.","Use it when a mail merge needs a standard postal address.","Mailings → Address Block.",["Connect a recipient list.","Place the cursor where the address should appear.","Click Address Block.","Choose the desired format and preview it."]],
["👋","Greeting Line","Adds a personalized greeting.","Use it for letters or emails such as Dear Mr. Sharma or Dear Student.","Mailings → Greeting Line.",["Place the cursor at the greeting position.","Click Greeting Line.","Choose the greeting format.","Preview different recipients to verify names."]],
["🔗","Insert Merge Field","Inserts a specific field from the recipient list.","Use it when you need exact data such as First Name, Course or City.","Mailings → Insert Merge Field → choose a field.",["Place the cursor.","Click Insert Merge Field.","Choose the field.","Repeat for other fields."]],
["⚙️","Rules","Adds conditional logic to a mail merge.","Use it when different recipients should receive different wording.","Mailings → Rules → choose a rule such as If...Then...Else.",["Place the cursor where conditional text is needed.","Click Rules.","Choose the required rule.","Set the field, condition and result text."]],
["🔍","Preview Results","Shows the personalized result for each recipient.","Use it before finishing a mail merge to find errors.","Mailings → Preview Results → use Next/Previous recipient.",["Click Preview Results.","Review the first record.","Use Next/Previous to inspect other recipients.","Correct fields or source data if something is wrong."]],
["🏁","Finish & Merge","Completes the mail merge.","Use it to print merged documents, create individual files or send emails.","Mailings → Finish & Merge → choose the final action.",["Click Finish & Merge.","Choose Edit Individual Documents, Print Documents or Send Email Messages.","Select all/current records as required.","Complete the final action."]]
],
Review:[
["✓","Spelling & Grammar","Checks spelling and grammar issues.","Use it before submitting or printing a document.","Review → Spelling & Grammar.",["Open Review.","Click Spelling & Grammar.","Review each suggestion.","Choose Ignore, Change or another appropriate action."]],
["📖","Thesaurus","Finds synonyms and related words.","Use it to improve vocabulary and avoid repeating the same word.","Review → Thesaurus.",["Select a word or place the cursor in it.","Click Thesaurus.","Review alternative words.","Choose a suitable synonym if required."]],
["🔢","Word Count","Counts words, characters and other document statistics.","Use it when an assignment has a word limit.","Review → Word Count.",["Click Review → Word Count.","Read the statistics.","Close the dialog when finished."]],
["🔊","Read Aloud","Reads the document aloud.","Use it to proofread by listening and to improve accessibility.","Review → Read Aloud → play/pause.",["Open Review.","Click Read Aloud.","Use the controls to pause, move forward/back or change settings.","Listen for wording and punctuation errors."]],
["♿","Check Accessibility","Checks whether the document is accessible to users with disabilities.","Use it before sharing important documents.","Review → Check Accessibility.",["Click Check Accessibility.","Review the Inspection Results pane.","Open each issue for guidance.","Fix important errors and warnings."]],
["🌐","Translate","Translates selected text or the document.","Use it when working with multilingual content.","Review → Translate → Translate Selection or Translate Document.",["Select text for a partial translation, or open Translate for the whole document.","Choose the target language.","Review the translation.","Insert/replace only after checking the result."]],
["🌍","Language","Sets the proofing language.","Use it so Word checks spelling and grammar in the correct language.","Review → Language → Set Proofing Language.",["Select the relevant text.","Open Review → Language.","Choose Set Proofing Language.","Select the language and confirm."]],
["💬","New Comment","Adds a review comment.","Use it for feedback, questions or collaboration.","Review → New Comment.",["Select the relevant text.","Click New Comment.","Type the feedback.","Post the comment."]],
["🗑️","Delete Comment","Removes a comment.","Use it after feedback has been resolved or when a comment is no longer needed.","Review → Delete.",["Select or click the comment.","Click Delete.","Choose Delete Comment or Delete All Comments if appropriate."]],
["◀","Previous","Moves to the previous tracked change/comment.","Use it to review changes in order.","Review → Previous.",["Open the review/markup view.","Click Previous.","Word moves to the previous item."]],
["▶","Next","Moves to the next tracked change/comment.","Use it to review changes in order.","Review → Next.",["Open the review/markup view.","Click Next.","Word moves to the next item."]],
["👁️","Show Comments/Markup","Controls what review information is visible.","Use it to focus on comments, formatting or specific types of changes.","Review → Show Markup / Show Comments.",["Open Review.","Choose Show Markup or Show Comments.","Turn categories on/off as required.","Use Reviewing Pane for a summary."]],
["✓","Accept","Accepts a tracked change.","Use it when you agree with a proposed edit.","Review → Accept.",["Click the changed text.","Click Accept.","Choose Accept This Change or Accept All Changes if appropriate."]],
["✕","Reject","Rejects a tracked change.","Use it when you do not want a proposed edit.","Review → Reject.",["Select the tracked change.","Click Reject.","Choose Reject This Change or Reject All Changes if appropriate."]],
["🔍","Compare","Compares two versions of a document.","Use it to identify differences between drafts.","Review → Compare → choose Original and Revised documents.",["Open Review → Compare.","Select the original document.","Select the revised document.","Click OK and review the generated comparison."]],
["🔒","Protect","Restricts editing or protects document content.","Use it when a document should not be freely edited.","Review → Protect → choose the appropriate protection method.",["Open Review → Protect.","Choose the required restriction.","Set permissions/password if needed.","Confirm protection."]]
],
View:[
["📖","Read Mode","Shows the document in a reading-focused layout.","Use it when you mainly want to read rather than edit.","View → Read Mode.",["Click View.","Choose Read Mode.","Use the navigation controls to move through pages.","Exit Read Mode when you need to edit."]],
["🖨️","Print Layout","Shows the document close to how it will print.","Use it for normal editing and page layout work.","View → Print Layout.",["Click View.","Choose Print Layout.","Check page breaks, margins, headers and footers.","Continue editing normally."]],
["🌐","Web Layout","Shows the document like a web page.","Use it to preview how content flows without page boundaries.","View → Web Layout.",["Click View.","Choose Web Layout.","Review the continuous web-style flow.","Return to Print Layout for normal page work."]],
["📝","Outline","Shows document structure using headings.","Use it to organize and rearrange long documents.","View → Outline.",["Apply Heading styles first.","Click View → Outline.","Use heading levels to show structure.","Move sections when needed."]],
["📄","Draft","Provides a simplified editing view.","Use it for fast text editing and proofreading.","View → Draft.",["Click View.","Choose Draft.","Edit the text in the simplified view.","Return to Print Layout when finished."]],
["🎯","Focus","Hides distractions and focuses on the document.","Use it when you want a cleaner writing environment.","View → Focus.",["Click View → Focus.","Work in the distraction-free view.","Exit Focus to return to the normal interface."]],
["🔎","Navigation Pane","Shows headings, pages and search results.","Use it to jump quickly around a long document.","View → Navigation Pane.",["Click View → Navigation Pane.","Choose Headings, Pages or search.","Click a result to jump to that location."]],
["📏","Ruler","Shows rulers for margins, tabs and indents.","Use it when precise paragraph alignment is needed.","View → Ruler.",["Click View.","Turn Ruler on.","Use the ruler markers to adjust indents and tabs.","Turn it off when you no longer need it."]],
["▦","Gridlines","Shows alignment gridlines on the page.","Use it when arranging shapes and objects.","View → Gridlines.",["Click View.","Turn Gridlines on.","Align objects visually.","Turn it off for a clean page view."]],
["🔍","Zoom","Changes how large the document appears on screen.","Use it to inspect details or see more of a page at once.","View → Zoom, or use the bottom-right zoom slider.",["Click View → Zoom.","Choose a percentage or preset.","Use Page Width/Multiple Pages when useful.","Return to 100% for normal viewing."]],
["🪟","New Window","Opens another window for the same document.","Use it when you want to view different parts of one document simultaneously.","View → New Window.",["Click View → New Window.","A second window opens for the same document.","Scroll to a different section in each window.","Close the extra window when finished."]],
["✂️","Split","Splits the current document window into two panes.","Use it to compare or reference two parts of the same document.","View → Split.",["Click View → Split.","Choose the split position.","Scroll each pane independently.","Remove the split when finished."]],
["🔄","Switch Windows","Switches between open Word windows.","Use it when multiple documents/windows are open.","View → Switch Windows.",["Click View → Switch Windows.","Choose the required document/window.","Word switches to it."]],
["⚙️","Macros","Runs or manages recorded VBA macros.","Use it to automate repeated tasks (only when macros are trusted).","View → Macros → View Macros / Record Macro.",["Open View → Macros.","Choose View Macros or Record Macro.","For a new macro, follow the recording prompts.","Only run macros from trusted sources."]]
],
Design:[
["🎨","Themes","Applies a coordinated visual theme to the document.","Use it when you want a consistent professional design.","Design → Themes → choose a theme.",["Open Design.","Click Themes.","Preview the available designs.","Choose the theme you want."]],
["🌈","Colors","Changes the theme color palette.","Use it to quickly coordinate headings, shapes and accents.","Design → Colors → choose a color set.",["Open Design → Colors.","Preview a palette.","Choose the color set.","The document theme colors update."]],
["🔤","Fonts","Changes the theme font pairing.","Use it to give the whole document a consistent typography style.","Design → Fonts → choose a font set.",["Open Design → Fonts.","Preview font combinations.","Choose a set.","Theme-linked headings/body text update."]],
["✨","Effects","Changes theme effects for objects.","Use it to coordinate visual effects across shapes and graphics.","Design → Effects → choose an effect set.",["Open Design → Effects.","Preview options.","Choose the desired effect set.","Applicable objects use the new theme effects."]],
["💧","Watermark","Places faint text or an image behind page content.","Use it for Draft, Confidential, Sample, Approved or branding.","Design → Watermark → preset/custom.",["Click Design → Watermark.","Choose a preset or Custom Watermark.","Set text/image options.","Click Apply/OK."]],
["🎨","Page Color","Changes the page background color.","Use it for visual worksheets or digital documents.","Design → Page Color.",["Click Page Color.","Choose a color or More Colors.","Review readability.","Remember it may affect printing."]],
["▣","Page Borders","Adds a border around pages.","Use it for certificates, invitations and decorative pages.","Design → Page Borders.",["Click Page Borders.","Choose border setting/style.","Choose color and width.","Select Apply to and click OK."]]
]
};

const bilingual={
"Paste":["चिपकाए गए content को document में insert करता है।","जब copied/cut content को दूसरी जगह रखना हो।"],
"Cut":["चयनित content को हटाकर Clipboard में रखता है।","जब content को एक जगह से दूसरी जगह move करना हो।"],
"Copy":["चयनित content की duplicate copy बनाता है।","जब वही content दूसरी जगह भी चाहिए।"],
"Format Painter":["एक text की formatting दूसरे text पर लागू करता है।","जब दो हिस्सों की formatting समान करनी हो।"],
"Bold":["Text को मोटा और गहरा करता है।","महत्वपूर्ण words या headings को highlight करने के लिए।"],
"Italic":["Text को तिरछा करता है।","Emphasis या अलग text style के लिए।"],
"Underline":["Text के नीचे line लगाता है।","महत्वपूर्ण text को emphasize करने के लिए।"],
"Table":["Rows और columns वाली table बनाता है।","Marks, attendance, schedule या structured data के लिए।"],
"Watermark":["Page content के पीछे हल्का text/image लगाता है।","Draft, Confidential, Sample या branding के लिए।"],
"Page Color":["Page का background color बदलता है।","Digital worksheets या visual documents के लिए।"],
"Page Borders":["Page के चारों ओर border लगाता है।","Certificates, invitations और decorative pages के लिए।"],
"Margins":["Page के चारों ओर blank space सेट करता है।","Assignment/report formatting या writing space नियंत्रित करने के लिए।"]
};

function trText(en){
  if(state.lang==="en") return en;
  return bilingual[en]?.[0] || en;
}
function trUse(en){
  if(state.lang==="en") return en;
  return bilingual[en]?.[1] || en;
}
function currentTools(){return tabData[state.tab]||[]}

function render(){
  const app=document.getElementById("app");
  app.className=state.dark?"app dark":"app";
  const tools=currentTools();
  if(state.toolIndex>=tools.length)state.toolIndex=0;
  const t=tools[state.toolIndex];
  app.innerHTML=`
  <div class="app ${state.dark?'dark':''}">
    <aside class="sidebar">
      <div class="logo"><div class="logo-mark">🎓🤝</div><div><div class="logo-title">JOINING HANDS</div><div class="logo-sub">AI Computer Learning<br>& Practical Lab</div></div></div>
      <nav class="side-nav">
        <button class="nav-btn active" data-home><span class="nav-icon">⌂</span>Home</button>
        <button class="nav-btn" data-side="MS Word"><span class="nav-icon">📝</span>MS Word</button>
        <button class="nav-btn" data-side="MS Excel"><span class="nav-icon">📊</span>MS Excel</button>
        <button class="nav-btn" data-side="MS PowerPoint"><span class="nav-icon">📽️</span>MS PowerPoint</button>
        <button class="nav-btn" data-langside><span class="nav-icon">📖</span>${state.lang==="en"?"English":"हिन्दी"}</button>
      </nav>
      <div class="side-label">Quick Links</div>
      <nav class="side-nav">
        <button class="nav-btn"><span class="nav-icon">🤖</span>AI Teacher</button>
        <button class="nav-btn"><span class="nav-icon">📈</span>My Progress</button>
        <button class="nav-btn"><span class="nav-icon">📝</span>Practice Tests</button>
        <button class="nav-btn"><span class="nav-icon">⬇️</span>Downloads</button>
        <button class="nav-btn"><span class="nav-icon">🎧</span>Help & Support</button>
      </nav>
      <div class="promo"><b>🏆 Keep Learning,<br>Keep Growing!</b><p>Practice daily and become an expert.</p><div class="stars">★★★★★</div></div>
    </aside>

    <main class="main">
      <div class="topbar">
        <div><div class="welcome">${state.lang==="en"?"Welcome back! 👋":"वापसी पर स्वागत है! 👋"}</div><div class="page-title">Computer Learning</div><p class="page-sub">${state.lang==="en"?"Learn step-by-step, practice every tool, and complete practical projects.":"Step-by-step सीखें, हर tool की practice करें और practical projects पूरा करें।"} 🎓</p></div>
        <div class="actions">
          <button class="lang-btn hi" id="hiBtn">हिन्दी 🌐</button>
          <button class="lang-btn" id="enBtn">English 🌐</button>
          <div class="zoombar"><span>🔍</span><b>Image Zoom</b><button id="minus">−</button><span class="zoom-value">${state.zoom}%</span><button id="plus">+</button></div>
          <button class="dark-btn" id="darkBtn">${state.dark?"☀️":"🌙"}</button>
        </div>
      </div>

      <section class="hero">
        <div class="hero-icon">W</div><div><h2>MS Word</h2><p>${state.lang==="en"?"Learn every important MS Word tab step-by-step with examples.":"MS Word के सभी important tabs को examples के साथ step-by-step सीखें।"}</p></div>
        <div class="tabs">${Object.keys(tabData).map(x=>`<button class="tab-btn ${state.tab===x?'active':''}" data-tab="${x}">${icons[x]||"📌"} ${x}</button>`).join("")}</div>
      </section>

      <div class="content-grid">
        <section class="tool-panel">
          <div class="panel-title">▦ ${state.lang==="en"?"Tools in":"Tools —"} ${state.tab} Tab</div>
          <div class="tool-list">${tools.map((x,i)=>`<button class="tool-btn ${i===state.toolIndex?'active':''}" data-tool="${i}"><span class="tool-ico">${x[0]}</span><span>${x[1]}</span><span style="margin-left:auto">›</span></button>`).join("")}</div>
        </section>

        <section class="lesson-panel">
          <div class="lesson-head"><div><h3 class="lesson-title">${t[0]} ${trText(t[1])}<small>${state.tab} Tab</small></h3></div><span>📘</span></div>
          <div class="cards">
            <div class="info-card blue"><h4>🔵 What does it do?</h4><p>${trText(t[2])}</p></div>
            <div class="info-card green"><h4>🟢 When should you use it?</h4><p>${trUse(t[3])}</p></div>
            <div class="info-card yellow"><h4>💡 Example</h4><p>${state.lang==="en"?t[4].split(" → ")[0]+".":(bilingual[t[1]]?.[1]||t[4])}</p></div>
          </div>
          <div class="instruction">
            <button id="instructionToggle"><span>📖 How to use this option?</span><span>${state.expanded?"⌃":"⌄"}</span></button>
            ${state.expanded?`<div class="steps">${t[5].map((s,i)=>`<div class="step"><div class="num">${i+1}</div><div><p><b>${state.lang==="en"?s:stepHindi(s,t[1],i)}</b></p></div><img class="step-image" src="${findImage(t[1],i)}" alt="${t[1]} step ${i+1}" onerror="this.style.display='none'"></div>`).join("")}</div>`:""}
          </div>
          <div class="practice"><div><b>⭐ ${state.lang==="en"?"Practice Task":"Practice Task"}</b><p>${practiceText(t[1])}</p></div><button id="practiceBtn">${state.lang==="en"?"Start Practice →":"Practice शुरू करें →"}</button></div>
        </section>
      </div>

      <div class="bottom-nav"><button id="prev">← ${state.lang==="en"?"Previous Tool":"पिछला Tool"}</button><button id="next">${state.lang==="en"?"Next Tool":"अगला Tool"} →</button></div>

      <section class="projects">
        <h3>${state.lang==="en"?"14 Practical Projects":"14 Practical Projects — 14 प्रोजेक्ट्स"}</h3>
        <div class="project-grid">${Array.from({length:14},(_,i)=>`<div class="project-card"><img src="Project ${i+1}.png" onerror="this.style.visibility='hidden'"><h4>Project ${i+1}</h4><p>${state.lang==="en"?"Practice project — complete the task step-by-step.":"Practice project — दिए गए task को step-by-step पूरा करें।"}</p></div>`).join("")}</div>
      </section>
    </main>
  </div>
  <div class="image-modal" id="modal"><button class="close-modal" id="closeModal">×</button><img class="modal-img" id="modalImg"></div>
  `;
  bind();
}

function stepHindi(s,name,i){
  const common={
    "Paste":["जिस content को copy या cut करना है उसे select करें।","Home tab पर जाएँ।","Clipboard group में Paste पर click करें।","Content cursor की position पर insert हो जाएगा।"],
    "Bold":["जिस text को bold करना है उसे select करें।","Home → Font group में जाएँ।","Bold पर click करें।","Bold हटाने के लिए फिर से click करें।"],
    "Italic":["Text को select करें।","Font group में Italic पर click करें।","Selected text slanted हो जाएगा।","हटाने के लिए फिर से click करें।"],
    "Underline":["Text को select करें।","Underline पर click करें।","Text के नीचे line आ जाएगी।","हटाने के लिए फिर से click करें।"],
    "Table":["जहाँ table चाहिए वहाँ cursor रखें।","Insert → Table पर click करें।","Rows और columns चुनें।","Cells में अपना data type करें।"],
    "Watermark":["Design → Watermark पर जाएँ।","Preset watermark चुनें या Custom Watermark खोलें।","Text/image और उसकी settings चुनें।","Apply/OK पर click करें।"],
    "Page Color":["Design → Page Color पर जाएँ।","अपना color चुनें।","जरूरत हो तो More Colors चुनें।","Document का page background बदल जाएगा।"],
    "Page Borders":["Design → Page Borders खोलें।","Border setting/style चुनें।","Color और width चुनें।","Apply to चुनकर OK करें।"]
  };
  return common[name]?.[i] || s;
}
function practiceText(name){
  const p={
    Paste:"Copy a paragraph and paste it at the end of the document. Then change its font.",
    Cut:"Move one sentence from the first paragraph to the last paragraph.",
    Table:"Create a 4-column student marks table with at least 5 students.",
    Watermark:"Add a CONFIDENTIAL watermark to a practice document, then remove it.",
    "Page Color":"Change the page color, check readability, then return to white.",
    "Page Borders":"Create a simple border around a one-page assignment.",
    Bold:"Make the main heading bold and highlight two important words.",
    Italic:"Italicize three technical terms in a paragraph.",
    Underline:"Underline the title and one important sentence."
  };
  return p[name] || `Open MS Word and practice the ${name} option using a small sample document.`;
}
function findImage(name,i){
  // Uses the project's uploaded images when available. The image is only a visual aid;
  // the written steps remain complete even when no matching screenshot exists.
  const n=(i%14)+1;
  return `Project ${n}.png`;
}
function bind(){
  document.querySelectorAll("[data-tab]").forEach(b=>b.onclick=()=>{state.tab=b.dataset.tab;state.toolIndex=0;state.expanded=true;render()});
  document.querySelectorAll("[data-tool]").forEach(b=>b.onclick=()=>{state.toolIndex=+b.dataset.tool;state.expanded=true;render()});
  document.getElementById("instructionToggle").onclick=()=>{state.expanded=!state.expanded;render()};
  document.getElementById("hiBtn").onclick=()=>{state.lang="hi";render()};
  document.getElementById("enBtn").onclick=()=>{state.lang="en";render()};
  document.getElementById("darkBtn").onclick=()=>{state.dark=!state.dark;document.documentElement.classList.toggle("dark",state.dark);render()};
  document.getElementById("minus").onclick=()=>{state.zoom=Math.max(50,state.zoom-10);applyZoom()};
  document.getElementById("plus").onclick=()=>{state.zoom=Math.min(200,state.zoom+10);applyZoom()};
  document.getElementById("prev").onclick=()=>{state.toolIndex=(state.toolIndex-1+currentTools().length)%currentTools().length;render()};
  document.getElementById("next").onclick=()=>{state.toolIndex=(state.toolIndex+1)%currentTools().length;render()};
  document.getElementById("practiceBtn").onclick=()=>alert(state.lang==="en"?"Practice task opened. Use the instructions above to complete it in MS Word.":"Practice task: ऊपर दिए गए instructions के अनुसार MS Word में इसे पूरा करें।");
  document.querySelectorAll(".step-image").forEach(img=>img.onclick=()=>{if(img.naturalWidth){document.getElementById("modalImg").src=img.src;document.getElementById("modal").classList.add("open")}});
  document.getElementById("closeModal").onclick=()=>document.getElementById("modal").classList.remove("open");
  document.getElementById("modal").onclick=e=>{if(e.target.id==="modal")e.currentTarget.classList.remove("open")};
}
function applyZoom(){
  document.querySelector(".zoom-value").textContent=state.zoom+"%";
  document.querySelectorAll(".step-image").forEach(img=>img.style.transform=`scale(${state.zoom/100})`);
}
render();
