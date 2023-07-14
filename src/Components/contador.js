import React from "react";
import './contador.css'
import PropTypes from 'prop-types';

function Count({count}) {
    return(
        <h2 className='count'>Puntaje: {count}</h2>
    );
}

Count.propTypes = {
    count: PropTypes.number
}
export default Count;