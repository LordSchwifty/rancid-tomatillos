import React from 'react';
import './Poster.css';
import movieData from "./movieData"

const Poster = ({ title, img1, rating, releaseDate }) => {
    return (
        <div className='poster'>
            <h3>{title}</h3>
            <img src={img1}></img>
            <p>{rating.toFixed()}/10</p>
      <p>{new Date(releaseDate).toLocaleDateString()}</p>

        </div>
    )
}

export default Poster;