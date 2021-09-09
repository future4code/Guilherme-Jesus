import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { login } from '../../services/user'
import CircularProgress from '@material-ui/core/CircularProgress';
import { ContainerAll, StyledButton, StyledForm } from './styled'


const LoginForm = ({setRightButton}) => {
    const [form, onChange, clear] = useForm({ email: "", password: "" })
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history, setRightButton, setIsLoading)
    }



    return (
        <ContainerAll maxWidth="sm">
            <h1>Login</h1>
            <form onSubmit={onSubmitForm}>
                <StyledForm
                    name={'email'}
                    value={form.email}
                    onChange={onChange}
                    label={"E-mail"}
                    variant={'outlined'}
                    margin={'dense'}
                    required
                    type={'email'}
                />
                <StyledForm
                    name={'password'}
                    value={form.password}
                    onChange={onChange}
                    label={"Senha"}
                    variant={'outlined'}
                    margin={'dense'}
                    required
                    type={'password'}
                />
                <StyledButton
                    type={'onSubmit'}
                    variant={'contained'}
                >
                    {isLoading? <CircularProgress size= {40} color ={'primary'}/> : <>Entrar</>}
                    
                    </StyledButton>
            </form>
        </ContainerAll>


    )
}

export default LoginForm