import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

export const ListTripsPage = () => {
    const history = useHistory()

    const goToBack = () => {
        history.goBack()
    }
    const goToFormPage = () => {
        history.push('/trips/application')
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
            <div key={list.id}>
                <hr />
                <p>Nome: {list.name}</p>
                <p>Descrição da viagem: {list.description}</p>
                <p>Planeta: {list.planet}</p>
                <p>Duração: {list.durationInDays}dias</p>
                <p>Data: {list.date}</p>
            </div>
        )
    })

    return (
        <div>
            <button onClick={goToBack}>Voltar</button>
            <button onClick={goToFormPage}>Inscrever-se</button>
            <h1>Lista de Viagens</h1>
            {tripsComponents}
        </div>
    )
}