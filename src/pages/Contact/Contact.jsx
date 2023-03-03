import React from 'react';
import { Helmet } from 'react-helmet';
import ContactBanner from './ContactBanner';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div className='mt-20 lg:mt-36'>
            <Helmet>
                <title>Contact Us | Best One</title>
            </Helmet>
            <ContactBanner/>
            <ContactForm/>
        </div>
    );
};

export default Contact; 