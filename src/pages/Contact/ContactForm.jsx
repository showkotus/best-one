import React from 'react';

const ContactForm = () => {
    return (
        <div className='my-12 shadow-2xl'>
            <h1 className='text-center p-2 font-bold text-2xl text-[#0ba13b]'>Contact Form</h1>
            <form className='md:w-3/4 mx-auto py-8'>
                <div className='mb-3'>
                    <label htmlFor="name" className='font-semibold'>YOUR NAME</label>
                    <input type="text" placeholder="Enter Your Name" className="input input-bordered input-success w-full mt-3 rounded-none" id='name' />
                </div>
                <div className='mb-3'>
                    <label htmlFor="email" className='font-semibold'>YOUR EMAIL</label>
                    <input type="text" placeholder="Enter Your Email" className="input input-bordered input-success w-full mt-3 rounded-none" id='email' />
                </div>
                <div className='mb-3'>
                    <label htmlFor="subject" className='font-semibold'>SUBJECT</label>
                    <input type="text" placeholder="Enter the subject line" className="input input-bordered input-success w-full mt-3 rounded-none" id='subject' />
                </div>
                <div className='mb-3'>
                    <label htmlFor="text-area" className='font-semibold'>YOUR MESSAGE (OPTIONAL)</label>
                    <textarea id='text-area' className="textarea textarea-success w-full mt-3 rounded-none" placeholder="Enter Your Message..."></textarea>
                </div>
                <button className='w-full py-4 bg-base-300 shadow font-bold hover:bg-[#0ba13b] hover:text-white'>Submit</button>
            </form>
        </div>
    )
};

export default ContactForm;