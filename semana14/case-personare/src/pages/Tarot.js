import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { StyledTitle } from './StyledTarot'


export const Tarot = () => {

    const [data, setData] = useState({imagesUrl: '', imageBackCard:'',name:'',image:''})

    const listaDeCartas = (() => {

        axios.get("/tarot.json")

            .then((res) => {
                console.log(res.data)
                setData(res.data.json())

            })
            .catch((err) => {
                setData(err.data)

            })

    })
    useEffect(() => {
        listaDeCartas()
    }, [])




    return (
        <StyledTitle>Escolha sua carta</StyledTitle>
    )



}
export default Tarot