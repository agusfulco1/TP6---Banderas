import './App.css';
import axios from 'axios'
import { useEffect } from 'react';
import React, { useState } from 'react';
function App() {
  const [count, setCount] = useState(0)
  const [bandera, setBandera] = useState({})
  const puntaje = evento => {
    alert(evento.target.bandera.value)
    setCount(count + 10) 
  }
  useEffect(() => {
    /*axios.post('https://countriesnow.space/api/v0.1/countries/flag/unicode', {
      country: 'N'
    })*/
  })
  return (
    <div className="App">
      <form onSubmit={e => puntaje(e)}>
        <input type="text" name='bandera'></input>
        <button>Enviar</button>
      </form>
       <h1>Puntaje: {count}</h1>
    </div>
  );
}

export default App;
