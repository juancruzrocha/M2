import React from 'react';
import './App.css';
import estilos from './components/Card.jsx';
import estilos from './components/SearchBar.jsx';
import data, { Cairns } from './data.js';
import estilos from './components/Cards.jsx';


function App() {
  return (
    <div className="App">
     {/*<div>
        <Card
          max={Cairns.main.temp_max}
          min={Cairns.main.temp_min}
          name={Cairns.name}
          img={Cairns.weather[0].icon}
          onClose={() => alert(Cairns.name)}
        />
      </div>*/}
      <hr />
      <div> 
        <Cards
          cities={data}
        />
      </div>
      <hr />
      <div>
        <SearchBar
          onSearch={(ciudad) => alert(ciudad)}
          
        />
      </div>
    </div>
  );
}

export default App;


