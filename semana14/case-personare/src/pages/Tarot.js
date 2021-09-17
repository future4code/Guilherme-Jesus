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
                <h4>{`${itens.name}`}</h4>
                <img src={`${imagesUrl}${itens.image}`}></img>
            </ContainerGeral>
        )

    })

    const backCards = baralho && baralho.map((backs) => {
        return (
            <ContainerGeral key={backs.cards}>
                <img src={`${imageBackCard}`}></img>
            </ContainerGeral>
        )
    })

    

    return (
        <div>
            <button onClick={() => handleClick()}> Embaralhe Aqui!</button>
            <ContainerAll>
                {isFlipped ? backCards : tarotCards.sort(() => Math.random() - 0.5)}
            </ContainerAll>
        </div>
    )


}
export default Tarot
