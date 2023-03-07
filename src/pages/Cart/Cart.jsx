import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContextProvider';
import { ImCross } from 'react-icons/im'
import { toast } from 'react-hot-toast';
import { TbCurrencyTaka } from 'react-icons/tb'
import { Link } from 'react-router-dom';
const Cart = () => {
    const { cart, setCart,countries, setCountries } = useContext(CartContext)
    const [cityName, setCityName] = useState('Dhaka')
    const [zipcode, setZipcode] = useState('')
    const [hiddenForm, setHiddenForm] = useState(false)
    const handleDelete = product => {
        const newCart = cart.filter(prod => (prod._id && prod.subtotal) !== (product._id && product.subtotal))
        console.log(cart.length)
        setCart([...newCart])
        toast.success("Item deleted from the cart!!")
    }
    let sum = 0
    cart.forEach(prod => {
        sum += prod.subtotal
    })

    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleChangeAdreess = (event) => {
        event.preventDefault()
        const form = event.target
        setCityName(form.cityname.value)
        setZipcode(form.passcode.value)
        setHiddenForm(false)
    }
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
                                                {crtPro.total} <TbCurrencyTaka className='inline' size={24} />
                                            </td>
                                            <td>{crtPro.quantity}</td>
                                            <td>
                                                {crtPro.subtotal}.00 <TbCurrencyTaka className='inline' size={24} />
                                            </td>
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
                <table border={1} className="my-10 w-full">
                    <tr className='border'>
                        <th className='p-3 text-gray-400 text-left'>Subtotal</th>
                        <td>{sum}.00<TbCurrencyTaka className='inline' size={24} /></td>
                    </tr>
                    <tr className='border'>
                        <th className='p-3 text-gray-400 text-left'>Shipping</th>
                        <td>
                            <p>Free Shipping</p>
                            <p>Shipping to <span className='text-gray-500 font-semibold'>{cityName}, {zipcode}</span></p>
                            <p onClick={() => setHiddenForm(!hiddenForm)} className='cursor-pointer font-semibold'>change adreess</p>
                            <form onSubmit={handleChangeAdreess} className={`w-[200px] p-5 ${hiddenForm ? '' : 'hidden'}`}>
                                <select className="select select-bordered w-full max-w-xs mb-3 bg-gray-200">
                                    <option disabled selected>Select a country or region</option>
                                    {
                                        countries.map((country, index) => <option key={index}>{country.name}</option>)
                                    }
                                </select>
                                <input name='cityname' type="text" placeholder="City" className="input w-full max-w-xs mb-3 bg-gray-200" required />
                                <input name='passcode' type="text" placeholder="Passcode/ZIP" className="input w-full max-w-xs mb-3 bg-gray-200" required />
                                <br />
                                <button type='submit' className='px-8 py-4 font-semibold text-xl border-2 border-[#0BA13B] mb-3 hover:text-[#0BA13B] hover:bg-gray-100 hover:border-gray-100'>Update</button>
                            </form>
                        </td>
                    </tr>
                    <tr className='border'>
                        <th className='p-3 text-gray-400 text-left'>Total</th>
                        <td>{sum}.00  <TbCurrencyTaka className='inline' size={24} /></td>
                    </tr>
                </table>
                <div className='flex items-center'>
                    <Link to={'/checkout'}>
                        <button className='px-8 py-4 font-semibold text-xl border-2 border-[#0BA13B] mb-3 hover:text-[#0BA13B] hover:bg-gray-100 hover:border-gray-100'>Procceed To Checkout</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Cart;