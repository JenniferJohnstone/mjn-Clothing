import {Link} from "react-router-dom"
import React from 'react'

const ItemMenu = () => {


    return (
        <div>
        <Link to="/shoes"> Shoes </Link>
        <Link to="/dresses"> Dresses </Link>
        <Link to="/skirts"> Skirts </Link>
        <Link to="/pants"> Pants </Link>
        </div>
    )

}

export default ItemMenu 