import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const ListPageContainer = styled.div`
    box-shadow: -33px -24px 3px -14px rgba(241, 198, 101, 0.84);
    padding: 10px 20px;
    border-radius: 4px;
    margin: 9px 0px;
    width: 70vh;

p,b{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
b{
    color: coral;
}

`
const ButtonContainer = styled.button`
  color: darkorange;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid darkorange;
  border-radius: 3px;


`




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
            <ListPageContainer> 
            <div key={list.id}>
                <p><b>Nome:</b> {list.name}</p>
                <p><b>Descrição da viagem:</b> {list.description}</p>
                <p><b>Planeta: </b>{list.planet}</p>
                <p><b>Duração: </b>{list.durationInDays}dias</p>
                <p><b>Data:</b> {list.date}</p>
            </div>
            </ListPageContainer>
        )
    })

    return (
       
    <div> 
        <ButtonContainer onClick={goToBack}>Voltar</ButtonContainer>
        <ButtonContainer onClick={goToFormPage}>Inscrever-se</ButtonContainer>
            <h1>Lista de Viagens</h1>
            {tripsComponents}
        </div>
        
    ) 
}