import React from "react";

import Favorites from "./components/Favorites/Favorites.js";
import Buscador from "./components/Buscador/Buscador.js";
import NavBar from "./components/NavBar/NavBar.js";
import { Route } from "react-router-dom";
import Movie from "./components/Movie/Movie";

function App() {
  return (
      <React.Fragment>
          <NavBar />
          <Route exact path="/" component={Buscador} />
          <Route path="/favs" component={Favorites} />
          <Route path="/movie/:id" component={Movie} />
      </React.Fragment>
  );
}

export default App;
