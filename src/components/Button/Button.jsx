import React from 'react';
import {MdArrowForwardIos} from 'react-icons/md'
const Button = ({children}) => {
    return (
        <div className=''>
            <button className='flex items-center bg-[#0ba13b] px-4 py-2 mt-4 custom-btn hover:px-8 ease-in-out duration-300'>
                <span className='font-bold text-white text-xl hover:pr-2 ease-in-out duration-300'>{children}</span>
                <MdArrowForwardIos className='icon font-bold text-white text-xl hover:pl-4 ease-in-out duration-300'/>
            </button>
        </div>
    );
};

export default Button; 