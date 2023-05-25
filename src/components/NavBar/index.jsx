import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import './style.css'

const NavBar = () => {

  const styles = ({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' });
  
  
  return (
    <>
      <header>
        <nav>
          <NavLink to="/" style={styles}>Home</NavLink>
          {/* <NavLink to="/superheros" style={styles}>View Heros</NavLink> */}
          <NavLink to="/play" style={styles}>Play</NavLink>
        </nav>
      </header>
      <Outlet/>
    </>
  )
}

export default NavBar