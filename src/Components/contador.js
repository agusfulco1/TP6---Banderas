import React from "react";
import './contador.css'
function Count({count}) {
    return(
        <h2 className='count'>Puntaje: {count}</h2>
    );
}

export default Count;