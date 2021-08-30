import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const AdminContainer = styled.div`
button{
  padding: 10px;
  margin: 10px;
  color: darkorange;
  font-size: 24px;
  margin: 1em;
  padding: 24px;
  border: 2px solid darkorange;
  border-radius: 10px;
}
`
const ButtonsContainer = styled.button`
padding: 10px;
margin: 20px;
 color: darkorange;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid darkorange;
  border-radius: 3px;
`
export const AdminHomePage = () => {
    const history = useHistory()


    const goToBack = () => {
        history.push('/')
    }

    const idTrip = () => {
        history.push('/admin/trips/:id')
    }

    const registerFormTrip = () => {
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
    }, [])


    const tripsComponents = listTrips && listTrips.map((list) => {
        return (
            <AdminContainer>
                <div>
                    <button onClick={idTrip} key={list.id}>{list.name} </button>
                </div>
            </AdminContainer>
        )
    })


    return (

        <div>
            <h1>Painel Administrativo</h1>
            <ButtonsContainer onClick={goToBack}>Voltar</ButtonsContainer>
            <ButtonsContainer onClick={registerFormTrip}>Criar Viagem</ButtonsContainer>
            <ButtonsContainer>Logout</ButtonsContainer>
            {tripsComponents}
        </div>
    )
}