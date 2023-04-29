import React from 'react';

// Function will execute on click of button
const onButtonClick = () => {
	// using Java Script method to get PDF file
	fetch('SDV_Resume.pdf').then(response => {
		response.blob().then(blob => {
			// Creating new object of PDF file
			const fileURL = window.URL.createObjectURL(blob);
			// Setting various property values
			let alink = document.createElement('a');
			alink.href = fileURL;
			alink.download = 'SDV_Resume.pdf';
			alink.click();
		})
	})
}

const Resume = () => {
return (
	<div>	
		<h3>Resume</h3>
		<h3>Click on below button to download PDF file</h3>
				<button onClick={onButtonClick}>
					Download PDF
				</button>
	</div>

);
};

export default Resume;
