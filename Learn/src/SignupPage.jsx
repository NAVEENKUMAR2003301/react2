import React from 'react'
import useFetch from './UseFetch'
import { TrophySpin } from 'react-loading-indicators'


const SignupPage = () => {

  let { product, error, isLoading  } = useFetch("http://localhost:4000/cloths")
  console.log(product);

  if (isLoading) {
    
    
    return (
      <div style={{ height: "90vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <TrophySpin color="#32cd32" size="medium" text="loading" textColor="" />
      </div>
    )
  }else{

    return (
      <div>
         <h1>SignUp page</h1>
         <div>
            {
              product.map((c)=>{
                return (
  
                  <div key={c.id}>
  
                    <h1>Name :- {c.name}</h1>
                    <h1>price :- {c.price}</h1>
                  </div>
                )
              })
            }
         </div>
         {
          error && (<h1>{error}</h1>)
         }
      </div>
    )
  }
}

export default SignupPage
