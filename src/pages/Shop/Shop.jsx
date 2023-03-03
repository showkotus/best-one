import React from 'react';
import { Helmet } from 'react-helmet';
import ShopBanner from './ShopBanner';

const Shop = () => {
    return (
        <div>
            <Helmet>
                <title>Shop | Best One</title>
            </Helmet>
            <ShopBanner></ShopBanner>
            {/* shop sorting option part */}
            <div>
                <p className='text-3xl my-20'>Product is comming soon...</p>
            </div>
        </div>
    );
};

export default Shop;