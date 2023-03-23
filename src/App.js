import logo from './logo.svg';
import './App.css';
import movieData from './movieData.js'
import React, { Component } from 'react'
import Movie from "./Movie";


// let movieList = movieData.movies

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies
    }
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rancid Tomatillos</h1>
        <Movie movies={this.state.movies}/>
      </header>
    </div>
  );
}
}

export default App;
