import React from 'react'
import { useHistory } from 'react-router-dom'


export const HomePage = () => {
    const history = useHistory()
    
    const goToListTrips = () =>{
        history.push('/trips/list')
    }
    const goToAdminHomePage = () =>{
        history.push('/login')
    }
  


    return (
        <div>
            <h1>Labex</h1>
            <button onClick = {goToListTrips}>Ver Viagens</button>
            <button onClick = {goToAdminHomePage}>Area de Admin</button>
        </div>
      
    )
}