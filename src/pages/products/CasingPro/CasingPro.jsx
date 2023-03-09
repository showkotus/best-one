import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import ProductsBanner from '../../../components/ProductsBanner/ProductsBanner';

const CasingPro = () => {
    const [casings, setCasings] = useState([])
    useEffect(() => {
        fetch('casingsproducts.json')
            .then(res => res.json())
            .then(data => setCasings(data))
    }, [])
    return (
        <div className='mt-20 md:mt-36'>
            <Helmet>
                <title>Casings Solutions | Best One</title>
            </Helmet>
            <h1 className='text-center my-8 font-semibold uppercase text-2xl text-[#0BA13B]'>CASINGS SOLUTIONS</h1>
            <div className='my-8 flex px-12'>
                <div>
                    <h2 className='my-2 font-semibold text-gray-500 p-5 inline'>FOR CASINGS PRODUCTS</h2>
                    <ul className='text-gray-400 font-semibold p-4 list-disc'>
                        <li>Cellulose Casings</li>
                        <li>Polyamide Casings</li>
                        <li>Fibrous Casings</li>
                        <li>Collagen Edible Casings</li>
                        <li>Net Casings</li>
                        <li>Fiber Casings</li>
                        <li>Coated Casings</li>
                        <li>Plant based Edible Casings</li>
                    </ul>
                </div>
                <div className='ml-12 flex-auto hidden md:flex'>
                    <ProductsBanner text={"Casings Solution"}></ProductsBanner>
                </div>
            </div>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4'>
                {
                    casings.length > 0 &&
                    casings.map(csnPro => <div className='shadow-lg p-4'>
                        <a href={csnPro.pdf}>
                            <img className='h-[220px] rounded mx-auto block' src={csnPro.img} alt="" />
                            <p className='mt-2 text-gray-500 font-bold'>{csnPro.name}</p>
                        </a>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CasingPro;