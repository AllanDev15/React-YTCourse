import React from 'react';
import logo from './logo.svg';
import Componente from './components/Componente';
import Propiedades from './components/propiedades';
import Estado from './components/estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
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
          <hr />
          <Propiedades
            cadena="String"
            numero={19}
            bool={true}
            arreglo={[1, 2, 3]}
            objeto={{ nombre: 'Allan', correo: 'Allan.FL.15@live.com' }}
            function={(num) => num * num}
            elementoReact={<li>Esto es un elemento React</li>}
            componenteReact={<Componente msg="Soy un componente pasado como prop" />}
          />
          <hr />
          <Estado />
          <hr />
          <RenderizadoCondicional />
          <hr />
          <RenderizadoElementos />
        </section>
      </header>
    </div>
  );
}

export default App;
