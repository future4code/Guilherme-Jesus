import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Matches = (props)=>{
    const[profileMatchs,setProfileMatchs]=useState( )
    
    const getProfileMatch = () => {
        axios
            .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guilherme-jesus-lovelace/matches')
            .then((res) => {
                setProfileMatchs(res.data.profile)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    
    useEffect(()=>{
        getProfileMatch()
    },[])
    


    return(
        <div>
      <button onClick = {()=>props.changePage('matches')}>Lista de Matches</button>
        </div>
    )
}

export default Matches