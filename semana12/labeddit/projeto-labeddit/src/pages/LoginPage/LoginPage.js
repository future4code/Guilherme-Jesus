import { Button} from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import { goToSignUp } from '../../routes/coordinator'
import LoginForm from './LoginForm'



const LoginPage = ({setRightButton}) => {
useUnprotectedPage()
const history = useHistory()
    return (
        <div>
            <LoginForm setRightButton = {setRightButton} />
            <Button
                onClick = {()=>goToSignUp(history)}
                type={'onSubmit'}
                fullWidth
                variant={'text'}
            >Cadastrar-se aqui</Button>
        </div>
    )
}

export default LoginPage