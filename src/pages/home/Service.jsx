import React from 'react';
import product from '../../assets/home_assets/home-products.jpg'
import service from '../../assets/home_assets/home-products-2.jpg'
import Button from '../../components/Button/Button';
const Service = () => {
    return (
        <div className='my-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center my-20'>
                <div>
                    <img className='rounded' src={product} alt="" />
                </div>
                <div>
                    <h1 className='font-bold text-[#0ba13b] text-3xl'>Products</h1>
                    <p className='font-semibold mt-6 text-gray-500 text-justify'>We offer you a variety of solutions for your everyday production. Complete products for the production of meat products, quality additives with perfect technological properties, but also a large number of ideas and recipe suggestions help you to standardize your production and be economically successful. Rely on the fact that quality, taste and service are the maxims of our daily work.</p>
                    <Button></Button>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center mb-10'>
                <div>
                    <h1 className='font-bold text-[#0ba13b] text-3xl'>Services</h1>
                    <p className='font-semibold mt-6 text-gray-500 text-justify'>Best-One is your reliable partner and one-stop serving house to give your products a special touch with cutting-edge food technology and science, backed ingredients recommending authentic and balanced recipes. We also represent different Foods, Bakery, and Beverages production machinery, metal Detectors, filling and packaging machinery, and many more…</p>
                    <Button></Button>
                </div>
                <div>
                    <img className='rounded' src={service} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Service;