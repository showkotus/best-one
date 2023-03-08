import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import DisplayProducts from '../../../components/DisplayProducts/DisplayProducts';

const BakeryCake = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("allproducts.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products)
    return (
        <div className='mt-20 md:mt-36'>
            <Helmet>
                <title>Bakery & Cake Solutions | Best One</title>
            </Helmet>
            <h1 className='text-center my-8 font-semibold uppercase text-2xl text-[#0BA13B]'>BAKERY & CAKE SOLUTIONS</h1>
            <div className='my-4'>
                <h2 className='my-2 font-semibold text-gray-500 p-5 inline'>FOR BAKERY & CAKE PRODUCTS</h2>
                <ul className='text-gray-400 font-semibold p-4 list-disc'>
                    <li>Premixes for breads and rolls</li>
                    <li>Premixes for cakes and sponges</li>
                    <li>Cremes / Custard cremes</li>
                    <li>Convenience products</li>
                    <li>Dough improvers</li>
                    <li>Release agents</li>
                    <li>Flours, seeds and flakes for decoration</li>
                    <li>Service products</li>
                </ul>
            </div>
            <div className='my-5'>
                <h1 className='font-bold text-xl text-gray-500 my-8'>Premixes for breads and rolls</h1>
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-4'>
                    {
                        products.length > 0 &&
                        products.filter(prod => prod.cat1 == 'Premixes for breads and rolls').map(prod => <DisplayProducts key={prod._id} product={prod}></DisplayProducts>)
                    }
                </div>
            </div>
            <div className='my-5'>
                <h1 className='font-bold text-xl text-gray-500 my-8'>Premixes for cakes and sponges</h1>
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-4'>
                    {
                        products.length > 0 &&
                        products.filter(prod => prod.cat1 == 'Premixes for cakes and sponges').map(prod => <DisplayProducts key={prod._id} product={prod}></DisplayProducts>)
                    }
                </div>
            </div>
            <div className='my-5'>
                <h1 className='font-bold text-xl text-gray-500 my-8'>Cremes / Custard cremes</h1>
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-4'>
                    {
                        products.length > 0 &&
                        products.filter(prod => prod.cat1 == 'Cremes Custard cremes').map(prod => <DisplayProducts key={prod._id} product={prod}></DisplayProducts>)
                    }
                </div>
            </div>
            <div className='my-5'>
                <h1 className='font-bold text-xl text-gray-500 my-8'>Convenience products</h1>
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-4'>
                    {
                        products.length > 0 &&
                        products.filter(prod => prod.cat1 == 'Convenience products').map(prod => <DisplayProducts key={prod._id} product={prod}></DisplayProducts>)
                    }
                </div>
            </div>
            <div className='my-5'>
                <h1 className='font-bold text-xl text-gray-500 my-8'>Dough improvers</h1>
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-4'>
                    {
                        products.length > 0 &&
                        products.filter(prod => prod.cat1 == 'Dough improvers').map(prod => <DisplayProducts key={prod._id} product={prod}></DisplayProducts>)
                    }
                </div>
            </div>
            <div className='my-5'>
                <h1 className='font-bold text-xl text-gray-500 my-8'>Release agents</h1>
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-4'>
                    {
                        products.length > 0 &&
                        products.filter(prod => prod.cat1 == 'Release agents').map(prod => <DisplayProducts key={prod._id} product={prod}></DisplayProducts>)
                    }
                </div>
            </div>
            <div className='my-5'>
                <h1 className='font-bold text-xl text-gray-500 my-8'>Flours, seeds and flakes for decoration</h1>
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-4'>
                    {
                        products.length > 0 &&
                        products.filter(prod => prod.cat1 == 'Flours, seeds and flakes for decoration').map(prod => <DisplayProducts key={prod._id} product={prod}></DisplayProducts>)
                    }
                </div>
            </div>
            <div className='my-5'>
                <h1 className='font-bold text-xl text-gray-500 my-8'>Service products</h1>
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-4'>
                    {
                        products.length > 0 &&
                        products.filter(prod => prod.cat1 == 'Service products').map(prod => <DisplayProducts key={prod._id} product={prod}></DisplayProducts>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BakeryCake;