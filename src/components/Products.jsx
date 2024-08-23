import React, { useState, useEffect, useRef } from "react";
import Products_json from "/public/assets/products.json";
import ProductBox from "./ProductBox";
import './Products.css';

const Products = ({isAnimating, product_type}) => {
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
            <h2 className="titleoftheshelf" id={product_type}>{product_type}</h2>
            <div className="prod-list" ref={prodListRef}>
                {Array.isArray(Prods) && Prods.length > 0 ? (
                    Prods.map((prod) => (
                        <ProductBox key={prod.id} prod={prod} isAnimating={isAnimating}/>
                    ))
                ) : (
                    <p>No products available</p>
                )}
            </div>
        </div>
        </div>
    );
};

export default Products;
