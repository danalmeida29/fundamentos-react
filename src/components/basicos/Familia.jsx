import React, { cloneElement } from "react";

export default (props) =>{

    return( 
        <div>
            {
            props.children.map( (child, i) => {
                return cloneElement(child, {...props, key: i});
            })
            }
        </div>
    );
};

// export default (props) =>{

//     return( 
//         <div>
//             <FamiliaMembro nome="Daniel" sobrenome={props.sobrenome}/>
//             <FamiliaMembro nome="Carolina" sobrenome="Mendes Almeida de Macedo" />
//             <FamiliaMembro nome="Camila" {...props} />
//         </div>
//     );
// };