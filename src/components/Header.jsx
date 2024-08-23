import React from "react";
import './Header.css'

import logo from '../assets/gogol-logo.png'
import profile from '../assets/Profile.png'
import { MdShoppingCart } from "react-icons/md";
import { IoColorPalette } from "react-icons/io5";


window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const classNames = ['light', 'dark', 'cupcake', 'bumblebee', 'synthwave', 'dracula', 'green', 'luxury', 'night'];
let currentClassIndex = 0;
document.body.classList.add(classNames[currentClassIndex])
function ColorScheme(){
    document.body.classList.remove(classNames[currentClassIndex]);
    currentClassIndex = (currentClassIndex + 1) % classNames.length;
    document.body.classList.add(classNames[currentClassIndex]);
}

function Header({onTriggerAnimation}) {
    return (
        <>
        <header>
        <img className="logo" src={logo} alt="logo" onClick={onTriggerAnimation} />
        <nav>
            <ul className="nav_links">
                <li><a href="#">Smartwatches</a></li>
                <li><a href="#">Trackers</a></li>

            </ul>
        </nav>
        <div className="left-options">
            <a 
            className="profile-style" 
            onClick={(e) => {
                        e.preventDefault();
                        ColorScheme();
                    }}
            >
                <IoColorPalette className="order-logo"/>
            </a>
            <a className="profile-style" href="#"><MdShoppingCart className="order-logo"/></a>
            <a className="profile-style" onClick={(e) => {e.preventDefault();}}><img className="profile-circle" src={profile} alt="" /></a>
        </div>
        </header>
        </>
    )
}

export default Header;