import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export const LoginPage = () => {
    const history = useHistory()

    const goToBackHome = () => {
        history.push('/')
    }




    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onChangeEmail = (event) =>{
        setEmail(event.target.value)
    }
    
    const onChangePassword = (event) =>{
        setPassword(event.target.value)
    }

    const submitLogin = () =>{
        console.log(email,password)
        const body = {
            email: email,
            password: password
        }
        axios
        .post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/guilherme-jesus-lovelace/login',body)
        .then((res)=>{
         console.log(res.data.token)
         localStorage.setItem('token',res.data.token)
         history.push('/admin/trips/list')
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }

    return (
        <div>
            <h1>Login</h1>
            <input
                type = 'email'
                value={email}
                onChange={onChangeEmail}
                placeholder="Email"
            />
             <input
                value={password}
                onChange={onChangePassword}
                placeholder="Senha"
            />
            <button onClick={goToBackHome}>Voltar</button>
            <button onClick={submitLogin}>Entrar</button>
        </div>
    )
}