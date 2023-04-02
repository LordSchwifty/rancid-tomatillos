import React, { Component } from "react";
import "./Error.css"
import {Link} from 'react-router-dom'

const Error = () => {
    return (
      <>
        <div className="error">404 Not Found</div>
        <Link className="error" to="/rancid-tomatillos/">
          <button className="error">Go Home</button>
        </Link>
      </>

    )


}

export default Error;