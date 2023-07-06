import React from 'react';

function Form(props) {
    const puntaje = evento => {
        evento.preventDefault();
        if (evento.target.bandera.value.toLowerCase() === props.bandera.name.toLowerCase()) {
            props.setCount(props.count + 10 + props.timer)
        }
        else {
            props.setCount(props.count - 1)
        }
        clearTimeout(props.ref)
        evento.target.bandera.value = ""
    }
    return(
        <div className="col-6">
            
            <form onSubmit={e => puntaje(e)}>
                <input className="input"type="text" name='bandera'></input>
                <button>Enviar</button>
            </form>
        </div>
        
    );
}

export default Form;