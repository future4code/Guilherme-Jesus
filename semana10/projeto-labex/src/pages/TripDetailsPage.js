import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import useHook from '../hooks/useHook'
import styled from 'styled-components'

const CandidatesContainer = styled.div`
   box-shadow: -33px -24px 3px -14px rgba(241, 198, 101, 0.84);
    padding: 10px 20px;
    border-radius: 4px;
    margin: 9px 0px;
    width: 70vh;

p,b{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: coral;
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



export const TripDetailsPage = () => {
    const history = useHistory()

    const backAdminPage = () => {
        history.push('/admin/trips/list')
    }
    const [tripsId, setTripsId] = useState([{}])
    const { form, onChange } = useHook({ candidates: '', approved: '' })

    useEffect(() => {
        const token = localStorage.getItem('token')
        axios
            .get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/guilherme-jesus-lovelace/trip/id',{
                headers: {
                    auth: token
                }
            })
            .then((res) => {
                console.log('deu certo', res.data)
                setTripsId(res.data.trip.candidates)
            })
            .catch((err) => {
                console.log('deu erro', err.response)
            })

    }, [])


    const tripsComponents = tripsId && tripsId.map((list) => {
        return (
            <CandidatesContainer>
            <div key={list.id}>
                <p><b>Nome:</b> {list.name}</p>
                <p><b>Idade: </b> {list.age}</p>
                <p><b>Descrição: </b>{list.applicationText} </p>
                <p><b>Profissão: </b>{list.profession}</p>
                <p><b>País: </b>{list.country}</p>
                <hr/>
            </div>
            </CandidatesContainer>
        )
    })
    return (
        <div>
            <ButtonsContainer onClick={backAdminPage}>Voltar</ButtonsContainer>
            <h1>Candidatos Pendentes</h1>
              {tripsComponents}
            <h1>Candidatos Aprovados</h1>
            <p></p>
        </div>
    )
}
