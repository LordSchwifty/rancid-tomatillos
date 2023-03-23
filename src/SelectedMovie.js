import React from "react";
import "./SelectedMovie.css";


const SelectedMovie = ({movieInfo, selectPoster, id}) => {
    // console.log('titlee', individualInfo.individualInfo.title)
    return (
        <div>Hello
            <p>{movieInfo.title}</p>
            <img src={movieInfo.poster_path}></img>
            <img src={movieInfo.backdrop_path}></img>
            <p>{movieInfo.release_date}</p>
            <p>{movieInfo.overview}</p>
            <p>{movieInfo.average_rating}</p>
            <p>{movieInfo.genres}</p>
            <p>{movieInfo.budget}</p>
            <p>{movieInfo.revenew}</p>
            <p>{movieInfo.runtime}</p>
            <p>{movieInfo.tagline}</p>
            <button onClick = {() => selectPoster(id)}>GO BACK HOME</button>
        </div>
    )
}


export default SelectedMovie;