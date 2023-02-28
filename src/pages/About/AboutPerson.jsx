import React from 'react';
import person from '../../assets/about_person.jpg'
const AboutPerson = () => {
    return (
        <div className='grid gap-5 grid-cols-1 md:grid-cols-2 place-items-center bg-[#121212] p-6'>
            <img className='w-3/4' src={person} alt="" />
            <div className='shadow-2xl bg-[#1B1B1B] p-6'>
                <h2 className='font-bold text-white mb-2 text-3xl'>Syadul Alam Ravi</h2>
                <h3 className='font-bold text-white mb-2 text-2xl'>Founder & CEO</h3>
                <p className='text-gray-300 text-justify'>Experienced Consultant with a wide demonstrated history as an expertise on developments to Meat & Fish Further Processed Products and Operating Best-One a renowned Distribution House supplying all unique Seasonings, unique Functional Ingredients, Bakery Ingredients, Dip & Culinary Sauces Concentrates, Dairy Cultures & Rennet and Sausage Casings etc. He is also quite expert to recommend Meat Further Processing Lines and different Production Equipment.</p>
            </div>
        </div>
    );
};

export default AboutPerson;