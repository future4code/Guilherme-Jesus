import React from 'react'
import { useHistory } from 'react-router-dom'

export const TripDetailsPage = () => {
    const history = useHistory()
    
    const goBackAdminHome = () =>{
        history.goBack()
    }

    return (
        <div>
            <h1>Criar Viagem</h1>
            <button onClick={goBackAdminHome}>Voltar</button>
            <button>Criar</button>
        </div>
    )
}