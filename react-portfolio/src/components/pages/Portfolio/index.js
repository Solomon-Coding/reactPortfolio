import React from 'react';
import projects from './projects';
import {Box} from "./PortfolioElements";
import GitHub_icon from "../../../github_icon.svg";
const Portfolio = () => {
		return (
			<main>
				<h1>My Projects</h1>
				<br/>
				<Box>
					{projects.map((project)=>
					<div className='container1'>
						<img className='image' src={project.image} alt={project.altText}></img>
						<div className='overlay'>
							<a className='text' href={project.webLocation} target="_blank" rel="noreferrer">{project.name}</a>
							
							<a className='text2' href={project.gitHub} target="_blank" rel="noreferrer">
								<img className='gitImage' src={GitHub_icon} alt='GitHub Icon'/>
							</a>
						</div>
					</div>
					)}	
				</Box>
			</main>
		);
		};

export default Portfolio;
