import React,{useState} from 'react'
import getItems from '../model/getItems'
import {Link} from 'react-router-dom'


const StoreView = (category) => {

    const [items, setItems] = useState(null)

    const RenderItems = ({items}) => {
        if (items == null) {
            getItems(setItems, category)
            return ( 
            <>
            <p> Loading store...</p>
            </>)
        } else {
            return (
           <>
           {items.map(item => {
               return(
                <>
                <p><Link to ={`/store/${category.category}/${item.itemId[0]}`} >{item.title[0]}</Link></p>
               <img src = {item.galleryURL[0]} />
               <b>${item.sellingStatus[0].convertedCurrentPrice[0].__value__}</b>

               </>
               )
           })}
           </>
       )
        }  
    }

    return(
        <>
        <div className="product">
        <h2>Here is a place where some items should be rendered</h2>
        <RenderItems items = {items} />
        </div>
        </>
    )

}

export default StoreView