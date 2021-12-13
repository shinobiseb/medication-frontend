import React from "react";
import Post from "./post";
import { Link } from "react-router-dom";

const Header = () => (
    <div className="headerContainer">
    <div className='header'>
        <Link className='headerButton' to="/">
        <h1>MediTracker</h1>
        </Link>
      </div>
    </div>  

)

export default Header