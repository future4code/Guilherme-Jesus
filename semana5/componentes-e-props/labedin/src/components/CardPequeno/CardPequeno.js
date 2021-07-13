import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
            <div>
                <h5>{props.email }</h5>
                <h5>{props.endereço}</h5>
            </div>
    )
}

export default CardPequeno;
