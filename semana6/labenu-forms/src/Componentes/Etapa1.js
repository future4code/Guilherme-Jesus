import React from 'react'


function Etapa1() {
    return (
        <div>
            <h1>Etapa 1 - Dados Gerais</h1>
            <div>
                <p>Qual o seu nome?</p>
                <input></input>
            </div>
            <div>
                <p>Qual a sua idade?</p>
                <input></input>
            </div>
            <div>
                <p>Qual o seu email?</p>
                <input></input>
            </div>
            <div>
                <p>Qual a sua escolaridade?</p>
                <input></input>
            </div>
            <select>
                <option value="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
                <option value="Ensino Médio Completo">Ensino Médio Completo</option>
                <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
                <option value="Ensino Superior Completo">Ensino Superior Completo</option>
            </select>
            <button>Próxima etapa</button>
        </div>






    )
}





export default Etapa1