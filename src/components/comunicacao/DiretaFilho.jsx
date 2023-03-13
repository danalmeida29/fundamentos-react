import React from 'react';


export default props =>{
    return (
        <div>
            <span>{props.nome} </span>
            <span>idade: {props.idade} </span>
            <span>{props.bool ? 'Verdadeiro' : 'Falso'} </span>
        </div>
    )
}