import React,{useState} from 'react'
import getGeneralItems from '../model/getItems'


const MainStoreView = () => {

    const [items, setItems] = useState(null)

    const RenderItems = ({items}) => {
        if (items == null) {
            getGeneralItems(setItems)
            return ( 
            <>
            <p> Loading store...</p>
            </>)
        } else {
            return (
           <>
           {items.map(item => {
               console.log(item.galleryURL[0])
               return(
                <>
               <p>{item.title[0]}</p>
               <img src = {item.galleryURL[0]} />
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

export default MainStoreView