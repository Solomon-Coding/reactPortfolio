import styled from "styled-components";

export const Div = styled.div`

`;

export const Img = styled.img`
display: flex;
width: 350px;
height: 200px;
margin: 20px;
border-radius: 5%;
justify-content: center;
align-items: center;
&:hover {
    // filter: brightness(0.5);
};
`;

export const Box = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`;

export const Hover = styled.div`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
background: black;
color: #fff;
visibility: hidden;
opacity: 0;
display: flex;
align-items: center;
justify-content: center;
/* transition effect. not necessary */
transition: opacity .2s, visibility .2s;
&:hover{
    visibility: visible;
    opacity: 1;
  }
}
`;