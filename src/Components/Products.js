import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Products() {
  return (
    <main>
      <input type='search' placeholder='Search Item'></input>
      <h1>Products</h1>
      <nav className='product-nav'> 
        <Link to='default'>Default Product</Link>
        <Link to='featured'>Featured</Link>
        <Link to='new'>New</Link>
      </nav>
      <Outlet />
    </main>
  )
}

export default Products
