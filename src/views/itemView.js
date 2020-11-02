import React, {useState} from 'react'
import getItem from '../model/getItem'
import {useParams} from 'react-router-dom'


const ItemView = () => {

    const [item, setItem] = useState(null)
    const category = useParams().category
    const id = useParams().id

    console.log('here it the id', id)


    const RenderItem = ({item}) => {
        if (item == null) {
            getItem(setItem, {category}, id)
            console.log('now calling get item')
            return ( 
            <>
            <p> Loading store...</p>
            </>) } else {
                console.log('heres the item', item)
                const product = item[0]
                return(
                    <>
                    <h1>{product.title[0]}</h1>
                    <img src = {product.galleryPlusPictureURL[0]} />
                    <p>Condition: {product.condition[0].conditionDisplayName[0]}</p>
                    <p>Product Location: {product.location[0]}</p>
                    <p>Product type: {product.primaryCategory[0].categoryName[0]}</p>
                    </>
                )
            }
        }

        return(
            <>
            <div className="row">
            <div className="eleven columns">
                
            <p>Here is the item view</p>
            <RenderItem item = {item} />
            </div>
            </div>
            </> )
            

}

export default ItemView