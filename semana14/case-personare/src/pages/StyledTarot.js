import styled from "styled-components";


export const StyledTitle =styled.div`
display: flex;
justify-content: center;
font-size: 5rem;
padding-top: 8rem;
margin: 3rem;

`
export const StyledFront =styled.div`
display:flex ;
justify-content: center;
align-items: center;
position: absolute;
transform: rotateY(180deg);
`
export const StyledCards =styled.div`
:hover{
transform: rotateY(180deg);
transition: all 0.2s ease;
}
margin: 3rem;
`
export const ContainerGeral = styled.div`
display: flex;
justify-content: center;
transform-style: preserve-3d;


`
export const StyledBack =styled.div`
display:flex ;
justify-content: center;
align-items: center;
position: absolute;

`