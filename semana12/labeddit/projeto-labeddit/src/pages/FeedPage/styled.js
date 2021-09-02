import { Fab } from '@material-ui/core'
import styled from 'styled-components'

export const ContainerFeed = styled.div`
	padding: 30px;
    height: 500px;
	border-radius: 10px;
	border: 2px;
	border-style: solid ;
    max-width: 380px;
    min-width: 400px;
    display: flex;
    flex-direction: column;
    margin-bottom:30px;
    justify-items:center;
    margin: 40px 40%;
`
export const PositionContainer = styled.div`
justify-content: center;


`

export const AddPostFeed = styled(Fab)`
position: fixed !important;
right: 20px;
bottom: 20px;
z-index:3;


`
