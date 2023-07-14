import {useEffect} from 'react';
import React from 'react';
import "./Timer.css"
import PropTypes from 'prop-types';

function Timer(props) {
    useEffect(() => {
        props.setHola(setTimeout(() => {
          if (props.timer > 1) {
            props.setTimer(t => t - 1);
          }
          else {
            clearTimeout(props.hola)
            props.setCount(props.count - 1)
          }
        }, 1000));
      }, [props.timer])
    return (
        <h2 className='timer'>Te quedan: {props.timer} segundos</h2>
    );
}
Timer.propTypes = {
  setTimer: PropTypes.func,
  timer: PropTypes.number,
  hola: PropTypes.func,
  setCount: PropTypes.func,
  setHola: PropTypes.func, 
  count: PropTypes.number,
}
export default Timer;