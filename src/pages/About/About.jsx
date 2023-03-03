import React from 'react';
import { Helmet } from 'react-helmet';
import AboutCertificate from './AboutCertificate';
import AboutDesc from './AboutDesc';
import AboutPerson from './AboutPerson';
import AboutService from './AboutService';

const About = () => {
    return (
        <div className='mt-20 lg:mt-36 mb-12'>
            <Helmet>
                <title>About Us | Best One</title>
            </Helmet>
            <AboutDesc></AboutDesc>
            <AboutService></AboutService>
            <AboutPerson></AboutPerson>
            <AboutCertificate></AboutCertificate>
        </div>
    );
};

export default About;