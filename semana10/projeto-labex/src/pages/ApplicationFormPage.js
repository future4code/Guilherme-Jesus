import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import useHook from '../hooks/useHook'

export const ApplicationFormPage = () => {
    const history = useHistory()
    const goBackTripList = () => {
        history.goBack()
    }
    const { form, onChange } = useHook({ planet:'', name: '', age: '', applicationText: '', profession: '', country: '' })


    const applyTrip = (event) => {
        console.log('formulario enviado')
        event.preventDefault()
        axios
            .post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/guilherme-jesus-lovelace/trips/id/apply')
            .then((res) => {
                form('Deu bão', res.data.trips)
            })
            .catch((err) => {
                console.log('Xii deu ruim', err.data)
            })

    }
    // useEffect(() => {
    //     applyTrip()
    // }, [])



    // Mercúrio
    // Vênus
    // Terra
    // Marte
    // Júpiter
    // Saturno
    // Urano
    // Netuno

    return (
        <div>
            <h2>Inscreva-se para uma viagem</h2>
            <form onSubmit={applyTrip}>
            <select>
                    <option
                        name='planet'
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
                <select>
                    <option
                        name='country'
                        value={form.country}
                        onChange={onChange}
                        placeholder="País">
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
                <button>Enviar</button>
            </form>
            <button onClick={goBackTripList}>Voltar</button>
        </div>
    )
}

