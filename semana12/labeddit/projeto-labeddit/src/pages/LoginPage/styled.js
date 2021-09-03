import { Button, Container, TextField } from '@material-ui/core'
import styled from 'styled-components'



export const StyledButton = styled(Button)`
  background-color: #FF0000;
  color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 10px;
  margin-left: 140px;

  &:hover {
    background-color: #5469d4;
  }
  display: flex;
  align-items: center;
`


export const StyledForm = styled(TextField)`
box-shadow: 6px solid red; 
padding: 6px; 
margin: 8px; 
display: flex;
width: 20em;

`

export const ContainerAll = styled(Container)`
padding: 100px;
`

export const ButtonCadastrar = styled(Button)`
  background-color: #FF0000;
  color: #fff;
  box-shadow: 4px;
  padding: 10px;
  align-items: center;
  &:hover {
    background-color: #5469d4;
  }
`
