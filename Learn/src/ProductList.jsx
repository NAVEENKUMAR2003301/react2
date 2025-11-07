import React, { useEffect, useState } from 'react'
import { TrophySpin } from 'react-loading-indicators'
import UseFetch from './UseFetch'

const ProductList = () => {


  let { product, error, isloading } = UseFetch("http://localhost:4000/product")
   

  console.log(product);
  
    

  

    let style1 = {
        width : "200px",
        height : "300px",
        border : "2px solid black",
        display : "flex",
        flexDirection : "column",
        justifyContent : "center",
        alignItem : "center",
        overFlow : "hidden"

    }

    

if(isloading){
   
  return (
    <div style={{height:"90vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
       
      <TrophySpin color="#32cd32" size="medium" text="loading" textColor="" />
    </div>
  )

}else{

  return (
    <div>
      <h1>Product List</h1>
      
  
        <section style={{ height: "auto", display: "flex", flexWrap: "wrap", gap: "20px", padding: "50px" }}>
          {
            product.map((product, i) => {
  
              return (
                <div key={product.id}  >
  
                  <div style={style1}>
                    <center><img style={{ width: "100px", height: "100px" }} src={product.image} alt={product.category} /></center>
                    <h1 style={{ fontSize: "15px" }}>{product.title.slice(0, 80) + "..."}</h1>
                    <p style={{ fontSize: "12px" }}>{product.description.slice(0, 100)}</p>
                  </div>
                </div>
              )
  
  
            })
  
          }
  
        </section>
  
        {
          error && ( <p>{error}</p> ) 
        }
  
  
       
  
  
          
  
  
    </div>
  )
}

}

export default ProductList
