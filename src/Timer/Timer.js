import useEffect from 'react';
import React from 'react';

function Timer(props) {
    useEffect(() => {
        props.setRef(setTimeout(() => {
          if (props.timer > 1) {
            props.setTimer(t => t - 1);
          }
          else {
            clearTimeout(props.ref)
            props.setCount(props.count - 1)
          }
        }, 1000));
      }, [props.timer])
    return (
        <h2 className='timer'>Te quedan: {props.timer} segundos</h2>
    );
}

export default Timer;