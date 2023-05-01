import React from 'react';
import projects from './projects';
import {Hover, Img, Box} from "./PortfolioElements";
// const Portfolio = () => {
// return (
// 	<main>
// 		<h1>Add portfolio!</h1>
// 		<Box>
// 			{projects.map((project)=>
// 			<Div>
// 				{}
// 				<a href={project.webLocation} target="_blank" rel="noreferrer">{project.name}</a>
// 			</Div>)}	
// 		</Box>
// 	</main>
// );
// };

const Portfolio = () => {
	return (
		<main>
			<h1>My Projects</h1>
			<br/>
			<Box>
				{projects.map((project)=>
						
						<div className='container'>
							<Img src={project.image} alt={project.altText}>
							</Img>
							<a href={project.webLocation} target="_blank" rel="noreferrer">
							
							<div className='overlay'>
							
							<p className='text'>
								This is a test</p>
							</div>
							</a>
						</div>
					
				)}	
			</Box>
		</main>
	);
	};
	


export default Portfolio;
