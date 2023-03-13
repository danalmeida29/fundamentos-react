import React from "react"
export default function ComParametro(props){ //em react os Parametros o pessoal chama de props que signifca Proriedades.
    return (
        <div>
            <h2>{props.titulo}</h2>
            <h3>{props.subtitulo}</h3>
        </div>
    )
}

//para passar valor numerico devemos passar dentro de chaves o valor Ex:{9,3} assim ele ira entender que é tipo number