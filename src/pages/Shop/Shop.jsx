import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import DisplayProducts from '../../components/DisplayProducts/DisplayProducts';
import ShopBanner from './ShopBanner';

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/alldata')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[])

    console.log(products)
    return (
        <div>
            <Helmet>
                <title>Shop | Best One</title>
            </Helmet>
            <ShopBanner></ShopBanner>
            {/* shop sorting option part */}
            <div className='p-4 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12'>
                {
                    products && 
                    products.map(product => <DisplayProducts key={product._id} product = {product}></DisplayProducts>)
                }
            </div>
        </div>
    );
};

export default Shop;