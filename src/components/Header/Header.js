import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className='sticky top-0 bg-slate-50 px-12 py-8 flex justify-center md:justify-between'>
            <div className='hidden md:block text-2xl font-bold'> Daily Bazar</div>
            <div className='flex gap-4 text-lg font-semibold'>
                <CustomLink to="/">HOME</CustomLink>
                <CustomLink to="/reviews">REVIEWS</CustomLink>
                <CustomLink to="/dashboard">DASHBOARD</CustomLink>
                <CustomLink to="/blogs">BLOGS</CustomLink>
                <CustomLink to="/aboutUs">ABOUT US</CustomLink>
            </div>
        </nav>
    );
};

export default Header;