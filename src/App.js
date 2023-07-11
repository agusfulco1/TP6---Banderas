import './App.css';
import { useState, useEffect } from 'react';
import { React } from 'react';
import Count from './Contador/Contador';
import Bandera from './Bandera/Bandera';
import Form from './Form/Form';
import Timer from './Timer/Timer';
import ModalFulco from './ModalFulco/ModalFulco';



function App() {
  const [count, setCount] = useState(0)
  const [bandera, setBandera] = useState({})
  const [timer, setTimer] = useState(15);
  const [ref, setRef] = useState();

  return (
    <body>
      <div className="container-fluid">
        <div className='row d-flex justify-content-start'>
          <div className='col-3 borde'>
            <Count count={count} ></Count>  
          </div>
          <div className='col-6'>
            <Bandera count={count} bandera={bandera} setBandera={setBandera} setTimer={setTimer}></Bandera>
            <Form count={count} setCount={setCount} timer={timer} ref={ref} bandera={bandera}></Form>
          </div>
          <div className='col-3 borde'>
            <div className='container'>
              <Timer timer={timer} ref={ref} setCount={setCount} count={count} setRef={setRef} setTimer={setTimer}></Timer>
            </div>
          </div>
        </div>
        <ModalFulco></ModalFulco>
      </div>

    </body>
  );
}

export default App;
