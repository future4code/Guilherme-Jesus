import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'


export const ApplicationFormPage = () => {
    const history = useHistory()

    const goBackTripList = () => {
        history.goBack()
    }


    const [nameInput, setNameInput] = useState('')
    const [ageInput, setAgeInput] = useState('')
    const [applicationTextInput, setApplicationTextInput] = useState('')
    const [professionInput, setProfessionInput] = useState('')
    const [countryInput, setCountryInput] = useState([])
    const [userTrip, setUserTrip] = useState([])

    const addUserTrip = () => {
        const newUserTrip = [...userTrip]
        newUserTrip.push({
            name: nameInput,
            age: ageInput,
            applicationText: applicationTextInput,
            profession: professionInput,
            country: countryInput
        })
        setUserTrip(newUserTrip)
        setNameInput('')
        setAgeInput('')
        setApplicationTextInput('')
        setProfessionInput('')
        setCountryInput([])
    }

    const applyTrip = () =>{
     axios 
     .post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/guilherme-jesus-lovelace/trips/:id/apply')
     .then((res)=>{
         console.log(res.data)
        setUserTrip(res.data)
     })
     .catch((err)=>{
         console.log(err.data)
     })
    
    }
    useEffect(() => {
        applyTrip()
    }, [])





    return (
        <div>
            <h2>Inscreva-se para uma viagem</h2>
            <div>
                <input
                    name='name'
                    value={nameInput}
                    onChange={(event) => setNameInput(event.target.value)}
                    placeholder="Nome"

                />
                <input
                    name='age'
                    value={ageInput}
                    onChange={(event) => setAgeInput(event.target.value)}
                    placeholder="Idade"
                />
                <input
                    name='applicationText'
                    value={applicationTextInput}
                    onChange={(event) => setApplicationTextInput(event.target.value)}
                    placeholder="Texto de Candidatura"

                />
                <input
                    name='País'
                    value={countryInput}
                    onChange={(event) => setCountryInput(event.target.value)}
                    placeholder="País"
                />
                <input
                    name='Profissão'
                    value={professionInput}
                    onChange={(event) => setProfessionInput(event.target.value)}
                    placeholder="Profissão"
                />
            </div>


            <button onClick={goBackTripList}>Voltar</button>
            <button onClick={addUserTrip}>Enviar</button> 
            
        </div>
    )
}

