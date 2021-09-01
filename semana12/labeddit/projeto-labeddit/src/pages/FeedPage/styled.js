import { Fab } from '@material-ui/core'
import styled from 'styled-components'

export const ContainerFeed = styled.div`
	padding: 30px;
    height: 500px;
	border-radius: 10px;
	border: 2px;
	border-style: solid ;
    max-width: 380px;
    display: flex;
    flex-direction: column;
`

export const AddPostFeed = styled(Fab)`
position: fixed !important;
right: 20px;
bottom: 20px;
z-index:3


`
