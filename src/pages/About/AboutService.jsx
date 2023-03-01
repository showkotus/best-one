import React from 'react';
import contact_serve from '../../assets/contact-serve.jpg'
import { AiFillCheckSquare } from 'react-icons/ai';
const AboutService = () => {
    return (
        <div className='bg-[#121212]'>
            <div className="p-4">
                <h1 className="mb-5 text-xl md:text-3xl  font-bold text-gray-400">What & Whom We Serve:</h1>
                <div className='text-justify'>
                    <p className='font-medium text-white mb-3'><AiFillCheckSquare size={22} className="inline text-[#0ba13b] mr-2" /> <span>Further Meat/Fish/Veggie Process: Seasonings, Compound, Premixes, Additives, Stabilizers, Emulsifier, Color, Flavor, Preservatives, Bio-Chemical products, Meat Replacers, Meat Enhancers and many more.</span></p>
                    <p className='font-medium text-white mb-3'><AiFillCheckSquare size={22} className="inline text-[#0ba13b] mr-2" /> <span>Dairy: Starter Cultures, Yakult Culture, Probiotics Cultures, Lysozyme, Catalase, Lactase, Lamb esterase, Goat lipase, Animal Rennet, Vegetal Rennet, Chymosin, Microbial Rennet, Natural dairy color etc.</span></p>
                    <p className='font-medium text-white mb-3'><AiFillCheckSquare size={22} className="inline text-[#0ba13b] mr-2" /> <span>Bakery: All types of Breads Mixes, Sourdough Mixes, Cake Mixes & Compounds, Pan Releasing Agent, Cream Compounds, Molds & many more</span></p>
                    <p className='font-medium text-white mb-3'><AiFillCheckSquare size={22} className="inline text-[#0ba13b] mr-2" /> <span>Sauces: Complete Premixes & Compounds, 100% Pure Dehydrated Tomato Powder 22 folds, Stabilizers, Emulsifiers, Colors, Flavors & Preservatives etc.</span></p>
                    <p className='font-medium text-white mb-3'><AiFillCheckSquare size={22} className="inline text-[#0ba13b] mr-2" /> <span>Snacks & Extrusions: Sprinkle Complete Chips & Snacks Seasonings etc.</span></p>
                    <p className='font-medium text-white mb-3'><AiFillCheckSquare size={22} className="inline text-[#0ba13b] mr-2" /> <span>All Casings Solutions: Cellulose, Fibrous, Polyamide, Collagen, Natural Salted, Smoke/Caramel Coated Fibrous and Vegan Casing etc.</span></p>
                    <p className='font-medium text-white mb-3'><AiFillCheckSquare size={22} className="inline text-[#0ba13b] mr-2" /> <span>Food Productions Machinery & accessories: Meat Further Processing Lines & Equipment, Ventless Deep Fryer, Bakery Lines, Production Equipment, Hygiene Equipment, Packing Machinery and many more.</span></p>
                </div>
                <button className="px-8 p-3 mt-3 bg-[#666666] hover:bg-white hover:text-black uppercase text-white font-bold">Contact us</button>
            </div>
        </div>
    );
};

export default AboutService;