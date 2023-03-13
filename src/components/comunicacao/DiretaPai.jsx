import React from 'react';
import DiretaFilho from './DiretaFilho';

export default props =>{
    return (
        <div>
            <DiretaFilho nome="Julio" idade={20} bool={true} />
            <DiretaFilho nome="Michael" idade={13} bool={false} />
        </div>
    )
}