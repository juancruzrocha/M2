import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions';

import './Movie.css';

class Movie extends React.Component {

    componentDidMount() {
        // manera convencional
        const movieId = this.props.match.params.id;
        this.props.getMovieDetail(movieId)
    }

    render() {
        console.log("estas props están en el componente movie y vienen del state", this.props)
        return (
            <div className="container">
                <h1 className='details'>Detalle de la pelicula:</h1>

                <div className="movie-card">
                    <h5 className='title'><span>Título: {this.props.movieDetail.Title}</span></h5>
                    <div className='description'>
                    <h5>Actores: {this.props.movieDetail.Actors}</h5>
                    <h5>Género: {this.props.movieDetail.Genre}</h5>
                    <h5>Director: {this.props.movieDetail.Direc3or}</h5>
                    <h5>Año: {this.props.movieDetail.Year}</h5>
                    <h5>Trama: {this.props.movieDetail.Plot}</h5>
                    </div>
                </div>
                <img className="img" src={this.props.movieDetail.Poster}></img>

            </div>
        );
    }
}

//trae parte de nuestro state global como props a nuestro componente
function mapState(state) {
    return {
        movieDetail: state.movieDetail
    }
}
// este dispatch es la ACTION que queremos enviar al STORE
function mapDispatch(dispatch) {
    return {
        getMovieDetail: movieId => dispatch(getMovieDetail(movieId))
    }
}

export default connect(mapState, mapDispatch)(Movie);