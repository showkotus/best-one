import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import {FaBars} from 'react-icons/fa'
import './Navbar.css'
const Navbar = () => {
    const menuList = <>
        <li><Link to={'/'}>HOME</Link></li>
        <li><Link to={'/about'}>ABOUT US</Link></li>
        <li tabIndex={0}>
            <a className="justify-between">
                PRODUCTS
                <MdOutlineKeyboardArrowDown size={22} />
            </a>
            <ul className="p-2 bg-white drop_menu">
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
        <div className="navbar bg-base-100 shadow-xl py-3 custom-navbar fixed top-0 left-0 mx-8">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="lg:hidden fixed top-5 right-3">
                        <FaBars size={24}/>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white">
                        {menuList}
                    </ul>
                </div>
                <a className="normal-case text-xl">
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