import axios from "axios"


export const listaDeCartas = (() => {

    axios.get("/tarot.json")

        .then((res) => {
            console.log(res.data.json())
            

        })
        .catch((err) => {
            console.log(err.data)

        })

})