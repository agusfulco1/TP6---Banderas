import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import './Bandera.css';
import PropTypes from 'prop-types';

function Bandera(props) {

    useEffect(() => {
        axios.get('https://countriesnow.space/api/v0.1/countries/flag/images')
          .then(function (response) {
            const banderaRandom = response.data.data[Math.floor(Math.random() * response.data.data.length)]
            props.setBandera(banderaRandom);
            props.setTimer(15)
          })
      }, [props.count])
    return (
        <img src={props.bandera.flag} alt="no hay bandera"></img>
    )
}

Bandera.propTypes = {
  count: PropTypes.number,
  bandera: PropTypes.object,
  setBandera: PropTypes.func,
  setTimer: PropTypes.func
}
export default Bandera;