const dictionary = {
        "JV": "the Contractor",
		"O/OE": "the Employer/Engineer",
        "OE": "the Engineer",
		"client": "the Employer",
		"Fichtner": "the Engineer",
		"SWCC": "the Employer",
        // Add more word conversions as needed
    };

// This code depends on JQuery
$(document).ready(function(){
	$('#convert_text').click(function() {
		let textbox1 = $('#textbox_1').val();
		let textbox2 = $('#textbox_2').val();

		for (const [key, value] of Object.entries(dictionary)) {
			const regex = new RegExp(`\\b${key}\\b`, 'gi');
			textbox1 = textbox1.replace(regex, value);
			textbox2 = textbox2.replace(regex, value);
		}

		$('#textbox_1').val(textbox1);
		$('#textbox_2').val(textbox2);
	});

	$('#generate_prompt').click(function() {
		const textbox1 = $('#textbox_1').val();
		const textbox2 = $('#textbox_2').val();

		const prompt = `You are a construction contracts manager working for the Contractor. I want you to check the requirements of the Engineer provided in its letter below:\n'''${textbox1}'''\n\n Against this draft reponse provided by the Contractor:\n'''${textbox2}'''\n\nHighlight what was addressed in the Contractor draft and what was not covered and advise how to address that. Be organised and respond in bullet points.`;

		$('#textbox_3').val(prompt);
	});

	$('#copy_text').click(function() {
		const textbox3 = $('#textbox_3');
		textbox3.select();
		document.execCommand("copy");
		alert("Text copied to clipboard!");
	});

	$('#clear_text').click(function() {
		$('#textbox_1').val('');
		$('#textbox_2').val('');
		$('#textbox_3').val('');
	});
});
	