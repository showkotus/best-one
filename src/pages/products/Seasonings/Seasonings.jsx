import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import DisplayProducts from '../../../components/DisplayProducts/DisplayProducts';
import { ThreeCircles } from 'react-loader-spinner'
const Seasonings = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('allproducts.json')
            .then(res => res.json())
            .then(data => setProducts(data))
        setLoading(false)
    }, [])
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
        <div className='mt-20 md:mt-36 px-4'>
            <Helmet>
                <title>Seasonings and Funtional Ingradients | Best One</title>
            </Helmet>
            <h1 className='text-center my-8 font-semibold uppercase text-2xl text-[#0BA13B]'>STARTER CULTURES & RENNET</h1>
            <div className='my-5'>
                <h1 className='font-bold text-xl text-gray-500 my-8'>Sausages & Cold Cuts</h1>
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-4'>
                    {
                        products.length > 0 &&
                        products.filter(prod => prod?.cat1 == 'Sausages & Cold Cuts' || prod?.cat2 == 'Sausages & Cold Cuts' || prod?.cat3 == 'Sausages & Cold Cuts' || prod?.cat4 == 'Sausages & Cold Cuts' || prod?.cat5 == 'Sausages & Cold Cuts').map(prod => <DisplayProducts key={prod._id} product={prod}></DisplayProducts>)
                    }
                </div>
            </div>
            <div className='my-5'>
                <h1 className='font-bold text-xl text-gray-500 my-8'>Marinades</h1>
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-4'>
                    {
                        products.length > 0 &&
                        products.filter(prod => prod?.cat1 == 'Marinades' || prod?.cat2 == 'Marinades' || prod?.cat3 == 'Marinades' || prod?.cat4 == 'Marinades' || prod?.cat5 == 'Marinades').map(prod => <DisplayProducts key={prod._id} product={prod}></DisplayProducts>)
                    }
                </div>
            </div>
            <div className='my-5'>
                <h1 className='font-bold text-xl text-gray-500 my-8'>Fish</h1>
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-4'>
                    {
                        products.length > 0 &&
                        products.filter(prod => prod?.cat1 == 'Fishballs' || prod?.cat2 == 'Fishballs' || prod?.cat3 == 'Fishballs' || prod?.cat4 == 'Fishballs' || prod?.cat5 == 'Fishballs').map(prod => <DisplayProducts key={prod._id} product={prod}></DisplayProducts>)
                    }
                </div>
            </div>
            <div className='my-5'>
                <h1 className='font-bold text-xl text-gray-500 my-8'>Veggie & Vegan</h1>
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-4'>
                    {
                        products.length > 0 &&
                        products.filter(prod => prod?.cat1 == 'Veggie & Vegan' || prod?.cat2 == 'Veggie & Vegan' || prod?.cat3 == 'Veggie & Vegan' || prod?.cat4 == 'Veggie & Vegan' || prod?.cat5 == 'Veggie & Vegan').map(prod => <DisplayProducts key={prod._id} product={prod}></DisplayProducts>)
                    }
                </div>
            </div>
            <div className='my-5'>
                <h1 className='font-bold text-xl text-gray-500 my-8'>Yogurt Cheese & Butter</h1>
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-4'>
                    {
                        products.length > 0 &&
                        products.filter(prod => prod?.cat1 == 'Yogurt Cheese & Butter' || prod?.cat2 == 'Yogurt Cheese & Butter' || prod?.cat3 == 'Yogurt Cheese & Butter' || prod?.cat4 == 'Yogurt Cheese & Butter' || prod?.cat5 == 'Yogurt Cheese & Butter').map(prod => <DisplayProducts key={prod._id} product={prod}></DisplayProducts>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Seasonings;