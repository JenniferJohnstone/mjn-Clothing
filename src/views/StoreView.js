import React,{useState} from 'react'
import getItems from '../model/getItems'


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
               <p>{item.title[0]}</p>
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
        <h2>Here is a place where some items should be rendered</h2>
        <RenderItems items = {items} />
        </>
    )

}

export default StoreView