import React, {createContext, useState} from 'react'
import { Products } from '../Products'

export const shopContext = createContext(null)

const getDefaultCrat = () => {
    let cart = {};
    for(let i = 1; i < Products.length+1; i++){
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCrat());

  const addToCart = (itemId) => {
    setCartItems((prev) =>({...prev, [itemId]: prev[itemId]+1}) )
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) =>({...prev, [itemId]: prev[itemId]-1}) )

  };

  const updateCartItemCount = (newAmount,  itemId) => {
    setCartItems((prev) =>({...prev, [itemId]: newAmount}) )

  };

  const getTotalCartAmount = () => {
   let amount = 0;
   for(const item in cartItems){
        if(cartItems[item] > 0){
            let itemInfo = Products.find((product) => product.id === Number(item));
            amount += cartItems[item] * itemInfo.price; 
        }
   }
   return amount;

  };

  const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount};
  console.log(cartItems)
  return (
    <shopContext.Provider value={contextValue}>{props.children}</shopContext.Provider>
  )
}

export default ShopContextProvider