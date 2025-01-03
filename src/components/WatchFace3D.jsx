import React, { useState, useEffect, useRef } from 'react';
import './WatchFace3D.css';
import { BiBorderRadius } from 'react-icons/bi';

function WatchFace3D({ isAnimating, radius}) {
    const hrRef = useRef(null);
    const minRef = useRef(null);
    const secRef = useRef(null);
    const [smooth, setSmooth] = useState(false);
    const [border, setBorder] = useState("50%");
    const [size, setSize] = useState('160px')
    useEffect(() => {
        if (isAnimating) {
            const fullRotation = 360;
            const date = new Date();
            const hh = date.getHours();
            const mm = date.getMinutes();
            const ss = date.getSeconds();
            const ms = date.getMilliseconds();
            const hRotation = 30 * hh + mm / 2;
            const mRotation = 6 * mm + (smooth ? ss / 10 : 0);
            const sRotation = 6 * ss + (smooth ? 6 * (ms / 1000) : 0);

            hrRef.current.style.transition = 'transform 1.5s ease';
            minRef.current.style.transition = 'transform 1.5s ease';
            secRef.current.style.transition = 'transform 1.5s ease';

            hrRef.current.style.transform = `rotate(${hRotation + fullRotation}deg)`;
            minRef.current.style.transform = `rotate(${mRotation + (10 * fullRotation)}deg)`;
            secRef.current.style.transform = `rotate(${sRotation + (20 * fullRotation)}deg)`;

            setTimeout(() => {
                hrRef.current.style.transition = 'none';
                minRef.current.style.transition = 'none';
                secRef.current.style.transition = 'none';

                // Reset to the current time smoothly
                const resetToCurrentTime = () => {
                    const hh = date.getHours();
                    const mm = date.getMinutes();
                    const ss = date.getSeconds();

                    const hRotation = 30 * hh + mm / 2;
                    const mRotation = 6 * mm;
                    const sRotation = 6 * ss;

                    // hrRef.current.style.transition = 'transform 0.5s ease';
                    // minRef.current.style.transition = 'transform 0.5s ease';
                    // secRef.current.style.transition = 'transform 0.5s ease';

                    hrRef.current.style.transform = `rotate(${hRotation}deg)`;
                    minRef.current.style.transform = `rotate(${mRotation}deg)`;
                    secRef.current.style.transform = `rotate(${sRotation}deg)`;
                };

                setTimeout(resetToCurrentTime, 10);
            }, 1450);
        } else {
            const intervalId = setInterval(() => {
                const date = new Date();
                const hh = date.getHours();
                const mm = date.getMinutes();
                const ss = date.getSeconds();
                const ms = date.getMilliseconds();
                const hRotation = 30 * hh + mm / 2;
                const mRotation = 6 * mm + (smooth ? ss / 10 : 0);
                const sRotation = 6 * ss + (smooth ? 6 * (ms / 1000) : 0);

                if (hrRef.current) hrRef.current.style.transform = `rotate(${hRotation}deg)`;
                if (minRef.current) minRef.current.style.transform = `rotate(${mRotation}deg)`;
                if (secRef.current) secRef.current.style.transform = `rotate(${sRotation}deg)`;
            }, smooth ? 20 : 1000);
            
            return () => clearInterval(intervalId);
        }
    }, [isAnimating, smooth]);

    function handleDblClk() {
        setSmooth(!smooth);
    }

    return (
            <div className="watch-container" onDoubleClick={handleDblClk}>
            <div style={{borderRadius:border, width:size, height:size}} className="watch-clock">
                <div
                    style={{ '--t': '-8px', '--h': '50px', '--w': '12px' }}
                    ref={hrRef}
                    className="watch-hand1"
                >
                    <i></i>
                </div>
                <div
                    style={{ '--t': '-2px', '--h': '60px', '--w': '3px' }}
                    ref={minRef}
                    className="watch-hand2"
                >
                    <i></i>
                </div>
                <div
                    style={{ '--t': '0px', '--h': '60px', '--w': '1.25px' }}
                    ref={secRef}
                    className="watch-hand3"
                >
                    <i></i>
                </div>

                <span style={{ '--i': 1, '--dis': 'hidden' }}><b>1</b></span>
                <span style={{ '--i': 2, '--dis': 'hidden' }}><b>2</b></span>
                <span style={{ '--i': 3, '--dis': '' }}><b>3</b></span>
                <span style={{ '--i': 4, '--dis': 'hidden' }}><b>4</b></span>
                <span style={{ '--i': 5, '--dis': 'hidden' }}><b>5</b></span>
                <span style={{ '--i': 6, '--dis': '' }}><b>6</b></span>
                <span style={{ '--i': 7, '--dis': 'hidden' }}><b>7</b></span>
                <span style={{ '--i': 8, '--dis': 'hidden' }}><b>8</b></span>
                <span style={{ '--i': 9, '--dis': '' }}><b>9</b></span>
                <span style={{ '--i': 10, '--dis': 'hidden' }}><b>10</b></span>
                <span style={{ '--i': 11, '--dis': 'hidden' }}><b>11</b></span>
                <span style={{ '--i': 12, '--dis': '' }}><b>12</b></span>
                {/* <div className="watch-day" ref={dayRef}></div> */}
            </div>
        </div>
    );
}

export default WatchFace3D;
