import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className='sticky top-0 bg-slate-50 px-12 py-8 flex justify-center md:justify-between'>
            <div className='hidden md:block text-2xl font-bold'> Daily Bazar</div>
            <div className='flex gap-4 text-xl'>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/reviews">Reviews</CustomLink>
                <CustomLink to="/blogs">Blogs</CustomLink>
                <CustomLink to="/aboutUs">About Us</CustomLink>
            </div>
        </nav>
    );
};

export default Header;