import './App.css';
import axios from 'axios'
import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const [bandera, setBandera] = useState({})
  const [timer, setTimer] = useState(15);
  const [ref, setRef] = useState();

  

  useEffect(() => {
    axios.get('https://countriesnow.space/api/v0.1/countries/flag/images')
      .then(function (response) {
        const banderaRandom = response.data.data[Math.floor(Math.random() * response.data.data.length)]
        setBandera(banderaRandom);
        setTimer(15)
      })
  }, [count])

  useEffect(() => {
    setRef(setTimeout(() => {
      if (timer > 1) {
        setTimer(t => t - 1);
      }
      else {
        clearTimeout(ref)
        setCount(count - 1)
      }
    }, 1000));
  }, [timer])

  return (
    <body>
      <div className="container-fluid">
        <div className='row d-flex justify-content-start'>
          <div className='col-3 borde'>
            <Count count={count} ></Count>  
          </div>
          <div className='col-6'>
            <img src={bandera.flag} alt="no hay bandera"></img>
            <Form count={count} setCount={setCount} timer={timer} ref={ref} bandera={bandera}></Form>
          </div>
          <div className='col-3 borde'>
            <div className='container'>
              <h2 className='timer'>Te quedan: {timer} segundos</h2>
            </div>
          </div>
        </div>
        <Modal></Modal>
      </div>

    </body>
  );
}

export default App;
