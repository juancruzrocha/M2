import React from 'react';
import estilos from './Card.module.css'


export default function Card(props) {
  // acá va tu código
  return (
  <div className={estilos.card}>
    <button onClick={props.onClose} className={estilos.button} >X</button>
    <h4>{props.name}</h4>
    <p>Max</p>
    <p>{props.max}</p>
    <p>Min</p>
    <p>{props.min}</p>
    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="Img del tiempo"/>
          
  </div>)
};