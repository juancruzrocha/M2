import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import { removeMovieFavorite } from "../../actions";


export class ConnectedList extends Component {
  render() {
    
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <p>Soy Cruz y estas son mis películas favoritas...</p>
        <ul>
          {
            /* Aqui deberias poner tu lista de peliculas! */
            this.props.movies?.map(
              movie => {
                return (
                  <li key={movie.id}>
                    <Link to={`/movie/${movie.id}`}  >{movie.title} </Link>
                    <p>
                      Year: {movie.year}
                    </p>
                    <button onClick={ () => this.props.removeMovieFavorite(movie.imdbID)}>Remove</button>
                  </li>
                )
              }
            )
          }
        </ul>
      </div>
    );
  }
}

//trae parte de nuestro state global como props a nuestro componente
function mapState(state) {
  return {
    movies: state.movieFavourites
  }
}
// este dispatch es la ACTION que queremos enviar al STORE
function mapDispatch(dispatch) {
  return {
    removeMovieFavorite: id => dispatch(removeMovieFavorite(id))
  }
}


export default connect(mapState,mapDispatch)(ConnectedList);
