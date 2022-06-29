import React from 'react';
import estilos from './Card.module.css'


export default function Card(props) {
  // acá va tu código
  return (
  <div className={estilos.contenedor}>
    <button onClick={props.onClose} className={estilos.button} >X</button>
    <h4>{props.name}</h4>
      <div className={estilos.infoCont}>
        <div>
        <p>Max</p>
        <p>{props.max}</p>
        </div>
        <div>
        <p>Min</p>
        <p>{props.min}</p>
        </div>
        <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="Img del tiempo"/>
      </div>      
  </div>)
};