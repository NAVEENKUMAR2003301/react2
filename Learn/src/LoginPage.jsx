import React from 'react'
import { useParams } from 'react-router-dom'

const LoginPage = () => {

   let {userName} =  useParams()

 
   

  return (
    <div>
      <h1>Login Page - {userName}</h1>
    </div>
  )
}

export default LoginPage
