import React from 'react'
import ToDo from './ToDo'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './Product'
import ProductDetials from './ProductDetials'
import Electronices from './Electronices'
import UseEffect from './UseEffect1'
import ProductList from './ProductList'


const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<ToDo/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/sign' element={<SignupPage/>}/>
          <Route path='/use' element={<UseEffect/>}/>
          <Route path='/productList' element={<ProductList/>}/>
          <Route path='/product' element={<Product/>}>
             <Route index element={<ProductDetials/>}/>
             <Route path="detials" element={<ProductDetials/>}/>
             <Route path="electronics" element={<Electronices/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
