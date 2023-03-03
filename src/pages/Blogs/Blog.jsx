import React from 'react';
import { Helmet } from 'react-helmet';

const Blog = () => {
    return (
        <div className='min-h-[500px] grid place-items-center'>
            <Helmet>
                <title>Blogs | Best One</title>
            </Helmet>
            <h1 className='text-center text-3xl font-semibold text-[#0ba13b]'>Blog is comming soon...</h1>
        </div>
    );
};

export default Blog;