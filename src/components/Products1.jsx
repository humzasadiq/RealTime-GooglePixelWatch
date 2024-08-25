import React, { useState, useEffect, useRef } from "react";
import Products_json from "/public/assets/products.json";
import ProductBox1 from "./ProductBox1";
import './Products.css';

const Products1 = ({isAnimating}) => {
    const [Prods, setProds] = useState([]);
    const prodListRef = useRef(null);

    useEffect(() => {
        console.log("Products component mounted");
        setProds(Products_json);
    }, []);

    // Drag functionality
    useEffect(() => {
        const prodList = prodListRef.current;
        let isDown = false;
        let startX;
        let scrollLeft;

        const mouseDownHandler = (e) => {
            isDown = true;
            prodList.classList.add('active');
            startX = e.pageX - prodList.offsetLeft;
            scrollLeft = prodList.scrollLeft;
        };

        const mouseLeaveHandler = () => {
            isDown = false;
            prodList.classList.remove('active');
        };

        const mouseUpHandler = () => {
            isDown = false;
            prodList.classList.remove('active');
        };

        const mouseMoveHandler = (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - prodList.offsetLeft;
            const walk = (x - startX) * 2; // scroll-fast
            prodList.scrollLeft = scrollLeft - walk;
        };

        prodList.addEventListener('mousedown', mouseDownHandler);
        prodList.addEventListener('mouseleave', mouseLeaveHandler);
        prodList.addEventListener('mouseup', mouseUpHandler);
        prodList.addEventListener('mousemove', mouseMoveHandler);

        return () => {
            prodList.removeEventListener('mousedown', mouseDownHandler);
            prodList.removeEventListener('mouseleave', mouseLeaveHandler);
            prodList.removeEventListener('mouseup', mouseUpHandler);
            prodList.removeEventListener('mousemove', mouseMoveHandler);
        };
    }, []);

    return (
        <div className="upper-shelf-container">
        <div className="shelf-container">
            <h2 className="titleoftheshelf" id='Trackers'>Trackers</h2>
            <div className="prod-list" ref={prodListRef}>
            {Array.isArray(Prods) && Prods.length > 0 ? (
                Prods.filter(prod => prod.type === "Digital").map((prod) => (
                    <ProductBox1 key={prod.id} prod={prod} isAnimating={isAnimating} />
                ))
            ) : (
                <p>No products available</p>
            )}

            </div>
        </div>
        </div>
    );
};

export default Products1;
