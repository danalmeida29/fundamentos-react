import React from "react";

export default (props) => {
    return(
        <div>
            <label htmlFor="passoInput"><strong> Passo: </strong> </label>
            <input id='passoInput' type="number"
            value={props.passo} onChange={e => props.setPassoForm(+e.target.value)} />
        </div>
    )
}