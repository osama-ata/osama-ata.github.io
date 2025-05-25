// Contracts-Manager-Tools\GPT\js\config.js
// Configuration settings and dictionary for Contracts Manager Tools


const APP_CONFIG = {
    dictionary: {
        "JV": "the Contractor",
        "O/OE": "the Employer/Engineer",
        "OE": "the Engineer",
        "client": "the Employer",
        "Fichtner": "the Engineer",
        "SWCC": "the Employer",
        "Energya": "the Subcontractor",
        // Add more global word conversions as needed
    },
    tools: [
        {
            id: "engineer_response",
            displayName: "Draft Engineer Response",
            label1: "Engineer's Letter:",
            label2: "Contractor's Feedback/Points:",
            promptTemplate: function (input1, input2) {
                return `You are a construction contracts manager working for the Contractor. I want you to draft a response to the Engineer's letter below:
'''${input1}'''

Use this feedback in your draft:
'''${input2}'''

Always, use THIRD-PERSON NARRATION (e.g., the Contractor, the Engineer and the Employer)
The style and tone should be professional like a lawyer, and it must be very clear, easy and concise`;
            }
        },
        {
            id: "subcontractor_letter",
            displayName: "Draft Letter to Subcontractor",
            label1: "Main Points for Letter:",
            label2: "Additional Considerations/Style:",
            promptTemplate: function (input1, input2) {
                return `You are a construction contracts manager working for the Contractor. I want you to draft a letter to the Subcontractor. Use this feedback in your draft:
'''${input1}'''

These are also additional considerations in your writing style:
${input2}

Always, use THIRD-PERSON NARRATION (e.g., the Contractor, the Engineer, the Subcontractor and the Employer)
The style and tone should be professional like a lawyer, and it must be very clear, easy and concise`;
            }
        },
        {
            id: "requirement_compliance",
            displayName: "Check Requirement Compliance",
            label1: "Engineer's Requirements Letter:",
            label2: "Contractor's Draft Response:",
            promptTemplate: function (input1, input2) {
                return `You are a construction contracts manager working for the Contractor. I want you to check the requirements of the Engineer provided in its letter below:
'''${input1}'''

Against this draft reponse provided by the Contractor:
'''${input2}'''

Highlight what was addressed in the Contractor draft and what was not covered and advise how to address that. Be organised and respond in bullet points.`;
            }
        }
        // Add more tool definitions here
    ],
    inputTextboxIds: ['textbox_1', 'textbox_2'],
    outputTextboxId: 'textbox_3'
};