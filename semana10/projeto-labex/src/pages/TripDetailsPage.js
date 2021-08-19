import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'


export const TripDetailsPage = () => {
    const history = useHistory()
    
    const backAdminPage = () => {
        history.push('/admin/trips/list')
    }

const [tripsId, setTripsId] = useState({})
const [candidates, setCandidates] = useState('')
const [approved, setApproved] = useState('')

    useEffect(()=>{
        const token = localStorage.getItem('token')
        axios
       .get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/guilherme-jesus-lovelace/trip/id',{
           headers:{
               auth: token
           }
       })
       .then((res)=>{
       console.log('deu certo',res.data)
       setTripsId(res.data.trip)
       })
       .catch((err)=>{
        console.log('deu erro',err.response)
       })
    
       },[])
    
 
    return (
        <div>
            <button onClick = {backAdminPage}>Voltar</button>
            <h1>Candidatos Pendentes</h1>
            <hr/>
            <h1>Candidatos Aprovados</h1>
        </div>
    )
}
