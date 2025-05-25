# Roadmap

## How to Use and Expand

- Place files: Create the directory structure and files as shown above. Ensure tailwind.min.css and jquery.min.js are in their respective css and js folders.
- Open index.html: Open this file in your browser.
- Add new tools:
  - Go to js/config.js.
  - Add a new object to the APP_CONFIG.tools array. Define its id, displayName (for the dropdown), label1, label2 for the input fields, and a promptTemplate function that takes two inputs and returns the desired prompt string.
  - The new tool will automatically appear in the dropdown.
- Update Dictionary: Modify APP_CONFIG.dictionary in js/config.js to add or change word replacements.
- Customize Prompts: Edit the promptTemplate functions within js/config.js for any tool.

This revised structure provides a solid foundation for a more organized and easily expandable tool.
