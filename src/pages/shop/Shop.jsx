import React, { useState } from 'react'
import { Products } from '../../Products'
import Product from './Product'
import "../shop/shop.css"

const Shop = () => {
   
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>GoCart Shop</h1>
        </div>
        <div className='products'>
            {Products.map((product1) => 
            <Product data={product1}/>
            )}
        </div>
    </div>
  )
}

export default Shop