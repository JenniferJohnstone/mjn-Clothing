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

                <div className="products">
                <div className="productList">
                <img src = {item.galleryURL[0]} />
                <p><Link to ={`/store/${category.category}/${item.itemId[0]}`} >{item.title[0]}</Link></p>
                
               <b className="price">${item.sellingStatus[0].convertedCurrentPrice[0].__value__}</b>
               </div>
 
               </div>
               )
           })}
           </>
       )
        }  
    }

    return(
        <>
        <div className="products">
        <RenderItems items = {items} />
        </div>
        </>
    )

}

export default StoreView