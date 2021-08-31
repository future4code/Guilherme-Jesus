import { Button, TextField } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import { goToFeed } from '../../routes/coordinator'
import { signUp } from '../../services/user'



const SignUpForm = ({setRightButton}) => {
    const history = useHistory()
    const [form, onChange, clear] = useForm({ username: '', email: "", password: "" })

    const onSubmitSignUp= (event) => {
        event.preventDefault()
        signUp(form, clear, history,setRightButton)
    }

    return (

        <div>
            <h1>Cadastro</h1>
            <form onSubmit={onSubmitSignUp}>
                <TextField
                    name={'username'}
                    value={form.username}
                    onChange={onChange}
                    label={"Nome"}
                    variant={'outlined'}
                    fullWidth
                    margin={'dense'}
                    required
                    type={'username'}
                />
                <TextField
                    name={'email'}
                    value={form.email}
                    onChange={onChange}
                    label={"E-mail"}
                    variant={'outlined'}
                    fullWidth
                    margin={'dense'}
                    required
                    type={'email'}
                />
                <TextField
                    name={'password'}
                    value={form.password}
                    onChange={onChange}
                    label={"Senha"}
                    variant={'outlined'}
                    fullWidth
                    margin={'dense'}
                    required
                    type={'password'}
                />
                <Button
                    type = "submit"
                    fullWidth
                    variant={'contained'}
                >Cadastrar</Button>
            </form>
        </div>


    )
}

export default SignUpForm