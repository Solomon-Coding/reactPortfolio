import styled from "styled-components";

export const Header = styled.header`
background: #2C3532;
color: #D8B08C;
height: 85px;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
`;

export const HeaderMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
/* Second Header */
/* margin-right: 24px; */
/* Third Header */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;
