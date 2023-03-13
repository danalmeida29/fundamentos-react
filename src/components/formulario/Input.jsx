import React, {useState} from 'react';
import "./Input.css";

export default (props) =>{

    const [valor, setValor] = useState("Inicial")

    function quandoMudar(e) {
        setValor(e.target.value)
    }

    return (
        <div className="Input">
            <h2>{valor}</h2>
           <div style={{
            display: 'flex',
            flexDirection:'column'
           }}>
           <input value={valor} onChange={quandoMudar} />{/**componente cotrolado */}
           <input value={valor} readOnly/>   {/**So serve para leitura por conta do readOnly */}
           <input value={undefined} /> {/**Componente não controlado */}
           </div>
        </div>
    )
}