import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/menu'>Menu</NavLink>
      <NavLink to='/about'>About</NavLink>
    </nav>
  )
}

export default Nav
