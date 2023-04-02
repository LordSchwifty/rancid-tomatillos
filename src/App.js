import logo from './logo.svg';
import './App.css';
import Error from '../src/Error'
import movieData from './movieData.js'
import React, { Component } from 'react'
import Movie from "./Movie";
import SelectedMovie from "./SelectedMovie";
import {fetchMovies, fetchMovieDetails} from "./apiCalls"
import Poster from "../src/Poster"
import {Switch, Route} from 'react-router-dom'
// const movieIndiv = {"movie": {id: 1, title: "Fake Movie Title", poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg", backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg", release_date: "2019-12-04", overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!", average_rating: 6, genres: ["Drama"], budget:63000000, revenue:100853753, runtime:139, tagline: "It's a movie!" }}
let movieList 
let movieDetails

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      movie: "",
      error: "",

    }
  }
componentDidMount() {
  fetchMovies()
  .catch((error) => {
    console.error(error.message)
    this.setState({error: error.message})
  })
  .then((data) => {
    movieList = data.movies;
  })
  .then(() => {
    this.setState({ movies: movieList})
  })
}



  render(){
  return (
    <div className="App">
        <h1>ℝ𝕒𝕟𝕔𝕚𝕕 𝕋𝕠𝕞𝕒𝕥𝕚𝕝𝕝𝕠𝕤</h1>
        <Switch>
        <Route exact path="/rancid-tomatillos" render={() => <Movie movieData={this.state.movies} error={this.state.error}/>}/>
        <Route exact path="/rancid-tomatillos/:id" render={({match}) => {
         return <SelectedMovie id={match.params.id} />
        }}
        />
        <Route path="/rancid-tomatillos/*">
        <Error />
        </Route>
        <Route path="*" render={() => <Error />} />
        </Switch>
    </div>
  );
}
}

export default App;
