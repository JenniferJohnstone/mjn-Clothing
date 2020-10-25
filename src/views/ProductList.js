  
import React from 'react'

/**
 * Component for showing a list of things with a vote button
 * 
 * @component
 */
const List = ({product, addToCard, ViewProduct}) => {
    console.log(product)
    return (
        <li> 
        {product.title} {product.price}
        <button onClick={() => ViewProduct(product)}>View product</button>
        <button onClick={() => addToCard(product)}>Add to card</button>
        </li>
      )
    
  }

  export default List
