import React, {useContext }from "react";
import {Link} from "react-router-dom";
import { AuthContext } from "../context/authContext";
import logo from "../images/new_logo.png";


const Navbar = () => {

  const {currentUser,logout}=useContext(AuthContext);
  return (
    <div className='navbar'>
        <div className="container">
            <div className="logo">
              <Link to="/">
              <img src={logo} alt=""/></Link>
             
            </div>
            <div className="links">
              <Link className='link' to="/?cat=travel">
                <h6>TRAVEL</h6></Link>
                {/* <Link className='link' to="/?cat=health">
                <h6>HEALTH & FITNESS</h6></Link> */}
                <Link className='link' to="/?cat=sports">
                <h6>SPORTS</h6></Link>
                <Link className='link' to="/?cat=tech">
                <h6>TECH</h6></Link>
                {/* <Link className='link' to="/?cat=finance">
                <h6>FINANCE</h6></Link> */}
                <Link className='link' to="/?cat=cinema">
                <h6>CINEMA</h6></Link>
                {/* <Link className='link' to="/?cat=politics">
                <h6>POLITICS</h6></Link> */}
                <Link className='link' to="/?cat=photography">
                <h6>PHOTOGRAPHY</h6></Link>
                {/* <Link className='link' to="/?cat=food">
                <h6>FOOD</h6></Link> */}
                
                <span>{currentUser?.username}</span>
                {currentUser?( 
                <span onClick={logout}>Logout</span>):(
                <Link className="link" to="/login">
                  Login
                  </Link>
                  )}
                <span className="write">
                  <Link className="link" to="write">Write </Link>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Navbar