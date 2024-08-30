import React, {useState, useEffect} from "react";
import './Header.css'

import logo from '/assets/gogol-logo.png'
import profile from '/assets/Profile.png'
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

function Header({onTriggerAnimation, setWatchColor}) {
    const WatchColor = ['#4d8fbe','#1F2020', '#E3598C', '#e67a00','#FFAB91', '#8fb17f'];
    const classNames = ['light','night', 'cupcake', 'bumblebee','dracula', 'green'];

    const [currentClassIndex, setCurrentClassIndex] = useState(0);
    const [currentPalette, setCurrentPalette] = useState(classNames[0]);

    useEffect(() => {
        document.body.classList.add(classNames[currentClassIndex]);
        setWatchColor(WatchColor[currentClassIndex]);
    
        return () => {
          document.body.classList.remove(classNames[currentClassIndex]);
        };
      }, [currentClassIndex]);
    
      function ColorScheme() {
        document.body.classList.remove(classNames[currentClassIndex]);
        const newIndex = (currentClassIndex + 1) % classNames.length;
        setCurrentClassIndex(newIndex);
        setCurrentPalette(classNames[newIndex]);
        setWatchColor(WatchColor[newIndex]);
    
        const event = new CustomEvent('paletteChange', { detail: classNames[newIndex] });
        window.dispatchEvent(event);
      }


    useEffect(() => {
        const handlePaletteChange = (event) => {
            setCurrentPalette(event.detail);
        };
        window.addEventListener('paletteChange', handlePaletteChange);
        return () => {
            window.removeEventListener('paletteChange', handlePaletteChange);
        };
    }, []);
    
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
            data-tooltip={currentPalette}
            className="profile-style" 
            onClick={(e) => {
                        e.preventDefault();
                        ColorScheme();
                    }}
            >
                <IoColorPalette className="order-logo"/>
            </a>
            <a data-tooltip="Cart" className="profile-style" href="#"><MdShoppingCart className="order-logo"/></a>
            <a data-tooltip="Profile" className="profile-style" onClick={(e) => {e.preventDefault();}}><img className="profile-circle" src={profile} alt="" /></a>
        </div>
        </header>
        </>
    )
}

export default Header;