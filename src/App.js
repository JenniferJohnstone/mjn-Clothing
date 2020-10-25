import React, {useState} from 'react';
import RegistrationForm from './views/registrationForm'
import {
  BrowserRouter as Router, 
  Switch, Route, Link
} from "react-router-dom"
import LoginForm from './views/loginForm'
import List from './views/ProductList'


function App() {

  const [user, setUser] = useState(null)
  const[products]= useState([])



  return (
    <>

    <Router>

      <div>
        <Link to="/home">Home </Link>
        <Link to="/registration">Register </Link>
      </div>

      <Switch>
        <Route path ='/'>
        {user
            ? <><em>{user} is logged in</em> <button onClick = {() => setUser(null)}>logout</button> </>
            :<> 
            <h4>Please login or register to get started.</h4>
            <LoginForm setUser = {setUser} /> 
            </>
        }
        </Route>
      </Switch>

      <Switch>
        <Route path ='/registration'>
          <RegistrationForm />
        </Route>
      </Switch>

      <Switch>
        <Route path ='/home'>
          <h1>Welcome to the store</h1>
        </Route>
      </Switch>

      <div>
        <p> New products</p>
        <List product={products}/>
      </div>


    </Router>


    </>
  )
}

export default App;