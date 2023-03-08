import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import DisplayProducts from '../../components/DisplayProducts/DisplayProducts';
import ShopBanner from './ShopBanner';
import { ThreeCircles } from 'react-loader-spinner'
const Shop = () => {
    const [products, setProducts] = useState([])
    const [filteringProduct, setFilteringProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const [cat, setCat] = useState('')
    const [page, setPage] = useState(0)
    const pages = Math.ceil(filteringProduct.length / 12)
    let lastpage = page * 12 + 12
    if (lastpage >= filteringProduct.length) {
        lastpage = filteringProduct.length
    }
    if(lastpage >= products.length){
        lastpage = products.length
    }
    useEffect(() => {
        fetch(`allproducts.json`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setFilteringProduct(data)
            })
        setLoading(false)
    }, [])
    // console.log(products)
    const handleFilter = e => {
        const selectedCat = e.target.value
        const newProducts = products.filter(prod => prod?.cat1 == selectedCat || prod?.cat2 == selectedCat || prod?.cat3 == selectedCat || prod?.cat4 == selectedCat || prod?.cat5 == selectedCat)
        setFilteringProduct(newProducts)
        setCat(selectedCat)
        setPage(0)
        console.log('inside of function:', newProducts.length)
    }
    console.log('outside of function', filteringProduct.length)
    const handleReset = () => {
        setCat('')
        setFilteringProduct(products)
    }
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
        <div>
            <Helmet>
                <title>Shop | Best One</title>
            </Helmet>
            <ShopBanner></ShopBanner>
            <div className='my-8 flex justify-between items-center flex-wrap'>
                <div>
                    <p className='font-semibold text-gray-500'>Showing {page * 12 + 1}- {lastpage} of {filteringProduct.length} results</p>
                    {cat &&
                        <p className='font-semibold text-[#0BA13B]'>Selected Products: {cat}</p>
                    }
                </div>
                <select onChange={handleFilter} className="select bg-gray-200 rounded-none outline-none">
                    <option disabled selected>Select Yours Product</option>
                    <option>Burger Patty</option>
                    <option>Chiken Tender</option>
                    <option>Fish Nugget Cake Cutlet Patty Finger</option>
                    <option>Fish Sausages</option>
                    <option>Fishballs</option>
                    <option>Fried Chiken</option>
                    <option>Marinades</option>
                    <option>Meatballs</option>
                    <option>Nuggets</option>
                    <option>Sauce Compound</option>
                    <option>Sausages & Cold Cuts</option>
                    <option>Snacks Seasoning</option>
                    <option>Soup Compound</option>
                    <option>Veggie & Vegan</option>
                    <option>Yogurt Cheese & Butter</option>
                </select>
                {
                    cat && <button onClick={handleReset} className='px-8 py-4 bg-[#0BA13B] text-white font-bold uppercase'>Reset</button>
                }
            </div>
            <div className='p-4 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    filteringProduct &&
                    filteringProduct.slice(page * 12, page * 12 + 12).map(product => <DisplayProducts key={product._id} product={product}></DisplayProducts>)
                }
            </div>
            <div className='text-center mb-5'>
                <div className='btn-group'>
                    {
                        pages &&
                        [...Array(pages).keys()].map(num => <button className={`btn bg-[#0BA13B] ${page === num ? 'btn-active' : ''}`} key={num} onClick={() => setPage(num)}>{num + 1}</button>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;