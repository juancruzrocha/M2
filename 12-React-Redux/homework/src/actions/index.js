// Estas son las ACTIONS que representan una intención de cambiar el estado de nuestra STORE

const apiKey = "1977a73f" //apiKey
//http://www.omdbapi.com/?apikey=1977a73f&t=titanic
// En addMovieFavorite el payload que pasaremos cuando hagamos un dispatch de esa action 
//sera el nombre de la Pelicula.
export function addMovieFavorite(payload) {
  return {
    type: "ADD_MOVIE_FAVORITE",
    payload
  }
};
//En removeMovieFavorite,nuestro payload sera la pelicula a eliminar.
export function removeMovieFavorite(payload) {
  return {
    type: "REMOVE_MOVIE_FAVORITE",
    payload  // payload va a ser el nombre de la pelicula
  }
};
//En getMovies, nuestro payload sera el objeto que recibamos de nuestra request.
//esta es una función Asincrónica por eso retorna una función
// que recibe el dispatch que se lo pasa el MiddleWare  
//a mi no me interesa como funciona. De ese dispatch se encarga Redux
export function getMovies(titulo) {
  return function (dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${titulo}`)
      .then(response => response.json())
      .then(datosDeLaApi => {
        dispatch({ type: "GET_MOVIES", payload: datosDeLaApi });
      });
  };
}

//En getMovieDetail, el payload sera el objeto con los detalles de la pelicula que seleccionamos.
export function getMovieDetail(id) {
  return function (dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
      .then(response => response.json())
      .then(datosDeLaApi => {
        dispatch({ type: "GET_MOVIE_DETAIL", payload: datosDeLaApi });
      });
  };
}



// Para ver como se ve la peticion con la i
//http://www.omdbapi.com/?apikey=1977a73f&i=tt0266543
// {"Title":"Finding Nemo","Year":"2003","Rated":"G","Released":"30 May 2003","Runtime":"100 min","Genre":"Animation, Adventure, Comedy","Director":"Andrew Stanton, Lee Unkrich","Writer":"Andrew Stanton, Bob Peterson, David Reynolds","Actors":"Albert Brooks, Ellen DeGeneres, Alexander Gould","Plot":"After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.","Language":"English","Country":"United States","Awards":"Won 1 Oscar. 48 wins & 63 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BZTAzNWZlNmUtZDEzYi00ZjA5LWIwYjEtZGM1NWE1MjE4YWRhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.2/10"},{"Source":"Rotten Tomatoes","Value":"99%"},{"Source":"Metacritic","Value":"90/100"}],"Metascore":"90","imdbRating":"8.2","imdbVotes":"1,022,690","imdbID":"tt0266543","Type":"movie","DVD":"04 Nov 2003","BoxOffice":"$380,843,261","Production":"N/A","Website":"N/A","Response":"True"}



// Para ver como se ve la peticion con la t

//     http://www.omdbapi.com/?apikey=1977a73f&t=titanic
/*

me devuelve un objeto con una sola propiedad search que es un array de objetos
{ search: [{},{},{}] }

{"Search":[{"Title":"Titanic","Year":"1997","imdbID":"tt0120338","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"},{"Title":"Titanic II","Year":"2010","imdbID":"tt1640571","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTMxMjQ1MjA5Ml5BMl5BanBnXkFtZTcwNjIzNjg1Mw@@._V1_SX300.jpg"},{"Title":"Titanic: The Legend Goes On...","Year":"2000","imdbID":"tt0330994","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTg5MjcxODAwMV5BMl5BanBnXkFtZTcwMTk4OTMwMg@@._V1_SX300.jpg"},{"Title":"Titanic","Year":"1953","imdbID":"tt0046435","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTU3NTUyMTc3Nl5BMl5BanBnXkFtZTgwOTA2MDE3MTE@._V1_SX300.jpg"},{"Title":"Raise the Titanic","Year":"1980","imdbID":"tt0081400","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNTQyZGI0NDgtYTM0ZC00NTdkLTk2OTItYTgwYmYwNjZlNDRlXkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_SX300.jpg"},{"Title":"Titanic","Year":"1996","imdbID":"tt0115392","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BMTBhMjUzMDItYTBlZS00OThkLWJmZDQtMjg1YTQ5ZDkxYmFjXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg"},{"Title":"La leggenda del Titanic","Year":"1999","imdbID":"tt1623780","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNDU5MTk1MV5BMl5BanBnXkFtZTgwMDk5NDUyMTE@._V1_SX300.jpg"},{"Title":"Titanic","Year":"2012","imdbID":"tt1869152","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BMTA4MjIyZWEtZjYwMS00ZmQ1LWJiMDEtMWNiNTI5NWE3OGJjXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg"},{"Title":"Titanic: Blood and Steel","Year":"2012","imdbID":"tt1695366","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BMjI2MzU2NzEzN15BMl5BanBnXkFtZTcwMzI5NTU3Nw@@._V1_SX300.jpg"},{"Title":"Titanic 666","Year":"2022","imdbID":"tt18394428","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BM2MyYjI2MWMtNDVkZi00Mjk0LTk3MTctYTM4ZWU2NjkxMjU3XkEyXkFqcGdeQXVyNjE0MTY2NjY@._V1_SX300.jpg"}],"totalResults":"233","Response":"True"}

*/