import React from 'react'
import { useHistory } from 'react-router-dom'


export const ApplicationFormPage = () => {

const history = useHistory()

const goBackTripList = () =>{
    history.goBack()
}
    return (
        <div>
            <h2>Inscreva-se para uma viagem</h2>
            <button onClick = {goBackTripList}>Voltar</button>
            <button>Enviar</button>
        </div>
    )
}