import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav>
    <img src={require("../images/logo.png")} alt="logo" />
    <div className='nav-headers'>
    <Link to="/">
      {<p className='nav-header'>All Books</p>}
    </Link>
    <Link to="/mybooks">
      {<p className='nav-header'>My Books</p>}
    </Link>
    </div>
    </nav>
    </>
  )
}
