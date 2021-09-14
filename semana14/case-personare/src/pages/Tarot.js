import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { imagesUrl, imageBackCard } from '../constants/urls'
import { StyledTitle } from './StyledTarot'


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
    <div key={itens.cards}>
      
      <h4>{itens.name}</h4>
      <img src={`${imagesUrl}${itens.image}`}></img>
      <img src={`${imageBackCard}`}></img>


    </div>
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