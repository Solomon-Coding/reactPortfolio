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
	<main>	
		<h3>Resume</h3>
		Download my&nbsp;
		<button onClick={onButtonClick}>
			Resume
		</button>

		<h2>Front-end</h2>
		<ul>
			<li>HTML</li>
			<li>CSS</li>
			<li>JavaScript</li>
			<li>jQuery</li>
			<li>responsive design</li>	
			<li>React</li>
			<li>Bootstrap</li>
		</ul>

		<h2>Back-end</h2>
		<ul>
			<li>APIs</li>
			<li>Node</li>
			<li>Express</li>
			<li>MySQL, Sequelize</li>
			<li>responsive design</li>	
			<li>React</li>
			<li>Bootstrap</li>
		</ul>
	</main>

);
};

export default Resume;
