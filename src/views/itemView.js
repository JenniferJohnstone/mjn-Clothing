import React, {useState} from 'react'
import getItem from '../model/getItem'
import {useParams} from 'react-router-dom'
import addToCart from '../model/addToCart'


const ItemView = ({user , response, setResponse}) => {

    const [item, setItem] = useState(null)
    const category = useParams().category
    const id = useParams().id

    console.log('here is the id', id)


    const RenderItem = ({item}) => {
        if (item == null) {
            getItem(setItem, {category}, id)
            return ( 
            <>
            <p> Loading store...</p>
            </>) } else {
                const product = item[0]
                return(
                    <>
                    <div className= "productDetails">
                    <h1>{product.title[0]}</h1>
                    <img className= "productImage" src = {product.galleryPlusPictureURL[0]} />
                    <p>Condition: {product.condition[0].conditionDisplayName[0]}</p>
                    <p>Product Location: {product.location[0]}</p>
                    <p>Product type: {product.primaryCategory[0].categoryName[0]}</p>
                    </div>
                    </>
                )
            }
        }

       if (user == null) {

        return(
            <>
            <div className="row">
            <div className="eleven columns">
                
            <p>Here is the item view</p>
            <RenderItem item = {item} />
            <p>Please login to start buying.</p>
            </div>
            </div>
            </> )
       } else {
           return (
            <>
            <RenderItem item = {item} />
            <button onClick={(event) => {
                event.preventDefault()
                addToCart(item[0], user, setResponse)
            } }>Add to Cart</button>
            

            </>
           )
       }
            

}

export default ItemView