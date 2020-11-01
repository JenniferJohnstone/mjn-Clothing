import React, {useState} from 'react';
import RegistrationForm from './views/registrationForm'
import {
  BrowserRouter as Router, 
  Switch, Route, Link, Redirect
} from "react-router-dom"
import LoginForm from './views/loginForm'
import StoreView from './views/StoreView'
import ItemMenu from './views/ItemMenu'
import ItemView from './views/itemView'
import Search from './views/Search'



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

            <Redirect to = "/home" />

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
       
          <ItemMenu />
          <Search />

          <StoreView category = {'general'}/>
        </Route>
      </Switch>

      <Switch>
        <Route path ='/shoes'>
       
          <ItemMenu />

          <StoreView category = {'shoes'}/>
        </Route>
      </Switch>

      <Switch>
        <Route path ='/dresses'>
       
          <ItemMenu />

          <StoreView category = {'dresses'}/>
        </Route>
      </Switch>

      <Switch>
        <Route path ='/skirts'>
       
          <ItemMenu />

          <StoreView category = {'skirts'}/>
        </Route>
      </Switch>

      <Switch>
        <Route path ='/pants'>
       
          <ItemMenu />

          <StoreView category = {'pants'}/>
        </Route>
      </Switch>


        <Switch>
              <Route path= '/store/:category/:id'>
                <ItemView />
              </Route>
          </Switch>

    </Router>


    </>
  )
}

export default App;