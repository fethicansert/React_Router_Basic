import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function Menu() {
  return (
    <main className='menu'>
      <h1>Menu</h1>
      <nav>
        <Link to='food'>Foods</Link>
        <Link to='drink'>Drinks</Link>
        <Link to='dessert'>Desserts</Link>
      </nav>
      <Outlet></Outlet>
    </main>
  )
}

export default Menu
