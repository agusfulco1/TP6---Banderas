import './App.css';
import axios from 'axios'
import React, { useState, useEffect } from 'react';
function App() {
  const [count, setCount] = useState(0)
  const [bandera, setBandera] = useState({})

  const puntaje = evento => {
    evento.preventDefault();  
    if (evento.target.bandera.value === bandera.name) {
      setCount(count + 10) 
    }
    else {
      setCount(count - 1)
    }

  }
  useEffect(() => {
    axios.get('https://countriesnow.space/api/v0.1/countries/flag/images')
      .then(function (response) {
        const banderaRandom = response.data.data[Math.floor(Math.random()*response.data.data.length)]
        setBandera( 
          banderaRandom
        )
        console.log(bandera)
      })
  }, [count])
  return (
    <body>
      <div className="container">
        <div className='center'>
          <h1>Puntaje: {count}</h1>
          <img src={bandera.flag} alt="no hay bandera"></img>
          <form onSubmit={e => puntaje(e)}>
            <input type="text" name='bandera'></input>
            <button>Enviar</button>
          </form>
        </div>
      </div>
    </body>
  );
}

export default App;
