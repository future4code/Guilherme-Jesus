import React from 'react'
import { useHistory } from 'react-router-dom'

export const ListTripsPage = () => {
  const history = useHistory()
  
  const goToBack = () =>{
      history.goBack()
  }
  const goToFormPage = () =>{
      history.push('/trips/application')
  }

    return (
        <div>
            <h1>Lista de Viagens</h1>
            <button onClick = {goToBack}>Voltar</button>
            <button onClick = {goToFormPage}>Inscrever-se</button>
        </div>
    )
}