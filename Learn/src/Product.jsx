import React from 'react'
import { Outlet,Link, useNavigate } from 'react-router-dom'

const Product = () => {

    
    let navigate =  useNavigate()
   
    let handleHome = ()=>{
        navigate("/")
    }
  return (
    <div>
    <button onClick={handleHome}>Home</button>
      <h1 style={{color:"red"}}>Product</h1>
      <Outlet/>
          <Link to="electronics"> Electronics </Link> <br />
          

    </div>
  )
}

export default Product
