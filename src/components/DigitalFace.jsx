import React, { useState, useEffect } from 'react';
import './DigitalFace.css';

import { IoFootsteps } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

function DigitalFace({wid}) {
    const [hrRef, setHrRef] = useState();
    const [minRef, setMinRef] = useState();
    const [secRef, setSecRef] = useState();
    const [dayRef, setDayRef] = useState();
    const [period, setPeriod] = useState('AM');

    const [widthClock , setWidthClock] = useState("")
    const [heightClock , setHeightClock] = useState("")

    const [isHeart, setIsHeart] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsHeart(prev => !prev);
        }, 1000); 

        return () => clearInterval(intervalId);
    }, []);
    
    useEffect(() => {
        const updateDateAndTime = () => {
            const date = new Date();
    
            let hh = date.getHours();
            let mm = date.getMinutes();
            const ss = date.getSeconds();
            const dd = date.getDate();
    
            hh = hh % 12 || 12;
    
            const formattedHH = hh.toString().padStart(2, '0');
            const formattedMM = mm.toString().padStart(2, '0');
            const formattedSS = ss.toString().padStart(2, '0');
            
            const periodMatch = date.toLocaleString('en-US', {
                timeZone: 'UTC',
                hour12: true,
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            }).match(/(AM|PM)$/);
    
            if (periodMatch) {
                setPeriod(periodMatch[0]);
            }
    
            setHrRef(formattedHH);
            setMinRef(formattedMM);
            setSecRef(formattedSS);
            setDayRef(dd);
        };
    
        updateDateAndTime();
    
        const intervalId = setInterval(updateDateAndTime, 1000);
    
        return () => clearInterval(intervalId);
    }, []);
    

    useEffect(() => {
        if (wid == true) {
            setWidthClock("80px")
            setHeightClock("115px")
        } else{
            setWidthClock("55px")
            setHeightClock("110px")
        }
    })

    return (
        <div style={{width: widthClock, height: heightClock }} className="digital-watch-container">
            <b>{isHeart ? <FaHeart /> : <FaRegHeart />} 64</b>
            <b  className='bold-digital1' id='boldDigital'>{hrRef}</b>
            <b className='bold-digital2' id='boldDigital'>{minRef}</b>
            <div><IoFootsteps/> 7534</div>
        </div>
    );
}

export default DigitalFace;
