import React from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Home() {
  const navigate  = useNavigate();
  return (
    <main>
    <h1>Home Page</h1>
    <button onClick={ () => navigate('order-summary', {replace: true})}>Place a Order</button>
    </main>
  )
}

export default Home
