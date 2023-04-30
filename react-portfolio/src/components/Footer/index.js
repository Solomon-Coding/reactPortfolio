import React from "react";
import GitHub from "../../github_icon.svg"
import LinkedIn from "../../linkedin_icon.svg"
import StackOverflow from "../../stackoverflow_icon.svg"
import { Footer}
	from "./FooterElements";

const FooterComponent = () => {
return (
	<>
	<Footer>
		<a href="https://github.com/Solomon-Coding/" target="_blank" rel="noreferrer">
			<img src={GitHub} alt="GitHub Logo" width="100%" height="100%"></img>
		</a>
		<a href="https://www.linkedin.com/in/solomon-vana-3a0217197/" target="_blank" rel="noreferrer">
			<img src={LinkedIn} alt="LinkedIn Logo" width="100%" height="100%"></img>
		</a>
		<a href="https://stackoverflow.com/users/21622124/s-coding" target="_blank" rel="noreferrer">
			<img src={StackOverflow} alt="StackOverflow Logo" width="100%" height="100%"></img>
		</a>
	</Footer>
	</>
);
};

export default FooterComponent;
