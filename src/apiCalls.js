function fetchMovies() {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies`).then(
        (response) => {
        if(response.ok){
            return response.json();
        } else {
            throw new Error(`${response.status} ${response.statusText}`)
        }
    }
  )
}
function fetchMovieDetails(id) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`).then((response) => {
        if(response.ok){
            return response.json();
        } else {
            throw new Error(`${response.status} ${response.statusText}`)
        }
     }
    )
} 

export { fetchMovies, fetchMovieDetails }
