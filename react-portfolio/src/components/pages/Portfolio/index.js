import React from 'react';
import projects from './projects';
import {Div, Box} from "./PortfolioElements";

const Portfolio = () => {
return (
	<main>
		<h1>Add portfolio!</h1>
		<Box>
			{projects.map((project)=>
			<Div>
				{}
				<a href={project.webLocation} target="_blank" rel="noreferrer">{project.name}</a>
			</Div>)}	
		</Box>
	</main>
);
};

export default Portfolio;
