import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import DisplayProducts from '../../../components/DisplayProducts/DisplayProducts';
import { ThreeCircles } from 'react-loader-spinner'
const StarterPro = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() =>{
        fetch('allproducts.json')
        .then(res => res.json())
        .then(data => setProducts(data))
        setLoading(false)
    } ,[])
    if (loading) {
        return <div className='mt-20 md:mt-36 min-h-screen w-full grid place-items-center'>
            <ThreeCircles
                height="100"
                width="100"
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
            />
        </div>
    }
    return (
        <div className='mt-20 md:mt-36'>
            <Helmet>
                <title>Starter Cultures & Rennet | Best One</title>
            </Helmet>
            <h1 className='text-center my-8 font-semibold uppercase text-2xl text-[#0BA13B]'>STARTER CULTURES & RENNET</h1>
            <div className='my-4'>
                <h2 className='my-2 font-semibold text-gray-500 p-5 inline'>FOR SET, STIRRED & DRINKABLE YOGURTS & CHEESES AND PROBIOTICS & AGROVET</h2>
                <ul className='text-gray-400 font-semibold p-4 list-disc'>
                    <li>Freeze dried and frozen live Cultures</li>
                    <li>Rennet & Coagulants</li>
                    <li>Probiotics for fermented Milk, Yogurt & Cheeses</li>
                    <li>Lactase</li>
                    <li>Non-Starter Lactic Acid Bacteria (NLAB)</li>
                    <li>4protection Cultures for Dairy, Meat, Fish & Plant based</li>
                    <li>Lipase & Moulds</li>
                    <li>Father Cultures for Bakery</li>
                    <li>Probiotics for Human Health Improvement</li>
                    <li>Agro vet Cultures for Poultry, Cattles & Plant</li>
                </ul>
            </div>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-4'>
                {
                    products.length > 0 &&
                    products.filter(prod => prod.cat1 == 'starter culture & rennet').map(prod =><DisplayProducts product = {prod}></DisplayProducts>)
                }
            </div>
        </div>
    );
};

export default StarterPro;