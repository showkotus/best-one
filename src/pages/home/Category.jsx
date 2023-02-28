import React from 'react';
import catOne from '../../assets/home_assets/b-1.jpg'
import catTwo from '../../assets/home_assets/b-2.jpg'
import catThree from '../../assets/home_assets/b-3.jpg'
import catFour from '../../assets/home_assets/b-4.jpg'
const Category = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-12'>
            <div className="card card-compact bg-[#0ba13b] shadow-xl ">
                <figure><img className='hover:scale-110 ease-in-out duration-300' src={catOne} alt="Shoes" /></figure>
                <div className="card-body">
                    <p className='font-semibold text-xl text-white py-8'>Seasonings & Functional Ingredients</p>
                </div>
            </div>
            <div className="card card-compact bg-[#0ba13b] shadow-xl ">
                <figure><img className='hover:scale-110 ease-in-out duration-300' src={catTwo} alt="Shoes" /></figure>
                <div className="card-body">
                    <p className='font-semibold text-xl text-white py-8'>Casings Solutions</p>
                </div>
            </div>
            <div className="card card-compact bg-[#0ba13b] shadow-xl ">
                <figure><img className='hover:scale-110 ease-in-out duration-300' src={catThree} alt="Shoes" /></figure>
                <div className="card-body">
                    <p className='font-semibold text-xl text-white py-8'>Starter Cultures & Rennet</p>
                </div>
            </div>
            <div className="card card-compact bg-[#0ba13b] shadow-xl ">
                <figure><img className='hover:scale-110 ease-in-out duration-300' src={catFour} alt="Shoes" /></figure>
                <div className="card-body">
                    <p className='font-semibold text-xl text-white py-8'>Bakery & Cake Solutions</p>
                </div>
            </div>
        </div>
    );
};

export default Category;