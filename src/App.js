import logo from './logo.svg';
import './App.css';
import movieData from './movieData.js'
import React, { Component } from 'react'
import Movie from "./Movie";
import SelectedMovie from "./SelectedMovie";
import {fetchMovies, fetchMovieDetails} from "./apiCalls"
// const movieIndiv = {"movie": {id: 1, title: "Fake Movie Title", poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg", backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg", release_date: "2019-12-04", overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!", average_rating: 6, genres: ["Drama"], budget:63000000, revenue:100853753, runtime:139, tagline: "It's a movie!" }}
let movieList 
let movieDetails

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
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

//First step is to be able to click on a movie
//render the information of the clicked movie
//unrender all other movies

  selectPoster = (id) => {
    fetchMovieDetails(id)
    .catch((error) => {
      console.error(error.message)
      this.setState({error: error.message})
    })
    .then((data) => {
      movieDetails = data;
    })
    .then(() => {
      this.setState({ movie: movieDetails.movie})
    })
  
    // console.log('this is id', id)
    // {this.state.movie ?  this.setState({movie: ""}):  this.setState({movie: movieIndiv.movie})}
  }
  homeButton = () => {
    this.setState({ movie: ""});
  }

  render(){
  return (
    <div className="App">
        <h1>Rancid Tomatillos</h1>
        <div>{this.state.error}</div>
        {/* <Movie movieData={this.state.movies}/> */}
        {/* {this.state.movie && <h2>{this.state.movie}</h2>} */}
        {/* <SelectedMovie movieInfo={this.state.movie} selectPoster={this.selectPoster}/> */}
        {this.state.movie ? <SelectedMovie movieInfo={this.state.movie} homeButton={this.homeButton}/> :  <Movie movieData={this.state.movies} selectPoster={this.selectPoster}/>}
    </div>
  );
}
}

export default App;
