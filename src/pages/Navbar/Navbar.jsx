import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'
import './Navbar.css'
const Navbar = () => {
    const [showDrop, setShowDrop] = useState(false)
    const menuList = <>
        <li onClick={() => setShowDrop(false)}><Link to={'/'}>HOME</Link></li>
        <li onClick={() => setShowDrop(false)}><Link to={'/about'}>ABOUT US</Link></li>
        <li tabIndex={0}>
            <a className="justify-between">
                PRODUCTS
                <MdOutlineKeyboardArrowDown size={22} />
            </a>
            <ul className="p-2 bg-white drop_menu">
                <li onClick={() => setShowDrop(false)}><Link to={'/seasonings'}>SEASONINGS & FUNCTIONAL INGREDIENTS</Link></li>
                <li onClick={() => setShowDrop(false)}><Link to={'/casing'}>CASINGS SOLUTIONS</Link></li>
                <li onClick={() => setShowDrop(false)}><Link to={'/starter'}>STARTER CULTURES & RENNET</Link></li>
                <li onClick={() => setShowDrop(false)}><Link to={'/bekary'}>BAKERY & CAKE SOLUTIONS</Link></li>
            </ul>
        </li>
        <li onClick={() => setShowDrop(false)}><Link to={'/shop'}>SHOP</Link></li>
        <li onClick={() => setShowDrop(false)}><Link to={'/blog'}>BLOGS</Link></li>
        <li onClick={() => setShowDrop(false)}><Link to={'/contact'}>CONTACT US</Link></li>
        <li onClick={() => setShowDrop(false)}><Link to={'/cart'}>CART</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-xl py-3 custom-navbar fixed top-0 left-0 mx-8">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="lg:hidden fixed top-5 right-3">
                        <FaBars onClick={() => setShowDrop(true)} size={24} />
                    </label>
                    <ul tabIndex={0} className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-white ${!showDrop && 'hidden'}`}>
                        {menuList}
                    </ul>
                </div>
                <Link to={'/'} className="normal-case text-xl">
                    <img className='w-full md:w-3/4' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex lg:mr-4">
                <ul className="menu menu-horizontal px-1 text-sm text-black menu_list">
                    {menuList}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;