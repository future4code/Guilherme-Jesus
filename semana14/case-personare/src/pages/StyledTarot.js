import styled from "styled-components";


export const StyledTitle =styled.div`
display: flex;
justify-content: center;
font-size: 5rem;
padding-top: 8rem;
margin: 3rem;
`
export const ContainerAll = styled.div`
  width: 640px;
  height: 350px;
`
export const StyledCards =styled.div`
  display: flex;
  justify-content: center;
  transform-style: preserve-3d;
  transform: rotateY(180deg);
  :active {
    transform: scale(0.97);
    transition: transform .6s;
  }
`
export const StyledFront =styled.div`
  position: absolute;
  transform-style: preserve-3d;
  backface-visibility: hidden;

`
export const StyledBack =styled.div`
  position: absolute;
  transform: rotateY(180deg);
  transform-style: preserve-3d;
  
`
