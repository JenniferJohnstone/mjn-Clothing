import React, {useState} from 'react';
import RegistrationForm from './views/registrationForm'
import {
  BrowserRouter as Router, 
  Switch, Route, Link
} from "react-router-dom"
import LoginForm from './views/loginForm'
import MainStoreView from './views/mainStoreView'


function App() {

  const [user, setUser] = useState(null)



  return (
    <>

    <Router>

      <div>
        <Link to="/">Home </Link>
        <Link to="registration">Register </Link>
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
        <Route path ='/'>
          <MainStoreView />
        </Route>
      </Switch>


    </Router>


    </>
  )
}

export default App;