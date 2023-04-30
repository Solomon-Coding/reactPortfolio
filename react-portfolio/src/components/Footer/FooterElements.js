import styled from "styled-components";

export const Footer = styled.footer`
background: #2C3532;
height: 85px;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
`;

export const Img = styled.img`
display: flex;
fill: #D8B08C;
width: 30%;
height: 30%;
align-items: center;
margin-right: -24px;
/* Second Footer */
/* margin-right: 24px; */
/* Third Footer */
/* width: 100vw;
white-space: nowrap; */
&.active {
	color: #FFCB9B;
}
@media screen and (max-width: 768px) {
	display: none;
}
`;
