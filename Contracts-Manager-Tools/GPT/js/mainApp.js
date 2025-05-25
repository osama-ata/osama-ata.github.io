// Main application logic for Contracts Manager Tools
// js/mainApp.js

$(document).ready(function() {
    const toolSelector = $('#tool_selector');
    const labelTextbox1 = $('#label_textbox_1');
    const labelTextbox2 = $('#label_textbox_2');
    const textbox1 = $('#textbox_1');
    const textbox2 = $('#textbox_2');

    let currentTool = null;

    // Populate tool selector
    APP_CONFIG.tools.forEach(tool => {
        toolSelector.append(`<option value="${tool.id}">${tool.displayName}</option>`);
    });

    // Function to update UI based on selected tool
    function updateUIForTool(toolId) {
        currentTool = APP_CONFIG.tools.find(t => t.id === toolId);
        if (currentTool) {
            labelTextbox1.text(currentTool.label1);
            labelTextbox2.text(currentTool.label2);
            textbox1.attr('placeholder', `Enter ${currentTool.label1.replace(':', '')} here...`);
            textbox2.attr('placeholder', `Enter ${currentTool.label2.replace(':', '')} here...`);
            // Optionally clear textboxes on tool change, or preserve content
            // CoreUtils.clearTextareas([APP_CONFIG.outputTextboxId]);
        }
    }

    // Event listener for tool selector change
    toolSelector.on('change', function() {
        updateUIForTool($(this).val());
    });

    // Initialize UI with the first tool
    if (APP_CONFIG.tools.length > 0) {
        toolSelector.val(APP_CONFIG.tools[0].id); // Set default selection
        updateUIForTool(APP_CONFIG.tools[0].id);
    }

    // Event listener for "Convert Text" button
    $('#convert_text').click(function() {
        CoreUtils.convertTextInInputs(APP_CONFIG.dictionary, APP_CONFIG.inputTextboxIds);
    });

    // Event listener for "Generate Prompt" button
    $('#generate_prompt').click(function() {
        if (currentTool) {
            const input1Val = textbox1.val();
            const input2Val = textbox2.val();
            const prompt = currentTool.promptTemplate(input1Val, input2Val);
            CoreUtils.displayPrompt(prompt, APP_CONFIG.outputTextboxId);
        } else {
            alert("Please select a tool first.");
        }
    });

    // Event listener for "Copy Text" button
    $('#copy_text').click(function() {
        CoreUtils.copyToClipboard(APP_CONFIG.outputTextboxId);
    });

    // Event listener for "Clear Text" button
    $('#clear_text').click(function() {
        CoreUtils.clearTextareas([...APP_CONFIG.inputTextboxIds, APP_CONFIG.outputTextboxId]);
    });
});