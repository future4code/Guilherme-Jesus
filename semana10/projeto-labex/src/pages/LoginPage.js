import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import useHook from '../hooks/useHook'
export const LoginPage = () => {
    const { form, onChange } = useHook({ email: '', password: '' })
    const history = useHistory()

    const goToBackHome = () => {
        history.push('/')
    }

    const submitLogin = (event) => {
        event.preventDefault()
        axios
            .post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/guilherme-jesus-lovelace/login', form)
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
    )
}