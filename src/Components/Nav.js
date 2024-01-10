import React from 'react'
import { NavLink } from 'react-router-dom'
function Nav() {

    const style = ({ isActive }) => {
        return {
            backgroundColor : isActive ? 'goldenrod' : 'rgb(54, 37, 167)'
        }
    };

  return (
    <div className='nav-container'>
      <nav>
        <NavLink style={ style } to='/'>Home</NavLink>
        <NavLink style={ style } to='/about'>About</NavLink>
        <NavLink style={ style } to='/products'>Products</NavLink>
        <NavLink style={ style } to={'/users'}>Users</NavLink>
      </nav>
    </div>
  )
}

export default Nav
