import React from "react";

function Count({count}) {
    return(
        <div className='container'>
            <h2 className='count'>Puntaje: {count}</h2>
        </div>
    );
}

export default Count;