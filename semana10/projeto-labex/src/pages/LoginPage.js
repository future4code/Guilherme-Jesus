import React from 'react'
import { useHistory } from 'react-router-dom'

export const LoginPage = () => {
    const history = useHistory()

    const loginAdminHome =() =>{
        history.push('/admin/trips/list')
    }
    const goToBackHome =() =>{
        history.goBack()
    }

    return (
        <div>
            <h1>Login</h1>
            <button onClick = {goToBackHome}>Voltar</button>
            <button onClick = {loginAdminHome}>Entrar</button>
        </div>
    )
}