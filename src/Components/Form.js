import React from 'react';
import './Form.css'
import PropTypes from 'prop-types';

function Form(props) {
    const puntaje = evento => {
        evento.preventDefault();
        if (evento.target.bandera.value.toLowerCase() === props.bandera.name.toLowerCase()) {
            props.setCount(props.count + 10 + props.timer)
        }
        else {
            props.setCount(props.count - 1)
        }
        clearTimeout(props.hola)
        evento.target.bandera.value = ""
    }
    return(
        <form onSubmit={e => puntaje(e)}>
            <input className="input"type="text" name='bandera'></input>
            <button>Enviar</button>
        </form>
        
    );
}
Form.propTypes = {
    count: PropTypes.number,
    setCount: PropTypes.func,
    timer: PropTypes.number,
    hola: PropTypes.func,
    bandera: PropTypes.object
}
export default Form;