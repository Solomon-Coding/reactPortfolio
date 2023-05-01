import React from 'react';
import {Box, Div} from "./resume";

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
		<Box>
			<h2>Resume</h2>
			<Div>
				<p>Download my&nbsp;</p>
				<button onClick={onButtonClick} style={{cursor: 'pointer'}}>
					Resume
				</button>
			</Div>


			<h3>Front-end</h3>
			<ul>
				<li>HTML</li>
				<li>CSS</li>
				<li>JavaScript</li>
				<li>jQuery</li>
				<li>responsive design</li>	
				<li>React</li>
				<li>Bootstrap</li>
			</ul>

			<h3>Back-end</h3>
			<ul>
				<li>APIs</li>
				<li>Node</li>
				<li>Express</li>
				<li>MySQL, Sequelize</li>
				<li>MongoDB, Mongoose</li>	
				<li>REST</li>
				<li>GraphQL</li>
			</ul>
		</Box>
	</main>

);
};

export default Resume;
