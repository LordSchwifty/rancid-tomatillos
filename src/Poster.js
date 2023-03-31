import React from 'react';
import './Poster.css';
import movieData from "./movieData"
import {Link} from 'react-router-dom'

const Poster = ({ title, img1, rating, releaseDate, id }) => {
    return (
        <Link className='poster' to={"/" + id.toString()} key={id} style={{ textDecoration: 'none' }}>
            <h3>{title}</h3>
            <img src={img1}></img>
            <p>{rating.toFixed()}/10</p>
      <p>{new Date(releaseDate).toLocaleDateString()}</p>

        </Link>
    )
}

export default Poster;