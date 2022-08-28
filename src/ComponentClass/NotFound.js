import React from 'react'
import {Link} from "react-router-dom"
import error from "../assests/error.png"

function NotFound() {
    return (
        <>
          <div id="backgroundBody">
            <div id="textWrite">
            <h1 className="text-light my-5">Error 404</h1>
            <h2 className="text-light">page not found!!!</h2>
            <p className="text-light">kindly find your way back <Link to="/SignUp">click here</Link></p>
            </div>
            <div id="errorContainer">
              <img src={error} alt="" id="errorImg" />
            </div>
          </div>  
        </>
    )
}

export default NotFound;