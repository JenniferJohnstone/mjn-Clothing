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
                <div class='product listing'>
                <p><Link to ={`/store/${category.category}/${item.itemId[0]}`} >{item.title[0]}</Link></p>
               <img src = {item.galleryURL[0]} />
               <b>${item.sellingStatus[0].convertedCurrentPrice[0].__value__}</b>

               </div>
               )
           })}
           </>
       )
        }  
    }

    return(
        <>
        <div className="product">
        <RenderItems items = {items} />
        </div>
        </>
    )

}

export default StoreView