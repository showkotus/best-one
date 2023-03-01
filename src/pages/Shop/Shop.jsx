import React from 'react';
import ShopBanner from './ShopBanner';

const Shop = () => {
    return (
        <div>
            <ShopBanner></ShopBanner>
            {/* shop sorting option part */}
            <div>
                <p className='text-3xl my-20'>Product is comming soon...</p>
            </div>
        </div>
    );
};

export default Shop;