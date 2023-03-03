import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from './Banner';
import Category from './Category';
import Service from './Service';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Best One | BEST ONE TRADING</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Service></Service>
        </div>
    );
};

export default Home;