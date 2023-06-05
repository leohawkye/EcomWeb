import React, {useContext, useState} from 'react'
import "../shop/shop.css"
import { shopContext } from '../../context/ShopContext'


const Product = (props) => {
    const {addToCart, cartItems} = useContext(shopContext);
    const{productName, productImage, price, id} = props.data
    const cartItemAmount = cartItems[id];
  return (
    <div className='product'>

        <img src={productImage}/>

        <div className='description'>
            <p>
                <b>{productName}</b>
            </p>
            <p>
                $ {price}
            </p>
            
            
        </div>
        <button className='addToCart' onClick={()=> addToCart(id)} >Add To Cart
            {cartItemAmount > 0 && <> ({cartItemAmount}) </> }
        </button>  
   
    </div>
  )
}

export default Product