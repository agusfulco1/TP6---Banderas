import './App.css';
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import Modal from "./Modal/modal"
function App() {
  const [count, setCount] = useState(0)
  const [bandera, setBandera] = useState({})
  const [timer, setTimer] = useState(15);
  const [ref, setRef] = useState();
  const [listaJugadores, setLista] = useState([]);

  const puntaje = evento => {
    evento.preventDefault();
    if (evento.target.bandera.value.toLowerCase() === bandera.name.toLowerCase()) {
      setCount(count + 10 + timer)
    }
    else {
      setCount(count - 1)
    }
    clearTimeout(ref)
    evento.target.bandera.value = ""
  }

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
            <div className='container'>
              <h2 className='count'>Puntaje: {count}</h2>
            </div>  
          </div>
          <div className='col-6'>
            <img src={bandera.flag} alt="no hay bandera"></img>
            <form onSubmit={e => puntaje(e)}>
              <input className="input"type="text" name='bandera'></input>
              <button>Enviar</button>
          </form>
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
