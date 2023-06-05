import React, { useContext } from 'react'
import { shopContext } from '../../context/ShopContext'
import { Products } from '../../Products'
import CartItem from './CartItem'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const{cartItems, getTotalCartAmount} = useContext(shopContext)
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate()
  return (
    <div className='cart'>
        <div>
            <h1> Your Cart Items</h1>
        </div>
        <div >
            {Products.map((product1) =>{
                if(cartItems[product1.id] !== 0){
                    return <CartItem data={product1}/>
                }
            }
                
            )}
        </div>
        {totalAmount> 0 ? 
        <div className='checkout'>
            <p>Sub Total:{totalAmount} $</p>
            <button onClick={() => navigate("/")}>Continue Shopping</button>
            <button>Checkout</button>
        </div>
        :
        <h3>Your Cart Is Empty</h3>}
    </div>
  )
}

export default Cart