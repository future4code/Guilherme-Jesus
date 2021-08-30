import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'



const HomeContainer = styled.div`
    margin: 30px 0px;
    padding: 0px;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
h1{
    color: blueviolet;
}

 button{
     padding: 10px;
     margin: 20px;
     color: darkorange;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid darkorange;
  border-radius: 3px;

 }
`


export const HomePage = () => {
    const history = useHistory()

    const goToListTrips = () => {
        history.push('/trips/list')
    }
    const goToAdminHomePage = () => {
        history.push('/login')
    }



    return (
        <HomeContainer>
            <div>
                <h1>LabeX</h1>
                <button onClick={goToListTrips}>Ver Viagens</button>
                <button onClick={goToAdminHomePage}>Area de Admin</button>
            </div>
        </HomeContainer>

    )
}