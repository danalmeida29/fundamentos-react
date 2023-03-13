import React from "react";

export default function Fragmento(){
    /**Sempre que for utilizar tags elas como do fragmento e do cuidado uma embaixo da outra,
     * elas devem ser envolvidas por outra tag como <></>, <div></div> ou <React.Fragment></React.Fragment>
     */
    return(
        <React.Fragment>
            <h1>Fragmento</h1>
            <p><strong>Cuidado com este erro!!</strong></p>
        </React.Fragment>
    )
    // <>
    // É o mesmo tipo de tag que o "<React.Fragment></React.Fragment>",
    // unica diferencia é que se vc for passar um atributo "<key='1'></key>" desse jeito estara errado,
    // porque esta na forma reduzida, e na forma reduzida não é possivel passar atributos desse tipo.
    // </>
}

