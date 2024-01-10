import React from 'react'
import { useNavigate } from 'react-router-dom'

const NewProduct = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>New Product</h1>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  )
}

export default NewProduct
