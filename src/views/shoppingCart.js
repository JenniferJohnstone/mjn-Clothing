import React, {useState} from 'react'


const ShoppingCart = (response) => {
    const [showCart, setShowCart] = useState(false)
    if (response.contents !== null) {
        console.log('this is response at shopping cart', response)
        const items = response.contents
        console.log('this is items', items)
        return(
            <div class = "ShoppingCart">
            <h3>Shopping Cart</h3>
            <p class="button viewCart" onClick = {() => {
                if(showCart == false) {
                    setShowCart(true)
                }else {
                    setShowCart(false)
                }}}>View Cart</p>
            {
                items.map(item => {
                    console.log('showCart', showCart)
                    console.log('item', item.title)
                    if(showCart == true) {
                        return(
                            <li class = "cartItems">
                            <img src = {item.picture} />
                            <p>{item.title}</p>
                            <p>Quantity: {item.quantity}</p>
                            </li>
                        )}
                })
                }
                </div>
                )
        
            } else {
        return (
            <h2>Cart is empty</h2>
        )
    }
    
}

export default ShoppingCart 