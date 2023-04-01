import React, { Component } from "react";
import "./SelectedMovie.css";
import { Link}  from 'react-router-dom'
import { fetchMovieDetails } from "../src/apiCalls"


let singleDetails;

  class SelectedMovie extends Component {
    
    constructor() {
      super();
      this.state = {
        singleMovie: "",
        error: "",
      };
    }
    
    componentDidMount() {
      fetchMovieDetails(this.props.id)
      .catch((error) => {
        console.error(error.message);
        this.setState({ error: error.message });
      })
      .then((data) => {
        singleDetails = data;
      })
      .then(() => {
        this.setState({ singleMovie: singleDetails.movie });
      })
    }
    render () {
        let findSingleMovie;
        if(this.state.singleMovie){
         findSingleMovie = 
         <div
         className="backdrop"
         style={{ backgroundImage: `url(${this.state.singleMovie.backdrop_path})` }}
         >
           <div className="information">
             <h3>{this.state.singleMovie.title}</h3>
             <p>{this.state.singleMovie.tagline}</p>
             <p>{this.state.singleMovie.overview}</p>
             <Link to="/rancid-tomatillos">
               <button >GO BACK HOME</button>
             </Link>
           </div>
           </div>
       } else if (this.state.error) {
         findSingleMovie = <p className="Error">{this.state.error}</p>
       } else {
         findSingleMovie = <p>Loading...</p>
       }
 
       return(
         <>
         {findSingleMovie}
         </>
       )
     }
    
  }
export default SelectedMovie;

