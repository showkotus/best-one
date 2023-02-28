import React from 'react';
import AboutCertificate from './AboutCertificate';
import AboutDesc from './AboutDesc';
import AboutPerson from './AboutPerson';

const About = () => {
    return (
        <div className='mt-20 lg:mt-36 mb-12'>
            <AboutDesc></AboutDesc>
            <AboutPerson></AboutPerson>
            <AboutCertificate></AboutCertificate>
        </div>
    );
};

export default About;