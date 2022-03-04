import React from 'react';
import logo from './logo.svg';
import Componente from './components/Componente';
import './App.css';

const estaciones = ['Primavera', 'Verano', 'Otoño', 'Invierno'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <ul>
            {estaciones.map((estacion, index) => (
              <li key={index}>{estacion}</li>
            ))}
          </ul>
        </div>
        <section>
          <Componente msg="Hola soy un componente funcional expresado" />
        </section>
      </header>
    </div>
  );
}

export default App;
