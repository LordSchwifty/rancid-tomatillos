import React from 'react';
import Poster from './Poster';
import './Movie.css';


const Movie = ({ movieData, selectPoster }) => {
    const moviePoster = movieData.map(movie => {
        return (
            <Poster 
            id={movie.id}
            key={movie.id}
            title={movie.title}
            img1={movie.poster_path}
            rating={movie.average_rating}
            releaseDate={movie.release_date}
            selectPoster={selectPoster}
            />
        )
    })

    return (
        <div className='movie-container'>
            {moviePoster}
        </div>
    )
}

export default Movie;