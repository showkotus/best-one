import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContextProvider';
import {ImCross} from 'react-icons/im'
const Cart = () => {
    const { cart } = useContext(CartContext)
    return (
        <div className='mt-20 md:mt-36 md:w-4/5 mx-auto'>
            <h1 className='my-20 text-center font-bold uppercase text-xl text-[#0BA13B]'>Your All Products</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full p-4 my-12">
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.length > 0 &&
                            cart.map(crtPro => <tr key={crtPro.id}>
                                <th>
                                    <button className='text-red-600'><ImCross /></button>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={crtPro.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="">{crtPro.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {crtPro.measure * 100}
                                </td>
                                <td>{crtPro.quantity}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">{crtPro.totalPrice}</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Cart;