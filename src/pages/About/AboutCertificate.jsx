import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import certOne from '../../assets/about_us/about_1.jpg'
import certTwo from '../../assets/about_us/about_2.jpg'
import certThree from '../../assets/about_us/about_3.jpg'
import certFour from '../../assets/about_us/about_4.jpg'
import certFive from '../../assets/about_us/about_5.jpg'
import certSix from '../../assets/about_us/about_6.jpg'
const AboutCertificate = () => {
    return (
        <div className='grid gap-5 grid-cols-1 md:grid-cols-2 place-items-center bg-[#121212] p-6'>
            <div>
                <h2 className='text-white font-semibold text-2xl text-justify my-4'>Best-One has been representing number of EU Food Ingredients Manufacturers as Sole Distributors in Bangladesh as follows:</h2>
                <p className='text-white font-semibold'><BsArrowRightShort size={34} className='inline text-[#0BA13B]' /> Lay Gewurze GmbH</p>
                <p className='text-white font-semibold'><BsArrowRightShort size={34} className='inline text-[#0BA13B]' /> Abel+Schafer KOMPLET GmbH</p>
                <p className='text-white font-semibold'><BsArrowRightShort size={34} className='inline text-[#0BA13B]' /> SACCO System</p>
                <p className='text-white font-semibold'><BsArrowRightShort size={34} className='inline text-[#0BA13B]' /> Viskase Inc.</p>
                <p className='text-white font-semibold'><BsArrowRightShort size={34} className='inline text-[#0BA13B]' /> Kalle Nalo GmbH</p>
                <p className='text-white font-semibold'><BsArrowRightShort size={34} className='inline text-[#0BA13B]' /> Fibran edicas</p>
                <p className='text-white font-semibold'><BsArrowRightShort size={34} className='inline text-[#0BA13B]' /> BDF Natural Ingredients</p>
            </div>
            <div className='p-3 grid grid-cols-2 md:grid-cols-3 gap-5'>
                <PhotoProvider>
                    <PhotoView src={certOne} >
                        <img src={certOne} alt="" className="hover:cursor-zoom-in" />
                    </PhotoView>
                    <PhotoView src={certTwo}>
                        <img src={certTwo} alt="" className="hover:cursor-zoom-in"  />
                    </PhotoView>
                    <PhotoView src={certThree}>
                        <img src={certThree} alt="" className="hover:cursor-zoom-in"  />
                    </PhotoView>
                    <PhotoView src={certFour}>
                        <img src={certFour} alt="" className="hover:cursor-zoom-in"  />
                    </PhotoView>
                    <PhotoView src={certFive}>
                        <img src={certFive} alt="" className="hover:cursor-zoom-in"  />
                    </PhotoView>
                    <PhotoView src={certSix}>
                        <img src={certSix} alt="" className="hover:cursor-zoom-in"  />
                    </PhotoView>
                </PhotoProvider>

            </div>
        </div>
    );
};

export default AboutCertificate;