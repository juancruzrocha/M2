const initialState = {
    movieFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
};

function rootReducer(state = initialState, action) {
    if (action.type === "ADD_MOVIE_FAVORITE") {
        return {
          ...state,
          movieFavourites: state.movieFavourites.concat(action.payload)
        }
    }
    if (action.type === "GET_MOVIES") {
        return {
          ...state,
          moviesLoaded: action.payload.Search
        };
    }
    if (action.type === "REMOVE_MOVIE_FAVORITE"){
        return {
            ...state,
            movieFavourites: state.movieFavourites.filter(
                (movie)=> movie.imdbID !== action.payload ) // capaz le tengo que poner el ID veremos
        } 
    }
    if (action.type === "GET_MOVIE_DETAIL") {
        return {
            ...state, 
            movieDetail: action.payload
        }
    }

    else return state;
  }
  
  export default rootReducer;