import {Link} from "react-router-dom"
import React from 'react'


const ItemMenu = () => {


    return (
        
        <div className="nav" >
        <Link  className="nav-tabs" to="/shoes"> Shoes </Link>
        <Link  className="nav-tabs" to="/dresses"> Dresses </Link>
        <Link  className="nav-tabs" to="/skirts"> Skirts </Link>
        <Link  className="nav-tabs" to="/pants"> Pants </Link>
        <Link  className="tab-register" to="/registration">Register </Link>
        
        </div>

      
    )

}

export default ItemMenu 