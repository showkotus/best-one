import React from 'react';
import banner from '../../assets/home_assets/banner.jpg'
const Banner = () => {
    return (
        <div className='mt-20 lg:mt-36'>
            <img className='h-[200px]' src={banner} alt="" />
        </div>
    );
};

export default Banner;