import React from 'react';
import './Poster.css';
import movieData from "./movieData"

const Poster = ({ title, img1 }) => {
    return (
        <div className='poster'>
            <h3>{title}</h3>
            <img src={img1}></img>
        </div>
    )
}

export default Poster;