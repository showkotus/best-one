import React from 'react';
import contactBanner from '../../assets/contact_sec.jpg'
const ContactBanner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("${contactBanner}")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content bg-[rgba(0,0,0,0.4)] p-5">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Contact With Us</h1>
                    <p className="mb-5"><strong>Email: </strong>best-one@best-one.com.bd</p>
                    <p className="mb-5"><strong>Phone: </strong>+88-02-51040138</p>
                    <p className="mb-5"><strong>OPEN SATURDAY – FRIDAY</strong></p>
                    <p className="mb-5"><strong>10AM – 07PM</strong></p>
                </div>
            </div>
        </div>
    );
};

export default ContactBanner;