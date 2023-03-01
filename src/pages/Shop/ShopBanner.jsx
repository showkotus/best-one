import React from 'react';
import shopBanner from '../../assets/shop_banner.jpg'
const ShopBanner = () => {
    return (
        <div className="h-[250px] mt-20 md:mt-36 relative" style={{ backgroundImage: `url("${shopBanner}")`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <h1 className="text-2xl md:text-5xl font-semibold text-gray-500 absolute top-1/2 left-4">Shop</h1>
        </div>

    );
};

export default ShopBanner;