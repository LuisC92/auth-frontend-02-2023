import React from 'react'
import {Link} from "react-router-dom"

const NavBar = () => {
  return (
    <ul>
        <Link to="/">
            <li>
                Home
            </li>
        </Link>
        <Link to="/login">
        <li>
            Login
        </li>
        </Link>
        <Link to="/sign-up">
        <li>
            Sign Up
        </li>
        </Link>

    </ul>
  )
}

export default NavBar