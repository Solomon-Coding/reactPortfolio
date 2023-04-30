import React from "react";
import Picture from "../../../SDV_Picture.jpg";
import {Img} from "./about";

const About = () => {
return (
	<main>
        
        <div>
            <h1>About Me</h1>
            <Img src={Picture} alt="Solomon Vana"></Img>
        </div>
        <br/>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio fugit eveniet maxime. Culpa exercitationem dolorum sit natus quia, quam quasi numquam iusto eveniet voluptatum illum nulla officiis sapiente enim qui.</p>
        <br/>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio fugit eveniet maxime. Culpa exercitationem dolorum sit natus quia, quam quasi numquam iusto eveniet voluptatum illum nulla officiis sapiente enim qui.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio fugit eveniet maxime. Culpa exercitationem dolorum sit natus quia, quam quasi numquam iusto eveniet voluptatum illum nulla officiis sapiente enim qui.</p>

	</main>
);
};

export default About;
