'use client';

import React, { useState, useEffect } from 'react';
import './Nav.scss';
import {  FaSun, FaMoon } from 'react-icons/fa';
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";



const Nav: React.FC = () => {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

    useEffect(() => {
        // Initialize theme based on local storage
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            setIsDarkTheme(true);
            document.body.classList.add('dark-theme');
        } else {
            setIsDarkTheme(false);
            document.body.classList.remove('dark-theme');
        }
    }, []);

    const toggle = () => {
        setToggleMenu(prev => !prev);
    };

    const toggleTheme = () => {
        if (isDarkTheme) {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        }
        setIsDarkTheme(prev => !prev);
    };

    return (
        <div className="hero">
            <nav>
                <h1 className="head"><a href="/">EYITAYO</a></h1>
                <ul className={`${toggleMenu ? 'active' : ''}`}>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/about" id="about">ABOUT</a></li>
                  <li><a href="/portfolio">PORTFOLIO</a></li> 
                    {/* <li><Link href="">SERVICES</Link></li> */}
                    <li><a href="/hire" id="hire">CONTACT</a></li>
                </ul>
                <div onClick={toggleTheme} id='icon'>
                    {isDarkTheme ? <FaMoon /> : <FaSun />}
                </div>
                <div onClick={toggle} className="bar">
                    {toggleMenu ? <TfiClose /> : <CiMenuFries />}
                </div>
            </nav>
        </div>
    );
};

export default Nav;
