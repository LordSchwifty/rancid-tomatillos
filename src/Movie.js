import React from 'react';
import Poster from './Poster';
import './Movie.css';


const Movie = ({movies}) => {
    const moviePoster = movies.map(movie => {
        return (
            <Poster 
            id={movie.id}
            key={movie.id}
            title={movie.title}
            img1={movie.poster_path}
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