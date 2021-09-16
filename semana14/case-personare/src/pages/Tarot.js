import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { imageBackCard, imagesUrl } from '../constants/urls'
import { ContainerAll, ContainerBack, ContainerGeral } from './StyledTarot'

const Tarot = () => {
    const [isFlipped, setIsFlipped] = useState(false)
    const [baralho, setBaralho] = useState([])
    console.log(baralho)

    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }


    const listaDeCartas = (() => {

        axios.get('tarot.json')

            .then((res) => {
                console.log(res.data)
                setBaralho(res.data.cards)

            })
            .catch((err) => {
                setBaralho(err.data)

            })

    })
    useEffect(() => {
        listaDeCartas()
    }, [])

    const tarotCards = baralho && baralho.map((itens) => {
        return (
            <ContainerGeral key={itens.cards}>
                <img src={`${imagesUrl}${itens.image}`}></img>
                <img src={`${imageBackCard}`}></img>
            </ContainerGeral>
        )

    })

    const backCards = baralho && baralho.map((backs) => {
        return (
            <ContainerBack>

            </ContainerBack>

        )

    })

    tarotCards.sort(() => Math.random() - 0.5)
    const random = Math.floor(Math.random() * tarotCards.length)
    const tarotRandom = tarotCards[random]
    
   

    return (
        <div>
            <button onClick={() => handleClick(false)}> Clique aqui!</button>
            <ContainerAll isFlipped={isFlipped}>
                {tarotCards}
            </ContainerAll>
        </div>
    )



}
export default Tarot