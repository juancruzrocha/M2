import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getMovies, addMovieFavorite } from "../../actions";
import './Buscador.css';



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
    console.log(this.state.title)
    // la funcion getMovies le llega al componente, gracias a mapDispatchToProps, como props
    // y como es un componente de clase le llega como this.props
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2 className="titulo">Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"

              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit" className="form-container-button">BUSCAR</button>
        </form>
        <ul>
          {this.props.movie?.map(movie => {
            return (
              <li key={movie.imdbID}>
                <Link to={`/movie/${movie.imdbID}`}  >{movie.Title} </Link>
                <p> {movie.Year}</p>
                <button onClick={() => this.props.addMovieFavorite({
                  title: movie.Title,
                  id: movie.imdbID,
                  year: movie.Year
                })}>
                  Fav
                </button>
              </li>
            )
          })
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {//trae nuestro state global como props a nuestro componente
  return {  //recibe como parametro state y nos devuelvo un objecto con parte del state que queremos
    movie: state.moviesLoaded,
  };
}

// este dispatch es la ACTION que queremos enviar al STORE
function mapDispatchToProps(dispatch) { //la funcion nos permite hacer el dispatch de nuestras actions al store
  return { //recibe como parametro una funcion, la llamamos dispatch,
    //y nos devuelve un objecto, con las acciones que queremos enviar a nuestro store.
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}
//para terminar de  conectar nuestro componente con el store global 
//usamos un High Order Component llamado connect importado de 'react-redux'
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);
