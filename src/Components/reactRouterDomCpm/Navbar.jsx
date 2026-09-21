import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav style={{border:'1px solid',padding:"10px"}}>
        <Link to="/Navbar">Home</Link>
        <Link to="about">About</Link>
        <Link to="counterclass">counter</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default Navbar
