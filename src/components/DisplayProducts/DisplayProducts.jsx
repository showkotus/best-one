import React from 'react';
import { GrAddCircle } from 'react-icons/gr'
import { Link, useLocation } from 'react-router-dom';
import { TbCurrencyTaka } from 'react-icons/tb';
const DisplayProducts = ({ product }) => {
    const { name, img, price, _id } = product
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <div className='relative p-4'>
                <figure><img src={img} alt={name} className="h-[200px] w-full rounded-lg" /></figure>
                <Link to={`/product/${_id}`} state={product}> 
                    <div onClick={() => console.log("hello brother")} className='absolute top-0 left-0 bg-white w-full h-full rounded-lg opacity-0 hover:opacity-90 grid place-items-center cursor-pointer shadow-xl'>
                        <GrAddCircle size={34} />
                    </div>
                </Link>
            </div>
            <div className="card-body">
                <h2 className="card-title font-semibold">{name}</h2>
                {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                <div className="card-actions justify-center">
                    <p className='text-xl'><strong>Price:</strong>100.00<TbCurrencyTaka className='inline' size={24} /> - 2000.00<TbCurrencyTaka className='inline' size={24} /></p>
                </div>
            </div>
        </div>
    );
};

export default DisplayProducts;