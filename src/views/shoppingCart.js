import React, {useState} from 'react'


const ShoppingCart = (response) => {
    if (response.contents !== null) {
        console.log('this is response at shopping cart', response)
        const items = response.contents
        console.log('this is items', items)
        return(
            <>
            <div className="shopCard-head" onClick={() => {document.getElementById("shopCard").style.display = "block";}}>
            <h3>{items.length} items in cart</h3>
            </div>
            <div className="shopCard" id="shopCard">
            <button onClick={()=> {document.getElementById("shopCard").style.display = "none";}} className="close">Close</button>

            {items.map(item => {
        
                return(
                    <div className="items">
                    <img src = {item.picture}/>
                    <p>{item.title}</p>
                    <p className="quant">Quantity: {item.quantity}</p>
                    </div>
                   
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