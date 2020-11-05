import React from 'react'

const ShoppingCart = (response) => {
    if (response.contents !== null) {
    const items = response.contents.contents
        console.log('this is items', items)
        return(
            <>
            <h3>Shopping Cart</h3>
            {items.map(item => {
                console.log('item', item.item.title[0])
                return(
                    <>
                    <img src = {item.item.galleryURL[0]} />
                    <p>{item.item.title[0]}</p>
                    <p>Quantity: {item.quantity}</p>
                    </>
                )})}

                </>
                )
        
            } else {
        return (
            <h2>Cart is empty</h2>
        )
    }
    
}

export default ShoppingCart 