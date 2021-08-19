import axios from 'axios'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'


export const TripDetailsPage = () => {
    const history = useHistory()
    
    const goBackAdminHome = () =>{
        history.goBack()
    }
   
    

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
       })
       .catch((err)=>{
        console.log('deu erro',err.response)
       })
    
       },[])
    
 
    return (
        <div>
            <h1>Criar Viagem</h1>
            <button onClick={goBackAdminHome}>Voltar</button>
            <button>Criar</button>
        </div>
    )
}
// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImgzS…xNTl9.zCv_MXeMbd5HF4-rTr1b5WIEzgo0-LZJwR01jJ9tOPo'