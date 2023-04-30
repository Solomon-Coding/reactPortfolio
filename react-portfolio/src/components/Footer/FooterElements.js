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
width: 80%;
height: 80%;
align-items: center;
margin-right: -24px;
white-space: nowrap; */
&.active {
	color: #FFCB9B;
}
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const Svg = styled.svg`
display: flex;
width:100%;
height:100%;
fill: #D8B08C;
white-space: nowrap; */
&.active {
	color: #FFCB9B;
}
@media screen and (max-width: 768px) {
	display: none;
}
`;