import React from "react";
import { Link } from "react-router-dom";
const Navbar=()=>{
    return(
        <>
        <ul>
          <Link to='/home'><li>Home</li></Link>
          <Link to='/dashboard'><li>Dashboard</li></Link>
          <Link to='/about'><li>About</li></Link>
        </ul>
        </>
    )
}
export default Navbar;