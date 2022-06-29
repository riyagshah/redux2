import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <Link style={{"margin": "8px"}} to={"/"}>Home</Link>
        <Link style={{"margin": "8px"}} to={"/login"}>Login</Link>
        <Link style={{"margin": "8px"}} to={"/todos"}>TodoList</Link>
    </div>
  )
}

export default Navbar