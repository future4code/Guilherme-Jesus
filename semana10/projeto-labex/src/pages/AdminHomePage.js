import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

export const AdminHomePage = () => {
    const history = useHistory()
    
    
    const goToBack = () =>{
        history.push('/')
    }
    
    const idTrip = ()=>{
        history.push('/admin/trips/:id')
    }

    const registerFormTrip = () =>{
        history.push('/admin/trips/create')
    }
    const [listTrips, setListTrips] = useState([])


    const getTripsList = () => {
        axios
            .get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/guilherme-jesus-lovelace/trips')
            .then((res) => {
                console.log(res.data.trips)
                setListTrips(res.data.trips)
                
            })
            .catch((err) => {
                console.log(err.data.trips)
            })
    }

    useEffect(() => {
        getTripsList()
    }, [] )


    const tripsComponents = listTrips && listTrips.map((list) => {
        return (
            <div>
                <button onClick={idTrip} key={list.id}>{list.name} </button>
                <hr />
            </div>
        )
    })

    
    return (

        <div>
            <h1>Painel Administrativo</h1>
            <button onClick = {goToBack}>Voltar</button>
            <button onClick = {registerFormTrip}>Criar Viagem</button>
            <button>Logout</button>
            {tripsComponents}
        </div>
    )
}