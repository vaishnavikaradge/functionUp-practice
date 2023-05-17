import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"

const Navbar = () => {
    
  return (
    <div className='container'>
        <h2>LOGO</h2>
        <div>
            <ul >
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Register">Register</Link>
                </li>
                <li>
                    <Link to="/AboutUs">AboutUs</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>

        </div>
    </div>
  )
}

export default Navbar;