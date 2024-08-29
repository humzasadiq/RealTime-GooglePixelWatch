import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaTag } from "react-icons/fa";
import './Accordian.css';

function Accordian() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordian-upper">
            <div className={`accordian-div ${isOpen ? 'open' : ''}`}>
                <div className="accordian-div-upper" onClick={toggleAccordion}>
                    <div className="accordian-tag">
                        <FaTag />
                    </div>
                    <div className="accordian-text">
                        <b>
                            Get 2 years of data for your smartwatch on us when you buy any Pixel Watch 3 (LTE). <sup>§§</sup>
                        </b>
                    </div>
                    <div className="accordian-btn">
                        <MdKeyboardArrowDown />
                    </div>
                </div>
                <div className="accordian-lower-div">
                    <hr />
                    <p>
                        Data from Google Fi Wireless to power your messaging, navigation, and music on the go. Texting works with your current phone number at no extra cost. Calling not supported. Return of the watch terminates data service.
                    </p>
                    <a className="buy-link" href="#">
                        Buy &gt;
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Accordian;
