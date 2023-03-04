import React from 'react';
import {GrAddCircle} from 'react-icons/gr'
const DisplayProducts = ({ product }) => {
    const { name, img, price } = product
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <div className='relative'>
                <figure><img src={img} alt={name} className="h-[250px] w-full rounded-lg" /></figure>
                <div onClick={() => console.log("hello brother")} className='absolute top-0 left-0 bg-white w-full h-full rounded-lg opacity-0 hover:opacity-90 grid place-items-center cursor-pointer'>
                    <GrAddCircle size={30}/>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title text-sm">{name.slice(0, 20)}</h2>
                {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                <div className="card-actions justify-center">
                    <p><strong>Price:</strong>{price}</p>
                </div>
            </div>
        </div>
    );
};

export default DisplayProducts;