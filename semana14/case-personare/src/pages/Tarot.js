import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { imageBackCard, imagesUrl } from '../constants/urls'
import { ContainerAll, StyledBack, StyledCards, StyledFront, StyledFrontBack, StyledTitle } from './StyledTarot'


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
    <ContainerAll>
    <StyledCards key={itens.cards}>  
      <StyledFront>
      <img src={`${imagesUrl}${itens.image}`}></img>
      </StyledFront>
    
      <StyledBack>
      <img src={`${imageBackCard}`}></img>
      </StyledBack> 
    </StyledCards>

    </ContainerAll>
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