import axios from 'axios'
import { useEffect, useState } from 'react'
import Matches from '../Matches/Matches'
export default function Home(props) {
    const [chooseId, setChooseId] = useState( )
    const [getProfile, setGetProfile] = useState({})

    const addChooseId = () => {
        const newGetProfile = [...getProfile]
        newGetProfile.push(chooseId)
     
       setGetProfile(newGetProfile)
    }

    const getProfileToChoose = () => {
        axios
            .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guilherme-jesus-lovelace/person')
            .then((res) => {
                console.log("logica",res.data.profile)
                setGetProfile(res.data.profile)
            })
            .catch((err) => {
                console.log(err.response)
            })

    }
    const postChoose = () => {
        const body = {
            id:'',
            choice: true
        }
        const headers ={
            header:{
                'Content-Type':'application/json'
            }
        }
        axios
            .post('https:/us-central1-missao-newton.cloudfunctions.net/astroMatch/guilherme-jesus-lovelace/choose-person',{headers},body)
            .then((res) => {
                console.log('post',res.data)
                setChooseId(res.data)
            })
            .catch((err) => {
                console.log(err.response)
            })

    }
    useEffect(()=>{
        getProfileToChoose()
    },[postChoose()])
    
       return (
        <div>
            <h1>Astromatch</h1>
            <hr/>
            <img src = {getProfile.photo} />
            <strong><p>{getProfile.name}</p></strong>
            <strong><p>{getProfile.age}</p></strong>
            <strong><p>{getProfile.bio}</p></strong>
            <button onClick = {()=> postChoose(true)}>Like</button>
            <button onClick = {props.changePage('matches')}>Voltar a Página</button>
        </div>

  )
}