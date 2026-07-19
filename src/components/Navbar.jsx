import React from "react"
import { Link } from "react-router-dom"

function Navbar (){
    return (
        <div className="navbar">
          <Link to={"/"} className="nav-logo">InkWell</Link>
          <div  className="nav-menu">
            <Link to={"/"} className="nav-item">Home</Link>
            <Link to={"/createpost"} className="nav-item">Create Post</Link>
            <Link to={"/bookmarks"} className="nav-item">Bookmarks</Link>
          </div>
        </div>
    )
}

export default Navbar
 