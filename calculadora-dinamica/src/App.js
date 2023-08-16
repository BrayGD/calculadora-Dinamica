import './App.css';
import brayLogo from'./imagenes/logo Bray.png';
import Boton from './componentes/Boton'
import Pantalla from './componentes/pantalla';
import BotonClear from './componentes/clearBoton';
import { useState } from 'react';
import { evaluate } from 'mathjs'


function App() {
  const [input, setInput] = useState('');  // Cambio realizado aquí

  const agregarInput = valor => {
    setInput(input + valor);
  }

  const agregarIgual = ()  =>{
    if (input) {
      setInput (evaluate(input))
    } else{
      alert("ingrese un dato valido")
    }
  }

  return (
    <div className='App'>
        <div className='bray-logo-contenedor'></div>
          <img
            src={brayLogo}    
            className='bray-logo'
            alt='mi logo personal' />
        <div className='contenedor-calculadora'>
        <Pantalla input={input} />
          <div className='fila'>
            <Boton manejarClick={agregarInput}>1</Boton>
            <Boton manejarClick={agregarInput}>2</Boton>
            <Boton manejarClick={agregarInput}>3</Boton>
            <Boton manejarClick={agregarInput}>+</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={agregarInput}>4</Boton>
            <Boton manejarClick={agregarInput}>5</Boton>
            <Boton manejarClick={agregarInput}>6</Boton>
            <Boton manejarClick={agregarInput}>-</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={agregarInput }>7</Boton>
            <Boton  manejarClick={agregarInput}>8</Boton>
            <Boton manejarClick={agregarInput}>9</Boton>
            <Boton manejarClick={agregarInput}>*</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={agregarIgual} >=</Boton>
            <Boton  manejarClick={agregarInput}>0</Boton>
            <Boton manejarClick={agregarInput}>.</Boton>
            <Boton manejarClick={agregarInput}>/</Boton>
          </div>
          <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            clear
          </BotonClear>
          </div>
        </div>
 
    </div>
          
  );
}

export default App;
