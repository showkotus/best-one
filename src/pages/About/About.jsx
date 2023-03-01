import React from 'react';
import AboutCertificate from './AboutCertificate';
import AboutDesc from './AboutDesc';
import AboutPerson from './AboutPerson';
import AboutService from './AboutService';

const About = () => {
    return (
        <div className='mt-20 lg:mt-36 mb-12'>
            <AboutDesc></AboutDesc>
            <AboutService></AboutService>
            <AboutPerson></AboutPerson>
            <AboutCertificate></AboutCertificate>
        </div>
    );
};

export default About;