import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContextProvider';

const Cart = () => {
    const {cart} = useContext(CartContext)
    console.log(cart)
    return (
        <div className='mt-20 md:mt-36'>
            <h1 className='my-20 text-center font-bold uppercase text-xl text-[#0BA13B]'>Your All Products</h1>
        </div>
    );
};

export default Cart;