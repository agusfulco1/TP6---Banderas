import PropTypes from 'prop-types';

function Jugador(props) {


    return (
        <h2>Jugador: {props.jugador.nombre} </h2>
    );
}

Jugador.PropTypes = {
    Jugador: PropTypes.object
}
export default Jugador;