import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContextProvider';
import { TbCurrencyTaka } from 'react-icons/tb'
const Checkout = () => {
    const { countries, cart } = useContext(CartContext)
    const [isDifferentAdrs, setIsDifferentAdrs] = useState(false)
    let subTotalPrice = 0
    cart.forEach(prod => {
        subTotalPrice += prod.subtotal
    })
    const handleFromSubmit = event =>{
        console.log(event.target.value)
    }
    return (
        <div className='mt-20 md:mt-36 p-4'>
            <h1 className='font-bold text-2xl uppercase text-center text-[#0BA13B] mb-4'>Checkout</h1>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2'>
                <div>
                    <h3 className='font-semibold text-2xl'>Billing details</h3>
                    <from onBlur={handleFromSubmit}>
                        <div className='mb-3'>
                            <label htmlFor="firstname" className='font-semibold text-gray-500'>First Name <span className='text-red-600 font-bold text-xl'>*</span> </label>
                            <br />
                            <input name='firstname' type="text" placeholder='Enter your first name' id='firstname' className='p-4 bg-gray-200 outline-none text-gray-600 font-semibold w-4/5' required />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="lastname" className='font-semibold text-gray-500'>Last Name <span className='text-red-600 font-bold text-xl'>*</span> </label>
                            <br />
                            <input type="text" placeholder='Enter your last name' id='lastname' className='p-4 bg-gray-200 outline-none text-gray-600 font-semibold w-4/5' required />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="com_name" className='font-semibold text-gray-500'>Company Name (optional) </label>
                            <br />
                            <input type="text" placeholder='Enter your last name' id='com_name' className='p-4 bg-gray-200 outline-none text-gray-600 font-semibold w-4/5' />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="country" className='font-semibold text-gray-500'>Country/Region <span className='text-red-600 font-bold text-xl'>*</span></label>
                            <br />
                            <select id='country' className="select w-4/5 bg-gray-200 rounded-none">
                                <option disabled selected>Select a country or region</option>
                                {
                                    countries.map((country, index) => <option key={index}>{country.name}</option>)
                                }
                            </select>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="add" className='font-semibold text-gray-500'>Street address<span className='text-red-600 font-bold text-xl'>*</span> </label>
                            <br />
                            <input type="text" placeholder='House number and street name' id='add' className='p-4 bg-gray-200 outline-none text-gray-600 font-semibold w-4/5' required />
                            <input type="text" placeholder='Apartment, suite, unit etc. (optional)' className='p-4 bg-gray-200 outline-none text-gray-600 font-semibold w-4/5 mt-2' required />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="town" className='font-semibold text-gray-500'>Town/City <span className='text-red-600 font-bold text-xl'>*</span> </label>
                            <br />
                            <input type="text" placeholder='Enter your city' id='town' className='p-4 bg-gray-200 outline-none text-gray-600 font-semibold w-4/5' required />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="district" className='font-semibold text-gray-500'>District <span className='text-red-600 font-bold text-xl'>*</span> </label>
                            <br />
                            <input type="text" placeholder='Enter your district' id='district' className='p-4 bg-gray-200 outline-none text-gray-600 font-semibold w-4/5' required />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="zip" className='font-semibold text-gray-500'>Postcode/Zip(optional) </label>
                            <br />
                            <input type="text" placeholder='Enter your last name' id='zip' className='p-4 bg-gray-200 outline-none text-gray-600 font-semibold w-4/5' />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="phone" className='font-semibold text-gray-500'>Phone <span className='text-red-600 font-bold text-xl'>*</span> </label>
                            <br />
                            <input type="text" placeholder='Enter your phone number' id='phone' className='p-4 bg-gray-200 outline-none text-gray-600 font-semibold w-4/5' required />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="email" className='font-semibold text-gray-500'>Email <span className='text-red-600 font-bold text-xl'>*</span> </label>
                            <br />
                            <input type="text" placeholder='Enter your email' id='email' className='p-4 bg-gray-200 outline-none text-gray-600 font-semibold w-4/5' required />
                        </div>
                        <button></button>
                    </from>
                </div>
                <div>
                    <div className='flex items-center'>
                        <input type="checkbox" className="checkbox mr-2" onClick={() => setIsDifferentAdrs(!isDifferentAdrs)} />
                        <h3 className='font-semibold text-2xl'>Ship to a different address?</h3>
                    </div>
                    <from className={`${isDifferentAdrs ? '' : 'hidden'}`}>
                        <div className='mb-3'>
                            <label htmlFor="firstname_up" className='font-semibold text-gray-500'>First Name <span className='text-red-600 font-bold text-xl'>*</span> </label>
                            <br />
                            <input type="text" placeholder='Enter your first name' id='firstname_up' className='p-4 bg-gray-200 outline-none text-gray-600 font-semibold w-4/5' required />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="lastname_up" className='font-semibold text-gray-500'>Last Name <span className='text-red-600 font-bold text-xl'>*</span> </label>
                            <br />
                            <input type="text" placeholder='Enter your last name' id='lastname_up' className='p-4 bg-gray-200 outline-none text-gray-600 font-semibold w-4/5' required />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="com_name_up" className='font-semibold text-gray-500'>Company Name (optional) </label>
                            <br />
                            <input type="text" placeholder='Enter your last name' id='com_name_up' className='p-4 bg-gray-200 outline-none text-gray-600 font-semibold w-4/5' />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="country_up" className='font-semibold text-gray-500'>Country/Region <span className='text-red-600 font-bold text-xl'>*</span></label>
                            <br />
                            <select id='country_up' className="select w-4/5 bg-gray-200 rounded-none">
                                <option disabled selected>Select a country or region</option>
                                {
                                    countries.map((country, index) => <option key={index}>{country.name}</option>)
                                }
                            </select>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="addr" className='font-semibold text-gray-500'>Street address<span className='text-red-600 font-bold text-xl'>*</span> </label>
                            <br />
                            <input type="text" placeholder='House number and street name' id='addr' className='p-4 bg-gray-200 outline-none text-gray-600 font-semibold w-4/5' required />
                            <input type="text" placeholder='Apartment, suite, unit etc. (optional)' className='p-4 bg-gray-200 outline-none text-gray-600 font-semibold w-4/5 mt-2' required />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="town_up" className='font-semibold text-gray-500'>Town/City <span className='text-red-600 font-bold text-xl'>*</span> </label>
                            <br />
                            <input type="text" placeholder='Enter your city' id='town_up' className='p-4 bg-gray-200 outline-none text-gray-600 font-semibold w-4/5' required />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="district_up" className='font-semibold text-gray-500'>District <span className='text-red-600 font-bold text-xl'>*</span> </label>
                            <br />
                            <input type="text" placeholder='Enter your district' id='district_up' className='p-4 bg-gray-200 outline-none text-gray-600 font-semibold w-4/5' required />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="zip_up" className='font-semibold text-gray-500'>Postcode/Zip(optional) </label>
                            <br />
                            <input type="text" placeholder='Enter your last name' id='zip_up' className='p-4 bg-gray-200 outline-none text-gray-600 font-semibold w-4/5' />
                        </div>
                    </from>
                </div>
            </div>
            <div className='my-3 text-gray-500 font-semibold'>
                <h1 className='font-bold text-xl uppercase text-center text-[#0BA13B] mb-4'>Your Order</h1>
                {
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th className='bg-[#0BA13B] text-white'>Product</th>
                                    <th className='bg-[#0BA13B] text-white'>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.length > 0 &&
                                    cart.map((cartPro, index) => <tr key={index}>
                                        <td>{cartPro.name} ({cartPro.measure}kg * {cartPro.quantity})</td>
                                        <td>{cartPro.subtotal}.00 <TbCurrencyTaka className='inline' size={24} /></td>
                                    </tr>)
                                }
                                <tr>
                                    <td className='text-gray-400 font-bold'>Subtotal</td>
                                    <td>{subTotalPrice}.00 <TbCurrencyTaka className='inline' size={24} /></td>
                                </tr>
                                <tr>
                                    <td className='text-gray-400 font-bold'>Shipping</td>
                                    <td>free shipping</td>
                                </tr>
                                <tr>
                                    <td className='text-gray-400 font-bold'>Total</td>
                                    <td>{subTotalPrice}.00 <TbCurrencyTaka className='inline' size={24} /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                }
            </div>
            <div className='py-20 px-8 bg-gray-200 shadow rounded'>
                <p className='text-gray-500'>Cash on delivery</p>
                <p className='my-3 py-4 px-2 bg-gray-300  text-gray-600 rounded'>Pay with cash upon delivery</p>
                <p className='text-gray-500'>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
                <button className='px-8 py-4 font-semibold text-xl border-2 border-[#0BA13B] mt-2 hover:text-[#0BA13B] hover:bg-gray-100 hover:border-gray-100 mx-auto block'>Place Order</button>
            </div>
        </div>
    );
};

export default Checkout;