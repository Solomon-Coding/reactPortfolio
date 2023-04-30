// import { FaBars } from "../../logo";
// import { FooterLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Footer = styled.footer`
background: #ffb3ff;
height: 85px;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
`;

export const Img = styled.img`
display: flex;
width: 30%;
height: 30%;
align-items: center;
margin-right: -24px;
/* Second Footer */
/* margin-right: 24px; */
/* Third Footer */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;
