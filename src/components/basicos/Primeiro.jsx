/**Sempre que você quiser utilizar tags HTML no component, temos que exporta o react como esta escrito a baixo
 * assim se utiliza o JSX
 */
import React from "react"

export default function Primeiro(){
    const msg = 'Seja bem vindo(a)!!'
    //para realizar identação coloque sempre entre () as tags
    return (
    <div>
        <h2> Primeiro Componente</h2>
        <p>{msg}</p>
    </div>
    )
}