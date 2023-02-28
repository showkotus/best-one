import React from 'react';
import ContactBanner from './ContactBanner';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div className='mt-20 lg:mt-36'>
            <ContactBanner/>
            <ContactForm/>
        </div>
    );
};

export default Contact; 