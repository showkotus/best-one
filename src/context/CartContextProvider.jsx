import React, { createContext, useEffect, useState } from 'react';
export const CartContext = createContext([])
const CartContextProvider = ({children}) => {
    
    const getLocalCartData = () =>{
        let storedCart = localStorage.getItem('CART')
        if(storedCart){
            return JSON.parse(storedCart)
        }else{
            return []
        }
    }
    console.log(getLocalCartData())

    const [cart, setCart] = useState(getLocalCartData())
    useEffect(() =>{
        localStorage.setItem('CART', JSON.stringify(cart))
    } ,[cart])
    const value = {cart, setCart}
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;