// js/coreUtils.js
// Core utility functions for Contracts Manager Tools


const CoreUtils = {
    /**
     * Replaces words in specified input textareas based on the provided dictionary.
     * @param {Object} dictionary - The dictionary for word replacement.
     * @param {string[]} inputIds - Array of input textarea IDs.
     */
    convertTextInInputs: function(dictionary, inputIds) {
        inputIds.forEach(id => {
            let text = $(`#${id}`).val();
            if (typeof text === 'string') {
                for (const [key, value] of Object.entries(dictionary)) {
                    const regex = new RegExp(`\\b${key}\\b`, 'gi');
                    text = text.replace(regex, value);
                }
                $(`#${id}`).val(text);
            }
        });
    },

    /**
     * Copies text from a specified textarea to the clipboard.
     * @param {string} textElementId - The ID of the textarea element.
     */
    copyToClipboard: function(textElementId) {
        const textElement = $(`#${textElementId}`);
        if (textElement.length > 0 && textElement.val()) {
            textElement.select();
            try {
                document.execCommand("copy");
                alert("Text copied to clipboard!");
            } catch (err) {
                alert("Failed to copy text. Your browser might not support this feature or focus is not on the page.");
                console.error("Copy to clipboard failed: ", err);
            }
        } else if (textElement.val() === '') {
             alert("Nothing to copy!");
        }
    },

    /**
     * Clears the content of specified textareas.
     * @param {string[]} textareaIds - Array of textarea IDs to clear.
     */
    clearTextareas: function(textareaIds) {
        textareaIds.forEach(id => {
            $(`#${id}`).val('');
        });
    },

    /**
     * Displays the generated prompt in the output textarea.
     * @param {string} promptText - The prompt text to display.
     * @param {string} outputElementId - The ID of the output textarea.
     */
    displayPrompt: function(promptText, outputElementId) {
        $(`#${outputElementId}`).val(promptText);
    }
};