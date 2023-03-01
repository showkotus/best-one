import React from 'react';
import {AiFillCheckSquare} from 'react-icons/ai'
import about from '../../assets/about_us/about_us_img.jpg'
const AboutDesc = () => {
    return (
        <div className='bg-[#28221d] my-4'>
            {/* here about use description  */}
            <div className='flex flex-col md:flex-row items-center gap-10 p-6 bg-black'>
                <div>
                    <h1 className='text-gray-400 font-bold text-3xl mb-4'>About Us</h1>
                    <p className='text-white my-8 text-lg text-justify'>Best-One is your reliable partner and one-stop serving house to give your products a special touch with cutting-edge food technology & science-backed Ingredients recommending authentic healthy & balanced recipes.</p>
                    <p className='flex items-center font-medium text-white'><AiFillCheckSquare size={24} className="text-[#0ba13b] mr-2"/> <span>Seasonings, Ingredients, Additives, Casings, Cultures & Rennet Suppl</span></p>
                    <p className='flex items-center font-medium text-white'><AiFillCheckSquare size={24} className="text-[#0ba13b] mr-2"/> <span>Recipes Recommendations</span></p>
                    <p className='flex items-center font-medium text-white'><AiFillCheckSquare size={24} className="text-[#0ba13b] mr-2"/> <span>Products Developments</span></p>
                    <p className='flex items-center font-medium text-white'><AiFillCheckSquare size={24} className="text-[#0ba13b] mr-2"/> <span>Existing Products Improvements</span></p>
                    <p className='flex items-center font-medium text-white'><AiFillCheckSquare size={24} className="text-[#0ba13b] mr-2"/> <span>Costs Customizations & Tailoring</span></p>
                    <p className='flex items-center font-medium text-white'><AiFillCheckSquare size={24} className="text-[#0ba13b] mr-2"/> <span>R&D, Real Time Trials & Training</span></p>
                    <p className='flex items-center font-medium text-white'><AiFillCheckSquare size={24} className="text-[#0ba13b] mr-2"/> <span>Foreign Food Technologists Supports</span></p>
                    <p className='flex items-center font-medium text-white'><AiFillCheckSquare size={24} className="text-[#0ba13b] mr-2"/> <span>Food Machinery, Attachments & Accessory Supports</span></p>
                </div>
                <img className='w-full h-[400px]' src={about} alt="" />
            </div>
        </div>
    );
};

export default AboutDesc;