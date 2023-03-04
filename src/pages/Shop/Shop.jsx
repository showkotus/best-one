import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import DisplayProducts from '../../components/DisplayProducts/DisplayProducts';
import ShopBanner from './ShopBanner';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [count, setCount] = useState()
    const [page, setPage] = useState(0)
    const pages = Math.ceil(products.length / 12)
    // const url = http://localhost:5000/alldata?page=${page}&size=12
    useEffect(() => {
        fetch(`products.json`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [page])
    return (
        <div>
            <Helmet>
                <title>Shop | Best One</title>
            </Helmet>
            <ShopBanner></ShopBanner>
            <div className='mt-8 px-4'>
                <p className='font-semibold text-gray-500'>Showing {page * 12 + 1}-{page * 12 + 12} of {products.length} results</p>
            </div>
            <div className='p-4 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products &&
                    products.slice(page *12, page * 12 + 12).map(product => <DisplayProducts key={product._id} product={product}></DisplayProducts>)
                }
            </div>
            <div className='text-center mb-5'>
                <div className='btn-group'>
                    {
                        pages &&
                        [...Array(pages).keys()].map(num => <button className={`btn ${page === num ? 'btn-active':''}`} key={num} onClick={() => setPage(num)}>{num + 1}</button>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;