import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContextProvider';
import { ImCross } from 'react-icons/im'
import { toast } from 'react-hot-toast';
const Cart = () => {
    const { cart, setCart } = useContext(CartContext)
    const handleDelete = product => {
        const newCart = cart.filter(prod => (prod.id && prod.subtotal) !== (product.id && product.subtotal))
        console.log(cart.length)
        setCart([...newCart])
        toast.success("Item deleted from the cart!!")
    }
    console.log(cart)
    return (
        <div className='mt-20 md:mt-36 md:w-4/5 mx-auto'>
            {
                cart.length > 0 ?
                    <>
                        <h1 className='mt-20 text-center font-bold uppercase text-xl text-[#0BA13B]'>Your All Products</h1>
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full p-4 my-12">
                                <thead>
                                    <tr>
                                        <th className='bg-[#0BA13B] text-white'></th>
                                        <th className='bg-[#0BA13B] text-white'>Name</th>
                                        <th className='bg-[#0BA13B] text-white'>Price</th>
                                        <th className='bg-[#0BA13B] text-white'>Quantity</th>
                                        <th className='bg-[#0BA13B] text-white'>Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cart.length > 0 &&
                                        cart.map((crtPro, index) => <tr key={index}>
                                            <th>
                                                <button onClick={() => handleDelete(crtPro)} className='text-red-600'><ImCross /></button>
                                            </th>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={crtPro.img} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="">{crtPro.name} ({crtPro.measure}kg)</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {crtPro.measure * 100}
                                            </td>
                                            <td>{crtPro.quantity}</td>
                                            <th>
                                                <button className="btn btn-ghost btn-xs">{crtPro.subtotal}</button>
                                            </th>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </>
                    :
                    <h1 className='my-24 text-center font-bold uppercase text-xl text-[#0BA13B]'>You have not added any product in your cart.</h1>
            }

            <div>
                <h1 className='text-2xl font-semibold mb-3'>Cart Totals</h1>
                <table border={1} className="my-10">
                    <tr className='border'>
                        <th className='p-3 text-gray-400 text-left'>Subtotal</th>
                        <td>Price</td>
                    </tr>
                    <tr className='border'>
                        <th className='p-3 text-gray-400 text-left'>Shipping</th>
                        <td>
                            <p>Free Shipping</p>
                            <p>Shipping to dhaka</p>
                            <p>change adreess</p>
                            <form className='w-[300px] bg-black'>
                                <select className="select select-bordered w-full max-w-xs">
                                    <option disabled selected>Who shot first?</option>
                                    <option>Han Solo</option>
                                    <option>Greedo</option>
                                </select>
                                <select className="select select-bordered w-full max-w-xs">
                                    <option disabled selected>Who shot first?</option>
                                    <option>Han Solo</option>
                                    <option>Greedo</option>
                                </select>
                                <input type="text" placeholder="Type here" className="input w-full max-w-xs" />
                                <input type="text" placeholder="Type here" className="input w-full max-w-xs" />
                                <br />
                                <button type='submit'>Update</button>
                            </form>
                        </td>
                    </tr>
                    <tr className='border'>
                        <th className='p-3 text-gray-400 text-left'>Total</th>
                        <td>total price</td>
                    </tr>
                </table>
                <div className='flex items-center'>
                    <button className='px-8 py-4 font-semibold text-xl border-2 border-[#0BA13B] mb-3 hover:text-[#0BA13B] hover:bg-gray-100 hover:border-gray-100'>Procceed To Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;