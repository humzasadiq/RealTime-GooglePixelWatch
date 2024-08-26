import React, { useState, useEffect } from 'react';
import './Tooltip.css';
import { TbHandClick } from "react-icons/tb";
import { TbHandFinger } from "react-icons/tb";

function Tooltip() {
    const [Istip, setIstip] = useState(true);
    const [isVisible, setIsVisible] = useState(true);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIstip(prev => !prev);
        }, 1000);

        const fadeTimeoutId = setTimeout(() => {
            setIsFading(true);
        }, 8000);

        const hideTimeoutId = setTimeout(() => {
            setIsVisible(false); 
        }, 10000); 

        return () => {
            clearInterval(intervalId);
            clearTimeout(fadeTimeoutId);
            clearTimeout(hideTimeoutId);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <div className={`tool-tip ${isFading ? 'hidden' : ''}`}>
                    {Istip ? <TbHandClick className='HC'/> : <TbHandFinger className='HF'/>}
                </div>
            )}
        </>
    );
}

export default Tooltip;
