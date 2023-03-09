import React from 'react';
import './ProductsBanner.css'
const ProductsBanner = ({ text }) => {
    console.log(text)
    return (
        <div className='custom_produts_banner'>
            <div className='products_banner_inner'>
                <h1 className='font-bold text-white text-2xl px-4 lowercase'>we provide 100% food grade {text}</h1>
            </div>
        </div>
    );
};

export default ProductsBanner;