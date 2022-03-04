import React, { Component } from 'react';
import data from '../helpers/data.json';

function ElementoLista(props) {
  return (
    <li>
      <a href={props.framework.web} target="_blank">
        {props.framework.name}
      </a>
    </li>
  );
}

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estaciones: ['Primavera', 'Verano', 'Otoño', 'Invierno'],
    };
  }
  render() {
    return (
      <div>
        <h2>Renderizado de Elementos</h2>
        <h3>Estaciones del año</h3>
        <ol>
          {this.state.estaciones.map((estacion) => (
            <li key={estacion}>{estacion}</li>
          ))}
        </ol>
        <h3>Frameworks Frontend JavaScript</h3>
        <ul>
          {data.frameworks.map((element, index) => (
            <ElementoLista key={element.id} framework={element} />
          ))}
        </ul>
      </div>
    );
  }
}
