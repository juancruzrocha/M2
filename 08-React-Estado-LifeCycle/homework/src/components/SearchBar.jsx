import React from 'react';
import estilos from './Search.module.css'

export default function SearchBar(props) {
  // acá va tu código
  return (<div>
    <input type="text" placeholder='City...'></input>
    <button onClick={ () => props.onSearch("Buscando...")}>Add</button>
    </div>)
};