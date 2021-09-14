import { Button, Container } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { imagesUrl, imageBackCard } from '../constants/urls'
import {ContainerGeral, StyledBack, StyledCards, StyledFront, StyledTitle } from './StyledTarot'


const Tarot = () => {

    const [baralho, setBaralho] = useState([])
console.log(baralho)

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


const tarotCards = baralho && baralho.map((itens)=>{   
return (
    <ContainerGeral>
    <StyledCards  key={itens.cards}>  
      <StyledFront>
      <img src={`${imagesUrl}${itens.image}`}></img>
      <h4>{itens.name}</h4>
      </StyledFront>
    
      <StyledBack>
      <img src={`${imageBackCard}`}></img>
        </StyledBack>
    </StyledCards>
    </ContainerGeral>
) 

})

    return (
    <div>
         <StyledTitle>Escolha sua carta</StyledTitle>
        {tarotCards}
        </div>

    )



}
export default Tarot