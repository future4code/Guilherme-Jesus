import React from 'react'
import { useHistory } from 'react-router-dom'

export const AdminHomePage = () => {
    const history = useHistory()
    
    
    const goToBack = () =>{
        history.goBack()
    }
    const registerForm = () =>{
        history.push('/admin/trips/create')
    }
    
    
    return (

        <div>
            <h1>Painel Administrativo</h1>
            <button onClick = {goToBack}>Voltar</button>
            <button onClick = {registerForm}>Criar Viagem</button>
            <button>Logout</button>
        </div>
    )
}