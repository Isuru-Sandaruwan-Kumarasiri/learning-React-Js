import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';
function NavBar() {
    return ( 
        <div >
            <div className="nav">
              {/* <a href="/" className="nav-bar">Home</a>
              <a href="userPage" className="nav-bar">UserPage</a>
              <a href="aboutUs" className="nav-bar">About US</a> */}


              {/* page is not refeshed */}
              <Link to="/" className="nav-bar">Home</Link>
              <Link to="userPage" className="nav-bar">UserPage</Link>
              <Link to="aboutUs" className="nav-bar">About US</Link>
            </div>
        </div>
     );
}

export default NavBar;