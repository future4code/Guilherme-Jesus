import axios from 'axios'
import { useEffect, useState } from 'react'


export default function TelaInicial() {
    const [chooseId, setChooseId] = useState()
    const [getProfile, setGetProfile] = useState({})


    const getProfileToChoose = () => {
        axios
            .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guilherme-jesus/person')
            .then((res) => {
                console.log("logica",res.data.profile)
                setGetProfile(res.data.profile)
            })
            .catch((err) => {
                console.log(err.response)
            })

    }
    const postChoose = () => {
        axios
            .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guilherme-jesus/${chooseId}`,{headers:'Content-Type:application/json'})
            .then((res) => {
                setChooseId(res.data.headers)
            })
            .catch((err) => {
                console.log(err.data)
            })

    }
    useEffect(()=>{
        getProfileToChoose()
    },[postChoose()])
    
       return (
        <div>
            <h1>Astromatch</h1>
            <strong><p>{getProfile.name}</p></strong>
            <strong><p>{getProfile.age}</p></strong>
            <strong><p>{getProfile.bio}</p></strong>
        </div>








    )

}

// Ao entrar na nossa aplicação, o usuário deve ser capaz de ver uma opção de perfil para escolher. Devem ser mostrados a foto, o nome e a descrição do dos perfis. Dois botões devem estar na tela: um que permita "dar *match*" (uma escolha "positiva") e o outro que permita descartar a sugestão (uma escolha "negativa"). Por fim, deve existir um botão que leve para a tela de matches.

// Nessa tela, você vai usar os endpoints: *Get profile to choose* (pegar perfil para escolher) e  *Choose Person* (escolher pessoa)