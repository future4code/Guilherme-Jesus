import React from 'react';
import styled from 'styled-components';

const MinhasInformacoes = styled.div`
    
    display: flex;
    align-items: center;
    border: 1px solid black;
    margin: 10px;
    padding: 10px;
    height: 50px;
    
    div > h5{
        display: flex;
       text-align: center;
       justify-content: space-around;
       
    }

  img {
    display: flex;
    width: 30px;
    margin-right: 550px;
    border-radius: 50%;
    }

`;

function CardPequeno(props) {
    return (
        <MinhasInformacoes>
            <img src={props.imagem} />
            <div>
                <div>
                <h5>{props.texto}</h5>
                <h5>{props.email}</h5>
                <h5>{props.endereço}</h5>
                </div>
            </div>
            </MinhasInformacoes>
    )
}

export default CardPequeno;
