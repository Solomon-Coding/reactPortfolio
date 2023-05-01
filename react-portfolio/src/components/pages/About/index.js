import React from "react";
import Picture from "../../../SDV_Picture.jpg";
import {Img} from "./AboutElements";

const About = () => {
return (
	<main>
        
        <div>
            <h1>About Me</h1>
            <Img src={Picture} alt="Solomon Vana"></Img>
        </div>
        <br/>
        <p>I'm a front-end web developer based in Verona WI, with a background in numerical analysis and 
            mechanical engineering. My attention to detail and my pursuit quality takes my work to the next 
            level. I am currently a student in the University of Wisconsin Coding Bootcamp. I am passionate 
            about coding and solving problems through code. I love the challenge that comes from staring at 
            code and finding solutions in unique and creative ways. Additionally, I love working alongside 
            other amazing programmers where we can grow as a group!</p>
        <br/>
        {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio fugit eveniet maxime. Culpa 
            exercitationem dolorum sit natus quia, quam quasi numquam iusto eveniet voluptatum illum nulla 
            officiis sapiente enim qui. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio fugit 
            eveniet maxime. Culpa exercitationem dolorum sit natus quia, quam quasi numquam iusto eveniet 
            voluptatum illum nulla officiis sapiente enim qui.</p> */}

	</main>
);
};

export default About;
