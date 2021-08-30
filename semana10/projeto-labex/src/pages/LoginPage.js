import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import useHook from '../hooks/useHook'
import styled from 'styled-components'



const LoginContainer = styled.div`
    margin: 30px 0px;
    padding: 0px;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
h1{
    color: blueviolet;
}

input{
    padding: 10px;
    margin: 20px;
}

 button{
padding: 10px;
margin: 20px;
color: darkorange;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid darkorange;
  border-radius: 3px;

 }
`



export const LoginPage = () => {
    const { form, onChange } = useHook({ email: '', password: '' })
    const history = useHistory()

    const goToBackHome = () => {
        history.push('/')
    }

    const submitLogin = (event) => {
        event.preventDefault()
        axios
            .post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/guilherme-jesus-lovelace/login',form)
            .then((res) => {
                console.log(res.data.token)
                localStorage.setItem('token', res.data.token)
                history.push('/admin/trips/list')
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    return (
        <LoginContainer>
        <div>
            <h1>Login</h1>
            <form onSubmit={submitLogin}>
                <input
                    name='email'
                    type='email'
                    value={form.email}
                    onChange={onChange}
                    placeholder="Email"
                    required
                />
                <input
                    name='password'
                    type='password'
                    value={form.password}
                    onChange={onChange}
                    placeholder="Senha"
                    pattern={"^.{4,}"}
                    title={"Sua senha deve ter no mínimo 4 caractéres"}
                />
                <button onClick={goToBackHome}>Voltar</button>
                <button>Entrar</button>
            </form>
           </div>
           </LoginContainer>
    ) 
}