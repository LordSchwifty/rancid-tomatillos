import React from "react";
import "./SelectedMovie.css";
import { Link}  from 'react-router-dom'


const SelectedMovie = (movieRender) => {
    console.log('title', movieRender)
    return (
    <div className="selected-movie-container">
        <h1>{movieRender.title}</h1>
        <p>{movieRender.average_rating}/10</p>
        <img src={movieRender.poster_path} className='app-img-no-hover'/>
        <Link to="/">
              <button >GO BACK HOME</button>
         </Link>
      </div>
    )
  }
        // <div className="selected-movie-container">
        //     <p>{movieInfo.title}</p>
        //     <img src={movieInfo.poster_path}></img>
        //     <img src={movieInfo.backdrop_path}></img>
        //     <p>{movieInfo.release_date}</p>
        //     <p>{movieInfo.overview}</p>
        //     <p>{movieInfo.average_rating}</p>
        //     <p>{movieInfo.genres}</p>
        //     <p>{movieInfo.budget}</p>
        //     <p>{movieInfo.revenew}</p>
        //     <p>{movieInfo.runtime}</p>
        //     <p>{movieInfo.tagline}</p>
        //     <button onClick = {() => homeButton()}>GO BACK HOME</button>
//         </div>
//     )
// }


export default SelectedMovie;

// import React, { Component } from "react";
// import "./SelectedMovie.css";
// import { fetchMovieDetails } from "../src/apiCalls";
// import { render } from "@testing-library/react";
// import { Link } from 'react-router-dom'

// let movieIndiv;

//   class SelectedMovie extends Component {
    
//     constructor() {
//       super();
//       this.state = {
//         individual: "",
//         error: "",
//       };
//     }
    
//     componentDidMount() {
//       fetchMovieDetails(this.props.id)
//       .catch((error) => {
//         console.error(error.message);
//         this.setState({ error: error.message });
//       })
//       .then((data) => {
//         movieIndiv = data;
//       })
//       .then(() => {
//         this.setState({ individual: movieIndiv.movie });
//       })
//     }

//     render () {
//        let whatToRender;
//        if(this.state.individual){
//         whatToRender = 
//           <div
//           className="backdrop"
//           style={{ backgroundImage: `url(${this.state.individual.backdrop_path})` }}
//           >
//           <div className="information">
//             <h3>{this.state.individual.title}</h3>
//             <p>{this.state.individual.tagline}</p>
//             <p>{this.state.individual.overview}</p>
//             <p>Release Date: {this.state.individual.release_date}</p>
//             <p>Average Rating: {this.state.individual.average_rating}/10</p>
//             <p>Genres: {this.state.individual.genres.join(", ")}</p>
//             <p>
//               Budget:{" "}
//                 {this.state.individual.budget.toLocaleString("en-US", {
//                   style: "currency",
//                   currency: "USD",
//                   }
//                 )
//               }
//             </p>
//             <p>
//               Revenue:{" "}
//                 {this.state.individual.revenue.toLocaleString("en-US", {
//                   style: "currency",
//                   currency: "USD",
//                   }
//                 )
//               }
//             </p>
//             <p>Runtime: {this.state.individual.runtime} minutes</p>
//             <Link to="/RacidTomatillos/">
//               <button >GO BACK HOME</button>
//             </Link>
//           </div>
//         </div>
//       } else if (this.state.error) {
//         whatToRender = <p className="Error">{this.state.error}</p>
//       } else {
//         whatToRender = <p>Loading...</p>
//       }

//       return(
//         <>
//         {whatToRender}
//         </>
//       )
//     }
// }

// export default SelectedMovie;
