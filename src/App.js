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
import ShoppingCart from './views/shoppingCart'
import logOut from './model/logout'
import './App.css'
import Footer from './views/Footer'
import logo from './img/logo.jpg'
import join from './img/join.jpg'
import dresses from './img/dresses.jpg'
import skirts from './img/skirts.jpg'
import pants from './img/pants.jpg'
import shoes from './img/shoes.jpg'



function App() {

  const [user, setUser] = useState({name: null, cart: null})
  const [response, setResponse] = useState(null)

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
        {user.name 
            ?<><em>{user.name} is logged in</em> <button onClick = {() => {
              logOut({user, response, setUser, setResponse})
            }
            }>logout</button> 
             <ShoppingCart contents = {response}/></>
            :<> 
            <LoginForm setUser = {setUser} setResponse = {setResponse}/> 
            <Redirect to = "/home" />
             </>
        } </Route> </div>
      </Switch>
      
        </ul>
      </div>

       
     
      <Switch>
       
        <Route path ='/registration'>
        <div> <img className="reg-box" src={join}></img></div>
          <RegistrationForm />
        </Route>
      </Switch>


     
      
     
      <Switch>

    
        <Route path ='/home'>
       
       
          <ItemMenu />
          <div> <img className="photo-logo" src={logo}></img></div> 
          <h3 className="home-title"> Some products for you!!</h3>
          <StoreView category = {'general'}/>
        </Route>
       
       
      </Switch>    

      <Switch>
        <Route path ='/shoes'>
          <ItemMenu />
          <div> <img className="photo-logo2" src={shoes}></img></div> 
          <StoreView category = {'shoes'}/>
        </Route>
      </Switch>
     
      <Switch>
        <Route path ='/dresses'>
          <ItemMenu />
          <div> <img className="photo-logo2" src={dresses}></img></div> 
          <StoreView category = {'dresses'}/>
        </Route>
      </Switch>


      <Switch>
        <Route path ='/skirts'>
          <ItemMenu />
          <div> <img className="photo-logo2" src={skirts}></img></div> 
          <StoreView category = {'skirts'}/>
        </Route>
      </Switch>

      <Switch>
        <Route path ='/pants'>
          <ItemMenu />
          <div> <img className="photo-logo2" src={pants}></img></div> 
          <StoreView category = {'pants'}/>
        </Route>
       
      </Switch>
     
      

        <Switch>
              <Route path= '/store/:category/:id'>
              <ItemView user = {user.name} setResponse = {setResponse} />
              </Route>
          </Switch>

          <Footer/>
          

         
    </Router>

  
   

    </> 
    
  )
}

export default App;