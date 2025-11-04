import React from 'react'
import ToDo from './ToDo'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<ToDo/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/sign' element={<SignupPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
