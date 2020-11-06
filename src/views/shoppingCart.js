import React, {useState} from 'react'


const ShoppingCart = (response) => {
    if (response.contents !== null) {
        console.log('this is response at shopping cart', response)
        const items = response.contents
        console.log('this is items', items)
        return(
            <>
             <div className="shopCard-head">
            <h3>Shopping Cart</h3></div>
            <div className="shopCard">

            {items.map(item => {
        
                return(
                    <>
                    <img src = {item.picture} />
                    <p>{item.title}</p>
                    <p className="quant">Quantity: {item.quantity}</p>
                    
                    </>
                   
                )
                })}
                  <button className="checkout-button">Checkout</button>
                </div>
                

                </>
                )
        
            } else {
        return (
            <div className= "empty">
            <h3>Shopping Cart</h3>
             <h4 >Cart is empty</h4>
             </div>
        )
    }
    
}

export default ShoppingCart 