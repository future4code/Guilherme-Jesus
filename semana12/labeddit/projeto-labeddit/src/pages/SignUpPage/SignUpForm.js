import { Button, TextField } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import { signUp } from '../../services/user'
import { ContainerAll, StyledButton, StyledForm } from './styled'



const SignUpForm = ({setRightButton}) => {
    useUnprotectedPage()
    const history = useHistory()
    const [form, onChange, clear] = useForm({ username: '', email: "", password: "" })

    const onSubmitSignUp= (event) => {
        event.preventDefault()
        signUp(form, clear, history,setRightButton)
    }

    return (

        <ContainerAll maxWidth="sm">
            <h1>Cadastro</h1>
            <form onSubmit={onSubmitSignUp}>
                <StyledForm
                    name={'username'}
                    value={form.username}
                    onChange={onChange}
                    label={"Nome"}
                    variant={'outlined'}
                    margin={'dense'}
                    required
                    type={'username'}
                />
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
                    type = "submit"
                    variant={'contained'}
                    margin = {'dense'}
                >Cadastrar</StyledButton>
            </form>
        </ContainerAll >


    )
}

export default SignUpForm