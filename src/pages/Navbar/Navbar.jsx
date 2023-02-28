import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
const Navbar = () => {
    const menuList = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about'}>ABOUT US</Link></li>
        <li tabIndex={0}>
            <a className="justify-between">
                PRODUCTS
                <MdOutlineKeyboardArrowDown size={22}/>
            </a>
            <ul className="p-2 bg-base-200">
                <li><Link to={'/'}>SEASONINGS & FUNCTIONAL INGREDIENTS</Link></li>
                <li><Link to={'/'}>CASINGS SOLUTIONS</Link></li>
                <li><Link to={'/'}>STARTER CULTURES & RENNET</Link></li>
                <li><Link to={'/'}>BAKERY & CAKE SOLUTIONS</Link></li>
            </ul>
        </li>
        <li><Link to={'/'}>SHOP</Link></li>
        <li><Link to={'/blog'}>BLOGS</Link></li>
        <li><Link to={'/contact'}>CONTACT US</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-xl py-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuList}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">
                    <img className='w-3/4' src={logo} alt="" />
                </a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuList}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;