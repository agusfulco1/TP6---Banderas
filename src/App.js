import './App.css';
import { useState } from 'react';
import { React } from 'react';
import Count from './Components/contador';
import Bandera from './Components/Bandera';
import Form from './Components/Form';
import Timer from './Components/Timer';
import ModalFulco from './Components/ModalFulco';
import Jugador from './Components/Jugador'

function App() {
  const [count, setCount] = useState(0)
  const [bandera, setBandera] = useState({})
  const [timer, setTimer] = useState(15);
  const [hola, setHola] = useState(); //me tira error si le pongo el nombre ref
  const [jugador, setJugador] = useState()
  const [isOpen, setOpen] = useState(false)
  return (
    <body>
      <ModalFulco setOpen={setOpen} setJugador={setJugador} jugador={jugador}></ModalFulco>
      <div className="container-fluid">
        {isOpen ? (
          <div className='row d-flex justify-content-start'>
            <div className='col-3 borde'>
              <Jugador jugador={jugador}></Jugador>
              <Count count={count} ></Count>  
            </div>
            <div className='col-6'>
              <Bandera count={count} bandera={bandera} setBandera={setBandera} setTimer={setTimer}></Bandera>
              <Form count={count} setCount={setCount} timer={timer} hola={hola} bandera={bandera}></Form>
            </div>
            <div className='col-3 borde'>
              <Timer timer={timer} hola={hola} setCount={setCount} count={count} setHola={setHola} setTimer={setTimer}></Timer>
            </div>
          </div>
        ) : null}
      </div>

    </body>
  );
}

export default App;
