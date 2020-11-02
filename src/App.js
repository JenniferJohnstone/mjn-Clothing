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
import './App.css'



function App() {

  const [user, setUser] = useState(null)
  const[products]= useState([])

  return (
    <>

    <Router>
       <div className="row">
       <ul className="link">
         <div className="five columns">
        <Link className="nav-top" to="/home">Home </Link> 
          <h3> <b>MJN Clothing</b></h3>  </div>

          <div className="seven columns">
         <Search className="home-search" />
         </div>


         <Switch>
        <div className="login">
        <Route path ='/'>
        {user
            ?<><em>{user} is logged in</em> <button onClick = {() => setUser(null)}>logout</button> </>
            :<> 
            <LoginForm setUser = {setUser} /> 
            <Redirect to = "/home" />
             </>
        } </Route> </div>
      </Switch>
      
        </ul>
      </div>

  
      
      

      <Switch>
        <Route path ='/registration'>
          <RegistrationForm />
        </Route>
      </Switch>

    
      <Switch>
        <Route path ='/home'>
          <ItemMenu />
          <StoreView category = {'general'}/>
        </Route>
      </Switch>      <Switch>
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