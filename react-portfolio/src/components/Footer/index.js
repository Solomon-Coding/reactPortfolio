import React from "react";
import GitHub from "../../github_icon.svg"
import LinkedIn from "../../linkedin_icon.svg"
import StackOverflow from "../../stackoverflow_icon.svg"
import { Footer,Img}
	from "./FooterElements";

const FooterComponent = () => {
return (
	<>
	<Footer>
		<a href="https://github.com/Solomon-Coding/" target="_blank" rel="noreferrer">
			<Img src={GitHub} alt="GitHub Logo"></Img>
		</a>
		<a href="https://www.linkedin.com/in/solomon-vana-3a0217197/" target="_blank" rel="noreferrer">
			<Img src={LinkedIn} alt="LinkedIn Logo"></Img>
		</a>
		<a href="https://stackoverflow.com/users/21622124/s-coding" target="_blank" rel="noreferrer">
			<Img src={StackOverflow} alt="StackOverflow Logo"></Img>
		</a>
	</Footer>
	</>
);
};

export default FooterComponent;
