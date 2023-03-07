import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContextProvider';

const Checkout = () => {
    const { countries } = useContext(CartContext)
    const [isDifferentAdrs, setIsDifferentAdrs] = useState(false)
    return (
        <div className='mt-20 md:mt-36 p-4'>
            <h1 className='font-bold text-2xl uppercase text-center text-[#0BA13B] mb-4'>Checkout</h1>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2'>
                <div>
                    <h3 className='font-semibold text-2xl'>Billing details</h3>
                    <from>
                        <div className='mb-3'>
                            <label htmlFor="firstname" className='font-semibold text-gray-500'>First Name <span className='text-red-600 font-bold text-xl'>*</span> </label>
                            <br />
                            <input type="text" placeholder='Enter your first name' id='firstname' className='p-4 bg-gray-200 outline-none text-gray-600 font-semibold w-4/5' required />
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
                            <label htmlFor="com_name" className='font-semibold text-gray-500'>Country/Region <span className='text-red-600 font-bold text-xl'>*</span></label>
                            <br />
                            <select className="select w-4/5 bg-gray-200 rounded-none">
                                <option disabled selected>Select a country or region</option>
                                {
                                    countries.map((country, index) => <option key={index}>{country.name}</option>)
                                }
                            </select>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="lastname" className='font-semibold text-gray-500'>Street address<span className='text-red-600 font-bold text-xl'>*</span> </label>
                            <br />
                            <input type="text" placeholder='House number and street name' id='lastname' className='p-4 bg-gray-200 outline-none text-gray-600 font-semibold w-4/5' required />
                            <input type="text" placeholder='Apartment, suite, unit etc. (optional)' id='lastname' className='p-4 bg-gray-200 outline-none text-gray-600 font-semibold w-4/5 mt-2' required />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="lastname" className='font-semibold text-gray-500'>Town/City <span className='text-red-600 font-bold text-xl'>*</span> </label>
                            <br />
                            <input type="text" placeholder='Enter your city' id='lastname' className='p-4 bg-gray-200 outline-none text-gray-600 font-semibold w-4/5' required />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="lastname" className='font-semibold text-gray-500'>District <span className='text-red-600 font-bold text-xl'>*</span> </label>
                            <br />
                            <input type="text" placeholder='Enter your district' id='lastname' className='p-4 bg-gray-200 outline-none text-gray-600 font-semibold w-4/5' required />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="com_name" className='font-semibold text-gray-500'>Postcode/Zip(optional) </label>
                            <br />
                            <input type="text" placeholder='Enter your last name' id='com_name' className='p-4 bg-gray-200 outline-none text-gray-600 font-semibold w-4/5' />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="lastname" className='font-semibold text-gray-500'>Phone <span className='text-red-600 font-bold text-xl'>*</span> </label>
                            <br />
                            <input type="text" placeholder='Enter your phone number' id='lastname' className='p-4 bg-gray-200 outline-none text-gray-600 font-semibold w-4/5' required />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="lastname" className='font-semibold text-gray-500'>Email <span className='text-red-600 font-bold text-xl'>*</span> </label>
                            <br />
                            <input type="text" placeholder='Enter your email' id='lastname' className='p-4 bg-gray-200 outline-none text-gray-600 font-semibold w-4/5' required />
                        </div>
                    </from>
                </div>
                <div>
                    <div className='flex items-center'>
                        <input type="checkbox" className="checkbox mr-2" onClick={() => setIsDifferentAdrs(!isDifferentAdrs)}/>
                        <h3 className='font-semibold text-2xl'>Ship to a different address?</h3>
                    </div>
                    <from className={`${isDifferentAdrs ? '':'hidden'}`}>
                        <div className='mb-3'>
                            <label htmlFor="firstname" className='font-semibold text-gray-500'>First Name <span className='text-red-600 font-bold text-xl'>*</span> </label>
                            <br />
                            <input type="text" placeholder='Enter your first name' id='firstname' className='p-4 bg-gray-200 outline-none text-gray-600 font-semibold w-4/5' required />
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
                            <label htmlFor="com_name" className='font-semibold text-gray-500'>Country/Region <span className='text-red-600 font-bold text-xl'>*</span></label>
                            <br />
                            <select className="select w-4/5 bg-gray-200 rounded-none">
                                <option disabled selected>Select a country or region</option>
                                {
                                    countries.map((country, index) => <option key={index}>{country.name}</option>)
                                }
                            </select>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="lastname" className='font-semibold text-gray-500'>Street address<span className='text-red-600 font-bold text-xl'>*</span> </label>
                            <br />
                            <input type="text" placeholder='House number and street name' id='lastname' className='p-4 bg-gray-200 outline-none text-gray-600 font-semibold w-4/5' required />
                            <input type="text" placeholder='Apartment, suite, unit etc. (optional)' id='lastname' className='p-4 bg-gray-200 outline-none text-gray-600 font-semibold w-4/5 mt-2' required />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="lastname" className='font-semibold text-gray-500'>Town/City <span className='text-red-600 font-bold text-xl'>*</span> </label>
                            <br />
                            <input type="text" placeholder='Enter your city' id='lastname' className='p-4 bg-gray-200 outline-none text-gray-600 font-semibold w-4/5' required />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="lastname" className='font-semibold text-gray-500'>District <span className='text-red-600 font-bold text-xl'>*</span> </label>
                            <br />
                            <input type="text" placeholder='Enter your district' id='lastname' className='p-4 bg-gray-200 outline-none text-gray-600 font-semibold w-4/5' required />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="com_name" className='font-semibold text-gray-500'>Postcode/Zip(optional) </label>
                            <br />
                            <input type="text" placeholder='Enter your last name' id='com_name' className='p-4 bg-gray-200 outline-none text-gray-600 font-semibold w-4/5' />
                        </div>
                    </from>
                </div>
            </div>
        </div>
    );
};

export default Checkout;