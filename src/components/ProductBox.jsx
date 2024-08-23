import React from "react";
import './ProdBox.css'

import WatchFace from "./WatchFace";

const ProductBox = ({ prod, isAnimating}) => {
    return ( 
        <div className="prods">
            <div className="prod-box">
            <img className="wa-face" src={prod.image} alt={prod.name} />
            <div className="wf-ele">
                {prod.watch && <WatchFace isAnimating={isAnimating} radius={prod.rad} size={prod.size}/>}
            </div>
            <h2 className="title">{prod.name}</h2>
            <div className="price">{prod.price}</div>
        </div>
        </div>
    );
}

export default ProductBox;
