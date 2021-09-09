import { Button} from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import { goToSignUp } from '../../routes/coordinator'
import LoginForm from './LoginForm'
import {ButtonCadastrar} from './styled'


const LoginPage = ({setRightButton}) => {
useUnprotectedPage()
const history = useHistory()
    return (
        <div>
            <LoginForm setRightButton = {setRightButton} />
            <ButtonCadastrar
                onClick = {()=>goToSignUp(history)}
                type={'onSubmit'}
                variant={'text'}
                fullWidth
            >Cadastrar-se aqui</ButtonCadastrar>
        </div>
    )
}

export default LoginPage