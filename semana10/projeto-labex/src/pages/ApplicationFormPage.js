import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import useHook from '../hooks/useHook'
import styled from 'styled-components'
import { BASE_URL } from '../components/url'

const PageFormContainer = styled.div`
 input{
 display: flex;
 flex-direction:column; 
 width: 500px;
 padding: 0.5em;
 margin: 1em;
 border-radius: 10px;

 }
 button{
  color: darkorange;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid darkorange;
  border-radius: 3px;

 }
`


export const ApplicationFormPage = () => {
    const history = useHistory()
    const goBackTripList = () => {
        history.goBack()
    }

    const [tripId, settripId] = useState([])
    const { form, onChange } = useHook({ planet: '', name: '', age: '', applicationText: '', profession: '', country: ''})

    const applyTrip = (event) => {
        console.log('formulario enviado')
        event.preventDefault()
        axios
            .post(`${BASE_URL}/trips/id/apply`,form)
            .then((res) => {
                settripId('Deu bão', res.data.trips)
                history.push('/admin/trips/id')
            })
            .catch((err) => {
                console.log('Xii deu ruim', err.data)
            })

    }

    const tripsComponents = tripId && tripId.map((list) => {
        return (
            <div key={list.id}></div>
        )
    })
    
    return (
        <PageFormContainer >
            <div>
                <h2>Inscreva-se para uma viagem</h2>
                <form onSubmit={applyTrip}>{tripsComponents}
                    <select>
                        <option
                            name="planet"
                            value={form.planet}
                            onChange={onChange}
                            placeholder="Escolha um Planeta">
                        </option>
                    </select>
                    <input
                        name='name'
                        type={'name'}
                        value={form.name}
                        onChange={onChange}
                        placeholder="Nome"
                        pattern={'^.{3,}'}
                        title={'O campo nome deve ter no mínimo 3 letras'}

                    />
                    <input
                        name='age'
                        type={'number'}
                        min={18}
                        value={form.age}
                        onChange={onChange}
                        placeholder="Idade"
                        required
                    />
                    <input
                        name='applicationText'
                        type='text'
                        value={form.applicationText}
                        onChange={onChange}
                        placeholder="Texto de Candidatura"
                        pattern={'^.{30,}'}
                        title={'O campo Texto de candidatura deve ter no mínimo 30 caracteres'}

                    />
                    <select name='country'>
                        <option
                            value={form.country}
                            onChange={onChange}
                            placeholder="País"
                            >
                        </option>
                    </select>
                    <input
                        name='profession'
                        type={'text'}
                        value={form.profession}
                        onChange={onChange}
                        placeholder="Profissão"
                        pattern={'^.{10,}'}
                        title={'O campo profissão deve ter no mínimo 10 caracteres'}
                    />
                <button type={'submit'}>Enviar</button>
                <button onClick={goBackTripList}>Voltar</button>
                </form>
                
            </div>
        </PageFormContainer >
    )
}

