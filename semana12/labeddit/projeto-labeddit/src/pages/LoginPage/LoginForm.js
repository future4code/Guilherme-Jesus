import { Button, TextField } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { login } from '../../services/user'



const LoginForm = ({setRightButton}) => {
    const [form, onChange, clear] = useForm({ email: "", password: "" })
    const history = useHistory()


    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history, setRightButton)
    }



    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={onSubmitForm}>
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
                    type={'onSubmit'}
                    fullWidth
                    variant={'contained'}
                >Login</Button>
            </form>
        </div>


    )
}

export default LoginForm